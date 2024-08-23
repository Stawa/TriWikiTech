import React, { Suspense } from "react";
import { Compiler } from "./main";

export const metadata = {
  title: "Code Compiler",
  description:
    "Try out your code directly in our Code Compiler on TriWikiTech! Supports multiple programming languages and provides real-time output.",
};

export default function CompilerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Compiler />
    </Suspense>
  );
}
