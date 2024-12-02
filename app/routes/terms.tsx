import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaUserShield,
  FaChevronRight,
  FaFileContract,
  FaArrowRight,
} from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "TriWikiTech | Terms of Service" },
  {
    name: "description", 
    content: "Learn about our terms of service and user agreement. We believe in fair and transparent policies that protect both our users and our platform."
  }
];

const tosDetails = [
  {
    title: "Service Agreement",
    description: "By using our services, you agree to:",
    items: [
      "Follow our community guidelines",
      "Respect intellectual property rights",
      "Maintain account security",
      "Use services as intended"
    ]
  },
  {
    title: "User Responsibilities",
    description: "As a user, you are responsible for:",
    items: [
      "Content you create and share",
      "Maintaining account confidentiality",
      "Reporting violations",
      "Following platform rules"
    ]
  },
  {
    title: "Service Limitations",
    description: "We reserve the right to modify, suspend, or terminate services or accounts that violate our terms.",
  },
  {
    title: "User Rights",
    description: "As our user, you have the right to:",
    items: [
      "Access our services",
      "Terminate your account",
      "Report issues",
      "Request support",
      "Appeal decisions"
    ]
  }
];

export default function TOS() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full py-32 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_2px,transparent_2px)] bg-[length:30px_30px] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-blue-50/80 dark:bg-blue-900/50 shadow-lg backdrop-blur-sm">
              <FaFileContract className="text-blue-500 dark:text-blue-400 mr-3" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
                Our Terms of Service
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Clear and Fair
              <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                Terms of Service
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We believe in transparency and fairness. Our terms are designed to protect both our users and our platform while ensuring a great experience for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Key Terms & Policies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our terms of service are designed to create a safe, respectful, and productive environment for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaBalanceScale,
                title: "Fair Usage Policy",
                description: "Clear guidelines for platform usage and content sharing",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: FaUserShield,
                title: "User Protection",
                description: "Comprehensive policies to protect user rights and interests",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: IoDocumentText,
                title: "Clear Guidelines",
                description: "Straightforward terms written in plain language",
                color: "from-violet-500 to-violet-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/50"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r ${feature.color}`}>
                  <feature.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="w-full bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Terms of Service
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our terms of service outline the rules, guidelines, and policies that govern the use of our platform and services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {tosDetails.map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-blue-100/20 dark:border-blue-700/50"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold dark:text-white">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {section.description}
                    </p>

                    {section.items && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {section.items.map((item, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ x: 8 }}
                            className="flex items-center p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100/20 dark:border-blue-700/50 group hover:border-blue-200 dark:hover:border-blue-500 transition-all"
                          >
                            <FaChevronRight className="text-blue-500 dark:text-blue-400 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 p-10 rounded-2xl bg-white dark:bg-gray-900 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-blue-100/20 dark:border-blue-700/50"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                <FaBalanceScale className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Questions About Our Terms?
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                Our support team is here to help clarify any questions you may have about our terms of service.
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:stawa@admin.triwikitech.my.id"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Support Team
                <FaArrowRight className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
