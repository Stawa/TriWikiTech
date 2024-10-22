import { useNavigate } from "@remix-run/react";

function NavItem({
  onClick,
  icon,
  text,
  isActive,
  href,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  href: string;
}) {
  const navigate = useNavigate();

  return (
    <li className="flex-grow sm:flex-grow-0">
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick();
          navigate(href, { replace: true });
        }}
        className={`
            flex items-center justify-center w-full
            px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-md transition-all duration-300 text-xs sm:text-sm md:text-base
            ${
              isActive
                ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 dark:text-indigo-300 dark:hover:bg-indigo-700 dark:hover:bg-opacity-20 dark:hover:text-indigo-200"
            }
          `}
      >
        <span className="text-sm sm:text-base md:text-lg mr-1 sm:mr-1.5 md:mr-2">
          {icon}
        </span>
        <span className="font-medium">{text}</span>
      </a>
    </li>
  );
}

export default NavItem;
