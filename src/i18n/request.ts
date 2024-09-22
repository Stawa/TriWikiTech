import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@default/services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`@main/messages/${locale}.json`)).default,
  };
});
