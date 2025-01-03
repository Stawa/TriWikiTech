import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { IoNavigateOutline, IoNavigateSharp } from "react-icons/io5";
import { Suspense } from "react";
import getTranslation from "~/utils/getTranslation.server";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.title}` },
  {
    name: "description",
    content: data.description,
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const homeTranslations = await getTranslation(request, "home");
  return homeTranslations;
}

export default function Index() {
  const { Index } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 drop-shadow-lg"
          >
            {Index.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-blue-50 mb-10 sm:mb-12 max-w-3xl mx-auto text-center leading-relaxed font-medium"
          >
            {Index.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center"
          >
            <Link
              to="/#featured-languages"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg inline-flex items-center justify-center shadow-xl hover:shadow-blue-500/30 group relative overflow-hidden transform hover:-translate-y-1 w-full sm:w-auto min-w-[200px]"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-indigo-600">
                {Index.startJourney}
              </span>
              <IoNavigateOutline className="ml-3 relative z-10 w-6 h-6 transition-all duration-300 group-hover:hidden text-blue-600" />
              <IoNavigateSharp className="ml-3 relative z-10 w-6 h-6 transition-all duration-300 hidden group-hover:block text-indigo-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link
              to="#learn-more"
              className="bg-transparent backdrop-blur-sm border-2 border-blue-300/50 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg inline-flex items-center justify-center hover:border-white group relative overflow-hidden transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 w-full sm:w-auto min-w-[200px]"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {Index.exploreFeatures}
              </span>
              <FaArrowRight className="ml-3 relative z-10 w-5 h-5 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 opacity-20">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>
      <main className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32 sm:mb-40"
            id="learn-more"
          >
            <div className="flex flex-col items-center">
              <span className="px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-8 tracking-wide">
                {Index.exploreLearn}
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 sm:mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 drop-shadow">
                {Index.whyStandOut}
              </h2>
              <p className="text-lg sm:text-xl text-center text-gray-700 dark:text-gray-300 mb-16 sm:mb-20 max-w-3xl mx-auto leading-relaxed">
                {Index.whyStandOutDescription}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-48">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                }
              >
                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {getFeatures({ translations: Index }).map(
                    (feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
                      >
                        {/* Icon Container */}
                        <div className="mb-6">
                          <div
                            className={`inline-flex p-4 rounded-xl ${feature.color} shadow-md`}
                          >
                            <span className="text-white">{feature.icon}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <div className="flex items-center space-x-4 mb-4">
                            <div
                              className={`flex-shrink-0 h-1 w-8 ${feature.color}`}
                            />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-6 right-6 flex space-x-1.5">
                          <div
                            className={`w-1.5 h-1.5 ${feature.color} rounded-full`}
                          />
                          <div
                            className={`w-1.5 h-1.5 ${feature.color} rounded-full opacity-60`}
                          />
                          <div
                            className={`w-1.5 h-1.5 ${feature.color} rounded-full opacity-30`}
                          />
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </Suspense>
            </motion.div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-32 sm:mb-40"
            id="featured-languages"
          >
            <div className="flex flex-col items-center">
              <span className="px-6 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-8 tracking-wide">
                {Index.featuredTools}
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 sm:mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 drop-shadow">
                {Index.featuredLanguages}
              </h2>
              <p className="text-lg sm:text-xl text-center text-gray-700 dark:text-gray-300 mb-16 sm:mb-20 max-w-3xl mx-auto leading-relaxed">
                {Index.featuredLanguagesDescription}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {getLanguages({ translations: Index }).map(
                  (language, index) => (
                    <motion.div
                      key={language.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="group relative bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full hover:-translate-y-1"
                    >
                      <div className="flex flex-col justify-between p-8 h-full">
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <div className="shrink-0">
                              <div className="w-14 h-14 rounded-lg bg-indigo-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-gray-700 transition-colors duration-300 border border-gray-100 dark:border-gray-700">
                                <img
                                  src={language.image}
                                  alt={language.name}
                                  className={`${language.imageStyle} transition-transform duration-300 group-hover:scale-110`}
                                  loading="lazy"
                                  width="32"
                                  height="32"
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                                {language.name}
                              </h3>
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {language.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Link
                          to={language.courseLink}
                          className="inline-flex items-center justify-center w-full mt-6 px-4 py-2.5 bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 relative z-10"
                        >
                          <span>{Index.startLearning}</span>
                          <FaArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <div
                          className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-100 dark:ring-gray-800 group-hover:ring-indigo-600/20 dark:group-hover:ring-indigo-400/20 transition-all duration-200"
                          aria-hidden="true"
                        />
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.section>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
      </main>
    </div>
  );
}

interface LanguageCardProps {
  translations: {
    languages: {
      [key: string]: {
        description: string;
      };
    };
  };
}

function getLanguages({ translations }: LanguageCardProps) {
  return [
    {
      name: "JavaScript",
      description: translations.languages.JavaScript.description,
      image: "/lang/JS.svg",
      imageStyle: "w-8 h-8 object-contain",
      courseLink: "/courses/javascript",
    },
    {
      name: "Python",
      description: translations.languages.Python.description,
      image: "/lang/Python.svg",
      imageStyle: "w-14 h-14 object-contain",
      courseLink: "/courses/python",
    },
    {
      name: "Java",
      description: translations.languages.Java.description,
      image: "/lang/Java.svg",
      imageStyle: "w-10 h-10 object-contain",
      courseLink: "/courses/java",
    },
    {
      name: "C++",
      description: translations.languages.CPP.description,
      image: "/lang/CPP.svg",
      imageStyle: "w-8 h-8 object-contain",
      courseLink: "/courses/cpp",
    },
    {
      name: "Ruby",
      description: translations.languages.Ruby.description,
      image: "/lang/Ruby.svg",
      imageStyle: "w-6 h-6 object-contain",
      courseLink: "/courses/ruby",
    },
    {
      name: "Go",
      description: translations.languages.Go.description,
      image: "/lang/Go.svg",
      imageStyle: "w-10 h-10 object-contain",
      courseLink: "/courses/go",
    },
  ];
}

interface FeatureProps {
  translations: {
    features: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
}

function getFeatures({ translations }: FeatureProps) {
  return [
    {
      icon: <FaLaptopCode className="w-7 h-7" />,
      title: translations.features.MultiLanguage.title,
      description: translations.features.MultiLanguage.description,
      color: "bg-blue-500",
    },
    {
      icon: <FaGraduationCap className="w-7 h-7" />,
      title: translations.features.AdaptiveLearning.title,
      description: translations.features.AdaptiveLearning.description,
      color: "bg-indigo-500",
    },
    {
      icon: <FaCode className="w-7 h-7" />,
      title: translations.features.CodeReview.title,
      description: translations.features.CodeReview.description,
      color: "bg-violet-500",
    },
  ];
}
