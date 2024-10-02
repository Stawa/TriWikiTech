import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import Script from "next/script";

import { arimo } from "@app/fonts";
import SessionProviderWrapper from "@default/components/session";
import "./globals.css";

const CanonicalUrl = dynamic(() => import("@components/canonical"), {
  ssr: false,
});

const Footer = dynamic(() => import("@components/footer"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@components/navbar"), {
  ssr: false,
});
const CookieBanner = dynamic(() => import("@components/cookies/banner"), {
  ssr: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triwikitech.my.id"),
  title: {
    default: "TriWikiTech - Program Wiki",
    template: "%s - TriWikiTech",
  },
  description:
    "TriWikiTech: Learn programming, take quizzes, and practice coding with interactive tools and online compilers.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://triwikitech.my.id",
    title: "TriWikiTech - Program Wiki",
    siteName: "TriWikiTech",
    description:
      "Interactive platform for learning programming languages and testing your knowledge.",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "TriWikiTech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TriWikiTech - Program Wiki",
    description:
      "Interactive platform for learning programming languages and testing your knowledge.",
    images: ["/android-chrome-192x192.png"],
  },
  keywords: [
    "programming",
    "learning",
    "triwikitech",
    "compiler",
    "interactive",
    "try",
    "language",
    "now",
    "c",
    "code",
    "quizzes",
    "coding",
    "online tools",
    "practice",
    "tutorials",
    "algorithms",
    "data structures",
    "web development",
    "mobile app development",
    "artificial intelligence",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const cookieConsent = cookies().get("cookieConsent")?.value || "false";

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <CanonicalUrl />
        {cookieConsent === "true" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-XYL68P0QK4"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XYL68P0QK4');
              `}
            </Script>
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "o99d4baayk");
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${arimo.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <SessionProviderWrapper>
              <Navbar />
              {children}
              <Footer />
              <CookieBanner />
            </SessionProviderWrapper>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
