import { json } from "@remix-run/node";
import { getCookie } from "~/utils/cookie";

async function getTranslation(request: Request, namespace: string) {
  const locale = getCookie("language", request) || "en";
  const url = new URL(request.url);
  const host = url.host;
  const protocol = url.protocol;
  const translationsResponse = await fetch(
    `${protocol}//${host}/api/locales?lng=${locale}&ns=${namespace}`
  );
  const homeTranslations = await translationsResponse.json();
  return json(homeTranslations);
}

export default getTranslation;
