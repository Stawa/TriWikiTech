import { Link } from "@remix-run/react";
import { FaArrowLeft, FaHome, FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";

interface ErrorPageProps {
  statusCode: number;
  message: string;
}

function ErrorPage({ statusCode, message }: ErrorPageProps) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const gradientVariants = {
    animate: {
      background: [
        "linear-gradient(0deg, #4f46e5, #818cf8)",
        "linear-gradient(120deg, #4f46e5, #818cf8)",
        "linear-gradient(240deg, #4f46e5, #818cf8)",
        "linear-gradient(360deg, #4f46e5, #818cf8)",
      ],
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <main
      role="main"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex items-center justify-center p-6 md:p-10 lg:p-16 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl relative"
      >
        {/* Animated gradient background */}
        <motion.div
          variants={gradientVariants}
          animate="animate"
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.07] rounded-2xl"
        />

        <header className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
              Error {statusCode}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
                Oops! Page not found
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium max-w-lg mx-auto">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </motion.div>
        </header>

        {/* Terminal Section */}
        <motion.div variants={itemVariants} className="mb-10 relative z-0">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <FaTerminal className="mr-2" />
                <span>terminal</span>
              </div>
            </div>
            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm">
              <p className="flex items-center text-indigo-600 dark:text-indigo-400">
                <span className="text-green-600 dark:text-green-400 mr-2">
                  ➜
                </span>
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">
                  ~
                </span>
                whoami
              </p>
              <p className="ml-4 text-gray-600 dark:text-gray-400 my-1">
                kade.student@triwikitech
              </p>
              <p className="flex items-center text-indigo-600 dark:text-indigo-400">
                <span className="text-green-600 dark:text-green-400 mr-2">
                  ➜
                </span>
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">
                  ~
                </span>
                find /path
              </p>
              <p className="ml-4 text-red-500 dark:text-red-400">
                Error: Path not found
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600 transition-all duration-200 shadow-lg shadow-indigo-500/25 dark:shadow-indigo-900/30"
          >
            <FaHome className="text-lg" />
            <span>Go Home</span>
          </Link>
          <Link
            to=".."
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto text-gray-700 dark:text-gray-200 font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
          >
            <FaArrowLeft className="text-lg" />
            <span>Go Back</span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default ErrorPage;
