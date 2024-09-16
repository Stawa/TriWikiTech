import {
  FaLightbulb,
  FaCode,
  FaMemory,
  FaFileAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { TbPointer } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { AiOutlineConsoleSql } from "react-icons/ai";

const courses = [
  {
    title: "Introduction",
    desc: "Get started with C programming fundamentals",
    link: "/courses/c/",
    icon: (
      <FaLightbulb className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Basics",
    desc: "Variables, data types, and basic input/output operations",
    link: "/courses/c/basics",
    icon: (
      <AiOutlineConsoleSql className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Control Structures",
    desc: "Conditionals and loops in C",
    link: "/courses/c/control-structures",
    icon: (
      <FaProjectDiagram className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Functions",
    desc: "Defining and using functions in C",
    link: "/courses/c/functions",
    icon: (
      <FaFileAlt className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Pointers",
    desc: "Understanding and working with pointers in C",
    link: "/courses/c/pointers",
    icon: (
      <TbPointer className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Memory Management",
    desc: "Dynamic memory allocation and management in C",
    link: "/courses/c/memory-management",
    icon: (
      <FaMemory className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Advanced Topics",
    desc: "Structs, file I/O, and preprocessor directives",
    link: "/courses/c/advanced",
    icon: (
      <GiProcessor className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "C Courses",
    desc: "Overview of all C programming courses",
    link: "/courses/c",
    icon: (
      <FaCode className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
    ),
  },
];

export default courses;
