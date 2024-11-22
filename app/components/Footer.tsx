import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaFileContract,
  FaShieldAlt,
  FaPencilAlt,
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

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              Connect With Us
            </h3>
            <div className="flex space-x-6 justify-center sm:justify-start">
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

          <div className="space-y-4 text-center sm:col-span-2 lg:col-span-1 lg:text-left">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 sm:text-center lg:text-left">
              Quick Links
            </h3>
            <nav aria-label="Footer links">
              <ul className="space-y-3 sm:flex sm:justify-center sm:space-y-0 sm:space-x-8 lg:block lg:space-y-3 lg:space-x-0">
                <FooterLink
                  href="/tos"
                  icon={<FaFileContract />}
                  label={translations.footerLinks.termsOfService}
                />
                <FooterLink
                  href="/privacy"
                  icon={<FaShieldAlt />}
                  label={translations.footerLinks.privacyPolicy}
                />
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-indigo-200/30 dark:border-indigo-700/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} {translations.allRightsReserved}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center sm:justify-start">
              <FaPencilAlt className="mr-2 text-indigo-600 dark:text-indigo-400" />
              {translations.designedBy}
              <Link
                to="https://github.com/Stawa"
                className="font-medium hover:underline ml-1 text-indigo-600 dark:text-indigo-400"
                target="_blank"
              >
                Stawa
              </Link>
            </p>
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
      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${label} page`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
    >
      {React.cloneElement(icon, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
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
    <li className={`flex justify-center sm:justify-start ${className}`}>
      <Link
        to={href}
        className="group text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-150 flex items-center"
      >
        {React.cloneElement(icon, {
          className:
            "mr-2 w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform",
        })}
        <span className="text-sm">{label}</span>
      </Link>
    </li>
  );
}

export default Footer;
