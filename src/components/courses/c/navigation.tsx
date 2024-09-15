import { FaLightbulb, FaCode, FaMemory, FaFileAlt } from "react-icons/fa";
import { TbPointer } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";

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
    desc: "Variables, data types, and control structures in C",
    link: "/courses/c/basics",
    icon: (
      <FaCode className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl" />
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
