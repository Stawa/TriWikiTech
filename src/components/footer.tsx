"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaBook } from "react-icons/fa";
import { PiScrollFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import Social from "@data/social.json";
import { useTranslations } from "next-intl";

const Footer = () => {
  const [latestCommitUrl, setLatestCommitUrl] = useState<string>(
    "https://github.com/Stawa/TriWikiTech/commits/dev"
  );
  const t = useTranslations("Footer");

  useEffect(() => {
    const fetchLatestCommit = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Stawa/TriWikiTech/commits/dev"
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch latest commit: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setLatestCommitUrl(
          `https://github.com/Stawa/TriWikiTech/commit/${data.sha}`
        );
      } catch (error) {
        console.error("Error fetching latest commit:", error);
      }
    };

    fetchLatestCommit();
  }, []);

  const FooterSection = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center"
    >
      {children}
    </motion.div>
  );

  const SocialLinks = () => (
    <div className="flex flex-wrap justify-center sm:justify-start">
      {Social.map((socialItem, index) => (
        <motion.a
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
          href={socialItem.url}
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition duration-300 flex items-center mr-4 mb-2 sm:mb-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${socialItem.name} page`}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d={socialItem.icon}
              clipRule="evenodd"
            ></path>
          </svg>
        </motion.a>
      ))}
    </div>
  );

  const FooterLink = ({
    href,
    icon: Icon,
    children,
  }: {
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
    >
      <Icon className="mr-2" aria-hidden="true" />
      {children}
    </a>
  );

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white py-12 shadow-lg border-t-2 border-blue-600 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FooterSection>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              TriWikiTech
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300"
            >
              {t("LearnCodeGrow")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.p>
          </div>
          <SocialLinks />
        </FooterSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {t("AllRightsReserved", { year: new Date().getFullYear() })}
            </p>
            <p className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              {t("DesignedBy")}
              <a
                href="https://github.com/YourGithubUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                Stawa
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
            <FooterLink href="/tos" icon={FaBook}>
              {t("TermsOfService")}
            </FooterLink>
            <FooterLink href="/privacy" icon={FaShieldAlt}>
              {t("PrivacyPolicy")}
            </FooterLink>
            <FooterLink href={latestCommitUrl} icon={PiScrollFill}>
              {t("Changelog")}
            </FooterLink>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
