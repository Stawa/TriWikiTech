"use client";

import Link from "next/link";
import clsx from "clsx";
import Flag from "react-world-flags";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdCode } from "react-icons/io";
import {
  FaBook,
  FaCheck,
  FaChevronDown,
  FaCog,
  FaCookieBite,
  FaGlobe,
  FaHome,
  FaLaptopCode,
  FaMoon,
  FaQuestionCircle,
  FaSignOutAlt,
  FaSun,
  FaUser,
} from "react-icons/fa";

import ProfileImage from "@app/profile/image";
import { Locale } from "@default/i18n/config";
import { getUserLocale, setUserLocale } from "@default/services/locale";
import { getUserData, type User } from "@components/user";
import { setCookieConsent, getCookieConsent } from "@components/cookies/cookie";
import { userSignOut } from "@app/login/redirect";

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
    isLoading: true,
    cookieConsent: null as string | null,
    isCookieDropdownOpen: false,
  };
  const [state, setState] = useState(initialState);
  const router = useRouter();
  const t = useTranslations("Navbar");

  const updateState = (key: string, value: any) =>
    setState((prevState) => ({ ...prevState, [key]: value }));

  const handleSignOut = async () => {
    updateState("isSidebarOpen", false);
    await userSignOut();
    window.location.reload();
  };

  const initializeNavbar = useCallback(async () => {
    updateState("isLoading", true);
    try {
      const locale = await getUserLocale();
      updateState("selectedLanguage", locale as Locale);

      const user = await getUserData();
      if (user) {
        updateState("loggedInUser", user);
        updateState("userLogin", true);
      }

      const consent = await getCookieConsent();
      updateState("cookieConsent", consent || null);
    } catch (error) {
      console.error("Error initializing navbar:", error);
    } finally {
      updateState("mounted", true);
      updateState("isLoading", false);
    }
  }, []);

  useEffect(() => {
    initializeNavbar();
  }, [initializeNavbar]);

  useEffect(() => {
    document.body.style.overflow = state.isSidebarOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [state.isSidebarOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeLanguage = async (locale: Locale) => {
    await setUserLocale(locale);
    updateState("selectedLanguage", locale);
    router.refresh();
  };

  const handleCookieConsent = async (consent: string) => {
    await setCookieConsent(consent);
    updateState("cookieConsent", consent);
  };

  const navItems = [
    { name: t("Home"), href: "/", icon: FaHome },
    { name: t("Courses"), href: "/courses", icon: FaBook },
    { name: t("Quiz"), href: "/quiz", icon: FaQuestionCircle },
    { name: t("Compiler"), href: "/compiler", icon: FaLaptopCode },
  ];

  const userDropdownItems = [
    { name: t("ViewProfile"), icon: FaUser, href: "/profile" },
    { name: t("Settings"), icon: FaCog, href: "/settings" },
  ];

  const guestDropdownItems = [
    { name: t("Login"), icon: FaUser, href: "/login" },
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

  const renderLoadingState = () => (
    <div className="h-16 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black shadow-md border-b border-blue-500">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );

  const renderNavbarContent = () => (
    <nav className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black shadow-md border-b border-blue-500 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {renderLogo()}
          {renderDesktopMenu()}
          {renderMobileMenuButton()}
        </div>
      </div>
      {renderMobileMenu()}
      {renderSidebar()}
    </nav>
  );

  const renderLogo = () => (
    <Link
      href="/"
      className="flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
        <IoMdCode className="mr-2 text-3xl" />
        TriWikiTech
      </h1>
    </Link>
  );

  const renderDesktopMenu = () => (
    <div className="hidden md:flex items-center space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          prefetch={true}
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
        >
          <item.icon className="mr-2 text-lg" />
          {item.name}
        </Link>
      ))}
      {renderUserButton()}
    </div>
  );

  const renderUserButton = () => (
    <button
      onClick={() => updateState("isSidebarOpen", true)}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
      aria-label={state.userLogin ? "Open User Menu" : "Login"}
    >
      {state.isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
      ) : state.userLogin ? (
        <div className="w-8 h-8 relative">
          <ProfileImage {...(state.loggedInUser as User)} />
        </div>
      ) : (
        <FaUser className="text-lg" />
      )}
    </button>
  );

  const renderMobileMenuButton = () => (
    <button
      className="md:hidden bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:scale-110 transition-transform duration-300 ease-in-out"
      onClick={() => updateState("isOpen", !state.isOpen)}
      aria-label={state.isOpen ? "Close Main Menu" : "Open Main Menu"}
    >
      <span className="sr-only">Open main menu</span>
      {createIcon(
        state.isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
      )}
    </button>
  );

  const renderMobileMenu = () => (
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
                prefetch={true}
                key={item.name}
                href={
                  item.name === t("Home") ? "/" : `/${item.name.toLowerCase()}`
                }
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
                onClick={() => updateState("isOpen", false)}
              >
                <item.icon className="mr-3 text-lg" />
                {item.name}
              </Link>
            ))}
            {renderMobileUserButton()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderMobileUserButton = () => (
    <button
      onClick={() => {
        updateState("isOpen", false);
        updateState("isSidebarOpen", true);
      }}
      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center"
      aria-label={state.userLogin ? "Open User Menu" : "Login"}
    >
      {state.isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500 mr-3"></div>
      ) : state.userLogin ? (
        <>
          <div className="relative w-8 h-8 mr-3">
            <ProfileImage {...(state.loggedInUser as User)} />
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
  );

  const renderSidebar = () => (
    <AnimatePresence>
      {state.isSidebarOpen && (
        <>
          {renderSidebarOverlay()}
          {renderSidebarContent()}
        </>
      )}
    </AnimatePresence>
  );

  const renderSidebarOverlay = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black z-40"
      onClick={() => updateState("isSidebarOpen", false)}
      aria-label={"Close Sidebar"}
    />
  );

  const renderSidebarContent = () => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed inset-y-0 right-0 w-80 max-w-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg z-50 flex flex-col overflow-y-auto"
    >
      {renderSidebarHeader()}
      {renderSidebarBody()}
      {renderSidebarFooter()}
    </motion.div>
  );

  const renderSidebarHeader = () => (
    <div className="px-6 pt-6 flex-shrink-0">
      <button
        onClick={() => updateState("isSidebarOpen", false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
        aria-label={"Close Sidebar"}
      >
        {createIcon("M6 18L18 6M6 6l12 12")}
      </button>
      {state.userLogin && renderUserProfile()}
    </div>
  );

  const renderUserProfile = () => (
    <div className="flex items-center mt-4 mb-4 pb-4 border-b border-gray-300 dark:border-gray-600">
      <div className="flex-shrink-0 w-16 h-16 relative mr-4">
        <ProfileImage {...(state.loggedInUser as User)} />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white break-words">
          {state.loggedInUser?.name || "<No Name>"}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 break-words">
          {state.loggedInUser?.email}
        </p>
      </div>
    </div>
  );

  const renderSidebarBody = () => (
    <div className="px-6 flex-grow">
      {renderAccountSection()}
      {renderPreferencesSection()}
    </div>
  );

  const renderAccountSection = () => (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">
        {t("Account")}
      </h3>
      {dropdownItems.map((item) => (
        <Link
          prefetch={true}
          key={item.name}
          href={item.href}
          className="block px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition duration-150 ease-in-out flex items-center mb-2"
          onClick={() => updateState("isSidebarOpen", false)}
        >
          {item.icon && (
            <item.icon className="mr-4 text-xl text-blue-600 dark:text-blue-400" />
          )}
          {item.name}
        </Link>
      ))}
    </div>
  );

  const renderPreferencesSection = () => (
    <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">
        {t("Preferences")}
      </h3>
      {renderThemeToggle()}
      {renderLanguageDropdown()}
      {renderCookieManagement()}
    </div>
  );

  const renderThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="w-full text-left px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition duration-150 ease-in-out flex items-center mb-2"
      aria-label={
        theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
      }
    >
      <span className="mr-4 text-xl text-yellow-500 dark:text-yellow-400">
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </span>
      {theme === "dark" ? t("SwitchToLightMode") : t("SwitchToDarkMode")}
    </button>
  );

  const renderLanguageDropdown = () => (
    <div className="mt-4 mb-4">
      <button
        onClick={() =>
          updateState("isLanguageDropdownOpen", !state.isLanguageDropdownOpen)
        }
        className="w-full text-left px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition duration-150 ease-in-out flex items-center justify-between"
        aria-label={"Select Language"}
      >
        <span className="flex items-center">
          <FaGlobe className="mr-4 text-xl text-green-600 dark:text-green-400" />
          {t("Language")}
        </span>
        <FaChevronDown
          className={`transition-transform duration-200 ${
            state.isLanguageDropdownOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {state.isLanguageDropdownOpen && renderLanguageOptions()}
    </div>
  );

  const renderLanguageOptions = () => (
    <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
      {languages.map((lang, index) => (
        <button
          key={lang.name}
          onClick={() => {
            changeLanguage(lang.locale);
            updateState("isLanguageDropdownOpen", false);
          }}
          className={clsx(
            "block w-full text-left px-4 py-3 text-sm",
            {
              "bg-blue-600 text-white": state.selectedLanguage === lang.locale,
              "text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900":
                state.selectedLanguage !== lang.locale,
            },
            index !== 0 ? "border-t border-gray-200 dark:border-gray-700" : "",
            "transition duration-150 ease-in-out"
          )}
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
  );

  const renderCookieManagement = () => (
    <div className="mt-4 mb-4">
      <button
        onClick={() =>
          updateState("isCookieDropdownOpen", !state.isCookieDropdownOpen)
        }
        className="w-full text-left px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition duration-150 ease-in-out flex items-center justify-between"
        aria-label={t("CookieManagement")}
      >
        <span className="flex items-center">
          <FaCookieBite className="mr-4 text-xl text-amber-600 dark:text-amber-400" />
          {t("CookieManagement")}
        </span>
        <FaChevronDown
          className={`transition-transform duration-200 ${
            state.isCookieDropdownOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {state.isCookieDropdownOpen && renderCookieOptions()}
    </div>
  );

  const renderCookieOptions = () => (
    <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden">
      <button
        onClick={() => handleCookieConsent("true")}
        className={`w-full text-left px-4 py-3 text-sm ${
          state.cookieConsent === "true"
            ? "bg-green-500 text-white"
            : "text-gray-800 dark:text-gray-200 hover:bg-green-200 dark:hover:bg-green-700"
        } transition duration-150 ease-in-out`}
      >
        {t("Accept")}
      </button>
      <button
        onClick={() => handleCookieConsent("false")}
        className={`w-full text-left px-4 py-3 text-sm ${
          state.cookieConsent === "false"
            ? "bg-red-500 text-white"
            : "text-gray-800 dark:text-gray-200 hover:bg-red-200 dark:hover:bg-red-700"
        } transition duration-150 ease-in-out`}
      >
        {t("Reject")}
      </button>
    </div>
  );

  const renderSidebarFooter = () =>
    state.userLogin && (
      <div className="px-6 py-4 mt-auto border-t border-gray-300 dark:border-gray-600">
        <button
          onClick={handleSignOut}
          className="w-full text-left px-4 py-3 text-base text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 rounded-md transition duration-150 ease-in-out flex items-center"
          aria-label={"Logout"}
        >
          <FaSignOutAlt className="mr-4 text-xl" />
          {t("Logout")}
        </button>
      </div>
    );

  if (!state.mounted) {
    return renderLoadingState();
  }

  return renderNavbarContent();
};

export default Navbar;
