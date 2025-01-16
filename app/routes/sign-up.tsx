import {
  useSubmit,
  useActionData,
  useLoaderData,
  Link,
  useFetcher,
} from "@remix-run/react";
import {
  json,
  ActionFunction,
  redirect,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaExclamationCircle,
  FaArrowRight,
  FaArrowLeft,
  FaCheck,
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserFriends,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import { UserProfile } from "~/types/user";
import { register, checkUsernameAvailability } from "~/services/auth.server";

import getTranslation from "~/utils/getTranslation.server";
import { MdOutlineMail } from "react-icons/md";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.title}` },
  { name: "description", content: data.description },
];

export const loader: LoaderFunction = async ({ request }) => {
  const registerTranslations = await getTranslation(request, "sign-up");
  const translations = await registerTranslations.json();
  return json({
    ...translations,
    hcaptchaSiteKey: process.env.VITE_HCAPTCHA_SITE_KEY,
  });
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const USERNAME_REGEX = /^[a-z0-9_]{3,16}$/;
const FULLNAME_REGEX = /^[a-zA-Z0-9\s]{3,24}$/;

const ERROR_CODES: Record<string, string> = {
  "auth/email-already-in-use": "emailAlreadyInUse",
  default: "defaultErrorDuringRegistration",
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const emailAddress = formData.get("emailAddress") as string;
  const username = formData.get("username") as string;
  const fullName = formData.get("fullName") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const authProvider = formData.get("authProvider") as string;
  const termsAndPrivacy = formData.get("termsAndPrivacy") as string;
  const hcaptchaToken = formData.get("h-captcha-response") as string;
  const fetchTranslations = await getTranslation(request, "sign-up");
  const translations = await fetchTranslations.json();

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

  if (authProvider === "github" || authProvider === "google") {
    return json(
      { error: translations.errors.externalLoginNotImplemented },
      { status: 501 }
    );
  }

  const existingUser = await checkUsernameAvailability(username);

  if (existingUser) {
    return json(
      { error: translations.errors.usernameAlreadyTaken },
      { status: 400 }
    );
  }

  if (
    !emailAddress ||
    !fullName ||
    !password ||
    !confirmPassword ||
    !username ||
    !termsAndPrivacy
  ) {
    return json(
      { error: translations.errors.allFieldsRequired },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(emailAddress)) {
    return json(
      { error: translations.errors.invalidEmailFormat },
      { status: 400 }
    );
  }

  if (!USERNAME_REGEX.test(username)) {
    return json(
      { error: translations.errors.invalidUsernameFormat },
      { status: 400 }
    );
  }

  if (!FULLNAME_REGEX.test(fullName)) {
    return json(
      { error: translations.errors.invalidFullNameFormat },
      { status: 400 }
    );
  }

  if (!PASSWORD_REGEX.test(password)) {
    return json(
      { error: translations.errors.passwordRequirements },
      { status: 400 }
    );
  }

  if (password !== confirmPassword) {
    return json(
      { error: translations.errors.passwordsDoNotMatch },
      { status: 400 }
    );
  }

  try {
    const registerResponse = await register(
      emailAddress,
      password,
      username,
      fullName
    );

    if (!registerResponse) {
      return json(
        { error: translations.errors.registrationFailed },
        { status: 401 }
      );
    }

    return redirect(`/sign-in`);
  } catch (error) {
    const errorMessage =
      ERROR_CODES[(error as { code?: string }).code || "default"];
    return json({ error: translations.errors[errorMessage] }, { status: 500 });
  }
};

const validatePasswordRequirement = (
  password: string,
  requirement: RegExp
): boolean => {
  return requirement.test(password);
};

const PASSWORD_REQUIREMENTS = {
  minLength: /.{8,}/,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumber: /\d/,
  hasSpecialChar: /[@$!%*?&]/,
};

export default function Register() {
  const translations = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const fetcher = useFetcher<{ error?: string }>();
  const actionData = useActionData<{ error?: string }>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const [formData, setFormData] = useState<
    Partial<UserProfile> & {
      password: string;
      confirmPassword: string;
      termsAndPrivacy: boolean;
    }
  >({
    emailAddress: "",
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    termsAndPrivacy: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  useEffect(() => {
    const newRequirements = {
      minLength: validatePasswordRequirement(
        formData.password || "",
        PASSWORD_REQUIREMENTS.minLength
      ),
      hasUpperCase: validatePasswordRequirement(
        formData.password || "",
        PASSWORD_REQUIREMENTS.hasUpperCase
      ),
      hasLowerCase: validatePasswordRequirement(
        formData.password || "",
        PASSWORD_REQUIREMENTS.hasLowerCase
      ),
      hasNumber: validatePasswordRequirement(
        formData.password || "",
        PASSWORD_REQUIREMENTS.hasNumber
      ),
      hasSpecialChar: validatePasswordRequirement(
        formData.password || "",
        PASSWORD_REQUIREMENTS.hasSpecialChar
      ),
    };
    setPasswordRequirements(newRequirements);
  }, [formData.password]);

  useEffect(() => {
    if (fetcher.state === "submitting") {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [fetcher.state]);

  useEffect(() => {
    if (formData.emailAddress && EMAIL_REGEX.test(formData.emailAddress)) {
      const data = new FormData();
      data.append("emailAddress", formData.emailAddress);
      fetcher.submit(data, { method: "post" });
    }
  }, [formData.emailAddress]);

  useEffect(() => {
    if (formData.username && USERNAME_REGEX.test(formData.username)) {
      const data = new FormData();
      data.append("username", formData.username);
      fetcher.submit(data, { method: "post" });
    }
  }, [formData.username]);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    loginMethod: string
  ) {
    event.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value.toString());
    });
    data.append("loginMethod", loginMethod);
    submit(data, { method: "post" });
  }

  function handleSocialLogin(provider: string) {
    const data = new FormData();
    data.append("authProvider", provider);
    submit(data, { method: "post" });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validateStep() {
    switch (step) {
      case 1:
        return EMAIL_REGEX.test(formData.emailAddress || "");
      case 2:
        return (
          USERNAME_REGEX.test(formData.username || "") &&
          FULLNAME_REGEX.test(formData.fullName || "")
        );
      case 3:
        return (
          PASSWORD_REGEX.test(formData.password) &&
          formData.password === formData.confirmPassword &&
          formData.termsAndPrivacy &&
          hcaptchaToken !== null
        );
      default:
        return false;
    }
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

          <div className="relative space-y-8">
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

            {/* Steps Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                {[
                  { step: 1, icon: <FaEnvelope />, label: "Email" },
                  { step: 2, icon: <FaUser />, label: "Profile" },
                  { step: 3, icon: <FaLock />, label: "Security" },
                ].map(({ step: i, icon, label }) => (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          i === step
                            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900"
                            : i < step
                            ? "bg-gradient-to-br from-emerald-400 to-emerald-500 text-white"
                            : "bg-gray-50 dark:bg-gray-800 text-gray-400"
                        }`}
                      >
                        {i < step ? <FaCheck className="h-5 w-5" /> : icon}
                      </motion.div>
                      <span
                        className={`text-sm font-medium mt-2 ${
                          i === step
                            ? "text-blue-600 dark:text-blue-400"
                            : i < step
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {i !== 3 && (
                      <motion.div
                        className={`w-24 h-0.5 ml-4 rounded-full transition-colors duration-300 ${
                          i < step
                            ? "bg-gradient-to-r from-blue-500 to-emerald-500"
                            : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <form
              onSubmit={(e) => handleSubmit(e, "credentials")}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="email-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                          <MdOutlineMail className="h-5 w-5 text-gray-400" />
                          {translations.email.label}
                        </div>
                      </label>
                      <div className="relative group">
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-white/50 dark:bg-gray-800/50 rounded-xl 
                          border border-gray-200 dark:border-gray-700 
                          focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                          hover:border-gray-300 dark:hover:border-gray-600
                          dark:text-white transition-all duration-200
                          placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          placeholder="name@example.com"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"></div>
                      </div>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {translations.email.note}
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="profile-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                          <FaUser className="h-5 w-5 text-gray-400" />
                          {translations.fullName.label}
                        </div>
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-white/50 dark:bg-gray-800/50 rounded-xl 
                          border border-gray-200 dark:border-gray-700 
                          focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                          hover:border-gray-300 dark:hover:border-gray-600
                          dark:text-white transition-all duration-200
                          placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          placeholder="Stawa"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"></div>
                      </div>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {translations.fullName.note}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                          <FaUserFriends className="h-5 w-5 text-gray-400" />
                          {translations.username.label}
                        </div>
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-white/50 dark:bg-gray-800/50 rounded-xl 
                          border border-gray-200 dark:border-gray-700 
                          focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                          hover:border-gray-300 dark:hover:border-gray-600
                          dark:text-white transition-all duration-200
                          placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          placeholder="imstawa"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"></div>
                      </div>
                      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        {translations.username.note}
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="security-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                          <FaLock className="h-5 w-5 text-gray-400" />
                          {translations.password.label}
                        </div>
                      </label>
                      <div className="relative group">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full pl-4 pr-12 py-3.5 bg-white/50 dark:bg-gray-800/50 rounded-xl 
                          border border-gray-200 dark:border-gray-700 
                          focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                          hover:border-gray-300 dark:hover:border-gray-600
                          dark:text-white transition-all duration-200
                          placeholder:text-gray-400 dark:placeholder:text-gray-500"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg
                          text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
                          hover:bg-gray-100 dark:hover:bg-gray-700
                          transition-colors duration-200"
                        >
                          {showPassword ? (
                            <FaEyeSlash className="h-5 w-5" />
                          ) : (
                            <FaEye className="h-5 w-5" />
                          )}
                        </button>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"></div>
                      </div>

                      {/* Password Requirements Checklist */}
                      <div className="mt-3 space-y-2 bg-gray-50/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                          Password must contain:
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          <div
                            className={`flex items-center gap-2 text-xs ${
                              passwordRequirements.minLength
                                ? "text-green-600 dark:text-green-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {passwordRequirements.minLength ? (
                              <FaCheck className="h-4 w-4 text-green-500" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600" />
                            )}
                            At least 8 characters
                          </div>
                          <div
                            className={`flex items-center gap-2 text-xs ${
                              passwordRequirements.hasUpperCase
                                ? "text-green-600 dark:text-green-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {passwordRequirements.hasUpperCase ? (
                              <FaCheck className="h-4 w-4 text-green-500" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600" />
                            )}
                            One uppercase letter
                          </div>
                          <div
                            className={`flex items-center gap-2 text-xs ${
                              passwordRequirements.hasLowerCase
                                ? "text-green-600 dark:text-green-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {passwordRequirements.hasLowerCase ? (
                              <FaCheck className="h-4 w-4 text-green-500" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600" />
                            )}
                            One lowercase letter
                          </div>
                          <div
                            className={`flex items-center gap-2 text-xs ${
                              passwordRequirements.hasNumber
                                ? "text-green-600 dark:text-green-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {passwordRequirements.hasNumber ? (
                              <FaCheck className="h-4 w-4 text-green-500" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600" />
                            )}
                            One number
                          </div>
                          <div
                            className={`flex items-center gap-2 text-xs ${
                              passwordRequirements.hasSpecialChar
                                ? "text-green-600 dark:text-green-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {passwordRequirements.hasSpecialChar ? (
                              <FaCheck className="h-4 w-4 text-green-500" />
                            ) : (
                              <div className="h-4 w-4 rounded-full border border-gray-300 dark:border-gray-600" />
                            )}
                            One special character (@$!%*?&)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <div className="flex items-center gap-2">
                          <FaLock className="h-5 w-5 text-gray-400" />
                          {translations.confirmPassword.label}
                        </div>
                      </label>
                      <div className="relative group">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full pl-4 pr-12 py-3.5 bg-white/50 dark:bg-gray-800/50 rounded-xl 
                          border transition-all duration-200
                          ${
                            formData.confirmPassword &&
                            formData.password === formData.confirmPassword
                              ? "border-green-500 dark:border-green-500"
                              : formData.confirmPassword
                              ? "border-red-500 dark:border-red-500"
                              : "border-gray-200 dark:border-gray-700"
                          }
                          focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                          hover:border-gray-300 dark:hover:border-gray-600
                          dark:text-white
                          placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg
                          text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
                          hover:bg-gray-100 dark:hover:bg-gray-700
                          transition-colors duration-200"
                        >
                          {showConfirmPassword ? (
                            <FaEyeSlash className="h-5 w-5" />
                          ) : (
                            <FaEye className="h-5 w-5" />
                          )}
                        </button>
                        {formData.confirmPassword && (
                          <div className="absolute right-12 top-1/2 -translate-y-1/2">
                            {formData.password === formData.confirmPassword ? (
                              <FaCheck className="h-5 w-5 text-green-500" />
                            ) : (
                              <FaExclamationCircle className="h-5 w-5 text-red-500" />
                            )}
                          </div>
                        )}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"></div>
                      </div>
                      {formData.confirmPassword &&
                        formData.password !== formData.confirmPassword && (
                          <p className="mt-2 text-xs text-red-500">
                            Passwords do not match
                          </p>
                        )}
                    </div>

                    <HCaptcha
                      ref={hcaptchaRef}
                      sitekey={translations.hcaptchaSiteKey}
                      onVerify={(token) => setHcaptchaToken(token)}
                    />

                    <div className="flex items-start gap-3 bg-gray-50/50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            name="termsAndPrivacy"
                            checked={formData.termsAndPrivacy}
                            onChange={handleInputChange}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 
                            focus:ring-2 focus:ring-blue-500/50
                            transition-all duration-200"
                          />
                        </div>
                      </div>
                      <label className="text-sm text-gray-600 dark:text-gray-400 select-none">
                        {translations.acceptTerms.label}{" "}
                        <Link
                          to="/terms"
                          className="font-medium text-blue-600 dark:text-blue-400 
                          hover:text-blue-700 dark:hover:text-blue-300 
                          transition-colors duration-200"
                        >
                          {translations.termsOfService.label}
                        </Link>
                        {" and "}
                        <Link
                          to="/privacy"
                          className="font-medium text-blue-600 dark:text-blue-400 
                          hover:text-blue-700 dark:hover:text-blue-300 
                          transition-colors duration-200"
                        >
                          {translations.privacyPolicy.label}
                        </Link>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center justify-center px-6 py-3.5 
                    text-sm font-medium text-gray-700 dark:text-gray-200 
                    bg-gray-100 dark:bg-gray-800/50 rounded-xl 
                    hover:bg-gray-200 dark:hover:bg-gray-700/50 
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-200 group"
                  >
                    <FaArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => validateStep() && setStep(step + 1)}
                    disabled={!validateStep()}
                    className={`flex items-center justify-center px-6 py-3.5 
                    text-sm font-medium text-white rounded-xl 
                    transition-all duration-200 group
                    ${
                      validateStep()
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        : "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                    }`}
                  >
                    Next
                    <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!validateStep() || isLoading}
                    className={`flex items-center justify-center px-6 py-3.5 
                    text-sm font-medium text-white rounded-xl 
                    transition-all duration-200 group relative
                    ${
                      validateStep() && !isLoading
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        : "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                    }`}
                  >
                    <span className="relative flex items-center">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Create Account
                          <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-700/0 opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                  </button>
                )}
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mt-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-[30%] border-t border-gray-200/50 dark:border-white/[0.05]"></div>
                  <div className="w-[40%]"></div>
                  <div className="w-[30%] border-t border-gray-200/50 dark:border-white/[0.05]"></div>
                </div>
                <div className="relative">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-md opacity-30 dark:opacity-50"></div>
                    <span className="relative px-6 py-1.5 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/[0.02] text-gray-500 dark:text-gray-400/70 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-white/[0.05] shadow-sm">
                      {translations.form.orContinueWith}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-1 gap-4 mt-6">
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
                      Sign up with Google
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
                      Sign up with Github
                    </span>
                  </span>
                </button>
              </div>

              {/* Sign In Link */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {translations.form.alreadyHaveAccount}{" "}
                  <Link
                    to="/sign-in"
                    className="font-medium text-blue-400 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    {translations.form.signIn}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
