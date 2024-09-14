import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@default/components/footer";
import Navbar from "@default/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triwikitech.my.id"),
  title: {
    default: "TriWikiTech - Program Wiki",
    template: "%s - TriWikiTech",
  },
  description:
    "TriWikiTech is an interactive platform for learning programming languages, taking quizzes to test your knowledge, and using online compilers for hands-on coding practice.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
