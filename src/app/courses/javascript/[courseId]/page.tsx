"use client";

import { useParams } from "next/navigation";
import JavaScriptBasics from "@components/courses/javascript/basics";
import JavaScriptFunctions from "@components/courses/javascript/functions";
import JavaScriptObjectsArrays from "@components/courses/javascript/objects-arrays";

const courseComponents = {
  basics: JavaScriptBasics,
  functions: JavaScriptFunctions,
  "objects-and-arrays": JavaScriptObjectsArrays,
};

export default function JavaScriptCourse() {
  const { courseId } = useParams();
  const CourseComponent =
    courseComponents[courseId as keyof typeof courseComponents];
  return <CourseComponent />;
}
