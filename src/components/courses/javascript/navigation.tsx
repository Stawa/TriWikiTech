import { FaCode } from "react-icons/fa";
import { PiBracketsCurlyDuotone } from "react-icons/pi";
import { TbLambda } from "react-icons/tb";
import { VscOutput } from "react-icons/vsc";

const courses = [
  {
    title: "Basics",
    desc: "Console.log, variables, and data types",
    link: "/courses/javascript/basics",
    icon: (
      <VscOutput className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Control Structures",
    desc: "Conditionals and loops",
    link: "/courses/javascript/control-structures",
    icon: (
      <FaCode className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Functions",
    desc: "Defining and using functions effectively",
    link: "/courses/javascript/functions",
    icon: (
      <TbLambda className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Objects & Arrays",
    desc: "Working with complex data structures",
    link: "/courses/javascript/objects-arrays",
    icon: (
      <PiBracketsCurlyDuotone className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
    ),
  },
  {
    title: "Back to Home",
    desc: "Overview of all JavaScript courses",
    link: "/courses/javascript",
    icon: (
      <FaCode className="text-yellow-600 dark:text-yellow-400 text-2xl sm:text-3xl" />
    ),
  },
];

export default courses;
