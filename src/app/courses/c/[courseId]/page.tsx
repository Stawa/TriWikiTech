"use client";

import { useParams } from "next/navigation";
import CBasics from "@components/courses/c/basics";
import CFunctions from "@components/courses/c/functions";
import CPointers from "@components/courses/c/pointers";
import NotFound from "@default/app/404";
import CMemoryManagement from "@components/courses/c/memory-management";
import CAdvanced from "@components/courses/c/advanced";
import CControlStructures from "@components/courses/c/control-structures";

const courseComponents = {
  basics: CBasics,
  "control-structures": CControlStructures,
  functions: CFunctions,
  pointers: CPointers,
  "memory-management": CMemoryManagement,
  advanced: CAdvanced,
};

export default function CCourse() {
  const { courseId } = useParams();
  const CourseComponent =
    courseComponents[courseId as keyof typeof courseComponents];

  if (!CourseComponent) {
    return <NotFound />;
  }

  return <CourseComponent />;
}
