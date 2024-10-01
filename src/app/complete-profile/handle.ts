"use server";

import { auth } from "@main/auth";
import { firestoreService } from "@main/lib/firestore";

export async function updateProfile(profile: {
  name: string;
  displayName: string;
}) {
  const { name, displayName } = profile;
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    throw new Error("User not authenticated");
  }

  const { id } = session.user;

  const user = await firestoreService.queryCollection("users", "id", "==", id);

  if (!user) {
    throw new Error("User not found");
  }

  const updatedUser = {
    name,
    displayName,
  };

  await firestoreService.updateDocument("users", id, updatedUser);

  return updatedUser;
}
