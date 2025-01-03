import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
import { FiCopy, FiCheck, FiCode } from "react-icons/fi";

interface CodeBlockProps {
  code: string;
  language: string;
  inline?: boolean;
}

const CodeBlock = ({ code, language, inline = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (inline) {
    return (
      <code className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 text-sm font-mono border border-gray-200 dark:border-gray-700">
        {code}
      </code>
    );
  }

  return (
    <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <FiCode className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {language.charAt(0).toUpperCase() + language.slice(1)}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          {copied ? (
            <FiCheck className="w-4 h-4" />
          ) : (
            <FiCopy className="w-4 h-4" />
          )}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      {/* Code Content */}
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="p-0 m-0 overflow-x-auto"
            style={{ ...style, background: "rgb(30, 30, 30)" }}
          >
            <div className="relative">
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className="flex hover:bg-gray-800/50 transition-colors"
                >
                  <span className="sticky left-0 inline-block w-12 px-3 py-1.5 select-none text-gray-500 text-right border-r border-gray-700 bg-[rgb(30,30,30)]">
                    {i + 1}
                  </span>
                  <span className="px-4 py-1.5">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
