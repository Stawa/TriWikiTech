import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import CodeBlock from "~/components/Courses/CodeBlock";
import Navigation from "~/components/Courses/Navigation";
import TableOfContents from "~/components/Courses/ToC";
import HeroSection from "~/components/Courses/Hero";

export const SetupMetaData = {
  title: "TriWikiTech | JavaScript Setup",
  description:
    "Set up your JavaScript development environment with our comprehensive guide.",
  image: "/courses/og/javascript_setup_hero.png",
  url: "/courses/javascript/setup",
  published_time: new Date("2024-11-25"),
  modified_time: new Date("2024-12-31"),
  section: "JavaScript Basics",
  tag: ["JavaScript", "Beginner", "Programming"],
  author: ["Stawa"],
};

export function JavaScriptSetup() {
  const [readTime, setReadTime] = useState<number>(0);

  // Count words
  useEffect(() => {
    const pageText = document.body.innerText;
    setReadTime(pageText.length);
  }, []);

  const setupSteps = {
    nodejs: {
      title: "Installing Node.js",
      description:
        "Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser.",
      steps: [
        {
          title: "Download from Node.js Website",
          description:
            "Visit nodejs.org and locate the green LTS (Long Term Support) download button. The website will automatically detect your operating system and offer the appropriate version.",
          image: "/courses/javascript/nodejs-website.png",
          tip: "LTS version is recommended for better stability and long-term support.",
        },
        {
          title: "Start the Setup",
          description:
            "Once downloaded, double-click the installer file to begin. You'll see the Node.js Setup Wizard welcome screen.",
          image: "/courses/javascript/nodejs-setup.png",
          tip: "Make sure to run the installer with administrator privileges if prompted.",
        },
        {
          title: "Installation Progress",
          description:
            "Follow the installation wizard steps. The installer will show a progress bar while it installs Node.js and npm (Node Package Manager) on your system.",
          image: "/courses/javascript/nodejs-wizard.png",
          tip: "Keep the default settings unless you have specific requirements.",
        },
        {
          title: "Verify Installation",
          description:
            "After installation completes, open your terminal (Command Prompt or PowerShell) and run these commands to verify everything is working:",
          code: "// Check Node.js version\nnode --version\n\n// Verify npm installation\nnpm --version",
          expected:
            "You should see version numbers like v18.x.x for Node.js and 8.x.x for npm",
          tip: "If the commands aren't recognized, try closing and reopening your terminal.",
        },
      ],
    },
    vscode: {
      title: "Setting up Visual Studio Code",
      description:
        "Visual Studio Code (VS Code) is a powerful, lightweight code editor with excellent JavaScript support and a rich ecosystem of extensions.",
      steps: [
        {
          title: "Download from VS Code Website",
          description:
            "Visit code.visualstudio.com and click the blue 'Download' button for Windows. The website will automatically detect your operating system and offer the appropriate version.",
          image: "/courses/javascript/vscode-website.png",
          tip: "VS Code is free and open-source, with regular updates to ensure you always have the latest features.",
        },
        {
          title: "Start the Setup",
          description:
            "Once downloaded, launch the installer. You'll see the VS Code Setup welcome screen. Accept the license agreement to proceed.",
          image: "/courses/javascript/vscode-setup.png",
          tip: "Make sure to run the installer with administrator privileges if prompted.",
        },
        {
          title: "Installation Options",
          description:
            "During installation, make sure to select these recommended options:\n- Add 'Open with Code' action to Windows Explorer file context menu\n- Add 'Open with Code' action to Windows Explorer directory context menu\n- Add to PATH (requires shell restart)\n- Register Code as an editor for supported file types",
          image: "/courses/javascript/vscode-wizard.png",
          tip: "These options make it easier to open files and folders directly from Windows Explorer.",
        },
        {
          title: "Configure Settings",
          description:
            "Customize VS Code for JavaScript development with these recommended settings. Open the settings by pressing Ctrl+, (comma) or going to File > Preferences > Settings.",
          code: '{\n  "editor.formatOnSave": true,\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "editor.tabSize": 2,\n  "editor.wordWrap": "on",\n  "editor.rulers": [80],\n  "files.autoSave": "onFocusChange"\n}',
          settings: [
            {
              name: "editor.formatOnSave",
              value: "true",
              description:
                "Automatically formats your code every time you save a file. This ensures consistent code style.",
            },
            {
              name: "editor.defaultFormatter",
              value: "esbenp.prettier-vscode",
              description:
                "Sets Prettier as the default formatter. Prettier is a popular code formatter that supports JavaScript.",
            },
            {
              name: "editor.tabSize",
              value: "2",
              description:
                "Sets the width of tab characters to 2 spaces. This is a common standard in JavaScript projects.",
            },
            {
              name: "editor.wordWrap",
              value: "on",
              description:
                "Automatically wraps long lines of code to improve readability.",
            },
            {
              name: "editor.rulers",
              value: "[80]",
              description:
                "Adds a vertical line at column 80 to help maintain consistent line lengths.",
            },
            {
              name: "files.autoSave",
              value: "onFocusChange",
              description:
                "Automatically saves files when you switch between files or applications.",
            },
          ],
          tip: "You can paste these settings directly into your settings.json file or configure them through the UI.",
        },
      ],
    },
    extensions: {
      title: "Installing Extensions",
      description: "Install useful extensions for JavaScript development.",
      steps: [
        {
          title: "Using VS Code Extension Panel",
          description:
            "The easiest way to install extensions is through the VS Code Extensions panel:",
          steps: [
            "Click the Extensions icon in the Activity Bar on the side of VS Code or press Ctrl+Shift+X",
            "Search for the extension name in the search box",
            "Click the Install button next to the extension",
            "Reload VS Code when prompted",
          ],
        },
        {
          title: "Quick Install Through Command",
          description:
            "You can also install extensions directly using the Quick Open command palette:",
          code: "ext install [extension-id]",
          tip: "Replace [extension-id] with the specific extension identifier from the marketplace.",
        },
        {
          title: "Recommended Extensions for JavaScript",
          description:
            "Here are our recommended extensions for JavaScript development. You can install them using any of the methods above or by clicking the marketplace links:",
          settings: [
            {
              name: "ESLint",
              value: "dbaeumer.vscode-eslint",
              description:
                "JavaScript linting and code quality tool. Helps catch errors and enforce coding standards.",
              url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
            },
            {
              name: "Prettier",
              value: "esbenp.prettier-vscode",
              description:
                "Code formatter that automatically formats your JavaScript code for consistency.",
              url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
            },
            {
              name: "JavaScript (ES6) Code Snippets",
              value: "xabikos.JavaScriptSnippets",
              description:
                "Collection of code snippets for quick JavaScript development using modern ES6+ syntax.",
              url: "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",
            },
          ],
          tip: "After installing these extensions, reload VS Code to activate all new features.",
        },
        {
          title: "Managing Extensions",
          description: "Important tips for managing your VS Code extensions:",
          steps: [
            "Extensions can be enabled/disabled globally or for specific workspaces",
            "Use 'Show Built-in Extensions' to view VS Code's default extensions",
            "Check 'Extension Pack' collections for bundled related extensions",
            "Enable 'Auto Update' for extensions to keep them current",
          ],
          tip: "You can export your extension list using: 'code --list-extensions > extensions.txt'",
        },
      ],
    },
  };

  const recommendedExtensions = [
    {
      name: "ESLint",
      description:
        "JavaScript code linting utility that helps catch errors and enforce coding standards. Essential for maintaining code quality and consistency.",
      icon: "/courses/javascript/eslint.svg",
      link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
      id: "dbaeumer.vscode-eslint",
      category: "Linting",
    },
    {
      name: "Prettier",
      description:
        "Opinionated code formatter that automatically formats your code on save, ensuring consistent style across your entire codebase.",
      icon: "/courses/javascript/prettier.png",
      link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
      id: "esbenp.prettier-vscode",
      category: "Formatting",
    },
    {
      name: "JavaScript (ES6) Code Snippets",
      description:
        "Rich collection of ES6+ snippets for faster JavaScript development. Includes shortcuts for common patterns and modern syntax.",
      icon: "/courses/javascript/js-snippets.png",
      link: "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",
      id: "xabikos.JavaScriptSnippets",
      category: "Productivity",
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

  const ToCNavigation = [
    { id: "intro", title: "Introduction", number: "00" },
    { id: "nodejs", title: "Installing Node.js", number: "01" },
    { id: "vscode", title: "Setting up VS Code", number: "02" },
    {
      id: "extensions",
      title: "Recommended Extensions",
      number: "03",
    },
    {
      id: "install-extensions",
      title: "Installing Extensions",
      number: "04",
    },
  ];

  const HeroSectionItems = {
    badge: {
      chapter: 0,
      title: "Environment Setup",
    },
    title: {
      main: "Setting Up Your",
      sub: "JavaScript Environment",
    },
    description:
      "A comprehensive guide to setting up a professional JavaScript development environment. Follow these steps to create an optimal workspace for learning and building JavaScript applications.",
    readTime: readTime,
    modified_time: SetupMetaData.modified_time,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section Banner */}
      <HeroSection {...HeroSectionItems} />
      {/* Main Section */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of Contents */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <TableOfContents navigation={ToCNavigation} />
            {/* Main Content */}
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
                    Before you start your JavaScript journey, it's essential to
                    set up your development environment properly. This guide
                    will walk you through installing the necessary tools and
                    configuring your workspace for optimal JavaScript
                    development.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                    Whether you're a beginner or an experienced developer,
                    following this guide will ensure a smooth and productive
                    coding experience.{" "}
                    <span className="font-semibold underline">
                      You actually can skip this chapter because you could use
                      your existing environment or online compiler.
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Node.js Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="nodejs"
                className="mb-16 scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-white font-mono text-sm font-semibold">
                        01
                      </span>
                    </span>
                    Installing Node.js
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {setupSteps.nodejs.description}
                  </p>
                  <div className="space-y-12">
                    {setupSteps.nodejs.steps.map((step, index) => (
                      <div
                        key={index}
                        className="relative pl-8 border-l-2 border-blue-500/20 dark:border-blue-400/20"
                      >
                        <div className="absolute -left-3 top-0">
                          <div className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            {step.title}
                          </h3>
                          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {step.description}
                          </p>
                          {step.code && (
                            <div className="my-6">
                              <CodeBlock
                                code={step.code}
                                language={"shell"}
                              />
                            </div>
                          )}
                          {step.image && (
                            <div className="rounded-lg overflow-hidden mb-4 border border-gray-200 dark:border-gray-700 max-w-2xl">
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-auto"
                              />
                            </div>
                          )}
                          {step.tip && (
                            <div className="flex items-start gap-2 text-sm text-blue-600 dark:text-blue-400">
                              <span className="font-semibold">Tip:</span>
                              <span>{step.tip}</span>
                            </div>
                          )}
                          {step.expected && (
                            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <span className="font-semibold">
                                Expected Output:
                              </span>
                              <span>{step.expected}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* VS Code Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="vscode"
                className="mb-8 sm:mb-12 md:mb-16 scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-white font-mono text-xs sm:text-sm font-semibold">
                        02
                      </span>
                    </span>
                    Setting up VS Code
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                    {setupSteps.vscode.description}
                  </p>
                  <div className="space-y-8 sm:space-y-12">
                    {setupSteps.vscode.steps.map((step, index) => (
                      <div
                        key={index}
                        className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/20 dark:border-blue-400/20"
                      >
                        <div className="absolute -left-2 sm:-left-3 top-0">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
                            <span className="text-white text-xs sm:text-sm font-medium">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4">
                            {step.description}
                          </p>
                          {step.code && (
                            <div className="my-6">
                              <CodeBlock
                                code={step.code}
                                language={"shell"}
                              />
                            </div>
                          )}
                          {step.image && (
                            <div className="rounded-lg overflow-hidden mb-3 sm:mb-4 border border-gray-200 dark:border-gray-700 max-w-full sm:max-w-2xl">
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-auto"
                              />
                            </div>
                          )}
                          {step.tip && (
                            <div className="flex items-start gap-1 sm:gap-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                              <span className="font-semibold">Tip:</span>
                              <span>{step.tip}</span>
                            </div>
                          )}
                          {step.settings && (
                            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                                Settings Explained:
                              </h4>
                              {step.settings.map((setting, idx) => (
                                <div
                                  key={idx}
                                  className="pl-3 sm:pl-4 border-l-2 border-blue-500/20 dark:border-blue-400/20"
                                >
                                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                                    <code className="text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-blue-600 dark:text-blue-400">
                                      {setting.name}
                                    </code>
                                    <span className="text-gray-600 dark:text-gray-400">
                                      :
                                    </span>
                                    <code className="text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-green-600 dark:text-green-400">
                                      {setting.value}
                                    </code>
                                  </div>
                                  <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                    {setting.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Extensions Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="extensions"
                className="mb-16 scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-white font-mono text-sm font-semibold">
                        03
                      </span>
                    </span>
                    Recommended Extensions
                  </h2>
                  <div className="mt-8">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {recommendedExtensions.map((extension, index) => (
                            <div
                              key={index}
                              className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-2 border-blue-100 dark:border-blue-900/40 hover:border-blue-200 dark:hover:border-blue-800/40"
                            >
                              <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center mb-4">
                                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 p-2.5 mr-4 flex-shrink-0 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300 border border-blue-100 dark:border-blue-900/40">
                                    <img
                                      src={extension.icon}
                                      alt={extension.name}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                      {extension.name}
                                    </h3>
                                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-blue-100 dark:border-blue-900/40">
                                      {extension.category}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                                  {extension.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-blue-100 dark:border-blue-900/40">
                                  <code className="text-xs px-2 py-1 rounded bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-mono border border-blue-100 dark:border-blue-900/40">
                                    {extension.id}
                                  </code>
                                  <a
                                    href={extension.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors text-sm font-medium group-hover:text-gray-900 dark:group-hover:text-white border border-blue-100 dark:border-blue-900/40 hover:border-blue-200 dark:hover:border-blue-800/40"
                                  >
                                    Install
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Install extensions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id="install-extensions"
                className="mb-16 scroll-mt-24"
              >
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-white font-mono text-sm font-semibold">
                        04
                      </span>
                    </span>
                    Installing Extensions
                  </h2>
                  <div className="space-y-8">
                    <div className="space-y-6">
                      {[
                        {
                          title: "Using VS Code Extension Panel",
                          description:
                            "The easiest way to install extensions is through the VS Code Extensions panel:",
                          steps: [
                            "Click the Extensions icon in the Activity Bar on the side of VS Code or press Ctrl+Shift+X",
                            "Search for the extension name in the search box",
                            "Click the Install button next to the extension",
                            "Reload VS Code when prompted",
                          ],
                        },
                        {
                          title: "Quick Install Through Command",
                          description:
                            "You can also install extensions directly using the Quick Open command palette:",
                          code: "ext install [extension-id]",
                          tip: "Replace [extension-id] with the specific extension identifier from the marketplace.",
                        },
                        {
                          title: "Recommended Extensions for JavaScript",
                          description:
                            "Here are our recommended extensions for JavaScript development. You can install them using any of the methods above or by clicking the marketplace links:",
                          settings: [
                            {
                              name: "ESLint",
                              value: "dbaeumer.vscode-eslint",
                              description:
                                "JavaScript linting and code quality tool. Helps catch errors and enforce coding standards.",
                              url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
                            },
                            {
                              name: "Prettier",
                              value: "esbenp.prettier-vscode",
                              description:
                                "Code formatter that automatically formats your JavaScript code for consistency.",
                              url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
                            },
                            {
                              name: "JavaScript (ES6) Code Snippets",
                              value: "xabikos.JavaScriptSnippets",
                              description:
                                "Collection of code snippets for quick JavaScript development using modern ES6+ syntax.",
                              url: "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",
                            },
                          ],
                          tip: "After installing these extensions, reload VS Code to activate all new features.",
                        },
                        {
                          title: "Managing Extensions",
                          description:
                            "Important tips for managing your VS Code extensions:",
                          steps: [
                            "Extensions can be enabled/disabled globally or for specific workspaces",
                            "Use 'Show Built-in Extensions' to view VS Code's default extensions",
                            "Check 'Extension Pack' collections for bundled related extensions",
                            "Enable 'Auto Update' for extensions to keep them current",
                          ],
                          tip: "You can export your extension list using: 'code --list-extensions > extensions.txt'",
                        },
                      ].map((section, index) => (
                        <div key={index} className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {section.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {section.description}
                          </p>
                          {section.steps && (
                            <ul className="list-disc pl-6 space-y-2">
                              {section.steps.map((step, idx) => (
                                <li
                                  key={idx}
                                  className="text-gray-600 dark:text-gray-400"
                                >
                                  {step}
                                </li>
                              ))}
                            </ul>
                          )}
                          {section.code && (
                            <div className="my-4">
                              <CodeBlock
                                code={section.code}
                                language="shell"
                              />
                            </div>
                          )}
                          {section.settings && (
                            <div className="mt-4 space-y-4">
                              {section.settings.map((setting, idx) => (
                                <div
                                  key={idx}
                                  className="pl-3 border-l-2 border-blue-500/20 dark:border-blue-400/20"
                                >
                                  <div className="flex flex-wrap items-baseline gap-2">
                                    <a
                                      href={setting.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                      <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                        {setting.name}
                                      </code>
                                    </a>
                                    <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-green-600 dark:text-green-400">
                                      {setting.value}
                                    </code>
                                  </div>
                                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    {setting.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          {section.tip && (
                            <div className="flex items-start gap-2 text-sm text-blue-600 dark:text-blue-400 mt-4">
                              <span className="font-semibold">Tip:</span>
                              <span>{section.tip}</span>
                            </div>
                          )}
                        </div>
                      ))}
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
