import { useSubmit, useActionData, useLoaderData } from "@remix-run/react";
import {
  json,
  ActionFunction,
  redirect,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import { motion } from "framer-motion";

import { login, register } from "~/services/auth.server";
import getTranslation from "~/utils/getTranslation.server";
import BackgroundSVG from "~/components/Auth/Background";
import AuthForm from "~/components/Auth/Form";

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
  "auth/email-already-in-use": "emailAlreadyInUse",
  default: "defaultErrorDuringRegistration",
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const displayName = formData.get("displayName") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const loginMethod = formData.get("loginMethod") as string;
  const fetchTranslations = await getTranslation(request, "register");
  const translations = await fetchTranslations.json();

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
    const registerResponse = await register(
      email,
      password,
      username,
      displayName
    );

    if (!registerResponse) {
      return json(
        { error: translations.errors.registrationFailed },
        { status: 401 }
      );
    }

    const sessionToken = await login(email, password);

    return redirect(`/profile/${username}`, {
      headers: {
        "Set-Cookie": sessionToken,
      },
    });
  } catch (error) {
    const errorMessage =
      ERROR_CODES[(error as { code?: string }).code || "default"];
    return json({ error: translations.errors[errorMessage] }, { status: 500 });
  }
};

export default function Register() {
  const translations = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const actionData = useActionData<{ error?: string }>();

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    loginMethod: string
  ) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("loginMethod", loginMethod);
    submit(formData, { method: "post" });
  }

  function handleSocialLogin(loginMethod: string) {
    const formData = new FormData();
    formData.append("loginMethod", loginMethod);
    submit(formData, { method: "post" });
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      <BackgroundSVG />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-7xl backdrop-blur-lg relative z-10 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row"
      >
        <AuthForm
          translations={translations}
          actionData={actionData ?? { error: undefined }}
          handleSubmit={handleSubmit}
          handleSocialLogin={handleSocialLogin}
          isRegister={true}
        />
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
