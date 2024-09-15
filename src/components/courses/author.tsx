import { motion } from "framer-motion";
import Image from "next/image";

const AuthorInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col sm:flex-row items-center mb-6 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded-lg shadow-sm"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-4 sm:mb-0 sm:mr-4"
    >
      <Image
        src="https://avatars.githubusercontent.com/u/69102292?v=4"
        alt="Author Profile"
        width={64}
        height={64}
        className="rounded-full border-2 border-yellow-400"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-center sm:text-left"
    >
      <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
        <a
          href="https://github.com/Stawa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Stawa
        </a>
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Published on September 15th, 2024
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        Creator of TriWikiTech
      </p>
    </motion.div>
  </motion.div>
);

export default AuthorInfo;
