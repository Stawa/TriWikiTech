import React from "react";
import CourseSection from "@components/courses/template/section";
import HighlightCode from "@components/highlight";
import { IconType } from "react-icons";

interface VariableItem {
  title: string;
  description: string;
  steps: string[];
  example: string;
  explanation: string;
  wrongExample: string;
  wrongExplanation: string;
  tips: string[];
  scratch: string;
}

interface VariablesProps {
  variables: VariableItem[];
  title: string;
  id: string;
  delay: number;
  icon: IconType;
}

const Variables: React.FC<VariablesProps> = ({
  variables,
  title,
  id,
  delay,
  icon,
}) => {
  return (
    <CourseSection id={id} delay={delay} title={title} icon={icon}>
      {variables.map((item, index) => (
        <div
          key={index}
          className={`${index !== variables.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-300 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
        >
          <div className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide">
              {item.title}
            </h3>
          </div>
          <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              {item.description}
            </p>
            <h4 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Steps:
            </h4>
            <ul className="list-disc list-inside mb-6 sm:mb-8 space-y-2">
              {item.steps.map((step, stepIndex) => (
                <li
                  key={stepIndex}
                  className="text-base sm:text-lg text-gray-800 dark:text-gray-200"
                >
                  {step}
                </li>
              ))}
            </ul>
            <h4 className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
              Good Example:
            </h4>
            <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
              <HighlightCode content={item.example} language={"c"} />
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/50 p-4 sm:p-6 rounded-xl mb-6">
              <p className="text-base sm:text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">
                Good Example Explanation:
              </p>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {item.explanation}
              </p>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
              Bad Example:
            </h4>
            <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
              <HighlightCode content={item.wrongExample} language={"c"} />
            </div>
            <div className="bg-red-100 dark:bg-red-900/50 p-4 sm:p-6 rounded-xl mb-6">
              <p className="text-base sm:text-lg font-bold text-red-800 dark:text-red-200 mb-2">
                Bad Example Explanation:
              </p>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                {item.wrongExplanation}
              </p>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Tips:
            </h4>
            <ul className="list-disc list-inside mb-6 sm:mb-8 space-y-2">
              {item.tips.map((tip, tipIndex) => (
                <li
                  key={tipIndex}
                  className="text-base sm:text-lg text-gray-800 dark:text-gray-200"
                >
                  {tip}
                </li>
              ))}
            </ul>
            <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 sm:p-6 rounded-xl mb-6">
              <p className="text-base sm:text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                Variable Declaration Syntax:
              </p>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                {item.scratch}
              </p>
            </div>
          </div>
        </div>
      ))}
    </CourseSection>
  );
};

export { Variables, type VariableItem };
