import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaGraduationCap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

export const FirstCodeMetaData = {
  title: "TriWikiTech | First JavaScript Code",
  description:
    "Write your first JavaScript code and learn the basics of programming.",
};

export function FirstJavaScriptCode() {
  const navigation = {
    previous: {
      href: "/courses/javascript/setup",
      title: "Environment Setup",
    },
    next: {
      href: "/courses/javascript/variables",
      title: "Variables & Data Types",
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_2px,transparent_2px)] bg-[length:30px_30px] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center mb-6 md:mb-8 px-4 py-2 md:px-6 md:py-3 rounded-full bg-blue-50/80 dark:bg-blue-900/50 shadow-lg backdrop-blur-sm">
              <SiJavascript className="text-blue-500 dark:text-blue-400 mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-300">
                Chapter 1: Getting Started
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8 leading-tight">
              Write Your First
              <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                JavaScript Code
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
              Begin your JavaScript journey by writing and understanding simple
              programs. Learn the fundamentals of syntax, variables, and output
              through hands-on examples.
            </p>

            <div className="flex justify-center">
              <div className="flex items-center gap-4 px-6 py-3 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-3">
                  <img
                    alt="Author avatar"
                    width="460"
                    height="460"
                    decoding="async"
                    className="rounded-full h-8 w-8 ring-2 ring-blue-500/20 dark:ring-blue-400/20"
                    src="https://avatars.githubusercontent.com/u/69102292?v=4"
                  />
                  <a
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Stawa"
                  >
                    Stawa
                  </a>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                <time
                  dateTime="2024-11-25"
                  title="Written on November 25, 2024"
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  November 25, 2024
                </time>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-sm">
              Getting Started with JavaScript
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Begin your JavaScript journey with simple examples that build your
              understanding step by step.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/20 dark:border-blue-700/50 overflow-hidden p-8 text-center"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-xl flex items-center justify-center shadow-inner">
                <div className="text-3xl text-blue-600 dark:text-blue-400">
                  🚧
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Coming Soon
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  We're working hard to bring you comprehensive JavaScript
                  learning content. Check back soon for detailed examples and
                  interactive lessons.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Course Navigation */}
          <div className="mt-16 md:mt-24 mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-6 mx-auto">
              <Link
                to={navigation.previous.href}
                className="group flex items-center p-4 md:p-6 px-6 md:px-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-blue-100/20 dark:border-blue-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="p-2 md:p-3 rounded-xl bg-blue-500 flex items-center justify-center">
                    <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Previous Chapter
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                      {navigation.previous.title}
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                to="/courses/javascript"
                className="group flex items-center p-4 md:p-6 px-6 md:px-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-blue-100/20 dark:border-blue-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="p-2 md:p-3 rounded-xl bg-blue-500 flex items-center justify-center">
                    <FaGraduationCap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Course Overview
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                      JavaScript Course
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                to={navigation.next.href}
                className="group flex items-center p-4 md:p-6 px-6 md:px-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-blue-100/20 dark:border-blue-700/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="flex flex-col">
                    <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Next Chapter
                    </span>
                    <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                      {navigation.next.title}
                    </span>
                  </div>
                  <div className="p-2 md:p-3 rounded-xl bg-blue-500 flex items-center justify-center">
                    <FaArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
