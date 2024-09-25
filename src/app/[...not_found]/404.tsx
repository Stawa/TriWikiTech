import Link from "next/link";
import { FaHome, FaCode } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-5 py-6 sm:py-10">
        <div>
          <FaCode className="text-4xl sm:text-5xl md:text-7xl mx-auto mb-3 sm:mb-5 text-red-600 dark:text-red-400" />
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            404 - Page Not Found
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-8 text-gray-700 dark:text-gray-300">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <div className="space-y-3 sm:space-y-5">
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-2 sm:py-2.5 px-3 sm:px-5 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm"
              >
                <FaHome className="mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
