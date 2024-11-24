import { useState, useEffect } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleTheme };
}
