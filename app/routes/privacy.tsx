import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaChevronRight,
  FaEye,
  FaCheckCircle,
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

export default function Privacy() {
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
              <FaLock className="text-blue-500 dark:text-blue-400 mr-3" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
                Our Privacy Commitment
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Your Privacy,
              <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                Our Priority
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We believe in transparency and giving you control over your data.
              Learn how we protect your privacy at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Privacy Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We employ industry-leading security measures and give you complete
              control over your data. Learn about our comprehensive privacy
              features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaShieldAlt,
                title: "Enterprise-Grade Security",
                description:
                  "Bank-level encryption and security protocols to protect your data",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: FaUserShield,
                title: "You're in Control",
                description:
                  "Manage your data preferences with intuitive controls",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: IoShieldCheckmark,
                title: "Global Compliance",
                description:
                  "Adherence to GDPR, CCPA and other privacy regulations",
                color: "from-violet-500 to-violet-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/50"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r ${feature.color}`}
                >
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

      {/* Policy Content */}
      <section className="w-full bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Our Privacy Commitment
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We believe in complete transparency about how we handle your data.
              Learn about our comprehensive privacy practices and how we protect
              your information.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {policyDetails.map((section, index) => (
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

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/10 rounded-2xl shadow-lg p-8 border border-blue-100/20 dark:border-blue-700/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center">
                <FaShieldAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">
                Privacy Highlights
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-white/80 dark:bg-gray-800/50 border border-blue-100/30 dark:border-blue-700/30 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <FaLock className="text-blue-500 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Data Protection
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Industry-leading security measures to keep your data safe and
                  encrypted
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-white/80 dark:bg-gray-800/50 border border-blue-100/30 dark:border-blue-700/30 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <FaUserShield className="text-green-500 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    User Control
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Full control over your data and privacy preferences at any
                  time
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-white/80 dark:bg-gray-800/50 border border-blue-100/30 dark:border-blue-700/30 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <FaEye className="text-purple-500 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Transparency
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Clear communication about how we handle your information
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-white/80 dark:bg-gray-800/50 border border-blue-100/30 dark:border-blue-700/30 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                    <FaCheckCircle className="text-yellow-500 dark:text-yellow-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Compliance
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Full compliance with GDPR, CCPA and other global privacy
                  regulations
                </p>
              </motion.div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 p-10 rounded-2xl bg-white dark:bg-gray-900 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-blue-100/20 dark:border-blue-700/50"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
                <FaLock className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Questions? We're Here to Help
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                Our privacy team is dedicated to protecting your data and
                answering any questions you may have about our privacy
                practices.
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:stawa@admin.triwikitech.my.id"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Privacy Team
                <FaLock className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const policyDetails = [
  {
    title: "Information We Collect",
    description:
      "We collect information that you provide directly to us, including:",
    items: [
      "Name and contact information",
      "Account credentials",
      "Payment information",
      "Communication preferences",
    ],
  },
  {
    title: "How We Use Your Information",
    description: "We use the information we collect to:",
    items: [
      "Provide and maintain our services",
      "Process your transactions",
      "Send you important updates and notifications",
      "Improve our services and user experience",
    ],
  },
  {
    title: "Data Security",
    description:
      "We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.",
  },
  {
    title: "Your Rights",
    description: "You have the right to:",
    items: [
      "Access your personal data",
      "Correct inaccurate data",
      "Request deletion of your data",
      "Object to data processing",
      "Data portability",
    ],
  },
];
