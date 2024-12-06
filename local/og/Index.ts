import { CourseOpenGraph, IndexOpenGraph } from "local/og/JavaScript";

export const OpenGraphs = {
  Index: {
    og: IndexOpenGraph(),
    type: "JS",
  },
  Setup: {
    og: CourseOpenGraph(
      "0",
      "Environment Setup",
      "Setting Up Your",
      "JavaScript Environment",
      "A comprehensive guide to setting up a professional JavaScript development environment. Follow these steps to create an optimal workspace for learning and building JavaScript applications.",
      "December 06, 2024"
    ),
    type: "JS",
  },
  FirstCode: {
    og: CourseOpenGraph(
      "1",
      "Getting Started",
      "Write Your First",
      "JavaScript Code",
      "Begin your JavaScript journey by writing and understanding simple programs. Learn the fundamentals of syntax, variables, and output through hands-on examples.",
      "December 06, 2024"
    ),
    type: "JS",
  },
};
