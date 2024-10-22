import { Link } from "@remix-run/react";
import { FaSignInAlt, FaUser } from "react-icons/fa";

function LoginPrompt({
  translations,
}: {
  translations: Record<string, string>;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-indigo-900 dark:via-purple-900 dark:to-fuchsia-900 p-3 sm:p-6 rounded-lg shadow-2xl border border-purple-100 dark:border-indigo-700 transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-r from-indigo-400 to-purple-500 dark:from-pink-500 dark:to-indigo-600 rounded-full p-3 shadow-lg">
          <FaUser className="text-2xl text-white" />
        </div>
      </div>
      <h2 className="text-xl sm:text-2xl text-center font-bold text-gray-800 dark:text-fuchsia-100 mb-2">
        {translations.WelcomeBack}
      </h2>
      <p className="text-center mb-4 text-gray-600 dark:text-indigo-200 text-xs sm:text-sm max-w-xs">
        {translations.PleaseLogIn}
      </p>
      <Link
        to="/login"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-fuchsia-600 dark:to-indigo-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 dark:hover:from-fuchsia-700 dark:hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center w-full max-w-xs shadow-lg hover:shadow-xl"
      >
        <FaSignInAlt className="mr-2" />
        {translations.LogIn}
      </Link>
      <p className="mt-4 text-xs text-gray-500 dark:text-fuchsia-200">
        {translations.NewUser}{" "}
        <Link
          to="/register"
          className="text-indigo-600 hover:text-purple-500 dark:text-pink-400 dark:hover:text-indigo-300 font-medium transition-colors duration-300"
        >
          {translations.SignUp}
        </Link>
      </p>
    </div>
  );
}

export default LoginPrompt;
