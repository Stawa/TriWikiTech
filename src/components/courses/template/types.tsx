import CourseSection from "@components/courses/template/section";
import HighlightCode from "@components/highlight";
import { useTranslations } from "next-intl";
import React from "react";
import { IconType } from "react-icons";

interface DataTypeItem {
  title: string;
  description: string;
  example: string;
  output: string;
  formatSpecifier: string | undefined;
  dataType: string | undefined;
  range: string | undefined;
  size: string | undefined;
  explanation: string;
  bestUseCase: string;
}

interface DataTypeCategory {
  type: string;
  examples: DataTypeItem[];
}

interface DataTypesProps {
  content: DataTypeCategory[];
  id: string;
  title: string;
  delay: number;
  language: string;
  icon: IconType;
}

const DataTypes: React.FC<DataTypesProps> = ({
  content,
  id,
  delay,
  language,
  title,
  icon,
}) => {
  const t = useTranslations("Component.Template.DataType");

  return (
    <CourseSection id={id} delay={delay} title={title} icon={icon}>
      {content.map((category, index) => (
        <div
          key={category.type}
          className={`${index !== content.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-300 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
        >
          <div className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20 p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide">
              {category.type} {t("dataType")}
            </h3>
          </div>
          <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <div className="space-y-8 sm:space-y-12">
              {category.examples.map((dataTypeExample) => (
                <div key={dataTypeExample.title} className="mb-8 sm:mb-12">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
                    {dataTypeExample.title}
                  </h4>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {dataTypeExample.description}
                  </p>
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode
                      content={dataTypeExample.example}
                      language={language}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {dataTypeExample.formatSpecifier && (
                      <div className="bg-blue-100 dark:bg-blue-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                          {t("formatSpecifier")}
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {dataTypeExample.formatSpecifier}
                        </p>
                      </div>
                    )}
                    {dataTypeExample.dataType && (
                      <div className="bg-green-100 dark:bg-green-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400 mb-2 sm:mb-3">
                          {t("dataType")}
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {dataTypeExample.dataType}
                        </p>
                      </div>
                    )}
                    {dataTypeExample.range && (
                      <div className="bg-purple-100 dark:bg-purple-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400 mb-2 sm:mb-3">
                          {t("range")}
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {dataTypeExample.range}
                        </p>
                      </div>
                    )}
                    {dataTypeExample.size && (
                      <div className="bg-orange-100 dark:bg-orange-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                        <p className="text-base sm:text-lg font-bold text-orange-600 dark:text-orange-400 mb-2 sm:mb-3">
                          {t("size")}
                        </p>
                        <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                          {dataTypeExample.size}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 sm:mt-8 bg-yellow-100 dark:bg-yellow-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                    <p className="text-base sm:text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2 sm:mb-3">
                      {t("explanation")}
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 whitespace-pre-line">
                      {dataTypeExample.explanation}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 bg-indigo-100 dark:bg-indigo-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                    <p className="text-base sm:text-lg font-bold text-indigo-800 dark:text-indigo-200 mb-2 sm:mb-3">
                      {t("bestUseCase")}
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                      {dataTypeExample.bestUseCase}
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

export { DataTypes, type DataTypeItem, type DataTypeCategory };
