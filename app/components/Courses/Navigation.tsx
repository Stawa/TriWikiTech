import { Link } from "@remix-run/react";
import { FaArrowLeft, FaArrowRight, FaGraduationCap } from "react-icons/fa";

interface NavigationProps {
  navigation: {
    previous: { href: string; title: string };
    next: { href: string; title: string };
    overview?: { href: string; title: string };
  };
}

function Navigation({ navigation }: NavigationProps) {
  return (
    <nav className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-6 mx-auto">
        <NavigationLink
          to={navigation.previous.href}
          icon={<FaArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />}
          label="Previous Chapter"
          title={navigation.previous.title}
        />
        {navigation.overview && (
          <NavigationLink
            to={navigation.overview.href}
            icon={
              <FaGraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white" />
            }
            label="Course Overview"
            title={navigation.overview.title}
          />
        )}
        <NavigationLink
          to={navigation.next.href}
          icon={<FaArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />}
          label="Next Chapter"
          title={navigation.next.title}
          isNext
        />
      </div>
    </nav>
  );
}

interface NavigationLinkProps {
  to: string;
  icon: JSX.Element;
  label: string;
  title: string;
  isNext?: boolean;
}

function NavigationLink({
  to,
  icon,
  label,
  title,
  isNext = false,
}: NavigationLinkProps) {
  return (
    <Link
      to={to}
      className="group flex items-center p-4 md:p-6 px-6 md:px-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-blue-100/20 dark:border-blue-700/50 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center space-x-4 md:space-x-6">
        {!isNext && (
          <div className="p-2 md:p-3 rounded-xl bg-blue-500 flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {label}
          </span>
          <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </span>
        </div>
        {isNext && (
          <div className="p-2 md:p-3 rounded-xl bg-blue-500 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </Link>
  );
}

export default Navigation;
