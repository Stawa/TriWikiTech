"use client";

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

const HighlightCode = ({
  content,
  language,
}: {
  content: string;
  language: string;
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [content]);

  const getLanguageClass = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "javascript":
      case "js":
        return "language-javascript";
      case "python":
      case "py":
        return "language-python";
      case "c":
        return "language-c";
      case "cpp":
      case "c++":
        return "language-cpp";
      default:
        return `language-${lang}`;
    }
  };

  return (
    <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
      <code
        ref={codeRef}
        className={`text-sm text-gray-800 dark:text-gray-200 ${getLanguageClass(language)}`}
      >
        {content}
      </code>
    </pre>
  );
};

export default HighlightCode;
