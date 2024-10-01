"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { setCookieConsent, getCookieConsent } from "./cookie";

const CookieBanner: React.FC = () => {
  const t = useTranslations("CookieBanner");
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const fetchConsent = async () => {
      const storedConsent = await getCookieConsent();
      if (storedConsent) {
        setConsent(storedConsent);
      }
    };
    fetchConsent();
  }, []);

  if (consent) return null;

  const handleAccept = async () => {
    await setCookieConsent("true");
    setConsent("true");
  };

  const handleDecline = async () => {
    await setCookieConsent("false");
    setConsent("false");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm mb-4 sm:mb-0 sm:mr-4">{t("message")}</p>
        <div className="flex space-x-2">
          <button
            onClick={handleAccept}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {t("accept")}
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {t("decline")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
