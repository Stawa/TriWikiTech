"use client";

import React, { useEffect, useState } from "react";
import {
  Language,
  LanguageSelector,
  languageDetails,
} from "@components/LanguageSelector";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import { FiDownload } from "react-icons/fi";
import { FaPlay, FaCheck } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { BsClipboard2Fill } from "react-icons/bs";
import { useSearchParams, useRouter } from "next/navigation";
import { CodeEditorWithLineNumbers } from "./code";

const defaultCode: Record<Language, string> = {
  python: `print("Hello from TriWikiTech")\n\n# Add your code here\n\n\n\n\n\n\n\n\n\n\n\n`,
  c: `#include <stdio.h>\n\nint main() {\n    printf("Hello from TriWikiTech");\n    return 0;\n}\n\n// Add your code here\n\n\n\n\n\n\n`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello from TriWikiTech" << std::endl;\n    return 0;\n}\n\n// Add your code here\n\n\n\n\n\n\n`,
  javascript: `console.log("Hello from TriWikiTech");\n\n// Add your code here\n\n\n\n\n\n\n\n\n\n\n\n`,
};

export function Compiler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [code, setCode] = useState(defaultCode.python);
  const [language, setLanguage] = useState<Language>("python");
  const [output, setOutput] = useState("");
  const [runtime, setRuntime] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const lang = searchParams.get("lang") as Language;
    if (lang && lang in defaultCode) {
      setLanguage(lang);
      setCode(defaultCode[lang]);
    }
    setPageLoading(false);
  }, [searchParams]);

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage !== language && code !== defaultCode[language]) {
      const confirmChange = window.confirm(
        "Changing the language will clear the current code. Are you sure?",
      );
      if (!confirmChange) return;
    }

    router.push(`/compiler?lang=${newLanguage}`);
    setLanguage(newLanguage);
    setCode(defaultCode[newLanguage]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");
    setRuntime("");

    try {
      const response = await fetch("/api/execute/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          language,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      setOutput(data.output);
      setRuntime(data.runtime);
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput("Error executing code");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `main.${languageDetails[language].fileFormat}`;
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        {pageLoading && (
          <div className="absolute inset-0 bg-opacity-75 z-10 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="h-1 w-1/3 bg-indigo-600 rounded-full animate-pulse"></div>
            <p className="text-indigo-400 mt-4 font-semibold">Loading...</p>
          </div>
        )}

        <LanguageSelector
          selectedLanguage={language}
          onLanguageChange={handleLanguageChange}
        />

        <div className="flex flex-col flex-1 p-2 sm:p-4 md:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <span className="text-xl font-bold text-indigo-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-md mb-2 sm:mb-0">
              main.{languageDetails[language].fileFormat}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleSubmit}
                className={`flex items-center justify-center py-2 px-4 rounded-md text-white transition-all duration-300 ${
                  loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                disabled={loading}
              >
                {loading ? (
                  <ImSpinner2 className="mr-0 md:mr-2 animate-spin" />
                ) : (
                  <FaPlay className="sm:mr-2" />
                )}
                <span className="hidden sm:inline">
                  {loading ? "Running" : "Run"}
                </span>
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                {copied ? (
                  <FaCheck className="md:mr-2" />
                ) : (
                  <BsClipboard2Fill className="sm:mr-2" />
                )}
                <span className="hidden sm:inline">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
              >
                <FiDownload className="sm:mr-2" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
            <CodeEditorWithLineNumbers
              language={language}
              code={code}
              setCode={setCode}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-indigo-400 mb-2 sm:mb-0">
                Output
              </h3>
              {runtime && (
                <pre className="font-mono text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md border border-gray-400 dark:border-gray-600">
                  Runtime: {runtime}
                </pre>
              )}
            </div>
            {output && (
              <pre className="whitespace-pre-wrap break-words text-sm mt-2 bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto border border-gray-400 dark:border-gray-600">
                <code>{output}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
