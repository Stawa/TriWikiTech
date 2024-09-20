"use client";

import { FaCode, FaExchangeAlt, FaLightbulb, FaRocket } from "react-icons/fa";

import Courses from "@components/courses/c/navigation";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Topics from "@components/courses/template/topics";
import Single from "@components/courses/template/single";

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
    output: "No direct output. This is just a function definition.",
  },
  {
    title: "Function Call",
    description:
      "A function call in C executes the function's code with the provided arguments. It may return a value that can be used in expressions or assigned to variables.",
    example: `int result = add(5, 3);
printf("Sum: %d", result);`,
    whenToUse:
      "Use function calls whenever you need to execute the function's code. This allows for code reuse and helps in breaking down complex problems into smaller, manageable parts.",
    output: "Sum: 8",
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
    output: "5",
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
    output: "6",
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
    output: "25",
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
    output: "Hello, Alice!",
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
    output: "8",
  },
  {
    title: "Function Declaration",
    description:
      "A function declaration specifies the function's name, return type, and parameters without providing the function's body. It informs the compiler about the function's existence and interface.",
    example: `// Function declaration
int multiply(int x, int y);`,
    whenToUse:
      "Use function declarations when you want to inform the compiler about a function's existence without providing its implementation. This is often done in header files.",
    output: "No direct output. This is just a function declaration.",
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
    output: "No direct output. This is just a function definition.",
  },
  {
    title: "Function Prototype",
    description:
      "A function prototype is a declaration of a function that includes its return type, name, and parameter types, typically ending with a semicolon. It's identical to a function declaration and is used for type checking and to allow calling the function before its full definition.",
    example: `// Function prototype
int divide(int numerator, int denominator);`,
    whenToUse:
      "Use function prototypes when you need to declare a function before its full definition, especially in header files or at the top of your source file. This is crucial for larger projects and helps with code organization and compilation efficiency.",
    output: "No direct output. This is just a function prototype.",
  },
];

export default function CFunctions() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "C Functions" }}
      courses={Courses}
      currentCourseLink="/courses/c/functions"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="Dive into the world of C functions. Master the art of function declaration, definition, and prototypes. Learn about parameter passing and return values. These fundamental concepts are crucial for creating modular, reusable, and efficient C programs."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why Functions Matter"
        id="why-functions-matter"
        delay={0.7}
        description="Understanding functions is essential for any C programmer. These concepts form the backbone of modular programming, enabling you to create sophisticated, efficient, and maintainable C programs that can handle complex tasks through well-organized, reusable code blocks."
        icon={FaLightbulb}
      />

      <Single
        title="Function Basics in C"
        id="function-basics"
        delay={0.8}
        components={functionExamples.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          explanation: item.whenToUse,
          output: item.output,
        }))}
        language="c"
        icon={FaCode}
      />

      <Single
        title="Function Parameters in C"
        id="function-parameters"
        delay={1.0}
        components={parameterExamples.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          explanation: item.whenToUse,
          output: item.output,
        }))}
        language="c"
        icon={FaExchangeAlt}
      />

      <Single
        title="Return Values in C"
        id="return-values"
        delay={1.2}
        components={returnValueExamples.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          explanation: item.whenToUse,
          output: item.output,
        }))}
        language="c"
        icon={FaRocket}
      />

      <Single
        title="Function Prototypes in C"
        id="function-prototypes"
        delay={1.4}
        components={prototypeExamples.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          explanation: item.whenToUse,
          output: item.output,
        }))}
        language="c"
        icon={FaLightbulb}
      />
    </CourseContainer>
  );
}
