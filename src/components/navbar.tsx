"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { IoMdCode } from "react-icons/io";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaBook,
  FaQuestionCircle,
  FaLaptopCode,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  const navItems = [
    { name: "Home", icon: FaHome },
    { name: "Courses", icon: FaBook },
    { name: "Quiz", icon: FaQuestionCircle },
    { name: "Compiler", icon: FaLaptopCode },
  ];

  return (
    <nav className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black shadow-md border-b border-blue-500 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
              <IoMdCode className="mr-2 text-3xl" />
              TriWikiTech
            </h1>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={
                  item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`
                }
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
              >
                <item.icon className="mr-2 text-lg" />
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <FaMoon className="text-lg" />
              ) : (
                <FaSun className="text-lg" />
              )}
            </button>
          </div>
          <button
            className="md:hidden bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={
                    item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`
                  }
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 text-lg" />
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
              >
                <span className="mr-3 text-lg">
                  {theme === "dark" ? <FaMoon /> : <FaSun />}
                </span>
                Switch Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
