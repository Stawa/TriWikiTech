"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaCode, FaGithub, FaUserPlus } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { signInWithProvider } from "@app/login/redirect";

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
}: {
  id: string;
  type: string;
  label: string;
}) => (
  <div className="relative mb-4 sm:mb-6">
    <input
      type={type}
      id={id}
      className="peer h-12 sm:h-14 w-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 rounded-lg px-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
      placeholder=" "
    />
    <label
      htmlFor={id}
      className="absolute rounded-lg left-3 -top-3 text-gray-600 dark:text-gray-400 text-sm transition-all scale-75 origin-[0] bg-white dark:bg-gray-800 px-2"
    >
      {label}
    </label>
  </div>
);

const PasswordField = ({
  showPassword,
  togglePasswordVisibility,
}: {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}) => (
  <div className="relative mb-6 sm:mb-8">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      className="peer h-12 sm:h-14 w-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 rounded-lg px-4 pr-12 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
      placeholder=" "
    />
    <label
      htmlFor="password"
      className="absolute rounded-lg left-3 -top-3 text-gray-600 dark:text-gray-400 text-sm transition-all scale-75 origin-[0] bg-white dark:bg-gray-800 px-2"
    >
      Password
    </label>
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute inset-y-0 right-3 flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
    >
      {showPassword ? (
        <VscEyeClosed size={20} className="sm:text-2xl" />
      ) : (
        <VscEye size={20} className="sm:text-2xl" />
      )}
    </button>
  </div>
);

const SubmitButton = ({ isRegister }: { isRegister: boolean }) => (
  <button
    type="submit"
    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mt-2 flex items-center justify-center w-full text-white py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
  >
    {isRegister ? "Register" : "Login"}
    {isRegister ? (
      <FaUserPlus className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    ) : (
      <FaArrowRightToBracket className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    )}
  </button>
);

const AuthLinks = ({ isRegister }: { isRegister: boolean }) => (
  <div
    className={`mt-4 sm:mt-6 text-center ${isRegister ? "flex justify-center" : "flex justify-between"}`}
  >
    {isRegister ? (
      <a
        href="/login"
        className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-300 font-medium"
      >
        Already have an account? Login
      </a>
    ) : (
      <>
        <a
          href="/register"
          className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-300 font-medium"
        >
          Register
        </a>
        <a
          href="#"
          className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-300 font-medium"
        >
          Reset Password
        </a>
      </>
    )}
  </div>
);

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
  >
    {children}
  </button>
);

const AuthTemplate: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const pathname = usePathname();
  const isRegister = pathname === "/register";

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleGithubAuth = async () => {
    await signInWithProvider({ provider: "github", redirectTo: "/profile" });
  };

  const handleGoogleAuth = async () => {
    await signInWithProvider({ provider: "google", redirectTo: "/profile" });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-gray-100">
            <FaCode className="inline-block mb-1 mr-2 text-blue-600 dark:text-blue-400" />
            TriWikiTech
          </h2>
          <form>
            {isRegister && (
              <>
                <InputField id="username" type="text" label="Username" />
                <InputField id="displayName" type="text" label="Display Name" />
              </>
            )}
            <InputField id="email" type="email" label="Email Address" />
            <PasswordField
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
            <SubmitButton isRegister={isRegister} />
            <AuthLinks isRegister={isRegister} />
          </form>
          <div className="mt-6 sm:mt-8 text-center">
            <div className="flex items-center my-4 sm:my-6">
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
              <span className="px-4 text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">
                or
              </span>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>
            <SocialAuthButton provider="github" onClick={handleGithubAuth}>
              <FaGithub className="mr-2 mb-0.5 text-xl sm:text-2xl" />
              {isRegister ? "Register" : "Login"} with GitHub
            </SocialAuthButton>
            <SocialAuthButton provider="google" onClick={handleGoogleAuth}>
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.5 0 48 48"
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
              <span>{isRegister ? "Register" : "Login"} with Google</span>
            </SocialAuthButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthTemplate;
