import { Link } from "@remix-run/react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface ErrorPageProps {
  statusCode: number;
  message: string;
}

function ErrorPage({ statusCode, message }: ErrorPageProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const gradientVariants = {
    animate: {
      background: [
        "linear-gradient(0deg, #4f46e5, #818cf8)",
        "linear-gradient(60deg, #4f46e5, #818cf8)",
        "linear-gradient(120deg, #4f46e5, #818cf8)",
        "linear-gradient(180deg, #4f46e5, #818cf8)",
        "linear-gradient(240deg, #4f46e5, #818cf8)",
        "linear-gradient(300deg, #4f46e5, #818cf8)",
        "linear-gradient(360deg, #4f46e5, #818cf8)",
      ],
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-indigo-200 font-sans flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl bg-gray-800 border-2 border-indigo-500 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg relative"
      >
        <motion.div
          variants={gradientVariants}
          animate="animate"
          className="absolute inset-0 opacity-10 rounded-lg"
        />
        <motion.div
          variants={itemVariants}
          className="sm:hidden mb-6 text-center"
        >
          <motion.h1 className="text-3xl font-bold text-indigo-400 mb-2">
            Oops!
          </motion.h1>
          <motion.p className="text-lg">We've hit a learning curve</motion.p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="hidden sm:flex items-center mb-4 sm:mb-6"
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-pink-500 mr-2 sm:mr-3"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-400 mr-2 sm:mr-3"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-teal-400"></div>
          <span className="ml-3 text-sm sm:text-base text-indigo-300">
            error.log
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg"
        >
          <span className="text-teal-400">student@triwikitech:~$</span> search
          /courses/ -name requested-page
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg break-words text-center sm:text-left"
        >
          {">"} Error {statusCode}: {message}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg"
        >
          <span className="text-teal-400">student@triwikitech:~$</span> return
          /home
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex justify-center sm:justify-start mt-4 sm:mt-6 lg:mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/"
              className="bg-indigo-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold transition-all duration-300 inline-flex items-center hover:bg-indigo-700"
              prefetch="intent"
            >
              <FaArrowLeft className="mr-2" /> Back to Learning
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ErrorPage;
