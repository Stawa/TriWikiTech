import { UserProfile } from "~/types/user";
import { lazy, Suspense, useState, useEffect } from "react";
import {
  FaCog,
  FaSun,
  FaMoon,
  FaGlobe,
  FaTimes,
  FaUserCircle,
  FaSignOutAlt,
  FaCookie,
  FaCheck,
  FaBan,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SidebarSection from "./SideBarSection";
import SidebarLink from "./SidebarLink";
import SidebarDropdown from "./SidebarDropdown";
import Flag from "react-world-flags";
import { Form, useNavigate, useSubmit } from "@remix-run/react";
import { getCookie, setCookie } from "~/utils/cookie";
import { useTheme } from "~/hooks/useTheme";

const UserSidebarContent = lazy(
  () => import("~/components/Navbar/UserSidebarContent")
);
const LoginPrompt = lazy(() => import("~/components/Navbar/LoginPrompt"));

interface SidebarProps {
  isSidebarOpen: boolean;
  sidebarRef: React.RefObject<HTMLDivElement>;
  toggleSidebar: () => void;
  user: UserProfile | null;
  translations: Record<string, string>;
  currentLanguage: string;
  changeLanguage: (lng: string) => void;
}

function Sidebar({
  isSidebarOpen,
  sidebarRef,
  toggleSidebar,
  user,
  translations,
  currentLanguage,
  changeLanguage,
}: SidebarProps) {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { isDarkMode, toggleTheme } = useTheme();
  const [cookiePreference, setCookiePreference] = useState(() => {
    return getCookie("cookiePreference") || "opt-out";
  });

  useEffect(() => {
    setCookie("cookiePreference", cookiePreference, {
      path: "/",
      expires: "never",
    });
  }, [cookiePreference]);

  function handleLogout() {
    submit(null, { method: "get", action: "/logout" });
    navigate("/login");
  }

  const handleNavigate = () => {
    toggleSidebar();
  };

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={toggleSidebar}
          />
          <motion.div
            ref={sidebarRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 150 }}
            className="fixed inset-y-0 right-0 w-full xs:w-[90%] sm:w-[400px] lg:w-[450px] xl:w-[500px] flex flex-col h-screen overflow-hidden"
            style={{ overflowY: "auto" }}
          >
            <div className="bg-white dark:bg-gray-900 px-3 xs:px-4 sm:px-6 py-3 xs:py-4 sm:py-6 border-b border-indigo-200 dark:border-indigo-500/30">
              <div className="flex items-center justify-between">
                <h2 className="text-lg xs:text-xl sm:text-xl font-semibold text-indigo-800 dark:text-indigo-300">
                  Menu
                </h2>
                <button
                  onClick={toggleSidebar}
                  className="p-2 xs:p-2 sm:p-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-200 group"
                  aria-label="Close Sidebar"
                >
                  <FaTimes className="h-5 w-5 xs:h-5 xs:w-5 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
              <div className="px-3 xs:px-4 sm:px-6 py-4">
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-16 xs:h-20 sm:h-24">
                      <div className="animate-pulse w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full"></div>
                    </div>
                  }
                >
                  {user ? (
                    <UserSidebarContent user={user} />
                  ) : (
                    <LoginPrompt
                      translations={translations}
                      onNavigate={handleNavigate}
                    />
                  )}
                </Suspense>
              </div>

              <div className="px-3 xs:px-4 sm:px-6 space-y-3 xs:space-y-4 sm:space-y-6 pb-24">
                {user && (
                  <SidebarSection title={translations.UserMenu}>
                    <SidebarLink
                      to={`/profile/${user.name}`}
                      icon={<FaUserCircle />}
                      onNavigate={handleNavigate}
                    >
                      {translations.ViewProfile}
                    </SidebarLink>
                    <SidebarLink
                      to="/settings"
                      icon={<FaCog />}
                      onNavigate={handleNavigate}
                    >
                      {translations.Settings}
                    </SidebarLink>
                  </SidebarSection>
                )}
                <SidebarSection title={translations.Settings}>
                  <button
                    onClick={toggleTheme}
                    className="w-full text-left px-5 py-3.5 text-base
                      transition-all duration-300 ease-in-out flex items-center
                      rounded-xl mb-3
                      bg-gradient-to-r from-indigo-50/80 to-purple-50/80 
                      dark:from-indigo-900/30 dark:to-purple-900/30
                      hover:from-indigo-100/90 hover:to-purple-100/90
                      dark:hover:from-indigo-800/60 dark:hover:to-purple-800/60
                      hover:shadow-md hover:scale-[1.01] active:scale-[0.99]
                      hover:ring-1 hover:ring-indigo-400/20 dark:hover:ring-indigo-500/30
                      text-indigo-800 dark:text-indigo-200 group"
                    aria-label={
                      isDarkMode
                        ? translations.SwitchToLightMode
                        : translations.SwitchToDarkMode
                    }
                  >
                    <span
                      className="mr-4 text-xl p-2.5 rounded-xl
                        bg-gradient-to-br from-indigo-200/70 to-purple-200/70 
                        dark:from-indigo-800/40 dark:to-purple-800/40
                        text-indigo-700 dark:text-indigo-300 
                        group-hover:from-indigo-300/70 group-hover:to-purple-300/70
                        dark:group-hover:from-indigo-700/40 dark:group-hover:to-purple-700/40 
                        transition-all duration-300 shadow-sm"
                    >
                      {isDarkMode ? <FaSun /> : <FaMoon />}
                    </span>
                    <span className="font-medium tracking-wide">
                      {isDarkMode
                        ? translations.SwitchToLightMode
                        : translations.SwitchToDarkMode}
                    </span>
                  </button>
                  <SidebarDropdown
                    icon={<FaGlobe />}
                    label={translations.Language}
                    options={[
                      {
                        value: "en",
                        label: "English",
                        icon: <Flag code="US" />,
                      },
                      {
                        value: "id",
                        label: "Indonesia",
                        icon: <Flag code="ID" />,
                      },
                    ]}
                    onSelect={changeLanguage}
                    currentLanguage={currentLanguage}
                  />
                  <SidebarDropdown
                    icon={<FaCookie />}
                    label={translations.CookieManagement}
                    options={[
                      {
                        value: "accept",
                        label: translations.Accept,
                        icon: <FaCheck />,
                      },
                      {
                        value: "opt-out",
                        label: translations.OptOut,
                        icon: <FaBan />,
                      },
                    ]}
                    onSelect={(value) => setCookiePreference(value)}
                    currentValue={cookiePreference}
                  />
                </SidebarSection>
              </div>
            </div>

            {user && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-white/80 dark:from-gray-900 dark:to-gray-900/80 backdrop-blur-sm px-3 xs:px-4 sm:px-6 py-3 xs:py-4 border-t border-indigo-200/50 dark:border-indigo-500/20">
                <Form method="get" action="/logout" onSubmit={handleLogout}>
                  <button
                    type="submit"
                    className="w-full text-left px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 text-sm xs:text-base sm:text-lg font-medium text-red-600 dark:text-red-400 
                    hover:bg-gradient-to-r hover:from-red-50/90 hover:to-red-100/90 
                    dark:hover:from-red-900/30 dark:hover:to-red-800/30 
                    hover:text-red-700 dark:hover:text-red-300 
                    rounded-2xl shadow-sm hover:shadow-lg
                    border border-red-200/70 dark:border-red-800/50 
                    transition-all duration-300 ease-out 
                    flex items-center justify-between group"
                    aria-label={translations.Logout}
                  >
                    <div className="flex items-center space-x-3 xs:space-x-4">
                      <div className="p-2 xs:p-2.5 rounded-xl bg-gradient-to-br from-red-50 to-red-100/70 dark:from-red-900/40 dark:to-red-800/40 group-hover:from-red-100 group-hover:to-red-200/80 dark:group-hover:from-red-800/50 dark:group-hover:to-red-700/50 group-hover:scale-110 transition-all duration-300 ease-out">
                        <FaSignOutAlt className="text-red-600 dark:text-red-400 text-lg xs:text-xl" />
                      </div>
                      <span className="font-semibold">{translations.Logout}</span>
                    </div>
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-out text-lg xs:text-xl" />
                  </button>
                </Form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
