import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { FaChevronRight } from "react-icons/fa";

interface MobileMenuProps {
  isMenuOpen: boolean;
  navigationItems: Array<{ to: string; label: string }>;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  translations: Record<string, string>;
}

function MobileMenu({
  isMenuOpen,
  navigationItems,
  toggleTheme,
  toggleSidebar,
  isDarkMode,
  translations,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 md:hidden"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="block w-full text-left py-2 px-4 hover:bg-indigo-600 hover:text-white transition-colors duration-200 border-b border-indigo-300 bg-indigo-900 bg-opacity-20 flex items-center"
            >
              <FaChevronRight className="mr-2 text-xs text-indigo-300" />
              <span>{translations[item.label]}</span>
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="block w-full text-left py-2 px-4 hover:bg-indigo-600 hover:text-white transition-colors duration-200 border-b border-indigo-300 bg-indigo-900 bg-opacity-20"
          >
            <FaChevronRight className="mr-2 text-xs inline text-indigo-300" />
            {isDarkMode
              ? translations.LightMode
              : translations.DarkMode}
          </button>
          <button
            onClick={toggleSidebar}
            className="block w-full text-left py-2 px-4 hover:bg-indigo-600 hover:text-white transition-colors duration-200 border-b border-indigo-300 bg-indigo-900 bg-opacity-20"
          >
            <FaChevronRight className="mr-2 text-xs inline text-indigo-300" />
            {translations.UserMenu}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
