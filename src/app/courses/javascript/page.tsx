"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaArrowLeft } from "react-icons/fa";

export default function JavaScriptCourses() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-5 py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaCode className="text-4xl sm:text-5xl md:text-7xl mx-auto mb-3 sm:mb-5 text-yellow-500 dark:text-yellow-400" />
          <motion.h1
            className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            JavaScript Course Coming Soon
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg mb-5 sm:mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We&apos;re working hard to bring you an amazing JavaScript learning
            experience.
          </motion.p>
          <motion.div
            className="space-y-3 sm:space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Stay tuned for our comprehensive JavaScript course.
            </p>
            <div className="flex justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-2 sm:py-2.5 px-3 sm:px-5 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm"
              >
                <FaArrowLeft className="mr-2" />
                Back to Courses
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
