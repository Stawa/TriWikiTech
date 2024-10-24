import { useState, useRef } from "react";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useSubmit,
} from "@remix-run/react";
import {
  ActionFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaGraduationCap } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import BackgroundSVG from "~/components/Auth/Background";
import GoogleSVG from "~/components/Auth/GoogleSVG";
import {
  login,
  loginWithGitHub,
  loginWithGoogle,
} from "~/services/auth.server";
import getTranslation from "~/utils/getTranslation.server";
import SocialLoginButton from "~/components/Auth/Social";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.title}` },
  {
    name: "description",
    content: data.description,
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const loginTranslations = await getTranslation(request, "login");
  return loginTranslations;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const loginMethod = formData.get("loginMethod") as string;

  if (loginMethod !== "credentials" && (!email || !password)) {
    try {
      let sessionToken;
      if (loginMethod === "google") {
        sessionToken = await loginWithGoogle();
      } else if (loginMethod === "github") {
        sessionToken = await loginWithGitHub();
      } else {
        return json({ error: "invalidLoginMethod" }, { status: 400 });
      }

      if (!sessionToken) {
        return json({ error: "loginFailed" }, { status: 401 });
      }

      return redirect("/profile", {
        headers: {
          "Set-Cookie": sessionToken,
        },
      });
    } catch (error) {
      return json(
        { error: "externalLoginNotImplemented" },
        { status: 501 }
      );
    }
  }

  if (!email || !password) {
    return json({ error: "emailPasswordRequired" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return json({ error: "invalidEmailFormat" }, { status: 400 });
  }

  if (!PASSWORD_REGEX.test(password)) {
    return json(
      { error: "passwordRequirements" },
      { status: 400 }
    );
  }

  try {
    const sessionToken = await login(email, password);
    if (!sessionToken) {
      return json({ error: "loginFailed" }, { status: 401 });
    }
    return redirect("/", {
      headers: {
        "Set-Cookie": sessionToken,
      },
    });
  } catch (error) {
    return json(
      { error: "incorrectEmailPassword" },
      { status: 401 }
    );
  }
};

export default function Login() {
  const Login = useLoaderData<typeof loader>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
        className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-7xl backdrop-blur-lg relative z-10 border border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row"
      >
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          isEmailValid={isEmailValid}
          isPasswordValid={isPasswordValid}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          emailRef={emailRef}
          passwordRef={passwordRef}
          validateEmail={validateEmail}
          validatePassword={validatePassword}
          handleSubmit={handleSubmit}
          handleSocialLogin={handleSocialLogin}
          actionData={actionData}
          translations={Login}
        />
        <LoginImage translations={Login} />
      </motion.div>
    </div>
  );
}

interface LoginFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
  validateEmail: (value: string) => void;
  validatePassword: (value: string) => void;
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    loginMethod: string
  ) => void;
  handleSocialLogin: (loginMethod: string) => void;
  actionData: { error?: string } | undefined;
  translations: any;
}

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isEmailValid,
  isPasswordValid,
  rememberMe,
  setRememberMe,
  emailRef,
  passwordRef,
  validateEmail,
  validatePassword,
  handleSubmit,
  handleSocialLogin,
  actionData,
  translations,
}: LoginFormProps) {
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
          {translations.errors[actionData.error]}
        </motion.div>
      )}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <SocialLoginButton
          loginMethod="github"
          handleSocialLogin={handleSocialLogin}
          icon={<FaGithub className="text-xl sm:text-2xl" />}
          label={translations.socialLogin.github.label}
          bgColor="bg-[#24292e]"
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
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
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
              {translations.rememberMe}
            </label>
          </div>
          <div className="text-sm">
            <Link
              to="/reset-password"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
            >
              {translations.forgotPassword}
            </Link>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={`w-full py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg group relative overflow-hidden ${
            isEmailValid && isPasswordValid
              ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isEmailValid || !isPasswordValid}
        >
          <span className="relative z-10 flex items-center justify-center">
            {translations.signIn}
            <FaArrowRight className="ml-2" />
          </span>
          {isEmailValid && isPasswordValid && (
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
          )}
        </motion.button>
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {translations.noAccount}{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {translations.signUp}
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

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

const InputField = ({
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
}: InputFieldProps) => (
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
    {value && !isValid && (
      <p className="mt-2 text-xs text-pink-600 dark:text-pink-400">
        {errorMessage}
      </p>
    )}
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
  </div>
);

const LoginImage = ({ translations }: { translations: any }) => (
  <div className="hidden lg:flex w-full lg:w-1/2 relative overflow-hidden rounded-r-2xl">
    <div className="w-full h-full flex items-center justify-center">
      <img
        src="https://dummyimage.com/4000x4000/000000/ffffff.jpg&text=Sample+Image+Feature+TriWikiTech"
        alt={translations.title}
        className="w-full h-full object-fit"
      />
    </div>
  </div>
);
