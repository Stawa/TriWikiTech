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
import Courses from "@components/courses/c/navigation";
import CourseNavigationButtons from "@components/courses/buttons";
import Section from "@components/courses/section";

export default function CCourses() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 lg:mb-20 xl:mb-24 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              C Programming Mastery
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-300 mt-1 sm:mt-2 lg:mt-3 xl:mt-4">
              Master the foundation of modern computing through C programming
            </p>
          </motion.header>

          <Section id="what-is-c" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-black bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide flex items-center space-x-3">
                  <FaCode className="text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    What is C?
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
                  C is a powerful, efficient, and flexible programming language
                  that forms the backbone of many modern technologies. It
                  provides low-level access to memory and hardware, making it
                  ideal for system programming and developing high-performance
                  applications.
                </p>
              </div>
            </div>
          </Section>

          <Section id="key-features" delay={0.5}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-black bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide flex items-center space-x-3">
                  <FaLightbulb className="text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Key Features
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base lg:text-lg text-gray-200">
                  {[
                    "Low-level Memory Access",
                    "Efficient Performance",
                    "Portability",
                    "Extensive Standard Library",
                    "Structured Programming",
                    "Foundation for Other Languages",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-blue-400 text-xl">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="why-learn-c" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-black bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide flex items-center space-x-3">
                  <FaRocket className="text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Why Learn C?
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
                  Learning C provides a deep understanding of how computers work
                  at a low level. It&apos;s essential for system programming,
                  embedded systems, and developing high-performance
                  applications. C&apos;s influence on other languages makes it
                  an excellent foundation for any programmer.
                </p>
              </div>
            </div>
          </Section>

          <Section id="course-roadmap" delay={0.9}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-white tracking-wide flex items-center">
              <FaCompass className="mr-2 sm:mr-3 text-blue-300" />
              Course Roadmap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {Courses.slice(1, -1).map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="bg-black bg-opacity-50 p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide flex items-center">
                      <span className="mr-2 text-blue-300">{course.icon}</span>
                      {course.title}
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg flex-grow flex flex-col justify-between">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {course.desc}
                    </p>
                    <Link
                      href={course.link}
                      className="text-blue-300 font-semibold flex items-center mt-auto text-sm sm:text-base hover:text-blue-200 transition-colors duration-300"
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
            <CourseNavigationButtons
              courses={Courses}
              currentIndex={Courses.findIndex(
                (course) => course.link === "/courses/c/"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
