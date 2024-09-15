"use client";

import GridBackground from "@components/grid";
import AuthorInfo from "../author";
import CourseNavigationButtons from "../buttons";
import HighlightCode from "@components/highlight";
import Courses from "@components/courses/c/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaMemory,
  FaShieldAlt,
} from "react-icons/fa";

const topics = [
  {
    title: "Dynamic Memory Allocation",
    desc: "Learn about malloc(), calloc(), and realloc() functions",
    id: "dynamic-allocation",
  },
  {
    title: "Memory Deallocation",
    desc: "Understand the importance of freeing allocated memory",
    id: "memory-deallocation",
  },
  {
    title: "Common Memory Issues",
    desc: "Explore memory leaks, dangling pointers, and buffer overflows",
    id: "memory-issues",
  },
];

const memoryAllocation = [
  {
    type: "Dynamic Allocation",
    examples: [
      {
        title: "malloc()",
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
      },
      {
        title: "calloc()",
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
      },
      {
        title: "realloc()",
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
      },
    ],
  },
];

const memoryDeallocation = [
  {
    type: "Freeing Memory",
    examples: [
      {
        title: "free()",
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
      },
    ],
  },
];

const memoryIssues = [
  {
    type: "Common Problems",
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
      },
      {
        title: "Dangling Pointer",
        description:
          "A pointer that references a memory location that has been freed",
        example: `int *ptr = (int*) malloc(sizeof(int));
free(ptr);
// ptr is now a dangling pointer
*ptr = 5;  // This is undefined behavior`,
      },
      {
        title: "Buffer Overflow",
        description: "Writing beyond the bounds of allocated memory",
        example: `char buffer[5];
strcpy(buffer, "This string is too long");
// This will write beyond the end of buffer`,
      },
    ],
  },
];

const bestPractices = [
  {
    title: "Always Check for NULL After Allocation",
    description:
      "Always verify if memory allocation was successful to prevent potential crashes.",
    example: `int *ptr = (int*) malloc(sizeof(int));
if (ptr == NULL) {
    fprintf(stderr, "Memory allocation failed\\n");
    exit(1);
}`,
  },
  {
    title: "Free Memory When No Longer Needed",
    description:
      "Always free dynamically allocated memory when it's no longer needed to prevent memory leaks.",
    example: `int *ptr = (int*) malloc(sizeof(int));
// Use ptr...
free(ptr);
ptr = NULL;  // Set to NULL after freeing`,
  },
  {
    title: "Use Valgrind for Memory Debugging",
    description:
      "Utilize tools like Valgrind to detect memory leaks and other memory-related issues.",
    example: `// Compile with debugging symbols
gcc -g your_program.c -o your_program

// Run with Valgrind
valgrind --leak-check=full ./your_program`,
  },
  {
    title: "Avoid Double Free",
    description:
      "Never free the same memory block twice, as it can lead to undefined behavior.",
    example: `int *ptr = (int*) malloc(sizeof(int));
free(ptr);
// Don't do this:
// free(ptr);  // Double free!`,
  },
  {
    title: "Use calloc() for Zero-Initialized Memory",
    description:
      "Use calloc() when you need memory initialized to zero, instead of malloc() followed by memset().",
    example: `// This:
int *ptr = (int*) calloc(5, sizeof(int));

// Instead of:
// int *ptr = (int*) malloc(5 * sizeof(int));
// memset(ptr, 0, 5 * sizeof(int));`,
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

export default function CMemoryManagement() {
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
              Memory Management in C
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-200">
              Master dynamic memory allocation and management in C
            </p>
          </motion.header>
          <AuthorInfo />
          <Section delay={0.3}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center">
              <FaMemory className="mr-3" /> Course Overview
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              In this course, you&apos;ll learn about dynamic memory allocation
              and management in C. We&apos;ll cover how to allocate memory at
              runtime, properly deallocate it, and avoid common memory-related
              issues.
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
              <FaRocket className="mr-3" /> Why Memory Management Matters
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Effective memory management is crucial for writing efficient and
              robust C programs. It allows you to use memory resources
              optimally, avoid memory leaks, and prevent crashes due to
              memory-related errors. Understanding these concepts is essential
              for any serious C programmer.
            </p>
          </Section>

          <Section delay={0.8}>
            <h2
              id="dynamic-allocation"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaMemory className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Dynamic Memory
              Allocation
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {memoryAllocation.map((allocation) => (
                <div
                  key={allocation.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {allocation.type}
                    </span>
                    Memory Allocation Functions
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {allocation.examples.map((example) => (
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
              id="memory-deallocation"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaMemory className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Memory
              Deallocation
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {memoryDeallocation.map((deallocation) => (
                <div
                  key={deallocation.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {deallocation.type}
                    </span>
                    Memory Deallocation
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {deallocation.examples.map((example) => (
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
              id="memory-issues"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaCode className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Common Memory
              Issues
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {memoryIssues.map((issue) => (
                <div
                  key={issue.type}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 flex items-center flex-wrap">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full mr-2 sm:mr-3 text-xs sm:text-sm mb-2 sm:mb-0">
                      {issue.type}
                    </span>
                    Memory Issues
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {issue.examples.map((example) => (
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
              id="best-practices"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 flex items-center flex-wrap"
            >
              <FaShieldAlt className="mr-2 sm:mr-3 mb-2 sm:mb-0" /> Best
              Practices for Memory Management
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {bestPractices.map((practice) => (
                <div
                  key={practice.title}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                    {practice.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                    {practice.description}
                  </p>
                  {practice.example && (
                    <HighlightCode content={practice.example} language={"c"} />
                  )}
                </div>
              ))}
            </div>
          </Section>

          <CourseNavigationButtons
            colorStyle="bg-blue-600"
            middleHomeButton={true}
            courses={Courses}
            currentIndex={4}
          />
        </div>
      </div>
    </div>
  );
}
