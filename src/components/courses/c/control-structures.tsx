"use client";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaExchangeAlt,
  FaLightbulb,
  FaQuestionCircle,
  FaRedoAlt,
  FaSyncAlt,
} from "react-icons/fa";

import HighlightCode from "@components/highlight";
import Courses from "@components/courses/c/navigation";
import Section from "@components/courses/section";
import CourseContainer from "@components/courses/container";

const topics = [
  {
    title: "If Statements",
    desc: "Learn how to make decisions in your code using if statements",
    id: "if-statements",
    icon: FaQuestionCircle,
  },
  {
    title: "Switch Statements",
    desc: "Explore multi-way decision making with switch statements",
    id: "switch-statements",
    icon: FaExchangeAlt,
  },
  {
    title: "For Loops",
    desc: "Master the art of iteration with for loops",
    id: "for-loops",
    icon: FaSyncAlt,
  },
  {
    title: "While Loops",
    desc: "Understand and implement while loops for conditional iteration",
    id: "while-loops",
    icon: FaRedoAlt,
  },
];

const ifStatements = [
  {
    title: "Basic If Statement",
    desc: "The simplest form of decision making in C",
    explanation:
      "An if statement allows you to execute a block of code only if a certain condition is true.",
    examples: `#include <stdio.h>

int main() {
    int x = 10;
    if (x > 5) {
        printf("x is greater than 5\\n");
    }
    return 0;
}`,
  },
  {
    title: "If-Else Statement",
    desc: "Make decisions between two alternatives",
    explanation:
      "An if-else statement allows you to execute one block of code if the condition is true, and another if it's false.",
    examples: `#include <stdio.h>

int main() {
    int age = 20;
    if (age >= 18) {
        printf("You are an adult\\n");
    } else {
        printf("You are a minor\\n");
    }
    return 0;
}`,
  },
];

const switchStatements = [
  {
    title: "Basic Switch Statement",
    desc: "Multi-way decision making using switch",
    explanation:
      "A switch statement allows you to select one of many code blocks to be executed.",
    examples: `#include <stdio.h>

int main() {
    int day = 4;
    switch (day) {
        case 1:
            printf("Monday");
            break;
        case 2:
            printf("Tuesday");
            break;
        case 3:
            printf("Wednesday");
            break;
        case 4:
            printf("Thursday");
            break;
        case 5:
            printf("Friday");
            break;
        default:
            printf("Weekend");
    }
    return 0;
}`,
  },
];

const forLoops = [
  {
    title: "Basic For Loop",
    desc: "Iterate a specific number of times",
    explanation:
      "A for loop repeats a block of code a specified number of times.",
    examples: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("%d ", i);
    }
    return 0;
}`,
  },
];

const whileLoops = [
  {
    title: "While Loop",
    desc: "Repeat a block of code while a condition is true",
    explanation:
      "A while loop continues to execute a block of code as long as a specified condition is true.",
    examples: `#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("%d ", i);
        i++;
    }
    return 0;
}`,
  },
  {
    title: "Do-While Loop",
    desc: "Execute a block of code at least once, then repeat while a condition is true",
    explanation:
      "A do-while loop is similar to a while loop, but it executes the code block at least once before checking the condition.",
    examples: `#include <stdio.h>

int main() {
    int i = 0;
    do {
        printf("%d ", i);
        i++;
    } while (i < 5);
    return 0;
}`,
  },
];

export default function CControlStructures() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "C Control Structures" }}
      courses={Courses}
      currentCourseLink="/courses/c/control-structures"
    >
      <Section id="course-overview" delay={0.3}>
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl shadow-2xl overflow-hidden mb-12 sm:mb-16">
          <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center space-x-4">
              <FaCode className="text-blue-600 dark:text-blue-300 text-2xl sm:text-3xl lg:text-4xl" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                Course Overview
              </span>
            </h2>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              Dive into the world of C control structures. Master the art of
              decision-making with if statements and switch cases, and harness
              the power of iteration with for and while loops. These fundamental
              concepts are crucial for creating dynamic and efficient C
              programs.
            </p>
          </div>
        </div>
      </Section>

      <Section id="what-you-ll-learn" delay={0.5}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 lg:mb-8 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
          <FaLightbulb className="mr-3 sm:mr-4 text-blue-600 dark:text-blue-300" />
          What You&apos;ll Learn
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
            >
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
                  <topic.icon className="mr-3 sm:mr-4 text-blue-600 dark:text-blue-300" />
                  {topic.title}
                </h3>
              </div>
              <div className="p-4 sm:p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg flex-grow flex flex-col justify-between">
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                  {topic.desc}
                </p>
                <Link
                  href={`#${topic.id}`}
                  className="text-blue-600 dark:text-blue-400 font-semibold flex items-center mt-auto text-base sm:text-lg hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Learn More{" "}
                  <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="if-statements" delay={0.8}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
          <FaLightbulb className="mr-3 sm:mr-4 text-blue-600 dark:text-blue-300" />
          If Statements in C
        </h3>
        {ifStatements.map((item, index) => (
          <div
            key={index}
            className={`${index !== ifStatements.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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
                <HighlightCode content={item.examples} language={"c"} />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </Section>

      <Section id="switch-statements" delay={1.0}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
          <FaLightbulb className="mr-3 sm:mr-4 text-blue-600 dark:text-blue-300" />
          Switch Statements in C
        </h3>
        {switchStatements.map((item, index) => (
          <div
            key={index}
            className={`${index !== switchStatements.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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
                <HighlightCode content={item.examples} language={"c"} />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </Section>

      <Section id="for-loops" delay={1.2}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
          <FaLightbulb className="mr-3 sm:mr-4 text-blue-600 dark:text-blue-300" />
          For Loops in C
        </h3>
        {forLoops.map((item, index) => (
          <div
            key={index}
            className={`${index !== forLoops.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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
                <HighlightCode content={item.examples} language={"c"} />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </Section>

      <Section id="while-loops" delay={1.4}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-gray-800 dark:text-white tracking-wide flex items-center">
          <FaLightbulb className="mr-3 sm:mr-4 text-blue-600 dark:text-blue-300" />
          While Loops in C
        </h3>
        {whileLoops.map((item, index) => (
          <div
            key={index}
            className={`${index !== whileLoops.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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
                <HighlightCode content={item.examples} language={"c"} />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </Section>
    </CourseContainer>
  );
}
