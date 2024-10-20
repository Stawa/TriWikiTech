import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next/react";
import { lazy, Suspense } from "react";
import type { UserProfile } from "~/types/user";
import { convertToUserProfile } from "~/utils/convert";
import { getUser } from "~/utils/getUser";
import { getCookie } from "~/utils/cookie";
import "~/tailwind.css";

const Footer = lazy(() => import("~/components/Footer"));
const Navbar = lazy(() => import("~/components/Navbar"));
const ErrorPage = lazy(() => import("~/components/404"));

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const { host, protocol } = new URL(request.url);
  const locale = getCookie("language", request) ?? "en";

  const navbarTranslationsUrl = `${protocol}//${host}/api/locales?lng=${locale}&ns=navbar`;
  const footerTranslationsUrl = `${protocol}//${host}/api/locales?lng=${locale}&ns=footer`;

  const [navbarTranslationsResponse, footerTranslationsResponse] =
    await Promise.all([
      fetch(navbarTranslationsUrl),
      fetch(footerTranslationsUrl),
    ]);

  const navbarTranslations = await navbarTranslationsResponse.json();
  const footerTranslations = await footerTranslationsResponse.json();

  const translations = {
    navbar: navbarTranslations,
    footer: footerTranslations,
  };

  return { user, locale, translations };
};

interface DocumentProps {
  children: React.ReactNode;
  showNavAndFooter?: boolean;
  is404?: boolean;
  locale?: string;
  user: UserProfile | null;
  translations?: Record<string, Record<string, string>>;
}

function Document({
  children,
  showNavAndFooter = true,
  is404 = false,
  locale = "en",
  user,
  translations = {},
}: DocumentProps) {
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {is404 && <title>TriWikiTech - 404</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {showNavAndFooter && (
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar
              translations={translations.navbar}
              user={user}
              currentLanguage={locale}
            />
          </Suspense>
        )}
        {children}
        {showNavAndFooter && (
          <Suspense fallback={<div>Loading...</div>}>
            <Footer translations={translations.footer} />
          </Suspense>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const loaderData = useLoaderData<{
    user: Record<string, any> | undefined;
    translations: Record<string, Record<string, string>>;
    locale: string;
  }>();
  const convertedUser =
    loaderData?.user?.user && Object.keys(loaderData.user.user).length > 0
      ? convertToUserProfile(loaderData.user.user)
      : null;

  useChangeLanguage(loaderData.locale);

  return (
    <Document
      locale={loaderData.locale}
      user={convertedUser}
      translations={loaderData.translations}
    >
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const errorDetails = isRouteErrorResponse(error)
    ? {
        statusCode: error.status,
        message: error.status === 404 ? "Page not found" : error.statusText,
      }
    : { statusCode: 500, message: "An unexpected error occurred" };

  return (
    <Document
      showNavAndFooter={false}
      is404={errorDetails.statusCode === 404}
      user={null}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage {...errorDetails} />
      </Suspense>
    </Document>
  );
}
