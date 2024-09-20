"use client";

import { FaMemory } from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";
import { RiFunctionAddLine } from "react-icons/ri";
import { TbPointer } from "react-icons/tb";

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

const pointerBasics: MultipleItem[] = [
  {
    type: "Declaration and Initialization",
    examples: [
      {
        name: "Pointer Declaration",
        description: "Declaring a pointer variable",
        example: `int *ptr;  // Declares a pointer to an integer`,
        output: "// No output (declaration only)",
        explanation:
          "A pointer is declared using the data type it will point to, followed by an asterisk (*). This creates a variable that can store a memory address of that data type.",
      },
      {
        name: "Pointer Initialization",
        description: "Initializing a pointer with the address of a variable",
        example: `int num = 10;
int *ptr = &num;  // ptr now holds the address of num`,
        output: "// No visible output (memory operation)",
        explanation:
          "To initialize a pointer, we use the address-of operator (&) to get the memory address of a variable. The pointer then stores this address, effectively 'pointing' to that variable in memory.",
      },
    ],
  },
  {
    type: "Dereferencing",
    examples: [
      {
        name: "Accessing Value through Pointer",
        description:
          "Using the dereference operator (*) to access the value pointed to by a pointer",
        example: `int num = 10;
int *ptr = &num;
printf("%d", *ptr);  // Prints 10`,
        output: "10",
        explanation:
          "Dereferencing a pointer means accessing the value stored at the memory address the pointer is holding. We use the asterisk (*) before the pointer variable to dereference it. This operation retrieves the value from the memory location the pointer is pointing to.",
      },
    ],
  },
];

const pointerArithmetic: MultipleItem[] = [
  {
    type: "Increment and Decrement",
    examples: [
      {
        name: "Incrementing a Pointer",
        description: "Moving a pointer to the next memory location of its type",
        example: `int arr[] = {10, 20, 30};
int *ptr = arr;
ptr++;  // ptr now points to the second element of arr`,
        output: "// No visible output (pointer manipulation)",
        explanation:
          "When we increment a pointer, it doesn't simply add 1 to the memory address. Instead, it moves the pointer to the next element of its type. For an int pointer, ptr++ will add sizeof(int) bytes to the address, typically 4 bytes on most systems.",
      },
    ],
  },
  {
    type: "Pointer Subtraction",
    examples: [
      {
        name: "Finding Distance Between Pointers",
        description: "Calculating the number of elements between two pointers",
        example: `int arr[] = {10, 20, 30, 40, 50};
int *ptr1 = &arr[1];
int *ptr2 = &arr[4];
ptrdiff_t diff = ptr2 - ptr1;  // diff is 3`,
        output: "// No visible output (calculation result stored in diff)",
        explanation:
          "When we subtract one pointer from another (of the same type), the result is not the simple difference of their addresses. Instead, it's the number of elements between them. This operation uses ptrdiff_t, a type guaranteed to hold the result of pointer subtraction.",
      },
    ],
  },
];

const pointersAndArrays: MultipleItem[] = [
  {
    type: "Array-Pointer Relationship",
    examples: [
      {
        name: "Arrays as Pointers",
        description: "Understanding how array names act as pointers",
        example: `int arr[] = {10, 20, 30};
int *ptr = arr;  // ptr points to the first element of arr
printf("%d", *ptr);  // Prints 10`,
        output: "10",
        explanation:
          "In C, array names can be used as pointers. When we use an array name without brackets, it returns a pointer to the first element of the array. This is why we can assign an array to a pointer without using the & operator.",
      },
    ],
  },
  {
    type: "Pointer Indexing",
    examples: [
      {
        name: "Accessing Array Elements with Pointers",
        description: "Using pointer arithmetic to access array elements",
        example: `int arr[] = {10, 20, 30};
int *ptr = arr;
printf("%d", ptr[1]);  // Prints 20
printf("%d", *(ptr + 2));  // Prints 30`,
        output: "20\n30",
        explanation:
          "Pointers can be used with array indexing notation or with arithmetic. ptr[1] is equivalent to *(ptr + 1), which means 'go to the memory location 1 integer after ptr, and dereference it'. This flexibility allows for powerful array manipulation.",
      },
    ],
  },
];

const pointersAndFunctions: MultipleItem[] = [
  {
    type: "Pass by Reference",
    examples: [
      {
        name: "Modifying Variables through Pointers",
        description: "Using pointers to modify variables in functions",
        example: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int x = 5, y = 10;
swap(&x, &y);  // x is now 10, y is now 5`,
        output: "// No visible output (values of x and y are swapped)",
        explanation:
          "Passing pointers to a function allows the function to modify the original variables, not just copies. This is known as 'pass by reference'. In this example, the swap function receives the addresses of x and y, allowing it to interchange their values directly in memory.",
      },
    ],
  },
  {
    type: "Returning Pointers",
    examples: [
      {
        name: "Function Returning a Pointer",
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
        output: "Max value: 9",
        explanation:
          "Functions can return pointers, which is useful for returning references to existing data or dynamically allocated memory. In this example, findMax returns a pointer to the largest element in the array. This allows us to access the maximum value without copying it, and potentially modify it if needed.",
      },
    ],
  },
];

export default function CPointers() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "C Pointers" }}
      courses={Courses}
      currentCourseLink="/courses/c/pointers"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="In this comprehensive course, you'll dive deep into pointers, one of the most powerful features of C programming. We'll cover pointer basics, arithmetic, their relationship with arrays, and how they're used with functions. You'll learn how to effectively use pointers to manipulate memory, create dynamic data structures, and write more efficient code. By mastering these concepts, you'll be able to write more powerful and flexible C programs."
        icon={TbPointer}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why Pointers Matter"
        id="why-pointers-matter"
        delay={0.7}
        description="Pointers are fundamental to C programming, allowing for efficient memory management, dynamic data structures, and powerful programming techniques. Understanding pointers is crucial for writing efficient and flexible C code. They provide direct access to memory, enable dynamic memory allocation, and are essential for creating complex data structures like linked lists and trees. Mastering pointers will make you a more proficient C programmer and is a fundamental skill for systems programming and low-level software development."
        icon={FaMemory}
      />

      <Multiple
        title="Pointer Basics"
        id="pointer-basics"
        delay={0.8}
        icon={TbPointer}
        language="c"
        items={pointerBasics}
      />

      <Multiple
        title="Pointer Arithmetic"
        id="pointer-arithmetic"
        delay={1.0}
        icon={PiMathOperationsBold}
        language="c"
        items={pointerArithmetic}
      />

      <Multiple
        title="Pointers and Arrays"
        id="pointers-and-arrays"
        delay={1.2}
        icon={FaMemory}
        language="c"
        items={pointersAndArrays}
      />

      <Multiple
        title="Pointers and Functions"
        id="pointers-and-functions"
        delay={1.3}
        icon={RiFunctionAddLine}
        language="c"
        items={pointersAndFunctions}
      />
    </CourseContainer>
  );
}
