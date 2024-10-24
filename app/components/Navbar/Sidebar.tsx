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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:bg-opacity-70 md:pointer-events-auto"
        >
          <motion.div
            ref={sidebarRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 bg-white dark:bg-gray-900 text-gray-800 dark:text-blue-300 shadow-lg z-50 flex flex-col overflow-y-auto w-full md:w-80 md:pointer-events-auto md:border-l md:border-gray-300 dark:md:border-blue-500"
          >
            <div className="px-6 pt-6 flex-shrink-0 mb-6">
              <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 text-red-600 hover:text-red-800 transition-colors duration-200"
                aria-label="Close Sidebar"
              >
                <FaTimes className="h-6 w-6" />
              </button>
              <Suspense fallback={<div>Loading...</div>}>
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
            <div className="px-6 flex-grow">
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
                  className="w-full text-left px-4 py-3 text-base dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md transition duration-150 ease-in-out flex items-center mb-2"
                  aria-label={
                    isDarkMode
                      ? translations.SwitchToLightMode
                      : translations.SwitchToDarkMode
                  }
                >
                  <span className="mr-4 text-xl">
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                  </span>
                  {isDarkMode
                    ? translations.SwitchToLightMode
                    : translations.SwitchToDarkMode}
                </button>
                <SidebarDropdown
                  icon={<FaGlobe />}
                  label={translations.Language}
                  options={[
                    { value: "en", label: "English", icon: <Flag code="US" /> },
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
            {user && (
              <div className="px-6 py-4 mt-auto border-t border-gray-300 dark:border-blue-500">
                <Form method="get" action="/logout" onSubmit={handleLogout}>
                  <button
                    type="submit"
                    className="w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white rounded-md transition duration-150 ease-in-out flex items-center"
                    aria-label={translations.Logout}
                  >
                    <FaSignOutAlt className="mr-4 text-xl" />
                    {translations.Logout}
                  </button>
                </Form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
