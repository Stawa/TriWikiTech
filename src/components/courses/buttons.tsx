import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa";

interface Course {
  title: string;
  desc: string;
  link: string;
  icon: JSX.Element;
}

interface CourseNavigationButtonsProps {
  courses: Course[];
  currentIndex: number;
  colorStyle: string;
  middleHomeButton?: boolean;
}

const CourseNavigationButtons: React.FC<CourseNavigationButtonsProps> = ({
  courses,
  currentIndex,
  colorStyle,
  middleHomeButton = false,
}) => {
  const previousCourse = courses[currentIndex - 1];
  const nextCourse = courses[currentIndex + 1];

  const buttonClasses = `
    flex-1
    inline-flex items-center justify-center 
    ${colorStyle} hover:bg-opacity-90 
    text-white dark:text-gray-200 
    font-bold py-3 px-6 
    rounded-full 
    shadow-lg hover:shadow-xl 
    transition duration-300 ease-in-out 
    text-sm md:text-base
    transform hover:scale-105
  `;

  const renderButton = (
    course: Course | undefined,
    icon: JSX.Element,
    fallbackText: string,
    isNext: boolean = false
  ) => (
    <Link href={course?.link || "/courses"} className={buttonClasses}>
      {!isNext && <span className="mr-2">{icon}</span>}
      <span className="truncate">{course?.title || fallbackText}</span>
      {isNext && <span className="ml-2">{icon}</span>}
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex flex-col sm:flex-row justify-between items-stretch space-y-4 sm:space-y-0 sm:space-x-6 mt-12"
    >
      {renderButton(
        previousCourse,
        <FaArrowLeft className="text-lg flex-shrink-0" />,
        "Previous"
      )}
      {middleHomeButton &&
        renderButton(
          courses[0],
          <FaHome className="text-lg flex-shrink-0" />,
          "Home"
        )}
      {renderButton(
        nextCourse,
        <FaArrowRight className="text-lg flex-shrink-0" />,
        "Next",
        true
      )}
    </motion.div>
  );
};

export default CourseNavigationButtons;
