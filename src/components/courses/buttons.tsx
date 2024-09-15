import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Course {
  title: string;
  desc: string;
  link: string;
  icon: JSX.Element;
}

interface CourseNavigationButtonsProps {
  courses: Course[];
  currentIndex: number;
  middleHomeButton?: boolean;
}

const CourseNavigationButtons = ({
  courses,
  currentIndex,
  middleHomeButton = false,
}: CourseNavigationButtonsProps) => {
  const previousCourse = courses[(currentIndex as number) - 1];
  const nextCourse = courses[(currentIndex as number) + 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
    >
      <Link
        href={previousCourse?.link || "/courses"}
        className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base md:text-lg"
      >
        <FaArrowLeft className="mr-2" />
        Previous: {previousCourse?.title || "Courses"}
      </Link>
      {middleHomeButton && (
        <Link
          href={courses[0].link}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-0 sm:mx-2"
        >
          Back to {courses[0].title}
        </Link>
      )}
      <Link
        href={nextCourse?.link || "/courses"}
        className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base md:text-lg"
      >
        Next: {nextCourse?.title || "Courses"}
        <FaArrowRight className="ml-2" />
      </Link>
    </motion.div>
  );
};

export default CourseNavigationButtons;
