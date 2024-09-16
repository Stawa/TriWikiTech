"use client";

import GridBackground from "@components/grid";
import AuthorInfo from "../author";
import CourseNavigationButtons from "../buttons";
import HighlightCode from "@components/highlight";
import Courses from "@components/courses/c/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaLightbulb, FaMemory } from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";
import { TbPointer } from "react-icons/tb";
import { RiFunctionAddLine } from "react-icons/ri";
import Section from "../section";

const topics = [
  {
    title: "Pointer Basics",
    desc: "Learn about pointer declaration, initialization, and basic operations",
    id: "pointer-basics",
    icon: TbPointer,
  },
  {
    title: "Pointer Arithmetic",
    desc: "Explore arithmetic operations with pointers",
    id: "pointer-arithmetic",
    icon: PiMathOperationsBold,
  },
  {
    title: "Pointers and Arrays",
    desc: "Understand the relationship between pointers and arrays",
    id: "pointers-and-arrays",
    icon: FaMemory,
  },
  {
    title: "Pointers and Functions",
    desc: "Learn how to use pointers with functions",
    id: "pointers-and-functions",
    icon: RiFunctionAddLine,
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
        explanation:
          "A pointer is declared using the data type it will point to, followed by an asterisk (*). This creates a variable that can store a memory address of that data type.",
      },
      {
        title: "Pointer Initialization",
        description: "Initializing a pointer with the address of a variable",
        example: `int num = 10;
int *ptr = &num;  // ptr now holds the address of num`,
        explanation:
          "To initialize a pointer, we use the address-of operator (&) to get the memory address of a variable. The pointer then stores this address, effectively 'pointing' to that variable in memory.",
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
        explanation:
          "Dereferencing a pointer means accessing the value stored at the memory address the pointer is holding. We use the asterisk (*) before the pointer variable to dereference it. This operation retrieves the value from the memory location the pointer is pointing to.",
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
        explanation:
          "When we increment a pointer, it doesn't simply add 1 to the memory address. Instead, it moves the pointer to the next element of its type. For an int pointer, ptr++ will add sizeof(int) bytes to the address, typically 4 bytes on most systems.",
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
        explanation:
          "When we subtract one pointer from another (of the same type), the result is not the simple difference of their addresses. Instead, it's the number of elements between them. This operation uses ptrdiff_t, a type guaranteed to hold the result of pointer subtraction.",
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
        explanation:
          "In C, array names can be used as pointers. When we use an array name without brackets, it returns a pointer to the first element of the array. This is why we can assign an array to a pointer without using the & operator.",
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
        explanation:
          "Pointers can be used with array indexing notation or with arithmetic. ptr[1] is equivalent to *(ptr + 1), which means 'go to the memory location 1 integer after ptr, and dereference it'. This flexibility allows for powerful array manipulation.",
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
        explanation:
          "Passing pointers to a function allows the function to modify the original variables, not just copies. This is known as 'pass by reference'. In this example, the swap function receives the addresses of x and y, allowing it to interchange their values directly in memory.",
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
        explanation:
          "Functions can return pointers, which is useful for returning references to existing data or dynamically allocated memory. In this example, findMax returns a pointer to the largest element in the array. This allows us to access the maximum value without copying it, and potentially modify it if needed.",
      },
    ],
  },
];

export default function CPointers() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100">
      <GridBackground />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 lg:mb-20 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Pointers in C Programming
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-300">
              Master the power and flexibility of pointers in C
            </p>
          </motion.header>

          <div className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
            <AuthorInfo
              date={"September 15th, 2024"}
              lastEdit={"September 16th, 2024"}
            />
          </div>

          <Section id="course-overview" delay={0.3}>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <TbPointer className="mr-4 text-blue-300" />
                  Course Overview
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  In this course, you&apos;ll dive deep into pointers, one of
                  the most powerful features of C programming. We&apos;ll cover
                  pointer basics, arithmetic, their relationship with arrays,
                  and how they&apos;re used with functions.
                </p>
              </div>
            </div>
          </Section>

          <Section id="topics" delay={0.5}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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

          <Section id="why-pointers-matter" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaMemory className="mr-4 text-blue-300" />
                  Why Pointers Matter
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Pointers are fundamental to C programming, allowing for
                  efficient memory management, dynamic data structures, and
                  powerful programming techniques. Understanding pointers is
                  crucial for writing efficient and flexible C code.
                </p>
              </div>
            </div>
          </Section>

          <Section id="pointer-basics" delay={0.8}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <TbPointer className="mr-3 sm:mr-4 text-blue-300" />
              Pointer Basics
            </h3>
            {pointerBasics.map((item, index) => (
              <div
                key={index}
                className={`${index !== pointerBasics.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {example.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section id="pointer-arithmetic" delay={1.0}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <PiMathOperationsBold className="mr-3 sm:mr-4 text-blue-300" />
              Pointer Arithmetic
            </h3>
            {pointerArithmetic.map((item, index) => (
              <div
                key={index}
                className={`${index !== pointerArithmetic.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {example.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section id="pointers-and-arrays" delay={1.2}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaMemory className="mr-3 sm:mr-4 text-blue-300" />
              Pointers and Arrays
            </h3>
            {pointersAndArrays.map((item, index) => (
              <div
                key={index}
                className={`${index !== pointersAndArrays.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {example.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section id="pointers-and-functions" delay={1.3}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <RiFunctionAddLine className="mr-3 sm:mr-4 text-blue-300" />
              Pointers and Functions
            </h3>
            {pointersAndFunctions.map((item, index) => (
              <div
                key={index}
                className={`${index !== pointersAndFunctions.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-black bg-opacity-20 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    {item.type}
                  </h3>
                </div>
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        {example.title}
                      </h4>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mb-4 rounded-xl overflow-hidden shadow-inner">
                        <HighlightCode
                          content={example.example}
                          language={"c"}
                        />
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <div className="px-4 sm:px-6 lg:px-8">
            <CourseNavigationButtons
              colorStyle="bg-blue-600"
              middleHomeButton={true}
              courses={Courses}
              currentIndex={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
