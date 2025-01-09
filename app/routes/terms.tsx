import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserShield,
  FaChevronRight,
  FaFileContract,
  FaDatabase,
  FaLock,
  FaUserSecret,
  FaInfoCircle,
} from "react-icons/fa";
import { MetaFunction } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Terms of Service" },
  {
    name: "description",
    content:
      "Learn about our terms of service, data usage policies, and user agreement for TriWikiTech's educational platform.",
  },
];

const tosDetails = [
  {
    icon: (
      <FaUserShield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    ),
    title: "Data Collection & Usage",
    description: "We collect and store only essential user information:",
    items: [
      "Basic profile information (name, email)",
      "Learning progress and achievements",
      "Platform activity and engagement metrics",
      "Optional social media links",
    ],
    emphasis:
      "Your data is used exclusively within TriWikiTech for educational purposes.",
    iconBg: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    icon: <FaLock className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
    title: "Data Protection",
    description: "Your privacy is our priority:",
    items: [
      "Data is stored securely in our protected database",
      "We never sell or share your information with third parties",
      "You maintain full control over your personal data",
      "Regular security audits and updates",
    ],
    iconBg: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: <FaUserSecret className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
    title: "User Rights & Control",
    description: "As our user, you have the right to:",
    items: [
      "Access and modify your personal information",
      "Request data deletion",
      "Control your privacy settings",
      "Opt-out of non-essential data collection",
    ],
    iconBg: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    title: "Platform Usage",
    description: "By using our platform, you agree to:",
    items: [
      "Use the service for legitimate educational purposes",
      "Maintain the confidentiality of your account",
      "Respect intellectual property rights",
      "Follow our community guidelines",
    ],
    iconBg: "bg-amber-50 dark:bg-amber-900/20",
  },
];

export default function TOS() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10"
          />
          {/* Fixed positions for floating shapes to avoid hydration mismatch */}
          <div className="absolute inset-0 overflow-hidden">
            {[
              { x: 20, y: 30 },
              { x: 40, y: 60 },
              { x: 70, y: 40 },
              { x: 80, y: 70 },
              { x: 30, y: 80 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
                initial={{
                  x: `${pos.x}vw`,
                  y: `${pos.y}vh`,
                }}
                animate={{
                  x: `${pos.x + 5}vw`,
                  y: `${pos.y + 5}vh`,
                  rotate: 360,
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg rounded-full py-2 px-6 border border-gray-200/50 dark:border-gray-700/50"
              >
                <FaFileContract className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                  Terms of Service
                </span>
              </motion.div>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="text-indigo-700 dark:text-indigo-300">
                Your Trust,
              </span>
              <span className="block text-rose-600 dark:text-rose-400">
                Our Commitment
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              We value your privacy and are committed to protecting your data.
              Our terms are designed to ensure transparency and trust while
              providing you with the best learning experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Terms Details Section */}
      <section className="w-full py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
              Key Terms & Policies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Understanding our terms helps ensure a transparent and secure
              learning experience for all users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {tosDetails.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 rounded-2xl" />

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/20 to-gray-100/20 dark:from-gray-700/20 dark:to-gray-800/20 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-200/20 to-gray-100/20 dark:from-gray-700/20 dark:to-gray-800/20 rounded-full -ml-16 -mb-16" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div
                      className={`p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 ${section.iconBg}`}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* List Items */}
                  <ul className="space-y-4 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-start group"
                      >
                        <div className="bg-white dark:bg-gray-900 p-2 rounded-xl shadow-md ring-1 ring-gray-200 dark:ring-gray-700 mr-4">
                          <FaChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1.5">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Emphasis Text */}
                  {section.emphasis && (
                    <div className="mt-8">
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                        <div className="flex items-start space-x-3">
                          <FaInfoCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {section.emphasis}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 py-8 text-center border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">
              Have questions about our terms or privacy policies?{" "}
              <a
                href="/contact"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
