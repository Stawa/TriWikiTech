"use client";

import {
  FaCode,
  FaExchangeAlt,
  FaQuestionCircle,
  FaRedoAlt,
  FaSyncAlt,
} from "react-icons/fa";
import { PiLightbulbFilamentFill } from "react-icons/pi";

import {
  Single,
  type SingleItemProps,
} from "@components/courses/template/single";
import CourseContainer from "@components/courses/container";
import CourseInfo from "@components/courses/template/info";
import Courses from "@components/courses/c/navigation";
import Topics from "@components/courses/template/topics";

const topics = [
  {
    title: "If Statements",
    desc: "Learn how to make decisions in your code using if statements",
    id: "if-statements",
    icon: FaQuestionCircle,
  },
  {
    title: "Switch Statements",
    desc: "Explore multi-way decision making with switch statements",
    id: "switch-statements",
    icon: FaExchangeAlt,
  },
  {
    title: "For Loops",
    desc: "Master the art of iteration with for loops",
    id: "for-loops",
    icon: FaSyncAlt,
  },
  {
    title: "While Loops",
    desc: "Understand and implement while loops for conditional iteration",
    id: "while-loops",
    icon: FaRedoAlt,
  },
];

const ifStatements: SingleItemProps[] = [
  {
    title: "Basic If Statement",
    description: "The simplest form of decision making in C",
    explanation:
      "An if statement allows you to execute a block of code only if a certain condition is true.",
    example: `#include <stdio.h>

int main() {
    int x = 10;
    if (x > 5) {
        printf("x is greater than 5\\n");
    }
    return 0;
}`,
    output: "x is greater than 5",
  },
  {
    title: "If-Else Statement",
    description: "Make decisions between two alternatives",
    explanation:
      "An if-else statement allows you to execute one block of code if the condition is true, and another if it's false.",
    example: `#include <stdio.h>

int main() {
    int age = 20;
    if (age >= 18) {
        printf("You are an adult\\n");
    } else {
        printf("You are a minor\\n");
    }
    return 0;
}`,
    output: "You are an adult",
  },
];

const switchStatements: SingleItemProps[] = [
  {
    title: "Basic Switch Statement",
    description: "Multi-way decision making using switch",
    explanation:
      "A switch statement allows you to select one of many code blocks to be executed.",
    example: `#include <stdio.h>

int main() {
    int day = 4;
    switch (day) {
        case 1:
            printf("Monday");
            break;
        case 2:
            printf("Tuesday");
            break;
        case 3:
            printf("Wednesday");
            break;
        case 4:
            printf("Thursday");
            break;
        case 5:
            printf("Friday");
            break;
        default:
            printf("Weekend");
    }
    return 0;
}`,
    output: "Thursday",
  },
];

const forLoops: SingleItemProps[] = [
  {
    title: "Basic For Loop",
    description: "Iterate a specific number of times",
    explanation:
      "A for loop repeats a block of code a specified number of times.",
    example: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("%d ", i);
    }
    return 0;
}`,
    output: "0 1 2 3 4",
  },
];

const whileLoops: SingleItemProps[] = [
  {
    title: "While Loop",
    description: "Repeat a block of code while a condition is true",
    explanation:
      "A while loop continues to execute a block of code as long as a specified condition is true.",
    example: `#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("%d ", i);
        i++;
    }
    return 0;
}`,
    output: "0 1 2 3 4",
  },
  {
    title: "Do-While Loop",
    description:
      "Execute a block of code at least once, then repeat while a condition is true",
    explanation:
      "A do-while loop is similar to a while loop, but it executes the code block at least once before checking the condition.",
    example: `#include <stdio.h>

int main() {
    int i = 0;
    do {
        printf("%d ", i);
        i++;
    } while (i < 5);
    return 0;
}`,
    output: "0 1 2 3 4",
  },
];

export default function CControlStructures() {
  return (
    <CourseContainer
      authorInfo={{ date: "2024-09-15", title: "C Control Structures" }}
      courses={Courses}
      currentCourseLink="/courses/c/control-structures"
    >
      <CourseInfo
        title="Course Overview"
        id="course-overview"
        delay={0.3}
        description="Dive into the world of C control structures. Master the art of decision-making with if statements and switch cases, and harness the power of iteration with for and while loops. These fundamental concepts are crucial for creating dynamic and efficient C programs."
        icon={FaCode}
      />

      <Topics id="topics" delay={0.5} topics={topics} />

      <CourseInfo
        title="Why Control Structures Matter"
        id="why-control-structures-matter"
        delay={0.7}
        description="Understanding control structures is essential for any C programmer. These concepts form the backbone of program flow and logic, enabling you to create sophisticated, efficient, and powerful C programs that can handle complex decision-making and repetitive tasks."
        icon={PiLightbulbFilamentFill}
      />

      <Single
        title="If Statements in C"
        id="if-statements"
        delay={0.8}
        components={ifStatements}
        language="c"
        icon={FaQuestionCircle}
      />

      <Single
        title="Switch Statements in C"
        id="switch-statements"
        delay={1.0}
        components={switchStatements}
        language="c"
        icon={FaExchangeAlt}
      />

      <Single
        title="For Loops in C"
        id="for-loops"
        delay={1.2}
        components={forLoops}
        language="c"
        icon={FaSyncAlt}
      />

      <Single
        title="While Loops in C"
        id="while-loops"
        delay={1.4}
        components={whileLoops}
        language="c"
        icon={FaRedoAlt}
      />
    </CourseContainer>
  );
}
