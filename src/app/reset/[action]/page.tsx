"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { handlePasswordReset } from "@app/reset/handle";
import { useTranslations } from "next-intl";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import dynamic from "next/dynamic";

const GridBackground = dynamic(() => import("@components/grid"), {
  ssr: false,
});

const ResetActionPage = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [oobCode, setOobCode] = useState("");
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const searchParams = useSearchParams();
  const t = useTranslations("ResetAction");

  useEffect(() => {
    const code = searchParams.get("oobCode");
    if (code) setOobCode(code);
  }, [searchParams]);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])(?!.*[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]).{8,}$/u;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "newPassword") {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const calculatePasswordStrength = (password: string) => {
    const criteria = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[!@#$&*]/.test(password),
    ];
    return criteria.filter(Boolean).length;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = formData;

    if (newPassword !== confirmPassword) {
      setMessage(t("passwordMismatch"));
      return;
    }
    if (!passwordRegex.test(newPassword)) {
      setMessage(t("passwordRequirements"));
      return;
    }
    try {
      const result = await handlePasswordReset(oobCode, newPassword);
      setMessage(t(result.message));
    } catch (error) {
      setMessage(t("resetError"));
      console.error(error);
    }
  };

  const getPasswordStrengthColor = (strength: number) => {
    const colors = [
      "",
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
    ];
    return colors[strength] || "";
  };

  const togglePasswordVisibility = (
    field: "newPassword" | "confirmPassword"
  ) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const renderPasswordField = (field: "newPassword" | "confirmPassword") => (
    <div key={field} className="mb-4">
      <label
        htmlFor={field}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {t(field)}
      </label>
      <div className="relative">
        <input
          id={field}
          name={field}
          type={showPassword[field] ? "text" : "password"}
          required
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700 pr-10"
          placeholder={t(field)}
          value={formData[field]}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-10"
          onClick={() => togglePasswordVisibility(field)}
        >
          {showPassword[field] ? (
            <VscEye className="h-5 w-5 text-gray-500" />
          ) : (
            <VscEyeClosed className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
      {field === "newPassword" && (
        <div className="mt-2 h-2 bg-gray-200 rounded-full">
          <div
            className={`h-full rounded-full ${getPasswordStrengthColor(passwordStrength)}`}
            style={{ width: `${passwordStrength * 20}%` }}
          ></div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-900">
      <GridBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {t("resetPassword")}
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              {renderPasswordField("newPassword")}
              {renderPasswordField("confirmPassword")}
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105"
              >
                {t("resetPassword")}
              </button>
            </div>
          </form>
          {message && (
            <p
              className={`mt-2 text-center text-sm ${
                message.includes("success")
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

export default ResetActionPage;
