import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiHash,
  FiType,
  FiToggleRight,
  FiCode,
  FiBox,
  FiList,
  FiRefreshCw,
  FiBookmark,
} from "react-icons/fi";

import Navigation from "~/components/Courses/Navigation";
import HeroSection from "~/components/Courses/Hero";
import TableOfContents from "~/components/Courses/ToC";
import CodeBlock from "~/components/Courses/CodeBlock";

export const JavaScriptVariableTypesMetaData = {
  title: "TriWikiTech | JavaScript Variable Types",
  description:
    "Learn about different variable types in JavaScript and how to use them effectively.",
  image: "/courses/og/javascript_variable-types_hero.png",
  url: "/courses/javascript/variable-types",
  published_time: new Date("2024-11-25"),
  modified_time: new Date("2024-12-31"),
  section: "JavaScript Basics",
  tag: ["JavaScript", "Variables", "Data Types", "Programming"],
  author: ["Stawa"],
};

export function JavaScriptVariableTypes() {
  const [readTime, setReadTime] = useState<number>(0);

  useEffect(() => {
    const pageText = document.body.innerText;
    setReadTime(pageText.length);
  }, []);

  const navigation = {
    previous: {
      href: "/courses/javascript/first-code",
      title: "First Code",
    },
    next: {
      href: "/courses/javascript",
      title: "Back to Course",
    },
  };

  const HeroSectionItems = {
    badge: {
      chapter: 2,
      title: "Variable Types",
    },
    title: {
      main: "Understanding",
      sub: "JavaScript Variables",
    },
    description:
      "Explore the different types of variables in JavaScript, including primitive types and objects. Learn how to declare, initialize, and work with variables effectively in your code.",
    readTime: readTime,
    modified_time: JavaScriptVariableTypesMetaData.modified_time,
  };

  const ToCNavigation = [
    { id: "intro", title: "Introduction", number: "00" },
    { id: "primitive-types", title: "Primitive Types", number: "01" },
    { id: "reference-types", title: "Reference Types", number: "02" },
    { id: "type-conversion", title: "Type Conversion", number: "03" },
    { id: "summary", title: "Summary", number: "04" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section Banner */}
      <HeroSection {...HeroSectionItems} />

      {/* Main Content */}
      <section className="relative w-full bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <TableOfContents navigation={ToCNavigation} />

            <div className="mt-8 lg:mt-0 lg:col-span-9">
              {/* Intro Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                    Hey there! 👋 Ever wondered why JavaScript is so flexible
                    with its data types? Unlike other programming languages that
                    are super strict about their types, JavaScript lets you be
                    more creative! Let's dive into what makes JavaScript's type
                    system unique and awesome.
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
                      JavaScript was created in just 10 days! That's why it has
                      some quirky type behaviors like{" "}
                      <CodeBlock
                        code={`null`}
                        language="javascript"
                        inline={true}
                      />{" "}
                      being an object type. But don't worry - these quirks make
                      JavaScript unique and have actually become useful features
                      that developers love!
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Here's something cool: JavaScript is smart enough to figure
                    out types on its own. When you write{" "}
                    <CodeBlock
                      code={`let score = 42`}
                      language="javascript"
                      inline={true}
                    />
                    , JavaScript knows it's a number. No need to tell it
                    explicitly! This is called "dynamic typing" and it's one of
                    the reasons why JavaScript is so beginner-friendly.
                  </p>

                  <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 mb-10 border border-amber-100/20 dark:border-amber-700/30 shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-400/10 dark:from-amber-400/5 dark:to-orange-400/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-amber-700 dark:text-amber-300 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50">
                        💡
                      </span>
                      Pro Tip!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                      When working with numbers in JavaScript, watch out for the
                      special value{" "}
                      <CodeBlock
                        code={`NaN`}
                        language="javascript"
                        inline={true}
                      />{" "}
                      . It stands for "Not a Number", but fun fact: it's
                      actually considered a number type! Try{" "}
                      <CodeBlock
                        code={`typeof NaN`}
                        language="javascript"
                        inline={true}
                      />{" "}
                      in your console and prepare to be amazed! 😄
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Now, let's talk about arrays and objects - they're like the
                    Swiss Army knives of JavaScript! Objects are so powerful
                    that almost everything in JavaScript is an object behind the
                    scenes. Arrays are actually special types of objects
                    (mind-blown 🤯). That's why you can do awesome things like
                    adding properties to arrays!
                  </p>

                  <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-10 border border-green-100/20 dark:border-green-700/30 shadow-sm">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 dark:from-green-400/5 dark:to-emerald-400/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-green-700 dark:text-green-300 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50">
                        🎮
                      </span>
                      Try This!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                      Open your browser's console and type:{" "}
                      <CodeBlock
                        code={`let arr = [1, 2, 3]; arr.cool = "awesome";
console.log(arr.cool)`}
                        language="javascript"
                        inline={true}
                      />
                      . It works! This is because arrays are objects in
                      disguise. Pretty neat, right? 🎯
                    </p>
                  </div>

                  {/* Primitive Types Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    id="primitive-types"
                    className="mb-16 scroll-mt-24"
                  >
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                          <span className="text-white font-mono text-sm font-semibold">
                            01
                          </span>
                        </span>
                        Primitive Types
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        JavaScript has six primitive data types. These are the
                        most basic data types in JavaScript and are immutable
                        (cannot be changed).
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="relative overflow-hidden rounded-2xl border border-blue-100/20 dark:border-blue-700/50 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/10 group hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-blue-900/5">
                          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] group-hover:bg-grid-slate-200/50 transition-all duration-300"></div>
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 blur-3xl transition-all duration-500"></div>
                          <div className="relative p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                                <FiHash className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                Number
                              </h4>
                            </div>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              Represents both integer and floating-point
                              numbers.
                            </p>
                            <CodeBlock
                              code={`let age = 25;
let price = 99.99;
let temperature = -5;`}
                              language="javascript"
                            />
                          </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-blue-100/20 dark:border-blue-700/50 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/10 group hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-blue-900/5">
                          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] group-hover:bg-grid-slate-200/50 transition-all duration-300"></div>
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 blur-3xl transition-all duration-500"></div>
                          <div className="relative p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                                <FiType className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                String
                              </h4>
                            </div>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              Represents textual data enclosed in quotes.
                            </p>
                            <CodeBlock
                              code={`let name = "John";
let message = 'Hello World';
let template = \`Value: \${price}\`;`}
                              language="javascript"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="relative overflow-hidden rounded-2xl border border-blue-100/20 dark:border-blue-700/50 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/10 group hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-blue-900/5">
                          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] group-hover:bg-grid-slate-200/50 transition-all duration-300"></div>
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 blur-3xl transition-all duration-500"></div>
                          <div className="relative p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                                <FiToggleRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                Boolean
                              </h4>
                            </div>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              Represents logical values: true or false.
                            </p>
                            <CodeBlock
                              code={`let isActive = true;
let isLoggedIn = false;`}
                              language="javascript"
                            />
                          </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-blue-100/20 dark:border-blue-700/50 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/10 group hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-blue-900/5">
                          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] group-hover:bg-grid-slate-200/50 transition-all duration-300"></div>
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 blur-3xl transition-all duration-500"></div>
                          <div className="relative p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                                <FiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                Undefined & Null
                              </h4>
                            </div>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              Special types representing absence of value.
                            </p>
                            <CodeBlock
                              code={`let undefinedVar;  // undefined
let nullVar = null;  // null`}
                              language="javascript"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Reference Types Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    id="reference-types"
                    className="mb-16 scroll-mt-24"
                  >
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                          <span className="text-white font-mono text-sm font-semibold">
                            02
                          </span>
                        </span>
                        Reference Types
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        Reference types are more complex data types that can
                        hold collections of values and more complex entities.
                      </p>

                      <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="relative overflow-hidden rounded-2xl border border-blue-100/20 dark:border-blue-700/50 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/10 group hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-blue-900/5">
                          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] group-hover:bg-grid-slate-200/50 transition-all duration-300"></div>
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 blur-3xl transition-all duration-500"></div>
                          <div className="relative p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                                <FiBox className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                Objects
                              </h4>
                            </div>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              Collections of key-value pairs.
                            </p>
                            <CodeBlock
                              code={`let person = {
  name: "John",
  age: 30,
  isStudent: false
};

// Accessing object properties
console.log(person.name);     // "John"
console.log(person["age"]);   // 30`}
                              language="javascript"
                            />
                          </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-blue-100/20 dark:border-blue-700/50 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/10 group hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-blue-900/5">
                          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] group-hover:bg-grid-slate-200/50 transition-all duration-300"></div>
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 blur-3xl transition-all duration-500"></div>
                          <div className="relative p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                                <FiList className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                Arrays
                              </h4>
                            </div>
                            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              Ordered collections of values.
                            </p>
                            <CodeBlock
                              code={`let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(colors[0]);     // "red"
console.log(numbers[2]);    // 3`}
                              language="javascript"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Type Conversion Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    id="type-conversion"
                    className="mb-16 scroll-mt-24"
                  >
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                          <span className="text-white font-mono text-sm font-semibold">
                            03
                          </span>
                        </span>
                        Type Conversion
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        JavaScript provides several ways to convert between
                        different data types.
                      </p>

                      <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="relative overflow-hidden rounded-2xl border border-blue-100/20 dark:border-blue-700/50 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/10 group hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-blue-900/5">
                          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)] group-hover:bg-grid-slate-200/50 transition-all duration-300"></div>
                          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full group-hover:bg-blue-500/10 blur-3xl transition-all duration-500"></div>
                          <div className="relative p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-300">
                                <FiRefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                                Common Type Conversions
                              </h4>
                            </div>
                            <CodeBlock
                              code={`// String to Number
let str = "123";
let num = Number(str);      // 123
let num2 = parseInt(str);   // 123
let num3 = +str;           // 123

// Number to String
let number = 456;
let str2 = String(number); // "456"
let str3 = number.toString(); // "456"

// Boolean Conversion
let bool = Boolean(1);     // true
let bool2 = Boolean("");   // false
let bool3 = !!0;          // false`}
                              language="javascript"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Summary Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    id="summary"
                    className="mb-16 scroll-mt-24"
                  >
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
                          In this chapter, we covered JavaScript's core data
                          types: numbers for calculations, strings for text, and
                          booleans for logic. We also explored objects and
                          arrays for organizing complex data, and learned how to
                          convert between different types when needed.
                        </p>

                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                          Understanding these types is essential for writing
                          reliable JavaScript code. The next chapter is still in
                          progress and will be available soon. Stay tuned!
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Navigation */}
                  <Navigation navigation={navigation} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
