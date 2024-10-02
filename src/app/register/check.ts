"use server";

import { firestoreService, adminApp } from "@main/lib/firestore";
import { User } from "@components/user";

interface Output {
  emailExists: boolean;
  emailInUseWithDifferentProvider: boolean;
}

async function checkEmailExists(
  email: string,
  isLogin: boolean
): Promise<Output> {
  const lowercaseEmail = email.toLowerCase();
  const existingUsers = await firestoreService.queryCollection(
    "users",
    "email",
    "==",
    lowercaseEmail
  );

  if (existingUsers.length === 0) {
    return { emailExists: false, emailInUseWithDifferentProvider: false };
  }

  if (isLogin) {
    for (const user of existingUsers) {
      if (user.provider === "credentials") {
        return { emailExists: true, emailInUseWithDifferentProvider: false };
      }
      if (user.provider !== "credentials") {
        return { emailExists: true, emailInUseWithDifferentProvider: true };
      }
    }
  }

  return { emailExists: true, emailInUseWithDifferentProvider: false };
}

async function checkUsernameExists(username: string): Promise<boolean> {
  const lowercaseUsername = username.toLowerCase();
  const existingUsers = await firestoreService.queryCollection(
    "users",
    "name",
    "==",
    lowercaseUsername
  );

  return existingUsers.length > 0;
}

async function addUser(
  email: string,
  username: string,
  displayName: string,
  password: string
): Promise<void> {
  const userCredential = await adminApp.auth().createUser({
    email: email,
    emailVerified: false,
    password: password,
    displayName: displayName,
    disabled: false,
  });

  const user: User = {
    id: `credentials:${userCredential.uid}`,
    name: username,
    displayName,
    email: email.toLowerCase(),
    image: "",
    provider: "credentials",
    providerAccountId: userCredential.uid,
    lastSignIn: new Date(),
    isPublic: false,
    bio: "",
    badges: ["Member"],
    createdAt: new Date(),
    progress: {},
  };

  await firestoreService.addDocument(
    "users",
    `credentials:${userCredential.uid}`,
    user
  );
}

async function checkAndAddUser(
  email: string,
  username: string,
  displayName: string,
  password: string,
  isLogin: boolean
): Promise<boolean> {
  await validateEmail(email, isLogin);
  if (!isLogin) {
    await validateUsername(username);
    await addUser(email, username, displayName, password);
  }
  return true;
}

async function validateEmail(email: string, isLogin: boolean): Promise<void> {
  const { emailExists, emailInUseWithDifferentProvider } =
    await checkEmailExists(email, isLogin);

  if (emailExists) {
    if (isLogin && emailInUseWithDifferentProvider) {
      throw new Error("EmailInUseWithDifferentProvider");
    } else if (!isLogin) {
      throw new Error("EmailAlreadyExists");
    }
  }
}

async function validateUsername(username: string): Promise<void> {
  if (await checkUsernameExists(username)) {
    throw new Error("UsernameAlreadyExists");
  }
}

export { checkAndAddUser, checkEmailExists, checkUsernameExists };
