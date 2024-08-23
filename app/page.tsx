import Footer from "@default/components/Footer";
import Navbar from "@default/components/Navbar";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface LanguageItem {
  title: string;
  description: string;
  icon: string;
  learn: boolean;
  compiler_href: string;
  compiler: boolean;
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
      compiler: true,
    },
    JavaScript: {
      title: "JavaScript",
      description: "Master JavaScript for web development.",
      icon: "/Javascript.png",
      learn: false,
      compiler_href: "/compiler?lang=javascript",
      compiler: true,
    },
    C: {
      title: "C",
      description: "Develop high-performance applications.",
      icon: "/C.png",
      learn: false,
      compiler_href: "/compiler?lang=c",
      compiler: true,
    },
    CPP: {
      title: "C++",
      description:
        "A versatile, high-performance language for system and application development.",
      icon: "/CPP.png",
      learn: false,
      compiler_href: "/compiler?lang=cpp",
      compiler: true,
    },
    NodeJS: {
      title: "NodeJS",
      description:
        "Build scalable and high-performance applications with this JavaScript runtime environment.",
      icon: "/NodeJS.png",
      learn: false,
      compiler_href: "#",
      compiler: false,
    },
  };

  return (
    <>
      <Navbar />

      <section className="space-y-6 pb-8 md:pb-12 lg:py-32 py-14">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="mt-5 pt-4 font-bold text-3xl sm:text-4xl">
              Learn Programming with TriWikiTech
            </h2>
            <h3 className="text-xl mb-4">
              (Covers multiple programming languages with real-world examples)
            </h3>
            <p className="text-lg mb-4 text-neutral-400 max-w-3xl mx-auto">
              We are a comprehensive platform dedicated to connecting
              programmers with their learning goals and helping them master
              programming languages.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="#learn-compiler"
                className="inline-block px-6 py-3 bg-white text-black hover:bg-neutral-300 rounded-md font-semibold transition duration-300 max-w-xs mx-auto"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section id="learn-compiler" className="py-14 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-bold text-3xl sm:text-4xl">
              Choose What to Learn & Start Coding
            </h2>
            <p className="text-lg mb-8 text-neutral-400">
              Select a programming language and dive in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.keys(LanguageContainers).map((key) => {
              const {
                title,
                description,
                icon,
                learn,
                compiler_href,
                compiler,
              } = LanguageContainers[key as keyof LanguageContainer];
              return (
                <div
                  key={key}
                  className="border border-neutral-600 bg-neutral-950 rounded-lg shadow-lg p-6 text-center"
                >
                  <img src={icon} alt={title} className="h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-neutral-400 mb-4">{description}</p>
                  <div className="flex flex-col md:flex-col justify-center space-y-4">
                    <a
                      href="#"
                      className={`inline-block px-6 py-2 rounded-md font-semibold flex items-center justify-between transition duration-300 ${
                        learn
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-600 text-white opacity-50 cursor-not-allowed"
                      }`}
                      aria-disabled={!learn}
                    >
                      <span>Learn now</span>
                      <FaArrowRightLong className="ml-2" />
                    </a>
                    <a
                      href={compiler_href}
                      className={`inline-block px-6 py-2 rounded-md font-semibold flex items-center justify-between transition duration-300 ${
                        compiler
                          ? "bg-gray-700 text-white hover:bg-gray-800"
                          : "bg-gray-600 text-white opacity-50 cursor-not-allowed"
                      }`}
                      aria-disabled={!compiler}
                    >
                      <span>Try Compiler</span>
                      <FaArrowRightLong className="ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
