"use client";

import CourseContainer from "@main/src/app/courses/main";
import Courses from "@components/courses/c/navigation";

const header = {
  title: "C Programming",
  description:
    "Master the foundation of modern computing through C programming",
  explanation:
    "C is a powerful, efficient, and flexible programming language that forms the backbone of many modern technologies. It provides low-level access to memory and hardware, making it ideal for system programming and developing high-performance applications.",
  whyLearn:
    "Learning C provides a deep understanding of how computers work at a low level. It's essential for system programming, embedded systems, and developing high-performance applications. C's influence on other languages makes it an excellent foundation for any programmer.",
};

const features = [
  "Low-level Memory Access",
  "Efficient Performance",
  "Portability",
  "Extensive Standard Library",
  "Structured Programming",
  "Foundation for Other Languages",
];

export default function CCourses() {
  return (
    <CourseContainer header={header} features={features} courses={Courses} />
  );
}
