import React from "react";
import Image from "next/image";

export type Language = "python" | "c" | "cpp" | "javascript";

export const languageDetails: Record<
  Language,
  { icon: string; color: string; fileFormat: string; available: boolean }
> = {
  python: {
    icon: "/Python.png",
    color: "#4B8BBE",
    fileFormat: "py",
    available: true,
  },
  c: {
    icon: "/C.png",
    color: "#A8B9CC",
    fileFormat: "c",
    available: true,
  },
  cpp: {
    icon: "/CPP.png",
    color: "#00599C",
    fileFormat: "cpp",
    available: true,
  },
  javascript: {
    icon: "/Javascript.png",
    color: "#F7DF1E",
    fileFormat: "js",
    available: true,
  },
};

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 mx-6">
      {Object.entries(languageDetails).map(([language, details]) => (
        <button
          key={language}
          onClick={() =>
            details.available && onLanguageChange(language as Language)
          }
          className={`
            relative group flex items-center justify-center w-16 h-16 rounded-lg 
            transition-all duration-300 ease-in-out
            border-2
            ${
              details.available
                ? `hover:bg-opacity-80 hover:shadow-lg hover:scale-105 
                 ${
                   language === selectedLanguage
                     ? `bg-opacity-100 shadow-md scale-105 border-gray-800 dark:border-white`
                     : `bg-opacity-50 border-gray-300 dark:border-gray-600`
                 }`
                : `opacity-50 cursor-not-allowed border-gray-300 dark:border-gray-400`
            }
          `}
          style={{ backgroundColor: `${details.color}1A` }}
        >
          <Image
            src={details.icon}
            alt={language}
            width={40}
            height={40}
            className="transition-all duration-300 ease-in-out group-hover:scale-110"
          />
          {language === selectedLanguage && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 dark:bg-white rounded-full shadow-md" />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
