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

const Section = ({
  children,
  id,
  delay = 0,
}: {
  children: React.ReactNode;
  id: string;
  delay?: number;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
    className="mx-4 sm:mx-6 lg:mx-8 mb-12 sm:mb-16 lg:mb-20"
  >
    {children}
  </motion.section>
);

export default function CCourses() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 lg:mb-20 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              C Programming Mastery
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-300">
              Master the foundation of modern computing
            </p>
          </motion.header>

          <Section id="what-is-c" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide flex items-center space-x-4">
                  <FaCode className="text-blue-300 text-2xl sm:text-3xl lg:text-4xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    What is C?
                  </span>
                </h2>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
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
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide flex items-center space-x-4">
                  <FaLightbulb className="text-blue-300 text-2xl sm:text-3xl lg:text-4xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Key Features
                  </span>
                </h2>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg lg:text-xl text-gray-200">
                  {[
                    "Low-level Memory Access",
                    "Efficient Performance",
                    "Portability",
                    "Extensive Standard Library",
                    "Structured Programming",
                    "Foundation for Other Languages",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-3 text-blue-400 text-2xl">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="why-learn-c" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide flex items-center space-x-4">
                  <FaRocket className="text-blue-300 text-2xl sm:text-3xl lg:text-4xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Why Learn C?
                  </span>
                </h2>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaCompass className="mr-3 sm:mr-4 text-blue-300" />
              Course Roadmap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {Courses.slice(1, -1).map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="bg-black bg-opacity-50 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide flex items-center">
                      <span className="mr-3">{course.icon}</span>
                      {course.title}
                    </h3>
                  </div>
                  <div className="p-4 sm:p-6 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg flex-grow flex flex-col justify-between">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                      {course.desc}
                    </p>
                    <Link
                      href={course.link}
                      className="text-blue-400 font-semibold flex items-center mt-auto text-base sm:text-lg hover:text-blue-300 transition-colors duration-300"
                    >
                      Start Learning{" "}
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="mx-4 sm:mx-6 lg:mx-8">
            <CourseNavigationButtons
              colorStyle="bg-blue-600"
              courses={Courses}
              currentIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
