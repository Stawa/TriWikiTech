"use client";

import CourseContainer from "@main/src/app/courses/main";
import Courses from "@components/courses/javascript/navigation";

const header = {
  title: "JavaScript Mastery",
  description: "Unlock the power of modern web development",
  explanation:
    "JavaScript is a versatile, high-level programming language essential for creating dynamic and interactive web experiences. It powers modern web development, enabling complex features and responsive interfaces.",
  whyLearn:
    "As one of the most in-demand programming languages, JavaScript opens doors to countless opportunities in web development. Master JavaScript to create cutting-edge applications and stay at the forefront of technology.",
};

const features = [
  "Interactive UIs",
  "Asynchronous Operations",
  "DOM Manipulation",
  "Client-side Validation",
  "Animations & Effects",
  "Full-stack Development",
];

export default function JavaScriptCourses() {
  return (
    <CourseContainer header={header} features={features} courses={Courses} />
  );
}
