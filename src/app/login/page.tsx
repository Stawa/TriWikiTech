"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaGoogle } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { signInWithProvider } from "@default/app/login/redirect";
import GridBackground from "@components/grid";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen overflow-hidden">
    <GridBackground />
    <div className="relative z-10">{children}</div>
  </div>
);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGithubLogin = async () => {
    await signInWithProvider({ provider: "github", redirectTo: "/" });
  };

  const handleGoogleLogin = async () => {
    await signInWithProvider({ provider: "google", redirectTo: "/" });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            <FaCode className="inline-block mb-1 mr-2" />
            TriWikiTech
          </h2>
          <form>
            <div className="relative mb-4">
              <input
                type="text"
                id="Email"
                className="peer h-12 w-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 rounded-md px-3 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                placeholder=" "
              />
              <label
                htmlFor="Email"
                className="absolute rounded-lg left-3 top-2 text-gray-600 dark:text-gray-400 text-base sm:text-sm transition-all scale-75 -translate-y-4 origin-[0] bg-white dark:bg-gray-900 px-2"
              >
                Email Address
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="peer h-12 w-full border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 rounded-md px-3 pr-10 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute rounded-lg left-3 top-2 text-gray-600 dark:text-gray-400 text-base sm:text-sm transition-all scale-75 -translate-y-4 origin-[0] bg-white dark:bg-gray-900 px-2"
              >
                Password
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {showPassword ? (
                  <VscEyeClosed size={20} />
                ) : (
                  <VscEye size={20} />
                )}
              </button>
            </div>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 mt-2 flex items-center justify-center w-full text-white py-3 rounded-md transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Login
              <FaArrowRightToBracket className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <div className="flex justify-between mt-4 items-center text-center">
              <a
                href="/register"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-200"
              >
                Register
              </a>
              <a
                href="#"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition duration-200"
              >
                Reset Password
              </a>
            </div>
          </form>
          <div className="mt-6 text-center">
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
              <span className="px-4 text-gray-600 dark:text-gray-400">or</span>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>
            <button
              onClick={handleGithubLogin}
              className="bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-950 dark:hover:bg-zinc-900 mt-2 flex items-center justify-center w-full text-white py-3 rounded-md transition-colors"
            >
              <FaGithub className="mr-2 mb-0.5" />
              Login with GitHub
            </button>
            <button
              onClick={handleGoogleLogin}
              className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 mt-2 flex items-center justify-center w-full text-gray-800 dark:text-white py-3 rounded-md transition-colors border border-gray-300 dark:border-gray-600"
            >
              <svg
                className="h-4 w-4 mr-2"
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
              <span>Login with Google</span>
            </button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default LoginPage;
