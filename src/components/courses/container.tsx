import GridBackground from "@components/grid";
import { AuthorInfo, type AuthorInfoProps } from "@components/courses/author";
import { motion } from "framer-motion";
import { CourseNavigationButtons, type Course } from "./buttons";

const CourseContainer = ({
  authorInfo,
  children,
  courses,
  currentCourseLink,
}: {
  authorInfo: AuthorInfoProps;
  children: React.ReactNode;
  courses: Course[];
  currentCourseLink: string;
}) => (
  <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100">
    <GridBackground />
    <div className="relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          <AuthorInfo date={authorInfo.date} title={authorInfo.title} />
        </motion.header>
        {children}
        <div className="mx-2 sm:mx-4 lg:mx-6">
          <CourseNavigationButtons
            courses={courses}
            currentIndex={courses.findIndex(
              (course) => course.link === currentCourseLink
            )}
          />
        </div>
      </div>
    </div>
  </div>
);

export default CourseContainer;
