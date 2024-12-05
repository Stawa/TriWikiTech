import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaCode,
} from "react-icons/fa";
import { SiVisualstudiocode, SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";
import Navigation from "../../Navigation";

export const SetupMetaData = {
  title: "TriWikiTech | JavaScript Setup",
  description:
    "Set up your JavaScript development environment with our comprehensive guide.",
  image: "/courses/og/Setup_JS.png",
  url: "/courses/javascript/setup",
  published_time: new Date("2024-11-25"),
  modified_time: new Date("2024-11-25"),
  section: "JavaScript Basics",
  tag: ["JavaScript", "Beginner", "Programming"],
  author: ["Stawa"],
};

export function JavaScriptSetup() {
  const setupSteps = [
    {
      title: "Install Node.js",
      description:
        "Download and install Node.js which includes npm (Node Package Manager)",
      icon: <FaNodeJs />,
      link: "https://nodejs.org/",
      image: "/courses/nodejs-install.png",
      steps: [
        "Visit nodejs.org and download the LTS version",
        "Run the installer and follow the installation wizard",
        "Verify installation by running 'node --version' in terminal",
      ],
    },
    {
      title: "Setup VS Code",
      description:
        "Install Visual Studio Code - a powerful and lightweight code editor",
      icon: <SiVisualstudiocode />,
      link: "https://code.visualstudio.com/",
      image: "/courses/vscode-setup.png",
      steps: [
        "Download VS Code from code.visualstudio.com",
        "Install recommended extensions for JavaScript development",
        "Configure your workspace settings for optimal JavaScript development",
      ],
    },
  ];

  const recommendedExtensions = [
    {
      name: "ESLint",
      description: "JavaScript code linting utility",
      icon: "/courses/eslint.svg",
      link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
    },
    {
      name: "Prettier",
      description: "Code formatter that ensures consistent style",
      icon: "/courses/prettier.png",
      link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    },
    {
      name: "JavaScript (ES6) Code Snippets",
      description: "Snippets for quick JavaScript coding",
      icon: "/courses/js-snippets.png",
      link: "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",
    },
  ];

  const navigation = {
    previous: {
      href: "/courses/javascript",
      title: "Course Overview",
    },
    next: {
      href: "/courses/javascript/first-code",
      title: "Writing Your First JavaScript Code",
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
                Chapter 0: Environment Setup
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8 leading-tight">
              Setting Up Your
              <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                JavaScript Environment
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 mb-6">
              A comprehensive guide to setting up a professional JavaScript
              development environment. Follow these steps to create an optimal
              workspace for learning and building JavaScript applications.
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
                  dateTime="2024-12-05"
                  title="Written on December 05, 2024"
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  December 05, 2024
                </time>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Online Code Compiler Coming Soon */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-sm">
              Choose Your Development Environment
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Get started with JavaScript by choosing between our upcoming
              online compiler or setting up your local development environment.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/20 dark:border-blue-700/50 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-xl flex items-center justify-center shadow-inner">
                      <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
                        <FaCode />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Online Code Compiler
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                    Soon you'll be able to choose between setting up your local
                    environment or using our integrated online code compiler.
                    Stay tuned for this exciting feature that will make your
                    JavaScript learning journey even easier!
                  </p>
                  <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                    <div className="flex items-start gap-3 md:gap-4 group">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-base md:text-lg group-hover:scale-110 transition-transform" />
                      <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Write and run JavaScript code directly in your browser
                      </span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4 group">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-base md:text-lg group-hover:scale-110 transition-transform" />
                      <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        No installation or setup required
                      </span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4 group">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-base md:text-lg group-hover:scale-110 transition-transform" />
                      <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Built-in code editor with syntax highlighting
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-fit items-center px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium text-sm md:text-base shadow-lg transition-all duration-300 cursor-not-allowed opacity-75"
                  disabled
                >
                  🚀 Coming Soon
                  <FaArrowRight className="ml-2 md:ml-3 text-base md:text-lg" />
                </motion.button>
              </div>
              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <div className="text-4xl">🚧</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-12 md:mt-16 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-sm">
              Essential Setup Steps
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Follow these key steps to create your professional JavaScript
              development environment.
            </p>
          </div>

          {/* Setup Steps */}
          <div className="space-y-8 md:space-y-16">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/20 dark:border-blue-700/50 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-xl flex items-center justify-center shadow-inner">
                          <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
                        {step.steps.map((substep, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 md:gap-4 group"
                          >
                            <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-base md:text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                              {substep}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium text-sm md:text-base shadow-lg"
                    >
                      Download & Install
                      <FaArrowRight className="ml-2 md:ml-3 text-base md:text-lg" />
                    </motion.a>
                  </div>
                  <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`${step.image}?w=700&fm=webp 700w, ${step.image}?w=600&fm=webp 600w, ${step.image}?w=500&fm=webp 500w`}
                        sizes="(min-width: 1536px) 700px, (min-width: 1280px) 600px, (min-width: 1024px) 50vw, (min-width: 768px) 80vw, 100vw"
                      />
                      <source
                        type="image/jpeg"
                        srcSet={`${step.image}?w=700 700w, ${step.image}?w=600 600w, ${step.image}?w=500 500w`}
                        sizes="(min-width: 1536px) 700px, (min-width: 1280px) 600px, (min-width: 1024px) 50vw, (min-width: 768px) 80vw, 100vw"
                      />
                      <img
                        src={step.image}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-contain rounded-xl shadow-lg transition-transform duration-500"
                        loading="lazy"
                        width={598}
                        height={464}
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* VS Code Extensions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 md:mt-20"
          >
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent drop-shadow-sm">
                Essential VS Code Extensions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                Enhance your development experience with these recommended VS
                Code extensions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recommendedExtensions.map((extension, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100/20 dark:border-blue-700/50"
                >
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                      <img
                        src={extension.icon}
                        alt={extension.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    {extension.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4 min-h-[4rem] md:min-h-[4.5rem]">
                    {extension.description}
                  </p>

                  <a
                    href={extension.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Install Extension
                    <FaArrowRight className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16">
            <Navigation navigation={navigation} />
          </div>
        </div>
      </section>
    </div>
  );
}
