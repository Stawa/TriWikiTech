"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaExchangeAlt,
  FaLightbulb,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";
import AuthorInfo from "@components/courses/author";
import CourseNavigationButtons from "@components/courses/buttons";
import Courses from "@components/courses/javascript/navigation";
import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import Section from "@components/courses/section";

const topics = [
  {
    title: "Conditional Statements",
    desc: "Learn about if, else if, and else",
    id: "conditionals",
    icon: FaCode,
  },
  {
    title: "Loops",
    desc: "Understand for, while, and do-while loops",
    id: "loops",
    icon: FaSyncAlt,
  },
  {
    title: "Switch Statements",
    desc: "Master the switch-case structure",
    id: "switch",
    icon: FaExchangeAlt,
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
    output: `You are eligible to vote.`,
    explanation:
      "In this example, since the age is 18, which is greater than or equal to 18, the first condition is true, so the first console.log statement is executed.",
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
    output: `Grade: B`,
    explanation:
      "Here, the score is 85. It's not greater than or equal to 90, but it is greater than or equal to 80, so the second condition is true and 'Grade: B' is logged.",
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
    output: `Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4`,
    explanation:
      "This for loop runs 5 times, with i starting at 0 and incrementing by 1 each time until it reaches 4.",
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
    output: `Count: 0
Count: 1
Count: 2
Count: 3
Count: 4`,
    explanation:
      "This while loop continues to execute as long as count is less than 5. It increments count each time, so it will run 5 times.",
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
    output: `Number: 0
Number: 1
Number: 2
Number: 3
Number: 4`,
    explanation:
      "This do-while loop works similarly to the while loop, but it would execute at least once even if the initial condition was false.",
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
  output: `Today is Wednesday`,
  explanation:
    "In this switch statement, the value of day is 3, so it matches the case 3, and dayName is set to 'Wednesday'.",
};

export default function JavaScriptControlStructures() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-gray-100">
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
              JavaScript Control Structures
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-300">
              Master the flow of your JavaScript code
            </p>
          </motion.header>

          <div className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
            <AuthorInfo
              date={"September 15th, 2024"}
              lastEdit={"September 17th, 2024"}
            />
          </div>

          <Section id="course-overview" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaCode className="mr-4 text-blue-300" />
                  Course Overview
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  In this course, you&apos;ll learn about JavaScript control
                  structures. We&apos;ll cover conditional statements, loops,
                  and switch statements - essential tools for controlling the
                  flow of your code and making decisions based on different
                  conditions.
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
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
                      className="text-blue-300 font-semibold flex items-center mt-auto text-base sm:text-lg hover:text-blue-200 transition-colors duration-300"
                    >
                      Learn More{" "}
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="why-control-structures-matter" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaRocket className="mr-4 text-blue-300" />
                  Why Control Structures Matter
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Control structures are fundamental to programming. They allow
                  you to make decisions in your code, repeat actions, and choose
                  different code paths based on conditions. Mastering these
                  concepts will give you the power to create more complex and
                  interactive JavaScript applications.
                </p>
              </div>
            </div>
          </Section>

          <Section id="conditionals" delay={0.8}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaCode className="mr-3 sm:mr-4 text-blue-300" />
              Conditional Statements
            </h3>
            {conditionalExamples.map((item, index) => (
              <div
                key={index}
                className={`${index !== conditionalExamples.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <div className="mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-base sm:text-lg text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="loops" delay={0.9}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaSyncAlt className="mr-3 sm:mr-4 text-blue-300" />
              Loops
            </h3>
            {loopExamples.map((item, index) => (
              <div
                key={index}
                className={`${index !== loopExamples.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <div className="mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-base sm:text-lg text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="switch" delay={1.0}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaExchangeAlt className="mr-3 sm:mr-4 text-blue-300" />
              Switch Statements
            </h3>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                  {switchExample.title}
                </h3>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <div className="mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
                    {switchExample.description}
                  </p>
                  <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode
                      content={switchExample.example}
                      language={"javascript"}
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                      Output:
                    </h4>
                    <div className="rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={switchExample.output}
                        language={"javascript"}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                      Explanation:
                    </h4>
                    <p className="text-base sm:text-lg text-gray-200">
                      {switchExample.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <div className="px-4 sm:px-6 lg:px-8">
            <CourseNavigationButtons
              colorStyle="bg-blue-500 hover:bg-blue-600"
              middleHomeButton={true}
              courses={Courses}
              currentIndex={Courses.findIndex(
                (course) =>
                  course.link === "/courses/javascript/control-structures"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
