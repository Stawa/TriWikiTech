"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaCode, FaLightbulb, FaRocket, FaCompass } from "react-icons/fa";
import { TbLambda } from "react-icons/tb";
import { PiBracketsCurlyDuotone } from "react-icons/pi";
import { GridBackground } from "@default/app/page";

export default function JavaScriptCourses() {
  const courses = [
    {
      title: "Basics",
      desc: "Variables, data types, and control structures",
      link: "/courses/javascript/basics",
      icon: (
        <FaCode className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    },
    {
      title: "Functions",
      desc: "Defining and using functions effectively",
      link: "/courses/javascript/functions",
      icon: (
        <TbLambda className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    },
    {
      title: "Objects & Arrays",
      desc: "Working with complex data structures",
      link: "/courses/javascript/objects-and-arrays",
      icon: (
        <PiBracketsCurlyDuotone className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <div className="relative z-10 text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 md:mb-16 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500">
              JavaScript Mastery
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-yellow-600 dark:text-yellow-200">
              Unlock the power of modern web development
            </p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 sm:mb-12 md:mb-16 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaCode className="mr-3" /> What is JavaScript?
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              JavaScript is a versatile, high-level programming language
              essential for creating dynamic and interactive web experiences. It
              powers modern web development, enabling complex features and
              responsive interfaces.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 sm:mb-12 md:mb-16 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaLightbulb className="mr-3" /> Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl">
              {[
                "Interactive UIs",
                "Asynchronous Operations",
                "DOM Manipulation",
                "Client-side Validation",
                "Animations & Effects",
                "Full-stack Development",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3 text-yellow-600 dark:text-yellow-400 text-2xl">
                    ▹
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 sm:mb-12 md:mb-16 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaRocket className="mr-3" /> Why Learn JavaScript?
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              As one of the most in-demand programming languages, JavaScript
              opens doors to countless opportunities in web development. Master
              JavaScript to create cutting-edge applications and stay at the
              forefront of technology.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaCompass className="mr-3" /> Course Roadmap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {courses.map((course, index) => (
                <Link href={course.link} key={index}>
                  <div className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border border-yellow-600 dark:border-yellow-400 p-6 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                          {course.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                      {course.desc}
                    </p>
                    <span className="text-base sm:text-lg text-yellow-600 dark:text-yellow-400 hover:underline inline-flex items-center mt-auto">
                      Start Learning <FaArrowRight className="ml-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <Link
              href={
                courses[
                  courses.findIndex((course) => course.title === "JavaScript") -
                    1
                ]?.link || "/courses"
              }
              className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base md:text-lg"
            >
              <FaArrowLeft className="mr-2" />
              Previous:{" "}
              {courses[
                courses.findIndex((course) => course.title === "JavaScript") - 1
              ]?.title || "Courses"}
            </Link>
            <Link
              href={
                courses[
                  courses.findIndex((course) => course.title === "JavaScript") +
                    1
                ]?.link || "/courses"
              }
              className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base md:text-lg"
            >
              Next:{" "}
              {courses[
                courses.findIndex((course) => course.title === "JavaScript") + 1
              ]?.title || "Courses"}
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
