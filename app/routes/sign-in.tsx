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
import { useState } from "react";

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
  const loginTranslations = await getTranslation(request, "login");
  return loginTranslations;
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const action: ActionFunction = async ({ request }) => {
  const fetchTranslations = await getTranslation(request, "login");
  const translations = await fetchTranslations.json();
  const formData = await request.formData();
  const emailAddress = formData.get("emailAddress") as string;
  const password = formData.get("password") as string;
  const authProvider = formData.get("authProvider") as string;

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

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    authProvider: string
  ) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("authProvider", authProvider);
    submit(data, { method: "post" });
  }

  function handleSocialLogin(provider: string) {
    const data = new FormData();
    data.append("authProvider", provider);
    submit(data, { method: "post" });
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
                  className="space-y-6"
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
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
                    >
                      <MdOutlineVpnKey className="h-5 w-5 text-gray-400" />
                      {translations.password.label}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="current-password"
                        required
                        minLength={8}
                        className="block w-full py-3.5 bg-white dark:bg-gray-900
                        border-b-2 border-gray-200 dark:border-gray-700
                        text-base transition-all duration-200
                        text-gray-900 dark:text-white
                        placeholder:text-gray-400 dark:placeholder:text-gray-500
                        focus:border-blue-500 dark:focus:border-blue-400
                        hover:border-gray-300 dark:hover:border-gray-600
                        focus:ring-0"
                        placeholder="••••••••"
                        aria-label={translations.password.label}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 
                        hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <FaEyeSlash className="h-5 w-5" />
                        ) : (
                          <FaEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-sm sm:text-base font-medium
                    bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                    text-white shadow-lg shadow-blue-500/20
                    focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                    outline-none transition-all duration-300"
                  >
                    {translations.form.submit}
                  </motion.button>
                </form>

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
                    {translations.dontHaveAccount}{" "}
                    <Link
                      to="/sign-up"
                      className="font-semibold text-blue-600 dark:text-blue-400 
                      hover:text-blue-700 dark:hover:text-blue-300 
                      transition-colors duration-300 hover:underline"
                    >
                      {translations.signUp}
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
