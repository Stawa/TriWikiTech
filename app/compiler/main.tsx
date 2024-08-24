"use client";

import React, { useEffect, useState } from "react";
import {
  Language,
  LanguageSelector,
  languageDetails,
} from "@default/components/LanguageSelector";
import Footer from "@default/components/Footer";
import Navbar from "@default/components/Navbar";
import { FiDownload } from "react-icons/fi";
import { FaPlay, FaCheck } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { BsClipboard2Fill } from "react-icons/bs";
import { useSearchParams, useRouter } from "next/navigation";
import { CodeEditorWithLineNumbers } from "./code";

const defaultCode: Record<Language, string> = {
  python: `print("Hello from TriWikiTech") `,
  c: `#include <stdio.h>\n\nint main() {\n    printf("Hello from TriWikiTech"); \n    return 0;\n}`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello from TriWikiTech" << std::endl; \n    return 0;\n}`,
  javascript: `console.log("Hello from TriWikiTech"); `,
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

    try {
      const response = await fetch("https://triwikitech.my.id/api/execute/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setOutput(data.output || "No output");
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
      <div className="w-full flex flex-col min-h-screen pb-16 relative">
        {pageLoading && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 z-10 flex flex-col items-center justify-center">
            <div className="h-1 w-1/2 bg-blue-600 rounded animate-pulse"></div>
            <p className="text-white mt-4">Loading...</p>
          </div>
        )}

        <LanguageSelector
          selectedLanguage={language}
          onLanguageChange={handleLanguageChange}
        />

        <div className="flex flex-col flex-1 p-4 border-4 border-gray-600 bg-gray-900 text-white">
          <div className="flex justify-between items-center mb-2 border-b-4 border-gray-600 pb-2">
            <span className="text-lg font-semibold">
              main.{languageDetails[language].fileFormat}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleSubmit}
                className={`flex items-center py-1 px-3 rounded text-white ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={loading}
              >
                {loading ? <ImSpinner2 className="animate-spin" /> : <FaPlay />}
                <div className="hidden sm:inline ml-2">
                  {loading ? "Running" : "Run"}
                </div>
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center bg-gray-600 hover:bg-gray-700 text-white py-1 px-3 rounded"
              >
                {copied ? <FaCheck /> : <BsClipboard2Fill />}
                <div className="hidden sm:inline ml-2">
                  {copied ? "Copied" : "Copy"}
                </div>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded"
              >
                <FiDownload />
                <div className="hidden sm:inline ml-2">Download</div>
              </button>
            </div>
          </div>

          <CodeEditorWithLineNumbers
            language={language}
            code={code}
            setCode={setCode}
          />
        </div>

        <div className="w-full p-4 bg-gray-800 text-white border-b-4 border-l-4 border-r-4 border-gray-600 overflow-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Output</h3>
            {runtime && (
              <pre className="font-bold ml-4 px-2 bg-gray-900 rounded">
                Runtime: {runtime}
              </pre>
            )}
          </div>
          {output && (
            <pre className="whitespace-pre-wrap break-words text-sm mt-2">
              <code className="block p-4 bg-gray-900 rounded">{output}</code>
            </pre>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
