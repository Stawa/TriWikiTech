import { motion } from "framer-motion";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { Link } from "@remix-run/react";

export default function CourseNotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-2 border-blue-300/50 dark:border-blue-600/40 hover:shadow-xl transition-all duration-300"
      >
        <div className="relative">
          <FaExclamationTriangle className="relative mx-auto h-20 w-20 text-yellow-500 dark:text-yellow-400" />
        </div>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl text-center">
          Course Not Found
        </h1>

        <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 text-center leading-relaxed">
          Sorry, we couldn't find the course you're looking for. It might have
          been moved, deleted, or never existed.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-4 rounded-xl text-base font-medium text-white bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 hover:from-blue-600 hover:via-indigo-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300 shadow-lg"
          >
            <FaArrowLeft className="mr-2" />
            Back to Courses
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
