"use client";

import Courses from "@components/courses/javascript/navigation";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Topics from "@components/courses/template/topics";
import BasicPrinting from "@components/courses/template/single";
import Multiple from "@components/courses/template/multiple";
import {
  FaCode,
  FaCube,
  FaExchangeAlt,
  FaList,
  FaWrench,
} from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

const topics = [
  {
    title: "Object Basics",
    desc: "Learn to create and manipulate JavaScript objects",
    id: "object-basics",
    icon: FaCube,
  },
  {
    title: "Array Fundamentals",
    desc: "Master working with arrays and their methods",
    id: "array-fundamentals",
    icon: FaList,
  },
  {
    title: "Object Methods",
    desc: "Explore built-in object methods and custom functions",
    id: "object-methods",
    icon: FaWrench,
  },
  {
    title: "Array Operations",
    desc: "Dive into advanced array operations and transformations",
    id: "array-operations",
    icon: FaExchangeAlt,
  },
];

const objectBasics = [
  {
    type: "Creation",
    title: "Object Creation",
    description:
      "Objects in JavaScript are like containers that hold related information. Think of them as a box where you can put different things and label each item. They're very useful for grouping data that belongs together.",
    example: `// Using object literal (it's like making a list)
const person = {
  name: 'John',
  age: 30,
  isStudent: false,
  favoriteColors: ['blue', 'green']
};

// Using Object constructor (it's like building the box step by step)
const car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2022;
car.features = ['air conditioning', 'bluetooth'];

console.log(person);
console.log(car);`,
    output: `{
  name: 'John',
  age: 30,
  isStudent: false,
  favoriteColors: ['blue', 'green']
}
{
  make: 'Toyota',
  model: 'Corolla',
  year: 2022,
  features: ['air conditioning', 'bluetooth']
}`,
    explanation:
      "In this example, we show two ways to create objects.\n\n1. Using an object literal, is like writing a quick list. You put all the information between curly braces {}. Each piece of information has a name (like 'name' or 'age') and a value.\n\n2. Using the Object constructor, is like building a box and then putting things into it one by one. You start with an empty object and then add information to it step by step.\n\nBoth methods create objects, which are very useful in programming because they let you keep related information together. For example, all the information about a person or a car is kept in one place, making it easy to use and understand.",
  },
  {
    type: "Access",
    title: "Accessing Object Properties",
    description:
      "Once you have an object, you'll want to get information from it. This is called 'accessing' the object's properties. There are two main ways to do this in JavaScript, and they're both easy once you get the hang of it!",
    example: `const person = { 
  name: 'Alice', 
  age: 25,
  'favorite food': 'pizza'
};

// Dot notation (like pointing to something)
console.log(person.name);

// Bracket notation (like looking up a word in a dictionary)
console.log(person['age']);

// Using variables with bracket notation
const propertyName = 'name';
console.log(person[propertyName]);

// Accessing property with space in its name
console.log(person['favorite food']);

// Trying to access a property that doesn't exist
console.log(person.height);`,
    output: `Alice
25
Alice
pizza
undefined`,
    explanation:
      "This example shows different ways to get information from an object:\n\n1. Dot notation (person.name) is the simplest way. It's like pointing to the information you want.\n\n2. Bracket notation (person['age']) is useful when the property name has spaces or when it's stored in a variable.\n\n3. We can use a variable to specify which property we want to access, like with propertyName.\n\n4. For properties with spaces in their names, we must use bracket notation.\n\n5. If we try to access a property that doesn't exist (like 'height'), JavaScript gives us 'undefined'.\n\nRemember, objects are like containers of information, and these methods are how we open the container and look inside for specific pieces of information.",
  },
];

const arrayFundamentals = [
  {
    type: "Creation",
    title: "Array Creation",
    description:
      "Arrays in JavaScript are like lists that can hold multiple items. They're super useful when you want to store a collection of related things, like a shopping list or a list of scores in a game.",
    example: `// Using array literal (it's like writing a list)
const fruits = ['apple', 'banana', 'orange'];

// Using Array constructor (it's like building a list step by step)
const numbers = new Array(1, 2, 3, 4, 5);

// Creating an empty array (starting with a blank list)
const emptyArray = [];

// Array with mixed data types
const mixedArray = ['string', 42, true, null, {name: 'object'}, [1, 2, 3]];

console.log(fruits);
console.log(numbers);
console.log(emptyArray);
console.log(mixedArray);`,
    output: `["apple", "banana", "orange"]
[1, 2, 3, 4, 5]
[]
["string", 42, true, null, {name: "object"}, [1, 2, 3]]`,
    explanation:
      "This example shows different ways to create arrays in JavaScript:\n\n1. Array literal: This is the most common way. You just list the items inside square brackets [].\n\n2. Array constructor: This is another way to create an array. You use the word 'new' and 'Array()', and put the items inside the parentheses.\n\n3. Empty array: Sometimes you want to start with an empty list and add things later. You can do this with [] or new Array().\n\n4. Mixed array: In JavaScript, arrays can hold different types of data all in one list. This is really flexible!\n\nArrays are great for keeping lists of things in your programs. You can add, remove, or change items in the list, which makes them very useful for all sorts of tasks!",
  },
  {
    type: "Access",
    title: "Accessing Array Elements",
    description:
      "Once you have an array, you'll want to get items from it. In programming, we call this 'accessing' the array elements. JavaScript makes this easy, but there's a little trick to remember!",
    example: `const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Accessing elements by index
console.log(colors[0]);  // First element
console.log(colors[2]);  // Third element

// Accessing last element
console.log(colors[colors.length - 1]);

// Accessing an element that doesn't exist
console.log(colors[10]);

// Changing an element
colors[1] = 'lime';
console.log(colors);

// Adding a new element at the end
colors[colors.length] = 'orange';
console.log(colors);`,
    output: `red
blue
purple
undefined
["red", "lime", "blue", "yellow", "purple"]
["red", "lime", "blue", "yellow", "purple", "orange"]`,
    explanation:
      "Here's how we work with array elements:\n\n1. We use square brackets [] with a number inside to access elements. The trick is that we start counting at 0, not 1. So colors[0] is the first color, colors[1] is the second, and so on.\n\n2. To get the last element, we can use the array's length (which tells us how many items are in the array) minus 1.\n\n3. If we try to access an element that doesn't exist (like colors[10] when we only have 5 colors), JavaScript gives us 'undefined'.\n\n4. We can change elements by assigning a new value to a specific index.\n\n5. We can add new elements by assigning a value to the index that's equal to the array's length.\n\nRemember, arrays are like numbered lists. The numbers (indices) help us find and work with specific items in the list easily!",
  },
];

const objectMethods = [
  {
    type: "Built-in",
    title: "Built-in Object Methods",
    description:
      "JavaScript gives us some handy tools (called methods) to work with objects. These methods help us do common tasks with objects more easily. Let's look at a couple of these helpful tools!",
    examples: [
      {
        name: "Object.keys()",
        description:
          "This method gives us a list of all the property names (or keys) in an object. It's like getting a list of labels for everything in your object.",
        example: `const person = { 
  name: 'John', 
  age: 30, 
  job: 'developer' 
};
console.log(Object.keys(person));

const emptyObject = {};
console.log(Object.keys(emptyObject));`,
        output: `["name", "age", "job"]
[]`,
      },
      {
        name: "Object.values()",
        description:
          "This method gives us a list of all the values in an object. It's like getting a list of all the information in your object, without the labels.",
        example: `const person = { 
  name: 'John', 
  age: 30, 
  job: 'developer' 
};
console.log(Object.values(person));

const scores = { math: 95, science: 88, history: 92 };
console.log(Object.values(scores));`,
        output: `["John", 30, "developer"]
[95, 88, 92]`,
      },
    ],
    explanation:
      "These built-in methods are super helpful when working with objects:\n\n1. Object.keys() gives us an array of all the property names in an object. This is useful when you want to know what kind of information an object contains.\n\n2. Object.values() gives us an array of all the values in an object. This is great when you want to work with all the information in an object without worrying about the property names.\n\nBoth methods return empty arrays for empty objects. These tools make it easier to work with objects, especially when you're not sure what properties an object might have or when you want to do something with all the values in an object.",
  },
  {
    type: "Custom",
    title: "Custom Object Methods",
    description:
      "Objects can also have their own special functions, which we call methods. These are like personal tools that belong to the object. You can create these yourself to make objects do specific tasks.",
    examples: [
      {
        name: "Custom Method",
        description:
          "You can add your own methods to objects to make them do special tasks.",
        example: `const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  describe: function() {
    console.log("I'm a calculator object!");
  }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(2, 6));
calculator.describe();`,
        output: `8
6
12
I'm a calculator object!`,
      },
    ],
    explanation:
      "Custom methods let you add special behaviors to your objects:\n\n1. We created a calculator object with four methods: add, subtract, multiply, and describe.\n\n2. Each method is like a mini-function that belongs to the calculator object.\n\n3. We can use these methods by writing the object name, then a dot, then the method name, like calculator.add(5, 3).\n\n4. The describe method doesn't return a value, it just prints a message.\n\nCustom methods are great because they let you group related functions together in an object. This helps organize your code and makes it easier to use. For example, all the math operations are kept together in the calculator object.",
  },
];

const arrayOperations = [
  {
    type: "Manipulation",
    title: "Array Manipulation Methods",
    description:
      "JavaScript gives us special tools (methods) to work with arrays. These methods help us add, remove, or change items in an array. Let's look at some of these helpful tools!",
    examples: [
      {
        name: "push() and pop()",
        description:
          "push() adds an item to the end of an array, while pop() removes the last item.",
        example: `const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);

const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);`,
        output: `["apple", "banana", "orange"]
orange
["apple", "banana"]`,
      },
      {
        name: "unshift() and shift()",
        description:
          "unshift() adds an item to the beginning of an array, while shift() removes the first item.",
        example: `const numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers);

const firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers);`,
        output: `[1, 2, 3, 4]
1
[2, 3, 4]`,
      },
      {
        name: "map()",
        description:
          "map() creates a new array by doing something to every item in the original array.",
        example: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const words = ['hello', 'world'];
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);`,
        output: `[2, 4, 6, 8]
["HELLO", "WORLD"]`,
      },
    ],
    explanation:
      "These array methods are super useful for changing arrays:\n\n1. push() and pop() work with the end of the array. push() adds an item, making the array longer. pop() removes the last item and tells you what it was.\n\n2. unshift() and shift() are like push() and pop(), but they work at the beginning of the array instead of the end.\n\n3. map() is special because it creates a whole new array. It does something to each item in the original array and puts the results in a new array. The original array doesn't change.\n\nThese methods make it easy to add, remove, or change items in arrays. They're like having a toolbox for working with lists in your programs!",
  },
];

export default function JavaScriptObjectsArrays() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "JavaScript Objects & Arrays" }}
      courses={Courses}
      currentCourseLink="/courses/javascript/objects-arrays"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="In this course, you'll dive deep into JavaScript objects and arrays. We'll cover object creation and manipulation, array fundamentals, object methods, and advanced array operations. These concepts are crucial for working with complex data structures in JavaScript."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why These Basics Matter"
        id="why-objects-arrays-matter"
        delay={0.7}
        description="Objects and arrays are fundamental data structures in JavaScript. They allow you to organize, store, and manipulate complex data efficiently. Mastering these concepts is crucial for building robust and scalable applications, working with APIs, and implementing advanced programming patterns."
        icon={PiLightbulbFilamentFill}
      />

      <BasicPrinting
        title="Object Basics"
        id="object-basics"
        delay={0.8}
        components={objectBasics.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
        }))}
        language="javascript"
        icon={FaCube}
      />

      <BasicPrinting
        title="Array Fundamentals"
        id="array-fundamentals"
        delay={0.9}
        components={arrayFundamentals.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
        }))}
        language="javascript"
        icon={FaList}
      />

      <Multiple
        id="object-methods"
        delay={1.0}
        title="Object Methods"
        icon={FaWrench}
        language="javascript"
        items={objectMethods}
      />

      <Multiple
        id="array-operations"
        delay={1.1}
        title="Array Operations"
        icon={FaExchangeAlt}
        language="javascript"
        items={arrayOperations}
      />
    </CourseContainer>
  );
}
