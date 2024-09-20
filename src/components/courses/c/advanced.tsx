"use client";

import { FaCode, FaRocket } from "react-icons/fa";
import { RiFileTextLine } from "react-icons/ri";
import { PiTreeStructure } from "react-icons/pi";
import { TbCpu } from "react-icons/tb";

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
    title: "Structures",
    desc: "Learn about user-defined data types in C",
    id: "structures",
    icon: PiTreeStructure,
  },
  {
    title: "File I/O",
    desc: "Explore file input and output operations in C",
    id: "file-io",
    icon: RiFileTextLine,
  },
  {
    title: "Preprocessor Directives",
    desc: "Master preprocessor commands and macros in C",
    id: "preprocessor",
    icon: TbCpu,
  },
];

const structures: MultipleItem[] = [
  {
    type: "Basic Structure",
    examples: [
      {
        name: "Simple Structure",
        description: "Define a basic structure with multiple data types",
        example: `struct Person {
  char name[50];
  int age;
  float height;
};`,
        output: "// No output (structure definition)",
        explanation:
          "This example demonstrates a simple structure named 'Person' that groups related data of different types. It includes a character array for the name, an integer for age, and a float for height. This structure allows you to create variables that can store all this information about a person in a single, organized unit.",
      },
      {
        name: "Nested Structure",
        description: "Define a structure within another structure",
        example: `struct Address {
  char street[100];
  char city[50];
  char country[50];
};

struct Employee {
  char name[50];
  int id;
  struct Address address;
};`,
        output: "// No output (structure definition)",
        explanation:
          "This example shows a nested structure where 'Address' is defined first, and then used within the 'Employee' structure. This allows for more complex data organization. An Employee now has a name, an ID, and a complete address (which itself contains street, city, and country). This demonstrates how structures can be used to create more sophisticated data representations.",
      },
    ],
  },
];

const fileIO: MultipleItem[] = [
  {
    type: "File Operations",
    examples: [
      {
        name: "Opening a File",
        description: "Open a file for reading or writing",
        example: `FILE *file = fopen("example.txt", "r");
if (file == NULL) {
    printf("Error opening file\\n");
    return 1;
}`,
        output: "// No output if file opens successfully",
        explanation:
          "This example demonstrates how to open a file in C. The fopen() function is used with the filename and mode ('r' for read). It's crucial to check if the file was opened successfully by comparing the returned pointer to NULL. This error checking helps prevent issues when trying to use a file that couldn't be opened.",
      },
      {
        name: "Writing to a File",
        description: "Write data to a file",
        example: `FILE *file = fopen("example.txt", "w");
if (file != NULL) {
    fprintf(file, "Hello, World!\\n");
    fclose(file);
}`,
        output: "// No console output (writes to file)",
        explanation:
          "This example shows how to write to a file. After opening the file in write mode ('w'), fprintf() is used to write a string to the file. Note the importance of closing the file with fclose() after writing. This ensures that all data is properly saved and system resources are released.",
      },
      {
        name: "Reading from a File",
        description: "Read data from a file",
        example: `FILE *file = fopen("example.txt", "r");
if (file != NULL) {
    char buffer[100];
    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }
    fclose(file);
}`,
        output: "// Outputs file contents to console",
        explanation:
          "This example demonstrates reading from a file. After opening the file in read mode, it uses a while loop with fgets() to read the file line by line into a buffer. Each line is then printed to the console. The loop continues until fgets() returns NULL, indicating the end of the file. Again, the file is closed after reading.",
      },
    ],
  },
];

const preprocessor: MultipleItem[] = [
  {
    type: "Preprocessor Directives",
    examples: [
      {
        name: "Include Directive",
        description: "Include a header file",
        example: `#include <stdio.h>
#include "myheader.h"`,
        output: "// No output (preprocessor directive)",
        explanation:
          'The #include directive is used to include header files in your C program. <stdio.h> is a standard library header, included using angle brackets. "myheader.h" is a user-defined header, included using quotes. This directive tells the preprocessor to insert the contents of the specified file at the location of the #include statement.',
      },
      {
        name: "Define Directive",
        description: "Define a macro",
        example: `#define PI 3.14159
#define SQUARE(x) ((x) * (x))`,
        output: "// No output (preprocessor directive)",
        explanation:
          "The #define directive is used to create macros. PI is defined as a constant value. SQUARE(x) is defined as a function-like macro that squares its argument. These macros are processed by the preprocessor before compilation, replacing all occurrences in the code with their defined values or expressions.",
      },
      {
        name: "Conditional Compilation",
        description: "Conditionally compile code",
        example: `#ifdef DEBUG
    printf("Debug mode is on\\n");
#endif

#if PLATFORM == WINDOWS
    // Windows-specific code
#elif PLATFORM == LINUX
    // Linux-specific code
#else
    // Default code
#endif`,
        output: "// Output depends on defined macros and conditions",
        explanation:
          "Conditional compilation directives allow parts of the code to be included or excluded based on certain conditions. #ifdef checks if a macro is defined. #if, #elif, and #else work similarly to regular if-else statements, but at the preprocessor level. This is useful for creating platform-specific code or including debug statements only when needed.",
      },
    ],
  },
];

export default function CAdvanced() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "C Advanced" }}
      courses={Courses}
      currentCourseLink="/courses/c/advanced"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="In this advanced C programming course, you'll delve into more complex topics such as structures, file I/O, and preprocessor directives. These concepts will help you write more sophisticated and efficient C programs."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why These Advanced Topics Matter"
        id="why-advanced-topics-matter"
        delay={0.7}
        description="Understanding these advanced concepts is crucial for any serious C programmer. They allow you to create more complex data structures, interact with files, and optimize your code, enabling you to build more powerful and efficient C applications."
        icon={FaRocket}
      />

      <Multiple
        title="Structures in C"
        id="structures"
        delay={0.8}
        icon={PiTreeStructure}
        language="c"
        items={structures}
      />

      <Multiple
        title="File I/O in C"
        id="file-io"
        delay={1.0}
        icon={RiFileTextLine}
        language="c"
        items={fileIO}
      />

      <Multiple
        title="Preprocessor Directives in C"
        id="preprocessor"
        delay={1.2}
        icon={TbCpu}
        language="c"
        items={preprocessor}
      />
    </CourseContainer>
  );
}
