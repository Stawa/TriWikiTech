"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaCube,
  FaLightbulb,
  FaRocket,
  FaTerminal,
} from "react-icons/fa";
import AuthorInfo from "@components/courses/author";
import CourseNavigationButtons from "@components/courses/buttons";
import Courses from "@components/courses/javascript/navigation";
import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import Section from "@components/courses/section";

const topics = [
  {
    title: "Function Declaration",
    desc: "Learn how to declare and define functions",
    id: "function-declaration",
    icon: FaCode,
  },
  {
    title: "Parameters & Arguments",
    desc: "Understand how to pass data to functions",
    id: "parameters-arguments",
    icon: FaTerminal,
  },
  {
    title: "Return Values",
    desc: "Explore how functions can return results",
    id: "return-values",
    icon: FaCube,
  },
  {
    title: "Arrow Functions",
    desc: "Master the concise arrow function syntax",
    id: "arrow-functions",
    icon: FaRocket,
  },
];

const functionDeclarations = [
  {
    title: "Standard Function Declaration",
    description:
      "This is the most common way to define a function. It uses the 'function' keyword followed by the function name.",
    example: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Outputs: Hello, Alice!`,
    output: `Hello, Alice!`,
    explanation:
      "This function takes a 'name' parameter and returns a greeting string. When called with 'Alice', it outputs 'Hello, Alice!'.",
  },
  {
    title: "Function Expression",
    description:
      "A function can also be created by a function expression. Such a function can be anonymous or have a name.",
    example: `const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Bob")); // Outputs: Hello, Bob!`,
    output: `Hello, Bob!`,
    explanation:
      "This function is assigned to a variable 'greet'. It works similarly to the function declaration, but is defined as an expression.",
  },
  {
    title: "Arrow Function",
    description:
      "Arrow functions provide a shorter syntax for writing function expressions. They don't have their own 'this', arguments, super, or new.target.",
    example: `const greet = (name) => {
  return "Hello, " + name + "!";
};

// For single expressions, you can omit the curly braces and 'return' keyword
const greetShort = name => "Hello, " + name + "!";

console.log(greetShort("Charlie")); // Outputs: Hello, Charlie!`,
    output: `Hello, Charlie!`,
    explanation:
      "Arrow functions offer a concise syntax. The 'greetShort' function demonstrates a compact form for single-expression functions.",
  },
];

const parametersAndArguments = [
  {
    title: "Single Parameter",
    description: "A function with a single parameter",
    example: `function square(number) {
  return number * number;
}

console.log(square(5)); // Outputs: 25`,
    output: `25`,
    explanation:
      "This function takes one parameter 'number' and returns its square. When called with 5, it returns 25.",
  },
  {
    title: "Multiple Parameters",
    description: "A function with multiple parameters",
    example: `function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // Outputs: 7`,
    output: `7`,
    explanation:
      "This function takes two parameters 'a' and 'b' and returns their sum. When called with 3 and 4, it returns 7.",
  },
  {
    title: "Default Parameters",
    description: "Parameters with default values",
    example: `function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet()); // Outputs: Hello, Guest!
console.log(greet("Alice")); // Outputs: Hello, Alice!`,
    output: `Hello, Guest!
Hello, Alice!`,
    explanation:
      "This function has a default parameter. If no argument is provided, it uses 'Guest' as the default value.",
  },
  {
    title: "Rest Parameters",
    description: "Represent an indefinite number of arguments as an array",
    example: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10`,
    output: `10`,
    explanation:
      "The rest parameter '...numbers' allows the function to accept any number of arguments. It then sums all the provided numbers.",
  },
];

const returnValues = [
  {
    title: "Returning a Value",
    description: "A function that returns a single value",
    example: `function double(number) {
  return number * 2;
}

console.log(double(5)); // Outputs: 10`,
    output: `10`,
    explanation:
      "This function takes a number, doubles it, and returns the result. When called with 5, it returns 10.",
  },
  {
    title: "Returning Multiple Values",
    description: "A function that returns multiple values using an object",
    example: `function getPersonInfo(name, age) {
  return { name: name, age: age };
}

const person = getPersonInfo("Alice", 30);
console.log(person.name); // Outputs: Alice
console.log(person.age); // Outputs: 30`,
    output: `Alice
30`,
    explanation:
      "This function returns an object containing multiple values. We can then access these values using dot notation.",
  },
  {
    title: "Early Return",
    description: "Using return to exit a function early",
    example: `function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4)); // Outputs: true
console.log(isEven(5)); // Outputs: false`,
    output: `true
false`,
    explanation:
      "This function uses an early return to exit as soon as it determines if a number is even. It returns true for 4 and false for 5.",
  },
  {
    title: "Returning a Function",
    description: "A function that returns another function",
    example: `function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Outputs: 10`,
    output: `10`,
    explanation:
      "This function returns another function. We create a 'double' function by calling multiplier with 2, then use it to multiply 5 by 2.",
  },
];

const arrowFunctions = [
  {
    title: "Simple Arrow Function",
    description: "A basic arrow function with a single parameter",
    example: `const square = x => x * x;

console.log(square(5)); // Outputs: 25`,
    output: `25`,
    explanation:
      "This concise arrow function takes a single parameter 'x' and returns its square. When called with 5, it returns 25.",
  },
  {
    title: "Multiple Parameters",
    description: "An arrow function with multiple parameters",
    example: `const add = (a, b) => a + b;

console.log(add(3, 4)); // Outputs: 7`,
    output: `7`,
    explanation:
      "This arrow function takes two parameters 'a' and 'b' and returns their sum. When called with 3 and 4, it returns 7.",
  },
  {
    title: "Arrow Function with Block",
    description: "An arrow function with a block of code",
    example: `const greet = name => {
  const message = "Hello, " + name + "!";
  return message;
};

console.log(greet("Alice")); // Outputs: Hello, Alice!`,
    output: `Hello, Alice!`,
    explanation:
      "This arrow function uses a block of code. It creates a message and then returns it. When called with 'Alice', it outputs 'Hello, Alice!'.",
  },
  {
    title: "Returning an Object",
    description: "An arrow function that returns an object literal",
    example: `const createPerson = (name, age) => ({ name, age });

const person = createPerson("Bob", 30);
console.log(person); // Outputs: { name: "Bob", age: 30 }`,
    output: `{ name: "Bob", age: 30 }`,
    explanation:
      "This arrow function returns an object. The parentheses around the object are necessary to distinguish it from a function body.",
  },
];

export default function JavaScriptFunctions() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 dark:from-gray-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 lg:mb-16 text-center"
          >
            <AuthorInfo date="2024-09-15" title={"JavaScript Functions"} />
          </motion.header>

          <Section id="course-overview" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-wide flex items-center space-x-3">
                  <FaCode className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    Course Overview
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                  In this course, you&apos;ll dive deep into JavaScript
                  functions - the building blocks of reusable code. We&apos;ll
                  cover function declarations, parameters, return values, and
                  the modern arrow function syntax. By mastering functions,
                  you&apos;ll be able to write more efficient and organized
                  JavaScript code.
                </p>
              </div>
            </div>
          </Section>

          <Section id="topics" delay={0.5}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
                      <span className="mr-2 text-blue-600 dark:text-blue-300">
                        {<topic.icon />}
                      </span>
                      {topic.title}
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg flex-grow flex flex-col justify-between">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {topic.desc}
                    </p>
                    <Link
                      href={`#${topic.id}`}
                      className="text-blue-600 dark:text-blue-300 font-semibold flex items-center mt-auto text-sm sm:text-base hover:text-blue-500 dark:hover:text-blue-200 transition-colors duration-300"
                    >
                      Learn More{" "}
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="why-functions-matter" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-wide flex items-center space-x-3">
                  <FaRocket className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    Why Functions Matter
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                  Functions are at the heart of JavaScript programming. They
                  allow you to write modular, reusable code, making your
                  programs more efficient and easier to maintain. Understanding
                  functions is crucial for any aspiring JavaScript developer, as
                  they form the foundation for more advanced concepts like
                  closures, callbacks, and asynchronous programming.
                </p>
              </div>
            </div>
          </Section>

          <Section id="function-declaration" delay={0.8}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Function Declarations
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {functionDeclarations.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-3 sm:mb-4 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="parameters-arguments" delay={0.9}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Parameters & Arguments
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {parametersAndArguments.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-3 sm:mb-4 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="return-values" delay={1.0}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Return Values
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {returnValues.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-3 sm:mb-4 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="arrow-functions" delay={1.1}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Arrow Functions
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {arrowFunctions.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-3 sm:mb-4 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="mx-2 sm:mx-4 lg:mx-6">
            <CourseNavigationButtons
              courses={Courses}
              currentIndex={Courses.findIndex(
                (course) => course.link === "/courses/javascript/functions"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
