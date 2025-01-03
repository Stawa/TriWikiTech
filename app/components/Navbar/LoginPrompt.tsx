import { Link } from "@remix-run/react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

interface LoginPromptProps {
  translations: Record<string, string>;
  onNavigate: () => void;
}

function LoginPrompt({ translations, onNavigate }: LoginPromptProps) {
  return (
    <div className="w-full mx-auto p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
      <div className="flex flex-col items-center">
        {/* Icon */}
        <div className="mb-4 relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center transform transition-transform hover:scale-110 hover:rotate-[360deg] duration-700">
            <HiOutlineUserCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
        </div>

        {/* Text Content */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {translations.WelcomeBack}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
          {translations.PleaseLogIn}
        </p>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <Link
            to="/sign-in"
            onClick={onNavigate}
            className="group relative block w-full px-6 py-3 text-base rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 hover:from-indigo-200 hover:to-purple-200 dark:hover:from-indigo-800/40 dark:hover:to-purple-800/40 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-800 dark:group-hover:text-indigo-200 transition-colors duration-300 flex items-center gap-2">
              {translations.LogIn}
              <FaArrowRight className="text-indigo-500 dark:text-indigo-400 transform scale-0 group-hover:scale-100 translate-x-[-10px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
            </span>
          </Link>

          <Link
            to="/sign-up"
            onClick={onNavigate}
            className="group relative block w-full px-6 py-3 text-base rounded-xl transition-all duration-300 ease-in-out flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 hover:from-purple-200 hover:to-indigo-200 dark:hover:from-purple-800/40 dark:hover:to-indigo-800/40 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-800 dark:group-hover:text-indigo-200 transition-colors duration-300 flex items-center gap-2">
              {translations.SignUp}
              <FaArrowRight className="text-indigo-500 dark:text-indigo-400 transform scale-0 group-hover:scale-100 translate-x-[-10px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPrompt;
