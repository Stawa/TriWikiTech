"use client";

import GridBackground from "@components/grid";
import AuthorInfo from "../author";
import CourseNavigationButtons from "../buttons";
import HighlightCode from "@components/highlight";
import Courses from "@components/courses/c/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";

const topics = [
  {
    title: "Structures",
    desc: "Learn about user-defined data types in C",
    id: "structures",
  },
  {
    title: "File I/O",
    desc: "Explore file input and output operations in C",
    id: "file-io",
  },
  {
    title: "Preprocessor Directives",
    desc: "Master preprocessor commands and macros in C",
    id: "preprocessor",
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
      },
      {
        title: "Writing to a File",
        description: "Write data to a file",
        example: `FILE *file = fopen("example.txt", "w");
if (file != NULL) {
    fprintf(file, "Hello, World!\\n");
    fclose(file);
}`,
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
      },
      {
        title: "Define Directive",
        description: "Define a macro",
        example: `#define PI 3.14159
#define SQUARE(x) ((x) * (x))`,
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
      },
    ],
  },
];

const Section = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    className="mb-4 sm:mb-6 md:mb-8 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg"
  >
    {children}
  </motion.section>
);

export default function CAdvanced() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridBackground />
      <div className="relative z-10 text-gray-800 dark:text-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 md:mb-16 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 dark:from-blue-400 dark:via-blue-300 dark:to-blue-500">
              Advanced C Programming
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-200">
              Master advanced concepts in C programming
            </p>
          </motion.header>
          <AuthorInfo date={"September 15th, 2024"} />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaCode className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this advanced C programming course, you&apos;ll delve into more
              complex topics such as structures, file I/O, and preprocessor
              directives. These concepts will help you write more sophisticated
              and efficient C programs.
            </p>
          </Section>

          <Section delay={0.5}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-blue-600 dark:text-blue-400 flex items-center">
              <FaLightbulb className="mr-3" /> What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {topics.map((topic, index) => (
                <Link href={`#${topic.id}`} key={index}>
                  <div className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border border-blue-600 dark:border-blue-400 p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 flex-grow">
                      {topic.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>

          <Section delay={0.7}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaRocket className="mr-3" /> Why These Advanced Topics Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Understanding these advanced concepts is crucial for any serious C
              programmer. They allow you to create more complex data structures,
              interact with files, and optimize your code, enabling you to build
              more powerful and efficient C applications.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="structures"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Structures
              in C
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {structures.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
                    Structures
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {type.examples.map((example) => (
                      <div
                        key={example.title}
                        className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {example.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                          {example.description}
                        </p>
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.0}>
            <h2
              id="file-io"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> File I/O in
              C
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {fileIO.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
                    File I/O
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {type.examples.map((example) => (
                      <div
                        key={example.title}
                        className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {example.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                          {example.description}
                        </p>
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.2}>
            <h2
              id="preprocessor"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Preprocessor
              Directives in C
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {preprocessor.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
                    Preprocessor Directives
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {type.examples.map((example) => (
                      <div
                        key={example.title}
                        className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {example.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                          {example.description}
                        </p>
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-blue-600"
            middleHomeButton={true}
            courses={Courses}
            currentIndex={5}
          />
        </div>
      </div>
    </div>
  );
}
