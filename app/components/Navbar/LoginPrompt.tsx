import { Link } from "@remix-run/react";
import { FaUser, FaSignInAlt } from "react-icons/fa";

function LoginPrompt({
  translations,
}: {
  translations: Record<string, string>;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-600 via-purple-500 to-blue-600 dark:bg-gradient-to-br dark:from-indigo-800 dark:via-purple-700 dark:to-blue-800 p-6 rounded-lg shadow-lg border-b border-indigo-400 dark:border-indigo-400">
      <div className="bg-white dark:bg-gray-800 rounded-full p-4 mb-6 shadow-md">
        <FaUser className="text-5xl text-indigo-600 dark:text-indigo-400" />
      </div>
      <p className="text-center mb-6 text-white dark:text-gray-200 text-lg font-medium">
        {translations.PleaseLogIn}
      </p>
      <Link
        to="/login"
        className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-indigo-100 hover:shadow-xl flex items-center dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700"
      >
        <FaSignInAlt className="mr-2" />
        {translations.LogIn}
      </Link>
    </div>
  );
}

export default LoginPrompt;
