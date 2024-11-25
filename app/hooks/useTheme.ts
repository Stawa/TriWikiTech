import { useState, useEffect } from "react";
import { getCookie, setCookie } from "~/utils/cookie";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return getCookie("theme") || "system";
    }
    return "system";
  });

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setCookie("theme", theme, {
      path: "/",
      expires: "never",
    });
  }, [isDarkMode, theme]);

  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        const root = window.document.documentElement;
        if (mediaQuery.matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      };
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  const toggleTheme = (newTheme?: string) => {
    setTheme((current) => {
      if (newTheme) return newTheme;
      if (current === "light") return "dark";
      if (current === "dark") return "system";
      return "light";
    });
  };

  return { isDarkMode, toggleTheme, theme };
}
