import React, { useEffect, useState } from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaFileContract,
  FaShieldAlt,
  FaPencilAlt,
  FaClock,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "@remix-run/react";

interface FooterProps {
  translations: {
    learnCodeGrow: string;
    allRightsReserved: string;
    designedBy: string;
    footerLinks: {
      title: string;
      termsOfService: string;
      privacyPolicy: string;
    };
    socialLinks: {
      title: string;
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
              {translations.footerLinks.title}
            </h3>
            <nav aria-label="Footer links">
              <ul className="space-y-3">
                <FooterLink
                  href="/terms"
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

          <div className="space-y-4 text-center sm:col-span-2 lg:col-span-1 lg:text-right">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              {translations.socialLinks.title}
            </h3>
            <div className="flex space-x-6 justify-center lg:justify-end">
              <SocialLink
                href="https://discord.gg/EqPw38KTZM"
                icon={<FaDiscord />}
                label="Discord"
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

        <div className="mt-12 pt-8 border-t border-indigo-200 dark:border-indigo-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} {translations.allRightsReserved}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start mt-2">
                <FaPencilAlt className="mr-2 text-indigo-500 dark:text-indigo-300" />
                {translations.designedBy}
                <Link
                  to="https://github.com/Stawa"
                  className="font-medium ml-1.5 text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100 transition-colors duration-300"
                  target="_blank"
                >
                  Stawa
                </Link>
              </p>
            </div>
            {deploymentDate && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 mt-4 md:mt-0">
                <FaClock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
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
    <a
      href={href}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${label} page`}
    >
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </a>
  );
}

interface FooterLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
}

function FooterLink({ href, icon, label }: FooterLinkProps) {
  return (
    <li>
      <Link
        to={href}
        className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-300 justify-center lg:justify-center sm:justify-end"
      >
        {React.cloneElement(icon, {
          className:
            "mr-3 w-5 h-5 text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300",
        })}
        <span className="text-sm font-medium">{label}</span>
      </Link>
    </li>
  );
}

export default Footer;
