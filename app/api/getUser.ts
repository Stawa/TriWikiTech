import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { getUser, getUserById } from "~/utils/getUser";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const useRequest = url.searchParams.get("request") === "true";
    const userIdParam = url.searchParams.get("userId");

    if (!useRequest && !userIdParam) {
      return json(
        { error: "Invalid request: userId is required when not using request" },
        { status: 400 }
      );
    }

    let userResponse;

    if (useRequest) {
      userResponse = await getUser(request);
    } else {
      userResponse = await getUserById(userIdParam!);
    }

    if (!userResponse) {
      return json({ error: "User not found" }, { status: 404 });
    }

    return json(userResponse);
  } catch (error) {
    console.error("Error fetching user:", error);
    if (
      error instanceof Error &&
      error.message.includes("not a valid resource path")
    ) {
      return json({ error: "Invalid user ID format" }, { status: 400 });
    }
    return json({ error: "Internal server error" }, { status: 500 });
  }
};
