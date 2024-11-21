import { FaArrowRight } from "react-icons/fa";
import { Link } from "@remix-run/react";
import React from "react";
import { motion } from "framer-motion";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  onNavigate: () => void;
}

function SidebarLink({ to, icon, children, onNavigate }: SidebarLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate();
    window.location.href = to;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={to}
        onClick={handleClick}
        className="group relative block px-6 py-4 text-base rounded-xl transition-all duration-300 ease-in-out flex items-center mb-3 overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-800/30 dark:hover:to-purple-800/30"
      >
        <div className="flex items-center flex-grow">
          {React.cloneElement(icon, {
            className: "mr-4 text-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300",
          })}
          <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
            {children}
          </span>
        </div>
        <FaArrowRight className="ml-2 text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
      </Link>
    </motion.div>
  );
}

export default SidebarLink;
