"use client";

import { useState } from "react";
import { IoMdCode } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

interface MenuItem {
  title: string;
  href: string;
  enabled: boolean;
  blank: boolean;
}

interface NavbarMenu {
  [key: string]: MenuItem;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavbarMenus: NavbarMenu = {
    Home: {
      title: "Home",
      href: "/",
      enabled: true,
      blank: false,
    },
    Quiz: {
      title: "Quiz",
      href: "#",
      enabled: false,
      blank: true,
    },
    CodeCompilers: {
      title: "Code Compilers",
      href: "/compiler",
      enabled: true,
      blank: true,
    },
  };

  return (
    <nav className="border-b border-sky-500 relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-white flex items-center">
            <IoMdCode className="mr-2" /> TriWikiTech
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Full Menu for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {Object.keys(NavbarMenus).map((key) => {
            const { title, href, enabled, blank } = NavbarMenus[key];
            return (
              <a
                key={key}
                href={enabled ? href : "#"}
                className={`text-white font-semibold hover:text-sky-500 transition duration-300 flex items-center ${
                  enabled ? "" : "opacity-50 cursor-not-allowed"
                }`}
                target={blank && enabled ? "_blank" : "_self"}
                rel={blank && enabled ? "noopener noreferrer" : undefined}
              >
                {title}
                {blank && <FiExternalLink className="ml-1" />}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block bg-gray-800 border-t border-sky-500" : "hidden"
        }`}
      >
        <ul className="font-medium flex flex-col p-4 space-y-2">
          {Object.keys(NavbarMenus).map((key) => {
            const { title, href, enabled, blank } = NavbarMenus[key];
            return (
              <li key={key} className="relative">
                <a
                  href={enabled ? href : "#"}
                  className={`flex items-center justify-between rounded px-2 py-2 text-sm font-semibold ${
                    enabled
                      ? "text-white bg-gray-700 hover:bg-gray-600"
                      : "text-gray-500 bg-gray-600 cursor-not-allowed"
                  }`}
                  target={blank && enabled ? "_blank" : "_self"}
                  rel={blank && enabled ? "noopener noreferrer" : undefined}
                >
                  <span className="ml-1">{title}</span>
                  {blank && <FiExternalLink className="ml-2" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
