"use client";

import { FaCode, FaExchangeAlt, FaSyncAlt } from "react-icons/fa";
import Courses from "@components/courses/javascript/navigation";
import CourseContainer from "@components/courses/container";
import CourseOverview from "@components/courses/template/overview";
import Topics from "@components/courses/template/topics";
import Reason from "@components/courses/template/reason";
import BasicPrinting from "@components/courses/template/basic";

const topics = [
  {
    title: "Conditional Statements",
    desc: "Learn about if, else if, and else",
    id: "conditionals",
    icon: FaCode,
  },
  {
    title: "Loops",
    desc: "Understand for, while, and do-while loops",
    id: "loops",
    icon: FaSyncAlt,
  },
  {
    title: "Switch Statements",
    desc: "Master the switch-case structure",
    id: "switch",
    icon: FaExchangeAlt,
  },
];

const conditionalExamples = [
  {
    type: "if-else",
    title: "if-else Statement",
    description:
      "The if-else statement allows you to execute different blocks of code based on a condition.",
    example: `let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}`,
    output: `You are eligible to vote.`,
    explanation:
      "In this example, since the age is 18, which is greater than or equal to 18, the first condition is true, so the first console.log statement is executed.",
    bestUseCase:
      "Use if-else statements when you need to execute different code blocks based on a single condition. It's particularly useful for binary decisions or simple branching logic.",
  },
  {
    type: "else-if",
    title: "else-if Statement",
    description:
      "The else-if statement allows you to check multiple conditions in sequence.",
    example: `let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`,
    output: `Grade: B`,
    explanation:
      "Here, the score is 85. It's not greater than or equal to 90, but it is greater than or equal to 80, so the second condition is true and 'Grade: B' is logged.",
    bestUseCase:
      "Use else-if statements when you need to check multiple conditions in a specific order. It's ideal for scenarios where you have multiple possible outcomes based on different conditions, such as grading systems or categorization tasks.",
  },
];

const loopExamples = [
  {
    type: "for",
    title: "for Loop",
    description:
      "The for loop repeats a block of code a specified number of times.",
    example: `for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}`,
    output: `Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4`,
    explanation:
      "This for loop runs 5 times, with i starting at 0 and incrementing by 1 each time until it reaches 4.",
    bestUseCase:
      "Use for loops when you know the exact number of iterations needed. They're ideal for iterating over arrays or performing a task a specific number of times.",
  },
  {
    type: "while",
    title: "while Loop",
    description:
      "The while loop repeats a block of code as long as a specified condition is true.",
    example: `let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}`,
    output: `Count: 0
Count: 1
Count: 2
Count: 3
Count: 4`,
    explanation:
      "This while loop continues to execute as long as count is less than 5. It increments count each time, so it will run 5 times.",
    bestUseCase:
      "Use while loops when you don't know in advance how many times the loop should run. They're great for situations where you need to continue a process until a certain condition is met.",
  },
  {
    type: "do-while",
    title: "do-while Loop",
    description:
      "The do-while loop is similar to the while loop, but it always executes the code block at least once before checking the condition.",
    example: `let num = 0;
do {
  console.log("Number: " + num);
  num++;
} while (num < 5);`,
    output: `Number: 0
Number: 1
Number: 2
Number: 3
Number: 4`,
    explanation:
      "This do-while loop works similarly to the while loop, but it would execute at least once even if the initial condition was false.",
    bestUseCase:
      "Use do-while loops when you want to ensure that the code block is executed at least once, regardless of the condition. This is useful for scenarios where you need to perform an action before checking if it should be repeated.",
  },
];

const switchExample = {
  title: "Switch Statement",
  description:
    "The switch statement is used to perform different actions based on different conditions.",
  example: `let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log("Today is " + dayName);`,
  output: `Today is Wednesday`,
  explanation:
    "In this switch statement, the value of day is 3, so it matches the case 3, and dayName is set to 'Wednesday'.",
  bestUseCase:
    "Use switch statements when you have multiple conditions to check against a single variable. It's especially useful for menu systems, state machines, or when mapping numeric values to string representations (like in this day of the week example).",
};

export default function JavaScriptControlStructures() {
  return (
    <CourseContainer
      authorInfo={{
        date: "2024-09-15",
        title: "JavaScript Control Structures",
      }}
      courses={Courses}
      currentCourseLink="/courses/javascript/control-structures"
    >
      <CourseOverview
        id="course-overview"
        delay={0.3}
        description="In this course, you'll learn about JavaScript control structures. We'll cover conditional statements, loops, and switch statements - essential tools for controlling the flow of your code and making decisions based on different conditions."
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <Reason
        id="why-control-structures-matter"
        delay={0.7}
        description="Control structures are fundamental to programming. They allow you to make decisions in your code, repeat actions, and choose different code paths based on conditions. Mastering these concepts will give you the power to create more complex and interactive JavaScript applications."
      />

      <BasicPrinting
        id="conditionals"
        delay={0.8}
        title="Conditional Statements"
        language="javascript"
        components={conditionalExamples.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
          bestUseCase: item.bestUseCase,
        }))}
        icon={FaCode}
      />

      <BasicPrinting
        id="loops"
        delay={0.9}
        title="Loops"
        language="javascript"
        components={loopExamples.map((item) => ({
          title: item.title,
          desc: item.description,
          examples: item.example,
          output: item.output,
          explanation: item.explanation,
          bestUseCase: item.bestUseCase,
        }))}
        icon={FaSyncAlt}
      />

      <BasicPrinting
        id="switch"
        delay={1.0}
        title="Switch Statements"
        language="javascript"
        components={[
          {
            title: switchExample.title,
            desc: switchExample.description,
            examples: switchExample.example,
            output: switchExample.output,
            explanation: switchExample.explanation,
            bestUseCase: switchExample.bestUseCase,
          },
        ]}
        icon={FaExchangeAlt}
      />
    </CourseContainer>
  );
}
