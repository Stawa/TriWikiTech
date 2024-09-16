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
    title: "Console.log",
    desc: "Learn how to output data to the console",
    id: "console-log",
  },
  {
    title: "Variables",
    desc: "Learn about var, let, and const",
    id: "variables",
  },
  {
    title: "Data Types",
    desc: "Understand primitive and complex data types",
    id: "data-types",
  },
];

const variableTypes = [
  {
    type: "var",
    title: "var (Function/Global Scope)",
    description:
      "Use 'var' for function-scoped or globally-scoped variables. It's the oldest way to declare variables in JavaScript, but it's less commonly used in modern code due to potential scoping issues.",
    example: `// Using var (function-scoped or globally-scoped)
var x = 10;
if (true) {
  var x = 20; // This will overwrite the previous x
}
console.log(x); // Outputs 20

// Caution: var can lead to unexpected behavior due to hoisting
console.log(y); // Outputs undefined, not an error
var y = 5;`,
  },
  {
    type: "let",
    title: "let (Block Scope)",
    description:
      "Use 'let' for block-scoped variables that you plan to reassign later. It's perfect for loops, conditional statements, or any situation where the variable's value might change.",
    example: `// Using let (block-scoped)
let count = 0;
if (true) {
  let count = 1; // This creates a new variable, doesn't affect outer count
  console.log(count); // Outputs 1
}
console.log(count); // Outputs 0

// Proper use: let for variables that will be reassigned
let score = 75;
score = score + 25; // Now score is 100`,
  },
  {
    type: "const",
    title: "const (Block Scope, Immutable)",
    description:
      "Use 'const' for variables that won't be reassigned. It's ideal for declaring constants, function declarations, or object and array references that won't change.",
    example: `// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // This would cause an error

// Note: const for objects and arrays (their properties can be modified)
const user = { name: 'John', age: 30 };
user.age = 31; // This is allowed
// user = { name: 'Jane' }; // This would cause an error

// Best practice: Use const for variables that won't be reassigned
const DAYS_IN_WEEK = 7; // Correct usage of const`,
  },
];

const dataTypes = [
  {
    type: "Primitive",
    examples: [
      {
        name: "Number",
        description: "Represents both integer and floating-point numbers",
        example: "let age = 25;\nlet pi = 3.14;",
      },
      {
        name: "String",
        description: "Represents textual data",
        example: "let name = 'John';\nlet greeting = `Hello, ${name}`;",
      },
      {
        name: "Boolean",
        description: "Represents a logical entity with two values",
        example: "let isActive = true;\nlet isLoggedIn = false;",
      },
      {
        name: "Undefined",
        description:
          "Represents a variable that has been declared but not assigned a value",
        example: "let x; console.log(x); // Outputs: undefined",
      },
      {
        name: "Null",
        description:
          "Represents a deliberate non-value or absence of any object value",
        example: "let empty = null;",
      },
      {
        name: "Symbol",
        description: "Represents a unique identifier",
        example: "const id = Symbol('id');\nlet user = { [id]: 1 };",
      },
    ],
  },
  {
    type: "Complex",
    examples: [
      {
        name: "Object",
        description:
          "Represents a collection of related data and/or functionality",
        example: "let person = { name: 'Alice', age: 30 };",
      },
      {
        name: "Array",
        description: "Represents a list-like object",
        example: "let fruits = ['apple', 'banana', 'orange'];",
      },
      {
        name: "Function",
        description: "A reusable block of code",
        example: `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
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

export default function JavaScriptBasics() {
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
              JavaScript Basics
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-yellow-600 dark:text-yellow-200">
              Master the fundamentals of JavaScript
            </p>
          </motion.header>
          <AuthorInfo date={"September 15th, 2024"} />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaCode className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this course, you&apos;ll learn the essential building blocks of
              JavaScript programming. We&apos;ll cover console.log, variables,
              and data types - the fundamental concepts you need to start your
              journey in JavaScript development.
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
              <FaRocket className="mr-3" /> Why These Basics Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Understanding these fundamental concepts is crucial for any
              aspiring JavaScript developer. These basics form the foundation
              upon which more advanced concepts are built, enabling you to write
              efficient, clean, and powerful JavaScript code.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="console-log"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaTerminal className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Console.log:
              Your First JavaScript Output
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              console.log() is a crucial function in JavaScript that allows you
              to output data to the console. It&apos;s often used for debugging
              and understanding how your code is executing.
            </p>
            <HighlightCode
              content={`// Basic usage
console.log('Hello, World!');

// Logging variables
let name = 'Alice';
console.log(name);  // Outputs: Alice

// Logging multiple items
console.log('Name:', name, 'Age:', 30);

// Using template literals
console.log(\`Hello, \${name}!\`);

// Logging objects
let person = { name: 'Bob', age: 25 };
console.log(person);  // Outputs: { name: 'Bob', age: 25 }

// Logging arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);  // Outputs: ['apple', 'banana', 'orange']`}
              language={"javascript"}
            />
          </Section>

          <Section delay={0.9}>
            <h2
              id="variables"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" />{" "}
              Understanding Variable Types
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {variableTypes.map((item) => (
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
              id="data-types"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Data Types
              in JavaScript
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {dataTypes.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
                    Data Types
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {type.examples.map((example) => (
                      <div
                        key={example.name}
                        className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                          {example.name}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                          {example.description}
                        </p>
                        <HighlightCode
                          content={example.example}
                          language={"javascript"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-yellow-600"
            courses={Courses}
            currentIndex={1}
          />
        </div>
      </div>
    </div>
  );
}
