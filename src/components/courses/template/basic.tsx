import React from "react";
import Section from "@components/courses/section";
import HighlightCode from "@components/highlight";
import { IconType } from "react-icons";

interface BasicPrintingItem {
  title: string;
  desc: string;
  examples: string;
  output: string;
  explanation: string;
  bestUseCase?: string;
}

interface BasicPrintingProps {
  basicPrinting: BasicPrintingItem[];
  language: string;
  title: string;
  id: string;
  delay: number;
  icon: IconType;
}

const BasicPrinting: React.FC<BasicPrintingProps> = ({
  basicPrinting,
  language,
  title,
  id,
  delay,
  icon,
}) => {
  return (
    <Section id={id} delay={delay}>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
        {React.createElement(icon, {
          className: "mr-3 sm:mr-4 text-blue-600 dark:text-blue-300",
        })}
        {title}
      </h3>
      {basicPrinting.map((item, index) => (
        <div
          key={index}
          className={`${index !== basicPrinting.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-300 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
        >
          <div className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide">
              {item.title}
            </h3>
          </div>
          <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              {item.desc}
            </p>
            <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
              <HighlightCode content={item.examples} language={language} />
            </div>
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Output:
              </h4>
              <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                <HighlightCode content={item.output} language={language} />
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 whitespace-pre-line">
              {item.explanation}
            </p>
            {item.bestUseCase && (
              <div className="bg-blue-100 dark:bg-blue-900/50 p-4 sm:p-6 rounded-xl">
                <p className="text-base sm:text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">
                  Best Use Case:
                </p>
                <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 whitespace-pre-line">
                  {item.bestUseCase}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default BasicPrinting;
