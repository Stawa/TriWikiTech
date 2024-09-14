"use client";

import { motion } from "framer-motion";
import { FaBook, FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import {
  FaCheckCircle,
  FaUserShield,
  FaCopyright,
  FaUserLock,
  FaTimesCircle,
} from "react-icons/fa";
import Link from "next/link";

const tosContent = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using TriWikiTech, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
    icon: FaCheckCircle,
  },
  {
    title: "2. Use of Service",
    content:
      "You agree to use TriWikiTech for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else&apos;s use and enjoyment of the website.",
    icon: FaUserShield,
  },
  {
    title: "3. Intellectual Property",
    content:
      "The content, organization, graphics, design, and other matters related to TriWikiTech are protected under applicable copyrights and other proprietary laws.",
    icon: FaCopyright,
  },
  {
    title: "4. User Accounts",
    content:
      "You are responsible for safeguarding the password that you use to access TriWikiTech and for any activities or actions under your password.",
    icon: FaUserLock,
  },
  {
    title: "5. Termination",
    content:
      "We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever.",
    icon: FaTimesCircle,
  },
  {
    title: "6. Changes to Terms",
    content:
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time.",
    icon: FaEdit,
  },
];

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

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden">
    <GridBackground />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function TermsOfService() {
  return (
    <Layout>
      <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <FaBook className="text-5xl sm:text-6xl md:text-7xl mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              Terms of Service
            </h1>
            <p className="mt-4 sm:mt-5 max-w-xl mx-auto text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              Please read these terms carefully before using TriWikiTech. These
              terms are still under development and are subject to change.
              It&apos;s not yet finalized and not in use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {tosContent.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 flex flex-col h-full"
              >
                <div
                  className={`p-4 sm:p-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center h-28 sm:h-36`}
                >
                  <section.icon className="text-white w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                    {section.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-20 mx-auto max-w-4xl flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-base md:text-lg transition duration-300 hover:from-pink-600 hover:to-purple-700 hover:shadow-lg hover:scale-105 transform overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <FaArrowLeft className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="relative z-10">Return to Home</span>
            </Link>
            <Link
              href="/privacy"
              className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-base md:text-lg transition duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 transform overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative z-10">Privacy Policy</span>
              <FaArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
