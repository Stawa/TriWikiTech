"use client";

import { useState, useEffect } from "react";
import { IoMdCode } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

interface MenuItem {
  title: string;
  href: string;
  enabled: boolean;
  blank: boolean;
}

interface NavbarMenu {
  [key: string]: MenuItem;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const NavbarMenus: NavbarMenu = {
    Quiz: {
      title: "Quiz",
      href: "#",
      enabled: false,
      blank: true,
    },
    CodeCompilers: {
      title: "Code Compilers",
      href: "/compiler",
      enabled: true,
      blank: true,
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b-2 border-indigo-500 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <h1 className="text-2xl font-bold text-indigo-500 flex items-center">
                <IoMdCode className="mr-2 animate-spin-slow animate-pulse" />
                <span className="animate-pulse">Tri</span>
                <span className="animate-pulse">Wiki</span>
                <span className="animate-pulse">Tech</span>
              </h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {Object.keys(NavbarMenus).map((key) => {
                const { title, href, enabled, blank } = NavbarMenus[key];
                return (
                  <a
                    key={key}
                    href={enabled ? href : "#"}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      enabled
                        ? "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-indigo-500"
                        : "text-gray-500 cursor-not-allowed"
                    } transition duration-300 ease-in-out`}
                    target={blank && enabled ? "_blank" : "_self"}
                    rel={blank && enabled ? "noopener noreferrer" : undefined}
                  >
                    {title}
                    {blank && <FiExternalLink className="inline ml-1" />}
                  </a>
                );
              })}
            </div>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {resolvedTheme === "dark" ? <FaMoon /> : <FaSun />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {resolvedTheme === "dark" ? <FaMoon /> : <FaSun />}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-transform duration-300 ease-in-out transform hover:scale-110"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
          {Object.keys(NavbarMenus).map((key) => {
            const { title, href, enabled, blank } = NavbarMenus[key];
            return (
              <a
                key={key}
                href={enabled ? href : "#"}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  enabled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-4 border-transparent hover:border-indigo-500"
                    : "text-gray-500 cursor-not-allowed"
                } transition duration-300 ease-in-out`}
                target={blank && enabled ? "_blank" : "_self"}
                rel={blank && enabled ? "noopener noreferrer" : undefined}
              >
                {title}
                {blank && <FiExternalLink className="inline ml-1" />}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
