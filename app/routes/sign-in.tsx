import {
  useSubmit,
  useActionData,
  useLoaderData,
  Link,
} from "@remix-run/react";
import {
  json,
  ActionFunction,
  redirect,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import {
  login,
  loginWithGitHub,
  loginWithGoogle,
} from "~/services/auth.server";
import getTranslation from "~/utils/getTranslation.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.title}` },
  { name: "description", content: data.description },
];

export const loader: LoaderFunction = async ({ request }) => {
  const signInTranslations = await getTranslation(request, "sign-in");
  const translations = await signInTranslations.json();
  return json({
    ...translations,
    hcaptchaSiteKey: process.env.VITE_HCAPTCHA_SITE_KEY,
  });
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const action: ActionFunction = async ({ request }) => {
  const fetchTranslations = await getTranslation(request, "sign-in");
  const translations = await fetchTranslations.json();
  const formData = await request.formData();
  const emailAddress = formData.get("emailAddress") as string;
  const password = formData.get("password") as string;
  const authProvider = formData.get("authProvider") as string;
  const hcaptchaToken = formData.get("h-captcha-response") as string;

  if (authProvider !== "credentials" && (!emailAddress || !password)) {
    try {
      let sessionToken;
      if (authProvider === "google") {
        sessionToken = await loginWithGoogle();
      } else if (authProvider === "github") {
        sessionToken = await loginWithGitHub();
      } else {
        return json(
          { error: translations.errors.invalidAuthProvider },
          { status: 400 }
        );
      }

      if (!sessionToken) {
        return json({ error: translations.errors.authFailed }, { status: 401 });
      }

      return redirect("/profile", {
        headers: {
          "Set-Cookie": sessionToken,
        },
      });
    } catch (error) {
      return json(
        { error: translations.errors.externalLoginNotImplemented },
        { status: 501 }
      );
    }
  }

  if (authProvider === "credentials") {
    if (!hcaptchaToken) {
      return json(
        { error: "Please complete the CAPTCHA verification" },
        { status: 400 }
      );
    }

    const verifyResponse = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.VITE_HCAPTCHA_SECRET as string,
        response: hcaptchaToken,
      }),
    });

    const verifyResult = await verifyResponse.json();
    if (!verifyResult.success) {
      return json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }
  }

  if (!emailAddress || !password) {
    return json(
      { error: translations.errors.emailPasswordRequired },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(emailAddress)) {
    return json(
      { error: translations.errors.invalidEmailFormat },
      { status: 400 }
    );
  }

  if (!PASSWORD_REGEX.test(password)) {
    return json(
      { error: translations.errors.passwordRequirements },
      { status: 400 }
    );
  }

  try {
    const sessionToken = await login(emailAddress, password);
    if (!sessionToken) {
      return json({ error: translations.errors.authFailed }, { status: 401 });
    }
    return redirect("/", {
      headers: {
        "Set-Cookie": sessionToken,
      },
    });
  } catch (error) {
    return json(
      { error: translations.errors.incorrectEmailPassword },
      { status: 401 }
    );
  }
};

export default function Login() {
  const translations = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const actionData = useActionData<{ error?: string }>();
  const [showPassword, setShowPassword] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    authProvider: string
  ) {
    event.preventDefault();
    if (authProvider === "credentials" && !hcaptchaToken) {
      return;
    }
    const data = new FormData(event.currentTarget);
    data.append("authProvider", authProvider);
    submit(data, { method: "post" });
  }

  const onHCaptchaChange = (token: string) => {
    setHcaptchaToken(token);
  };

  function handleSocialLogin(provider: string) {
    const data = new FormData();
    data.append("authProvider", provider);
    submit(data, { method: "post" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 dark:bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-[0.02] dark:opacity-30"></div>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-2xl mx-auto z-10">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative backdrop-blur-lg bg-white/80 dark:bg-white/[0.02] rounded-2xl shadow-lg dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] border border-gray-200/50 dark:border-white/[0.05] p-8 overflow-hidden"
        >
          {/* Card background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/50 to-gray-50/50 dark:from-blue-500/[0.02] dark:via-purple-500/[0.02] dark:to-pink-500/[0.02]"></div>
          <div className="absolute inset-0 bg-grid-gray-500/[0.02] dark:bg-grid-white/[0.01]"></div>

          <div className="relative space-y-8 mx-6">
            {/* Error Message */}
            {actionData?.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/20 dark:border-red-500/30 backdrop-blur-sm"
              >
                <div className="flex items-center text-red-400 dark:text-red-500">
                  <FaExclamationCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    {actionData.error}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Logo Section */}
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <div className="relative p-4 bg-gradient-to-br from-white/50 to-white/30 dark:from-white/[0.03] dark:to-transparent rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-white/[0.05] shadow-xl">
                  <div className="flex items-center justify-center space-x-3">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-200 dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
                      TriWikiTech
                    </h1>
                  </div>
                </div>
              </div>
              <p className="text-gray-600/90 dark:text-gray-400/60 text-sm max-w-sm mx-auto">
                {translations.form.description}
              </p>
            </div>

            {/* Login Form and hCaptcha Container */}
            <div className="space-y-6">
              <form
                onSubmit={(e) => handleSubmit(e, "credentials")}
                className="space-y-6"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block text-sm font-medium text-gray-600 dark:text-gray-400/70 mb-2"
                    >
                      Email
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdOutlineMail className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
                      </div>
                      <input
                        id="emailAddress"
                        type="email"
                        name="emailAddress"
                        autoComplete="email"
                        required
                        className="block w-full pl-10 pr-3 py-3 border-0 bg-white/80 dark:bg-white/[0.02] backdrop-blur-sm text-gray-600 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/90 dark:focus:bg-white/[0.03] transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400/70 hover:bg-white/90 dark:hover:bg-white/[0.03]"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-600 dark:text-gray-400/70 mb-2"
                    >
                      Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdOutlineVpnKey className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="current-password"
                        required
                        className="block w-full pl-10 pr-10 py-3 border-0 bg-white/80 dark:bg-white/[0.02] backdrop-blur-sm text-gray-600 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/90 dark:focus:bg-white/[0.03] transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400/70 hover:bg-white/90 dark:hover:bg-white/[0.03]"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <FaEyeSlash className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors duration-200" />
                        ) : (
                          <FaEye className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors duration-200" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400/70">
                  Forgot Password?
                  <Link
                    to="/forgot-password"
                    className="ml-2 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                  >
                    Reset Password
                  </Link>
                </div>

                {/* hCaptcha Container */}
                <HCaptcha
                  ref={hcaptchaRef}
                  sitekey={translations.hcaptchaSiteKey}
                  onVerify={onHCaptchaChange}
                />

                <button
                  type="submit"
                  disabled={!hcaptchaToken}
                  className={`w-full relative flex justify-center py-3 px-4 rounded-xl text-sm font-medium overflow-hidden group ${
                    hcaptchaToken
                      ? "text-gray-600 dark:text-white"
                      : "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r transition-all duration-300 ${
                      hcaptchaToken
                        ? "from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-400"
                        : "from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600"
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent transition-all duration-500 ${
                      !hcaptchaToken && "group-hover:opacity-0"
                    }`}
                  ></div>
                  <span className="relative flex items-center gap-2">
                    Sign In
                    <svg
                      className={`w-4 h-4 transition-all duration-300 ${
                        hcaptchaToken ? "group-hover:translate-x-1" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
                {!hcaptchaToken && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                    Please complete the CAPTCHA to enable sign in
                  </p>
                )}
              </form>
            </div>

            {/* Social Login Section */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="font-medium text-blue-400 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300"
                >
                  Sign up
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-[30%] border-t border-gray-200/50 dark:border-white/[0.05]"></div>
                <div className="w-[40%]"></div>
                <div className="w-[30%] border-t border-gray-200/50 dark:border-white/[0.05]"></div>
              </div>
              <div className="relative">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-md opacity-30 dark:opacity-50"></div>
                  <span className="relative px-6 py-1.5 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/[0.02] text-gray-500 dark:text-gray-400/70 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-white/[0.05] shadow-sm">
                    or continue with
                  </span>
                </div>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-1 gap-4">
              <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="group relative flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-white overflow-hidden transition-all duration-300 bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-white/[0.05] hover:bg-white dark:hover:bg-white/[0.02]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 dark:from-white/20 via-transparent to-transparent transition-all duration-500"></div>
                <span className="relative flex items-center gap-3">
                  <div className="p-1.5 bg-white rounded-lg shadow-sm">
                    <FcGoogle className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="border-l border-gray-200 dark:border-white/10 pl-3">
                    Sign in with Google
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("github")}
                className="group relative flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-white overflow-hidden transition-all duration-300 bg-gray-50 dark:bg-transparent border border-gray-200 dark:border-white/[0.05] hover:bg-white dark:hover:bg-white/[0.02]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 dark:from-white/20 via-transparent to-transparent transition-all duration-500"></div>
                <span className="relative flex items-center gap-3">
                  <div className="p-1.5 bg-gray-800 dark:bg-white/10 rounded-lg">
                    <FaGithub className="h-5 w-5 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="border-l border-gray-200 dark:border-white/10 pl-3">
                    Sign in with Github
                  </span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
