import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaCompass,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

import GridBackground from "@components/grid";
import Section from "@default/components/courses/section";
import {
  Course,
  CourseNavigationButtons,
} from "@default/components/courses/buttons";
import { Locale } from "@default/i18n/config";

interface PageContent {
  header: {
    title: string;
    description: string;
    explanation: string;
    whyLearn: string;
  };
  features: string[];
}

interface ContentProps {
  locale: Locale;
  translations: any;
  length: number;
}

interface HeaderProps {
  title: string;
  description: string;
  explanation: string;
  whyLearn: string;
}

interface CourseContainerProps {
  header: HeaderProps;
  features: string[];
  courses: Course[];
}

const getPageContent = (items: ContentProps): PageContent => {
  const header = {
    title: items.translations("title"),
    description: items.translations("description"),
    explanation: items.translations("explanation"),
    whyLearn: items.translations("whyLearn"),
  };

  const features: string[] = Array.from({ length: items.length }, (_, i) =>
    items.translations(`features.${i}`)
  );

  return { header, features };
};

const CourseContainer = ({
  header,
  features,
  courses,
}: CourseContainerProps) => {
  const t = useTranslations("Courses.MainPage");

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 dark:from-gray-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 lg:mb-20 xl:mb-24 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500">
              {header.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-700 dark:text-blue-300 mt-1 sm:mt-2 lg:mt-3 xl:mt-4">
              {header.description}
            </p>
          </motion.header>

          <Section id={`what-is-${header.title}`} delay={0.3}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white tracking-wide flex items-center space-x-3">
                  <FaCode className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    {t("WhatIs")} {header.title}?
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  {header.explanation}
                </p>
              </div>
            </div>
          </Section>

          <Section id="key-features" delay={0.5}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white tracking-wide flex items-center space-x-3">
                  <FaLightbulb className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    {t("KeyFeatures")}
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-200">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-blue-600 dark:text-blue-400 text-xl">
                        ▹
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id={`why-learn-${header.title}`} delay={0.7}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white tracking-wide flex items-center space-x-3">
                  <FaRocket className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    {t("WhyLearn")} {header.title}?
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  {header.whyLearn}
                </p>
              </div>
            </div>
          </Section>

          <Section id="course-roadmap" delay={0.9}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-800 dark:text-white tracking-wide flex items-center">
              <FaCompass className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              {t("CourseRoadmap")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {courses.slice(0, -1).map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-white tracking-wide flex items-center">
                      <span className="mr-2 text-blue-600 dark:text-blue-300">
                        {course.icon}
                      </span>
                      {course.title}
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg flex-grow flex flex-col justify-between">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    <Link
                      href={course.link}
                      className="text-blue-600 dark:text-blue-300 font-semibold flex items-center mt-auto text-sm sm:text-base hover:text-blue-500 dark:hover:text-blue-200 transition-colors duration-300"
                    >
                      {t("StartLearning")}
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="mx-2 sm:mx-4 lg:mx-6">
            <CourseNavigationButtons courses={courses} currentIndex={-1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseContainer, getPageContent };
