"use client";
import React from "react";

const Footer: React.FC = () => {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <footer className="border-t border-sky-500 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-md mb-2">
          &copy; {new Date().getFullYear()} TriWikiTech. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="text-gray-400 hover:text-white"
            onClick={() => handleClick("Privacy Policy is not added yet!")}
          >
            Privacy Policy
          </a>
          <a
            className="text-gray-400 hover:text-white"
            onClick={() => handleClick("Terms of Service is not added yet!")}
          >
            Terms of Service
          </a>
          <a
            className="text-gray-400 hover:text-white"
            onClick={() => handleClick("Contact Us page is not added yet!")}
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
