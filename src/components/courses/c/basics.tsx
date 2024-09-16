"use client";

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

import Courses from "@components/courses/c/navigation";
import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import AuthorInfo from "@components/courses/author";
import CourseNavigationButtons from "../buttons";
import Section from "@components/courses/section";

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
        explanation:
          "Integers are ideal for counting, indexing, or representing discrete quantities. Use them when you need whole numbers and don't require decimal precision, such as for ages, counts, or array indices.",
        bestUseCase:
          "Best used for loop counters, array indices, or any whole number calculations where fractional parts are not needed.",
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
        explanation:
          "Floats are used for representing real numbers with decimal points. They offer a good balance between precision and memory usage.",
        bestUseCase:
          "Ideal for scientific calculations, graphics, or any situation where you need decimal precision but don't require the extended precision of a double.",
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
        explanation:
          "Characters in C are actually small integers, each representing a single ASCII character. They're useful for storing individual letters, digits, or symbols.",
        bestUseCase:
          "Best used when working with individual characters, such as processing text one character at a time, or when memory efficiency is crucial and you only need to store single characters.",
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
    wrongExample: `int a;           // Poor variable name
float 2ndPrice = 19.99; // Invalid: starts with a number
char longVariableName123456789 = 'X'; // Excessively long name
int temp = 98.6;    // Wrong data type for temperature`,
    tips: [
      "Use meaningful variable names",
      "Follow C naming conventions (start with a letter or underscore, use only letters, numbers, and underscores)",
      "Initialize variables when possible to avoid using uninitialized values",
      "Avoid using reserved keywords as variable names",
    ],
    scratch: "[DATA_TYPE] [VARIABLE_NAME] = [VALUE]",
    explanation:
      "Variables are essential for storing and manipulating data in your programs. They act as containers that hold values which can be changed during program execution. However, it's crucial to create variables correctly and follow best practices to ensure code readability and prevent errors.",
    wrongExplanation:
      "In the wrong examples, 'a' is a poor variable name as it's not descriptive. '2ndPrice' is invalid because variable names can't start with numbers. 'longVariableName123456789' is excessively long, making the code hard to read. Using 'int' for a temperature (98.6) is incorrect as it would truncate the decimal part.",
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
        explanation:
          "scanf() is a powerful function for reading formatted input. It allows you to read various data types directly into variables.",
        bestUseCase:
          "Best used when you need to read specific data types from user input, especially for simple programs or when performance is a priority. However, be cautious with string inputs due to potential buffer overflow issues.",
      },
      {
        function: "fgets()",
        description: "Safely reads a line of text from stdin, including spaces",
        example: `char name[50];
printf("Enter your name: ");
fgets(name, sizeof(name), stdin);`,
        safetyNote:
          "Preferred for string input as it prevents buffer overflow.",
        explanation:
          "fgets() is a safer alternative to gets() for reading string input. It allows you to specify a maximum number of characters to read, preventing buffer overflows.",
        bestUseCase:
          "Ideal for reading string input, especially when you need to include spaces or when security is a concern. It's the preferred method for reading lines of text in modern C programming.",
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
        explanation:
          "gets() is an older function for reading string input. It's simple to use but doesn't provide any way to limit the input size, making it vulnerable to buffer overflows.",
        bestUseCase:
          "Not recommended for use in any new code due to security vulnerabilities. Always prefer fgets() or other safer alternatives for string input.",
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
        explanation:
          "printf() is a versatile function for formatted output. It allows you to combine text and variable values in a single output statement, with fine control over the formatting.",
        bestUseCase:
          "Ideal for most output needs, especially when you need to format the output or combine text with variable values. It's the go-to function for complex or formatted output in C.",
      },
      {
        function: "puts()",
        description: "Outputs a string followed by a newline to stdout",
        example: `char *message = "Hello, World!";
puts(message);`,
        tip: "Simpler than printf() for outputting whole strings.",
        explanation:
          "puts() is a simpler alternative to printf() when you just need to output a string. It automatically adds a newline at the end of the output.",
        bestUseCase:
          "Best used when you need to output a simple string without any formatting. It's more concise than printf() for this specific use case and can be slightly more efficient.",
      },
    ],
  },
];

const basicPrinting = [
  {
    title: "Basic Printing",
    desc: "Learn how to display text in C programs",
    explanation:
      "The printf() function is a powerful tool for outputting formatted text. It's part of the stdio.h library and allows for precise control over what's displayed. The '\\n' escape sequence adds a newline, ensuring the next output starts on a fresh line.",
    examples: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("C programming is powerful!\\n");
    return 0;
}`,
    bestUseCase:
      "Use printf() for most of your output needs, especially when you need to format the output or combine text with variable values. It's versatile and allows for complex formatting.",
  },
  {
    title: "Format Specifiers",
    desc: "Explore how to integrate variables into your output seamlessly",
    explanation:
      "Format specifiers act as placeholders for variable values in printf() statements. The %d specifier is used for integers, but C offers a wide range of specifiers for different data types. This allows for flexible and dynamic output formatting.",
    examples: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 1.75;
    char grade = 'A';
    printf("Age: %d years\\n", age);
    printf("Height: %.2f meters\\n", height);
    printf("Grade: %c\\n", grade);
    return 0;
}`,
    bestUseCase:
      "Format specifiers are crucial when you need to output variable values alongside text. They're particularly useful for creating readable, formatted output that includes different data types.",
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
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                    {item.explanation}
                  </p>
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-4 sm:p-6 rounded-xl">
                    <p className="text-base sm:text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">
                      Best Use Case:
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                      {item.bestUseCase}
                    </p>
                  </div>
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
                    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
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
                        <div className="mt-6 sm:mt-8 bg-yellow-100 dark:bg-yellow-900/50 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-filter backdrop-blur-lg">
                          <p className="text-base sm:text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2 sm:mb-3">
                            Explanation
                          </p>
                          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
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
                          <div className="mt-4 sm:mt-6 bg-indigo-900/20 p-4 sm:p-6 rounded-xl">
                            <p className="text-base sm:text-lg font-bold text-indigo-300 mb-2">
                              Explanation:
                            </p>
                            <p className="text-sm sm:text-base text-gray-300">
                              {example.explanation}
                            </p>
                          </div>
                          <div className="mt-4 sm:mt-6 bg-green-900/20 p-4 sm:p-6 rounded-xl">
                            <p className="text-base sm:text-lg font-bold text-green-300 mb-2">
                              Best Use Case:
                            </p>
                            <p className="text-sm sm:text-base text-gray-300">
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
