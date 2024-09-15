"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaCode, FaLightbulb, FaRocket, FaCompass } from "react-icons/fa";
import Link from "next/link";
import GridBackground from "@components/grid";
import Courses from "@components/courses/c/navigation";
import CourseNavigationButtons from "@components/courses/buttons";

export default function CCourses() {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
              C Programming Mastery
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-200">
              Master the foundation of modern computing
            </p>
          </motion.header>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 sm:mb-12 md:mb-16 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaCode className="mr-3" /> What is C?
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              C is a powerful, efficient, and flexible programming language that
              forms the backbone of many modern technologies. It provides
              low-level access to memory and hardware, making it ideal for
              system programming and developing high-performance applications.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 sm:mb-12 md:mb-16 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaLightbulb className="mr-3" /> Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl">
              {[
                "Low-level Memory Access",
                "Efficient Performance",
                "Portability",
                "Extensive Standard Library",
                "Structured Programming",
                "Foundation for Other Languages",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3 text-blue-600 dark:text-blue-400 text-2xl">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaRocket className="mr-3" /> Why Learn C?
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Learning C provides a deep understanding of how computers work at
              a low level. It&apos;s essential for system programming, embedded
              systems, and developing high-performance applications. C&apos;s
              influence on other languages makes it an excellent foundation for
              any programmer.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center">
              <FaCompass className="mr-3" /> Course Roadmap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Courses.slice(1, -1).map((course, index) => (
                <Link href={course.link} key={index + 1}>
                  <div className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border border-blue-600 dark:border-blue-400 p-6 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                          {course.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                      {course.desc}
                    </p>
                    <span className="text-base sm:text-lg text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mt-auto">
                      Start Learning <FaArrowRight className="ml-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
          <CourseNavigationButtons
            colorStyle="bg-blue-600"
            courses={Courses}
            currentIndex={0}
          />
        </div>
      </div>
    </div>
  );
}
