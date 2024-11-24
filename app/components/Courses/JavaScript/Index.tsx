import { motion } from "framer-motion";
import {
  FaGlobe,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaChevronDown,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { GiScrollUnfurled } from "react-icons/gi";
import { GiAtom } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const JavaScriptCourseMeta = {
  title: "TriWikiTech | JavaScript Course",
  description:
    "Master JavaScript with our comprehensive course. Learn modern best practices, advanced concepts, and build real-world applications.",
};

export function JavaScriptCourse() {
  const [openCategory, setOpenCategory] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterLevel, setFilterLevel] = useState<string>("");

  const courseModules = [
    {
      id: 1,
      category: "Getting Started",
      icon: (
        <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      modules: [
        {
          title: "Setup & Installation",
          description: "Set up your JavaScript development environment",
          duration: "2 hours",
          level: "Beginner",
          href: "/courses/javascript/setup",
        },
        {
          title: "Writing Your First JavaScript Code",
          description: "Write and run your first JavaScript program",
          duration: "2 hours",
          level: "Beginner",
          href: "/courses/javascript/first-code",
        },
        {
          title: "Variables & Data Types",
          description:
            "Learn about JavaScript variables, primitive data types, type conversion, and basic operations",
          duration: "3 hours",
          level: "Beginner",
          href: "/courses/javascript/variables",
        },
      ],
    },
    {
      id: 2,
      category: "Core Fundamentals",
      icon: <GiAtom className="text-2xl text-blue-600 dark:text-blue-400" />,
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
      icon: (
        <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
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
      icon: (
        <IoInfinite className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
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

  const filteredModules = courseModules
    .map((category) => ({
      ...category,
      modules: category.modules.filter((module) => {
        const matchesSearch =
          module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          module.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          category.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel =
          !filterLevel ||
          module.level.toLowerCase() === filterLevel.toLowerCase();
        return matchesSearch && matchesLevel;
      }),
    }))
    .filter((category) => category.modules.length > 0);

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

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12 rounded-2xl mx-auto">
            <div className="relative flex-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <input
                type="text"
                placeholder="Search modules..."
                className="w-full px-5 py-4 rounded-xl border-2 border-blue-200/40 dark:border-blue-700/40 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300 backdrop-blur-sm relative z-10 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
              <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-500/70 dark:text-blue-400/70 z-10" />
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <select
                className="w-full sm:w-48 px-5 py-4 rounded-xl border-2 border-blue-200/40 dark:border-blue-700/40 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300 backdrop-blur-sm relative z-10 cursor-pointer appearance-none"
                onChange={(e) => setFilterLevel(e.target.value)}
                value={filterLevel}
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-500/70 dark:text-blue-400/70 pointer-events-none z-10" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filterLevel ? (
            // Filtered view
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 backdrop-blur-sm border border-blue-100/20 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center">
                  <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {filterLevel.charAt(0).toUpperCase() + filterLevel.slice(1)} Level
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredModules.flatMap((category) =>
                  category.modules
                    .filter(
                      (module) =>
                        module.level.toLowerCase() === filterLevel.toLowerCase()
                    )
                    .map((module, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/5 rounded-xl p-5 shadow-sm border border-blue-100/20 dark:border-blue-700/30 hover:shadow-md hover:border-blue-200/30 dark:hover:border-blue-600/40 transition-all duration-200"
                      >
                        <Link
                          to={module.href}
                          className="block h-full"
                        >
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {module.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {module.description}
                          </p>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="inline-flex items-center text-blue-600 dark:text-blue-400">
                              <FaClock className="mr-1" />
                              {module.duration}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-indigo-600 dark:text-indigo-400">
                              {module.level}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))
                )}
              </div>
            </div>
          ) : (
            // Category view
            filteredModules.map((category, categoryIndex) => (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 backdrop-blur-sm border border-blue-100/20 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenCategory(
                      openCategory === categoryIndex ? -1 : categoryIndex
                    )
                  }
                  className="w-full group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-indigo-800/40 transition-all duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.category}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: openCategory === categoryIndex ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="ml-auto"
                    >
                      <FaChevronDown className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openCategory === categoryIndex ? "auto" : 0,
                    opacity: openCategory === categoryIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {category.modules.map((module, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/5 rounded-xl p-5 shadow-sm border border-blue-100/20 dark:border-blue-700/30 hover:shadow-md hover:border-blue-200/30 dark:hover:border-blue-600/40 transition-all duration-200"
                      >
                        <Link
                          to={module.href}
                          className="block h-full"
                        >
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {module.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {module.description}
                          </p>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="inline-flex items-center text-blue-600 dark:text-blue-400">
                              <FaClock className="mr-1" />
                              {module.duration}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-indigo-600 dark:text-indigo-400">
                              {module.level}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
