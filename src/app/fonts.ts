import { Arimo } from "next/font/google";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
  style: ["normal"],
});

export { arimo };
