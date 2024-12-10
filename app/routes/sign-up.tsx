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
import { useState, useEffect } from "react";

import { UserProfile } from "~/types/user";
import { register, checkUsernameAvailability } from "~/services/auth.server";

import getTranslation from "~/utils/getTranslation.server";
import { MdOutlineMail } from "react-icons/md";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.title}` },
  { name: "description", content: data.description },
];

export const loader: LoaderFunction = async ({ request }) => {
  const registerTranslations = await getTranslation(request, "register");
  return registerTranslations;
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
  const fetchTranslations = await getTranslation(request, "register");
  const translations = await fetchTranslations.json();

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

export default function Register() {
  const translations = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const fetcher = useFetcher<{ error?: string }>();
  const actionData = useActionData<{ error?: string }>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
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
          formData.termsAndPrivacy
        );
      default:
        return false;
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/95 dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-blue-500"
            >
              <div className="p-6 sm:p-8 md:p-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {translations.form.title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {translations.form.description}
                  </p>
                </div>

                <div className="flex justify-center mb-8 sm:mb-10">
                  <div className="flex items-center gap-4 sm:gap-8">
                    {[
                      { step: 1, icon: <FaEnvelope />, label: "Email" },
                      { step: 2, icon: <FaUser />, label: "Profile" },
                      { step: 3, icon: <FaLock />, label: "Security" },
                    ].map(({ step: i, icon, label }) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="flex items-center">
                          <div className="flex flex-col items-center">
                            <motion.div
                              className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                                i === step
                                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900"
                                  : i < step
                                  ? "bg-gradient-to-br from-emerald-400 to-emerald-500 text-white"
                                  : "bg-gray-50 dark:bg-gray-800 text-gray-400"
                              }`}
                            >
                              {i < step ? (
                                <FaCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                              ) : (
                                icon || (
                                  <span className="text-sm sm:text-base font-medium">
                                    {i}
                                  </span>
                                )
                              )}
                            </motion.div>
                            <span
                              className={`text-xs sm:text-sm font-medium mt-3 ${
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
                              className={`w-16 sm:w-24 h-0.5 ml-4 sm:ml-6 rounded-full transition-colors duration-300 ${
                                i < step
                                  ? "bg-gradient-to-r from-blue-500 to-emerald-500"
                                  : "bg-gray-200 dark:bg-gray-700"
                              }`}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {actionData?.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <FaExclamationCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      <span className="text-xs sm:text-sm font-medium">
                        {actionData.error}
                      </span>
                    </div>
                  </motion.div>
                )}

                <form
                  onSubmit={(e) => handleSubmit(e, "credentials")}
                  className="space-y-4 sm:space-y-6"
                >
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="email-step"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div>
                          <label
                            htmlFor="emailAddress"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
                          >
                            <MdOutlineMail className="h-5 w-5 text-gray-400" />
                            {translations.email.label}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative group">
                            <input
                              id="emailAddress"
                              type="email"
                              name="emailAddress"
                              value={formData.emailAddress}
                              onChange={handleInputChange}
                              autoComplete="email"
                              required
                              className="block w-full py-3.5 bg-white dark:bg-gray-900
                              border-b-2 border-gray-200 dark:border-gray-700
                              text-base transition-all duration-200
                              text-gray-900 dark:text-white
                              placeholder:text-gray-400 dark:placeholder:text-gray-500
                              focus:border-blue-500 dark:focus:border-blue-400
                              hover:border-gray-300 dark:hover:border-gray-600
                              focus:ring-0"
                              placeholder="name@example.com"
                              aria-label={translations.email.label}
                            />
                          </div>
                          <p className="mt-1 sm:mt-2 text-xs text-gray-500 dark:text-gray-400">
                            {translations.email.note}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="name-step"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4 sm:space-y-6"
                      >
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
                          >
                            <FaUserFriends className="h-5 w-5 text-gray-400" />
                            {translations.fullName.label}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative group">
                            <input
                              id="fullName"
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              autoComplete="name"
                              required
                              className="block w-full py-3.5 bg-white dark:bg-gray-900
                              border-b-2 border-gray-200 dark:border-gray-700
                              text-base transition-all duration-200
                              text-gray-900 dark:text-white
                              placeholder:text-gray-400 dark:placeholder:text-gray-500
                              focus:border-blue-500 dark:focus:border-blue-400
                              hover:border-gray-300 dark:hover:border-gray-600
                              focus:ring-0"
                              placeholder="Full Name"
                              aria-label={translations.fullName.label}
                            />
                          </div>
                          <p className="mt-1 sm:mt-2 text-xs text-gray-500 dark:text-gray-400">
                            {translations.errors.fullNameRequirements}
                          </p>
                        </div>

                        <div>
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
                          >
                            <FaUserFriends className="h-5 w-5 text-gray-400" />
                            Username
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative group">
                            <input
                              id="username"
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleInputChange}
                              autoComplete="username"
                              required
                              className="block w-full py-3.5 bg-white dark:bg-gray-900
                              border-b-2 border-gray-200 dark:border-gray-700
                              text-base transition-all duration-200
                              text-gray-900 dark:text-white
                              placeholder:text-gray-400 dark:placeholder:text-gray-500
                              focus:border-blue-500 dark:focus:border-blue-400
                              hover:border-gray-300 dark:hover:border-gray-600
                              focus:ring-0"
                              placeholder="Username"
                              aria-label="Username"
                            />
                          </div>
                          <p className="mt-1 sm:mt-2 text-xs text-gray-500 dark:text-gray-400">
                            {translations.errors.usernameRequirements}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="password-step"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4 sm:space-y-6"
                      >
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {translations.password.label}
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="block w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-white dark:bg-gray-700 
                              border border-gray-200 dark:border-gray-600 rounded-xl text-sm sm:text-base
                              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                              focus:outline-none transition-all duration-300 
                              text-gray-900 dark:text-white"
                              placeholder="••••••••"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                              {showPassword ? (
                                <FaEyeSlash className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                              ) : (
                                <FaEye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                          <p className="mt-1 sm:mt-2 text-xs text-gray-500 dark:text-gray-400">
                            {translations.password.note}
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {translations.confirmPassword.label}
                          </label>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className="block w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-white dark:bg-gray-700 
                              border border-gray-200 dark:border-gray-600 rounded-xl text-sm sm:text-base
                              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                              focus:outline-none transition-all duration-300 
                              text-gray-900 dark:text-white"
                              placeholder="••••••••"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                              {showConfirmPassword ? (
                                <FaEyeSlash className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                              ) : (
                                <FaEye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                          <p className="mt-1 sm:mt-2 text-xs text-gray-500 dark:text-gray-400">
                            {translations.confirmPassword.confirm}
                          </p>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              name="termsAndPrivacy"
                              checked={formData.termsAndPrivacy}
                              onChange={handleInputChange}
                              className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-blue-600 
                              focus:ring-blue-500"
                            />
                            <label className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                              {translations.acceptTerms.label}{" "}
                              <Link
                                to="/terms"
                                className="font-medium text-blue-600 dark:text-blue-400 
                                hover:text-blue-700 dark:hover:text-blue-300 
                                transition-colors duration-300"
                              >
                                {translations.termsOfService.label}
                              </Link>
                              {" and "}
                              <Link
                                to="/privacy"
                                className="font-medium text-blue-600 dark:text-blue-400 
                                hover:text-blue-700 dark:hover:text-blue-300 
                                transition-colors duration-300"
                              >
                                {translations.privacyPolicy.label}
                              </Link>
                              <span className="ml-1 text-red-500">*</span>
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between gap-3 sm:gap-4 mt-6 sm:mt-8">
                    {step > 1 ? (
                      <motion.button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="group flex items-center justify-center w-1/2 px-4 sm:px-6 py-2.5 sm:py-3.5 
                        rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200
                        bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
                        transition-all duration-300"
                      >
                        <FaArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        Back
                      </motion.button>
                    ) : (
                      <div className="w-1/2" />
                    )}
                    <motion.button
                      type={step === 3 ? "submit" : "button"}
                      onClick={() =>
                        step < 3 && validateStep() && setStep(step + 1)
                      }
                      disabled={!validateStep() || isLoading}
                      className={`group flex items-center justify-center w-1/2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                        validateStep() && !isLoading
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                            ></path>
                          </svg>
                        </div>
                      ) : step === 3 ? (
                        translations.form.submit
                      ) : (
                        <>
                          <span className="mr-2">{translations.form.next}</span>
                          <FaArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>

                {isLoading && (
                  <div className="loading-spinner">
                    <p>Loading...</p>
                  </div>
                )}

                <div className="mt-8 sm:mt-10">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white/95 dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-medium">
                        {translations.socialLogin.or}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSocialLogin("google")}
                      disabled={isLoading}
                      className="bg-white text-black font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition duration-300 text-sm inline-flex items-center justify-center shadow-lg group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        <FcGoogle className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        <span className="text-sm sm:text-base font-medium">
                          {translations.socialLogin.google.label}
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSocialLogin("github")}
                      disabled={isLoading}
                      className="bg-[#1b1f23] text-white font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition duration-300 text-sm inline-flex items-center justify-center shadow-lg group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        <FaGithub className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        <span className="text-sm sm:text-base font-medium">
                          {translations.socialLogin.github.label}
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-[#24292e] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                    </motion.button>
                  </div>
                </div>

                <div className="mt-8 sm:mt-10 text-center">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {translations.alreadyHaveAccount}{" "}
                    <Link
                      to="/sign-in"
                      className="font-semibold text-blue-600 dark:text-blue-400 
                      hover:text-blue-700 dark:hover:text-blue-300 
                      transition-colors duration-300 hover:underline"
                    >
                      {translations.signIn}
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
