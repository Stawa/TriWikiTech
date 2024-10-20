import { FaTimes, FaBars } from "react-icons/fa";

interface MobileMenuButtonProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

function MobileMenuButton({ toggleMenu, isMenuOpen }: MobileMenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden p-2 rounded-full border border-indigo-400 bg-gray-900 hover:bg-indigo-600 text-indigo-100 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
    >
      {isMenuOpen ? (
        <FaTimes className="w-5 h-5" />
      ) : (
        <FaBars className="w-5 h-5" />
      )}
    </button>
  );
}

export default MobileMenuButton;
