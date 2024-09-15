"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { TbLambda } from "react-icons/tb";
import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import AuthorInfo from "../author";
import Courses from "@components/courses/javascript/navigation";
import CourseNavigationButtons from "../buttons";

const topics = [
  {
    title: "Function Declaration",
    desc: "Learn how to declare and define functions",
    id: "function-declaration",
  },
  {
    title: "Parameters & Arguments",
    desc: "Understand how to pass data to functions",
    id: "parameters-arguments",
  },
  {
    title: "Return Values",
    desc: "Explore how functions can return results",
    id: "return-values",
  },
  {
    title: "Arrow Functions",
    desc: "Master the concise arrow function syntax",
    id: "arrow-functions",
  },
];

const functionDeclarations = [
  {
    type: "Function Declaration",
    title: "Standard Function Declaration",
    description:
      "This is the most common way to define a function. It uses the 'function' keyword followed by the function name.",
    example: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Outputs: Hello, Alice!`,
  },
  {
    type: "Function Expression",
    title: "Function Expression",
    description:
      "A function can also be created by a function expression. Such a function can be anonymous or have a name.",
    example: `const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Bob")); // Outputs: Hello, Bob!`,
  },
  {
    type: "Arrow Function",
    title: "Arrow Function",
    description:
      "Arrow functions provide a shorter syntax for writing function expressions. They don't have their own 'this', arguments, super, or new.target.",
    example: `const greet = (name) => {
  return "Hello, " + name + "!";
};

// For single expressions, you can omit the curly braces and 'return' keyword
const greetShort = name => "Hello, " + name + "!";

console.log(greetShort("Charlie")); // Outputs: Hello, Charlie!`,
  },
];

const parametersAndArguments = [
  {
    type: "Basic Parameters",
    examples: [
      {
        name: "Single Parameter",
        description: "A function with a single parameter",
        example: `function square(number) {
  return number * number;
}

console.log(square(5)); // Outputs: 25`,
      },
      {
        name: "Multiple Parameters",
        description: "A function with multiple parameters",
        example: `function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // Outputs: 7`,
      },
    ],
  },
  {
    type: "Advanced Parameters",
    examples: [
      {
        name: "Default Parameters",
        description: "Parameters with default values",
        example: `function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet()); // Outputs: Hello, Guest!
console.log(greet("Alice")); // Outputs: Hello, Alice!`,
      },
      {
        name: "Rest Parameters",
        description: "Represent an indefinite number of arguments as an array",
        example: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10`,
      },
    ],
  },
];

const returnValues = [
  {
    type: "Basic Return",
    examples: [
      {
        name: "Returning a Value",
        description: "A function that returns a single value",
        example: `function double(number) {
  return number * 2;
}

console.log(double(5)); // Outputs: 10`,
      },
      {
        name: "Returning Multiple Values",
        description: "A function that returns multiple values using an object",
        example: `function getPersonInfo(name, age) {
  return { name: name, age: age };
}

const person = getPersonInfo("Alice", 30);
console.log(person.name); // Outputs: Alice
console.log(person.age); // Outputs: 30`,
      },
    ],
  },
  {
    type: "Advanced Return",
    examples: [
      {
        name: "Early Return",
        description: "Using return to exit a function early",
        example: `function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4)); // Outputs: true
console.log(isEven(5)); // Outputs: false`,
      },
      {
        name: "Returning a Function",
        description: "A function that returns another function",
        example: `function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Outputs: 10`,
      },
    ],
  },
];

const arrowFunctions = [
  {
    type: "Basic Syntax",
    examples: [
      {
        name: "Simple Arrow Function",
        description: "A basic arrow function with a single parameter",
        example: `const square = x => x * x;

console.log(square(5)); // Outputs: 25`,
      },
      {
        name: "Multiple Parameters",
        description: "An arrow function with multiple parameters",
        example: `const add = (a, b) => a + b;

console.log(add(3, 4)); // Outputs: 7`,
      },
    ],
  },
  {
    type: "Advanced Usage",
    examples: [
      {
        name: "Arrow Function with Block",
        description: "An arrow function with a block of code",
        example: `const greet = name => {
  const message = "Hello, " + name + "!";
  return message;
};

console.log(greet("Alice")); // Outputs: Hello, Alice!`,
      },
      {
        name: "Returning an Object",
        description: "An arrow function that returns an object literal",
        example: `const createPerson = (name, age) => ({ name, age });

const person = createPerson("Bob", 30);
console.log(person); // Outputs: { name: "Bob", age: 30 }`,
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

export default function JavaScriptFunctions() {
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
              JavaScript Functions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-yellow-600 dark:text-yellow-200">
              Master the art of creating reusable code blocks
            </p>
          </motion.header>
          <AuthorInfo />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <TbLambda className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this course, you&apos;ll dive deep into JavaScript functions -
              the building blocks of reusable code. We&apos;ll cover function
              declarations, parameters, return values, and the modern arrow
              function syntax. By mastering functions, you&apos;ll be able to
              write more efficient and organized JavaScript code.
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
              <FaRocket className="mr-3" /> Why Functions Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Functions are at the heart of JavaScript programming. They allow
              you to write modular, reusable code, making your programs more
              efficient and easier to maintain. Understanding functions is
              crucial for any aspiring JavaScript developer, as they form the
              foundation for more advanced concepts like closures, callbacks,
              and asynchronous programming.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="function-declaration"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Function
              Declarations
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {functionDeclarations.map((item, index) => (
                <div
                  key={index}
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
                  <HighlightCode language="javascript" content={item.example} />
                </div>
              ))}
            </div>
          </Section>

          <Section delay={0.9}>
            <h2
              id="parameters-arguments"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Parameters &
              Arguments
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {parametersAndArguments.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {item.type}
                    </span>
                    {item.examples[index].name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {item.examples[index].description}
                  </p>
                  <HighlightCode
                    language="javascript"
                    content={item.examples[index].example}
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.0}>
            <h2
              id="return-values"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Return
              Values
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {returnValues.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {item.type}
                    </span>
                    {item.examples[index].name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {item.examples[index].description}
                  </p>
                  <HighlightCode
                    language="javascript"
                    content={item.examples[index].example}
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.1}>
            <h2
              id="arrow-functions"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Arrow
              Functions
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {arrowFunctions.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {item.type}
                    </span>
                    {item.examples[index].name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {item.examples[index].description}
                  </p>
                  <HighlightCode
                    language="javascript"
                    content={item.examples[index].example}
                  />
                </div>
              ))}
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-yellow-600"
            courses={Courses}
            middleHomeButton={true}
            currentIndex={2}
          />
        </div>
      </div>
    </div>
  );
}
