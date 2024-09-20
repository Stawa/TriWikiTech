"use client";

import { PiLightbulbFilamentFill } from "react-icons/pi";
import {
  FaCode,
  FaCube,
  FaLightbulb,
  FaRocket,
  FaTerminal,
} from "react-icons/fa";

import Single from "@components/courses/template/single";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Courses from "@components/courses/c/navigation";
import DataTypes from "@components/courses/template/types";
import InputOutput from "@components/courses/template/input";
import Topics from "@components/courses/template/topics";
import Variables from "@components/courses/template/variable";

const topics = [
  {
    title: "Basic Printing",
    desc: "Learn how to print 'Hello, World!' and other simple messages",
    id: "basic-printing",
    icon: FaCode,
  },
  {
    title: "Variables",
    desc: "Learn about variable declaration and initialization in C",
    id: "variables",
    icon: FaLightbulb,
  },
  {
    title: "Data Types",
    desc: "Explore various data types available in C",
    id: "data-types",
    icon: FaRocket,
  },
  {
    title: "Basic Input/Output",
    desc: "Master basic input and output operations in C",
    id: "input-output",
    icon: FaTerminal,
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
        explanation:
          "Integers are ideal for counting, indexing, or representing discrete quantities. Use them when you need whole numbers and don't require decimal precision, such as for ages, counts, or array indices.",
        bestUseCase:
          "Best used for loop counters, array indices, or any whole number calculations where fractional parts are not needed.",
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
        explanation:
          "Floats are used for representing real numbers with decimal points. They offer a good balance between precision and memory usage.",
        bestUseCase:
          "Ideal for scientific calculations, graphics, or any situation where you need decimal precision but don't require the extended precision of a double.",
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
        explanation:
          "Characters in C are actually small integers, each representing a single ASCII character. They're useful for storing individual letters, digits, or symbols.",
        bestUseCase:
          "Best used when working with individual characters, such as processing text one character at a time, or when memory efficiency is crucial and you only need to store single characters.",
      },
    ],
  },
];

const variables = [
  {
    title: "Creating Variables",
    description:
      "To create a variable in C, you need to specify its data type and give it a name.",
    steps: [
      "Choose a data type (e.g., int, float, char)",
      "Decide on a descriptive variable name",
      "Declare the variable using the syntax: dataType variableName;",
      "Optionally, initialize the variable with a value",
    ],
    example: `int age;           // Declaration
int score = 100;    // Declaration with initialization
float price = 9.99; // Float variable
char grade = 'A';   // Character variable`,
    wrongExample: `int a;           // Poor variable name
float 2ndPrice = 19.99; // Invalid: starts with a number
char longVariableName123456789 = 'X'; // Excessively long name
int temp = 98.6;    // Wrong data type for temperature`,
    tips: [
      "Use meaningful variable names",
      "Follow C naming conventions (start with a letter or underscore, use only letters, numbers, and underscores)",
      "Initialize variables when possible to avoid using uninitialized values",
      "Avoid using reserved keywords as variable names",
    ],
    scratch: "[DATA_TYPE] [VARIABLE_NAME] = [VALUE]",
    explanation:
      "Variables are essential for storing and manipulating data in your programs. They act as containers that hold values which can be changed during program execution. However, it's crucial to create variables correctly and follow best practices to ensure code readability and prevent errors.",
    wrongExplanation:
      "In the wrong examples, 'a' is a poor variable name as it's not descriptive. '2ndPrice' is invalid because variable names can't start with numbers. 'longVariableName123456789' is excessively long, making the code hard to read. Using 'int' for a temperature (98.6) is incorrect as it would truncate the decimal part.",
  },
];

const inputOutputExamples = [
  {
    type: "Input",
    examples: [
      {
        function: "scanf()",
        description:
          "Used to read formatted input from the standard input stream",
        example: `int age;
printf("Enter your age: ");
scanf("%d", &age);`,
        formatSpecifier: "%d",
        safetyNote:
          "Always check the return value of scanf() to ensure successful input.",
        explanation:
          "scanf() is a powerful function for reading formatted input. It allows you to read various data types directly into variables.",
        bestUseCase:
          "Best used when you need to read specific data types from user input, especially for simple programs or when performance is a priority. However, be cautious with string inputs due to potential buffer overflow issues.",
      },
      {
        function: "fgets()",
        description: "Safely reads a line of text from stdin, including spaces",
        example: `char name[50];
printf("Enter your name: ");
fgets(name, sizeof(name), stdin);`,
        safetyNote:
          "Preferred for string input as it prevents buffer overflow.",
        explanation:
          "fgets() is a safer alternative to gets() for reading string input. It allows you to specify a maximum number of characters to read, preventing buffer overflows.",
        bestUseCase:
          "Ideal for reading string input, especially when you need to include spaces or when security is a concern. It's the preferred method for reading lines of text in modern C programming.",
      },
      {
        function: "gets()",
        description:
          "Reads a line from stdin into a buffer until a newline is found",
        example: `char input[100];
printf("Enter some text: ");
gets(input);`,
        safetyNote:
          "Deprecated and unsafe. Use fgets() instead as gets() can cause buffer overflow.",
        explanation:
          "gets() is an older function for reading string input. It's simple to use but doesn't provide any way to limit the input size, making it vulnerable to buffer overflows.",
        bestUseCase:
          "Not recommended for use in any new code due to security vulnerabilities. Always prefer fgets() or other safer alternatives for string input.",
      },
    ],
  },
  {
    type: "Output",
    examples: [
      {
        function: "printf()",
        description:
          "Used to print formatted output to the standard output stream",
        example: `int num = 42;
printf("The answer is: %d\\n", num);`,
        formatSpecifier: "%d, %f, %c, %s",
        tip: "Use \\n for newline in printf() for better formatting.",
        explanation:
          "printf() is a versatile function for formatted output. It allows you to combine text and variable values in a single output statement, with fine control over the formatting.",
        bestUseCase:
          "Ideal for most output needs, especially when you need to format the output or combine text with variable values. It's the go-to function for complex or formatted output in C.",
      },
      {
        function: "puts()",
        description: "Outputs a string followed by a newline to stdout",
        example: `char *message = "Hello, World!";
puts(message);`,
        tip: "Simpler than printf() for outputting whole strings.",
        explanation:
          "puts() is a simpler alternative to printf() when you just need to output a string. It automatically adds a newline at the end of the output.",
        bestUseCase:
          "Best used when you need to output a simple string without any formatting. It's more concise than printf() for this specific use case and can be slightly more efficient.",
      },
    ],
  },
];

const basicPrinting = [
  {
    title: "Basic Printing",
    desc: "Learn how to display text in C programs",
    explanation:
      "The printf() function is a powerful tool for outputting formatted text. It's part of the stdio.h library and allows for precise control over what's displayed. The '\\n' escape sequence adds a newline, ensuring the next output starts on a fresh line.",
    examples: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("C programming is powerful!\\n");
    return 0;
}`,
    output: `Hello, World!
C programming is powerful!`,
    bestUseCase:
      "Use printf() for most of your output needs, especially when you need to format the output or combine text with variable values. It's versatile and allows for complex formatting.",
  },
  {
    title: "Format Specifiers",
    desc: "Explore how to integrate variables into your output seamlessly",
    explanation:
      "Format specifiers act as placeholders for variable values in printf() statements. The %d specifier is used for integers, but C offers a wide range of specifiers for different data types. This allows for flexible and dynamic output formatting.",
    examples: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 1.75;
    char grade = 'A';
    printf("Age: %d years\\n", age);
    printf("Height: %.2f meters\\n", height);
    printf("Grade: %c\\n", grade);
    return 0;
}`,
    output: `Age: 25 years
Height: 1.75 meters
Grade: A`,
    bestUseCase:
      "Format specifiers are crucial when you need to output variable values alongside text. They're particularly useful for creating readable, formatted output that includes different data types.",
  },
];

export default function CBasics() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "C Basics" }}
      courses={Courses}
      currentCourseLink="/courses/c/basics"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="Embark on a cutting-edge journey into C programming. Master the core elements: from sleek printing techniques to dynamic variables, versatile data types, and streamlined I/O operations. These are your launch codes for the C development universe."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why These Basics Matter"
        id="why-basics-matter"
        delay={0.7}
        description="Understanding these fundamental concepts is crucial for any aspiring C programmer. These basics form the foundation upon which more advanced concepts are built, enabling you to write efficient, clean, and powerful C code."
        icon={PiLightbulbFilamentFill}
      />

      <Single
        title="Basic Printing in C"
        id="basic-printing"
        delay={0.8}
        components={basicPrinting.map((item) => ({
          title: item.title,
          desc: item.desc,
          examples: item.examples,
          output: item.output,
          explanation: item.explanation,
          bestUseCase: item.bestUseCase,
        }))}
        language="c"
        icon={FaTerminal}
      />

      <Variables
        id="variables"
        delay={1.0}
        title="Understanding Variables in C"
        icon={FaLightbulb}
        variables={variables.map((item) => ({
          title: item.title,
          description: item.description,
          steps: item.steps,
          example: item.example,
          explanation: item.explanation,
          wrongExample: item.wrongExample,
          wrongExplanation: item.wrongExplanation,
          tips: item.tips,
          scratch: item.scratch,
        }))}
      />

      <DataTypes
        id="data-types"
        delay={1.0}
        title="Data Types in C"
        icon={FaCube}
        language="c"
        dataTypes={dataTypes.map((item) => ({
          type: item.type,
          examples: item.examples.map((example) => ({
            title: example.title,
            description: example.description,
            example: example.example,
            formatSpecifier: example.formatSpecifier,
            dataType: example.dataType,
            range: example.range,
            size: example.size,
            explanation: example.explanation,
            bestUseCase: example.bestUseCase,
          })),
        }))}
      />

      <InputOutput
        id="input-output"
        delay={1.0}
        title="Basic Input/Output in C"
        icon={FaTerminal}
        inputOutputExamples={inputOutputExamples}
      />
    </CourseContainer>
  );
}
