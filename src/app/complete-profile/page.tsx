"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaArrowLeft, FaSave, FaCode } from "react-icons/fa";
import { Report, Loading, Notify } from "notiflix";
import { updateProfile } from "./handle";
import { getUserData } from "@default/components/user";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { checkUsernameExists } from "@app/register/check";

const GridBackground = dynamic(() => import("@components/grid"), {
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-900">
    <GridBackground />
    <div className="relative z-10">{children}</div>
  </div>
);

const CompleteProfile = () => {
  const router = useRouter();
  const t = useTranslations("CompleteProfile");
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({
    name: "",
    displayName: "",
  });

  useEffect(() => {
    const checkUserProfile = async () => {
      const userData = await getUserData();
      if (userData?.name && userData?.displayName) {
        router.push(`/profile/${userData.name}`);
      } else {
        setProfile({
          name: userData?.name?.toLowerCase() || "",
          displayName: userData?.displayName || "",
        });
      }
    };

    checkUserProfile();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "displayName" && value.length > 16) return;
    setProfile((prev) => ({
      ...prev,
      [name]: name === "name" ? value.toLowerCase() : value,
    }));
  };

  const validateField = async (field: string, value: string) => {
    if (!value.trim()) {
      Notify.failure(t("fieldValidationError", { field }));
      return false;
    }
    if (field === t("name")) {
      const isValid = /^[a-z0-9]+$/.test(value);
      if (!isValid) {
        Notify.failure(t("invalidUsername"));
        return false;
      }
      const usernameExists = await checkUsernameExists(value);
      if (usernameExists) {
        Notify.failure(t("usernameAlreadyExists"));
        return false;
      }
    }
    if (field === t("displayName")) {
      const regex = /^[a-zA-Z0-9 ]{1,16}$/;
      if (!regex.test(value)) {
        Notify.failure(t("invalidDisplayName"));
        return false;
      }
    }
    return true;
  };

  const handleNext = async () => {
    if (await validateField(t("name"), profile.name)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSave = async () => {
    if (!(await validateField(t("displayName"), profile.displayName))) return;

    Loading.circle(t("savingProfile"));
    try {
      await updateProfile(profile);
      Loading.remove();
      Notify.success(t("profileUpdateSuccess"));
      router.push(`/profile/${profile.name}`);
    } catch (error) {
      Loading.remove();
      console.error("Error saving profile:", error);
      Report.failure(t("error"), t("profileUpdateError"), t("okay"));
    }
  };

  const renderInput = (name: keyof typeof profile, placeholder: string) => (
    <div className="relative mb-4 md:mb-6">
      <input
        type="text"
        name={name}
        value={profile[name]}
        onChange={handleInputChange}
        placeholder=" "
        className="peer h-12 sm:h-14 w-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 rounded-lg px-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
      />
      <label
        htmlFor={name}
        className="absolute rounded-lg left-3 -top-3 text-gray-600 dark:text-gray-400 text-sm transition-all scale-75 origin-[0] bg-white dark:bg-gray-800 px-2"
      >
        {placeholder}
      </label>
    </div>
  );

  const renderButton = (
    text: string,
    onClick: () => void,
    icon: React.ReactNode,
    bgColor: string
  ) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full p-3 ${bgColor} text-white rounded-lg hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-base sm:text-lg`}
    >
      {icon} <span className="mx-2">{text}</span>
    </button>
  );

  const steps = [
    {
      input: renderInput("name", t("enterName")),
      button: renderButton(
        t("next"),
        handleNext,
        <FaArrowRight />,
        "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
      ),
    },
    {
      input: renderInput("displayName", t("enterDisplayName")),
      button: renderButton(
        t("save"),
        handleSave,
        <FaSave />,
        "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
      ),
    },
  ];

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-gray-100">
            <FaCode
              className="inline-block mb-1 mr-2 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
            {t("completeYourProfile")}
          </h1>
          {steps[step].input}
          <div className="flex space-x-4">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center justify-center w-1/2 p-3 bg-gray-500 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-base sm:text-lg"
              >
                <FaArrowLeft /> <span className="ml-2">{t("back")}</span>
              </button>
            )}
            <div className={`${step > 0 ? "w-1/2" : "w-full"}`}>
              {steps[step].button}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompleteProfile;
