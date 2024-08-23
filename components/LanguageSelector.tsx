import React from "react";
import Image from 'next/image';

export type Language = "python" | "c" | "cpp" | "javascript";

export const languageDetails: Record<
  Language,
  { icon: string; padding: string; fileFormat: string; available: boolean }
> = {
  python: {
    icon: "/Python.png",
    padding: "p-2.5",
    fileFormat: "py",
    available: true,
  },
  c: { icon: "/C.png", padding: "p-2.5", fileFormat: "c", available: true },
  cpp: {
    icon: "/CPP.png",
    padding: "p-1.5",
    fileFormat: "cpp",
    available: true,
  },
  javascript: {
    icon: "/Javascript.png",
    padding: "p-2.5",
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
    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-5 px-4 sm:px-12">
      {Object.keys(languageDetails).map((language) => {
        const languageIcon = languageDetails[language as Language].icon;
        const paddingImage = languageDetails[language as Language].padding;
        const isAvailable = languageDetails[language as Language].available;

        return (
          <div
            key={language}
            onClick={() => {
              if (isAvailable) {
                onLanguageChange(language as Language);
              }
            }}
            className={`h-16 flex items-center justify-center cursor-pointer rounded-t-md overflow-hidden border-t-4 border-l-4 border-r-4 ${
              language === selectedLanguage
                ? "border-lime-500"
                : "border-neutral-500"
            } xs:border-b-4 ${
              !isAvailable ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <Image
              src={languageIcon}
              alt={language}
              className={`${paddingImage} h-full bg-neutral-800`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
