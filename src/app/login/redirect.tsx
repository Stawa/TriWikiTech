"use server";

import { signIn, signOut } from "@main/auth";

interface SignInWithProviderProps {
  provider: "github" | "google";
  redirectTo: string;
}

async function signInWithProvider({
  provider,
  redirectTo,
}: SignInWithProviderProps) {
  await signIn(provider, { redirectTo });
}

async function userSignOut() {
  await signOut();
}

export { signInWithProvider, userSignOut };
