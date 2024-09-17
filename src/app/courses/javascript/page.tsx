"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaCompass,
} from "react-icons/fa";
import Link from "next/link";
import GridBackground from "@components/grid";
import Courses from "@components/courses/javascript/navigation";
import CourseNavigationButtons from "@components/courses/buttons";
import Section from "@components/courses/section";

export default function JavaScriptCourses() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 dark:from-gray-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 lg:mb-16 text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500">
              JavaScript Mastery
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-700 dark:text-blue-300">
              Unlock the power of modern web development
            </p>
          </motion.header>

          <Section id="what-is-javascript" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white tracking-wide flex items-center space-x-3">
                  <FaCode className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    What is JavaScript?
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  JavaScript is a versatile, high-level programming language
                  essential for creating dynamic and interactive web
                  experiences. It powers modern web development, enabling
                  complex features and responsive interfaces.
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
                    Key Features
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-200">
                  {[
                    "Interactive UIs",
                    "Asynchronous Operations",
                    "DOM Manipulation",
                    "Client-side Validation",
                    "Animations & Effects",
                    "Full-stack Development",
                  ].map((feature, index) => (
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

          <Section id="why-learn-javascript" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white tracking-wide flex items-center space-x-3">
                  <FaRocket className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    Why Learn JavaScript?
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  As one of the most in-demand programming languages, JavaScript
                  opens doors to countless opportunities in web development.
                  Master JavaScript to create cutting-edge applications and stay
                  at the forefront of technology.
                </p>
              </div>
            </div>
          </Section>

          <Section id="course-roadmap" delay={0.9}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-800 dark:text-white tracking-wide flex items-center">
              <FaCompass className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Course Roadmap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {Courses.slice(1, -1).map((course, index) => (
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
                      {course.desc}
                    </p>
                    <Link
                      href={course.link}
                      className="text-blue-600 dark:text-blue-300 font-semibold flex items-center mt-auto text-sm sm:text-base hover:text-blue-500 dark:hover:text-blue-200 transition-colors duration-300"
                    >
                      Start Learning{" "}
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="mx-2 sm:mx-4 lg:mx-6">
            <CourseNavigationButtons courses={Courses} currentIndex={0} />
          </div>
        </div>
      </div>
    </div>
  );
}
