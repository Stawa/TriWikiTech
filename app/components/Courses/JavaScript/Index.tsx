import { motion } from "framer-motion";
import {
  FaGlobe,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { GiScrollUnfurled } from "react-icons/gi";
import { GiAtom } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function JavaScriptCourse() {
  const [openCategory, setOpenCategory] = useState<number>(0);

  const courseModules = [
    {
      id: 1,
      category: "Getting Started",
      modules: [
        {
          title: "Introduction to JavaScript",
          description:
            "Learn about JavaScript's history, ecosystem and setup your development environment",
          duration: "2 hours",
          level: "Beginner",
          href: "/courses/javascript/introduction",
        },
        {
          title: "Development Tools & Environment",
          description:
            "Master essential developer tools, code editors and debugging techniques",
          duration: "3 hours",
          level: "Beginner",
          href: "/courses/javascript/development-tools",
        },
      ],
    },
    {
      id: 2,
      category: "Core Fundamentals",
      modules: [
        {
          title: "Variables & Data Types",
          description:
            "Understanding variables, data types, and basic operations",
          duration: "4 hours",
          level: "Beginner",
          href: "/courses/javascript/variables-data-types",
        },
        {
          title: "Control Flow & Functions",
          description:
            "Master conditional statements, loops, and function fundamentals",
          duration: "5 hours",
          level: "Beginner",
          href: "/courses/javascript/control-flow-functions",
        },
      ],
    },
    {
      id: 3,
      category: "Advanced Concepts",
      modules: [
        {
          title: "Object-Oriented JavaScript",
          description:
            "Deep dive into objects, prototypes, and modern class syntax",
          duration: "6 hours",
          level: "Intermediate",
          href: "/courses/javascript/object-oriented",
        },
        {
          title: "Asynchronous Programming",
          description:
            "Master promises, async/await, and handle asynchronous operations",
          duration: "8 hours",
          level: "Advanced",
          href: "/courses/javascript/asynchronous-programming",
        },
      ],
    },
    {
      id: 4,
      category: "Modern JavaScript",
      modules: [
        {
          title: "ES6+ Features",
          description: "Learn modern JavaScript features and best practices",
          duration: "5 hours",
          level: "Intermediate",
          href: "/courses/javascript/es6-features",
        },
        {
          title: "Web APIs & DOM",
          description:
            "Interact with web pages and handle browser APIs effectively",
          duration: "6 hours",
          level: "Intermediate",
          href: "/courses/javascript/web-apis-dom",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        {/* Enhanced gradient background with more vibrant colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 opacity-90"></div>

        {/* Improved dot pattern with animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] bg-[length:20px_20px] animate-pulse"></div>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full text-center"
          >
            {/* Enhanced course badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-2.5 mb-10 rounded-full bg-white/10 text-blue-50 backdrop-blur-md border border-white/20 shadow-lg">
              <FaClock className="text-base" />
              <span className="text-base font-semibold tracking-wide">
                10-Week Course
              </span>
            </div>

            {/* Improved typography and spacing */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 leading-tight">
              <span className="block text-white mb-3 text-shadow-lg">
                The Art of
              </span>
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-2xl">
                JavaScript
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-50 max-w-3xl mx-auto mb-8 leading-relaxed font-light tracking-wide">
              Embark on a transformative journey from foundational concepts to
              advanced mastery. Build real-world applications while learning
              modern best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose JavaScript Section */}
      <section className="w-full bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Why Choose JavaScript?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              JavaScript powers the modern web, enabling developers to build
              dynamic and interactive applications across all platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/50"
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
                <FaGlobe className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Universal Language</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Runs everywhere - browsers, servers, mobile apps, and more
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/50"
            >
              <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mb-4">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">High Demand</h3>
              <p className="text-gray-600 dark:text-gray-400">
                One of the most sought-after skills in tech industry
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/50"
            >
              <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center mb-4">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy to Learn</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beginner-friendly with a gradual learning curve
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main JavaScript Content Section */}
      <section className="w-full bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              The Power of JavaScript
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From powering interactive web experiences to building full-stack
              applications, JavaScript has revolutionized modern software
              development. Discover why it's the most popular programming
              language in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-blue-100/20 dark:border-blue-700/50"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                      <GiScrollUnfurled className="text-2xl text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Rich History & Evolution
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Created in just 10 days by Brendan Eich in 1995, JavaScript
                    has grown from a simple scripting language to the world's
                    most widely-used programming language. Its evolution through
                    ECMAScript standards ensures it stays modern and powerful.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-blue-100/20 dark:border-blue-700/50"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center">
                      <IoInfinite className="text-2xl text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Versatile & Powerful
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    JavaScript's versatility is unmatched. From front-end
                    frameworks like React and Vue to backend runtime Node.js,
                    from mobile development with React Native to desktop apps
                    with Electron. Master JavaScript, and you can build
                    anything.
                  </p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-blue-100/20 dark:border-blue-700/50"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center">
                      <GiAtom className="text-2xl text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white">
                      Modern Features
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Today's JavaScript includes powerful features like
                    async/await for elegant asynchronous code, modules for
                    better code organization, arrow functions for cleaner
                    syntax, and destructuring for elegant data handling. The
                    language continues to evolve with annual updates.
                  </p>
                </div>
              </motion.article>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 h-fit sticky top-24 border border-blue-100/20 dark:border-blue-700/50"
            >
              <h3 className="text-2xl font-bold mb-6 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
                What You Can Build
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Dynamic Web Apps
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Create responsive, interactive websites and web
                      applications with modern frameworks
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Server Applications
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Build scalable backend services, APIs, and real-time
                      applications with Node.js
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Mobile Development
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Create native mobile apps for iOS and Android using React
                      Native or Ionic
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Desktop Software
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Develop cross-platform desktop applications using Electron
                      or NW.js
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Creative Projects
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Build games, 3D graphics, animations, and creative coding
                      projects
                    </p>
                  </div>
                </li>
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Course Curriculum
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive curriculum designed to take you from JavaScript
            fundamentals to advanced full-stack development. Master modern web
            technologies through hands-on projects and real-world applications.
          </p>
        </div>
        <div className="space-y-8">
          {courseModules.map((category, categoryIndex) => (
            <div key={category.id}>
              <button
                onClick={() =>
                  setOpenCategory(
                    openCategory === categoryIndex ? -1 : categoryIndex
                  )
                }
                className="w-full"
              >
                <div className="flex items-center gap-2 py-2 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {category.category}
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-200 to-transparent dark:from-blue-800"></div>
                  <motion.div
                    animate={{
                      rotate: openCategory === categoryIndex ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openCategory === categoryIndex ? "auto" : 0,
                  opacity: openCategory === categoryIndex ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {category.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.5)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-blue-100/20 dark:border-blue-700/50 transition-colors duration-300 hover:bg-blue-50/30 dark:hover:bg-blue-900/20"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 flex-shrink-0 bg-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          <FaGraduationCap className="text-lg text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            to={module.href}
                            className="text-base font-medium text-gray-900 dark:text-gray-100 mb-1 truncate transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 block"
                          >
                            {module.title}
                          </Link>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                            {module.description}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap text-xs">
                            <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
                              <FaClock className="mr-1" /> {module.duration}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-blue-800/40">
                              {module.level}
                            </span>
                          </div>
                          <Link
                            to={module.href}
                            className="inline-flex items-center mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                          >
                            Start Learning
                            <FaArrowRight className="ml-1 text-xs" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
