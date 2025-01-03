import { Link, useNavigate } from "@remix-run/react";
import { FaBars, FaGraduationCap, FaSearch, FaBell } from "react-icons/fa";
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
import { motion, AnimatePresence } from "framer-motion";

const DesktopMenu = lazy(() => import("~/components/Navbar/DesktopMenu"));
const Sidebar = lazy(() => import("~/components/Navbar/Sidebar"));
const SearchModal = lazy(() => import("~/components/Shared/SearchModal"));

function getNavigationItems() {
  return [
    { to: "/#featured-languages", label: "Courses", icon: FaGraduationCap },
    { to: "/quizzes", label: "Quizzes" },
    { to: "/compiler", label: "Compiler" },
    { to: "/resources", label: "Resources" },
  ];
}

interface NavbarProps {
  user: UserProfile | null;
  translations: Record<string, string>;
  currentLanguage: string;
}

function Navbar({ user, translations, currentLanguage }: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const isUserEmpty = !user || Object.keys(user).length === 0;
  const navigationItems = useMemo(() => getNavigationItems(), []);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const changeLanguage = (lng: string) => {
    setCookie("language", lng, { path: "/", expires: "never" });
    const currentPath = window.location.pathname;
    navigate(currentPath, { replace: true });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollDelta = scrollPosition - lastScrollY;
        setIsScrolled(scrollPosition > 0);
        lastScrollY = scrollPosition;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target as Node)
        ) {
          startTransition(() => {
            setIsSidebarOpen(false);
            document.body.style.overflow = "auto";
          });
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20"
      : "bg-white dark:bg-gray-900"
  }`;

  return (
    <nav className={navClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleSearch}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-105"
              aria-label="Search"
            >
              <FaSearch className="h-5 w-5" />
            </button>

            {!isUserEmpty && (
              <button
                className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-105 relative"
                aria-label="Notifications"
              >
                <FaBell className="h-5 w-5" />
                {hasNotifications && (
                  <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
                )}
              </button>
            )}

            <Suspense
              fallback={
                <div className="h-10 w-24 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />
              }
            >
              <DesktopMenu
                navigationItems={navigationItems}
                toggleSidebar={toggleSidebar}
                user={isUserEmpty ? null : user}
                translations={translations}
              />
            </Suspense>

            <button
              onClick={toggleSidebar}
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-105"
              aria-label="Toggle menu"
              aria-expanded={isSidebarOpen}
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Suspense fallback={null}>
              <SearchModal onClose={toggleSearch} ref={searchInputRef} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense>
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
    </nav>
  );
}

function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl md:text-3xl font-bold flex items-center group"
      aria-label="TriWikiTech Home"
    >
      <div className="relative">
        <FaGraduationCap className="mr-3 text-indigo-600 dark:text-indigo-400 transform group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute -inset-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
        TriWikiTech
      </span>
    </Link>
  );
}

export default Navbar;
