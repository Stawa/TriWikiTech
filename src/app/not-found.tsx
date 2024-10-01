"use client";

import { lazy, Suspense } from "react";
import { FaHome, FaCode } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Link = lazy(() => import("next/link"));

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-5 py-6 sm:py-10">
        <main>
          <FaCode className="text-4xl sm:text-5xl md:text-7xl mx-auto mb-3 sm:mb-5 text-red-600 dark:text-red-400" />
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-5 text-red-600 dark:text-red-400">
            {t("title")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-8 text-gray-900 dark:text-gray-100">
            {t("message")}
          </p>
          <nav className="space-y-3 sm:space-y-5">
            <div className="flex justify-center">
              <Suspense fallback={<div>{t("loading")}</div>}>
                <Link
                  href="/"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full transition duration-300 text-xs sm:text-sm"
                >
                  <FaHome className="mr-2" />
                  {t("backToHome")}
                </Link>
              </Suspense>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
}
