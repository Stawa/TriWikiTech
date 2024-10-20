import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { firestoreService } from "~/services/firebase.server";
import { getUserById } from "~/utils/getUser";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  const { userId, displayedBadges } = await request.json();

  if (!userId || !Array.isArray(displayedBadges)) {
    return json(
      {
        error: "Invalid request: userId and displayedBadges array are required",
      },
      { status: 400 }
    );
  }

  const user = await getUserById(userId);

  if (!user) {
    return json({ error: "User not found" }, { status: 404 });
  }

  try {
    await firestoreService.updateDocument("users", userId, { displayedBadges });

    return json({
      success: true,
      message: "Displayed badges updated successfully",
    });
  } catch (error) {
    console.error("Error updating displayed badges:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
};
