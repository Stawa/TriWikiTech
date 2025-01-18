import { UserProfile } from "~/types/user";
import { lazy, Suspense } from "react";
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
  FaDesktop,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SidebarSection from "./SideBarSection";
import SidebarLink from "./SidebarLink";
import SidebarDropdown from "./SidebarDropdown";
import Flag from "react-world-flags";
import { Form, useNavigate, useSubmit } from "@remix-run/react";
import { getCookie, setCookie } from "~/utils/cookie";

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
  toggleTheme: (newTheme?: string) => void;
  theme: string;
}

function Sidebar({
  isSidebarOpen,
  sidebarRef,
  toggleSidebar,
  user,
  translations,
  currentLanguage,
  changeLanguage,
  toggleTheme,
  theme,
}: SidebarProps) {
  const navigate = useNavigate();
  const submit = useSubmit();

  return (
    <AnimatePresence mode="wait">
      {isSidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 will-change-transform z-[9999]"
            onClick={toggleSidebar}
          />
          <div className="fixed inset-0 z-[10000] overflow-hidden">
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full xs:w-[90%] sm:w-[400px] lg:w-[450px] xl:w-[500px] flex flex-col h-screen bg-white dark:bg-gray-900 overflow-hidden shadow-2xl"
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
                        <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      </div>
                    }
                  >
                    {user ? (
                      <UserSidebarContent user={user} />
                    ) : (
                      <LoginPrompt
                        translations={translations}
                        onNavigate={() => navigate("/sign-in")}
                      />
                    )}
                  </Suspense>
                </div>

                <div className="px-3 xs:px-4 sm:px-6 space-y-3 xs:space-y-4 sm:space-y-6 pb-24">
                  {user && (
                    <SidebarSection title={translations.UserMenu}>
                      <SidebarLink
                        to={`/profile/${user.username}`}
                        icon={<FaUserCircle />}
                        onNavigate={() => navigate(`/profile/${user.username}`)}
                      >
                        {translations.ViewProfile}
                      </SidebarLink>
                      <SidebarLink
                        to="/settings"
                        icon={<FaCog />}
                        onNavigate={() => navigate("/settings")}
                      >
                        {translations.Settings}
                      </SidebarLink>
                    </SidebarSection>
                  )}
                  <SidebarSection title={translations.Settings}>
                    <SidebarDropdown
                      icon={<FaMoon />}
                      label={translations.Theme}
                      options={[
                        {
                          value: "light",
                          label: translations.SwitchToLightMode,
                          icon: <FaSun />,
                        },
                        {
                          value: "dark",
                          label: translations.SwitchToDarkMode,
                          icon: <FaMoon />,
                        },
                        {
                          value: "system",
                          label: translations.SwitchToSystemMode,
                          icon: <FaDesktop />,
                        },
                      ]}
                      onSelect={toggleTheme}
                      currentValue={theme}
                    />
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
                      onSelect={(value) =>
                        setCookie("cookiePreference", value, {
                          path: "/",
                          expires: "never",
                        })
                      }
                      currentValue={getCookie("cookiePreference") || "opt-out"}
                    />
                    {user && (
                      <>
                        <div className="my-4 border-t border-gray-200 dark:border-gray-700/50"></div>
                        <Form
                          method="get"
                          action="/logout"
                          onSubmit={() =>
                            submit(null, { method: "get", action: "/logout" })
                          }
                        >
                          <button
                            type="submit"
                            className="w-full text-left px-5 py-3.5 text-base
                            transition-all duration-300 ease-in-out
                            rounded-xl
                            bg-gradient-to-r from-red-50/90 to-red-100/90 
                            dark:from-red-900/30 dark:to-red-800/30 
                            hover:from-red-100/90 hover:to-red-200/90
                            dark:hover:from-red-800/40 dark:hover:to-red-700/40
                            hover:shadow-md hover:scale-[1.01] active:scale-[0.99]
                            border border-red-200/70 dark:border-red-800/50 
                            text-red-600 dark:text-red-400
                            flex items-center justify-between group"
                            aria-label={translations.Logout}
                          >
                            <div className="flex items-center">
                              <span
                                className="mr-4 text-xl p-2.5 rounded-xl 
                                bg-gradient-to-br from-red-200/70 to-red-300/70 
                                dark:from-red-800/40 dark:to-red-700/40
                                text-red-600 dark:text-red-400 
                                group-hover:from-red-300/70 group-hover:to-red-400/70
                                dark:group-hover:from-red-700/40 dark:group-hover:to-red-600/40 
                                transition-all duration-300 shadow-sm"
                              >
                                <FaSignOutAlt />
                              </span>
                              <span className="font-medium">
                                {translations.Logout}
                              </span>
                            </div>
                            <FaArrowRight className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out text-lg" />
                          </button>
                        </Form>
                      </>
                    )}
                  </SidebarSection>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
