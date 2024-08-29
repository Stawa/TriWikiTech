import React from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import { useTheme } from "next-themes";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism-solarizedlight.css";

const highlightWithPrism = (code: string, language: string) => {
  return Prism.highlight(code, Prism.languages[language], language);
};

export const CodeEditorWithLineNumbers: React.FC<{
  language: string;
  code: string;
  setCode: (code: string) => void;
}> = ({ language, code, setCode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const lineNumbers = code
    .split("\n")
    .map((_, index) => index + 1)
    .join("\n");

  return (
    <div className="relative flex flex-1 bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full">
      <div
        className="border-r border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 text-right px-4 py-4 select-none"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          lineHeight: "1.6",
        }}
      >
        <pre>{lineNumbers}</pre>
      </div>

      <div className="flex-1 overflow-auto h-full">
        <Editor
          autoFocus={true}
          value={code}
          onValueChange={setCode}
          highlight={(code) => highlightWithPrism(code, language)}
          padding={16}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: "transparent",
            color: isDarkMode ? "#e4e4e4" : "#333",
            lineHeight: "1.6",
            height: "100%",
            width: "100%",
          }}
          textareaClassName="focus:outline-none h-full w-full"
        />
      </div>
    </div>
  );
};
