import { serverOnly$ } from "vite-env-only/macros";

import enTranslation from "~/i18n/locales/en/home";
import enNavbarTranslation from "~/i18n/locales/en/navbar";
import idTranslation from "~/i18n/locales/id/home";
import idNavbarTranslation from "~/i18n/locales/id/navbar";
import enFooterTranslation from "~/i18n/locales/en/footer";
import idFooterTranslation from "~/i18n/locales/id/footer";

export const supportedLngs = ["id", "en"];
export const fallbackLng = "id";
export const defaultNS = "home";

export const resources = serverOnly$({
  en: { home: enTranslation, navbar: enNavbarTranslation, footer: enFooterTranslation },
  id: { home: idTranslation, navbar: idNavbarTranslation, footer: idFooterTranslation },
});
