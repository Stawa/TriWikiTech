import { Link } from "@remix-run/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

interface LoginPromptProps {
  translations: Record<string, string>;
  onNavigate: () => void;
}

function LoginPrompt({ translations, onNavigate }: LoginPromptProps) {
  return (
    <div className="relative w-full max-w-md mx-auto p-4 pt-12 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg shadow-lg border border-indigo-100/50 dark:border-indigo-900/50">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 p-[2px] shadow-md hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full animate-spin-slow opacity-30"></div>
          <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <FaUserPlus className="text-2xl text-indigo-500 dark:text-indigo-400" />
          </div>
        </div>
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          {translations.WelcomeBack}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-sm mx-auto">
          {translations.PleaseLogIn}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/login"
            onClick={onNavigate}
            className="group relative overflow-hidden w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2
              bg-gradient-to-r from-indigo-500 to-purple-500 
              hover:from-indigo-600 hover:to-purple-600
              text-white shadow-md hover:shadow-lg
              transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <FaSignInAlt className="text-sm flex-shrink-0" />
            <span className="whitespace-nowrap">{translations.LogIn}</span>
          </Link>

          <Link
            to="/register"
            onClick={onNavigate}
            className="group relative overflow-hidden w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2
              bg-gradient-to-r from-gray-50 to-gray-100 
              dark:from-gray-800 dark:to-gray-700
              text-gray-700 dark:text-gray-200 
              border border-gray-200 dark:border-gray-600
              hover:border-indigo-200 dark:hover:border-indigo-800
              shadow hover:shadow-md
              transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <FaUserPlus className="text-sm flex-shrink-0" />
            <span className="whitespace-nowrap">{translations.SignUp}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPrompt;
