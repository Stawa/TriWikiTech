"use client";

import Loading from "@components/loading";
import { lazy, Suspense } from "react";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const Link = lazy(() => import("next/link"));

export default function Error({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-5 py-6 sm:py-10">
        <main>
          <FaExclamationTriangle className="text-4xl sm:text-5xl md:text-7xl mx-auto mb-3 sm:mb-5 text-yellow-600 dark:text-yellow-400" />
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-5 text-yellow-600 dark:text-yellow-400">
            Oops! Something went wrong
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-8 text-gray-900 dark:text-gray-100">
            We apologize for the inconvenience. An error has occurred.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-8 text-red-600 dark:text-red-400">
            Error: {error.message}
          </p>
          <nav className="space-y-3 sm:space-y-5">
            <div className="flex justify-center space-x-4">
              <Suspense fallback={<Loading />}>
                <Link
                  href="/"
                  className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded-full transition duration-300 text-xs sm:text-sm"
                >
                  <FaHome className="mr-2" />
                  Back to Home
                </Link>
              </Suspense>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
}
