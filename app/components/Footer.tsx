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
    <footer className="bg-gray-100 dark:bg-gray-900 border-t-2 border-indigo-500 text-gray-800 dark:text-gray-200 font-sans">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 3xl:px-32 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              TriWikiTech
            </h2>
            <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center sm:justify-start mt-2">
              {translations.learnCodeGrow}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 text-indigo-600 dark:text-indigo-400"
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
          <div className="flex justify-center sm:justify-end space-x-4">
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
        <div className="mt-8 pt-8 border-t border-indigo-200 dark:border-indigo-700 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {translations.allRightsReserved}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center justify-center sm:justify-start mt-2">
              <FaPencilAlt className="mr-1 text-indigo-600 dark:text-indigo-400" />
              {translations.designedBy}
              <Link
                to="https://github.com/Stawa"
                className="font-medium hover:underline ml-1 text-indigo-600 dark:text-indigo-400"
              >
                Stawa
              </Link>
            </p>
          </div>
          <nav aria-label="Footer links" className="w-full sm:w-auto">
            <h3 className="sr-only">Footer Links</h3>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
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
      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 flex items-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${label} page`}
      whileHover={{ y: -2 }}
    >
      {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
    </motion.a>
  );
}

interface FooterLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
}

function FooterLink({ href, icon, label }: FooterLinkProps) {
  return (
    <li className="w-full sm:w-auto">
      <Link
        to={href}
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center justify-center sm:justify-start"
      >
        {React.cloneElement(icon, {
          className: "mr-2 w-4 h-4 text-indigo-600 dark:text-indigo-400",
        })}
        {label}
      </Link>
    </li>
  );
}

export default Footer;
