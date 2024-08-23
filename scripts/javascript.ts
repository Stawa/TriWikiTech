import { promises as fs } from "fs";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import { exec } from "child_process";

export async function runJavaScriptCode(
  code: string,
  tempDir: string
): Promise<{ output: string; runtime: string; error?: string }> {
  const fileName = `${uuidv4()}.js`;
  const filePath = join(tempDir, fileName);

  try {
    await fs.writeFile(filePath, code);

    const start = Date.now();
    const { output, error } = await runNodeCommand(filePath);
    const end = Date.now();
    const runtime = end - start;

    await fs.unlink(filePath);

    if (error) {
      return { output: error, runtime: `${runtime / 1000}s (${runtime}ms)` };
    }

    return { output, runtime: `${runtime / 1000}s (${runtime}ms)` };
  } catch (error) {
    console.error("Error running JavaScript code:", error);
    throw error;
  }
}

async function runNodeCommand(
  filePath: string
): Promise<{ output: string; error: string }> {
  return new Promise((resolve) => {
    exec(`node ${filePath}`, (error, stdout, stderr) => {
      resolve({
        output: error ? stderr : stdout,
        error: error ? `Execution failed: ${error.message}` : stderr,
      });
    });
  });
}
