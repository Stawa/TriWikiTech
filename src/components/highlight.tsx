"use client";

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

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

  return (
    <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
      <code
        ref={codeRef}
        className={`text-sm text-gray-800 dark:text-gray-200 language-${language}`}
      >
        {content}
      </code>
    </pre>
  );
};

export default HighlightCode;
