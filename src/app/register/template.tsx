"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaCode, FaGithub, FaUserPlus, FaCheck, FaTimes } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { signInWithProvider } from "@app/login/redirect";
import {
  checkAndAddUser,
  checkEmailExists,
  checkUsernameExists,
} from "./check";
import { Report, Loading, Notify } from "notiflix";
import { useTranslations } from "next-intl";
import { getUserData } from "@default/components/user";

const GridBackground = dynamic(() => import("@components/grid"), {
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-900">
    <GridBackground />
    <div className="relative z-10">{children}</div>
  </div>
);

const InputField = ({
  id,
  type,
  label,
  autocomplete,
  value,
  onChange,
  isValid,
  errorMessage,
}: {
  id: string;
  type: string;
  label: string;
  autocomplete: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean | null;
  errorMessage: string;
}) => {
  const inputClasses = `peer h-12 sm:h-14 w-full border-2 ${
    value === ""
      ? "border-gray-300 dark:border-gray-600"
      : isValid === false
        ? "border-red-500 dark:border-red-400"
        : "border-green-500 dark:border-green-400"
  } text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 rounded-lg px-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300`;

  return (
    <div
      className={`relative ${
        isValid || value === "" ? "mb-4 md:mb-2" : "mb-20 md:mb-12"
      }`}
    >
      <input
        type={type}
        id={id}
        name={id}
        autoComplete={autocomplete}
        value={value}
        onChange={onChange}
        className={inputClasses}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute rounded-lg left-3 -top-3 text-gray-600 dark:text-gray-400 text-sm transition-all scale-75 origin-[0] bg-white dark:bg-gray-800 px-2"
      >
        {label}
      </label>
      {isValid !== null && value !== "" && (
        <span
          className={`absolute ${id === "password" ? "right-14" : "right-3"} top-1/2 transform -translate-y-1/2 flex items-center`}
        >
          {isValid ? (
            <FaCheck className="text-green-500 w-5 h-5 block align-middle" />
          ) : (
            <FaTimes className="text-red-500 w-5 h-5 block align-middle" />
          )}
        </span>
      )}
      {!isValid && value !== "" && errorMessage && (
        <p className="absolute mt-1 left-0 text-xs text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

const PasswordField = ({
  showPassword,
  togglePasswordVisibility,
  value,
  onChange,
  isValid,
  errorMessage,
}: {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean | null;
  errorMessage: string;
}) => {
  const t = useTranslations("Auth");
  return (
    <div
      className={`relative ${
        isValid || value === "" ? "mb-4 md:mb-2" : "mb-20 md:mb-12"
      }`}
    >
      <InputField
        id="password"
        type={showPassword ? "text" : "password"}
        label={t("password")}
        autocomplete="current-password"
        value={value}
        onChange={onChange}
        isValid={isValid}
        errorMessage={errorMessage}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 flex items-center justify-center w-14 h-full text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        aria-label={showPassword ? t("hidePassword") : t("showPassword")}
      >
        {showPassword ? (
          <VscEyeClosed size={24} className="sm:text-3xl" />
        ) : (
          <VscEye size={24} className="sm:text-3xl" />
        )}
      </button>
    </div>
  );
};

const SubmitButton = ({
  isRegister,
  isLoading,
}: {
  isRegister: boolean;
  isLoading: boolean;
}) => {
  const t = useTranslations("Auth");
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mt-2 flex items-center justify-center w-full text-white py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <span className="flex items-center">
          {t("loading")}
          <span className="ml-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        </span>
      ) : (
        <>
          {isRegister ? t("register") : t("login")}
          {isRegister ? (
            <FaUserPlus
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          ) : (
            <FaArrowRightToBracket
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          )}
        </>
      )}
    </button>
  );
};

const AuthLinks = ({ isRegister }: { isRegister: boolean }) => {
  const t = useTranslations("Auth");
  return (
    <div
      className={`mt-4 sm:mt-6 text-center ${isRegister ? "flex justify-center" : "flex justify-between"}`}
    >
      {isRegister ? (
        <a
          href="/login"
          className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-300 font-medium p-2"
        >
          {t("alreadyHaveAccount")}
        </a>
      ) : (
        <>
          <a
            href="/register"
            className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-300 font-medium p-2"
          >
            {t("register")}
          </a>
          <a
            href="#"
            className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-300 font-medium p-2"
          >
            {t("resetPassword")}
          </a>
        </>
      )}
    </div>
  );
};

const SocialAuthButton = ({
  provider,
  onClick,
  children,
}: {
  provider: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`${
      provider === "github"
        ? "bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-white"
        : "bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
    } mt-2 flex items-center justify-center w-full py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
    aria-label={`${provider === "github" ? "GitHub" : "Google"} authentication`}
  >
    {children}
  </button>
);

const useFormValidation = (isRegister: boolean) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [usernameValid, setUsernameValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const [displayNameValid, setDisplayNameValid] = useState<boolean | null>(
    null
  );
  const [emailError, setEmailError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const t = useTranslations("Auth");

  useEffect(() => {
    const validateEmail = async () => {
      if (email.length === 0) {
        setEmailValid(null);
        setEmailError(null);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailValid(false);
        setEmailError(t("invalidEmail"));
        return;
      }

      const { emailExists, emailInUseWithDifferentProvider } =
        await checkEmailExists(email, !isRegister);

      if (emailInUseWithDifferentProvider) {
        setEmailValid(false);
        setEmailError(t("emailInUseWithDifferentProvider"));
      } else if (isRegister && emailExists) {
        setEmailValid(false);
        setEmailError(t("emailAlreadyRegistered"));
      } else {
        setEmailValid(true);
        setEmailError(null);
      }
    };

    validateEmail();
  }, [email, isRegister, t]);

  useEffect(() => {
    const validateUsername = async () => {
      if (username.length > 0) {
        const usernameExists = await checkUsernameExists(username);
        const isValid = /^[a-zA-Z0-9]+$/.test(username);
        setUsernameValid(!usernameExists && isValid);
        if (usernameExists) {
          setUsernameError(t("usernameExists"));
        } else if (!isValid) {
          setUsernameError(t("usernameError"));
        } else {
          setUsernameError(null);
        }
      } else {
        setUsernameValid(null);
        setUsernameError(null);
      }
    };
    validateUsername();
  }, [username, t]);

  useEffect(() => {
    const validatePassword = () => {
      if (password.length > 0) {
        const regex =
          /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])(?!.*[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]).{8,}$/u;
        setPasswordValid(regex.test(password));
      } else {
        setPasswordValid(null);
      }
    };
    validatePassword();
  }, [password]);

  useEffect(() => {
    const validateDisplayName = () => {
      if (displayName.length > 0) {
        const regex = /^[a-zA-Z0-9 ]{1,16}$/;
        setDisplayNameValid(regex.test(displayName));
      } else {
        setDisplayNameValid(null);
      }
    };
    validateDisplayName();
  }, [displayName]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    displayName,
    setDisplayName,
    emailValid,
    usernameValid,
    passwordValid,
    displayNameValid,
    emailError,
    usernameError,
    acceptTerms,
    setAcceptTerms,
  };
};

const AuthTemplate: React.FC = () => {
  const t = useTranslations("Auth");
  const router = useRouter();
  const pathname = usePathname();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isRegister = pathname === "/register";

  useEffect(() => {
    const checkSession = async () => {
      const userData = await getUserData();
      if (userData) {
        router.push(`/profile/${userData.name}`);
      }
    };
    checkSession();
  }, [router]);

  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    displayName,
    setDisplayName,
    emailValid,
    usernameValid,
    passwordValid,
    displayNameValid,
    emailError,
    usernameError,
    acceptTerms,
    setAcceptTerms,
  } = useFormValidation(isRegister);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleProviderAuth = async (provider: "github" | "google") => {
    await signInWithProvider({ provider });
  };

  const handleGithubAuth = () => handleProviderAuth("github");
  const handleGoogleAuth = () => handleProviderAuth("google");

  const handleCredentialsAuth = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !emailValid ||
      !passwordValid ||
      (isRegister && (!usernameValid || !displayNameValid || !acceptTerms))
    ) {
      Report.failure(t("formError"), t("formErrorMessage"), t("ok"));
      return;
    }

    setIsLoading(true);

    try {
      if (isRegister) {
        await checkAndAddUser(email, username, displayName, password, false);
        Notify.success(t("registrationSuccess"));
        router.push(`/login`);
      } else {
        await signInWithProvider({
          provider: "credentials",
          formData: { email, password, redirect: false },
        });
        const userData = await getUserData();
        if (userData) {
          Notify.success(t("loginSuccess"));
          router.push(`/profile/${userData.name}`);
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "EmailInUseWithDifferentProvider") {
          Report.failure(
            t("signInError"),
            t("emailInUseWithDifferentProvider"),
            t("ok")
          );
        } else if (error.message === "EmailAlreadyExists") {
          Report.failure(t("signInError"), t("emailAlreadyExists"), t("ok"));
        } else {
          Report.failure(t("signInError"), t("incorrectCredentials"), t("ok"));
        }
      } else {
        Report.failure(t("signInError"), t("unexpectedError"), t("ok"));
      }
    } finally {
      setIsLoading(false);
      Loading.remove();
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-gray-100">
            <FaCode
              className="inline-block mb-1 mr-2 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
            TriWikiTech
          </h2>
          <form onSubmit={handleCredentialsAuth}>
            {isRegister && (
              <>
                <InputField
                  id="username"
                  type="text"
                  label={t("username")}
                  autocomplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isValid={usernameValid}
                  errorMessage={usernameError || ""}
                />
                <InputField
                  id="displayName"
                  type="text"
                  label={t("displayName")}
                  autocomplete="name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  isValid={displayNameValid}
                  errorMessage={t("displayNameError")}
                />
              </>
            )}
            <InputField
              id="email"
              type="email"
              label={t("email")}
              autocomplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isValid={emailValid}
              errorMessage={emailError || ""}
            />
            <PasswordField
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isValid={passwordValid}
              errorMessage={t("passwordRequirements")}
            />
            {isRegister && (
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {t("acceptTerms")}
                  <a
                    href="/tos"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {t("termsOfService")}
                  </a>
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
            )}
            <SubmitButton isRegister={isRegister} isLoading={isLoading} />
            <AuthLinks isRegister={isRegister} />
          </form>
          <div className="mt-6 sm:mt-8 text-center">
            <div className="flex items-center my-4 sm:my-6">
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
              <span className="px-4 text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">
                {t("or")}
              </span>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>
            <SocialAuthButton provider="github" onClick={handleGithubAuth}>
              <FaGithub
                className="mr-2 mb-0.5 text-xl sm:text-2xl"
                aria-hidden="true"
              />
              {isRegister
                ? t("registerWith", { provider: "GitHub" })
                : t("loginWith", { provider: "GitHub" })}
            </SocialAuthButton>
            <SocialAuthButton provider="google" onClick={handleGoogleAuth}>
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.5 0 48 48"
                aria-hidden="true"
              >
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span>
                {isRegister
                  ? t("registerWith", { provider: "Google" })
                  : t("loginWith", { provider: "Google" })}
              </span>
            </SocialAuthButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthTemplate;
