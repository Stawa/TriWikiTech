import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  UserCredential,
  AuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { firestoreService, auth } from "~/services/firebase.server";
import { createCookie, createCookieSessionStorage } from "@remix-run/node";
import type { UserProfile } from "~/types/user";

const SESSION_MAX_AGE = 60 * 60 * 24 * 1000; // 24 hours

const sessionCookie = createCookie("session", {
  httpOnly: true,
  maxAge: SESSION_MAX_AGE,
});

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session",
    httpOnly: true,
    maxAge: SESSION_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secrets: [import.meta.env.VITE_SESSION_SECRET!],
    secure: import.meta.env.VITE_NODE_ENV === "production",
  },
});

function createUserProfile(
  userCredential: UserCredential,
  providerName: string,
  displayName?: string
): UserProfile {
  const userId = `${providerName}:${userCredential.user.uid}`;
  return {
    id: userId,
    name: userCredential.user.displayName || "",
    displayName: displayName || userCredential.user.displayName || "",
    email: userCredential.user.email || "",
    image: userCredential.user.photoURL || "",
    bio: "",
    provider: providerName,
    providerAccountId: userCredential.user.uid,
    createdAt: new Date(),
    lastSignIn: new Date(),
    badges: [],
    progress: {},
    displayedBadges: [],
  };
}

async function handleAuthentication(
  authMethod: () => Promise<UserCredential>,
  providerName: string
): Promise<string> {
  const userCredential = await authMethod();
  const userId = `${providerName}:${userCredential.user.uid}`;

  const existingUser = await firestoreService.getDocument("users", userId);

  if (!existingUser) {
    const userProfile = createUserProfile(userCredential, providerName);
    await firestoreService.setDocument("users", userId, userProfile);
  } else {
    await firestoreService.updateDocument("users", userId, {
      lastSignIn: new Date(),
    });
  }

  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return sessionStorage.commitSession(session);
}

async function register(
  email: string,
  password: string,
  displayName: string
): Promise<string> {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const token = await userCredential.user.getIdToken();
  const userProfile = createUserProfile(
    userCredential,
    displayName,
    "credentials"
  );

  await firestoreService.setDocument("users", userProfile.id, userProfile);

  return sessionCookie.serialize(token);
}

function login(email: string, password: string): Promise<string> {
  return handleAuthentication(
    () => signInWithEmailAndPassword(auth, email, password),
    "credentials"
  );
}

function createSocialLoginFunction(provider: AuthProvider) {
  return (): Promise<string> =>
    handleAuthentication(
      () => signInWithRedirect(auth, provider),
      provider.providerId
    );
}

const loginWithGoogle = createSocialLoginFunction(new GoogleAuthProvider());
const loginWithGitHub = createSocialLoginFunction(new GithubAuthProvider());

export { register, login, loginWithGoogle, loginWithGitHub };
