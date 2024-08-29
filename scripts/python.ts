import { spawn } from "child_process";
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
original_import = builtins.__import__
builtins.__import__ = restricted_import
`;

export async function runPythonCode(
  code: string,
  TEMP_DIR: string,
): Promise<{ runtime: string; output: string; error?: string }> {
  const fileName = `${uuidv4()}.py`;
  const filePath = join(TEMP_DIR, fileName);
  const safeCode = SAFE_IMPORT_OVERRIDE + "\n\n" + code;

  try {
    await fs.writeFile(filePath, safeCode);

    const start = Date.now();
    const output = await executePythonCommand(filePath);
    const end = Date.now();
    const runtime = `${(end - start) / 1000}s (${end - start}ms)`;

    await fs.unlink(filePath);

    return { runtime, output };
  } catch (error) {
    console.error("Error executing Python code:", error);
    return {
      output: "",
      runtime: "",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function executePythonCommand(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("python", [filePath]);
    let output = "";

    pythonProcess.stdout.on("data", (data) => {
      const dataString = data.toString();
      output += dataString;
    });

    pythonProcess.stderr.on("data", (data) => {
      const dataString = data.toString();
      output += dataString;
    });

    pythonProcess.on("close", (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(`Python process exited with code ${code}`));
      }
    });
  });
}
