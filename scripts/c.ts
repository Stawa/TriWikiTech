import { exec } from "child_process";
import { promises as fs } from "fs";
import path from "path";

export async function runCCode(
  code: string,
  tempDir: string
): Promise<{ output: string; runtime: string; error?: string }> {
  const sourceFilePath = path.join(tempDir, "main.c");
  const binaryFilePath = path.join(tempDir, "main.exe");

  try {
    await fs.writeFile(sourceFilePath, code);

    const compileResult = await execPromise(
      `gcc ${sourceFilePath} -o ${binaryFilePath}`
    );

    if (compileResult.stderr) {
      return {
        output: compileResult.stderr,
        runtime: "",
        error: "Compilation error",
      };
    }

    const executeStart = Date.now();
    const executionResult = await execPromise(binaryFilePath);
    const executeEnd = Date.now();
    const executeTime = (executeEnd - executeStart) / 1000;

    return {
      output: executionResult.stdout || executionResult.stderr,
      runtime: `${executeTime}s`,
    };
  } catch (error) {
    return {
      output: "",
      runtime: "",
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  } finally {
    await cleanupFile(sourceFilePath);
    await cleanupFile(binaryFilePath);
  }
}

async function cleanupFile(filePath: string): Promise<void> {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    console.error(
      `Failed to delete file: ${
        err instanceof Error ? err.message : "Unknown error"
      }`
    );
  }
}

function execPromise(
  command: string
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    exec(command, (_error, stdout, stderr) => {
      resolve({ stdout, stderr });
    });
  });
}
