"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaLightbulb,
  FaMemory,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import GridBackground from "@components/grid";
import HighlightCode from "@components/highlight";
import AuthorInfo from "@components/courses/author";
import CourseNavigationButtons from "@components/courses/buttons";
import Courses from "@components/courses/c/navigation";
import Section from "@components/courses/section";

const topics = [
  {
    title: "Dynamic Memory Allocation",
    desc: "Learn about malloc(), calloc(), and realloc() functions",
    id: "dynamic-allocation",
    icon: FaMemory,
  },
  {
    title: "Memory Deallocation",
    desc: "Understand the importance of freeing allocated memory",
    id: "memory-deallocation",
    icon: FaRocket,
  },
  {
    title: "Common Memory Issues",
    desc: "Explore memory leaks, dangling pointers, and buffer overflows",
    id: "memory-issues",
    icon: FaShieldAlt,
  },
];

const memoryAllocation = [
  {
    type: "malloc()",
    examples: [
      {
        title: "Allocating Memory with malloc()",
        description: "Allocates a block of uninitialized memory",
        example: `int *ptr = (int*) malloc(5 * sizeof(int));
if (ptr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}
// Use the allocated memory
for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
}
// Don't forget to free the memory when done
free(ptr);`,
        explanation:
          "Use malloc() when you need to allocate a block of memory without initializing it. It's important to check if the allocation was successful and to free the memory when it's no longer needed.",
      },
    ],
  },
  {
    type: "calloc()",
    examples: [
      {
        title: "Allocating and Initializing Memory with calloc()",
        description: "Allocates a block of memory and initializes it to zero",
        example: `int *ptr = (int*) calloc(5, sizeof(int));
if (ptr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}
// The memory is already initialized to zero
for (int i = 0; i < 5; i++) {
    printf("%d ", ptr[i]);  // Will print "0 0 0 0 0"
}
free(ptr);`,
        explanation:
          "Use calloc() when you need allocated memory to be initialized to zero. It's particularly useful when you want to ensure that the allocated memory starts with a known state.",
      },
    ],
  },
  {
    type: "realloc()",
    examples: [
      {
        title: "Resizing Memory with realloc()",
        description: "Resizes a previously allocated memory block",
        example: `int *ptr = (int*) malloc(5 * sizeof(int));
// ... use the memory ...
// Resize the memory block to hold 10 integers
ptr = (int*) realloc(ptr, 10 * sizeof(int));
if (ptr == NULL) {
    printf("Memory reallocation failed\\n");
    return 1;
}
// Use the resized memory block
for (int i = 5; i < 10; i++) {
    ptr[i] = i + 1;
}
free(ptr);`,
        explanation:
          "Use realloc() when you need to resize an existing memory block. It can be used to either increase or decrease the size of a previously allocated memory block. Always check if the reallocation was successful.",
      },
    ],
  },
];

const memoryDeallocation = [
  {
    type: "free()",
    examples: [
      {
        title: "Deallocating Memory with free()",
        description:
          "Deallocates the memory previously allocated by malloc, calloc, or realloc",
        example: `int *ptr = (int*) malloc(5 * sizeof(int));
if (ptr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}
// Use the allocated memory
// ...
// Free the memory when done
free(ptr);
// Set the pointer to NULL to avoid using it after freeing
ptr = NULL;`,
        explanation:
          "Always use free() when you're done with dynamically allocated memory to prevent memory leaks. After freeing, it's a good practice to set the pointer to NULL to avoid accidental use of freed memory.",
      },
    ],
  },
];

const memoryIssues = [
  {
    type: "Common Memory Problems",
    examples: [
      {
        title: "Memory Leak",
        description: "Occurs when allocated memory is not freed",
        example: `void memory_leak() {
    int *ptr = (int*) malloc(sizeof(int));
    // Memory is allocated but never freed
    // The function ends, and the pointer is lost
    // This memory cannot be accessed or freed now
}`,
        explanation:
          "Memory leaks occur when allocated memory is not freed, leading to gradual loss of available memory. Always free allocated memory when it's no longer needed to prevent memory leaks.",
      },
      {
        title: "Dangling Pointer",
        description:
          "A pointer that references a memory location that has been freed",
        example: `int *ptr = (int*) malloc(sizeof(int));
free(ptr);
// ptr is now a dangling pointer
*ptr = 5;  // This is undefined behavior`,
        explanation:
          "Dangling pointers can lead to unpredictable behavior or crashes. Always set pointers to NULL after freeing them to avoid accidentally using dangling pointers.",
      },
      {
        title: "Buffer Overflow",
        description: "Writing beyond the bounds of allocated memory",
        example: `char buffer[5];
strcpy(buffer, "This string is too long");
// This will write beyond the end of buffer`,
        explanation:
          "Buffer overflows can corrupt memory and lead to security vulnerabilities. Always check the size of data before writing to a buffer to prevent buffer overflows.",
      },
    ],
  },
];

const bestPractices = [
  {
    type: "Memory Management Best Practices",
    examples: [
      {
        title: "Always Check for NULL After Allocation",
        description:
          "Always verify if memory allocation was successful to prevent potential crashes.",
        example: `int *ptr = (int*) malloc(sizeof(int));
if (ptr == NULL) {
    fprintf(stderr, "Memory allocation failed\\n");
    exit(1);
}`,
        explanation:
          "Checking for NULL after every memory allocation ensures that the operation was successful and helps prevent crashes due to failed allocations.",
      },
      {
        title: "Free Memory When No Longer Needed",
        description:
          "Always free dynamically allocated memory when it's no longer needed to prevent memory leaks.",
        example: `int *ptr = (int*) malloc(sizeof(int));
// Use ptr...
free(ptr);
ptr = NULL;  // Set to NULL after freeing`,
        explanation:
          "Freeing memory when it's no longer needed prevents memory leaks. Setting the pointer to NULL after freeing helps avoid accidental use of freed memory.",
      },
      {
        title: "Use Valgrind for Memory Debugging",
        description:
          "Utilize tools like Valgrind to detect memory leaks and other memory-related issues.",
        example: `// Compile with debugging symbols
gcc -g your_program.c -o your_program

// Run with Valgrind
valgrind --leak-check=full ./your_program`,
        explanation:
          "Tools like Valgrind are invaluable for detecting memory leaks, use of uninitialized memory, and other memory-related issues during development and testing.",
      },
    ],
  },
];

export default function CMemoryManagement() {
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
              Memory Management in C
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-300">
              Master dynamic memory allocation and deallocation in C programming
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
                  <FaCode className="mr-4 text-blue-300" />
                  Course Overview
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  In this comprehensive course, you&apos;ll dive deep into
                  memory management in C programming. We&apos;ll cover dynamic
                  memory allocation, deallocation, and common memory-related
                  issues. You&apos;ll learn how to effectively use functions
                  like malloc(), calloc(), realloc(), and free(). We&apos;ll
                  also explore best practices for managing memory and avoiding
                  common pitfalls like memory leaks and buffer overflows. By
                  mastering these concepts, you&apos;ll be able to write more
                  efficient and robust C programs.
                </p>
              </div>
            </div>
          </Section>

          <Section id="what-you-ll-learn" delay={0.5}>
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

          <Section id="why-memory-management-matters" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden mt-12 sm:mt-16">
              <div className="bg-black bg-opacity-50 p-6 sm:p-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide flex items-center">
                  <FaRocket className="mr-4 text-blue-300" />
                  Why Memory Management Matters
                </h2>
              </div>
              <div className="p-6 sm:p-8 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                  Effective memory management is crucial in C programming. It
                  allows you to optimize your program&apos;s performance,
                  prevent memory leaks, and avoid crashes due to memory-related
                  issues. Understanding how to allocate, use, and free memory
                  dynamically gives you fine-grained control over your
                  program&apos;s resource usage. This skill is essential for
                  writing efficient, scalable, and robust C programs, especially
                  for applications that deal with large datasets or have long
                  running times. Mastering memory management will make you a
                  more proficient C programmer and is a fundamental skill for
                  systems programming and low-level software development.
                </p>
              </div>
            </div>
          </Section>

          <Section id="dynamic-memory-allocation" delay={0.8}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaMemory className="mr-3 sm:mr-4 text-blue-300" />
              Dynamic Memory Allocation in C
            </h3>
            {memoryAllocation.map((item, index) => (
              <div
                key={index}
                className={`${index !== memoryAllocation.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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

          <Section id="memory-deallocation" delay={0.9}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaRocket className="mr-3 sm:mr-4 text-blue-300" />
              Memory Deallocation in C
            </h3>
            {memoryDeallocation.map((item, index) => (
              <div
                key={index}
                className={`${index !== memoryDeallocation.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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

          <Section id="memory-issues" delay={1.0}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaShieldAlt className="mr-3 sm:mr-4 text-blue-300" />
              Common Memory Issues in C
            </h3>
            {memoryIssues.map((item, index) => (
              <div
                key={index}
                className={`${index !== memoryIssues.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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

          <Section id="best-practices" delay={1.1}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 lg:mb-10 font-extrabold text-white tracking-wide flex items-center">
              <FaLightbulb className="mr-3 sm:mr-4 text-blue-300" />
              Best Practices for Memory Management
            </h3>
            {bestPractices.map((item, index) => (
              <div
                key={index}
                className={`${index !== bestPractices.length - 1 ? "mb-8 sm:mb-12" : ""} bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden`}
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

          <div className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
            <CourseNavigationButtons
              colorStyle="bg-blue-600"
              middleHomeButton={true}
              courses={Courses}
              currentIndex={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
