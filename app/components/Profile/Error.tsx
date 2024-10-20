import { Link } from "@remix-run/react";
import { FaArrowRight } from "react-icons/fa";

interface ErrorLayoutProps {
  title: string;
  message: string;
  linkTo: string;
  linkText: string;
  icon?: React.ReactNode;
}

function ErrorLayout({
  title,
  message,
  linkTo,
  linkText,
  icon,
}: ErrorLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-blue-200 font-sans flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-sm sm:max-w-md space-y-6 sm:space-y-8 bg-gray-800 bg-opacity-70 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-indigo-400">
        {icon && (
          <div className="text-center text-yellow-400 text-5xl sm:text-6xl mb-4 sm:mb-6">
            {icon}
          </div>
        )}
        <h2 className="mt-4 sm:mt-6 text-center text-3xl sm:text-4xl font-bold text-blue-300 tracking-wide sm:tracking-wider">
          {title}
        </h2>
        <p className="text-center text-base sm:text-lg text-blue-100">
          {message}
        </p>
        <div className="mt-6 sm:mt-8">
          <Link
            to={linkTo}
            className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out inline-flex items-center justify-center text-base sm:text-lg"
          >
            {linkText}
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorLayout;
