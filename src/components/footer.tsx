"use client";

import { FaShieldAlt, FaBook } from "react-icons/fa";
import { PiScrollFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Social from "@data/social.json";

const Footer = () => {
  const [latestCommitUrl, setLatestCommitUrl] = useState<string>(
    "https://github.com/Stawa/TriWikiTech/commits/main"
  );
  const t = useTranslations("Footer");

  useEffect(() => {
    const fetchLatestCommit = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Stawa/TriWikiTech/commits/main"
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
    <div className="animate-smooth-reveal-long flex justify-between items-center">
      {children}
    </div>
  );

  const SocialLinks = () => (
    <div className="flex flex-wrap justify-center sm:justify-start">
      {Social.map((socialItem, index) => (
        <a
          key={index}
          href={socialItem.url}
          className={`animate-slide-in-right delay-${index * 100}ms text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition duration-300 flex items-center mr-4 mb-2 sm:mb-0`}
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
        </a>
      ))}
    </div>
  );

  const FooterLink = ({
    href,
    icon: Icon,
    target,
    children,
  }: {
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
    target: "_blank" | "_self";
  }) => (
    <a
      href={href}
      className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start"
      target={target}
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
            <h3 className="animate-slide-in-left delay-200 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              TriWikiTech
            </h3>
            <p className="animate-slide-in-left delay-400 text-gray-600 dark:text-gray-300">
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
            </p>
          </div>
          <SocialLinks />
        </FooterSection>
        <div className="animate-smooth-reveal-long mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
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
              {t("DesignedBy")}{" "}
              <a
                href="https://github.com/Stawa"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                Stawa
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
            <FooterLink href="/tos" target="_self" icon={FaBook}>
              {t("TermsOfService")}
            </FooterLink>
            <FooterLink href="/privacy" target="_self" icon={FaShieldAlt}>
              {t("PrivacyPolicy")}
            </FooterLink>
            <FooterLink
              href={latestCommitUrl}
              icon={PiScrollFill}
              target="_blank"
            >
              {t("Changelog")}
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
