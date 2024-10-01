"use client";

import React, { useState, useEffect } from "react";
import { handleResetPassword } from "./handle";
import { useTranslations } from "next-intl";
import { FaCode } from "react-icons/fa";
import dynamic from "next/dynamic";

const GridBackground = dynamic(() => import("@components/grid"), {
  ssr: false,
});

const ResetPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const t = useTranslations("Reset");

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid) {
      setMessage(t("invalidEmail"));
      return;
    }
    try {
      const result = await handleResetPassword(email);
      setMessage(result.success ? t("resetEmailSent") : t(result.message));
    } catch (error) {
      setMessage(t("resetEmailError"));
      console.error(error);
    }
  };

  const renderForm = () => (
    <form className="mt-8 space-y-6" onSubmit={handleResetSubmit}>
      <div>
        <label htmlFor="email-address" className="sr-only">
          {t("emailAddress")}
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
            isEmailValid
              ? "border-green-500"
              : "border-gray-300 dark:border-gray-600"
          } placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700`}
          placeholder={t("emailAddress")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
          disabled={!isEmailValid}
        >
          {t("sendResetEmail")}
        </button>
      </div>
    </form>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-900">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-gray-100">
            <FaCode
              className="inline-block mb-1 mr-2 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
            TriWikiTech
          </h2>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
            {t("resetPassword")}
          </h3>
          {renderForm()}
          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.includes("sent")
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
