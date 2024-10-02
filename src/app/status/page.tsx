"use client";

import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaSync,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const StatusPage = () => {
  const t = useTranslations("StatusPage");

  const features = [
    { name: "homepage", status: "completed", percentage: 100 },
    {
      name: "javascriptCourse",
      status: "completed-with-updates",
      percentage: 100,
    },
    { name: "pythonCourse", status: "planned", percentage: 0 },
    { name: "cCourse", status: "completed-with-updates", percentage: 100 },
    { name: "cppCourse", status: "planned", percentage: 0 },
    {
      name: "userAuthentication",
      status: "completed-with-updates",
      percentage: 100,
    },
    {
      name: "switchLanguage",
      status: "completed-with-updates",
      percentage: 100,
    },
    { name: "progressTracking", status: "planned", percentage: 0 },
    { name: "codeCompiler", status: "planned", percentage: 0 },
    { name: "fileSystem", status: "planned", percentage: 0 },
    { name: "liveOutput", status: "planned", percentage: 0 },
  ];

  const knownIssues = [
    { name: "optimizePerformance", status: "in-progress", percentage: 30 },
    { name: "refactorCode", status: "in-progress", percentage: 20 },
    { name: "reworkDesign", status: "in-progress", percentage: 15 },
  ];

  const ideas = [
    { name: "createLogo", status: "planned", percentage: 0 },
    { name: "createOpenGraph", status: "planned", percentage: 0 },
    { name: "useXtermJs", status: "planned", percentage: 0 },
    { name: "addSwitchLanguage", status: "planned", percentage: 0 },
    { name: "addFileSystem", status: "planned", percentage: 0 },
  ];

  const getStatusIcon = (status: string) => {
    const iconConfig = {
      completed: {
        Icon: FaCheckCircle,
        color: "text-green-500 dark:text-green-400",
      },
      "completed-with-updates": {
        Icon: FaSync,
        color: "text-blue-500 dark:text-blue-400",
      },
      "in-progress": {
        Icon: FaClock,
        color: "text-yellow-500 dark:text-yellow-400",
      },
      planned: {
        Icon: FaExclamationTriangle,
        color: "text-red-500 dark:text-red-400",
      },
    };

    const { Icon, color } = iconConfig[status as keyof typeof iconConfig] || {};
    return Icon ? <Icon className={`${color} text-2xl`} /> : null;
  };

  const renderProgressBar = (percentage: number, gradientColors: string) => (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
        <motion.div
          className={`bg-gradient-to-r ${gradientColors} h-4 rounded-full transition-all duration-500 ease-out relative`}
          style={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <span
            className={`absolute inset-0 flex items-center justify-center text-xs font-semibold ${percentage === 0 ? "text-gray-600 dark:text-gray-400" : "text-white"}`}
          >
            {percentage}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderSection = (
    title: string,
    items: any[],
    renderItem: (item: any, index: number) => React.ReactNode
  ) => (
    <motion.div
      className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden mb-10 transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 py-5">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {title}
        </h2>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        {items.map(renderItem)}
      </div>
    </motion.div>
  );

  const renderFeature = (feature: any, index: number) => (
    <motion.div
      key={index}
      className="px-6 py-5 flex flex-col lg:flex-row items-start lg:items-center justify-between transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-3 lg:mb-0 lg:w-1/4">
        {getStatusIcon(feature.status)}
        <span className="ml-3 font-semibold text-lg">
          {t(`features.${feature.name}.name`)}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-3 lg:mb-0 text-left lg:w-1/3">
        {t(`features.${feature.name}.description`)}
      </p>
      <div className="w-full lg:w-1/3">
        {renderProgressBar(feature.percentage, "from-blue-500 to-purple-500")}
        {feature.status === "completed-with-updates" && (
          <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 block">
            ({t("updatesPlanned")})
          </span>
        )}
      </div>
    </motion.div>
  );

  const renderIssue = (issue: any, index: number) => (
    <motion.div
      key={index}
      className="px-6 py-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <FaTools className="text-yellow-500 dark:text-yellow-400 mr-2 text-2xl" />
          <p className="text-base font-medium text-gray-800 dark:text-gray-200">
            {t(`knownIssues.${issue.name}`)}
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          {renderProgressBar(issue.percentage, "from-red-500 to-yellow-500")}
        </div>
      </div>
    </motion.div>
  );

  const renderIdea = (idea: any, index: number) => (
    <motion.div
      key={index}
      className="px-6 py-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <FaLightbulb className="text-yellow-500 dark:text-yellow-400 mr-2 text-2xl" />
          <p className="text-base font-medium text-gray-800 dark:text-gray-200">
            {t(`ideas.${idea.name}`)}
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          {renderProgressBar(idea.percentage, "from-green-500 to-blue-500")}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("title")}
        </motion.h1>

        {renderSection(t("featureProgress"), features, renderFeature)}
        {renderSection(t("knownIssues.title"), knownIssues, renderIssue)}
        {renderSection(t("futureIdeas"), ideas, renderIdea)}
      </div>
    </div>
  );
};

export default StatusPage;
