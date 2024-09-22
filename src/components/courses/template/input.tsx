import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa";
import Section from "@components/courses/section";
import HighlightCode from "@components/highlight";
import { useTranslations } from "next-intl";

interface InputOutputExample {
  function: string;
  description: string;
  example: string;
  formatSpecifier?: string;
  safetyNote?: string;
  tip?: string;
  explanation: string;
  bestUseCase: string;
}

interface InputOutputType {
  type: string;
  examples: InputOutputExample[];
}

interface InputOutputProps {
  id: string;
  delay: number;
  title: string;
  icon: React.ElementType;
  inputOutputExamples: InputOutputType[];
}

function InputOutput({
  id,
  delay,
  title,
  icon: Icon,
  inputOutputExamples,
}: InputOutputProps) {
  const t = useTranslations("Component.Template.InputOutput");

  return (
    <Section id={id} delay={delay}>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
        <Icon className="mr-3 sm:mr-4 text-blue-600 dark:text-blue-300" />
        {title}
      </h3>
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {inputOutputExamples.map((ioType) => (
          <div
            key={ioType.type}
            className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-4 sm:p-6 lg:p-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
                <span className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full mr-3 sm:mr-4 text-sm sm:text-base">
                  {ioType.type}
                </span>
                {ioType.type} Operations
              </h3>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {ioType.examples.map((example) => (
                  <div
                    key={example.function}
                    className="bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 p-4 sm:p-6 lg:p-8 rounded-xl"
                  >
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4 sm:mb-6">
                      {example.function}
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-200 mb-4 sm:mb-6">
                      {example.description}
                    </p>
                    <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode content={example.example} language={"c"} />
                    </div>
                    {example.formatSpecifier && (
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-blue-600 dark:text-blue-300">
                        {t("formatSpecifier")}:{" "}
                        <code className="bg-blue-100 dark:bg-blue-800/30 px-2 sm:px-3 py-1 sm:py-2 rounded">
                          {example.formatSpecifier}
                        </code>
                      </p>
                    )}
                    {example.safetyNote && (
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-yellow-600 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-800/20 p-3 sm:p-4 rounded-xl flex items-center">
                        <FaExclamationTriangle className="mr-2 flex-shrink-0" />
                        <span>
                          {t("safetyNote")}: {example.safetyNote}
                        </span>
                      </p>
                    )}
                    {example.tip && (
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-green-600 dark:text-green-300 bg-green-100 dark:bg-green-800/20 p-3 sm:p-4 rounded-xl flex items-center">
                        <FaLightbulb className="mr-2 flex-shrink-0" />
                        <span>
                          {t("tip")}: {example.tip}
                        </span>
                      </p>
                    )}
                    <div className="mt-4 sm:mt-6 bg-indigo-100 dark:bg-indigo-900/20 p-4 sm:p-6 rounded-xl">
                      <p className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-300 mb-2">
                        {t("explanation")}:
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {example.explanation}
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-6 bg-green-100 dark:bg-green-900/20 p-4 sm:p-6 rounded-xl">
                      <p className="text-base sm:text-lg font-bold text-green-600 dark:text-green-300 mb-2">
                        {t("bestUseCase")}:
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {example.bestUseCase}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export { InputOutput, type InputOutputType };
