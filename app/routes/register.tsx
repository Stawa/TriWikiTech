import { useState, useRef } from "react";
import {
  Form,
  useSubmit,
  useActionData,
  Link,
  useLoaderData,
} from "@remix-run/react";
import {
  json,
  ActionFunction,
  redirect,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import { FaGraduationCap, FaArrowRight, FaGithub } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { motion } from "framer-motion";

import { register } from "~/services/auth.server";
import getTranslation from "~/utils/getTranslation.server";
import GoogleSVG from "~/components/Auth/GoogleSVG";
import BackgroundSVG from "~/components/Auth/Background";
import SocialLoginButton from "~/components/Auth/Social";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.title}` },
  {
    name: "description",
    content: data.description,
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const registerTranslations = await getTranslation(request, "register");
  return registerTranslations;
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const ERROR_CODES: Record<string, string> = {
  "auth/email-already-in-use": "The following email already exists",
  default: "An error occurred during registration",
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const displayName = formData.get("displayName") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const loginMethod = formData.get("loginMethod") as string;
  const translations = useLoaderData<typeof loader>();

  if (loginMethod === "github" || loginMethod === "google") {
    return json(
      { error: translations.errors.externalLoginNotImplemented },
      { status: 501 }
    );
  }

  if (!email || !displayName || !password || !confirmPassword) {
    return json(
      { error: translations.errors.allFieldsRequired },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
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

  if (password !== confirmPassword) {
    return json(
      { error: translations.errors.passwordsDoNotMatch },
      { status: 400 }
    );
  }

  try {
    const sessionToken = await register(email, password, displayName);

    if (!sessionToken) {
      return json(
        { error: translations.errors.registrationFailed },
        { status: 401 }
      );
    }

    return redirect("/", {
      headers: {
        "Set-Cookie": sessionToken,
      },
    });
  } catch (error) {
    const errorMessage =
      ERROR_CODES[(error as { code?: string }).code || "default"];
    return json({ error: errorMessage }, { status: 500 });
  }
};

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  label: string;
  isValid: boolean;
  errorMessage: string;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}

function InputField({
  id,
  name,
  type,
  autoComplete,
  required,
  value,
  onChange,
  inputRef,
  label,
  isValid,
  errorMessage,
  showPassword,
  setShowPassword,
}: InputFieldProps) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="peer h-12 sm:h-14 w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-indigo-400 bg-transparent transition-colors duration-300"
        placeholder=" "
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-400 peer-focus:text-sm"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      {showPassword !== undefined && setShowPassword && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
          onClick={() => setShowPassword(!showPassword)}
          aria-label="Toggle password visibility"
        >
          {showPassword ? (
            <VscEyeClosed className="text-xl sm:text-2xl" />
          ) : (
            <VscEye className="text-xl sm:text-2xl" />
          )}
        </button>
      )}
      {value && !isValid && (
        <p className="mt-2 text-xs text-pink-600 dark:text-pink-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default function Register() {
  const translations = useLoaderData<typeof loader>();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submit = useSubmit();
  const actionData = useActionData<{ error?: string }>();

  const validateEmail = (value: string) => {
    setIsEmailValid(EMAIL_REGEX.test(value));
  };

  const validatePassword = (value: string) => {
    setIsPasswordValid(PASSWORD_REGEX.test(value));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    loginMethod: string
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("loginMethod", loginMethod);
    submit(formData, { method: "post" });
  };

  const handleSocialLogin = (loginMethod: string) => {
    const formData = new FormData();
    formData.append("loginMethod", loginMethod);
    submit(formData, { method: "post" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      <BackgroundSVG />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-7xl backdrop-blur-lg relative z-10 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row"
      >
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
          >
            <FaGraduationCap className="inline-block mb-1 mr-2 text-indigo-600 dark:text-indigo-400" />
            {translations.title}
          </motion.h2>
          {actionData?.error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500 bg-opacity-80 text-white p-4 rounded-lg mb-6 text-center"
            >
              {actionData.error}
            </motion.div>
          )}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <SocialLoginButton
              loginMethod="github"
              handleSocialLogin={handleSocialLogin}
              icon={<FaGithub className="text-xl sm:text-2xl" />}
              label={translations.socialLogin.github.label}
              bgColor="bg-[#24292e]"
              textColor="text-white"
              gradientFrom="from-gray-800"
              gradientTo="to-gray-900"
            />
            <SocialLoginButton
              loginMethod="google"
              handleSocialLogin={handleSocialLogin}
              icon={<GoogleSVG />}
              label={translations.socialLogin.google.label}
              bgColor="bg-white"
              gradientFrom="from-gray-100"
              gradientTo="to-gray-200"
              textColor="text-black"
            />
          </div>
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center">
              <hr className="w-full border-gray-300 dark:border-gray-600" />
              <span className="px-4 text-gray-500 dark:text-gray-400">
                {translations.socialLogin.or}
              </span>
              <hr className="w-full border-gray-300 dark:border-gray-600" />
            </div>
          </div>
          <Form
            method="post"
            className="space-y-4 sm:space-y-6 mt-6"
            onSubmit={(e) => handleSubmit(e, "credentials")}
          >
            <InputField
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              inputRef={emailRef}
              label={translations.email.label}
              isValid={isEmailValid}
              errorMessage={translations.email.errorMessage}
            />
            <InputField
              id="displayName"
              name="displayName"
              type="text"
              autoComplete="name"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              inputRef={emailRef}
              label={translations.displayName.label}
              isValid={true}
              errorMessage=""
            />
            <InputField
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              inputRef={passwordRef}
              label={translations.password.label}
              isValid={isPasswordValid}
              errorMessage={translations.password.errorMessage}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              inputRef={passwordRef}
              label={translations.confirmPassword.label}
              isValid={true}
              errorMessage=""
              showPassword={showConfirmPassword}
              setShowPassword={setShowConfirmPassword}
            />
            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <label
                htmlFor="acceptTerms"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                {translations.acceptTerms.label}{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`w-full py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg group relative overflow-hidden ${
                isEmailValid && isPasswordValid && acceptTerms
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!isEmailValid || !isPasswordValid || !acceptTerms}
            >
              <span className="relative z-10 flex items-center justify-center">
                {translations.createAccount}
                <FaArrowRight className="ml-2" />
              </span>
              {isEmailValid && isPasswordValid && acceptTerms && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              )}
            </motion.button>
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {translations.alreadyHaveAccount}{" "}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {translations.signIn}
                </Link>
              </p>
            </div>
          </Form>
        </div>
        <div className="hidden lg:flex w-full lg:w-1/2 relative overflow-hidden rounded-r-2xl">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://dummyimage.com/4000x4000/000000/ffffff.jpg&text=Sample+Image+Feature+TriWikiTech"
              alt={translations.title}
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
