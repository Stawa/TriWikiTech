import { Link } from "@remix-run/react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

interface ComingSoonProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function ComingSoon({
  title,
  description,
  buttonText,
  buttonLink,
}: ComingSoonProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-indigo-100 font-sans">
      <motion.div
        className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 3xl:px-32 py-8 sm:py-16 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <HiMiniWrenchScrewdriver className="text-5xl sm:text-6xl md:text-8xl mx-auto text-indigo-600 dark:text-indigo-400" />
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-indigo-700 dark:text-indigo-300"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 text-gray-600 dark:text-indigo-200"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div className="flex justify-center" variants={itemVariants}>
            <Link
              to={buttonLink}
              className="inline-flex items-center bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-lg transition duration-300 py-3 px-8 text-lg shadow-lg hover:shadow-xl"
            >
              <FaArrowLeft className="mr-2" />
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
