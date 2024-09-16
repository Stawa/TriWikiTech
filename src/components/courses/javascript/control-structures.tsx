"use client";

import GridBackground from "@components/grid";
import AuthorInfo from "../author";
import CourseNavigationButtons from "../buttons";
import HighlightCode from "@components/highlight";
import Courses from "@components/courses/javascript/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket, FaTerminal } from "react-icons/fa";

const topics = [
  {
    title: "Conditional Statements",
    desc: "Learn about if, else if, and else",
    id: "conditionals",
  },
  {
    title: "Loops",
    desc: "Understand for, while, and do-while loops",
    id: "loops",
  },
  {
    title: "Switch Statements",
    desc: "Master the switch-case structure",
    id: "switch",
  },
];

const conditionalExamples = [
  {
    type: "if-else",
    title: "if-else Statement",
    description:
      "The if-else statement allows you to execute different blocks of code based on a condition.",
    example: `let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}`,
  },
  {
    type: "else-if",
    title: "else-if Statement",
    description:
      "The else-if statement allows you to check multiple conditions in sequence.",
    example: `let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`,
  },
];

const loopExamples = [
  {
    type: "for",
    title: "for Loop",
    description:
      "The for loop repeats a block of code a specified number of times.",
    example: `for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}`,
  },
  {
    type: "while",
    title: "while Loop",
    description:
      "The while loop repeats a block of code as long as a specified condition is true.",
    example: `let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}`,
  },
  {
    type: "do-while",
    title: "do-while Loop",
    description:
      "The do-while loop is similar to the while loop, but it always executes the code block at least once before checking the condition.",
    example: `let num = 0;
do {
  console.log("Number: " + num);
  num++;
} while (num < 5);`,
  },
];

const switchExample = {
  title: "Switch Statement",
  description:
    "The switch statement is used to perform different actions based on different conditions.",
  example: `let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log("Today is " + dayName);`,
};

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

export default function JavaScriptControlStructures() {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500">
              JavaScript Control Structures
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-yellow-600 dark:text-yellow-200">
              Master the flow of your JavaScript code
            </p>
          </motion.header>
          <AuthorInfo date={"September 16th, 2024"} />

          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaCode className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this course, you&apos;ll learn about JavaScript control
              structures. We&apos;ll cover conditional statements, loops, and
              switch statements - essential tools for controlling the flow of
              your code and making decisions based on different conditions.
            </p>
          </Section>

          <Section delay={0.5}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaLightbulb className="mr-3" /> What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {topics.map((topic, index) => (
                <Link href={`#${topic.id}`} key={index}>
                  <div className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 border border-yellow-600 dark:border-yellow-400 p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaRocket className="mr-3" /> Why Control Structures Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Control structures are fundamental to programming. They allow you
              to make decisions in your code, repeat actions, and choose
              different code paths based on conditions. Mastering these concepts
              will give you the power to create more complex and interactive
              JavaScript applications.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="conditionals"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaTerminal className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Conditional
              Statements
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              Conditional statements allow your code to make decisions and
              execute different code blocks based on different conditions.
            </p>
            <div className="space-y-6 sm:space-y-8">
              {conditionalExamples.map((item) => (
                <div
                  key={item.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {item.type}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <HighlightCode
                    content={item.example}
                    language={"javascript"}
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section delay={0.9}>
            <h2
              id="loops"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaTerminal className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Loops
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              Loops allow you to repeat a block of code multiple times, making
              it easier to work with arrays, perform iterations, and automate
              repetitive tasks.
            </p>
            <div className="space-y-6 sm:space-y-8">
              {loopExamples.map((item) => (
                <div
                  key={item.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {item.type}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <HighlightCode
                    content={item.example}
                    language={"javascript"}
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.0}>
            <h2
              id="switch"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaTerminal className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Switch
              Statements
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              Switch statements provide a way to execute different code blocks
              based on different cases, offering an alternative to multiple
              if-else statements.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4">
                {switchExample.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                {switchExample.description}
              </p>
              <HighlightCode
                content={switchExample.example}
                language={"javascript"}
              />
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-yellow-600"
            middleHomeButton={true}
            courses={Courses}
            currentIndex={2}
          />
        </div>
      </div>
    </div>
  );
}
