import React from "react";
import CourseSection from "@components/courses/template/section";
import HighlightCode from "@components/highlight";
import { IconType } from "react-icons";

interface DataTypeExample {
  title: string;
  description: string;
  example: string;
  formatSpecifier: string | undefined;
  dataType: string | undefined;
  range: string | undefined;
  size: string | undefined;
  explanation: string;
  bestUseCase: string;
}

interface DataTypeItem {
  type: string;
  examples: DataTypeExample[];
}

interface DataTypesProps {
  dataTypes: DataTypeItem[];
  id: string;
  title: string;
  delay: number;
  language: string;
  icon: IconType;
}

const DataTypes: React.FC<DataTypesProps> = ({
  dataTypes,
  id,
  delay,
  language,
  title,
  icon,
}) => {
  return (
    <CourseSection id={id} delay={delay} title={title} icon={icon}>
      {dataTypes.map((type, index) => (
        <div
          key={type.type}
          className={`${index !== dataTypes.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-300 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
        >
          <div className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide">
              {type.type} Data Types
            </h3>
          </div>
          <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <div className="space-y-8 sm:space-y-12">
              {type.examples.map((example) => (
                <div key={example.title} className="mb-8 sm:mb-12">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
                    {example.title}
                  </h4>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {example.description}
                  </p>
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode
                      content={example.example}
                      language={language}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {example.formatSpecifier && (
                      <div className="bg-blue-100 dark:bg-blue-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                          Format Specifier
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {example.formatSpecifier}
                        </p>
                      </div>
                    )}
                    {example.dataType && (
                      <div className="bg-green-100 dark:bg-green-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400 mb-2 sm:mb-3">
                          Data Type
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {example.dataType}
                        </p>
                      </div>
                    )}
                    {example.range && (
                      <div className="bg-purple-100 dark:bg-purple-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400 mb-2 sm:mb-3">
                          Range
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {example.range}
                        </p>
                      </div>
                    )}
                    {example.size && (
                      <div className="bg-orange-100 dark:bg-orange-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-orange-600 dark:text-orange-400 mb-2 sm:mb-3">
                          Size
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {example.size}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 sm:mt-8 bg-yellow-100 dark:bg-yellow-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                    <p className="text-base sm:text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2 sm:mb-3">
                      Explanation
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 whitespace-pre-line">
                      {example.explanation}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 bg-indigo-100 dark:bg-indigo-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                    <p className="text-base sm:text-lg font-bold text-indigo-800 dark:text-indigo-200 mb-2 sm:mb-3">
                      Best Use Case
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                      {example.bestUseCase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </CourseSection>
  );
};

export default DataTypes;
