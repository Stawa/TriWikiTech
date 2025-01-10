import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaChevronRight,
} from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Privacy Policy" },
  {
    name: "description",
    content:
      "Learn about our privacy policy and how we protect your data. We believe in transparency and giving you control over your information.",
  },
];

const privacyDetails = [
  {
    icon: <FaLock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    title: "Information We Collect",
    description:
      "We collect information that you provide directly to us, including:",
    items: [
      "Name and contact information",
      "Account credentials",
      "Payment information",
      "Communication preferences",
    ],
    iconBg: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
    title: "How We Use Your Information",
    description: "We use the information we collect to:",
    items: [
      "Provide and maintain our services",
      "Process your transactions",
      "Send you important updates and notifications",
      "Improve our services and user experience",
    ],
    iconBg: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    icon: (
      <IoShieldCheckmark className="w-8 h-8 text-rose-600 dark:text-rose-400" />
    ),
    title: "Data Security",
    description: "We implement robust security measures to protect your data:",
    items: [
      "End-to-end encryption",
      "Regular security audits",
      "Secure data storage",
      "Access controls and monitoring",
    ],
    iconBg: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    icon: (
      <FaUserShield className="w-8 h-8 text-amber-600 dark:text-amber-400" />
    ),
    title: "Your Rights",
    description: "You have the right to:",
    items: [
      "Access your personal data",
      "Correct inaccurate data",
      "Request deletion of your data",
      "Object to data processing",
      "Data portability",
    ],
    iconBg: "bg-amber-50 dark:bg-amber-900/20",
  },
];

export default function Privacy() {
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
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-rose-500/10 to-amber-500/10"
          />
          {/* Fixed positions for floating shapes */}
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
                className="absolute w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-rose-500/10 rounded-full"
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
                <FaLock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                  Privacy Policy
                </span>
              </motion.div>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="text-indigo-700 dark:text-indigo-300">
                Your Privacy,
              </span>
              <span className="block text-rose-600 dark:text-rose-400">
                Our Priority
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              We believe in transparency and protecting your data at every step.
              Learn how we safeguard your privacy while providing the best
              learning experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Details Section */}
      <section className="w-full py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
              Privacy Features
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We employ industry-leading security measures to protect your data
              and ensure your privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {privacyDetails.map((section, index) => (
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
                  <ul className="space-y-4">
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 py-8 text-center border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">
              Have questions about our privacy policy?{" "}
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
