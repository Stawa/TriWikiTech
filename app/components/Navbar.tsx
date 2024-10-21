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
    { to: "/courses", label: "Courses" },
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
  const { isDarkMode, toggleTheme } = useTheme();
  const isUserEmpty = !user || Object.keys(user).length === 0;
  const navigationItems = useMemo(() => getNavigationItems(), []);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const changeLanguage = (lng: string) => {
    setCookie("language", lng, { path: "/", expires: "never" });
    const currentPath = window.location.pathname;
    navigate(currentPath, { replace: true });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        startTransition(() => {
          setIsSidebarOpen(false);
          if (window.innerWidth < 768) {
            document.body.style.overflow = "auto";
          }
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6 font-sans border-b-2 border-indigo-500 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 3xl:px-32">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center space-x-4">
            <Suspense fallback={<div>Loading...</div>}>
              <DesktopMenu
                navigationItems={navigationItems}
                toggleSidebar={toggleSidebar}
                user={isUserEmpty ? null : user}
                translations={translations}
              />
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
              <MobileMenu
                isMenuOpen={isMenuOpen}
                navigationItems={navigationItems}
                toggleSidebar={toggleSidebar}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
                translations={translations}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          sidebarRef={sidebarRef}
          toggleSidebar={toggleSidebar}
          user={isUserEmpty ? null : user}
          translations={translations}
          currentLanguage={currentLanguage}
          changeLanguage={changeLanguage}
        />
      </Suspense>
    </nav>
  );
}

function Logo() {
  return (
    <Link to="/" className="text-xl md:text-2xl font-bold flex items-center">
      <FaGraduationCap className="mr-2 text-indigo-600 dark:text-indigo-400" />
      <span className="text-indigo-600 dark:text-indigo-400">
        TriWikiTech
      </span>
    </Link>
  );
}

export default Navbar;
