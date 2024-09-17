"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { RiFileTextLine } from "react-icons/ri";
import { PiTreeStructure } from "react-icons/pi";
import { TbCpu } from "react-icons/tb";

import Section from "@components/courses/section";
import Courses from "@components/courses/c/navigation";
import AuthorInfo from "@components/courses/author";
import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import CourseNavigationButtons from "@components/courses/buttons";

const topics = [
  {
    title: "Structures",
    desc: "Learn about user-defined data types in C",
    id: "structures",
    icon: PiTreeStructure,
  },
  {
    title: "File I/O",
    desc: "Explore file input and output operations in C",
    id: "file-io",
    icon: RiFileTextLine,
  },
  {
    title: "Preprocessor Directives",
    desc: "Master preprocessor commands and macros in C",
    id: "preprocessor",
    icon: TbCpu,
  },
];

const structures = [
  {
    type: "Basic Structure",
    examples: [
      {
        title: "Simple Structure",
        description: "Define a basic structure with multiple data types",
        example: `struct Person {
  char name[50];
  int age;
  float height;
};`,
        explanation:
          "This structure defines a 'Person' with a name, age, and height. It allows you to group related data of different types together.",
      },
      {
        title: "Nested Structure",
        description: "Define a structure within another structure",
        example: `struct Address {
  char street[100];
  char city[50];
  char country[50];
};

struct Employee {
  char name[50];
  int id;
  struct Address address;
};`,
        explanation:
          "This example shows a nested structure where 'Employee' contains an 'Address' structure. This allows for more complex data organization.",
      },
    ],
  },
];

const fileIO = [
  {
    type: "File Operations",
    examples: [
      {
        title: "Opening a File",
        description: "Open a file for reading or writing",
        example: `FILE *file = fopen("example.txt", "r");
if (file == NULL) {
    printf("Error opening file\\n");
    return 1;
}`,
        explanation:
          "This code opens a file named 'example.txt' for reading. It's important to check if the file was successfully opened before proceeding.",
      },
      {
        title: "Writing to a File",
        description: "Write data to a file",
        example: `FILE *file = fopen("example.txt", "w");
if (file != NULL) {
    fprintf(file, "Hello, World!\\n");
    fclose(file);
}`,
        explanation:
          "This example demonstrates writing a string to a file. Always remember to close the file after you're done writing to it.",
      },
      {
        title: "Reading from a File",
        description: "Read data from a file",
        example: `FILE *file = fopen("example.txt", "r");
if (file != NULL) {
    char buffer[100];
    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }
    fclose(file);
}`,
        explanation:
          "This code reads the contents of a file line by line and prints each line. The fgets function is used to read strings from the file.",
      },
    ],
  },
];

const preprocessor = [
  {
    type: "Preprocessor Directives",
    examples: [
      {
        title: "Include Directive",
        description: "Include a header file",
        example: `#include <stdio.h>
#include "myheader.h"`,
        explanation:
          "The #include directive is used to include header files. Angle brackets are used for system headers, while quotation marks are used for user-defined headers.",
      },
      {
        title: "Define Directive",
        description: "Define a macro",
        example: `#define PI 3.14159
#define SQUARE(x) ((x) * (x))`,
        explanation:
          "The #define directive is used to create macros. These can be simple constant definitions or more complex function-like macros.",
      },
      {
        title: "Conditional Compilation",
        description: "Conditionally compile code",
        example: `#ifdef DEBUG
    printf("Debug mode is on\\n");
#endif

#if PLATFORM == WINDOWS
    // Windows-specific code
#elif PLATFORM == LINUX
    // Linux-specific code
#else
    // Default code
#endif`,
        explanation:
          "Conditional compilation allows you to include or exclude portions of code based on certain conditions. This is useful for platform-specific code or debugging.",
      },
    ],
  },
];

export default function CAdvanced() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 lg:mb-16 text-center"
          >
            <AuthorInfo
              date="2024-09-15"
              lastEdit="2024-09-17"
              title={"Advanced C Programming"}
            />
          </motion.header>

          <Section id="course-overview" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaCode className="mr-4 text-blue-300" />
                  Course Overview
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  In this advanced C programming course, you&apos;ll delve into
                  more complex topics such as structures, file I/O, and
                  preprocessor directives. These concepts will help you write
                  more sophisticated and efficient C programs.
                </p>
              </div>
            </div>
          </Section>

          <Section id="topics" delay={0.5}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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

          <Section id="why-advanced-topics-matter" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaRocket className="mr-4 text-blue-300" />
                  Why These Advanced Topics Matter
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Understanding these advanced concepts is crucial for any
                  serious C programmer. They allow you to create more complex
                  data structures, interact with files, and optimize your code,
                  enabling you to build more powerful and efficient C
                  applications.
                </p>
              </div>
            </div>
          </Section>

          <Section id="structures" delay={0.8}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <PiTreeStructure className="mr-3 sm:mr-4 text-blue-300" />
              Structures in C
            </h3>
            {structures.map((item, index) => (
              <div
                key={index}
                className={`${index !== structures.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {example.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section id="file-io" delay={1.0}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <RiFileTextLine className="mr-3 sm:mr-4 text-blue-300" />
              File I/O in C
            </h3>
            {fileIO.map((item, index) => (
              <div
                key={index}
                className={`${index !== fileIO.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {example.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section id="preprocessor" delay={1.2}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <TbCpu className="mr-3 sm:mr-4 text-blue-300" />
              Preprocessor Directives in C
            </h3>
            {preprocessor.map((item, index) => (
              <div
                key={index}
                className={`${index !== preprocessor.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {example.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <div className="px-4 sm:px-6 lg:px-8">
            <CourseNavigationButtons
              colorStyle="bg-blue-600"
              middleHomeButton={true}
              courses={Courses}
              currentIndex={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
