"use client";

import hljs from "highlight.js";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import GridBackground from "@components/grid";
import { useEffect } from "react";
import "highlight.js/styles/github-dark.css";
import AuthorInfo from "../author";

const topics = [
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
  {
    title: "Operators",
    desc: "Explore arithmetic, comparison, and logical operators",
    id: "operators",
  },
  {
    title: "Control Structures",
    desc: "Master if statements, loops, and switch cases",
    id: "control-structures",
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
        example: "let age = 25; let pi = 3.14;",
      },
      {
        name: "String",
        description: "Represents textual data",
        example: "let name = 'John'; let greeting = `Hello, ${name}`;",
      },
      {
        name: "Boolean",
        description: "Represents a logical entity with two values",
        example: "let isActive = true; let isLoggedIn = false;",
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
        example: "const id = Symbol('id'); let user = { [id]: 1 };",
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
        example: "function greet(name) { return `Hello, ${name}!`; }",
      },
    ],
  },
];

const operators = [
  {
    type: "Arithmetic",
    examples: [
      {
        operator: "+",
        description: "Addition",
        example: "let sum = 5 + 3; // 8",
      },
      {
        operator: "-",
        description: "Subtraction",
        example: "let difference = 10 - 4; // 6",
      },
      {
        operator: "*",
        description: "Multiplication",
        example: "let product = 3 * 4; // 12",
      },
      {
        operator: "/",
        description: "Division",
        example: "let quotient = 20 / 5; // 4",
      },
      {
        operator: "%",
        description: "Modulus (remainder)",
        example: "let remainder = 17 % 5; // 2",
      },
    ],
  },
  {
    type: "Comparison",
    examples: [
      {
        operator: "==",
        description: "Equal to (value)",
        example: "5 == '5' // true",
      },
      {
        operator: "===",
        description: "Strict equal to (value and type)",
        example: "5 === '5' // false",
      },
      {
        operator: "!=",
        description: "Not equal to",
        example: "5 != '6' // true",
      },
      {
        operator: "!==",
        description: "Strict not equal to",
        example: "5 !== '5' // true",
      },
      { operator: ">", description: "Greater than", example: "10 > 5 // true" },
      { operator: "<", description: "Less than", example: "3 < 7 // true" },
    ],
  },
  {
    type: "Logical",
    examples: [
      { operator: "&&", description: "AND", example: "true && false // false" },
      { operator: "||", description: "OR", example: "true || false // true" },
      { operator: "!", description: "NOT", example: "!true // false" },
    ],
  },
];

const controlStructures = [
  {
    type: "Conditional Statements",
    examples: [
      {
        name: "if...else",
        description:
          "Executes a block of code if a specified condition is true",
        example: `if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}`,
      },
      {
        name: "switch",
        description: "Selects one of many code blocks to be executed",
        example: `switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}`,
      },
    ],
  },
  {
    type: "Loops",
    examples: [
      {
        name: "for",
        description: "Repeats a block of code a number of times",
        example: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
      },
      {
        name: "while",
        description:
          "Loops through a block of code while a specified condition is true",
        example: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`,
      },
      {
        name: "do...while",
        description:
          "Executes a block of code once, and then repeats the loop while a specified condition is true",
        example: `let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`,
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
  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
          <AuthorInfo />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaCode className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this course, you&apos;ll learn the essential building blocks of
              JavaScript programming. We&apos;ll cover variables, data types,
              operators, and control structures - the fundamental concepts you
              need to start your journey in JavaScript development.
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
              id="variables"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaLightbulb className="mr-3" /> Understanding Variable Types
            </h2>
            <div className="space-y-8">
              {variableTypes.map((item) => (
                <div
                  key={item.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 flex items-center">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full mr-3">
                      {item.type}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
                    <code className="language-javascript text-sm sm:text-base text-gray-800 dark:text-gray-200">
                      {item.example}
                    </code>
                  </pre>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={0.9}>
            <h2
              id="data-types"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaLightbulb className="mr-3" /> Data Types in JavaScript
            </h2>
            <div className="space-y-8">
              {dataTypes.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 flex items-center">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full mr-3">
                      {type.type}
                    </span>
                    Data Types
                  </h3>
                  <div className="space-y-4">
                    {type.examples.map((example) => (
                      <div
                        key={example.name}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg"
                      >
                        <h4 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                          {example.name}
                        </h4>
                        <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                          {example.description}
                        </p>
                        <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
                          <code className="language-javascript text-sm sm:text-base text-gray-800 dark:text-gray-200">
                            {example.example}
                          </code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.2}>
            <h2
              id="operators"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaCode className="mr-3" /> Operators in JavaScript
            </h2>
            <div className="space-y-8">
              {operators.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 flex items-center">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full mr-3">
                      {type.type}
                    </span>
                    Operators
                  </h3>
                  <div className="space-y-4">
                    {type.examples.map((example) => (
                      <div
                        key={example.operator}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">
                            {example.operator}
                          </span>
                          <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                            {example.description}
                          </span>
                        </div>
                        <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
                          <code className="text-sm text-gray-800 dark:text-gray-200">
                            {example.example}
                          </code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.5}>
            <h2
              id="control-structures"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaCode className="mr-3" /> Control Structures in JavaScript
            </h2>
            <div className="space-y-8">
              {controlStructures.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 flex items-center">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full mr-3">
                      {type.type}
                    </span>
                  </h3>
                  <div className="space-y-4">
                    {type.examples.map((example) => (
                      <div
                        key={example.name}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg"
                      >
                        <h4 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                          {example.name}
                        </h4>
                        <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                          {example.description}
                        </p>
                        <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
                          <code className="text-sm text-gray-800 dark:text-gray-200">
                            {example.example}
                          </code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <Link
              href="/courses/javascript"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base md:text-lg"
            >
              <FaArrowLeft className="mr-2" />
              Back to JavaScript Courses
            </Link>
            <Link
              href="/courses/javascript/functions"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base md:text-lg"
            >
              Next: JavaScript Functions
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
