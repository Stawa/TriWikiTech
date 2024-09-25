import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Stawa/TriWikiTech/commits/main"
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch latest commit: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    const latestCommitUrl = `https://github.com/Stawa/TriWikiTech/commit/${data.sha}`;

    return NextResponse.json({ latestCommitUrl });
  } catch (error) {
    console.error("Error fetching latest commit:", error);
    return NextResponse.json(
      { error: "Failed to fetch latest commit" },
      { status: 500 }
    );
  }
}
