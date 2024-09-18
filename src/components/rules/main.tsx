import React from "react";
import { IconType } from "react-icons";
import { FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import GridBackground from "@components/grid";
import HomeButton from "@components/homeButton";

interface Rule {
  title: string;
  content: string;
  icon: IconType;
}

interface RulesContentProps {
  title: string;
  description: string;
  content: Rule[];
}

const RulesContent: React.FC<RulesContentProps> = ({
  title,
  description,
  content,
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <div className="relative z-10">
        <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12"
            >
              <FaShieldAlt className="text-5xl sm:text-6xl md:text-7xl mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                {title}
              </h1>
              <p className="mt-4 sm:mt-5 max-w-xl mx-auto text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 flex flex-col h-full"
                >
                  <div
                    className={`p-4 sm:p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center h-28 sm:h-36`}
                  >
                    <section.icon className="text-white w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                      {section.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-20 mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <HomeButton />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesContent;
