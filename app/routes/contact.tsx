import { json, LoaderFunction, type ActionFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigation,
  useLoaderData,
} from "@remix-run/react";
import { useState, useRef } from "react";
import {
  FaBug,
  FaEnvelope,
  FaLightbulb,
  FaTrash,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaInfoCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ContactTypeCard } from "~/components/Shared/ContactTypeCard";
import { FormInput } from "~/components/Shared/FormInput";
import { MetaFunction } from "@remix-run/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Contact Us" },
  {
    name: "description",
    content:
      "Reach out to us for any queries, suggestions, or feedback. We're here to help! Fill out the form and we'll get back to you as soon as possible.",
  },
];

interface ActionData {
  success?: boolean;
  error?: string;
  fields?: {
    name?: string;
    email?: string;
    type?: string;
    message?: string;
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    hcaptchaSiteKey: process.env.VITE_HCAPTCHA_SITE_KEY,
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const type = formData.get("type");
  const message = formData.get("message");
  const hcaptchaToken = formData.get("h-captcha-response") as string;

  // Validate fields
  if (!name || typeof name !== "string" || name.length < 2) {
    return json<ActionData>({
      error: "Please enter a valid name (at least 2 characters)",
      fields: {
        name: name?.toString(),
        email: email?.toString(),
        type: type?.toString(),
        message: message?.toString(),
      },
    });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return json<ActionData>({
      error: "Please enter a valid email address",
      fields: {
        name: name?.toString(),
        email: email?.toString(),
        type: type?.toString(),
        message: message?.toString(),
      },
    });
  }

  if (!type || typeof type !== "string") {
    return json<ActionData>({
      error: "Please select a contact reason",
      fields: {
        name: name?.toString(),
        email: email?.toString(),
        type: type?.toString(),
        message: message?.toString(),
      },
    });
  }

  if (!message || typeof message !== "string" || message.length < 10) {
    return json<ActionData>({
      error: "Please enter a detailed message (at least 10 characters)",
      fields: {
        name: name?.toString(),
        email: email?.toString(),
        type: type?.toString(),
        message: message?.toString(),
      },
    });
  }

  if (!hcaptchaToken) {
    return json<ActionData>({
      error: "Please complete the CAPTCHA verification",
      fields: {
        name: name?.toString(),
        email: email?.toString(),
        type: type?.toString(),
        message: message?.toString(),
      },
    });
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
    return json<ActionData>({
      error: "CAPTCHA verification failed. Please try again.",
      fields: {
        name: name?.toString(),
        email: email?.toString(),
        type: type?.toString(),
        message: message?.toString(),
      },
    });
  }

  // TODO: Implement actual email sending logic here
  // For now, we'll just simulate a successful submission
  return json<ActionData>({ success: true });
};

export default function Contact() {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { hcaptchaSiteKey } = useLoaderData<typeof loader>();
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);

  const [selectedType, setSelectedType] = useState(
    actionData?.fields?.type || ""
  );

  const contactTypes = [
    {
      id: "bug",
      label: "Report a Bug",
      icon: FaBug,
      description: "Found a bug? Help us improve by reporting it.",
    },
    {
      id: "feature",
      label: "Feature Request",
      icon: FaLightbulb,
      description: "Have an idea for a new feature? We'd love to hear it!",
    },
    {
      id: "deletion",
      label: "Data Deletion",
      icon: FaTrash,
      description: "Request to delete your account or personal data.",
    },
    {
      id: "other",
      label: "Other Inquiry",
      icon: FaEnvelope,
      description: "Have a different question? Feel free to ask!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-16"
      >
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a category below and let us know how we can assist you.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            role="radiogroup"
            aria-label="Contact reason"
          >
            {contactTypes.map((type) => (
              <ContactTypeCard
                key={type.id}
                id={type.id}
                label={type.label}
                description={type.description}
                icon={type.icon}
                isSelected={selectedType === type.id}
                onClick={() => setSelectedType(type.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div variants={itemVariants}>
          <Form
            method="post"
            className="relative bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-800 dark:to-indigo-900/30 shadow-xl rounded-2xl overflow-hidden border border-indigo-100/20 dark:border-indigo-500/10"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-indigo-50/10 dark:from-indigo-500/5 dark:via-transparent dark:to-indigo-500/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.indigo.100/10%),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,theme(colors.indigo.500/10%),transparent_50%)]" />
            </div>

            <div className="relative p-8 lg:p-12 space-y-8">
              {/* Form Header */}
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-indigo-950 dark:text-indigo-100">
                  {selectedType
                    ? `Send us a ${selectedType} message`
                    : "Send us a message"}
                </h2>
                <p className="text-indigo-600/80 dark:text-indigo-300/80 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              {actionData?.error && (
                <div className="p-5 bg-red-50/90 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800/50 flex items-start space-x-4 animate-shake">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 dark:from-red-800/50 dark:to-red-900/50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                    <FaBug className="w-6 h-6 text-red-500 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-red-700 dark:text-red-300">
                      There was an error
                    </p>
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {actionData.error}
                    </p>
                  </div>
                </div>
              )}

              {actionData?.success && (
                <div className="p-5 bg-green-50/90 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800/50 flex items-start space-x-4 animate-fadeIn">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-800/50 dark:to-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner">
                    <FaEnvelope className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-700 dark:text-green-300">
                      Message sent successfully!
                    </p>
                    <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                      We will get back to you within 1-2 business days.
                    </p>
                  </div>
                </div>
              )}

              <input type="hidden" name="type" value={selectedType} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <FormInput
                  id="name"
                  name="name"
                  label="Your Name"
                  icon={FaUser}
                  placeholder="Name"
                  defaultValue={actionData?.fields?.name}
                  required
                />

                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  icon={FaEnvelope}
                  placeholder="kade@example.com"
                  defaultValue={actionData?.fields?.email}
                  required
                />
              </div>

              <FormInput
                id="message"
                name="message"
                type="textarea"
                label="Your Message"
                icon={FaComment}
                placeholder="Tell us how we can help you..."
                defaultValue={actionData?.fields?.message}
                required
                rows={6}
              />

              <HCaptcha
                ref={hcaptchaRef}
                sitekey={hcaptchaSiteKey}
                onVerify={(token) => setHcaptchaToken(token)}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-indigo-600/70 dark:text-indigo-300/70">
                  <FaInfoCircle className="w-4 h-4" />
                  <span>
                    <span className="text-red-500/90">*</span> Required fields
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !hcaptchaToken}
                  className={`relative flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl overflow-hidden transition-all duration-300 ${
                    isSubmitting || !hcaptchaToken
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                      : "bg-indigo-600 text-white hover:bg-indigo-500"
                  }`}
                >
                  <div className="relative flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane
                          className={`transition-transform duration-300 ${
                            hcaptchaToken ? "group-hover:translate-x-1" : ""
                          }`}
                        />
                        Send Message
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  );
}
