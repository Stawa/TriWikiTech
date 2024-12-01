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
  username?: string,
  fullName?: string
): UserProfile {
  const userId = `${providerName}:${userCredential.user.uid}`;
  const userProfile: UserProfile = {
    userId,
    username: username || "",
    fullName: fullName || "",
    emailAddress: userCredential.user.email || "",
    avatarUrl: userCredential.user.photoURL || "",
    userBio: "",
    authProvider: providerName,
    authId: userCredential.user.uid,
    joinedAt: new Date(),
    lastActive: new Date(),
    earnedBadges: [],
    activeBadges: [],
    stats: {
      completedLessons: 0,
      totalAchievements: 0,
      totalScore: 0,
      rankTitle: "Beginner",
      enrolledCourses: {},
      activityFeed: [],
    },
    links: {},
  };
  return userProfile;
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
      lastActive: new Date(),
    });
  }

  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return sessionStorage.commitSession(session);
}

async function register(
  email: string,
  password: string,
  username: string,
  fullName: string
): Promise<string> {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const token = await userCredential.user.getIdToken();
  const userProfile = createUserProfile(
    userCredential,
    "credentials",
    username,
    fullName
  );

  await firestoreService.setDocument("users", userProfile.userId, userProfile);

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

async function checkUsernameAvailability(username: string): Promise<boolean> {
  const users = await firestoreService.queryCollection(
    "users",
    "username",
    "==",
    username
  );
  return users.length > 0;
}

const loginWithGoogle = createSocialLoginFunction(new GoogleAuthProvider());
const loginWithGitHub = createSocialLoginFunction(new GithubAuthProvider());

export {
  register,
  login,
  loginWithGoogle,
  loginWithGitHub,
  checkUsernameAvailability,
};
