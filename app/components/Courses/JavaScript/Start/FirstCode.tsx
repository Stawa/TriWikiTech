import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { CourseMeta } from "~/types/course";
import Navigation from "../../Navigation";

export const FirstCodeMetaData: CourseMeta = {
  title: "TriWikiTech | First JavaScript Code",
  description:
    "Write your first JavaScript code and learn the basics of programming.",
  image: "/courses/og/FirstCode_JS.png",
  url: "/courses/javascript/first-code",
  published_time: new Date("2024-11-25"),
  modified_time: new Date("2024-12-02"),
  section: "JavaScript Basics",
  tag: ["JavaScript", "Beginner", "Programming"],
  author: ["Stawa"],
};

export function FirstJavaScriptCode() {
  const navigation = {
    previous: {
      href: "/courses/javascript/setup",
      title: "Environment Setup",
    },
    next: {
      href: "/courses/javascript/variables",
      title: "Variables & Data Types",
    },
    overview: {
      href: "/courses/javascript",
      title: "JavaScript Overview",
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_2px,transparent_2px)] bg-[length:30px_30px] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center mb-6 md:mb-8 px-4 py-2 md:px-6 md:py-3 rounded-full bg-blue-50/80 dark:bg-blue-900/50 shadow-lg backdrop-blur-sm">
              <SiJavascript className="text-blue-500 dark:text-blue-400 mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-300">
                Chapter 1: Getting Started
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8 leading-tight">
              Write Your First
              <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                JavaScript Code
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
              Begin your JavaScript journey by writing and understanding simple
              programs. Learn the fundamentals of syntax, variables, and output
              through hands-on examples.
            </p>

            <div className="flex justify-center">
              <div className="flex items-center gap-4 px-6 py-3 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-3">
                  <img
                    alt="Author avatar"
                    width="460"
                    height="460"
                    decoding="async"
                    className="rounded-full h-8 w-8 ring-2 ring-blue-500/20 dark:ring-blue-400/20"
                    src="https://avatars.githubusercontent.com/u/69102292?v=4"
                  />
                  <a
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Stawa"
                  >
                    Stawa
                  </a>
                </div>
                <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
                <time
                  dateTime="2024-12-02"
                  title="Written on December 2, 2024"
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  December 2, 2024
                </time>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-blue-500 dark:border-blue-400 inline-block">
                  Table of Contents
                </h3>
                <nav className="space-y-4">
                  <a
                    href="#intro"
                    className="group flex items-center py-3 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <span className="mr-3 text-blue-500 dark:text-blue-400 font-mono text-sm">
                      00
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      Introduction
                    </span>
                  </a>
                  <a
                    href="#first-code"
                    className="group flex items-center py-3 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <span className="mr-3 text-blue-500 dark:text-blue-400 font-mono text-sm">
                      01
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      Creating Your First JavaScript Code
                    </span>
                  </a>
                  <a
                    href="#summary"
                    className="group flex items-center py-3 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <span className="mr-3 text-blue-500 dark:text-blue-400 font-mono text-sm">
                      02
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      Summary
                    </span>
                  </a>
                </nav>
              </div>
            </div>

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
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Are you ready to dive into the world of JavaScript? In this
                    chapter, we'll introduce you to the basics of programming
                    and provide you with the tools to write your very first
                    JavaScript code. Whether you're a beginner or an experienced
                    developer, this chapter is designed to help you get started
                    in the exciting world of JavaScript programming.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                    Before we begin, have you prepared a text editor or a code
                    editor that you'll use to write your JavaScript code? It's
                    important to choose a text editor or code editor that
                    supports JavaScript syntax highlighting and indentation to
                    make your coding experience enjoyable and productive. You
                    can checkout previous chapters to learn more about setting
                    up your text editor or code editor.
                  </p>
                </div>
              </motion.div>

              {/* First Code Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                    Creating Your First JavaScript Code
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    To begin, open your text editor or code editor and create a
                    new file. You can name the file anything you like, but it's
                    common to name it something like "index.js" or "main.js" to
                    indicate that it contains the main entry point of your
                    JavaScript code.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="rounded-b-xl overflow-hidden border border-blue-200 dark:border-blue-800">
                      <img
                        src="/courses/NewFile_JS.png"
                        alt="Creating a new JavaScript file"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          Creating a New JavaScript File
                        </h4>
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          Start by creating a new file with a .js extension in
                          your preferred code editor. This will be the
                          foundation for your JavaScript code.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-b-xl overflow-hidden border border-blue-200 dark:border-blue-800">
                      <img
                        src="/courses/FirstCode_JS.png"
                        alt="Writing Hello World in JavaScript"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          Writing Hello World
                        </h4>
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          Write a simple JavaScript program that prints "Hello,
                          World!" to the console.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Before we run the code, i'll explain what the code is doing.
                    The code is a simple program that prints "Hello World" to
                    the console. The "console.log" function is used to print a
                    message to the console. In this case, "Hello World" is the
                    message that will be printed to the console. You can change
                    the message to whatever you want and experiment with it.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                    Once you've written the code, save the file and run it in
                    your text editor or code editor. You can run the code by
                    pressing the "Run" button or by using a command line
                    interface (CLI) tool like Node.js.
                  </p>
                  <div className="mt-6 mb-8">
                    <div className="rounded-lg overflow-hidden shadow-md border border-blue-200 dark:border-blue-800 max-w-lg">
                      <video
                        className="w-full h-auto"
                        controls
                        poster="/courses/Thumbnail_FirstCode_Terminal.png"
                      >
                        <source
                          src="/courses/FirstCode_Terminal.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
                          Running Your First JavaScript Code
                          <span className="ml-3 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300 border border-blue-300 dark:border-blue-600 rounded-full">
                            Local
                          </span>
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          Watch this video to see how to execute your code in
                          the terminal and take your first steps in JavaScript
                          programming.
                        </p>
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
                transition={{ duration: 0.6, delay: 0.4 }}
                id="summary"
                className="scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-white font-mono text-sm font-semibold">
                        03
                      </span>
                    </span>
                    Summary
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    In this chapter, we've learned to write our very first
                    JavaScript code and execute it in the terminal. We've also
                    introduced the concept of a text editor or code editor that
                    supports JavaScript syntax highlighting and indentation. The
                    console.log function is used to print a message to the
                    console, and you can change the message to whatever you
                    want.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Great job! You've successfully created your first JavaScript
                    code and executed it in the terminal. This is the first step
                    towards mastering the world of JavaScript programming. Now,
                    it's time to move on to the next chapter to learn more
                    advanced topics and techniques.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Navigation navigation={navigation} />
        </div>
      </section>
    </div>
  );
}
