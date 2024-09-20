"use client";

import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Courses from "@components/courses/javascript/navigation";
import Topics from "@components/courses/template/topics";
import {
  Single,
  type SingleItemProps,
} from "@components/courses/template/single";
import {
  Variables,
  type VariableItem,
} from "@components/courses/template/variable";
import {
  DataTypes,
  type DataTypeCategory,
} from "@components/courses/template/types";

import { FaCode, FaCube, FaTerminal } from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

const topics = [
  {
    title: "Console.log",
    desc: "Learn how to output data to the console",
    id: "basic-printing",
    icon: FaTerminal,
  },
  {
    title: "Variables",
    desc: "Learn about var, let, and const",
    id: "variables",
    icon: FaCode,
  },
  {
    title: "Data Types",
    desc: "Understand primitive and complex data types",
    id: "data-types",
    icon: FaCube,
  },
];

const variableTypes: VariableItem[] = [
  {
    title: "var (Function/Global Scope)",
    description:
      "To create a variable using 'var' in JavaScript, you declare it with the 'var' keyword. 'var' creates variables that are either function-scoped or globally-scoped.",
    steps: [
      "Use the 'var' keyword",
      "Choose a descriptive variable name",
      "Optionally, initialize the variable with a value",
      "Be aware of function or global scope",
    ],
    example: `// Using var (function-scoped or globally-scoped)
var x = 10;
if (true) {
  var x = 20; // This will overwrite the previous x
}
console.log(x); // Outputs 20

// Caution: var can lead to unexpected behavior due to hoisting
console.log(y); // Outputs undefined, not an error
var y = 5;`,
    wrongExample: `// Incorrect usage of var
var 123abc = "invalid name"; // Invalid: starts with a number
var function = "reserved word"; // Invalid: uses a reserved keyword
var globalVar = "avoid globals"; // Caution: creates a global variable`,
    tips: [
      "Avoid using 'var' in modern JavaScript; prefer 'let' or 'const'",
      "Be cautious of function scope and hoisting behavior",
      "Don't rely on global variables created with 'var'",
      "Use meaningful variable names",
    ],
    scratch: "var [VARIABLE_NAME] = [VALUE];",
    explanation:
      "Variables declared with 'var' are function-scoped or globally-scoped. This means they are accessible throughout the entire function they're declared in, or globally if declared outside any function. 'var' variables are also hoisted, which means their declarations (but not initializations) are moved to the top of their scope.",
    wrongExplanation:
      "In the wrong examples, '123abc' is an invalid variable name as it starts with a number. 'function' is a reserved word in JavaScript and can't be used as a variable name. Creating global variables with 'var' outside of functions (like 'globalVar') is generally discouraged as it can lead to naming conflicts and hard-to-debug code.",
  },
  {
    title: "let (Block Scope)",
    description:
      "To create a variable using 'let' in JavaScript, you declare it with the 'let' keyword. 'let' creates block-scoped variables.",
    steps: [
      "Use the 'let' keyword",
      "Choose a descriptive variable name",
      "Optionally, initialize the variable with a value",
      "Be aware of block scope",
    ],
    example: `// Using let (block-scoped)
let count = 0;
if (true) {
  let count = 1; // This creates a new variable, doesn't affect outer count
  console.log(count); // Outputs 1
}
console.log(count); // Outputs 0

// Proper use: let for variables that will be reassigned
let score = 75;
score = score + 25; // Now score is 100
console.log(score); // Outputs 100`,
    wrongExample: `// Incorrect usage of let
let x = 5;
let x = 10; // Error: can't redeclare block-scoped variable
{
  console.log(y); // Error: can't use before declaration
  let y = 20;
}
console.log(y); // Error: y is not defined in this scope`,
    tips: [
      "Use 'let' for variables that will be reassigned",
      "Remember that 'let' is block-scoped",
      "Don't redeclare variables with 'let' in the same scope",
      "Initialize 'let' variables before using them",
    ],
    scratch: "let [VARIABLE_NAME] = [VALUE];",
    explanation:
      "'let' declares variables that are block-scoped, meaning they are only accessible within the nearest set of curly braces {} where they are declared. This prevents accidental modifications of variables outside the current block. 'let' allows reassignment, making it useful for variables whose values need to change over time.",
    wrongExplanation:
      "In the wrong examples, redeclaring 'x' with 'let' in the same scope causes an error. Trying to use 'y' before its declaration within the same block also causes an error, as 'let' doesn't hoist like 'var'. Attempting to access 'y' outside its block scope results in an error because 'let' variables are not accessible outside their block.",
  },
  {
    title: "const (Block Scope, Immutable)",
    description:
      "To create a constant variable in JavaScript, you declare it with the 'const' keyword. 'const' creates block-scoped variables that cannot be reassigned.",
    steps: [
      "Use the 'const' keyword",
      "Choose a descriptive variable name (often in UPPER_CASE for true constants)",
      "Initialize the variable with a value (required)",
      "Be aware of block scope and immutability",
    ],
    example: `// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // This would cause an error

// Note: const for objects and arrays (their properties can be modified)
const user = { name: 'John', age: 30 };
user.age = 31; // This is allowed
console.log(user);

// user = { name: 'Jane' }; // This would cause an error

// Best practice: Use const for variables that won't be reassigned
const DAYS_IN_WEEK = 7; // Correct usage of const
console.log(DAYS_IN_WEEK);`,
    wrongExample: `// Incorrect usage of const
const X; // Error: missing initializer in const declaration
const Y = 10;
Y = 20; // Error: assignment to a constant variable
{
  console.log(Z); // Error: cannot access 'Z' before initialization
  const Z = 30;
}
console.log(Z); // Error: Z is not defined in this scope`,
    tips: [
      "Use 'const' as your default choice when declaring variables",
      "Always initialize 'const' variables when declaring them",
      "Remember that 'const' prevents reassignment, not modification of object properties",
      "Use 'const' for values that shouldn't change throughout your program",
    ],
    scratch: "const [VARIABLE_NAME] = [VALUE];",
    explanation:
      "'const' declares variables that are block-scoped and cannot be reassigned after initialization. For primitive values, this means the value cannot be changed at all. For objects and arrays, while the reference cannot be changed, the contents can still be modified. This makes 'const' ideal for declaring constants or variables that shouldn't be reassigned.",
    wrongExplanation:
      "In the wrong examples, declaring 'X' without initialization is an error as 'const' requires immediate initialization. Attempting to reassign 'Y' causes an error because 'const' variables cannot be reassigned. Trying to use 'Z' before its declaration within the same block causes an error, and attempting to access 'Z' outside its block scope results in an error because 'const' variables are not accessible outside their block.",
  },
];

const dataTypes: DataTypeCategory[] = [
  {
    type: "Primitive",
    examples: [
      {
        title: "Number",
        description:
          "The Number type in JavaScript represents both integer and floating-point numbers. It's used for any kind of numeric value.",
        example: `let age = 25;
let pi = 3.14;
console.log(typeof age, age);
console.log(typeof pi, pi);`,
        output: `"number" 25
"number" 3.14`,
        explanation:
          "In JavaScript, there's no distinction between integers and floating-point numbers at the language level. Both are simply of type 'number'. This simplifies numeric operations but can sometimes lead to precision issues with very large numbers or complex calculations.",
        formatSpecifier: undefined,
        dataType: "Number",
        range:
          "-(2^53 - 1) to (2^53 - 1) for integers, and approximately ±1.8e308 for floating-point numbers",
        size: "64 bits (8 bytes)",
        bestUseCase:
          "Use for any numeric calculations, counters, or representing quantities in your application.",
      },
      {
        title: "String",
        description:
          "The String type represents textual data. It's used for storing and manipulating text.",
        example: `let name = 'John';
let greeting = \`Hello, \${name}\`;
console.log(typeof name, name);
console.log(typeof greeting, greeting);`,
        output: `"string" "John"
"string" "Hello, John"`,
        explanation:
          "Strings in JavaScript can be created using single quotes, double quotes, or backticks. Backticks allow for template literals, which can include expressions inside ${} placeholders. This is very useful for creating dynamic strings.",
        formatSpecifier: undefined,
        dataType: "String",
        range: "Can contain 0 to 2^53 - 1 elements",
        size: "Each character is 16 bits (2 bytes)",
        bestUseCase:
          "Use for storing and manipulating text data, such as names, messages, or any textual content in your application.",
      },
      {
        title: "Boolean",
        description:
          "The Boolean type represents a logical entity and can have only two values: true or false. It's often used in conditional statements and comparisons.",
        example: `let isActive = true;
let isLoggedIn = false;
console.log(typeof isActive, isActive);
console.log(typeof isLoggedIn, isLoggedIn);`,
        output: `"boolean" true
"boolean" false`,
        explanation:
          "Booleans are fundamental for control flow in programming. They're often the result of comparisons (like x > y) and are used in if statements, while loops, and other conditional structures.",
        formatSpecifier: undefined,
        dataType: "Boolean",
        range: "Only two possible values: true or false",
        size: "1 bit (but typically stored as 1 byte for alignment)",
        bestUseCase:
          "Use for conditional logic, flags, or any situation where you need to represent a binary state (on/off, yes/no, true/false).",
      },
      {
        title: "Undefined",
        description:
          "Undefined represents a variable that has been declared but hasn't been assigned a value yet.",
        example: `let x;
console.log(typeof x, x);`,
        output: `undefined undefined`,
        explanation:
          "Undefined is automatically assigned to variables that have been declared but not initialized. It's also the value returned by functions that don't explicitly return anything.",
        formatSpecifier: undefined,
        dataType: "Undefined",
        range: "Only one possible value: undefined",
        size: undefined,
        bestUseCase:
          "Use to check if a variable has been assigned a value, or to explicitly indicate that a variable or object property has no assigned value.",
      },
      {
        title: "Null",
        description:
          "Null represents a deliberate non-value or absence of any object value. It's often used to signify 'no value' or 'unknown value'.",
        example: `let empty = null;
console.log(typeof empty, empty);`,
        output: `"object" null`,
        explanation:
          "Interestingly, typeof null returns 'object', which is actually a long-standing bug in JavaScript. Despite this, null is not an object, but a primitive value. It's often used to explicitly indicate that a variable intentionally has no value.",
        formatSpecifier: undefined,
        dataType: "Null",
        range: "Only one possible value: null",
        size: undefined,
        bestUseCase:
          "Use to explicitly indicate that a variable or object property has no value or is intentionally empty, especially when you want to distinguish from undefined.",
      },
      {
        title: "Symbol",
        description:
          "Symbol is a unique and immutable primitive value and may be used as the key of an Object property. It was introduced in ECMAScript 2015.",
        example: `const id = Symbol('id');
let user = { [id]: 1 };
console.log(typeof id, id);
console.log(user);`,
        output: `"symbol" Symbol(id)
{ [Symbol(id)]: 1 }`,
        explanation:
          "Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object. They're not enumerable in for...in iterations, which makes them useful for storing metadata about objects.",
        formatSpecifier: undefined,
        dataType: "Symbol",
        range: "Each Symbol value is unique and immutable",
        size: undefined,
        bestUseCase:
          "Use for creating unique identifiers for object properties, especially when you want to avoid naming conflicts in objects or add non-string property keys.",
      },
    ],
  },
  {
    type: "Complex",
    examples: [
      {
        title: "Object",
        description:
          "Objects are used to store collections of data and more complex entities. They can contain properties and methods.",
        example: `let person = { name: 'Alice', age: 30 };
console.log(typeof person, person);`,
        output: `"object" { name: "Alice", age: 30 }`,
        explanation:
          "Objects are one of the most important data types in JavaScript. They allow you to store keyed collections of various data and more complex entities. Objects can be created using the object literal notation (as shown) or with the Object() constructor.",
        formatSpecifier: undefined,
        dataType: "Object",
        range:
          "Can contain any number of properties, limited only by available memory",
        size: "Varies depending on content",
        bestUseCase:
          "Use for storing and organizing related data and functionality together, representing complex entities, or creating custom data structures in your application.",
      },
      {
        title: "Array",
        description:
          "Arrays are used to store multiple values in a single variable. They are objects that contain a list of items.",
        example: `let fruits = ['apple', 'banana', 'orange'];
console.log(typeof fruits, fruits);`,
        output: `"object" ["apple", "banana", "orange"]`,
        explanation:
          "Arrays in JavaScript are actually objects, which is why typeof returns 'object'. They have numeric keys and a length property. Arrays are very versatile and have many built-in methods for manipulation and iteration.",
        formatSpecifier: undefined,
        dataType: "Array",
        range: "Can contain 0 to 2^32 - 1 elements",
        size: "Varies depending on content",
        bestUseCase:
          "Use for storing and manipulating lists of data, especially when you need ordered collections or want to perform operations on multiple values at once.",
      },
      {
        title: "Function",
        description:
          "Functions are reusable blocks of code that perform a specific task. In JavaScript, functions are first-class objects.",
        example: `function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(typeof greet, greet);
console.log(greet('Alice'));`,
        output: `"function" [Function: greet]
"Hello, Alice!"`,
        explanation:
          "Functions in JavaScript are objects, but they have a special typeof result: 'function'. They can be assigned to variables, passed as arguments to other functions, and even have properties and methods of their own. This makes JavaScript a very flexible language for functional programming.",
        formatSpecifier: undefined,
        dataType: "Function",
        range: "Can contain any valid JavaScript code",
        size: "Varies depending on the function's code",
        bestUseCase:
          "Use for creating reusable blocks of code, implementing behaviors, handling events, or organizing your code into modular, maintainable units.",
      },
    ],
  },
];

const consoleLogExamples: SingleItemProps[] = [
  {
    title: "Basic Output",
    description:
      "console.log() is a function in JavaScript that outputs a message to the web console. It's one of the most basic and commonly used debugging tools.",
    example: "console.log('Hello, World!');",
    output: "Hello, World!",
    explanation:
      "This is the simplest use of console.log(). It's often used as a first step in learning a new programming language. In JavaScript, you can use it to quickly check if your code is running or to see the value of a variable at a specific point in your program.",
    bestUseCase:
      "Use this for quick debugging, verifying if a script is running, or outputting simple messages during development.",
  },
  {
    title: "Multiple Arguments",
    description:
      "console.log() can take multiple arguments, which will be printed out separated by spaces.",
    example: "console.log('Name:', 'Alice', 'Age:', 30);",
    output: "Name: Alice Age: 30",
    explanation:
      "When you pass multiple arguments to console.log(), it will print them all out in order, separated by spaces. This is useful for logging multiple values at once or for adding labels to your log outputs to make them more readable.",
    bestUseCase:
      "Ideal for logging multiple related pieces of information at once, or for creating more descriptive debug outputs.",
  },
  {
    title: "Variable Output",
    description:
      "One of the most common uses of console.log() is to output the value of variables for debugging purposes.",
    example: `let x = 5;
console.log('The value of x is:', x);`,
    output: "The value of x is: 5",
    explanation:
      "Here, we're using console.log() to print out both a string and the value of a variable. This is extremely useful when debugging, as it allows you to see the current state of your variables at different points in your code execution.",
    bestUseCase:
      "Perfect for tracking the value of variables throughout your code, especially in loops or complex functions.",
  },
  {
    title: "Object Output",
    description:
      "console.log() can also be used to output complex data structures like objects. This is particularly useful for inspecting the properties of an object.",
    example: `let person = { name: 'Bob', age: 25 };
console.log(person);`,
    output: "{ name: 'Bob', age: 25 }",
    explanation:
      "When you pass an object to console.log(), it will display the object's properties and their values. In most browser consoles, you can even expand the object to explore nested properties. This is invaluable when working with complex data structures or API responses.",
    bestUseCase:
      "Excellent for inspecting complex objects, debugging API responses, or understanding the structure of nested data.",
  },
];

export default function JavaScriptBasics() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "JavaScript Basics" }}
      courses={Courses}
      currentCourseLink="/courses/javascript/basics"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="In this course, you'll dive deep into JavaScript basics, covering console.log, variables, and data types. These fundamental concepts form the foundation for more advanced JavaScript programming."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why These Basics Matter"
        id="why-basics-matter"
        delay={0.7}
        description="Understanding these fundamental concepts is crucial for any aspiring JavaScript developer. These basics form the foundation upon which more advanced concepts are built, enabling you to write efficient, clean, and powerful JavaScript code."
        icon={PiLightbulbFilamentFill}
      />

      <Single
        title="Basic Printing in JavaScript"
        id="basic-printing"
        delay={0.8}
        components={consoleLogExamples}
        language="javascript"
        icon={FaTerminal}
      />

      <Variables
        id="variables"
        delay={0.9}
        title="Understanding Variable Types"
        icon={FaCode}
        variables={variableTypes}
      />

      <DataTypes
        id="data-types"
        delay={1.0}
        title="Data Types in JavaScript"
        icon={FaCube}
        language="javascript"
        content={dataTypes}
      />
    </CourseContainer>
  );
}
