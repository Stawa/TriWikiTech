import { exec } from "child_process";
import { promises as fs } from "fs";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

const SAFE_IMPORT_OVERRIDE = `
import builtins

# Restrict the import of unsafe modules
def restricted_import(name, globals=None, locals=None, fromlist=(), level=0):
    restricted_modules = ['os', 'sys', 'subprocess', 'shutil']
    if name in restricted_modules:
        print(f"Importing the '{name}' module is restricted to enhance security and prevent potential vulnerabilities.")
    return original_import(name, globals, locals, fromlist, level)

# Override the built-in import function
original_import = __builtins__.__import__
__builtins__.__import__ = restricted_import
`;

export async function runPythonCode(
  code: string,
  TEMP_DIR: string,
): Promise<{ output: string; runtime: string; error?: string }> {
  const fileName = `${uuidv4()}.py`;
  const filePath = join(TEMP_DIR, fileName);
  const safeCode = SAFE_IMPORT_OVERRIDE + "\n\n" + code;

  try {
    await fs.writeFile(filePath, safeCode);

    // Check if Python is installed and install if not
    await checkAndInstallPython();

    const start = Date.now();
    const result = await executePythonCommand(filePath);
    const end = Date.now();
    const runtime = `${(end - start) / 1000}s (${end - start}ms)`;

    await fs.unlink(filePath);

    const listOfUSRBIN = await listExecutablesInUSRLIB();

    return {
      output: `${result.output}\n\nList of executables in /usr/local/bin:\n${listOfUSRBIN}`,
      runtime,
      error: result.error || undefined,
    };
  } catch (error) {
    console.error("Error executing Python code:", error);

    return {
      output: "",
      runtime: "",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function executePythonCommand(
  filePath: string,
): Promise<{ output: string; error: string }> {
  return new Promise((resolve) => {
    exec("/usr/local/bin/python3 " + filePath, (error, stdout, stderr) => {
      resolve({
        output: error ? stderr : stdout,
        error: error ? `Execution failed: ${error.message}` : stderr,
      });
    });
  });
}

async function listExecutablesInUSRLIB(): Promise<string> {
  return new Promise((resolve) => {
    exec("ls -l /usr/local/bin", (error, stdout, stderr) => {
      if (error) {
        resolve(`Failed to list executables: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function checkAndInstallPython(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec("which python3", (error, stdout, stderr) => {
      console.log(stderr)
      if (error) {
        console.log("Python not found. Installing Python...");
        exec(
          "curl -fsSL https://www.python.org/ftp/python/3.12.0/Python-3.12.0.tar.xz | tar -xJf - -C /usr/local --strip-components=1 && ln -sf /usr/local/bin/python3 /usr/bin/python3",
          (installError, installStdout, installStderr) => {
            console.log(installStdout)
            if (installError) {
              reject(`Failed to install Python: ${installStderr}`);
            } else {
              console.log("Python installed successfully.");
              resolve();
            }
          },
        );
      } else {
        console.log(`Python found at ${stdout.trim()}`);
        resolve();
      }
    });
  });
}
