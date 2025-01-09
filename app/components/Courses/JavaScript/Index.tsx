import { motion } from "framer-motion";
import {
  FaGlobe,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaChevronDown,
  FaArrowDown,
} from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { GiScrollUnfurled } from "react-icons/gi";
import { GiAtom } from "react-icons/gi";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBook, FiSearch } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { PiBrainDuotone, PiMonitorFill } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";

export const JavaScriptCourseMeta = {
  title: "TriWikiTech | JavaScript Course",
  description:
    "Master JavaScript with our comprehensive course. Learn modern best practices, advanced concepts, and build real-world applications.",
  image: "/courses/og/javascript_index_hero.png",
  url: "/courses/javascript",
};

export const JavaScriptCourseModules = [
  {
    id: 1,
    category: "Getting Started",
    icon: <FaGraduationCap className="text-2xl text-white" />,
    modules: [
      {
        title: "Setup & Installation",
        description: "Set up your JavaScript development environment",
        duration: "8 minutes",
        level: "Beginner",
        href: "/courses/javascript/setup",
      },
      {
        title: "Writing Your First JavaScript Code",
        description: "Write and run your first JavaScript program",
        duration: "4 minutes",
        level: "Beginner",
        href: "/courses/javascript/first-code",
      },
      {
        title: "Variables & Data Types",
        description:
          "Learn about JavaScript variables, primitive data types, type conversion, and basic operations",
        duration: "4 minutes",
        level: "Beginner",
        href: "/courses/javascript/variables",
      },
    ],
  },
];

export function JavaScriptCourse() {
  const [openCategory, setOpenCategory] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateIsMobile = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    updateIsMobile(mediaQuery);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const filteredModules = useMemo(
    () =>
      JavaScriptCourseModules.map((category) => ({
        ...category,
        modules: category.modules.filter((module) => {
          const matchesSearch =
            module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            module.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            category.category.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesLevel =
            !difficultyFilter ||
            module.level.toLowerCase() === difficultyFilter.toLowerCase();
          return matchesSearch && matchesLevel;
        }),
      })).filter((category) => category.modules.length > 0),
    [searchQuery, difficultyFilter]
  );

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section - Optimized for mobile */}
      <section
        id="hero"
        className="relative w-full py-20 sm:py-36 overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-950"
      >
        {/* Conditional rendering of animated backgrounds for desktop only */}
        {!isMobile && (
          <>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-transparent animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-500/5 to-blue-900/30"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px] opacity-50"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-float"></div>
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl animate-float-slow"></div>
            </div>
          </>
        )}

        {/* Hero Content - Simplified for mobile */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.6 }}
              className="flex items-center justify-center space-x-3 mb-6 sm:mb-10"
            >
              <div className="relative group">
                <FiCode
                  className={`${
                    isMobile ? "text-4xl" : "text-5xl"
                  } text-yellow-400`}
                />
                {!isMobile && (
                  <div className="absolute inset-0 text-yellow-400 animate-ping opacity-20">
                    <FiCode className="text-5xl" />
                  </div>
                )}
              </div>
              <span className="text-yellow-400 font-semibold tracking-wider uppercase text-base sm:text-lg bg-yellow-400/10 px-4 sm:px-6 py-2 rounded-full border border-yellow-400/20 shadow-lg shadow-yellow-400/5">
                JavaScript Course
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: 0.2 }}
              className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-8 leading-tight"
            >
              Master Modern JavaScript
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mt-2">
                Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto text-xl sm:text-2xl text-blue-100/90 mb-16 leading-relaxed font-light"
            >
              Comprehensive JavaScript course covering fundamentals to advanced
              concepts. Learn through real-world projects and industry best
              practices.
            </motion.p>

            {/* Course Stats and Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16"
            >
              {/* Educational Purpose */}
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl shadow-black/5"
              >
                <div className="relative mb-4 group">
                  <PiBrainDuotone className="text-4xl text-yellow-400 transform transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 animate-ping opacity-20">
                    <PiBrainDuotone className="text-4xl text-yellow-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Learn & Grow
                </h3>
                <p className="text-blue-100/80 text-center text-lg">
                  From basics to advanced concepts with expert guidance
                </p>
              </motion.div>

              {/* Lifetime Access */}
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl shadow-black/5"
              >
                <div className="relative mb-4 group">
                  <IoInfinite className="text-4xl text-yellow-400 transform transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 animate-ping opacity-20">
                    <IoInfinite className="text-4xl text-yellow-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Lifetime Access
                </h3>
                <p className="text-blue-100/80 text-center text-lg">
                  Including all future updates and resources
                </p>
              </motion.div>

              {/* Creative Projects */}
              <motion.div
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-xl shadow-black/5"
              >
                <div className="relative mb-4 group">
                  <GiAtom className="text-4xl text-yellow-400 transform transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 animate-ping opacity-20">
                    <GiAtom className="text-4xl text-yellow-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Unleash Creativity
                </h3>
                <p className="text-blue-100/80 text-center text-lg">
                  Transform your ideas into amazing web applications
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent transform translate-x-1/2 translate-y-1/2 rounded-full blur-2xl"></div>
      </section>

      {/* Why Choose JavaScript Section */}
      <section className="w-full bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 mb-6 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
              <FiBook className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
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
              className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10 p-8 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/30 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 dark:from-blue-400/5 dark:to-indigo-400/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-400/20 dark:shadow-blue-900/30">
                  <FaGlobe className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Universal Language
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Runs everywhere - browsers, servers, mobile apps, and more.
                  The true "write once, run anywhere" language.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-900/10 p-8 rounded-2xl shadow-lg border border-green-100/20 dark:border-green-700/30 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 dark:from-green-400/5 dark:to-emerald-400/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-400/20 dark:shadow-green-900/30">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  High Demand
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  One of the most sought-after skills in tech industry, with
                  endless career opportunities.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/10 p-8 rounded-2xl shadow-lg border border-purple-100/20 dark:border-purple-700/30 group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-400/20 dark:shadow-purple-900/30">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Easy to Learn
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Beginner-friendly with a gradual learning curve and extensive
                  resources.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main JavaScript Content Section */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 mb-6 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-900/30">
              <GiAtom className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              The Power of JavaScript
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From powering interactive web experiences to building full-stack
              applications, JavaScript has revolutionized modern software
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/30 group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 dark:from-blue-400/5 dark:to-indigo-400/5 rounded-full transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-500"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400/20 dark:shadow-blue-900/30">
                      <GiScrollUnfurled className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-900/10 rounded-2xl shadow-lg border border-green-100/20 dark:border-green-700/30 group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 dark:from-green-400/5 dark:to-emerald-400/5 rounded-full transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-500"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-green-400/20 dark:shadow-green-900/30">
                      <IoInfinite className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/10 rounded-2xl shadow-lg border border-purple-100/20 dark:border-purple-700/30 group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-500"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg shadow-purple-400/20 dark:shadow-purple-900/30">
                      <GiAtom className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-900/10 rounded-2xl shadow-lg p-8 h-fit sticky top-24 border border-indigo-100/20 dark:border-indigo-700/30"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-violet-400/10 dark:from-indigo-400/5 dark:to-violet-400/5 rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent border-b border-indigo-100 dark:border-indigo-800 pb-4">
                  What You Can Build
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-400 to-violet-400 rounded-lg flex items-center justify-center shadow-md shadow-indigo-400/20 dark:shadow-indigo-900/30">
                      <MdWeb className="w-4 h-4 text-white" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Web Applications
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Dynamic, responsive websites and web apps
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-400 to-violet-400 rounded-lg flex items-center justify-center shadow-md shadow-indigo-400/20 dark:shadow-indigo-900/30">
                      <FaMobileScreen className="w-4 h-4 text-white" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Mobile Apps
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Cross-platform mobile applications
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-400 to-violet-400 rounded-lg flex items-center justify-center shadow-md shadow-indigo-400/20 dark:shadow-indigo-900/30">
                      <PiMonitorFill className="w-4 h-4 text-white" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Backend Services
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Server-side applications and APIs
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="w-full bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-900/10 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 mb-6 shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30">
              <FiBookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Course Curriculum
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive journey from JavaScript basics to advanced
              concepts, designed for both beginners and experienced developers.
            </p>
          </div>
        </div>

        {/* Course Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/30 group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-blue-400/10 dark:from-blue-400/5 dark:to-blue-400/5 rounded-full transform translate-x-32 -translate-y-32 group-hover:translate-x-24 group-hover:-translate-y-24 transition-transform duration-500"></div>
            <div className="relative z-10 p-8">
              {/* Search and Filter Bar */}
              <div className="relative z-10 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search modules by title or description..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 border-2 border-blue-200/40 dark:border-blue-700/40 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                      />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                          <FiSearch className="w-4 h-4 text-blue-500 dark:text-blue-400 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-48">
                    <div className="relative">
                      <select
                        value={difficultyFilter}
                        onChange={(e) => setDifficultyFilter(e.target.value)}
                        className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 border-2 border-blue-200/40 dark:border-blue-700/40 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300 cursor-pointer appearance-none"
                      >
                        <option value="">All Levels</option>
                        <option value="Beginner">Beginner</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                          <FaArrowDown className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module Categories */}
              <div className="relative z-10 space-y-8">
                {filteredModules.map((category, categoryIndex) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="group"
                  >
                    {/* Category Header */}
                    <button
                      onClick={() =>
                        setOpenCategory(
                          openCategory === categoryIndex ? -1 : categoryIndex
                        )
                      }
                      className="relative w-full overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/30 group-hover:shadow-xl transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover:from-blue-400/5 group-hover:via-blue-400/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,theme(colors.blue.400/0.1)_1.5px,transparent_1.5px)] bg-[length:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_center,theme(colors.blue.400/0.1)_1.5px,transparent_1.5px)] bg-[length:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 p-0.5">
                              <div className="w-full h-full rounded-[14px] bg-white dark:bg-gray-900 flex items-center justify-center group-hover:scale-95 transition-transform duration-300">
                                <div className="w-10 h-10 flex items-center justify-center">
                                  {category.icon}
                                </div>
                              </div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center shadow-lg">
                              <div className="text-xs font-bold text-white">
                                {category.modules.length}
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-500 transition-all duration-300">
                              {category.category}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                              Master the fundamentals and advance your
                              JavaScript journey
                            </p>
                          </div>

                          <motion.div
                            animate={{
                              rotate: openCategory === categoryIndex ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20 flex items-center justify-center"
                          >
                            <FaChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </motion.div>
                        </div>
                      </div>
                    </button>

                    {/* Category Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: openCategory === categoryIndex ? "auto" : 0,
                        opacity: openCategory === categoryIndex ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                        {category.modules.map((module, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              to={module.href}
                              className="group/card block relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10 rounded-xl shadow-md hover:shadow-xl border border-blue-100/20 dark:border-blue-700/30 transition-all duration-300"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 group-hover/card:from-blue-400/5 group-hover/card:via-blue-400/5 group-hover/card:to-transparent rounded-2xl transition-all duration-500"></div>
                              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,theme(colors.blue.400/0.1)_1px,transparent_1px)] bg-[length:8px_8px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[radial-gradient(circle_at_center,theme(colors.blue.400/0.1)_1px,transparent_1px)] bg-[length:8px_8px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                              <div className="relative z-10 p-6">
                                <div className="flex items-start gap-4">
                                  <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 p-0.5">
                                      <div className="w-full h-full rounded-[10px] bg-white dark:bg-gray-900 flex items-center justify-center group-hover/card:scale-95 transition-transform duration-300">
                                        <FiBook className="w-6 h-6 text-blue-100" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors duration-300">
                                      {module.title}
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                      {module.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 mt-4">
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                                        <FaClock className="w-3 h-3" />
                                        {module.duration}
                                      </span>
                                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                                        <FaGraduationCap className="w-3 h-3" />
                                        {module.level}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="flex-shrink-0 self-center">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 p-0.5">
                                      <div className="w-full h-full rounded-[8px] bg-white dark:bg-gray-900 flex items-center justify-center group-hover/card:scale-90 transition-transform duration-300">
                                        <FiArrowRight className="w-4 h-4 text-blue-100" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
