"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 border-t-4 border-indigo-300 dark:border-indigo-500 shadow-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
          <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              TriWikiTech
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 border-b-2 border-transparent hover:border-indigo-400"
              onClick={() => handleClick("Privacy Policy is not added yet!")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 border-b-2 border-transparent hover:border-indigo-400"
              onClick={() => handleClick("Terms of Service is not added yet!")}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 border-b-2 border-transparent hover:border-indigo-400"
              onClick={() => handleClick("Contact Us page is not added yet!")}
            >
              Contact Us
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Stawa"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
            >
              <FaGithub size={20} className="animate-pulse" />
            </a>
            <a
              href="https://x.com/StawaDev"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaSquareXTwitter size={20} className="animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
