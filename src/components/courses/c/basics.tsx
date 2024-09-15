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
    title: "Variables and Data Types",
    desc: "Learn about variable declaration, initialization, and data types in C",
    id: "variables-and-data-types",
  },
  {
    title: "Operators",
    desc: "Explore arithmetic, relational, and logical operators in C",
    id: "operators",
  },
  {
    title: "Control Structures",
    desc: "Master if statements, loops, and switch cases in C",
    id: "control-structures",
  },
];

const dataTypes = [
  {
    type: "Basic",
    examples: [
      {
        type: "int",
        title: "Integer",
        description: "Used for whole numbers without decimal points.",
        example: `int age = 25;\nint count = -10;`,
        formatSpecifier: "%d or %i",
        dataType: "int",
        range: "-2147483648 to 2147483647",
        size: "4 bytes",
      },
      {
        type: "short",
        title: "Short Integer",
        description: "Used for small whole numbers, typically 16 bits.",
        example: `short small_num = 100;\nshort negative_small = -50;`,
        formatSpecifier: "%hd",
        dataType: "short",
        range: "-32768 to 32767",
        size: "2 bytes",
      },
      {
        type: "long",
        title: "Long Integer",
        description:
          "Used for large whole numbers, typically 32 bits on 32-bit systems and 64 bits on 64-bit systems.",
        example: `long big_num = 1000000L;\nlong negative_big = -5000000L;`,
        formatSpecifier: "%ld",
        dataType: "long",
        range: "-2147483648 to 2147483647",
        size: "4 bytes",
      },
      {
        type: "long long",
        title: "Long Long Integer",
        description: "Used for very large whole numbers, at least 64 bits.",
        example: `long long very_big_num = 1000000000000LL;\nlong long negative_very_big = -5000000000000LL;`,
        formatSpecifier: "%lld",
        dataType: "long long",
        range: "-9223372036854775808 to 9223372036854775807",
        size: "8 bytes",
      },
      {
        type: "float",
        title: "Float",
        description: "Used for numbers with decimal points (single precision).",
        example: `float price = 9.99f;\nfloat temperature = -2.5f;`,
        formatSpecifier: "%f",
        dataType: "float",
        range: "1.2E-38 to 3.4E+38",
        size: "4 bytes",
      },
      {
        type: "double",
        title: "Double",
        description: "Used for numbers with decimal points (double precision).",
        example: `double pi = 3.14159265359;\ndouble very_small = 1.7e-308;`,
        formatSpecifier: "%lf",
        dataType: "double",
        range: "2.2E-308 to 1.8E+308",
        size: "8 bytes",
      },
      {
        type: "long double",
        title: "Long Double",
        description:
          "Used for numbers with decimal points (extended precision).",
        example: `long double very_precise = 3.14159265358979323846L;\nlong double very_large = 1.18e4932L;`,
        formatSpecifier: "%Lf",
        dataType: "long double",
        range: "3.4E-4932 to 1.1E+4932",
        size: "10 or 16 bytes",
      },
      {
        type: "char",
        title: "Character",
        description: "Used for single characters.",
        example: `char grade = 'A';\nchar symbol = '*';`,
        formatSpecifier: "%c",
        dataType: "char",
        range: "-128 to 127",
        size: "1 byte",
      },
      {
        type: "unsigned char",
        title: "Unsigned Character",
        description:
          "Used for single characters or small non-negative integers (0 to 255).",
        example: `unsigned char ascii_code = 65;\nunsigned char byte = 0xFF;`,
        formatSpecifier: "%c",
        dataType: "unsigned char",
        range: "0 to 255",
        size: "1 byte",
      },
      {
        type: "unsigned int",
        title: "Unsigned Integer",
        description: "Used for non-negative whole numbers.",
        example: `unsigned int positive_num = 50000;\nunsigned int zero = 0;`,
        formatSpecifier: "%u",
        dataType: "unsigned int",
        range: "0 to 4294967295",
        size: "4 bytes",
      },
      {
        type: "unsigned short",
        title: "Unsigned Short Integer",
        description: "Used for small non-negative whole numbers.",
        example: `unsigned short small_positive_num = 100;`,
        formatSpecifier: "%hu",
        dataType: "unsigned short",
        range: "0 to 65535",
        size: "2 bytes",
      },
      {
        type: "unsigned long",
        title: "Unsigned Long Integer",
        description: "Used for large non-negative whole numbers.",
        example: `unsigned long big_positive_num = 1000000UL;`,
        formatSpecifier: "%lu",
        dataType: "unsigned long",
        range: "0 to 4294967295",
        size: "4 bytes",
      },
      {
        type: "unsigned long long",
        title: "Unsigned Long Long Integer",
        description: "Used for very large non-negative whole numbers.",
        example: `unsigned long long very_big_positive_num = 1000000000000ULL;`,
        formatSpecifier: "%llu",
        dataType: "unsigned long long",
        range: "0 to 18446744073709551615",
        size: "8 bytes",
      },
      {
        type: "void*",
        title: "Pointer",
        description: "Used for storing memory addresses.",
        example: `int* ptr;\nvoid* generic_ptr;`,
        formatSpecifier: "%p",
        dataType: "void*",
        range: "-",
        size: "4 or 8 bytes",
      },
      {
        type: "_Bool",
        title: "Boolean",
        description: "Used for true/false values (C99 and later).",
        example: `_Bool is_valid = 1; // true\n_Bool is_empty = 0; // false`,
        formatSpecifier: "%d",
        dataType: "_Bool",
        range: "0 to 1",
        size: "1 byte",
      },
      {
        type: "size_t",
        title: "Unsigned Integer (size_t)",
        description: "Used for representing sizes of objects in bytes.",
        example: `size_t size_of_arr = sizeof(arr);`,
        formatSpecifier: "%zu",
        dataType: "size_t",
        range: "0 to platform-dependent",
        size: "4 or 8 bytes",
      },
      {
        type: "ptrdiff_t",
        title: "Pointer Difference",
        description:
          "Used for representing the difference between two pointers.",
        example: `ptrdiff_t diff = ptr1 - ptr2;`,
        formatSpecifier: "%td",
        dataType: "ptrdiff_t",
        range: "Platform-dependent",
        size: "4 or 8 bytes",
      },
      {
        type: "Pointer",
        title: "Pointer",
        description: "Used to store memory addresses of variables.",
        example: `int num = 10;\nint *ptr = &num; // ptr stores the address of num`,
        formatSpecifier: "%p",
        dataType: "pointer",
        range: "Depends on system architecture",
        size: "4 or 8 bytes",
      },
      {
        type: "Structure",
        title: "Structure",
        description:
          "User-defined data type that groups related variables of different data types.",
        example: `struct Person {\n  char name[50];\n  int age;\n  float height;\n};`,
        formatSpecifier: "N/A (access members individually)",
        dataType: "struct",
        range: "N/A",
        size: "Sum of sizes of all members",
      },
      {
        type: "Array",
        title: "Array",
        description: "Collection of elements of the same type.",
        example: `int numbers[5] = {1, 2, 3, 4, 5};`,
        formatSpecifier: "N/A (access elements individually)",
        dataType: "array",
        range: "Depends on element type and array size",
        size: "Sum of sizes of all elements",
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
        example: "int sum = 5 + 3; // 8",
      },
      {
        operator: "-",
        description: "Subtraction",
        example: "int difference = 10 - 4; // 6",
      },
      {
        operator: "*",
        description: "Multiplication",
        example: "int product = 3 * 4; // 12",
      },
      {
        operator: "/",
        description: "Division",
        example: "int quotient = 20 / 5; // 4",
      },
      {
        operator: "%",
        description: "Modulus (remainder)",
        example: "int remainder = 17 % 5; // 2",
      },
    ],
  },
  {
    type: "Relational",
    examples: [
      {
        operator: "==",
        description: "Equal to",
        example: "5 == 5 // true",
      },
      {
        operator: "!=",
        description: "Not equal to",
        example: "5 != 6 // true",
      },
      {
        operator: ">",
        description: "Greater than",
        example: "10 > 5 // true",
      },
      {
        operator: "<",
        description: "Less than",
        example: "3 < 7 // true",
      },
    ],
  },
  {
    type: "Logical",
    examples: [
      {
        operator: "&&",
        description: "AND",
        example: "(5 > 3) && (2 < 4) // true",
      },
      {
        operator: "||",
        description: "OR",
        example: "(5 > 7) || (3 < 4) // true",
      },
      {
        operator: "!",
        description: "NOT",
        example: "!(5 > 7) // true",
      },
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
  case constant1:
    // code block
    break;
  case constant2:
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
        description: "Repeats a block of code a specified number of times",
        example: `for (int i = 0; i < 5; i++) {
  printf("%d\\n", i);
}`,
      },
      {
        name: "while",
        description:
          "Loops through a block of code while a specified condition is true",
        example: `int i = 0;
while (i < 5) {
  printf("%d\\n", i);
  i++;
}`,
      },
      {
        name: "do...while",
        description:
          "Executes a block of code once, before checking if the condition is true, then repeats the loop while the condition is true",
        example: `int i = 0;
do {
  printf("%d\\n", i);
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

export default function CBasics() {
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
              C Programming Basics
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-200">
              Master the fundamentals of C programming
            </p>
          </motion.header>
          <AuthorInfo date={"September 15th, 2024"} />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaCode className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this course, you&apos;ll learn the essential building blocks of
              C programming. We&apos;ll cover variables, data types, operators,
              and control structures - the fundamental concepts you need to
              start your journey in C development.
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
              <FaRocket className="mr-3" /> Why These Basics Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Understanding these fundamental concepts is crucial for any
              aspiring C programmer. These basics form the foundation upon which
              more advanced concepts are built, enabling you to write efficient,
              clean, and powerful C code.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="variables-and-data-types"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Variables
              and Data Types in C
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {dataTypes.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
                    Data Types
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {type.examples.map((example) => (
                      <div
                        key={example.title}
                        className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg"
                      >
                        <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {example.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                          {example.description}
                        </p>
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                          <div className="bg-blue-50 dark:bg-blue-900 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                              Format Specifier
                            </p>
                            <p className="break-words">
                              {example.formatSpecifier}
                            </p>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="font-semibold text-green-600 dark:text-green-400 mb-1">
                              Data Type
                            </p>
                            <p className="break-words">{example.dataType}</p>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-900 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="font-semibold text-purple-600 dark:text-purple-400 mb-1">
                              Range
                            </p>
                            <p className="break-words">{example.range}</p>
                          </div>
                          <div className="bg-orange-50 dark:bg-orange-900 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                              Size
                            </p>
                            <p className="break-words">{example.size}</p>
                          </div>
                        </div>
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
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaLightbulb className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Operators in
              C
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {operators.map((operator) => (
                <div
                  key={operator.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {operator.type}
                    </span>
                    Operators
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {operator.examples.map((example) => (
                      <div
                        key={example.operator}
                        className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg"
                      >
                        <div className="flex items-center mb-2">
                          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs sm:text-sm mr-2">
                            {example.operator}
                          </span>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                            {example.description}
                          </p>
                        </div>
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.4}>
            <h2
              id="control-structures"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaCode className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Control
              Structures in C
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {controlStructures.map((structure, index) => (
                <div
                  key={structure.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {structure.type}
                    </span>
                    {structure.type}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    {structure.examples[index].description}
                  </p>
                  <HighlightCode
                    content={structure.examples[index].example}
                    language={"c"}
                  />
                </div>
              ))}
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-blue-600"
            courses={Courses}
            currentIndex={1}
          />
        </div>
      </div>
    </div>
  );
}
