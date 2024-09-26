import type { Metadata } from "next";
import { arimo } from "@app/fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import Script from "next/script";
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
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <CanonicalUrl />
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
      </head>
      <body className={`${arimo.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
