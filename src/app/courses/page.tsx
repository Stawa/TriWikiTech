"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaBook } from "react-icons/fa";

const courses = [
  {
    title: "JavaScript Programming",
    description: "Dive into dynamic web development with JavaScript!",
    image: "/lang/JS.svg",
    link: "/courses/javascript",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "C Programming",
    description: "Master low-level programming with C!",
    image: "/lang/C.svg",
    link: "/courses/c",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "C++ Programming",
    description: "Unlock the power of object-oriented programming with C++!",
    image: "/lang/CPP.svg",
    link: "/courses/cpp",
    color: "from-indigo-400 to-indigo-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Explore Our Courses
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dive into our comprehensive programming courses designed to take you
          from beginner to expert. Choose your path and start coding today!
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
            >
              <div
                className={`p-8 bg-gradient-to-br ${course.color} flex items-center justify-center h-48`}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={100}
                  height={100}
                  className="object-contain filter drop-shadow-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-grow text-center">
                  {course.description}
                </p>
                <Link
                  href={course.link}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg"
                >
                  <FaBook className="mr-2" />
                  Start Learning
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-base md:text-lg transition duration-300 hover:from-pink-600 hover:to-purple-700 hover:shadow-lg hover:scale-105 transform overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <FaArrowLeft className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="relative z-10">Return to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
