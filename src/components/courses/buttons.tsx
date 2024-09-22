import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface Course {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface CourseNavigationButtonsProps {
  courses: Course[];
  currentIndex: number;
}

const CourseNavigationButtons: React.FC<CourseNavigationButtonsProps> = ({
  courses,
  currentIndex,
}) => {
  const t = useTranslations();
  const previousCourse = courses[currentIndex - 1];
  const nextCourse = courses[currentIndex + 1];

  const buttonClasses = `
    flex-1
    inline-flex items-center justify-center 
    bg-gradient-to-r from-indigo-500 to-purple-600
    text-white
    font-semibold py-3 px-4 
    rounded-lg
    shadow-md
    transition duration-300 ease-in-out 
    text-sm md:text-base
    transform
    hover:from-indigo-600 hover:to-purple-700
    hover:shadow-lg
    hover:scale-105
    hover:brightness-110
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  `;

  const renderButton = (
    course: Course | undefined,
    icon: JSX.Element,
    fallbackText: string,
    isNext: boolean = false
  ) => (
    <Link href={course?.link || "/courses"} className={buttonClasses}>
      {!isNext && (
        <span className="mr-2 transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
      <span className="truncate">
        {course?.title ||
          t(`Component.CourseNavigationButtons.${fallbackText}`)}
      </span>
      {isNext && (
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </Link>
  );

  const showMiddleHomeButton =
    currentIndex > 0 && currentIndex < courses.length - 2;

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
        "previous"
      )}
      {showMiddleHomeButton &&
        renderButton(
          courses[courses.length - 1],
          <FaHome className="text-lg flex-shrink-0" />,
          t("Component.HomeButton.returnToHome")
        )}
      {renderButton(
        nextCourse,
        <FaArrowRight className="text-lg flex-shrink-0" />,
        "next",
        true
      )}
    </motion.div>
  );
};

export { CourseNavigationButtons, type Course };
