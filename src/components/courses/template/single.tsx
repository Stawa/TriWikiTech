import React from "react";
import { IconType } from "react-icons";
import { useTranslations } from "next-intl";
import CourseSection from "@components/courses/template/section";
import HighlightCode from "@components/highlight";

interface SingleItemProps {
  title: string;
  description: string;
  example: string;
  output: string;
  explanation: string;
  bestUseCase?: string;
}

interface SingleProps {
  components: SingleItemProps[];
  language: string;
  title: string;
  id: string;
  delay: number;
  icon: IconType;
}

const Single: React.FC<SingleProps> = ({
  components,
  language,
  title,
  id,
  delay,
  icon,
}) => {
  const t = useTranslations("Component.Template.Single");
  return (
    <CourseSection id={id} delay={delay} title={title} icon={icon}>
      {components.map((item, index) => (
        <div
          key={index}
          className={`${index !== components.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-300 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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
            <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
              <HighlightCode content={item.example} language={language} />
            </div>
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {t("output")}
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
                  {t("bestUseCase")}
                </p>
                <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 whitespace-pre-line">
                  {item.bestUseCase}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </CourseSection>
  );
};

export { Single, type SingleItemProps };
