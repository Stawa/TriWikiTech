"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Languages from "@data/langauges.json";

const GridBackground = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full opacity-20 dark:opacity-40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            stopColor="#000000"
            stopOpacity="0.9"
            className="dark:stop-color-[#ffffff] dark:stop-opacity-[0.9]"
          >
            <animate
              attributeName="stop-color"
              values="#000000; #333333; #000000"
              dur="15s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="100%"
            stopColor="#CCCCCC"
            stopOpacity="0.3"
            className="dark:stop-color-[#ffffff] dark:stop-opacity-[0.5]"
          >
            <animate
              attributeName="stop-color"
              values="#CCCCCC; #EEEEEE; #CCCCCC"
              dur="7s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="url(#grid-gradient)"
          strokeWidth="1"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="60 60"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden">
    <GridBackground />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
        >
          Learn Programming with TriWikiTech
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Master multiple programming languages with real-world examples on our
          comprehensive, interactive learning platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6"
        >
          <Link
            href="/#start"
            className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-base md:text-lg transition duration-300 hover:shadow-lg hover:scale-105 transform overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span className="relative z-10">Start Your Journey</span>
          </Link>
          <Link
            href="/courses"
            className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-pink-500 text-pink-500 rounded-full font-bold text-base md:text-lg transition duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg hover:scale-105 transform overflow-hidden"
          >
            <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Explore Courses
            </span>
          </Link>
        </motion.div>
      </section>
      <section id="start" className="container mx-auto px-4 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient-x"
          >
            Explore Our Interactive Tools
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {Languages.map((language) => (
              <motion.div
                key={language.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 },
                }}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col`}
                style={{ borderTop: `4px solid ${language.color}` }}
              >
                <div className="px-4 md:px-6 pt-6 flex-grow">
                  <div className="mx-auto mb-4 text-center">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto">
                      <img
                        alt={language.title}
                        src={`/lang/${language.name}.png`}
                        width={64}
                        height={64}
                        className="object-contain"
                        loading="lazy"
                        decoding="async"
                        style={{ color: "transparent" }}
                        srcSet={`/_next/image?url=/lang/${language.name}.png&w=64&q=100 1x, /_next/image?url=/lang/${language.name}.png&w=128&q=100 2x`}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {language.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {language.description}
                  </p>
                </div>
                <div className="p-4 md:p-6 space-y-3">
                  <motion.button
                    className={`flex items-center justify-center w-full py-2 rounded-md font-semibold text-center transition duration-300 ${
                      language.wiki.available
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50 text-gray-700 dark:text-gray-300"
                    }`}
                    disabled={!language.wiki.available}
                    whileHover={{ scale: language.wiki.available ? 1.05 : 1 }}
                    whileTap={{ scale: language.wiki.available ? 0.95 : 1 }}
                    onClick={() => {
                      if (language.wiki.available) {
                        window.location.href = language.wiki.href;
                      }
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      className="mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                    </svg>
                    Learn now
                  </motion.button>
                  <motion.button
                    className={`flex items-center justify-center w-full py-2 rounded-md font-semibold text-center transition duration-300 ${
                      language.compiler.available
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50 text-gray-700 dark:text-gray-300"
                    }`}
                    disabled={!language.compiler.available}
                    whileHover={{
                      scale: language.compiler.available ? 1.05 : 1,
                    }}
                    whileTap={{
                      scale: language.compiler.available ? 0.95 : 1,
                    }}
                    onClick={() => {
                      if (language.compiler.available) {
                        window.location.href = language.compiler.href;
                      }
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      className="mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                    </svg>
                    Try Compiler
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
