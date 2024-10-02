"use server";

import { firestoreService } from "@main/lib/firestore";
import { User } from "@components/user";

export async function getUserByUsername(
  username: string
): Promise<User | null> {
  try {
    const users = await firestoreService.queryCollection(
      "users",
      "name",
      "==",
      username
    );

    if (users.length === 0) {
      return null;
    }

    const userDoc = users[0];
    return {
      id: userDoc.id,
      name: userDoc.name,
      displayName: userDoc.displayName,
      email: userDoc.email,
      image: userDoc.image,
      provider: userDoc.provider,
      providerAccountId: userDoc.providerAccountId,
      lastSignIn: userDoc.lastSignIn.toDate(),
      isPublic: userDoc.isPublic ?? false,
      bio: userDoc.bio,
      badges: userDoc.badges ?? [],
      createdAt: userDoc.createdAt.toDate(),
      progress: userDoc.progress ?? {},
    };
  } catch (error) {
    console.error("Error fetching user data from Firestore:", error);
    return null;
  }
}
