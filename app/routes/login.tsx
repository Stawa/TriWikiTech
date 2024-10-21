import { useState, useRef } from "react";
import { Form, useSubmit, useActionData } from "@remix-run/react";
import { json, ActionFunction, redirect } from "@remix-run/node";
import { login, loginWithGoogle, loginWithGitHub } from "~/services/auth.server";
import {
  FaGoogle,
  FaGithub,
  FaTimes,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

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
        return json({ error: "Invalid login method" }, { status: 400 });
      }

      if (!sessionToken) {
        return json({ error: "Login failed" }, { status: 401 });
      }

      return redirect("/profile", {
        headers: {
          "Set-Cookie": sessionToken,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return json({ error: "An error occurred during login" }, { status: 500 });
    }
  }

  if (!email || !password) {
    return json({ error: "Email and password are required" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return json({ error: "Invalid email format" }, { status: 400 });
  }

  if (!PASSWORD_REGEX.test(password)) {
    return json(
      { error: "Password does not meet requirements" },
      { status: 400 }
    );
  }

  try {
    const sessionToken = await login(email, password);

    if (!sessionToken) {
      return json({ error: "Login failed" }, { status: 401 });
    }

    return redirect("/", {
      headers: {
        "Set-Cookie": sessionToken,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return json({ error: "An error occurred during login" }, { status: 500 });
  }
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submit = useSubmit();
  const actionData = useActionData<{ error?: string }>();

  const validateEmail = (value: string) => {
    setIsEmailValid(EMAIL_REGEX.test(value));
  };

  const passwordCriteria = [
    { regex: /.{8,}/, label: "At least 8 characters" },
    { regex: /[A-Z]/, label: "At least one uppercase letter" },
    { regex: /[0-9]/, label: "At least one number" },
    { regex: /[@$!%*?&]/, label: "At least one special character" },
  ];

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
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      <div className="bg-green-900 bg-opacity-20 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-green-500">
          <FaCode className="inline-block mb-1 mr-2" />
          TriWikiTech
        </h2>
        {actionData?.error && (
          <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
            {actionData.error}
          </div>
        )}
        <Form
          method="post"
          className="space-y-6"
          onSubmit={(e) => handleSubmit(e, "credentials")}
        >
          <div className="relative mb-20 md:mb-12">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="peer h-12 sm:h-14 w-full border-2 border-green-500 text-green-400 placeholder-transparent focus:outline-none focus:border-green-600 rounded-lg px-4 hover:border-green-600 transition-colors duration-300 bg-green-900 bg-opacity-20"
              placeholder=" "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              ref={emailRef}
            />
            <label
              htmlFor="email"
              className="absolute rounded-lg left-3 -top-3 text-green-400 text-sm transition-all scale-75 origin-[0] bg-black px-2"
            >
              Email
            </label>
            {email && !isEmailValid && (
              <>
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
                  <FaTimes className="text-red-500 w-5 h-5 block align-middle" />
                </span>
                <p className="absolute mt-1 left-0 text-xs text-red-500">
                  Please enter a valid email address.
                </p>
              </>
            )}
          </div>
          <div className="relative mb-20 md:mb-12">
            <div className="relative mb-20 md:mb-12">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="peer h-12 sm:h-14 w-full border-2 border-green-500 text-green-400 placeholder-transparent focus:outline-none focus:border-green-600 rounded-lg px-4 hover:border-green-600 transition-colors duration-300 bg-green-900 bg-opacity-20"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
              />
              <label
                htmlFor="password"
                className="absolute rounded-lg left-3 -top-3 text-green-400 text-sm transition-all scale-75 origin-[0] bg-black px-2"
              >
                Password
              </label>
              {password &&
                !passwordCriteria.every((criterion) =>
                  criterion.regex.test(password)
                ) && (
                  <>
                    <span className="absolute right-14 top-1/2 transform -translate-y-1/2 flex items-center">
                      <FaTimes className="text-red-500 w-5 h-5 block align-middle" />
                    </span>
                    <p className="absolute mt-1 left-0 text-xs text-red-500">
                      Password must be at least 8 characters long, including
                      uppercase, lowercase, numbers, and special characters.
                    </p>
                  </>
                )}
            </div>
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center justify-center w-14 h-full text-green-400 hover:text-green-500 transition-colors duration-300"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Show password"
            >
              {showPassword ? (
                <VscEyeClosed className="sm:text-3xl" />
              ) : (
                <VscEye className="sm:text-3xl" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 mt-2 flex items-center justify-center w-full text-black py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              !isEmailValid ||
              !passwordCriteria.every((criterion) =>
                criterion.regex.test(password)
              )
            }
          >
            Login
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <div className="mt-4 sm:mt-6 text-center flex justify-between">
            <a
              href="/register"
              className="text-xs sm:text-sm text-green-500 hover:text-green-600 hover:underline transition duration-300 font-medium p-2"
            >
              Register
            </a>
            <a
              href="/reset"
              className="text-xs sm:text-sm text-green-500 hover:text-green-600 hover:underline transition duration-300 font-medium p-2"
            >
              Reset Password
            </a>
          </div>
        </Form>
        <div className="mt-6 sm:mt-8 text-center">
          <div className="flex items-center my-4 sm:my-6">
            <hr className="flex-grow border-green-500" />
            <span className="px-4 text-green-400 font-medium text-sm sm:text-base">
              or
            </span>
            <hr className="flex-grow border-green-500" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              onClick={() => handleSocialLogin("github")}
              className="bg-green-900 hover:bg-green-800 text-green-400 flex-1 flex items-center justify-center py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <FaGithub className="mr-2 mb-0.5 text-xl sm:text-2xl" />
              GitHub
            </button>
            <button
              onClick={() => handleSocialLogin("google")}
              className="bg-green-900 hover:bg-green-800 text-green-400 flex-1 flex items-center justify-center py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <FaGoogle className="mr-2 mb-0.5 text-xl sm:text-2xl" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
