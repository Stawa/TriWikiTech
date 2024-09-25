"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaBook, FaCode } from "react-icons/fa";
import { IoNavigateOutline, IoNavigateSharp } from "react-icons/io5";

import { Locale } from "@default/i18n/config";
import Languages from "@default/app/language";
import GridBackground from "@components/grid";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden">
    <GridBackground />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale() as Locale;

  return (
    <Layout>
      <section className="container mx-auto px-4 py-12 md:py-24 text-center">
        <h1 className="animate-text-reveal text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          {t("title")}
        </h1>
        <p className="animate-text-reveal-from-down text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>
        <div className="animate-text-reveal-from-down flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
          <Link
            href="/#start"
            className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-base md:text-lg transition duration-300 hover:shadow-lg hover:scale-105 transform overflow-hidden"
          >
            <IoNavigateOutline className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:hidden" />
            <IoNavigateSharp className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hidden group-hover:block" />
            <span className="relative z-10">{t("startJourney")}</span>
          </Link>
          <Link
            href="/courses"
            className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-pink-500 text-pink-500 rounded-full font-bold text-base md:text-lg transition duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:scale-105 transform overflow-hidden"
          >
            <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t("exploreCourses")}
            </span>
          </Link>
        </div>
      </section>
      <section id="start" className="container mx-auto px-4 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="animate-text-reveal-from-down text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            {t("exploreTools")}
          </h2>
          <div className="animate-smooth-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 md:px-4 lg:px-6">
            {Languages.map((course, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col"
              >
                <div
                  className={`p-6 md:p-8 bg-gradient-to-br ${course.color} flex items-center justify-center w-full`}
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={100}
                    height={100}
                    priority={true}
                    className="object-contain filter drop-shadow-lg w-20 h-20 md:w-28 md:h-28"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-gray-800 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {course.description[locale]}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <Link
                      href={course.link}
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base"
                    >
                      <FaBook className="mr-3 text-lg" />
                      {t("learnNow")}
                    </Link>
                    <Link
                      href={course.compiler.href}
                      className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base"
                    >
                      <FaCode className="mr-3 text-lg" />
                      {t("tryCompiler")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
