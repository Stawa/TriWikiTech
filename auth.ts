import NextAuth, { Account, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  firestoreService,
  firestoreAdapter,
  firestoreAuth,
} from "@main/lib/firestore";

const providers = {
  github: "github",
  google: "google",
  credentials: "credentials",
};

const getUserId = (account: Account, user: User) => {
  if (account.provider === providers.credentials) {
    return `${providers.credentials}:${user.id?.split(":")[1]}`;
  }
  return `${providers[account.provider as keyof typeof providers]}:${account.providerAccountId}`;
};

const handleCredentialsAuth = async (
  credentials: Record<string, string> | undefined
) => {
  if (!credentials?.email || !credentials?.password) return null;

  try {
    const userCredential = await signInWithEmailAndPassword(
      firestoreAuth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;
    return {
      id: `credentials:${user.uid}`,
      name: user.displayName || user.email?.split("@")[0] || "User",
      email: user.email,
      image: user.photoURL,
    };
  } catch (error) {
    console.error("Error during sign in:", error);
    return null;
  }
};

const updateUserData = async (userId: string, userData: any) => {
  if (userData) {
    await firestoreService.addDocument("users", userId, userData);
  } else {
    await firestoreService.updateDocument("users", userId, {
      lastSignIn: new Date(),
    });
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        credentials: Partial<Record<"email" | "password", unknown>>,
        request: Request
      ) => {
        return handleCredentialsAuth(
          credentials as Record<string, string> | undefined
        );
      },
    }),
  ],
  adapter: firestoreAdapter,
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) return false;

      try {
        const userId = getUserId(account, user);

        const existingEmailUser = await firestoreService.queryCollection(
          "users",
          "email",
          "==",
          user.email
        );

        if (
          existingEmailUser.length > 1 &&
          account.provider === "credentials"
        ) {
          throw new Error("OAuthAccountNotLinked");
        }

        const existingUser = await firestoreService.queryCollection(
          "users",
          "id",
          "==",
          userId
        );

        if (existingUser.length === 0 && account.provider !== "credentials") {
          const customUserData = {
            id: userId,
            name: null,
            displayName: null,
            email: user.email || null,
            image: user.image || null,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            lastSignIn: new Date(),
            bio: "",
            isPublic: false,
          };
          await updateUserData(userId, customUserData);
        } else {
          await updateUserData(userId, null);
        }

        return true;
      } catch (error) {
        console.error("Error updating user data in Firestore:", error);
        return false;
      }
    },
    async session({ session, token }) {
      if (session.user) {
        const userId = token.sub as string;
        const userDoc = await firestoreService.getDocument("users", userId);
        if (userDoc) {
          session.user.id = userDoc.id;
          session.user.image = userDoc.image;
        }
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
