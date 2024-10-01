"use server";

import { auth } from "@main/auth";
import { firestoreService } from "@main/lib/firestore";

interface User {
  id: string;
  name: string;
  displayName: string;
  email: string;
  image: string;
  provider: string;
  providerAccountId: string;
  lastSignIn: Date;
  isPublic: boolean;
  bio: string;
}

async function getUserData(): Promise<User | null> {
  const session = await auth();
  if (!session?.user) return null;

  const { id } = session.user;
  if (!id) return null;

  try {
    const userDoc = await firestoreService.getDocument("users", id);
    if (!userDoc) return null;

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
    };
  } catch (error) {
    console.error("Error fetching user data from Firestore:", error);
    return null;
  }
}

export { getUserData, type User };
