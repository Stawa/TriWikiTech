"use client";

import GridBackground from "@components/grid";
import AuthorInfo from "../author";
import CourseNavigationButtons from "../buttons";
import HighlightCode from "@components/highlight";
import Courses from "@components/courses/c/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaMemory } from "react-icons/fa";
import { TbPointer } from "react-icons/tb";

const topics = [
  {
    title: "Pointer Basics",
    desc: "Learn about pointer declaration, initialization, and basic operations",
    id: "pointer-basics",
  },
  {
    title: "Pointer Arithmetic",
    desc: "Explore arithmetic operations with pointers",
    id: "pointer-arithmetic",
  },
  {
    title: "Pointers and Arrays",
    desc: "Understand the relationship between pointers and arrays",
    id: "pointers-and-arrays",
  },
  {
    title: "Pointers and Functions",
    desc: "Learn how to use pointers with functions",
    id: "pointers-and-functions",
  },
];

const pointerBasics = [
  {
    type: "Declaration and Initialization",
    examples: [
      {
        title: "Pointer Declaration",
        description: "Declaring a pointer variable",
        example: `int *ptr;  // Declares a pointer to an integer`,
      },
      {
        title: "Pointer Initialization",
        description: "Initializing a pointer with the address of a variable",
        example: `int num = 10;
int *ptr = &num;  // ptr now holds the address of num`,
      },
    ],
  },
  {
    type: "Dereferencing",
    examples: [
      {
        title: "Accessing Value through Pointer",
        description:
          "Using the dereference operator (*) to access the value pointed to by a pointer",
        example: `int num = 10;
int *ptr = &num;
printf("%d", *ptr);  // Prints 10`,
      },
    ],
  },
];

const pointerArithmetic = [
  {
    type: "Increment and Decrement",
    examples: [
      {
        title: "Incrementing a Pointer",
        description: "Moving a pointer to the next memory location of its type",
        example: `int arr[] = {10, 20, 30};
int *ptr = arr;
ptr++;  // ptr now points to the second element of arr`,
      },
    ],
  },
  {
    type: "Pointer Subtraction",
    examples: [
      {
        title: "Finding Distance Between Pointers",
        description: "Calculating the number of elements between two pointers",
        example: `int arr[] = {10, 20, 30, 40, 50};
int *ptr1 = &arr[1];
int *ptr2 = &arr[4];
ptrdiff_t diff = ptr2 - ptr1;  // diff is 3`,
      },
    ],
  },
];

const pointersAndArrays = [
  {
    type: "Array-Pointer Relationship",
    examples: [
      {
        title: "Arrays as Pointers",
        description: "Understanding how array names act as pointers",
        example: `int arr[] = {10, 20, 30};
int *ptr = arr;  // ptr points to the first element of arr
printf("%d", *ptr);  // Prints 10`,
      },
    ],
  },
  {
    type: "Pointer Indexing",
    examples: [
      {
        title: "Accessing Array Elements with Pointers",
        description: "Using pointer arithmetic to access array elements",
        example: `int arr[] = {10, 20, 30};
int *ptr = arr;
printf("%d", ptr[1]);  // Prints 20
printf("%d", *(ptr + 2));  // Prints 30`,
      },
    ],
  },
];

const pointersAndFunctions = [
  {
    type: "Pass by Reference",
    examples: [
      {
        title: "Modifying Variables through Pointers",
        description: "Using pointers to modify variables in functions",
        example: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int x = 5, y = 10;
swap(&x, &y);  // x is now 10, y is now 5`,
      },
    ],
  },
  {
    type: "Returning Pointers",
    examples: [
      {
        title: "Function Returning a Pointer",
        description: "Creating functions that return pointers",
        example: `int* findMax(int* arr, int size) {
    int* max = arr;
    for (int i = 1; i < size; i++) {
        if (arr[i] > *max) {
            max = &arr[i];
        }
    }
    return max;
}

int numbers[] = {5, 8, 3, 1, 9};
int* maxPtr = findMax(numbers, 5);
printf("Max value: %d", *maxPtr);  // Prints "Max value: 9"`,
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

export default function CPointers() {
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
              Pointers in C Programming
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-200">
              Master the power and flexibility of pointers in C
            </p>
          </motion.header>
          <AuthorInfo date={"September 15th, 2024"} />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <TbPointer className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this course, you&apos;ll dive deep into pointers, one of the
              most powerful features of C programming. We&apos;ll cover pointer
              basics, arithmetic, their relationship with arrays, and how
              they&apos;re used with functions.
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
              <FaMemory className="mr-3" /> Why Pointers Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Pointers are fundamental to C programming, allowing for efficient
              memory management, dynamic data structures, and powerful
              programming techniques. Understanding pointers is crucial for
              writing efficient and flexible C code.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="pointer-basics"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <TbPointer className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Pointer Basics
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {pointerBasics.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.0}>
            <h2
              id="pointer-arithmetic"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaCode className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Pointer
              Arithmetic
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {pointerArithmetic.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.2}>
            <h2
              id="pointers-and-arrays"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaMemory className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Pointers and
              Arrays
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {pointersAndArrays.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section delay={1.3}>
            <h2
              id="pointers-and-functions"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaCode className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Pointers and
              Functions
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {pointersAndFunctions.map((type) => (
                <div
                  key={type.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {type.type}
                    </span>
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-blue-600"
            middleHomeButton={true}
            courses={Courses}
            currentIndex={3}
          />
        </div>
      </div>
    </div>
  );
}
