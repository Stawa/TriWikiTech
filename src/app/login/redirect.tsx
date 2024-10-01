"use server";

import { signIn, signOut } from "@main/auth";

interface SignInWithProviderProps {
  provider: "github" | "google" | "credentials";
  formData?: {
    email: string;
    password: string;
    redirect: boolean;
  };
}

async function signInWithProvider({
  provider,
  formData,
}: SignInWithProviderProps) {
  const signInOptions = provider === "credentials" ? { ...formData } : {};
  return await signIn(provider, { ...signInOptions, redirectTo: `/complete-profile` });
}

async function userSignOut() {
  await signOut({ redirectTo: "/" });
}

export { signInWithProvider, userSignOut, type SignInWithProviderProps };
