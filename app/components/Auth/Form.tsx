import { Form, Link } from "@remix-run/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaGraduationCap } from "react-icons/fa";
import { LoginTranslations, RegisterTranslations } from "~/types/auth";
import GoogleSVG from "~/components/Auth/GoogleSVG";
import InputField from "~/components/Auth/InputField";
import SocialLoginButton from "~/components/Auth/Social";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const USERNAME_REGEX = /^[a-z0-9_]{3,16}$/;
const DISPLAY_NAME_REGEX = /^[a-zA-Z0-9\s]{3,24}$/;

interface AuthFormProps {
  translations: LoginTranslations | RegisterTranslations;
  actionData: { error?: string };
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    loginMethod: string
  ) => void;
  handleSocialLogin: (loginMethod: string) => void;
  isRegister?: boolean;
}

function AuthForm({
  translations,
  actionData,
  handleSubmit,
  handleSocialLogin,
  isRegister = false,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isDisplayNameValid, setIsDisplayNameValid] = useState(false);

  const validateEmail = (value: string) => {
    setIsEmailValid(EMAIL_REGEX.test(value));
  };

  const validatePassword = (value: string) => {
    setIsPasswordValid(PASSWORD_REGEX.test(value));
  };

  const validateUsername = (value: string) => {
    setIsUsernameValid(USERNAME_REGEX.test(value));
  };

  const validateDisplayName = (value: string) => {
    setIsDisplayNameValid(DISPLAY_NAME_REGEX.test(value));
  };

  return (
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
        {isRegister && (
          <>
            <InputField
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateUsername(e.target.value);
              }}
              inputRef={emailRef}
              label="Username"
              isValid={isUsernameValid}
              errorMessage={
                (translations as RegisterTranslations).errors
                  .usernameRequirements
              }
            />
            <InputField
              id="displayName"
              name="displayName"
              type="text"
              autoComplete="name"
              required
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
                validateDisplayName(e.target.value);
              }}
              inputRef={emailRef}
              label={(translations as RegisterTranslations).displayName.label}
              isValid={isDisplayNameValid}
              errorMessage={
                (translations as RegisterTranslations).errors
                  .displayNameRequirements
              }
            />
          </>
        )}
        <InputField
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete={isRegister ? "new-password" : "current-password"}
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
        {isRegister && (
          <InputField
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            inputRef={passwordRef}
            label={(translations as RegisterTranslations).confirmPassword.label}
            isValid={confirmPassword === password && isPasswordValid}
            errorMessage="Passwords must match."
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />
        )}
        {isRegister ? (
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
              {(translations as RegisterTranslations).acceptTerms.label}{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-2 sm:mb-0">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                {(translations as LoginTranslations).rememberMe}
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/reset-password"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
              >
                {(translations as LoginTranslations).forgotPassword}
              </Link>
            </div>
          </div>
        )}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={`w-full py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg group relative overflow-hidden ${
            isEmailValid &&
            isPasswordValid &&
            (!isRegister ||
              (isUsernameValid && isDisplayNameValid && acceptTerms))
              ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={
            !isEmailValid ||
            !isPasswordValid ||
            (isRegister &&
              (!isUsernameValid || !isDisplayNameValid || !acceptTerms))
          }
        >
          <span className="relative z-10 flex items-center justify-center">
            {isRegister
              ? (translations as RegisterTranslations).createAccount
              : translations.signIn}
            <FaArrowRight className="ml-2" />
          </span>
          {isEmailValid &&
            isPasswordValid &&
            (!isRegister ||
              (isUsernameValid && isDisplayNameValid && acceptTerms)) && (
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            )}
        </motion.button>
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isRegister
              ? (translations as RegisterTranslations).alreadyHaveAccount
              : (translations as LoginTranslations).noAccount}{" "}
            <Link
              to={isRegister ? "/login" : "/register"}
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {isRegister
                ? translations.signIn
                : (translations as LoginTranslations).signUp}
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;
