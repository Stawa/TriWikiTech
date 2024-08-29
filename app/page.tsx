import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

interface LanguageItem {
  title: string;
  description: string;
  icon: string;
  learn: boolean;
  compiler_href: string;
  compiler: boolean;
  color: string;
}

interface LanguageContainer {
  [key: string]: LanguageItem;
}

export default function Home() {
  const LanguageContainers: LanguageContainer = {
    Python: {
      title: "Python",
      description: "Learn Python from basics to advanced.",
      icon: "/Python.png",
      learn: false,
      compiler_href: "/compiler?lang=python",
      compiler: false,
      color: "#4B8BBE",
    },
    JavaScript: {
      title: "JavaScript",
      description: "Master JavaScript for web development.",
      icon: "/Javascript.png",
      learn: false,
      compiler_href: "/compiler?lang=javascript",
      compiler: false,
      color: "#F7DF1E",
    },
    C: {
      title: "C",
      description: "Develop high-performance applications.",
      icon: "/C.png",
      learn: false,
      compiler_href: "/compiler?lang=c",
      compiler: false,
      color: "#A8B9CC",
    },
    CPP: {
      title: "C++",
      description:
        "A versatile, high-performance language for system and application development.",
      icon: "/CPP.png",
      learn: false,
      compiler_href: "/compiler?lang=cpp",
      compiler: false,
      color: "#00599C",
    },
    NodeJS: {
      title: "NodeJS",
      description:
        "Build scalable and high-performance applications with this JavaScript runtime environment.",
      icon: "/NodeJS.png",
      learn: false,
      compiler_href: "#",
      compiler: false,
      color: "#339933",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20 pt-8">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Learn Programming with TriWikiTech
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Master multiple programming languages with real-world examples on
            our comprehensive platform.
          </p>
          <a
            href="#learn-compiler"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold transition duration-300 hover:shadow-lg hover:scale-105 transform"
          >
            <FaRocket className="mr-2" />
            Start Your Journey
          </a>
        </section>

        <section id="learn-compiler" className="mb-20 pb-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Path & Start Coding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(LanguageContainers).map(([key, lang]) => (
              <div
                key={key}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col"
                style={{ borderTop: `4px solid ${lang.color}` }}
              >
                <div className="px-6 pt-6 flex-grow">
                  <div
                    className="mx-auto mb-4 text-center"
                    style={{ color: lang.color }}
                  >
                    <div className="relative w-16 h-16 mx-auto">
                      <Image
                        src={lang.icon}
                        alt={lang.title}
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                        quality={100}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{lang.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {lang.description}
                  </p>
                </div>
                <div className="p-6 space-y-3">
                  <a
                    href="#"
                    className={`flex items-center justify-center w-full py-2 rounded-md font-semibold text-center transition duration-300 ${
                      lang.learn
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50 text-gray-700 dark:text-gray-300"
                    }`}
                    aria-disabled={!lang.learn}
                  >
                    <FaCode className="mr-2" />
                    Learn now
                  </a>
                  <a
                    href={lang.compiler_href}
                    className={`flex items-center justify-center w-full py-2 rounded-md font-semibold text-center transition duration-300 ${
                      lang.compiler
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50 text-gray-700 dark:text-gray-300"
                    }`}
                    aria-disabled={!lang.compiler}
                  >
                    <FaLaptopCode className="mr-2" />
                    Try Compiler
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
