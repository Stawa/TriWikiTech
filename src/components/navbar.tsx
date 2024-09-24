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
  FaUser,
  FaSignOutAlt,
  FaCog,
  FaGlobe,
  FaChevronDown,
  FaCheck,
} from "react-icons/fa";
import Image from "next/image";
import Flag from "react-world-flags";
import { useRouter } from "next/navigation";
import { getUserLocale, setUserLocale } from "@default/services/locale";
import { Locale } from "@default/i18n/config";
import { useTranslations } from "next-intl";
import { getUserData, type User } from "./user";
import { userSignOut } from "@default/app/login/redirect";

function createIcon(path: string) {
  return (
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
        d={path}
      />
    </svg>
  );
}

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const initialState = {
    isLanguageDropdownOpen: false,
    isOpen: false,
    isSidebarOpen: false,
    mounted: false,
    selectedLanguage: "en" as Locale,
    userLogin: false,
    loggedInUser: null as User | null,
  };
  const [state, setState] = useState(initialState);
  const router = useRouter();
  const t = useTranslations("Navbar");

  const setIsLanguageDropdownOpen = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isLanguageDropdownOpen: value }));
  const setIsOpen = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isOpen: value }));
  const setIsSidebarOpen = (value: boolean) =>
    setState((prevState) => ({ ...prevState, isSidebarOpen: value }));
  const setMounted = (value: boolean) =>
    setState((prevState) => ({ ...prevState, mounted: value }));
  const setSelectedLanguage = (value: Locale) =>
    setState((prevState) => ({ ...prevState, selectedLanguage: value }));
  const setUserLogin = (value: boolean) =>
    setState((prevState) => ({ ...prevState, userLogin: value }));
  const setLoggedInUser = (value: User | null) =>
    setState((prevState) => ({ ...prevState, loggedInUser: value }));

  const handleSignOut = async () => {
    setIsSidebarOpen(false);
    await userSignOut();
    window.location.reload();
  };

  useEffect(() => {
    setMounted(true);
    getUserLocale().then((locale) => {
      setSelectedLanguage(locale as Locale);
    });

    getUserData().then((user) => {
      if (user) {
        setLoggedInUser(user);
        setUserLogin(true);
      }
    });
  }, []);

  useEffect(() => {
    if (state.isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [state.isSidebarOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeLanguage = async (locale: Locale) => {
    await setUserLocale(locale);
    setSelectedLanguage(locale);
    router.refresh();
  };

  if (!state.mounted) return null;

  const navItems = [
    { name: t("Home"), href: "/", icon: FaHome },
    { name: t("Courses"), href: "/courses", icon: FaBook },
    { name: t("Quiz"), href: "/quiz", icon: FaQuestionCircle },
    { name: t("Compiler"), href: "/compiler", icon: FaLaptopCode },
  ];

  const userDropdownItems = [
    {
      name: t("ViewProfile"),
      icon: FaUser,
      href: "/profile",
    },
    {
      name: t("Settings"),
      icon: FaCog,
      href: "/settings",
    },
  ];

  const guestDropdownItems = [
    {
      name: t("Login"),
      icon: FaUser,
      href: "/login",
    },
  ];

  const dropdownItems = state.userLogin
    ? userDropdownItems
    : guestDropdownItems;

  const languages = [
    {
      name: t("English"),
      flagIcon: <Flag className="w-6 h-6" code="us" />,
      locale: "en" as Locale,
    },
    {
      name: t("Indonesia"),
      flagIcon: <Flag className="w-6 h-6" code="id" />,
      locale: "id" as Locale,
    },
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
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
              >
                <item.icon className="mr-2 text-lg" />
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
              aria-label={state.userLogin ? t("Open User Menu") : t("Login")}
            >
              {state.userLogin ? (
                <div className="w-8 h-8 relative">
                  <Image
                    src={state.loggedInUser?.avatar || ""}
                    alt="User Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    quality={100}
                  />
                </div>
              ) : (
                <FaUser className="text-lg" />
              )}
            </button>
          </div>
          <button
            className="md:hidden bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setIsOpen(!state.isOpen)}
            aria-label={state.isOpen ? "Close Main Menu" : "Open Main Menu"}
          >
            <span className="sr-only">Open main menu</span>
            {createIcon(
              state.isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {state.isOpen && (
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
                    item.name === t("Home")
                      ? "/"
                      : `/${item.name.toLowerCase()}`
                  }
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 text-lg" />
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSidebarOpen(true);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
                aria-label={state.userLogin ? t("Open User Menu") : t("Login")}
              >
                {state.userLogin ? (
                  <>
                    <div className="relative w-8 h-8 mr-3">
                      <Image
                        src={state.loggedInUser?.avatar || ""}
                        alt="User Avatar"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        quality={100}
                      />
                    </div>
                    {t("Profile")}
                  </>
                ) : (
                  <>
                    <FaUser className="mr-3 text-lg" />
                    {t("Login")}
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {state.isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsSidebarOpen(false)}
              aria-label={t("Close Sidebar")}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-80 max-w-full bg-white dark:bg-gray-800 shadow-lg z-50 flex flex-col overflow-y-auto"
            >
              <div className="px-6 pt-6 flex-shrink-0">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                  aria-label={t("Close Sidebar")}
                >
                  {createIcon("M6 18L18 6M6 6l12 12")}
                </button>
                {state.userLogin && (
                  <div className="flex items-center mt-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex-shrink-0 w-16 h-16 relative mr-4">
                      <Image
                        src={state.loggedInUser?.avatar || ""}
                        alt="User Avatar"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        quality={100}
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white break-words">
                        {state.loggedInUser?.name}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300 break-words">
                        {state.loggedInUser?.email}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-6 flex-grow">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                    {t("Account")}
                  </h3>
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-150 ease-in-out flex items-center mb-2"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {item.icon && (
                        <item.icon className="mr-4 text-xl text-blue-500 dark:text-blue-400" />
                      )}
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                    {t("Preferences")}
                  </h3>
                  <button
                    onClick={toggleTheme}
                    className="w-full text-left px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-150 ease-in-out flex items-center mb-2"
                    aria-label={
                      theme === "dark"
                        ? t("Switch to Light Mode")
                        : t("Switch to Dark Mode")
                    }
                  >
                    <span className="mr-4 text-xl text-blue-500 dark:text-blue-400">
                      {theme === "dark" ? <FaMoon /> : <FaSun />}
                    </span>
                    {theme === "dark"
                      ? t("SwitchToLightMode")
                      : t("SwitchToDarkMode")}
                  </button>
                  <div className="mt-4 mb-4">
                    <button
                      onClick={() =>
                        setIsLanguageDropdownOpen(!state.isLanguageDropdownOpen)
                      }
                      className="w-full text-left px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-150 ease-in-out flex items-center justify-between"
                      aria-label={t("Select Language")}
                    >
                      <span className="flex items-center">
                        <FaGlobe className="mr-4 text-xl text-blue-500 dark:text-blue-400" />
                        {t("Language")}
                      </span>
                      <FaChevronDown
                        className={`transition-transform duration-200 ${state.isLanguageDropdownOpen ? "transform rotate-180" : ""}`}
                      />
                    </button>
                    {state.isLanguageDropdownOpen && (
                      <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
                        {languages.map((lang, index) => (
                          <button
                            key={lang.name}
                            onClick={() => {
                              changeLanguage(lang.locale);
                              setIsLanguageDropdownOpen(false);
                            }}
                            className={`
                              block w-full text-left px-4 py-3 text-sm
                              ${
                                state.selectedLanguage === lang.locale
                                  ? "bg-blue-500 text-white"
                                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              }
                              ${index !== 0 ? "border-t border-gray-200 dark:border-gray-700" : ""}
                              transition duration-150 ease-in-out
                            `}
                            aria-label={lang.name}
                          >
                            <div className="flex items-center justify-between">
                              <span className="flex items-center">
                                {lang.flagIcon}
                                <span className="ml-2">{lang.name}</span>
                              </span>
                              {state.selectedLanguage === lang.locale && (
                                <FaCheck className="text-white" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {state.userLogin && (
                <div className="px-6 py-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-3 text-base text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition duration-150 ease-in-out flex items-center"
                    aria-label={t("Logout")}
                  >
                    <FaSignOutAlt className="mr-4 text-xl" />
                    {t("Logout")}
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
