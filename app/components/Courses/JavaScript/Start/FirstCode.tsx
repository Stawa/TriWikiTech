import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCode, FiBookmark, FiCheckCircle } from "react-icons/fi";

import Navigation from "~/components/Courses/Navigation";
import HeroSection from "~/components/Courses/Hero";
import TableOfContents from "~/components/Courses/ToC";
import CodeBlock from "~/components/Courses/CodeBlock";

export const FirstCodeMetaData = {
  title: "TriWikiTech | First JavaScript Code",
  description:
    "Write your first JavaScript code and learn the basics of programming.",
  image: "/courses/og/javascript_first-code_hero.png",
  url: "/courses/javascript/first-code",
  published_time: new Date("2024-11-25"),
  modified_time: new Date("2024-12-07"),
  section: "JavaScript Basics",
  tag: ["JavaScript", "Beginner", "Programming"],
  author: ["Stawa"],
};

export function FirstJavaScriptCode() {
  const [readTime, setReadTime] = useState<number>(0);

  useEffect(() => {
    const pageText = document.body.innerText;
    setReadTime(pageText.length);
  }, []);

  const navigation = {
    previous: {
      href: "/courses/javascript/setup",
      title: "Environment Setup",
    },
    next: {
      href: "/courses/javascript/variables",
      title: "Variables & Data Types",
    },
  };

  const HeroSectionItems = {
    badge: {
      chapter: 1,
      title: "First JavaScript Code",
    },
    title: {
      main: "Write Your",
      sub: "First JavaScript Code",
    },
    description:
      "Begin your JavaScript programming journey by writing your first line of code. Learn the basics of JavaScript syntax and how to create a simple program that prints a message to the console.",
    readTime: readTime,
    modified_time: FirstCodeMetaData.modified_time,
  };

  const ToCNavigation = [
    { id: "intro", title: "Introduction", number: "00" },
    {
      id: "first-code",
      title: "First Code",
      number: "01",
    },
    { id: "summary", title: "Summary", number: "02" },
  ];

  // Count words
  useEffect(() => {
    const pageText = document.body.innerText;
    console.log(`Total words: ${pageText.length}`);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section Banner */}
      <HeroSection {...HeroSectionItems} />

      {/* Main Content */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <TableOfContents navigation={ToCNavigation} />

            <div className="mt-8 lg:mt-0 lg:col-span-9">
              {/* Intro Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="intro"
                className="mb-16 scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-white font-mono text-sm font-semibold">
                        00
                      </span>
                    </span>
                    Introduction
                  </h2>

                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Hey there! 👋 Ready to write your first line of JavaScript
                    code? You're about to embark on an exciting journey into the
                    world of programming. Whether you're a complete beginner or
                    coming from another programming language, JavaScript is a
                    fantastic place to start!
                  </p>

                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-10 border border-blue-100/20 dark:border-blue-700/30 shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 dark:from-blue-400/5 dark:to-indigo-400/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                        🤔
                      </span>
                      Did You Know?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                      JavaScript was originally created for Netscape Navigator
                      in 1995! It was designed to make web pages interactive,
                      and today it's one of the most popular programming
                      languages in the world. In fact, over 98% of websites use
                      JavaScript in some way!
                    </p>
                  </div>

                  <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 mb-10 border border-amber-100/20 dark:border-amber-700/30 shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-400/10 dark:from-amber-400/5 dark:to-orange-400/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-amber-700 dark:text-amber-300 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50">
                        💡
                      </span>
                      Pro Tip!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                      Before we begin, make sure you have a text editor ready.
                      While you can use any text editor, we recommend using
                      Visual Studio Code, which comes with great JavaScript
                      support out of the box. Don't worry about setting up a
                      complex development environment yet - we'll start with the
                      basics!
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-8 mb-8 border border-blue-100 dark:border-blue-800 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                          <FiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          What You'll Learn
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-0">
                          In this chapter, you'll write your first JavaScript
                          code using the{" "}
                          <CodeBlock
                            code="console.log()"
                            language="javascript"
                            inline={true}
                          />{" "}
                          function. Don't worry if that sounds complicated -
                          we'll break it down step by step!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* First Code Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="first-code"
                className="mb-16 scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-white font-mono text-sm font-semibold">
                        01
                      </span>
                    </span>
                    First Code
                  </h2>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-8 mb-8 border border-blue-100 dark:border-blue-800 shadow-sm">
                    <CodeBlock
                      code="console.log('Hello, World!');"
                      language="javascript"
                    />
                    <div className="mt-4 flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                          <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-0">
                        To begin, open your text editor or code editor and
                        create a new file. You can name the file anything you
                        like, but it's common to name it something like
                        "index.js" or "main.js" to indicate that it contains the
                        main entry point of your JavaScript code.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8">
                    <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-2 border-blue-100 dark:border-blue-900/40 hover:border-blue-200 dark:hover:border-blue-800/40">
                      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src="/courses/javascript/NewFile_JS.png"
                          alt="Creating a new JavaScript file"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Create a New JavaScript File
                          </h4>
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-blue-100 dark:border-blue-900/40">
                            Step 1
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          Begin by creating a new file with the .js extension in
                          your preferred code editor. This will be where you
                          write your first JavaScript code.
                        </p>
                      </div>
                    </div>
                    <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-2 border-blue-100 dark:border-blue-900/40 hover:border-blue-200 dark:hover:border-blue-800/40">
                      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src="/courses/javascript/FirstCode_JS.png"
                          alt="Writing Hello World in JavaScript"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Writing Hello World
                          </h4>
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-blue-100 dark:border-blue-900/40">
                            Step 2
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          Write your first JavaScript program that prints
                          "Hello, World!" to the console. This is a traditional
                          starting point for learning any programming language.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 space-y-6 sm:space-y-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white pb-2 border-b-2 border-blue-500 dark:border-blue-400 inline-block">
                      Understanding the Code
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            1
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                            console.log Function
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                            The console.log() function is used to output
                            messages to the console. It's commonly used for
                            debugging and learning purposes.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            2
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
                            String Output
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                            "Hello, World!" is a string (text) that will be
                            displayed. In JavaScript, strings are enclosed in
                            either single ('') or double ("") quotes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border-2 border-blue-100 dark:border-blue-900/40 mb-8">
                    <div className="aspect-video">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        poster="/courses/javascript/Thumbnail_FirstCode_Terminal.png"
                      >
                        <source
                          src="/courses/javascript/FirstCode_Terminal.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="p-4 sm:p-6 bg-white dark:bg-gray-900">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                          Running Your First JavaScript Code
                        </h3>
                        <span className="inline-flex px-2 sm:px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-full">
                          Demo
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
                        Watch this demonstration to see how to execute your code
                        in the terminal. You'll learn the basic workflow of
                        writing and running JavaScript programs.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>
                          Tip: Make sure Node.js is installed before running the
                          code
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Summary Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="summary"
                className="scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-100/20 dark:border-purple-700/30 shadow-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full transform translate-x-32 -translate-y-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full transform -translate-x-32 translate-y-32"></div>

                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-500 dark:to-pink-600 shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30">
                          <FiBookmark className="w-6 h-6 text-white" />
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300">
                          Summary
                        </span>
                      </h2>

                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        In this chapter, we covered how to write your first
                        JavaScript code using console.log(), learned about basic
                        JavaScript syntax and structure, and explored how to run
                        JavaScript code in your browser's console.
                      </p>

                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                        This is just the beginning of your JavaScript journey!
                        In the next chapter, we'll dive deeper into variables
                        and data types, which are fundamental building blocks of
                        JavaScript programming.
                      </p>

                      <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3">
                          <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            How to write your first JavaScript code using
                            console.log()
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            Understanding basic JavaScript syntax and structure
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            How to run JavaScript code in your browser's console
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="mt-16">
                <Navigation navigation={navigation} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
