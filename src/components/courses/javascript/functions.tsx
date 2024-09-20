"use client";

import Courses from "@components/courses/javascript/navigation";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Topics from "@components/courses/template/topics";
import Single from "@components/courses/template/single";
import {
  FaCode,
  FaCube,
  FaLightbulb,
  FaRocket,
  FaTerminal,
} from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

const topics = [
  {
    title: "Function Declaration",
    desc: "Learn how to declare and define functions",
    id: "function-declaration",
    icon: FaCode,
  },
  {
    title: "Parameters & Arguments",
    desc: "Understand how to pass data to functions",
    id: "parameters-arguments",
    icon: FaTerminal,
  },
  {
    title: "Return Values",
    desc: "Explore how functions can return results",
    id: "return-values",
    icon: FaCube,
  },
  {
    title: "Arrow Functions",
    desc: "Master the concise arrow function syntax",
    id: "arrow-functions",
    icon: FaRocket,
  },
];

const functionDeclarations = [
  {
    title: "Standard Function Declaration",
    description:
      "This is the most common way to define a function. It uses the 'function' keyword followed by the function name.",
    example: `function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Outputs: Hello, Alice!`,
    output: `Hello, Alice!`,
    explanation:
      "This function takes a 'name' parameter and returns a greeting string. When called with 'Alice', it outputs 'Hello, Alice!'.",
    bestUseCase:
      "Best for creating named functions that will be used throughout your code, especially when hoisting is desired.",
  },
  {
    title: "Function Expression",
    description:
      "A function can also be created by a function expression. Such a function can be anonymous or have a name.",
    example: `const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Bob")); // Outputs: Hello, Bob!`,
    output: `Hello, Bob!`,
    explanation:
      "This function is assigned to a variable 'greet'. It works similarly to the function declaration, but is defined as an expression.",
    bestUseCase:
      "Useful when you want to assign a function to a variable or pass it as an argument to another function. Also good for creating closures.",
  },
  {
    title: "Arrow Function",
    description:
      "Arrow functions provide a shorter syntax for writing function expressions. They don't have their own 'this', arguments, super, or new.target.",
    example: `const greet = (name) => {
  return "Hello, " + name + "!";
};

// For single expressions, you can omit the curly braces and 'return' keyword
const greetShort = name => "Hello, " + name + "!";

console.log(greetShort("Charlie")); // Outputs: Hello, Charlie!`,
    output: `Hello, Charlie!`,
    explanation:
      "Arrow functions offer a concise syntax. The 'greetShort' function demonstrates a compact form for single-expression functions.",
    bestUseCase:
      "Ideal for short, single-expression functions and when you want to preserve the lexical 'this' binding. Commonly used in functional programming patterns and with array methods.",
  },
];

const parametersAndArguments = [
  {
    title: "Single Parameter",
    description: "A function with a single parameter",
    example: `function square(number) {
  return number * number;
}

console.log(square(5)); // Outputs: 25`,
    output: `25`,
    explanation:
      "This function takes one parameter 'number' and returns its square. When called with 5, it returns 25.",
    bestUseCase:
      "Ideal for simple operations that require only one input, such as mathematical functions or string manipulations.",
  },
  {
    title: "Multiple Parameters",
    description: "A function with multiple parameters",
    example: `function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // Outputs: 7`,
    output: `7`,
    explanation:
      "This function takes two parameters 'a' and 'b' and returns their sum. When called with 3 and 4, it returns 7.",
    bestUseCase:
      "Useful for operations that require multiple inputs, like complex calculations or combining different pieces of data.",
  },
  {
    title: "Default Parameters",
    description: "Parameters with default values",
    example: `function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet()); // Outputs: Hello, Guest!
console.log(greet("Alice")); // Outputs: Hello, Alice!`,
    output: `Hello, Guest!
Hello, Alice!`,
    explanation:
      "This function has a default parameter. If no argument is provided, it uses 'Guest' as the default value.",
    bestUseCase:
      "Great for functions that can work with optional inputs, providing flexibility while ensuring the function always has a valid input to work with.",
  },
  {
    title: "Rest Parameters",
    description: "Represent an indefinite number of arguments as an array",
    example: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10`,
    output: `10`,
    explanation:
      "The rest parameter '...numbers' allows the function to accept any number of arguments. It then sums all the provided numbers.",
    bestUseCase:
      "Perfect for functions that need to handle a variable number of inputs, such as mathematical operations on an arbitrary set of numbers or combining multiple strings.",
  },
];

const returnValues = [
  {
    title: "Returning a Value",
    description: "A function that returns a single value",
    example: `function double(number) {
  return number * 2;
}

console.log(double(5)); // Outputs: 10`,
    output: `10`,
    explanation:
      "This function takes a number, doubles it, and returns the result. When called with 5, it returns 10.",
    bestUseCase:
      "Suitable for simple computations or transformations where a single result is needed.",
  },
  {
    title: "Returning Multiple Values",
    description: "A function that returns multiple values using an object",
    example: `function getPersonInfo(name, age) {
  return { name: name, age: age };
}

const person = getPersonInfo("Alice", 30);
console.log(person.name); // Outputs: Alice
console.log(person.age); // Outputs: 30`,
    output: `Alice
30`,
    explanation:
      "This function returns an object containing multiple values. We can then access these values using dot notation.",
    bestUseCase:
      "Ideal when a function needs to return multiple related pieces of information, such as properties of an entity or results of multiple calculations.",
  },
  {
    title: "Early Return",
    description: "Using return to exit a function early",
    example: `function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4)); // Outputs: true
console.log(isEven(5)); // Outputs: false`,
    output: `true
false`,
    explanation:
      "This function uses an early return to exit as soon as it determines if a number is even. It returns true for 4 and false for 5.",
    bestUseCase:
      "Useful for conditional logic where you want to exit the function as soon as a condition is met, improving efficiency and readability.",
  },
  {
    title: "Returning a Function",
    description: "A function that returns another function",
    example: `function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Outputs: 10`,
    output: `10`,
    explanation:
      "This function returns another function. We create a 'double' function by calling multiplier with 2, then use it to multiply 5 by 2.",
    bestUseCase:
      "Excellent for creating closures, implementing currying, or generating specialized functions based on input parameters.",
  },
];

const arrowFunctions = [
  {
    title: "Simple Arrow Function",
    description: "A basic arrow function with a single parameter",
    example: `const square = x => x * x;

console.log(square(5)); // Outputs: 25`,
    output: `25`,
    explanation:
      "This concise arrow function takes a single parameter 'x' and returns its square. When called with 5, it returns 25.",
    bestUseCase:
      "Perfect for short, single-expression functions, especially when used as callbacks or in functional programming patterns.",
  },
  {
    title: "Multiple Parameters",
    description: "An arrow function with multiple parameters",
    example: `const add = (a, b) => a + b;

console.log(add(3, 4)); // Outputs: 7`,
    output: `7`,
    explanation:
      "This arrow function takes two parameters 'a' and 'b' and returns their sum. When called with 3 and 4, it returns 7.",
    bestUseCase:
      "Ideal for simple operations with multiple inputs, providing a concise syntax for function expressions.",
  },
  {
    title: "Arrow Function with Block",
    description: "An arrow function with a block of code",
    example: `const greet = name => {
  const message = "Hello, " + name + "!";
  return message;
};

console.log(greet("Alice")); // Outputs: Hello, Alice!`,
    output: `Hello, Alice!`,
    explanation:
      "This arrow function uses a block of code. It creates a message and then returns it. When called with 'Alice', it outputs 'Hello, Alice!'.",
    bestUseCase:
      "Useful when the function body requires multiple statements or more complex logic while still benefiting from the concise arrow syntax.",
  },
  {
    title: "Returning an Object",
    description: "An arrow function that returns an object literal",
    example: `const createPerson = (name, age) => ({ name, age });

const person = createPerson("Bob", 30);
console.log(person); // Outputs: { name: "Bob", age: 30 }`,
    output: `{ name: "Bob", age: 30 }`,
    explanation:
      "This arrow function returns an object. The parentheses around the object are necessary to distinguish it from a function body.",
    bestUseCase:
      "Excellent for creating simple factory functions or when you need to return an object literal concisely, often used in React components or when working with data transformations.",
  },
];

export default function JavaScriptFunctions() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "JavaScript Functions" }}
      courses={Courses}
      currentCourseLink="/courses/javascript/functions"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="In this course, you'll dive deep into JavaScript functions - the building blocks of reusable code. We'll cover function declarations, parameters, return values, and the modern arrow function syntax. By mastering functions, you'll be able to write more efficient and organized JavaScript code."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why Functions Matter"
        id="why-functions-matter"
        delay={0.7}
        description="Functions are at the heart of JavaScript programming. They allow you to write modular, reusable code, making your programs more efficient and easier to maintain. Understanding functions is crucial for any aspiring JavaScript developer, as they form the foundation for more advanced concepts like closures, callbacks, and asynchronous programming."
        icon={PiLightbulbFilamentFill}
      />

      <Single
        title="Function Declarations in JavaScript"
        id="function-declaration"
        delay={0.8}
        components={functionDeclarations.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
          bestUseCase: item.bestUseCase,
        }))}
        language="javascript"
        icon={FaCode}
      />

      <Single
        title="Parameters & Arguments in JavaScript"
        id="parameters-arguments"
        delay={0.9}
        components={parametersAndArguments.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
          bestUseCase: item.bestUseCase,
        }))}
        language="javascript"
        icon={FaLightbulb}
      />

      <Single
        title="Return Values in JavaScript"
        id="return-values"
        delay={1.0}
        components={returnValues.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
          bestUseCase: item.bestUseCase,
        }))}
        language="javascript"
        icon={FaCube}
      />

      <Single
        title="Arrow Functions in JavaScript"
        id="arrow-functions"
        delay={1.1}
        components={arrowFunctions.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
          bestUseCase: item.bestUseCase,
        }))}
        language="javascript"
        icon={FaRocket}
      />
    </CourseContainer>
  );
}
