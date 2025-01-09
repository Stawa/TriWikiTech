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
  useNavigation,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";

import type { UserProfile } from "~/types/user";
import { getUser } from "~/utils/getUser";
import { getCookie } from "~/utils/cookie";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import ErrorPage from "~/components/404";
import ScrollToTop from "~/components/ScrollToTop";
import { SearchProvider, useSearch } from "~/context/SearchContext";
import "~/tailwind.css";

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
  const theme = getCookie("theme", request) ?? "light";

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

  return { user, locale, translations, theme };
};

interface DocumentProps {
  children: React.ReactNode;
  showNavAndFooter?: boolean;
  is404?: boolean;
  locale?: string;
  user: UserProfile | null;
  translations?: Record<string, Record<string, string>>;
  theme?: string;
}

interface FooterTranslations {
  learnCodeGrow: string;
  allRightsReserved: string;
  designedBy: string;
  footerLinks: {
    title: string;
    termsOfService: string;
    privacyPolicy: string;
  };
  socialLinks: {
    title: string;
  };
}

import { createContext, useContext } from "react";

const SidebarContext = createContext<{ isSidebarOpen: boolean }>({ isSidebarOpen: false });
export const useSidebar = () => useContext(SidebarContext);

function Document({
  children,
  showNavAndFooter = true,
  is404 = false,
  locale = "en",
  user,
  translations = {},
  theme = "light",
}: DocumentProps) {
  const navigation = useNavigation();
  const loadingBarRef = useRef<React.ElementRef<typeof LoadingBar> | null>(null);
  const [activeTheme, setActiveTheme] = useState<string>(theme);
  const { isSearchOpen } = useSearch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const updateTheme = (e: MediaQueryListEvent) => {
        setActiveTheme(e.matches ? "dark" : "light");
      };

      setActiveTheme(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", updateTheme);

      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, [theme]);

  useEffect(() => {
    if (navigation.state === "loading") {
      loadingBarRef.current?.continuousStart();
    } else {
      loadingBarRef.current?.complete();
    }
  }, [navigation.state]);

  const finalTheme = theme === "system" ? activeTheme : theme;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`!scroll-smooth ${finalTheme === "dark" ? "dark" : ""}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {is404 && <title>TriWikiTech - 404</title>}
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <LoadingBar color="#4f46e5" ref={loadingBarRef} />
        <SidebarContext.Provider value={{ isSidebarOpen }}>
          {showNavAndFooter && (
            <Navbar
              user={user}
              translations={translations.navbar}
              currentLanguage={locale}
              onSidebarChange={setIsSidebarOpen}
            />
          )}
          <ScrollToTop />
          <main
            className={`pt-16 transition-all duration-300 ${
              isSearchOpen || isSidebarOpen ? "blur-sm brightness-50" : ""
            }`}
          >
            {children}
          </main>
          {showNavAndFooter && (
            <Footer
              translations={translations.footer as unknown as FooterTranslations}
              className={isSearchOpen || isSidebarOpen ? "blur-sm brightness-50" : ""}
            />
          )}
        </SidebarContext.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { locale, user, translations, theme } = useLoaderData<typeof loader>();

  return (
    <SearchProvider>
      <Document
        showNavAndFooter={true}
        locale={locale}
        user={user.user}
        translations={translations}
        theme={theme}
      >
        <Outlet />
      </Document>
    </SearchProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const navigation = useNavigation();
  const loadingBarRef = useRef<any>(null);

  useEffect(() => {
    if (navigation.state === "loading") {
      loadingBarRef.current?.continuousStart();
    } else {
      loadingBarRef.current?.complete();
    }
  }, [navigation.state]);

  if (isRouteErrorResponse(error)) {
    return (
      <SearchProvider>
        <Document showNavAndFooter={false} is404 user={null} theme="system">
          <LoadingBar color="#4f46e5" ref={loadingBarRef} />
          <ErrorPage statusCode={error.status} message={error.data} />
        </Document>
      </SearchProvider>
    );
  }

  return (
    <SearchProvider>
      <Document showNavAndFooter={false} is404 user={null} theme="system">
        <LoadingBar color="#4f46e5" ref={loadingBarRef} />
        <ErrorPage
          statusCode={500}
          message="Something went wrong. Please try again later."
        />
      </Document>
    </SearchProvider>
  );
}
