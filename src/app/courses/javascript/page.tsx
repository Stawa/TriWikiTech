"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaCode, FaLightbulb, FaRocket, FaCompass } from "react-icons/fa";
import { TbLambda } from "react-icons/tb";
import { PiBracketsCurlyDuotone } from "react-icons/pi";

export default function JavaScriptCourses() {
  const courses = [
    {
      title: "Introduction",
      desc: "JavaScript fundamentals and ecosystem",
      link: "/courses/javascript/",
      icon: (
        <FaLightbulb className="text-yellow-500 text-xl sm:text-2xl mb-2" />
      ),
    },
    {
      title: "Basics",
      desc: "Variables, data types, and control structures",
      link: "/courses/javascript/basics",
      icon: <FaCode className="text-blue-500 text-xl sm:text-2xl mb-2" />,
    },
    {
      title: "Functions",
      desc: "Defining and using functions effectively",
      link: "/courses/javascript/functions",
      icon: <TbLambda className="text-red-500 text-xl sm:text-2xl mb-2" />,
    },
    {
      title: "Objects & Arrays",
      desc: "Working with complex data structures",
      link: "/courses/javascript/objects-and-arrays",
      icon: (
        <PiBracketsCurlyDuotone className="text-green-500 text-xl sm:text-2xl mb-2" />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 md:mb-12 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            JavaScript Mastery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Unlock the power of modern web development
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-blue-600 dark:text-blue-400 flex items-center">
            <FaCode className="mr-2" /> What is JavaScript?
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            JavaScript is a versatile, high-level programming language essential
            for creating dynamic and interactive web experiences. It powers
            modern web development, enabling complex features and responsive
            interfaces.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center">
            <FaLightbulb className="mr-2" /> Key Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base md:text-lg">
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">▹</span>Interactive UIs
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">▹</span>Asynchronous
              Operations
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">▹</span>DOM Manipulation
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">▹</span>Client-side
              Validation
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">▹</span>Animations &
              Effects
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-purple-600">▹</span>Full-stack
              Development
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center">
            <FaRocket className="mr-2" /> Why Learn JavaScript?
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            As one of the most in-demand programming languages, JavaScript opens
            doors to countless opportunities in web development. Master
            JavaScript to create cutting-edge applications and stay at the
            forefront of technology.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
            <FaCompass className="mr-2" /> Course Roadmap
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {courses.map((course, index) => (
              <Link href={course.link} key={index}>
                <div className="border border-gray-300 dark:border-gray-700 p-3 sm:p-4 md:p-6 rounded-lg hover:shadow-md transition duration-300">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-1">
                      {course.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400 ml-2">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    {course.desc}
                  </p>
                  <span className="text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:underline">
                    Start Learning →
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
                courses.findIndex((course) => course.title === "JavaScript") - 1
              ]?.link || "/courses"
            }
            className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-xs sm:text-sm md:text-base"
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
                courses.findIndex((course) => course.title === "JavaScript") + 1
              ]?.link || "/courses"
            }
            className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-xs sm:text-sm md:text-base"
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
  );
}
