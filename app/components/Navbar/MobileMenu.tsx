import { AnimatePresence, motion } from "framer-motion";
import { FaChevronRight, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { startTransition } from "react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  navigationItems: Array<{ to: string; label: string }>;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  translations: Record<string, string>;
  onNavigate: (to: string) => void;
}

function MobileMenu({
  isMenuOpen,
  navigationItems,
  toggleTheme,
  toggleSidebar,
  isDarkMode,
  translations,
  onNavigate,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-4 md:hidden rounded-lg overflow-hidden shadow-xl border border-indigo-500/20"
        >
          <div className="bg-gray-50 dark:bg-gray-800 divide-y divide-indigo-500/20">
            {navigationItems.map((item) => (
              <button
                key={item.to}
                onClick={() => onNavigate(item.to)}
                className="block w-full text-left py-3 px-4 hover:bg-indigo-500 hover:text-white transition-all duration-200 text-gray-700 dark:text-gray-200 flex items-center"
              >
                <FaChevronRight className="mr-3 text-xs" />
                <span className="font-medium">{translations[item.label]}</span>
              </button>
            ))}
            <button
              onClick={() => startTransition(toggleTheme)}
              className="block w-full text-left py-3 px-4 hover:bg-indigo-500 hover:text-white transition-all duration-200 
                text-gray-700 dark:text-gray-200 flex items-center group"
            >
              {isDarkMode ? (
                <FaSun className="mr-3 text-amber-500 group-hover:text-white" />
              ) : (
                <FaMoon className="mr-3 text-indigo-500 group-hover:text-white" />
              )}
              <span className="font-medium">
                {isDarkMode ? translations.LightMode : translations.DarkMode}
              </span>
            </button>
            <button
              onClick={() => startTransition(toggleSidebar)}
              className="block w-full text-left py-3 px-4 hover:bg-indigo-500 hover:text-white transition-all duration-200 
                text-gray-700 dark:text-gray-200 flex items-center group"
            >
              <FaUser className="mr-3 text-indigo-500 group-hover:text-white" />
              <span className="font-medium">{translations.UserMenu}</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
