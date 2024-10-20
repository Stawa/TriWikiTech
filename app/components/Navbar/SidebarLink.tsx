import { FaArrowRight } from "react-icons/fa";
import { Link } from "@remix-run/react";
import React from "react";

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
    <Link
      to={to}
      onClick={handleClick}
      className="block px-4 py-3 text-base text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900 rounded-md transition duration-150 ease-in-out flex items-center mb-2 dark:text-indigo-300 dark:hover:bg-indigo-700 dark:hover:text-white"
    >
      {React.cloneElement(icon, {
        className: "mr-4 text-xl text-purple-600 dark:text-purple-400",
      })}
      {children}
      <FaArrowRight className="ml-auto text-teal-600 dark:text-teal-400" />
    </Link>
  );
}

export default SidebarLink;
