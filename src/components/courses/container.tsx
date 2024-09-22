import GridBackground from "@components/grid";
import CourseInfo from "@components/courses/template/info";
import { AuthorInfo, type AuthorInfoProps } from "@components/courses/author";
import {
  CourseNavigationButtons,
  type Course,
} from "@components/courses/buttons";
import { Topics, type Topic } from "@components/courses/template/topics";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

interface CourseContainerProps {
  authorInfo: AuthorInfoProps;
  children: React.ReactNode;
  courses: Course[];
  currentCourseLink: string;
  translations: any;
  topics: Topic[];
  whyIsItMatter: {
    translations: string;
    id: string;
  };
}

const CourseContainer: React.FC<CourseContainerProps> = ({
  authorInfo,
  children,
  courses,
  currentCourseLink,
  translations,
  topics,
  whyIsItMatter,
}) => {
  return (
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
          <CourseInfo
            title={translations("courseOverview.title")}
            id="course-overview"
            delay={0.3}
            description={translations("courseOverview.description")}
            icon={FaCode}
          />
          <Topics id="topics" delay={0.5} topics={topics} />
          <CourseInfo
            title={translations(`${whyIsItMatter.translations}.title`)}
            id={whyIsItMatter.id}
            delay={0.7}
            description={translations(
              `${whyIsItMatter.translations}.description`
            )}
            icon={PiLightbulbFilamentFill}
          />
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
};

export default CourseContainer;
