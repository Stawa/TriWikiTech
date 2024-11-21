import { MetaFunction } from "@remix-run/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "@remix-run/react";
import { IoNavigateOutline, IoNavigateSharp } from "react-icons/io5";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Elevate Your Coding Skills" },
  {
    name: "description",
    content:
      "Embark on a transformative learning journey with TriWikiTech's cutting-edge programming courses. Tailored for students, teachers, and professionals alike.",
  },
];

const courses = [
  {
    name: "JavaScript Fundamentals",
    icon: "/lang/JS.svg",
    color: "from-yellow-400 to-yellow-600",
    description: "Learn the basics of JavaScript, the language of the web.",
    totalCourses: 0,
    level: "Beginner",
    href: "/courses/javascript",
  },
  {
    name: "Python Basics",
    icon: "/lang/Python.svg",
    color: "from-green-400 to-green-600",
    description:
      "Start your programming journey with Python, a versatile language.",
    totalCourses: 0,
    level: "Beginner",
    href: "/courses/python",
  },
  {
    name: "Introduction to Java",
    icon: "/lang/Java.svg",
    color: "from-purple-400 to-purple-600",
    description: "Dive into object-oriented programming with Java.",
    totalCourses: 0,
    level: "Beginner to Intermediate",
    href: "/courses/java",
  },
  {
    name: "C++ for Beginners",
    icon: "/lang/CPP.svg",
    color: "from-indigo-400 to-indigo-600",
    description:
      "Master the fundamentals of C++, a powerful systems programming language.",
    totalCourses: 15,
    level: "Beginner to Intermediate",
    href: "/courses/cpp",
  },
  {
    name: "Web Development Basics",
    icon: "/lang/Ruby.svg",
    color: "from-pink-400 to-pink-600",
    description:
      "Build your first website and learn the essentials of web development.",
    totalCourses: 0,
    level: "Beginner",
    href: "/courses/ruby",
  },
  {
    name: "Introduction to Go",
    icon: "/lang/Go.svg",
    color: "from-cyan-400 to-cyan-600",
    description:
      "Explore Go, a modern language designed for concurrent programming.",
    totalCourses: 0,
    level: "Intermediate",
    href: "/courses/go",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans">
      <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight tracking-tight text-center"
          >
            Start Your Coding Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl lg:text-3xl text-purple-100 mb-10 sm:mb-12 max-w-4xl mx-auto text-center leading-relaxed"
          >
            Begin your programming adventure with TriWikiTech's
            beginner-friendly courses designed for students like you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            <Link
              to="#courses"
              className="bg-white text-purple-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition duration-300 text-base sm:text-lg inline-flex items-center justify-center shadow-lg group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10">Explore Courses</span>
              <FaArrowRight className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-800" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link
              to="/compiler"
              className="bg-transparent border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition duration-300 text-base sm:text-lg inline-flex items-center justify-center group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-800">
                Try Online Compiler
              </span>
              <IoNavigateOutline className="ml-2 relative z-10 w-5 h-5 transition-transform duration-300 group-hover:hidden text-white group-hover:text-purple-800" />
              <IoNavigateSharp className="ml-2 relative z-10 w-5 h-5 transition-transform duration-300 hidden group-hover:block text-white group-hover:text-purple-800" />
              <div className="absolute inset-0 bg-white transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>

      <main className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.section
            id="courses"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-center text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Beginner-Friendly Courses
            </h2>
            <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Embark on your coding journey with our carefully curated selection
              of courses, designed to provide a solid foundation for beginners
              and a smooth learning experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {courses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-102 transition duration-300 flex flex-col"
                >
                  <div className={`h-3 bg-gradient-to-r ${course.color}`}></div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center mb-6">
                      <img
                        src={course.icon}
                        alt={`${course.name} icon`}
                        className="w-16 h-16 mr-4 object-contain"
                      />
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {course.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mt-2 mb-4 text-xs font-medium">
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-3 rounded-full mb-2 mr-2">
                        {course.level}
                      </span>
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-3 rounded-full mb-2">
                        <b className="text-yellow-800 dark:text-yellow-200">
                          {course.totalCourses}
                        </b>{" "}
                        Courses
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {course.description}
                    </p>
                    <Link
                      to={course.href}
                      className={`block w-full text-center bg-gradient-to-r ${course.color} text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1`}
                    >
                      Start Learning
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
