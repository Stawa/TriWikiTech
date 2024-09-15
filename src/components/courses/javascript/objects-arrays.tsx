"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import AuthorInfo from "../author";
import Courses from "@components/courses/javascript/navigation";
import CourseNavigationButtons from "../buttons";

const topics = [
  {
    title: "Object Basics",
    desc: "Learn to create and manipulate JavaScript objects",
    id: "object-basics",
  },
  {
    title: "Array Fundamentals",
    desc: "Master working with arrays and their methods",
    id: "array-fundamentals",
  },
  {
    title: "Object Methods",
    desc: "Explore built-in object methods and custom functions",
    id: "object-methods",
  },
  {
    title: "Array Operations",
    desc: "Dive into advanced array operations and transformations",
    id: "array-operations",
  },
];

const objectBasics = [
  {
    type: "Creation",
    title: "Object Creation",
    description:
      "Objects in JavaScript are collections of key-value pairs. They can be created using object literals or the Object constructor.",
    example: `// Using object literal
const person = {
  name: 'John',
  age: 30,
  isStudent: false
};

// Using Object constructor
const car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2022;`,
  },
  {
    type: "Access",
    title: "Accessing Object Properties",
    description:
      "Object properties can be accessed using dot notation or bracket notation.",
    example: `const person = { name: 'Alice', age: 25 };

// Dot notation
console.log(person.name); // Outputs: Alice

// Bracket notation
console.log(person['age']); // Outputs: 25

// Using variables with bracket notation
const propertyName = 'name';
console.log(person[propertyName]); // Outputs: Alice`,
  },
];

const arrayFundamentals = [
  {
    type: "Creation",
    title: "Array Creation",
    description:
      "Arrays in JavaScript are ordered lists of values. They can be created using array literals or the Array constructor.",
    example: `// Using array literal
const fruits = ['apple', 'banana', 'orange'];

// Using Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Creating an empty array
const emptyArray = [];`,
  },
  {
    type: "Access",
    title: "Accessing Array Elements",
    description: "Array elements are accessed using zero-based indexing.",
    example: `const colors = ['red', 'green', 'blue'];

console.log(colors[0]); // Outputs: red
console.log(colors[2]); // Outputs: blue

// Accessing last element
console.log(colors[colors.length - 1]); // Outputs: blue`,
  },
];

const objectMethods = [
  {
    type: "Built-in",
    examples: [
      {
        name: "Object.keys()",
        description:
          "Returns an array of a given object's own enumerable property names.",
        example: `const person = { name: 'John', age: 30 };
console.log(Object.keys(person)); // Outputs: ['name', 'age']`,
      },
      {
        name: "Object.values()",
        description:
          "Returns an array of a given object's own enumerable property values.",
        example: `const person = { name: 'John', age: 30 };
console.log(Object.values(person)); // Outputs: ['John', 30]`,
      },
    ],
  },
  {
    type: "Custom",
    examples: [
      {
        name: "Custom Method",
        description: "You can add custom methods to objects.",
        example: `const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // Outputs: 8
console.log(calculator.subtract(10, 4)); // Outputs: 6`,
      },
    ],
  },
];

const arrayOperations = [
  {
    type: "Manipulation",
    examples: [
      {
        name: "push() and pop()",
        description: "Add or remove elements from the end of an array.",
        example: `const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Outputs: ['apple', 'banana', 'orange']

const lastFruit = fruits.pop();
console.log(lastFruit); // Outputs: orange
console.log(fruits); // Outputs: ['apple', 'banana']`,
      },
      {
        name: "map()",
        description:
          "Create a new array with the results of calling a provided function on every element.",
        example: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8]`,
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

export default function JavaScriptObjectsArrays() {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 dark:from-yellow-400 dark:via-yellow-300 dark:to-yellow-500">
              JavaScript Objects & Arrays
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-600 dark:text-yellow-200">
              Master complex data structures in JavaScript
            </p>
          </motion.header>
          <AuthorInfo date={"September 15th, 2024"} />
          <Section delay={0.3}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaCode className="mr-3" /> Course Overview
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              In this course, you&apos;ll dive deep into JavaScript objects and
              arrays. We&apos;ll cover object creation and manipulation, array
              fundamentals, object methods, and advanced array operations. These
              concepts are crucial for working with complex data structures in
              JavaScript.
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaRocket className="mr-3" /> Why Objects & Arrays Matter
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Objects and arrays are fundamental data structures in JavaScript.
              They allow you to organize, store, and manipulate complex data
              efficiently. Mastering these concepts is crucial for building
              robust and scalable applications, working with APIs, and
              implementing advanced programming patterns.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="object-basics"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaLightbulb className="mr-3" /> Object Basics
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {objectBasics.map((item) => (
                <div
                  key={item.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm">
                      {item.type}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
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
              id="array-fundamentals"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaLightbulb className="mr-3" /> Array Fundamentals
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {arrayFundamentals.map((item) => (
                <div
                  key={item.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center">
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm">
                      {item.type}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
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
              id="object-methods"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaLightbulb className="mr-3" /> Object Methods
            </h2>
            <div className="space-y-8">
              {objectMethods.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  {item.examples.map((example, idx) => (
                    <div key={idx} className="mb-6 sm:mb-8">
                      <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center">
                        <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm">
                          {item.type}
                        </span>
                        {example.name}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                        {example.description}
                      </p>
                      <HighlightCode
                        content={example.example}
                        language={"javascript"}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.1}>
            <h2
              id="array-operations"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-400 flex items-center"
            >
              <FaLightbulb className="mr-2 sm:mr-3" /> Array Operations
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {arrayOperations.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  {item.examples.map((example, idx) => (
                    <div key={idx} className="mb-6 sm:mb-8">
                      <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                        <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                          {item.type}
                        </span>
                        {example.name}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                        {example.description}
                      </p>
                      <HighlightCode
                        content={example.example}
                        language={"javascript"}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 sm:mb-12 md:mb-16 bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-400 flex items-center">
              <FaRocket className="mr-3" /> Why Objects & Arrays Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Objects and arrays are fundamental data structures in JavaScript.
              They allow you to organize, store, and manipulate complex data
              efficiently. Mastering these concepts is crucial for building
              robust and scalable applications, working with APIs, and
              implementing advanced programming patterns.
            </p>
          </motion.section>

          <CourseNavigationButtons
            colorStyle="bg-yellow-600"
            courses={Courses}
            currentIndex={3}
          />
        </div>
      </div>
    </div>
  );
}
