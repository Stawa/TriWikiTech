import { motion } from "framer-motion";
import Image from "next/image";

const AuthorInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col sm:flex-row items-center mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 p-6 rounded-lg shadow-md"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-4 sm:mb-0 sm:mr-6"
    >
      <Image
        src="https://avatars.githubusercontent.com/u/69102292?v=4"
        alt="Author Profile"
        width={80}
        height={80}
        className="rounded-full border-4 border-indigo-400 shadow-lg"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-center sm:text-left"
    >
      <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
        <a
          href="https://github.com/Stawa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
        >
          Stawa
        </a>
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
        Published on September 15th, 2024
      </p>
      <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 font-semibold">
        Creator of TriWikiTech
      </p>
    </motion.div>
  </motion.div>
);

export default AuthorInfo;
