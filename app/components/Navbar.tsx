import { Link, useNavigate } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import {
  lazy,
  startTransition,
  Suspense,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { UserProfile } from "~/types/user";
import { setCookie } from "~/utils/cookie";
import { useTheme } from "~/hooks/useTheme";

const DesktopMenu = lazy(() => import("~/components/Navbar/DesktopMenu"));
const Sidebar = lazy(() => import("~/components/Navbar/Sidebar"));
const MobileMenuButton = lazy(
  () => import("~/components/Navbar/MobileMenuButton")
);
const MobileMenu = lazy(() => import("~/components/Navbar/MobileMenu"));

function getNavigationItems() {
  return [
    { to: "/#featured-languages", label: "Courses" },
    { to: "/quizzes", label: "Quizzes" },
    { to: "/compiler", label: "Compiler" },
  ];
}

interface NavbarProps {
  user: UserProfile | null;
  translations: Record<string, string>;
  currentLanguage: string;
}

function Navbar({ user, translations, currentLanguage }: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme, theme } = useTheme();
  const isUserEmpty = !user || Object.keys(user).length === 0;
  const navigationItems = useMemo(() => getNavigationItems(), []);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    startTransition(() => {
      setIsSidebarOpen(!isSidebarOpen);
      if (!isSidebarOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });
  };

  const toggleMenu = () => startTransition(() => setIsMenuOpen(!isMenuOpen));

  const changeLanguage = (lng: string) => {
    setCookie("language", lng, { path: "/", expires: "never" });
    const currentPath = window.location.pathname;
    navigate(currentPath, { replace: true });
  };

  const handleNavigation = (to: string) => {
    toggleMenu();
    navigate(to);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleClickOutside(event: MouseEvent) {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target as Node)
        ) {
          startTransition(() => {
            setIsSidebarOpen(false);
            document.body.style.overflow = "auto";
          });
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 text-gray-800 dark:text-gray-200 py-6 font-sans border-b-2 transition-all duration-300 ${
    isScrolled
      ? "border-indigo-500/50 shadow-lg bg-gray-100/90 dark:bg-gray-900/90"
      : "border-indigo-500 shadow-md bg-gray-100 dark:bg-gray-900"
  }`;

  return (
    <nav>
      <div className="h-20" />
      <div className={`${navClasses}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 3xl:px-32">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center space-x-4">
              <Suspense
                fallback={
                  <div className="h-6 w-24 bg-gray-200 animate-pulse rounded" />
                }
              >
                <DesktopMenu
                  navigationItems={navigationItems}
                  toggleSidebar={toggleSidebar}
                  user={isUserEmpty ? null : user}
                  translations={translations}
                />
              </Suspense>
              <Suspense
                fallback={
                  <div className="h-6 w-6 bg-gray-200 animate-pulse rounded" />
                }
              >
                <MobileMenuButton
                  toggleMenu={toggleMenu}
                  isMenuOpen={isMenuOpen}
                />
              </Suspense>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Suspense
                  fallback={
                    <div className="h-48 bg-gray-200 animate-pulse rounded mt-4" />
                  }
                >
                  <MobileMenu
                    isMenuOpen={isMenuOpen}
                    navigationItems={navigationItems}
                    toggleSidebar={toggleSidebar}
                    toggleTheme={toggleTheme}
                    isDarkMode={isDarkMode}
                    translations={translations}
                    onNavigate={handleNavigation}
                  />
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Suspense
          fallback={
            <div className="fixed inset-y-0 right-0 w-64 bg-gray-200 animate-pulse" />
          }
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            sidebarRef={sidebarRef}
            toggleSidebar={toggleSidebar}
            user={isUserEmpty ? null : user}
            translations={translations}
            currentLanguage={currentLanguage}
            changeLanguage={changeLanguage}
            toggleTheme={toggleTheme}
            theme={theme}
          />
        </Suspense>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link to="/" className="text-xl md:text-2xl font-bold flex items-center">
      <FaGraduationCap className="mr-2 text-indigo-600 dark:text-indigo-400" />
      <span className="text-indigo-600 dark:text-indigo-400">TriWikiTech</span>
    </Link>
  );
}

export default Navbar;
