"use client";

import {
  FaCode,
  FaLightbulb,
  FaMemory,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import Courses from "@components/courses/c/navigation";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Topics from "@components/courses/template/topics";
import {
  Multiple,
  type MultipleItem,
} from "@components/courses/template/multiple";

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

const memoryAllocation: MultipleItem[] = [
  {
    type: "malloc()",
    examples: [
      {
        name: "Allocating Memory with malloc()",
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
// Print the values
for (int i = 0; i < 5; i++) {
    printf("%d ", ptr[i]);
}
// Don't forget to free the memory when done
free(ptr);`,
        output: "1 2 3 4 5",
        explanation:
          "This example demonstrates the use of malloc() to allocate memory for 5 integers. We check if the allocation was successful, then use the memory to store and print values. Finally, we free the allocated memory to prevent leaks. malloc() is useful when you need a block of memory without initialization.",
      },
    ],
  },
  {
    type: "calloc()",
    examples: [
      {
        name: "Allocating and Initializing Memory with calloc()",
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
        output: "0 0 0 0 0",
        explanation:
          "This example shows how calloc() allocates memory for 5 integers and initializes them to zero. We verify the allocation's success and then print the values, which are all zeros. calloc() is particularly useful when you need memory initialized to zero, saving you the step of manual initialization.",
      },
    ],
  },
  {
    type: "realloc()",
    examples: [
      {
        name: "Resizing Memory with realloc()",
        description: "Resizes a previously allocated memory block",
        example: `int *ptr = (int*) malloc(5 * sizeof(int));
// Initialize the first 5 elements
for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
}
// Resize the memory block to hold 10 integers
ptr = (int*) realloc(ptr, 10 * sizeof(int));
if (ptr == NULL) {
    printf("Memory reallocation failed\\n");
    return 1;
}
// Initialize the new elements
for (int i = 5; i < 10; i++) {
    ptr[i] = i + 1;
}
// Print all elements
for (int i = 0; i < 10; i++) {
    printf("%d ", ptr[i]);
}
free(ptr);`,
        output: "1 2 3 4 5 6 7 8 9 10",
        explanation:
          "This example illustrates the use of realloc() to resize an existing memory block. We start with 5 integers, then expand to 10. realloc() preserves the original data and allows us to add more. It's crucial to check if reallocation was successful. realloc() is valuable when you need to dynamically adjust the size of allocated memory.",
      },
    ],
  },
];

const memoryDeallocation: MultipleItem[] = [
  {
    type: "free()",
    examples: [
      {
        name: "Deallocating Memory with free()",
        description:
          "Deallocates the memory previously allocated by malloc, calloc, or realloc",
        example: `int *ptr = (int*) malloc(5 * sizeof(int));
if (ptr == NULL) {
    printf("Memory allocation failed\\n");
    return 1;
}
// Use the allocated memory
for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
    printf("%d ", ptr[i]);
}
printf("\\n");
// Free the memory when done
free(ptr);
// Set the pointer to NULL to avoid using it after freeing
ptr = NULL;
// Trying to access ptr now would be undefined behavior
// printf("%d", ptr[0]);  // This would be dangerous!`,
        output: "1 2 3 4 5",
        explanation:
          "This example demonstrates proper memory deallocation using free(). After using the allocated memory, we free it to prevent memory leaks. Setting the pointer to NULL after freeing is a good practice to avoid accidental use of freed memory. Proper use of free() is crucial for managing memory efficiently and preventing memory-related issues in your programs.",
      },
    ],
  },
];

const memoryIssues: MultipleItem[] = [
  {
    type: "Common Memory Problems",
    examples: [
      {
        name: "Memory Leak",
        description: "Occurs when allocated memory is not freed",
        example: `void memory_leak() {
    int *ptr = (int*) malloc(sizeof(int));
    *ptr = 10;
    printf("Value: %d\\n", *ptr);
    // Memory is allocated but never freed
    // The function ends, and the pointer is lost
    // This memory cannot be accessed or freed now
}

int main() {
    memory_leak();
    return 0;
}`,
        output: "Value: 10\n(Memory leak occurs, but no visible output)",
        explanation:
          "This example illustrates a memory leak. Memory is allocated but never freed, and the pointer is lost when the function ends. This leads to inaccessible allocated memory, reducing available system resources over time. To prevent memory leaks, always free allocated memory when it's no longer needed.",
      },
      {
        name: "Dangling Pointer",
        description:
          "A pointer that references a memory location that has been freed",
        example: `int *ptr = (int*) malloc(sizeof(int));
*ptr = 5;
printf("Before free: %d\\n", *ptr);
free(ptr);
// ptr is now a dangling pointer
printf("After free: %d\\n", *ptr);  // This is undefined behavior`,
        output:
          "Before free: 5\nAfter free: (undefined behavior, may crash or print garbage value)",
        explanation:
          "This example shows a dangling pointer scenario. After freeing the memory, the pointer still exists but points to an invalid memory location. Accessing this pointer leads to undefined behavior, potentially causing crashes or data corruption. To avoid dangling pointers, set pointers to NULL after freeing them.",
      },
      {
        name: "Buffer Overflow",
        description: "Writing beyond the bounds of allocated memory",
        example: `char buffer[5];
strcpy(buffer, "This string is too long");
printf("%s\\n", buffer);  // This may print beyond the buffer or crash`,
        output: "(May print corrupted data or crash the program)",
        explanation:
          "This example demonstrates a buffer overflow. Writing more data than the allocated buffer can hold leads to memory corruption, potentially overwriting other variables or causing crashes. Buffer overflows can also be security vulnerabilities. Always ensure that data fits within allocated buffers and use safer functions like strncpy() instead of strcpy().",
      },
    ],
  },
];

const bestPractices: MultipleItem[] = [
  {
    type: "Memory Management Best Practices",
    examples: [
      {
        name: "Always Check for NULL After Allocation",
        description:
          "Always verify if memory allocation was successful to prevent potential crashes.",
        example: `int *ptr = (int*) malloc(sizeof(int));
if (ptr == NULL) {
    fprintf(stderr, "Memory allocation failed\\n");
    exit(1);
}
*ptr = 10;
printf("Allocated value: %d\\n", *ptr);
free(ptr);`,
        output: "Allocated value: 10",
        explanation:
          "This example demonstrates the importance of checking for NULL after memory allocation. If allocation fails, malloc() returns NULL. By checking for this, we can handle the error gracefully, preventing potential crashes or undefined behavior that could occur if we tried to use a NULL pointer.",
      },
      {
        name: "Free Memory When No Longer Needed",
        description:
          "Always free dynamically allocated memory when it's no longer needed to prevent memory leaks.",
        example: `int *ptr = (int*) malloc(sizeof(int));
*ptr = 20;
printf("Before free: %d\\n", *ptr);
free(ptr);
ptr = NULL;  // Set to NULL after freeing
// printf("After free: %d\\n", *ptr);  // This would be a mistake!`,
        output: "Before free: 20",
        explanation:
          "This example shows proper memory management by freeing allocated memory when it's no longer needed and setting the pointer to NULL afterwards. This practice prevents memory leaks and helps avoid accidental use of freed memory, which could lead to undefined behavior or crashes.",
      },
      {
        name: "Use Valgrind for Memory Debugging",
        description:
          "Utilize tools like Valgrind to detect memory leaks and other memory-related issues.",
        example: `// Compile with debugging symbols
gcc -g your_program.c -o your_program

// Run with Valgrind
valgrind --leak-check=full ./your_program`,
        output:
          "(Valgrind output would show memory-related issues if any exist)",
        explanation:
          "This example introduces Valgrind, a powerful tool for detecting memory-related issues. By compiling with debugging symbols and running the program through Valgrind, you can identify memory leaks, use of uninitialized memory, and other memory errors that might not be immediately apparent during normal execution. Regular use of such tools can significantly improve code quality and reliability.",
      },
    ],
  },
];

export default function CMemoryManagement() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "C Memory Management" }}
      courses={Courses}
      currentCourseLink="/courses/c/memory-management"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="In this comprehensive course, you'll dive deep into memory management in C programming. We'll cover dynamic memory allocation, deallocation, and common memory-related issues. You'll learn how to effectively use functions like malloc(), calloc(), realloc(), and free(). We'll also explore best practices for managing memory and avoiding common pitfalls like memory leaks and buffer overflows. By mastering these concepts, you'll be able to write more efficient and robust C programs."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why Memory Management Matters"
        id="why-memory-management-matters"
        delay={0.7}
        description="Effective memory management is crucial in C programming. It allows you to optimize your program's performance, prevent memory leaks, and avoid crashes due to memory-related issues. Understanding how to allocate, use, and free memory dynamically gives you fine-grained control over your program's resource usage. This skill is essential for writing efficient, scalable, and robust C programs, especially for applications that deal with large datasets or have long running times. Mastering memory management will make you a more proficient C programmer and is a fundamental skill for systems programming and low-level software development."
        icon={FaRocket}
      />

      <Multiple
        title="Dynamic Memory Allocation in C"
        id="dynamic-memory-allocation"
        delay={0.8}
        icon={FaMemory}
        language="c"
        items={memoryAllocation}
      />

      <Multiple
        title="Memory Deallocation in C"
        id="memory-deallocation"
        delay={0.9}
        icon={FaRocket}
        language="c"
        items={memoryDeallocation}
      />

      <Multiple
        title="Common Memory Issues in C"
        id="memory-issues"
        delay={1.0}
        icon={FaShieldAlt}
        language="c"
        items={memoryIssues}
      />

      <Multiple
        title="Best Practices for Memory Management"
        id="best-practices"
        delay={1.1}
        icon={FaLightbulb}
        language="c"
        items={bestPractices}
      />
    </CourseContainer>
  );
}
