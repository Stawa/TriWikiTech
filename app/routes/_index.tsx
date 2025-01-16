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
      <header className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                filter: "contrast(320%) brightness(1000%)",
              }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-600/30 to-violet-600/30 backdrop-blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Floating elements */}
          <div className="absolute -top-16 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl rotate-12 opacity-20 animate-float" />
          <div className="absolute top-32 right-12 w-16 h-16 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-lg -rotate-12 opacity-20 animate-float-delay" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-violet-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-lg text-sm font-medium rounded-full mb-6 border border-white/20 inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Welcome to TriWikiTech
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight tracking-tight text-center">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 drop-shadow-lg">
                {Index.title}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-blue-50/90 mb-12 sm:mb-14 max-w-3xl mx-auto text-center leading-relaxed font-medium"
          >
            {Index.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center max-w-2xl mx-auto"
          >
            <Link
              to="/#featured-languages"
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative w-full bg-white px-8 py-4 rounded-2xl text-blue-600 font-bold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 min-w-[200px]">
                <span className="transition-colors duration-300 group-hover:text-indigo-600">
                  {Index.startJourney}
                </span>
                <IoNavigateOutline className="w-6 h-6 transition-all duration-300 group-hover:hidden text-blue-600" />
                <IoNavigateSharp className="w-6 h-6 transition-all duration-300 hidden group-hover:block text-indigo-600" />
              </button>
            </Link>

            <Link to="#learn-more" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-violet-500/50 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <button className="relative w-full backdrop-blur-sm border-2 border-white/20 px-8 py-4 rounded-2xl text-white font-bold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 min-w-[200px] hover:bg-white/10">
                <span>{Index.exploreFeatures}</span>
                <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="relative h-[4rem] sm:h-[6rem]">
            <svg
              className="absolute h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 1440 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 27L48 24.7C96 22.3 192 17.7 288 22.3C384 27 480 41 576 43.3C672 45.7 768 36.3 864 27C960 17.7 1056 8.3 1152 11.7C1248 15 1344 31 1392 39L1440 47V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V27Z"
                fill="currentColor"
                className="text-white/5"
              />
              <path
                d="M0 27L48 24.7C96 22.3 192 17.7 288 22.3C384 27 480 41 576 43.3C672 45.7 768 36.3 864 27C960 17.7 1056 8.3 1152 11.7C1248 15 1344 31 1392 39L1440 47V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V27Z"
                fill="currentColor"
                className="text-white/10"
                transform="translate(0, 3)"
              />
            </svg>
          </div>
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
