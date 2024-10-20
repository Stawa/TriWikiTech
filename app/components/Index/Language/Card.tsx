import { Suspense } from "react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

interface LanguageCardProps {
  name: string;
  description: string;
  image: string;
  courseLink: string;
  compilerLink: string;
  color: string;
  translations: any;
}

function LanguageCard({
  name,
  description,
  image,
  courseLink,
  compilerLink,
  color,
  translations,
}: LanguageCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`p-8 bg-gradient-to-br ${color} flex items-center justify-center w-full h-48`}
      >
        <div className="relative w-28 h-28 drop-shadow-lg">
          <Suspense
            fallback={
              <div className="w-full h-full bg-gray-200 animate-pulse rounded-full"></div>
            }
          >
            <img
              src={image}
              alt={`${name} logo`}
              className="w-full h-full object-contain filter"
              loading="eager"
              width="112"
              height="112"
            />
          </Suspense>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {description}
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Suspense
            fallback={
              <div className="h-12 w-full bg-gray-200 animate-pulse rounded-lg"></div>
            }
          >
            <Link
              to={courseLink}
              className="group relative flex-1 inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <FaGraduationCap className="mr-3 text-xl" />
                {translations.startLearning}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link
              to={compilerLink}
              className="group relative flex-1 inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <FaLaptopCode className="mr-3 text-xl" />
                {translations.openCompiler}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
}

export default LanguageCard;
