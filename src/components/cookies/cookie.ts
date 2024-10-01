"use server";

import { cookies } from "next/headers";

export async function setCookieConsent(consent: string) {
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  cookies().set("cookieConsent", consent, {
    expires: oneYearFromNow,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
}

export async function getCookieConsent() {
  return cookies().get("cookieConsent")?.value;
}
