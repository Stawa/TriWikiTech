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
    title: "Function Basics",
    desc: "Learn about function declaration and definition in C, including syntax and best practices",
    id: "function-basics",
  },
  {
    title: "Function Parameters",
    desc: "Understand how to pass arguments to functions, including pass-by-value and pass-by-reference techniques",
    id: "function-parameters",
  },
  {
    title: "Return Values",
    desc: "Explore how functions can return values in C, including different data types and multiple return values",
    id: "return-values",
  },
  {
    title: "Function Prototypes",
    desc: "Learn about function prototypes and their importance in C programming for proper function declaration",
    id: "function-prototypes",
  },
];

const functionExamples = [
  {
    title: "Function Declaration",
    description:
      "Declaring a function in C involves specifying its return type, name, and parameters. This tells the compiler about the function's interface.",
    example: `int add(int a, int b);`,
    whenToUse:
      "Use function declarations when you want to define the function later in the code or in a separate file. This is particularly useful in header files or when you need to use the function before its full definition.",
  },
  {
    title: "Function Definition",
    description:
      "Defining a function in C includes the function body with the actual implementation. This is where you specify what the function does.",
    example: `int add(int a, int b) {
  return a + b;
}`,
    whenToUse:
      "Use function definitions when you're ready to implement the function's behavior. This is typically done in .c source files.",
  },
  {
    title: "Function Call",
    description:
      "Calling a function in C involves using its name and providing the required arguments. This executes the function's code and potentially returns a value.",
    example: `int result = add(5, 3);
printf("Sum: %d", result);`,
    whenToUse:
      "Use function calls whenever you need to execute the function's code. This allows you to reuse the same code multiple times without repeating it.",
  },
];

const parameterExamples = [
  {
    title: "Pass by Value",
    description:
      "Passing arguments by value in C creates a copy of the argument, leaving the original unchanged. This means any modifications to the parameter inside the function don't affect the original variable.",
    example: `void increment(int x) {
  x++;
}

int main() {
  int num = 5;
  increment(num);
  printf("%d", num); // Output: 5
}`,
    whenToUse:
      "Use pass by value when you want to work with a copy of the data and ensure that the original value remains unchanged. This is the default behavior for most data types in C.",
  },
  {
    title: "Pass by Reference",
    description:
      "Passing arguments by reference using pointers in C allows the function to modify the original value. This gives the function direct access to the memory location of the variable.",
    example: `void increment(int *x) {
  (*x)++;
}

int main() {
  int num = 5;
  increment(&num);
  printf("%d", num); // Output: 6
}`,
    whenToUse:
      "Use pass by reference when you need to modify the original variable inside the function, or when dealing with large data structures to avoid the overhead of copying.",
  },
];

const returnValueExamples = [
  {
    title: "Returning a Value",
    description:
      "Functions in C can return a single value of any data type, which can be used in expressions or assigned to variables. This allows functions to compute and provide results back to the caller.",
    example: `int square(int x) {
  return x * x;
}

int result = square(5);
printf("%d", result); // Output: 25`,
    whenToUse:
      "Use return values when your function needs to compute and provide a result back to the calling code. This is common for mathematical operations, data processing, or any task that produces a result.",
  },
  {
    title: "Void Function",
    description:
      "Functions that don't return a value in C are declared with the 'void' return type and are typically used for their side effects, such as modifying global variables, printing output, or performing I/O operations.",
    example: `void greet(char *name) {
  printf("Hello, %s!", name);
}

greet("Alice"); // Output: Hello, Alice!`,
    whenToUse:
      "Use void functions when your function doesn't need to return a value, but instead performs some action or modifies state. This is common for functions that print output, modify global variables, or perform I/O operations.",
  },
];

const prototypeExamples = [
  {
    title: "Function Prototype",
    description:
      "Declaring a function prototype in C allows the compiler to perform type checking and enables calling the function before its full definition. This is also known as a function declaration.",
    example: `// Function prototype
int add(int a, int b);

int main() {
  int result = add(5, 3);
  printf("%d", result);
  return 0;
}`,
    whenToUse:
      "Use function prototypes when you need to declare a function before its full definition, typically in header files or at the top of your source file. This is crucial for larger projects where functions might be defined in different files or later in the same file.",
  },
  {
    title: "Function Definition",
    description:
      "The actual implementation of the function, which matches the prototype. This includes the function body with the full code that executes when the function is called.",
    example: `// Function definition
int add(int a, int b) {
  return a + b;
}`,
    whenToUse:
      "Use function definitions when you're ready to implement the full behavior of the function. This is typically done in .c source files after the prototypes have been declared.",
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

export default function CFunctions() {
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
              Functions in C Programming
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-200">
              Master defining and using functions in C for efficient and modular
              programming
            </p>
          </motion.header>
          <AuthorInfo date={"September 15th, 2024"} />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaCode className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this comprehensive course, you&apos;ll dive deep into the world
              of functions in C programming. We&apos;ll cover everything from
              function basics and parameter passing to return values and
              function prototypes. These are essential concepts for organizing,
              structuring, and optimizing your C programs effectively. By
              mastering functions, you&apos;ll be able to write more modular,
              reusable, and maintainable code.
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
              <FaRocket className="mr-3" /> Why Functions Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Functions are fundamental building blocks in C programming,
              serving as the cornerstone of structured and modular programming.
              They allow you to break down complex problems into smaller,
              manageable pieces, promoting code organization and readability.
              Functions enable code reuse, reducing redundancy and making your
              programs more efficient. They also facilitate easier debugging and
              maintenance, as issues can be isolated to specific functions.
              Understanding how to work with functions is crucial for writing
              efficient, scalable, and maintainable C programs, and is a skill
              that will benefit you throughout your programming career.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="function-basics"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Function
              Basics in C
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {functionExamples.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {item.title}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {item.description}
                  </p>
                  <HighlightCode content={item.example} language={"c"} />
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 text-gray-700 dark:text-gray-300">
                    <strong>When to use:</strong> {item.whenToUse}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.0}>
            <h2
              id="function-parameters"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaCode className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Function
              Parameters
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {parameterExamples.map((example) => (
                <div
                  key={example.title}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {example.title}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {example.description}
                  </p>
                  <HighlightCode content={example.example} language={"c"} />
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 text-gray-700 dark:text-gray-300">
                    <strong>When to use:</strong> {example.whenToUse}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.2}>
            <h2
              id="return-values"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaCode className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Return Values
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {returnValueExamples.map((example) => (
                <div
                  key={example.title}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {example.title}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {example.description}
                  </p>
                  <HighlightCode content={example.example} language={"c"} />
                  {example.whenToUse && (
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 text-gray-700 dark:text-gray-300">
                      <strong>When to use:</strong> {example.whenToUse}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.4}>
            <h2
              id="function-prototypes"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaCode className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Function
              Prototypes
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {prototypeExamples.map((example) => (
                <div
                  key={example.title}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {example.title}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {example.description}
                  </p>
                  <HighlightCode content={example.example} language={"c"} />
                  {example.whenToUse && (
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 text-gray-700 dark:text-gray-300">
                      <strong>When to use:</strong> {example.whenToUse}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-blue-600"
            middleHomeButton={true}
            courses={Courses}
            currentIndex={2}
          />
        </div>
      </div>
    </div>
  );
}
