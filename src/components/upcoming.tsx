"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import HomeButton from "./homeButton";

const ComingSoonScreen = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: IconType;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-5 py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="text-4xl sm:text-5xl md:text-7xl mx-auto mb-3 sm:mb-5 text-indigo-600 dark:text-indigo-400" />
          <motion.h1
            className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {title} Coming Soon
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg mb-5 sm:mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We&apos;re working on an exciting update for {title}. Stay tuned for
            the upcoming release!
          </motion.p>
          <motion.div
            className="space-y-3 sm:space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {description}
            </p>
            <div className="flex justify-center">
              <HomeButton size="sm" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoonScreen;
