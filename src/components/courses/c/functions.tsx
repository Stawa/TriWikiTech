"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaExchangeAlt,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import Courses from "@components/courses/c/navigation";
import AuthorInfo from "@components/courses/author";
import CourseNavigationButtons from "@components/courses/buttons";
import Section from "@components/courses/section";

const topics = [
  {
    title: "Basics",
    desc: "Learn about function declaration and definition in C, including syntax and best practices",
    id: "function-basics",
    icon: FaCode,
  },
  {
    title: "Arguments",
    desc: "Understand how to pass arguments to functions, including pass-by-value and pass-by-reference techniques",
    id: "function-parameters",
    icon: FaExchangeAlt,
  },
  {
    title: "Return Values",
    desc: "Explore how functions can return values in C, including different data types and multiple return values",
    id: "return-values",
    icon: FaRocket,
  },
  {
    title: "Prototypes",
    desc: "Learn about function prototypes and their importance in C programming for proper function declaration",
    id: "function-prototypes",
    icon: FaLightbulb,
  },
];

const functionExamples = [
  {
    title: "Function Definition",
    description:
      "A function definition in C provides the complete implementation of the function, including its body. This is where you specify the actual behavior of the function.",
    example: `int add(int a, int b) {
  return a + b;
}`,
    whenToUse:
      "Use function definitions in .c source files when you're ready to implement the function's behavior. This is where you write the code that will be executed when the function is called.",
  },
  {
    title: "Function Call",
    description:
      "A function call in C executes the function's code with the provided arguments. It may return a value that can be used in expressions or assigned to variables.",
    example: `int result = add(5, 3);
printf("Sum: %d", result);`,
    whenToUse:
      "Use function calls whenever you need to execute the function's code. This allows for code reuse and helps in breaking down complex problems into smaller, manageable parts.",
  },
];

const parameterExamples = [
  {
    title: "Pass by Value",
    description:
      "In C, passing arguments by value creates a copy of the argument within the function. Any modifications to the parameter inside the function do not affect the original variable in the calling code.",
    example: `void increment(int x) {
  x++;
}

int main() {
  int num = 5;
  increment(num);
  printf("%d", num); // Output: 5
}`,
    whenToUse:
      "Use pass by value when you want to work with a copy of the data and ensure that the original value remains unchanged. This is the default behavior for most data types in C and is useful for maintaining data integrity.",
  },
  {
    title: "Pass by Reference",
    description:
      "Passing arguments by reference in C involves using pointers. This method allows the function to directly access and modify the original variable's memory location.",
    example: `void increment(int *x) {
  (*x)++;
}

int main() {
  int num = 5;
  increment(&num);
  printf("%d", num); // Output: 6
}`,
    whenToUse:
      "Use pass by reference when you need to modify the original variable inside the function or when dealing with large data structures to avoid the overhead of copying. It's also useful for returning multiple values from a function.",
  },
];

const returnValueExamples = [
  {
    title: "Returning a Value",
    description:
      "Functions in C can return a single value of any data type. The returned value can be used in expressions, assigned to variables, or passed as an argument to other functions.",
    example: `int square(int x) {
  return x * x;
}

int result = square(5);
printf("%d", result); // Output: 25`,
    whenToUse:
      "Use return values when your function needs to compute and provide a result back to the calling code. This is essential for functions that perform calculations, data processing, or any task that produces a specific output.",
  },
  {
    title: "Void Function",
    description:
      "Functions declared with the 'void' return type in C do not return a value. They are typically used for their side effects, such as modifying global variables, printing output, or performing I/O operations.",
    example: `void greet(char *name) {
  printf("Hello, %s!", name);
}

greet("Alice"); // Output: Hello, Alice!`,
    whenToUse:
      "Use void functions when your function doesn't need to return a value but instead performs some action or modifies state. This is common for functions that handle output, modify global data, or carry out specific tasks without producing a direct result.",
  },
];

const prototypeExamples = [
  {
    title: "Function Declaration vs Definition vs Prototype",
    description:
      "In C, there are three related but distinct concepts: function declaration, function definition, and function prototype. Understanding their differences is crucial for effective C programming.",
    example: `// Function declaration (also serves as a prototype)
int add(int a, int b);

// Function definition
int add(int a, int b) {
  return a + b;
}

int main() {
  int result = add(5, 3);
  printf("%d", result);
  return 0;
}`,
    whenToUse:
      "Use function declarations (prototypes) in header files or at the top of your source file to declare a function's interface. Use function definitions in .c files to implement the full behavior of the function.",
  },
  {
    title: "Function Declaration",
    description:
      "A function declaration specifies the function's name, return type, and parameters without providing the function's body. It informs the compiler about the function's existence and interface.",
    example: `// Function declaration
int multiply(int x, int y);`,
    whenToUse:
      "Use function declarations when you want to inform the compiler about a function's existence without providing its implementation. This is often done in header files.",
  },
  {
    title: "Function Definition",
    description:
      "A function definition includes both the function's declaration and its implementation (body). It specifies the actual code that executes when the function is called.",
    example: `// Function definition
int multiply(int x, int y) {
  return x * y;
}`,
    whenToUse:
      "Use function definitions in .c source files to implement the full behavior of the function. This is where you write the actual code that will be executed when the function is called.",
  },
  {
    title: "Function Prototype",
    description:
      "A function prototype is a declaration of a function that includes its return type, name, and parameter types, typically ending with a semicolon. It's identical to a function declaration and is used for type checking and to allow calling the function before its full definition.",
    example: `// Function prototype
int divide(int numerator, int denominator);`,
    whenToUse:
      "Use function prototypes when you need to declare a function before its full definition, especially in header files or at the top of your source file. This is crucial for larger projects and helps with code organization and compilation efficiency.",
  },
];

export default function CFunctions() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 lg:mb-16 text-center"
          >
            <AuthorInfo
              date="2024-09-15"
              lastEdit="2024-09-17"
              title={"C Functions"}
            />
          </motion.header>

          <Section id="course-overview" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden mb-12 sm:mb-16">
              <div className="bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide flex items-center space-x-4">
                  <FaCode className="text-blue-300 text-2xl sm:text-3xl lg:text-4xl" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Course Overview
                  </span>
                </h2>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                  In this comprehensive course, you&apos;ll dive deep into the
                  world of functions in C programming. We&apos;ll cover
                  everything from function basics and parameter passing to
                  return values and function prototypes. These are essential
                  concepts for organizing, structuring, and optimizing your C
                  programs effectively. By mastering functions, you&apos;ll be
                  able to write more modular, reusable, and maintainable code.
                </p>
              </div>
            </div>
          </Section>

          <Section id="what-you-ll-learn" delay={0.5}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 lg:mb-8 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              What You&apos;ll Learn
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
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
                      className="text-blue-400 font-semibold flex items-center mt-auto text-base sm:text-lg hover:text-blue-300 transition-colors duration-300"
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
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaRocket className="mr-4 text-blue-300" />
                  Why Functions Matter
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Functions are fundamental building blocks in C programming,
                  serving as the cornerstone of structured and modular
                  programming. They allow you to break down complex problems
                  into smaller, manageable pieces, promoting code organization
                  and readability. Functions enable code reuse, reducing
                  redundancy and making your programs more efficient. They also
                  facilitate easier debugging and maintenance, as issues can be
                  isolated to specific functions. Understanding how to work with
                  functions is crucial for writing efficient, scalable, and
                  maintainable C programs, and is a skill that will benefit you
                  throughout your programming career.
                </p>
              </div>
            </div>
          </Section>

          <Section id="function-basics" delay={0.8}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaCode className="mr-3 sm:mr-4 text-blue-300" />
              Function Basics in C
            </h3>
            {functionExamples.map((item, index) => (
              <div
                key={index}
                className={`${index !== functionExamples.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode content={item.example} language={"c"} />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    <strong>When to use:</strong> {item.whenToUse}
                  </p>
                </div>
              </div>
            ))}
          </Section>

          <Section id="function-parameters" delay={1.0}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaExchangeAlt className="mr-3 sm:mr-4 text-blue-300" />
              Function Parameters
            </h3>
            {parameterExamples.map((item, index) => (
              <div
                key={index}
                className={`${index !== parameterExamples.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode content={item.example} language={"c"} />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    <strong>When to use:</strong> {item.whenToUse}
                  </p>
                </div>
              </div>
            ))}
          </Section>

          <Section id="return-values" delay={1.2}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaRocket className="mr-3 sm:mr-4 text-blue-300" />
              Return Values
            </h3>
            {returnValueExamples.map((item, index) => (
              <div
                key={index}
                className={`${index !== returnValueExamples.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode content={item.example} language={"c"} />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    <strong>When to use:</strong> {item.whenToUse}
                  </p>
                </div>
              </div>
            ))}
          </Section>

          <Section id="function-prototypes" delay={1.4}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              Function Prototypes
            </h3>
            {prototypeExamples.map((item, index) => (
              <div
                key={index}
                className={`${index !== prototypeExamples.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-inner">
                    <HighlightCode content={item.example} language={"c"} />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                    <strong>When to use:</strong> {item.whenToUse}
                  </p>
                </div>
              </div>
            ))}
          </Section>

          <div className="px-4 sm:px-6 lg:px-8">
            <CourseNavigationButtons
              colorStyle="bg-blue-600"
              middleHomeButton={true}
              courses={Courses}
              currentIndex={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
