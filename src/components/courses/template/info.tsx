import React from "react";
import Section from "@components/courses/section";
import { IconType } from "react-icons";

interface CourseInfoProps {
  title: string;
  description: string;
  id: string;
  delay: number;
  icon: IconType;
}

const CourseInfo: React.FC<CourseInfoProps> = ({
  id,
  delay,
  title,
  description,
  icon,
}) => (
  <Section id={id} delay={delay}>
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
      <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
          {React.createElement(icon, {
            className:
              "text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl mr-3",
          })}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
            {title}
          </span>
        </h2>
      </div>
      <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          {description}
        </p>
      </div>
    </div>
  </Section>
);

export default CourseInfo;
