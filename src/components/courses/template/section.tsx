import React from "react";
import Section from "@components/courses/section";
import { IconType } from "react-icons";

interface CourseSectionProps {
  id: string;
  delay: number;
  title: string;
  icon: IconType;
  children: React.ReactNode;
}

const CourseSection: React.FC<CourseSectionProps> = ({
  id,
  delay,
  title,
  icon,
  children,
}) => {
  return (
    <Section id={id} delay={delay}>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
        {React.createElement(icon, {
          className: "mr-3 sm:mr-4 text-blue-600 dark:text-blue-300",
        })}
        {title}
      </h3>
      {children}
    </Section>
  );
};

export default CourseSection;
