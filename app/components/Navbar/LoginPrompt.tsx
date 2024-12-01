import { Link } from "@remix-run/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

interface LoginPromptProps {
  translations: Record<string, string>;
  onNavigate: () => void;
}

function LoginPrompt({ translations, onNavigate }: LoginPromptProps) {
  return (
    <div className="relative w-full max-w-md mx-auto p-4 pt-12 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg shadow-lg border border-indigo-200/50 dark:border-indigo-700/50">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-md hover:shadow-indigo-500/40 dark:hover:shadow-indigo-400/40 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-30"></div>
          <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <FaUserPlus className="text-2xl text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          {translations.WelcomeBack}
        </h2>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 max-w-sm mx-auto">
          {translations.PleaseLogIn}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/sign-in"
            onClick={onNavigate}
            className="group relative overflow-hidden w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
              text-white shadow-md hover:shadow-lg hover:shadow-indigo-500/20
              transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <FaSignInAlt className="text-sm flex-shrink-0" />
            <span className="whitespace-nowrap">{translations.LogIn}</span>
          </Link>

          <Link
            to="/sign-up"
            onClick={onNavigate}
            className="group relative overflow-hidden w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2
              bg-gradient-to-r from-white to-gray-50 
              dark:from-gray-800 dark:to-gray-700
              text-indigo-600 dark:text-indigo-300
              border border-indigo-200 dark:border-indigo-700
              hover:border-indigo-300 dark:hover:border-indigo-600
              shadow hover:shadow-md hover:shadow-indigo-500/10
              transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <FaUserPlus className="text-sm flex-shrink-0" />
            <span className="whitespace-nowrap">{translations.SignUp}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPrompt;
