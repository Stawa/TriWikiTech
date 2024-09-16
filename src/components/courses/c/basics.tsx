"use client";

import GridBackground from "@components/grid";
import AuthorInfo from "../author";
import CourseNavigationButtons from "../buttons";
import HighlightCode from "@components/highlight";
import Courses from "@components/courses/c/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaExclamationTriangle,
  FaLightbulb,
  FaRocket,
  FaTerminal,
} from "react-icons/fa";
import Section from "../section";

const topics = [
  {
    title: "Basic Printing",
    desc: "Learn how to print 'Hello, World!' and other simple messages",
    id: "basic-printing",
    icon: FaCode,
  },
  {
    title: "Variables",
    desc: "Learn about variable declaration and initialization in C",
    id: "variables",
    icon: FaLightbulb,
  },
  {
    title: "Data Types",
    desc: "Explore various data types available in C",
    id: "data-types",
    icon: FaRocket,
  },
  {
    title: "Basic Input/Output",
    desc: "Master basic input and output operations in C",
    id: "input-output",
    icon: FaTerminal,
  },
];

const dataTypes = [
  {
    type: "Basic",
    examples: [
      {
        type: "int",
        title: "Integer",
        description: "Used for whole numbers without decimal points.",
        example: `int age = 25;\nint count = -10;`,
        formatSpecifier: "%d or %i",
        dataType: "int",
        range: "-2147483648 to 2147483647",
        size: "4 bytes",
      },
      {
        type: "float",
        title: "Float",
        description: "Used for numbers with decimal points (single precision).",
        example: `float price = 9.99f;\nfloat temperature = -2.5f;`,
        formatSpecifier: "%f",
        dataType: "float",
        range: "1.2E-38 to 3.4E+38",
        size: "4 bytes",
      },
      {
        type: "char",
        title: "Character",
        description: "Used for single characters.",
        example: `char grade = 'A';\nchar symbol = '*';`,
        formatSpecifier: "%c",
        dataType: "char",
        range: "-128 to 127",
        size: "1 byte",
      },
    ],
  },
];

const variables = [
  {
    title: "Creating Variables",
    description:
      "To create a variable in C, you need to specify its data type and give it a name.",
    steps: [
      "Choose a data type (e.g., int, float, char)",
      "Decide on a descriptive variable name",
      "Declare the variable using the syntax: dataType variableName;",
      "Optionally, initialize the variable with a value",
    ],
    example: `int age;           // Declaration
int score = 100;    // Declaration with initialization
float price = 9.99; // Float variable
char grade = 'A';   // Character variable`,
    tips: [
      "Use meaningful variable names",
      "Follow C naming conventions (start with a letter or underscore, use only letters, numbers, and underscores)",
      "Initialize variables when possible to avoid using uninitialized values",
    ],
    scratch: "[DATA_TYPE] [VARIABLE_NAME] = [VALUE]",
  },
];

const inputOutputExamples = [
  {
    type: "Input",
    examples: [
      {
        function: "scanf()",
        description:
          "Used to read formatted input from the standard input stream",
        example: `int age;
printf("Enter your age: ");
scanf("%d", &age);`,
        formatSpecifier: "%d",
        safetyNote:
          "Always check the return value of scanf() to ensure successful input.",
      },
      {
        function: "fgets()",
        description: "Safely reads a line of text from stdin, including spaces",
        example: `char name[50];
printf("Enter your name: ");
fgets(name, sizeof(name), stdin);`,
        safetyNote:
          "Preferred for string input as it prevents buffer overflow.",
      },
      {
        function: "gets()",
        description:
          "Reads a line from stdin into a buffer until a newline is found",
        example: `char input[100];
printf("Enter some text: ");
gets(input);`,
        safetyNote:
          "Deprecated and unsafe. Use fgets() instead as gets() can cause buffer overflow.",
      },
    ],
  },
  {
    type: "Output",
    examples: [
      {
        function: "printf()",
        description:
          "Used to print formatted output to the standard output stream",
        example: `int num = 42;
printf("The answer is: %d\\n", num);`,
        formatSpecifier: "%d, %f, %c, %s",
        tip: "Use \\n for newline in printf() for better formatting.",
      },
      {
        function: "puts()",
        description: "Outputs a string followed by a newline to stdout",
        example: `const char *message = "Hello, World!";
puts(message);`,
        tip: "Simpler than printf() for outputting whole strings.",
      },
    ],
  },
];

const basicPrinting = [
  {
    title: "Basic Printing",
    desc: "Learn how to print 'Hello, World!' and other simple messages",
    explanation:
      "This program uses the printf() function to display 'Hello, World!' on the screen. The \\n at the end creates a new line after the message.",
    examples: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  },
  {
    title: "Format Specifiers",
    desc: "Learn about format specifiers in C",
    explanation:
      "In this example, we use the %d format specifier to print an integer value. There are different format specifiers for different data types in C.",
    examples: `#include <stdio.h>

int main() {
    int age = 25;
    printf("Age: %d\\n", age);
    return 0;
}`,
  },
];

export default function CBasics() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 lg:mb-20 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              C Programming Basics
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-300">
              Master the fundamentals of C programming
            </p>
          </motion.header>

          <div className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
            <AuthorInfo
              date={"September 15th, 2024"}
              lastEdit={"September 16th, 2024"}
            />
          </div>

          <Section id="course-overview" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden mb-12 sm:mb-16">
              <div className="bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide flex items-center space-x-4">
                  <FaCode className="text-blue-300 text-2xl sm:text-3xl lg:text-4xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Course Overview
                  </span>
                </h2>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                  Embark on a cutting-edge journey into C programming. Master
                  the core elements: from sleek printing techniques to dynamic
                  variables, versatile data types, and streamlined I/O
                  operations. These are your launch codes for the C development
                  universe.
                </p>
              </div>
            </div>
          </Section>

          <Section id="what-you-ll-learn" delay={0.5}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 lg:mb-8 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              What You&apos;ll Learn
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="bg-black bg-opacity-50 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide flex items-center">
                      <topic.icon className="mr-3 sm:mr-4 text-blue-300" />
                      {topic.title}
                    </h3>
                  </div>
                  <div className="p-4 sm:p-6 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg flex-grow flex flex-col justify-between">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                      {topic.desc}
                    </p>
                    <Link
                      href={`#${topic.id}`}
                      className="text-blue-400 font-semibold flex items-center mt-auto text-base sm:text-lg hover:text-blue-300 transition-colors duration-300"
                    >
                      Learn More{" "}
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="why-these-basics-matter" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaRocket className="mr-4 text-blue-300" />
                  Why These Basics Matter
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Understanding these fundamental concepts is crucial for any
                  aspiring C programmer. These basics form the foundation upon
                  which more advanced concepts are built, enabling you to write
                  efficient, clean, and powerful C code.
                </p>
              </div>
            </div>
          </Section>

          <Section id="basic-printing" delay={0.8}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              Basic Printing in C
            </h3>
            {basicPrinting.map((item, index) => (
              <div
                key={index}
                className={`${index !== basicPrinting.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode content={item.examples} language={"c"} />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </Section>

          <Section id="variables" delay={1.0}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              Variables in C
            </h3>
            {variables.map((item, index) => (
              <div
                key={index}
                className={`${index !== variables.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
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
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode content={item.example} language={"c"} />
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
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 sm:p-6 rounded-xl">
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
          </Section>

          <Section id="data-types" delay={1.2}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              Data Types in C
            </h3>
            {dataTypes.map((type, index) => (
              <div
                key={type.type}
                className={`${index !== dataTypes.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
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
                            language={"c"}
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                          <div className="bg-blue-100 dark:bg-blue-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                            <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                              Format Specifier
                            </p>
                            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                              {example.formatSpecifier}
                            </p>
                          </div>
                          <div className="bg-green-100 dark:bg-green-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                            <p className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400 mb-2 sm:mb-3">
                              Data Type
                            </p>
                            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                              {example.dataType}
                            </p>
                          </div>
                          <div className="bg-purple-100 dark:bg-purple-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                            <p className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400 mb-2 sm:mb-3">
                              Range
                            </p>
                            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                              {example.range}
                            </p>
                          </div>
                          <div className="bg-orange-100 dark:bg-orange-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                            <p className="text-base sm:text-lg font-bold text-orange-600 dark:text-orange-400 mb-2 sm:mb-3">
                              Size
                            </p>
                            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                              {example.size}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="input-output" delay={1.0}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaTerminal className="mr-3 sm:mr-4 text-blue-300" />
              Basic Input/Output in C
            </h3>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {inputOutputExamples.map((ioType) => (
                <div
                  key={ioType.type}
                  className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl overflow-hidden"
                >
                  <div className="bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide flex items-center">
                      <span className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full mr-3 sm:mr-4 text-sm sm:text-base">
                        {ioType.type}
                      </span>
                      {ioType.type} Operations
                    </h3>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                      {ioType.examples.map((example) => (
                        <div
                          key={example.function}
                          className="bg-gray-900 bg-opacity-50 p-4 sm:p-6 lg:p-8 rounded-xl"
                        >
                          <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-300 mb-4 sm:mb-6">
                            {example.function}
                          </h4>
                          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6">
                            {example.description}
                          </p>
                          <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-inner">
                            <HighlightCode
                              content={example.example}
                              language={"c"}
                            />
                          </div>
                          {example.formatSpecifier && (
                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-blue-300">
                              Format Specifier:{" "}
                              <code className="bg-blue-800/30 px-2 sm:px-3 py-1 sm:py-2 rounded">
                                {example.formatSpecifier}
                              </code>
                            </p>
                          )}
                          {"safetyNote" in example && (
                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-yellow-300 bg-yellow-800/20 p-3 sm:p-4 rounded-xl flex items-center">
                              <FaExclamationTriangle className="mr-2 flex-shrink-0" />
                              <span>Safety Note: {example.safetyNote}</span>
                            </p>
                          )}
                          {"tip" in example && (
                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-green-300 bg-green-800/20 p-3 sm:p-4 rounded-xl flex items-center">
                              <FaLightbulb className="mr-2 flex-shrink-0" />
                              <span>Tip: {example.tip}</span>
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="px-4 sm:px-6 lg:px-8">
            <CourseNavigationButtons
              colorStyle="bg-blue-600"
              courses={Courses}
              currentIndex={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
