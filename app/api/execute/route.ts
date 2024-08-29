import { NextRequest, NextResponse } from "next/server";
import {
  runCCode,
  runJavaScriptCode,
  runPythonCode,
  runCppCode,
} from "@default/scripts";
import { promises as fs } from "fs";
import { join } from "path";

const TEMP_DIR = join(process.cwd(), "tmp");
export const runtime = "nodejs";

async function ensureTempDir() {
  try {
    await fs.mkdir(TEMP_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating temporary directory:", error);
    throw new Error("Unable to create temporary directory");
  }
}

export async function POST(request: NextRequest) {
  const { code, language }: { code: string; language: string } =
    await request.json();

  const availableLanguage: Record<
    string,
    (
      code: string,
      TEMP_DIR: string,
    ) => Promise<{ output: string; runtime: string; error?: string }>
  > = {
    javascript: runJavaScriptCode,
    python: runPythonCode,
    c: runCCode,
    cpp: runCppCode,
  };

  if (!(language in availableLanguage)) {
    return NextResponse.json(
      { output: "Unsupported language" },
      { status: 400 },
    );
  }

  try {
    await ensureTempDir();

    const result = await availableLanguage[language](code, TEMP_DIR);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error executing code:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { output: "Error executing code", error: errorMessage },
      { status: 500 },
    );
  }
}
