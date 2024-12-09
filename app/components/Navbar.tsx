import { Link, useNavigate } from "@remix-run/react";
import { FaBars, FaGraduationCap } from "react-icons/fa";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme, theme } = useTheme();
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

  const changeLanguage = (lng: string) => {
    setCookie("language", lng, { path: "/", expires: "never" });
    const currentPath = window.location.pathname;
    navigate(currentPath, { replace: true });
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

  const navClasses = `w-full text-gray-800 dark:text-gray-200 py-3 font-sans border-b transition-all duration-300 ${
    isScrolled
      ? "border-indigo-500/20 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-lg"
      : "border-indigo-500 bg-gray-100 dark:bg-gray-900"
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 3xl:px-32">
        <div className="flex justify-between items-center h-14">
          <Logo />
          <div className="flex items-center space-x-6">
            <Suspense
              fallback={
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
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
                <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
              }
            >
              <button
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                <FaBars className="h-5 w-5" />
              </button>
            </Suspense>
          </div>
        </div>
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
