"use server";

import { auth } from "@main/auth";

interface User {
  name: string;
  email: string;
  avatar: string;
}

async function getUserData(): Promise<User | null> {
  const session = await auth();
  if (!session?.user) return null;

  const { name, email, image: avatar } = session.user;
  return {
    name: name ?? "",
    email: email ?? "",
    avatar: avatar ?? "",
  };
}

export { getUserData, type User };
