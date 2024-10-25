import { useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import {
  ActionFunction,
  LoaderFunctionArgs,
  MetaFunction,
  json,
  redirect,
} from "@remix-run/node";
import { motion } from "framer-motion";
import BackgroundSVG from "~/components/Auth/Background";
import {
  login,
  loginWithGitHub,
  loginWithGoogle,
} from "~/services/auth.server";
import getTranslation from "~/utils/getTranslation.server";

import AuthForm from "~/components/Auth/Form";
import LoginImage from "~/components/Auth/Image";

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
  const fetchTranslations = await getTranslation(request, "login");
  const translations = await fetchTranslations.json();
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
        return json({ error: translations.errors.invalidLoginMethod }, { status: 400 });
      }

      if (!sessionToken) {
        return json({ error: translations.errors.loginFailed }, { status: 401 });
      }

      return redirect("/profile", {
        headers: {
          "Set-Cookie": sessionToken,
        },
      });
    } catch (error) {
      return json({ error: translations.errors.externalLoginNotImplemented }, { status: 501 });
    }
  }

  if (!email || !password) {
    return json({ error: translations.errors.emailPasswordRequired }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return json({ error: translations.errors.invalidEmailFormat }, { status: 400 });
  }

  if (!PASSWORD_REGEX.test(password)) {
    return json({ error: translations.errors.passwordRequirements }, { status: 400 });
  }

  try {
    const sessionToken = await login(email, password);
    if (!sessionToken) {
      return json({ error: translations.errors.loginFailed }, { status: 401 });
    }
    return redirect("/", {
      headers: {
        "Set-Cookie": sessionToken,
      },
    });
  } catch (error) {
    return json({ error: translations.errors.incorrectEmailPassword }, { status: 401 });
  }
};

export default function Login() {
  const Login = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const actionData = useActionData<{ error?: string }>() || {
    error: undefined,
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
        <AuthForm
          translations={Login}
          actionData={actionData}
          handleSubmit={handleSubmit}
          handleSocialLogin={handleSocialLogin}
        />
        <LoginImage translations={Login} />
      </motion.div>
    </div>
  );
}
