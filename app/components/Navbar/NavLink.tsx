import { Link } from "@remix-run/react";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
}

function NavLink({ to, children, mobile }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`${
        mobile
          ? "block py-2 px-4 border-b border-indigo-400 bg-indigo-800 bg-opacity-20 dark:bg-indigo-800 dark:bg-opacity-20 dark:border-indigo-400"
          : "inline-block"
      } text-indigo-800 hover:text-indigo-600 dark:text-indigo-100 dark:hover:text-indigo-300 transition-colors duration-200 font-medium`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
