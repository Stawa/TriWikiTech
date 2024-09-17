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
    title: "Console.log",
    desc: "Learn how to output data to the console",
    id: "console-log",
    icon: FaTerminal,
  },
  {
    title: "Variables",
    desc: "Learn about var, let, and const",
    id: "variables",
    icon: FaCode,
  },
  {
    title: "Data Types",
    desc: "Understand primitive and complex data types",
    id: "data-types",
    icon: FaCube,
  },
];

const variableTypes = [
  {
    type: "var",
    title: "var (Function/Global Scope)",
    description:
      "The 'var' keyword is the oldest way to declare variables in JavaScript. It creates variables that are either function-scoped or globally-scoped. This means that if you declare a variable with 'var' inside a function, it's only accessible within that function. If you declare it outside any function, it becomes a global variable, accessible throughout your entire script.",
    example: `// Using var (function-scoped or globally-scoped)
var x = 10;
if (true) {
  var x = 20; // This will overwrite the previous x
}
console.log(x); // Outputs 20

// Caution: var can lead to unexpected behavior due to hoisting
console.log(y); // Outputs undefined, not an error
var y = 5;`,
    output: `20
undefined`,
    explanation:
      "In the first example, we see that 'var' doesn't respect block scope (like inside an if statement). When we redeclare 'x' inside the if block, it affects the outer 'x' as well. This can lead to unexpected behavior in larger programs.\n\nThe second example demonstrates 'hoisting', a behavior specific to 'var'. When you use 'var', JavaScript moves the declaration (but not the initialization) to the top of its scope. This is why we can use 'y' before its actual declaration in the code without getting an error.\n\nBest practice: Due to these potentially confusing behaviors, 'var' is less commonly used in modern JavaScript. It's better to use 'let' or 'const' instead, which we'll cover next.",
  },
  {
    type: "let",
    title: "let (Block Scope)",
    description:
      "The 'let' keyword, introduced in ES6 (2015), creates block-scoped variables. This means the variable is only accessible within the nearest set of curly braces {} where it was declared. 'let' allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.",
    example: `// Using let (block-scoped)
let count = 0;
if (true) {
  let count = 1; // This creates a new variable, doesn't affect outer count
  console.log(count); // Outputs 1
}
console.log(count); // Outputs 0

// Proper use: let for variables that will be reassigned
let score = 75;
score = score + 25; // Now score is 100
console.log(score); // Outputs 100`,
    output: `1
0
100`,
    explanation:
      "In the first example, we see how 'let' respects block scope. The 'count' variable inside the if block is a completely separate variable from the outer 'count'. This prevents accidental modifications of variables outside the current block.\n\nThe second example shows that 'let' allows reassignment. You can change the value of a 'let' variable after it's been declared. This is useful for variables whose values need to change over time, like counters or accumulating values.\n\nBest practice: Use 'let' when you need to reassign values to a variable, especially within loops or block statements. It helps prevent accidental global variable declarations and makes your code's intent clearer.",
  },
  {
    type: "const",
    title: "const (Block Scope, Immutable)",
    description:
      "The 'const' keyword, also introduced in ES6, creates block-scoped variables like 'let', but with one key difference: variables declared with 'const' cannot be reassigned after they are initialized. This makes 'const' ideal for values that shouldn't change throughout your program.",
    example: `// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // This would cause an error

// Note: const for objects and arrays (their properties can be modified)
const user = { name: 'John', age: 30 };
user.age = 31; // This is allowed
console.log(user);

// user = { name: 'Jane' }; // This would cause an error

// Best practice: Use const for variables that won't be reassigned
const DAYS_IN_WEEK = 7; // Correct usage of const
console.log(DAYS_IN_WEEK);`,
    output: `{ name: 'John', age: 31 }
7`,
    explanation:
      "The 'const' keyword creates a read-only reference to a value. For primitive values (like numbers or strings), this means the value cannot be changed at all. However, for objects and arrays, while the reference cannot be changed, the contents of the object or array can still be modified.\n\nIn the first example, we see that trying to reassign a 'const' variable would cause an error. This helps prevent accidental changes to values that should remain constant.\n\nThe second example shows that for objects and arrays, the properties or elements can still be changed. This is because 'const' only prevents reassignment of the variable itself, not modifications to its contents.\n\nBest practice: Use 'const' as your default choice when declaring variables. If you know a variable shouldn't be reassigned, using 'const' makes this intent clear in your code. It's particularly useful for declaring constants, function declarations, or object and array references that won't change. Only use 'let' when you specifically need to reassign a variable.",
  },
];

const dataTypes = [
  {
    type: "Primitive",
    examples: [
      {
        name: "Number",
        description:
          "The Number type in JavaScript represents both integer and floating-point numbers. It's used for any kind of numeric value.",
        example: `let age = 25;
let pi = 3.14;
console.log(typeof age, age);
console.log(typeof pi, pi);`,
        output: `"number" 25
"number" 3.14`,
        explanation:
          "In JavaScript, there's no distinction between integers and floating-point numbers at the language level. Both are simply of type 'number'. This simplifies numeric operations but can sometimes lead to precision issues with very large numbers or complex calculations.",
      },
      {
        name: "String",
        description:
          "The String type represents textual data. It's used for storing and manipulating text.",
        example: `let name = 'John';
let greeting = \`Hello, \${name}\`;
console.log(typeof name, name);
console.log(typeof greeting, greeting);`,
        output: `"string" "John"
"string" "Hello, John"`,
        explanation:
          "Strings in JavaScript can be created using single quotes, double quotes, or backticks. Backticks allow for template literals, which can include expressions inside ${} placeholders. This is very useful for creating dynamic strings.",
      },
      {
        name: "Boolean",
        description:
          "The Boolean type represents a logical entity and can have only two values: true or false. It's often used in conditional statements and comparisons.",
        example: `let isActive = true;
let isLoggedIn = false;
console.log(typeof isActive, isActive);
console.log(typeof isLoggedIn, isLoggedIn);`,
        output: `"boolean" true
"boolean" false`,
        explanation:
          "Booleans are fundamental for control flow in programming. They're often the result of comparisons (like x > y) and are used in if statements, while loops, and other conditional structures.",
      },
      {
        name: "Undefined",
        description:
          "Undefined represents a variable that has been declared but hasn't been assigned a value yet.",
        example: `let x;
console.log(typeof x, x);`,
        output: `"undefined" undefined`,
        explanation:
          "Undefined is automatically assigned to variables that have been declared but not initialized. It's also the value returned by functions that don't explicitly return anything.",
      },
      {
        name: "Null",
        description:
          "Null represents a deliberate non-value or absence of any object value. It's often used to signify 'no value' or 'unknown value'.",
        example: `let empty = null;
console.log(typeof empty, empty);`,
        output: `"object" null`,
        explanation:
          "Interestingly, typeof null returns 'object', which is actually a long-standing bug in JavaScript. Despite this, null is not an object, but a primitive value. It's often used to explicitly indicate that a variable intentionally has no value.",
      },
      {
        name: "Symbol",
        description:
          "Symbol is a unique and immutable primitive value and may be used as the key of an Object property. It was introduced in ECMAScript 2015.",
        example: `const id = Symbol('id');
let user = { [id]: 1 };
console.log(typeof id, id);
console.log(user);`,
        output: `"symbol" Symbol(id)
{ [Symbol(id)]: 1 }`,
        explanation:
          "Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object. They're not enumerable in for...in iterations, which makes them useful for storing metadata about objects.",
      },
    ],
  },
  {
    type: "Complex",
    examples: [
      {
        name: "Object",
        description:
          "Objects are used to store collections of data and more complex entities. They can contain properties and methods.",
        example: `let person = { name: 'Alice', age: 30 };
console.log(typeof person, person);`,
        output: `"object" { name: "Alice", age: 30 }`,
        explanation:
          "Objects are one of the most important data types in JavaScript. They allow you to store keyed collections of various data and more complex entities. Objects can be created using the object literal notation (as shown) or with the Object() constructor.",
      },
      {
        name: "Array",
        description:
          "Arrays are used to store multiple values in a single variable. They are objects that contain a list of items.",
        example: `let fruits = ['apple', 'banana', 'orange'];
console.log(typeof fruits, fruits);`,
        output: `"object" ["apple", "banana", "orange"]`,
        explanation:
          "Arrays in JavaScript are actually objects, which is why typeof returns 'object'. They have numeric keys and a length property. Arrays are very versatile and have many built-in methods for manipulation and iteration.",
      },
      {
        name: "Function",
        description:
          "Functions are reusable blocks of code that perform a specific task. In JavaScript, functions are first-class objects.",
        example: `function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(typeof greet, greet);
console.log(greet('Alice'));`,
        output: `"function" [Function: greet]
"Hello, Alice!"`,
        explanation:
          "Functions in JavaScript are objects, but they have a special typeof result: 'function'. They can be assigned to variables, passed as arguments to other functions, and even have properties and methods of their own. This makes JavaScript a very flexible language for functional programming.",
      },
    ],
  },
];

const consoleLogExamples = [
  {
    type: "console.log",
    title: "Basic Output",
    description:
      "console.log() is a function in JavaScript that outputs a message to the web console. It's one of the most basic and commonly used debugging tools.",
    example: "console.log('Hello, World!');",
    output: "Hello, World!",
    explanation:
      "This is the simplest use of console.log(). It's often used as a first step in learning a new programming language. In JavaScript, you can use it to quickly check if your code is running or to see the value of a variable at a specific point in your program.",
  },
  {
    type: "console.log",
    title: "Multiple Arguments",
    description:
      "console.log() can take multiple arguments, which will be printed out separated by spaces.",
    example: "console.log('Name:', 'Alice', 'Age:', 30);",
    output: "Name: Alice Age: 30",
    explanation:
      "When you pass multiple arguments to console.log(), it will print them all out in order, separated by spaces. This is useful for logging multiple values at once or for adding labels to your log outputs to make them more readable.",
  },
  {
    type: "console.log",
    title: "Variable Output",
    description:
      "One of the most common uses of console.log() is to output the value of variables for debugging purposes.",
    example: `let x = 5;
console.log('The value of x is:', x);`,
    output: "The value of x is: 5",
    explanation:
      "Here, we're using console.log() to print out both a string and the value of a variable. This is extremely useful when debugging, as it allows you to see the current state of your variables at different points in your code execution.",
  },
  {
    type: "console.log",
    title: "Object Output",
    description:
      "console.log() can also be used to output complex data structures like objects. This is particularly useful for inspecting the properties of an object.",
    example: `let person = { name: 'Bob', age: 25 };
console.log(person);`,
    output: "{ name: 'Bob', age: 25 }",
    explanation:
      "When you pass an object to console.log(), it will display the object's properties and their values. In most browser consoles, you can even expand the object to explore nested properties. This is invaluable when working with complex data structures or API responses.",
  },
];

export default function JavaScriptBasics() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 lg:mb-16 text-center"
          >
            <AuthorInfo date="2024-09-15" title={"JavaScript Basics"} />
          </motion.header>

          <Section id="course-overview" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
                  <FaCode className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl mr-3" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    Course Overview
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                  In this course, you&apos;ll dive deep into JavaScript basics,
                  covering console.log, variables, and data types. These
                  fundamental concepts form the foundation for more advanced
                  JavaScript programming.
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
                      <topic.icon className="mr-2 text-blue-600 dark:text-blue-300" />
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

          <Section id="why-basics-matter" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
                  <FaRocket className="text-blue-600 dark:text-blue-300 text-xl sm:text-2xl lg:text-3xl mr-3" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300">
                    Why These Basics Matter
                  </span>
                </h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                  Understanding these fundamental concepts is crucial for any
                  aspiring JavaScript developer. These basics form the
                  foundation upon which more advanced concepts are built,
                  enabling you to write efficient, clean, and powerful
                  JavaScript code.
                </p>
              </div>
            </div>
          </Section>

          <Section id="console-log" delay={0.8}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaTerminal className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Console.log: Your First JavaScript Output
            </h3>
            {consoleLogExamples.map((item, index) => (
              <div
                key={index}
                className={`${index !== consoleLogExamples.length - 1 ? "mb-4 sm:mb-6" : ""} bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <div className="mb-3 sm:mb-4">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-2 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-2">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Explanation:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="variables" delay={0.9}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaCode className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Understanding Variable Types
            </h3>
            {variableTypes.map((item, index) => (
              <div
                key={index}
                className={`${index !== variableTypes.length - 1 ? "mb-4 sm:mb-6" : ""} bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <div className="mb-3 sm:mb-4">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-2 rounded-xl overflow-hidden shadow-inner">
                      <HighlightCode
                        content={item.example}
                        language={"javascript"}
                      />
                    </div>
                    <div className="mt-2">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Output:
                      </h4>
                      <div className="rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={item.output}
                          language={"javascript"}
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Explanation:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section id="data-types" delay={1.0}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 sm:mt-12 sm:mb-6 lg:mt-16 lg:mb-8 font-bold text-gray-900 dark:text-white tracking-wide flex items-center">
              <FaCube className="mr-2 sm:mr-3 text-blue-600 dark:text-blue-300" />
              Data Types in JavaScript
            </h3>
            {dataTypes.map((item, index) => (
              <div
                key={index}
                className={`${index !== dataTypes.length - 1 ? "mb-4 sm:mb-6" : ""} bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-xl shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 p-3 sm:p-4 lg:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-gray-200 bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="mb-3 sm:mb-4 border-b border-gray-300 dark:border-gray-700 pb-3 sm:pb-4 last:border-b-0 last:pb-0"
                    >
                      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {example.name}
                      </h4>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-2 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"javascript"}
                        />
                      </div>
                      <div className="mt-2">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          Output:
                        </h4>
                        <div className="rounded-xl overflow-hidden shadow-inner">
                          <HighlightCode
                            content={example.output}
                            language={"javascript"}
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          Explanation:
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                          {example.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <div className="px-4 sm:px-6 lg:px-8">
            <CourseNavigationButtons
              courses={Courses}
              currentIndex={Courses.findIndex(
                (course) => course.link === "/courses/javascript/basics"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
