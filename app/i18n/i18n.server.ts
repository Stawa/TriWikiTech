import { createCookie } from "@remix-run/node";
import { RemixI18Next } from "remix-i18next/server";
import * as i18n from "~/i18n/options";

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: import.meta.env.VITE_NODE_ENV === "production",
  httpOnly: true,
});

export default new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,
  },
  i18next: {
    ...i18n,
  },
});
