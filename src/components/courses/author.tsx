import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaCalendar, FaEdit, FaCode } from "react-icons/fa";

const AuthorInfo = ({
  date,
  lastEdit,
}: {
  date: string;
  lastEdit?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col sm:flex-row items-center mb-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-lg border border-blue-400/30"
  >
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
      className="mb-6 sm:mb-0 sm:mr-10 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
      <Image
        src="https://avatars.githubusercontent.com/u/69102292?v=4"
        alt="Author Profile"
        width={120}
        height={120}
        className="rounded-full border-4 border-indigo-400 shadow-lg relative z-10 hover:scale-105 transition-transform duration-300 sm:w-[140px] sm:h-[140px]"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-center sm:text-left flex-1"
    >
      <h3 className="text-2xl font-bold mb-2">
        <a
          href="https://github.com/Stawa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center sm:justify-start text-blue-300 hover:underline"
        >
          <FaGithub className="mr-2" />
          Stawa
        </a>
      </h3>
      <p className="text-sm text-blue-200 dark:text-blue-300 mt-3 flex items-center justify-center sm:justify-start">
        <FaCalendar className="mr-2 text-indigo-400" />
        <span className="text-center sm:text-left">Published on {date}</span>
      </p>
      {lastEdit && (
        <p className="text-sm text-indigo-200 dark:text-indigo-300 mt-2 flex items-center justify-center sm:justify-start">
          <FaEdit className="mr-2 text-purple-400" />
          <span className="text-center sm:text-left">
            Last edited on {lastEdit}
          </span>
        </p>
      )}
      <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mt-4 font-semibold flex items-center justify-center sm:justify-start">
        <FaCode className="mr-2 sm:mr-3 text-blue-300" />
        Creator of TriWikiTech
      </p>
    </motion.div>
  </motion.div>
);

export default AuthorInfo;
