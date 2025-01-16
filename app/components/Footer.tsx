import React, { useEffect, useState } from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaFileContract,
  FaShieldAlt,
  FaPencilAlt,
  FaRegCopyright,
  FaUsers,
  FaLightbulb,
  FaFlag,
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
  className?: string;
}

function Footer({ translations, className = "" }: FooterProps) {
  const [deploymentDate, setDeploymentDate] = useState<string>("");

  useEffect(() => {
    async function fetchDeploymentDate() {
      try {
        const response = await fetch("/api/deployment");
        const data = await response.json();
        const date = new Date(data.deploymentReadyDate);
        const formattedDate = `${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}.${date
          .getDate()
          .toString()
          .padStart(2, "0")}.${date.getFullYear()}`;
        setDeploymentDate(`${formattedDate}-${data.shortSha}`);
      } catch (error) {
        console.error("Failed to fetch deployment date:", error);
      }
    }

    fetchDeploymentDate();
  }, []);

  return (
    <footer
      className={`bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent inline-block">
                TriWikiTech
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {translations.learnCodeGrow}
              </p>
            </div>
          </div>

          {/* About Us Section */}
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Us
            </h3>
            <nav aria-label="About links">
              <ul className="space-y-4">
                <FooterLink
                  href="/about#goals"
                  icon={<FaFlag />}
                  label="Our Goals"
                />
                <FooterLink
                  href="/about#team"
                  icon={<FaUsers />}
                  label="Our Team"
                />
                <FooterLink
                  href="/about#mission"
                  icon={<FaLightbulb />}
                  label="Our Mission"
                />
                <FooterLink
                  href="/contact"
                  icon={<FaEnvelope />}
                  label="Contact Us"
                />
              </ul>
            </nav>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {translations.footerLinks.title}
            </h3>
            <nav aria-label="Footer links">
              <ul className="space-y-4">
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

          {/* Social Links Section */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
              {translations.socialLinks.title}
            </h3>
            <div className="flex gap-4 justify-center lg:justify-start">
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
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left space-y-3">
              <div className="flex items-center justify-center lg:justify-start text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
                <span className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 mr-2">
                  <FaRegCopyright className="w-3.5 h-3.5" />
                </span>
                <span>
                  2024 - {new Date().getFullYear()}{" "}
                  {translations.allRightsReserved}
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-sm text-gray-600 dark:text-gray-400 group">
                <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/50 mr-2 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 transition-colors duration-300">
                  <FaPencilAlt className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                </span>
                <span>{translations.designedBy}</span>
                <Link
                  to="https://github.com/Stawa"
                  className="ml-1.5 font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                  target="_blank" rel="noreferrer"
                >
                  Stawa
                </Link>
              </div>
            </div>
            {deploymentDate && (
              <div className="text-sm text-gray-500 dark:text-gray-500">
                v{deploymentDate}
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
      className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${label} page`}
    >
      {React.cloneElement(icon, {
        className:
          "w-5 h-5 transform group-hover:scale-110 transition-transform duration-300",
      })}
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
        className="group flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        {React.cloneElement(icon, {
          className:
            "mr-3 w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-300 transform group-hover:scale-110",
        })}
        <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
          {label}
        </span>
      </Link>
    </li>
  );
}

export default Footer;
