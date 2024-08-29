"use client";

import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Image from "next/image";

type Language = "Python" | "JavaScript" | "C" | "C++";

const Quiz = () => {
  const router = useRouter();

  const languages = useMemo(
    () =>
      [
        { name: "Python", icon: "/Python.png" },
        { name: "JavaScript", icon: "/Javascript.png" },
        { name: "C", icon: "/C.png" },
        { name: "C++", icon: "/CPP.png" },
      ] as const,
    [],
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const language = searchParams.get("language");
    if (
      language &&
      (languages.map((l) => l.name) as Language[]).includes(
        language as Language,
      )
    ) {
      router.push(`/quiz/${language}`);
    }
  }, [router, languages]);

  const handleLanguageSelect = (language: Language) => {
    router.push(`/quiz/${language}`);
  };

  const renderLanguageSelection = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {languages.map((lang) => (
        <button
          key={lang.name}
          onClick={() => handleLanguageSelect(lang.name as Language)}
          className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
        >
          <div className="relative w-20 h-20 mb-4 transition-transform duration-300 group-hover:rotate-6">
            <Image
              src={lang.icon}
              alt={lang.name}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-300">
            {lang.name}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-gray-900 dark:text-white">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
            Programming Quiz
          </h1>
          <p className="text-xl text-center mb-8 text-gray-700 dark:text-gray-300">
            Choose a programming language to test your knowledge with our
            interactive quiz!
          </p>
          <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-30 rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
            {renderLanguageSelection()}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
