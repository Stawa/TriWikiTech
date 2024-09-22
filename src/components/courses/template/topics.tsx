import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import Section from "@components/courses/section";

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface TopicsProps {
  id: string;
  delay: number;
  topics: Topic[];
}

const Topics: React.FC<TopicsProps> = ({ id, delay, topics }) => {
  const t = useTranslations("Component.Template.Topic");

  return (
    <Section id={id} delay={delay}>
      <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
        <ImBook className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
        {t("title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col"
          >
            <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
                {React.createElement(topic.icon, {
                  className: "mr-2 text-blue-600 dark:text-blue-300",
                })}
                {topic.title}
              </h3>
            </div>
            <div className="p-3 sm:p-4 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg flex-grow flex flex-col justify-between">
              <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                {topic.description}
              </p>
              <Link
                href={`#${topic.id}`}
                className="text-blue-600 dark:text-blue-300 font-semibold flex items-center mt-auto text-sm sm:text-base hover:text-blue-500 dark:hover:text-blue-200 transition-colors duration-300"
              >
                {t("learnMore")}{" "}
                <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Topics;
