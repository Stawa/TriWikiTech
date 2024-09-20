import React from "react";
import Section from "@components/courses/section";
import HighlightCode from "@components/highlight";
import { IconType } from "react-icons";

interface MultipleItem {
  type: string;
  examples: {
    name: string;
    description: string;
    example: string;
    output: string;
    explanation: string;
  }[];
}

interface MultipleProps {
  items: MultipleItem[];
  title: string;
  id: string;
  delay: number;
  icon: IconType;
  language: string;
}

const Multiple: React.FC<MultipleProps> = ({
  items,
  title,
  id,
  delay,
  icon: Icon,
  language,
}) => {
  return (
    <Section id={id} delay={delay}>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-900 dark:text-white tracking-wide flex items-center">
        <Icon className="mr-3 sm:mr-4 text-blue-700 dark:text-blue-300" />
        {title}
      </h3>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            index !== items.length - 1 ? "mb-8 sm:mb-12" : ""
          } bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
        >
          <div className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-wide">
              {item.type}
            </h3>
          </div>
          <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            {item.examples.map((example, exampleIndex) => (
              <div key={exampleIndex} className="mb-6 sm:mb-8">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {example.name}
                </h4>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                  {example.description}
                </p>
                <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                  <HighlightCode
                    content={example.example}
                    language={language}
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Output:
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode
                      content={example.output}
                      language={language}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Explanation:
                  </h4>
                  <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                    {example.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export { Multiple, type MultipleItem };
