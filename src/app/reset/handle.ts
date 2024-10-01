"use server";

import { sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { firestoreAuth, firestoreService } from "@main/lib/firestore";

async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const users = await firestoreService.queryCollection(
      "users",
      "email",
      "==",
      email
    );
    return users.length > 0 && users[0].provider === "credentials";
  } catch (error) {
    console.error("Error checking email existence:", error);
    return false;
  }
}

export async function handleResetPassword(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    const emailExists = await checkEmailExists(email);
    if (!emailExists) {
      return {
        success: false,
        message: "noAccountFound",
      };
    }

    await sendPasswordResetEmail(firestoreAuth, email);

    return {
      success: true,
      message: "resetEmailSent",
    };
  } catch (error) {
    console.error("Error sending password reset email:", error);
    return {
      success: false,
      message: "resetEmailError",
    };
  }
}

export async function handlePasswordReset(
  oobCode: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  try {
    await confirmPasswordReset(firestoreAuth, oobCode, newPassword);

    return {
      success: true,
      message: "resetSuccess",
    };
  } catch (error) {
    console.error("Error resetting password:", error);
    return handlePasswordResetError(error);
  }
}

function handlePasswordResetError(error: unknown): {
  success: boolean;
  message: string;
} {
  if (isInvalidActionCodeError(error)) {
    return {
      success: false,
      message: "invalidResetCode",
    };
  }
  return {
    success: false,
    message: "resetError",
  };
}

function isInvalidActionCodeError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "auth/invalid-action-code"
  );
}
