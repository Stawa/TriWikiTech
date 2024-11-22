import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaFileContract,
  FaShieldAlt,
  FaPencilAlt,
  FaClock,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

interface FooterProps {
  translations: {
    learnCodeGrow: string;
    allRightsReserved: string;
    designedBy: string;
    footerLinks: {
      termsOfService: string;
      privacyPolicy: string;
    };
  };
}

function Footer({ translations }: FooterProps) {
  const [deploymentDate, setDeploymentDate] = useState<string>("");

  useEffect(() => {
    async function fetchDeploymentDate() {
      try {
        const response = await fetch("/api/deployment");
        const data = await response.json();
        const date = new Date(data.deploymentReadyDate);
        setDeploymentDate(date.toLocaleDateString());
      } catch (error) {
        console.error("Failed to fetch deployment date:", error);
      }
    }

    fetchDeploymentDate();
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t-2 border-indigo-500/30 text-gray-800 dark:text-gray-200 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 3xl:px-32 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              TriWikiTech
            </h2>
            <p className="text-gray-700 dark:text-gray-300 flex items-center text-lg justify-center sm:justify-start">
              {translations.learnCodeGrow}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 text-indigo-600 dark:text-indigo-400"
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

          <div className="space-y-4 text-center lg:text-center sm:text-right">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              Quick Links
            </h3>
            <nav aria-label="Footer links">
              <ul className="space-y-3">
                <FooterLink
                  href="/tos"
                  icon={<FaFileContract />}
                  label={translations.footerLinks.termsOfService}
                  className="justify-center lg:justify-center sm:justify-end"
                />
                <FooterLink
                  href="/privacy"
                  icon={<FaShieldAlt />}
                  label={translations.footerLinks.privacyPolicy}
                  className="justify-center lg:justify-center sm:justify-end"
                />
              </ul>
            </nav>
          </div>

          <div className="space-y-4 text-center sm:col-span-2 lg:col-span-1 lg:text-right">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              Connect With Us
            </h3>
            <div className="flex space-x-6 justify-center lg:justify-end">
              <SocialLink
                href="https://github.com/Stawa/TriWikiTech"
                icon={<FaGithub />}
                label="GitHub"
              />
              <SocialLink
                href="https://x.com/StawaDev"
                icon={<FaXTwitter />}
                label="Twitter"
              />
              <SocialLink
                href="mailto:stawa@admin.triwikitech.my.id"
                icon={<FaEnvelope />}
                label="Email"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-indigo-200/30 dark:border-indigo-700/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex flex-col items-center sm:items-start space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center sm:text-left whitespace-nowrap">
                  © {new Date().getFullYear()} {translations.allRightsReserved}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center sm:justify-start group">
                  <FaPencilAlt className="mr-2 text-indigo-500 dark:text-indigo-300" />
                  {translations.designedBy}
                  <Link
                    to="https://github.com/Stawa"
                    className="font-medium ml-1.5 text-indigo-600 dark:text-indigo-300 relative 
                      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 
                      after:origin-left after:transition-all after:duration-300 after:ease-out
                      hover:after:w-full hover:after:opacity-100
                      hover:text-indigo-700 dark:hover:text-indigo-200
                      transition-colors duration-300"
                    target="_blank"
                  >
                    Stawa
                  </Link>
                </p>
              </div>
            </div>
            {deploymentDate && (
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-100 dark:border-indigo-800 shadow-sm backdrop-blur-sm">
                <FaClock className="w-4 h-4 text-indigo-500 dark:text-indigo-300 mr-2" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-200">
                  Last updated: {deploymentDate}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-100 dark:border-indigo-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-150"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${label} page`}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -5, 5, 0],
        transition: {
          rotate: {
            duration: 0.15,
            ease: "easeInOut"
          }
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {React.cloneElement(icon, { 
        className: "w-5 h-5 text-indigo-600 dark:text-indigo-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition-colors duration-150"
      })}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        {label}
      </span>
    </motion.a>
  );
}

interface FooterLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
  className?: string;
}

function FooterLink({ href, icon, label, className = "" }: FooterLinkProps) {
  return (
    <li className={className}>
      <Link
        to={href}
        className="group relative inline-flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-100 dark:border-indigo-800 transition-all duration-200 ease-in-out"
      >
        {React.cloneElement(icon, {
          className:
            "mr-3 w-5 h-5 text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 group-hover:scale-110 transform transition-all duration-200",
        })}
        <span className="text-sm font-medium">{label}</span>
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </Link>
    </li>
  );
}

export default Footer;
