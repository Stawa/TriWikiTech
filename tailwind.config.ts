import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionDelay: {
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "900": "900ms",
        "1000": "1000ms",
      },
      keyframes: {
        reveal: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        revealFromDown: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        smoothReveal: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "50%": { transform: "translateY(10px)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "text-reveal": "reveal 0.8s ease-out forwards",
        "text-reveal-from-down": "revealFromDown 0.8s ease-out forwards",
        "smooth-reveal": "smoothReveal 0.5s ease-out forwards",
        "smooth-reveal-long": "smoothReveal 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
