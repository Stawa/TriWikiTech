import { lazy, Suspense } from "react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { IoNavigateOutline, IoNavigateSharp } from "react-icons/io5";
import { MdGroup, MdLightbulb } from "react-icons/md";
import {
  FaArrowRight,
  FaBrain,
  FaChalkboardTeacher,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaUserTie,
} from "react-icons/fa";
import getTranslation from "~/utils/getTranslation.server";

const LanguageMain = lazy(() => import("~/components/Index/Language/Main"));
const FeatureMain = lazy(() => import("~/components/Index/Feature/Main"));

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans">
      <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight text-center"
          >
            {Index.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-3xl text-purple-100 mb-8 sm:mb-10 max-w-4xl mx-auto text-center leading-relaxed"
          >
            {Index.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            <Link
              to="/courses"
              className="bg-white text-purple-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition duration-300 text-base sm:text-lg inline-flex items-center justify-center shadow-lg group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10">{Index.startJourney}</span>
              <IoNavigateOutline className="ml-2 relative z-10 w-5 h-5 transition-transform duration-300 group-hover:hidden" />
              <IoNavigateSharp className="ml-2 relative z-10 w-5 h-5 transition-transform duration-300 hidden group-hover:block" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link
              to="#learn-more"
              className="bg-transparent border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition duration-300 text-base sm:text-lg inline-flex items-center justify-center group relative overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-800">
                {Index.exploreFeatures}
              </span>
              <FaArrowRight className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-800" />
              <div className="absolute inset-0 bg-white transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
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

      <main
        id="learn-more"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 sm:mb-32"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-center text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Discover Our Key Features
            </h2>
            <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Unlock powerful tools and resources that make TriWikiTech your
              ultimate coding companion for students, teachers, and
              professionals alike.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Suspense fallback={<div>Loading features...</div>}>
                <FeatureMain
                  Index={Index}
                  getFeatures={() => getFeatures({ translations: Index })}
                />
              </Suspense>
            </motion.div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-24 sm:mb-32"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-center text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
              Programming Languages We Support
            </h2>
            <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Embark on your coding journey with our curated selection of
              languages, perfect for beginners and experts alike.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Suspense fallback={<div>Loading languages...</div>}>
                <LanguageMain
                  translations={Index}
                  languages={getLanguages({ translations: Index })}
                />
              </Suspense>
            </motion.div>
          </motion.section>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
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
      courseLink: "/courses/javascript",
      compilerLink: "/compiler/javascript",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Python",
      description: translations.languages.Python.description,
      image: "/lang/Python.svg",
      courseLink: "/courses/python",
      compilerLink: "/compiler/python",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Java",
      description: translations.languages.Java.description,
      image: "/lang/Java.svg",
      courseLink: "/courses/java",
      compilerLink: "/compiler/java",
      color: "from-purple-200 to-purple-400",
    },
    {
      name: "C++",
      description: translations.languages.CPP.description,
      image: "/lang/CPP.svg",
      courseLink: "/courses/cpp",
      compilerLink: "/compiler/cpp",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      name: "Ruby",
      description: translations.languages.Ruby.description,
      image: "/lang/Ruby.svg",
      courseLink: "/courses/ruby",
      compilerLink: "/compiler/ruby",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Go",
      description: translations.languages.Go.description,
      image: "/lang/Go.svg",
      courseLink: "/courses/go",
      compilerLink: "/compiler/go",
      color: "from-cyan-400 to-cyan-600",
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
      icon: <MdLightbulb />,
      title: translations.features.AILearning.title,
      color: "bg-amber-500",
      description: translations.features.AILearning.description,
    },
    {
      icon: <FaLaptopCode />,
      title: translations.features.MultiLanguage.title,
      color: "bg-emerald-500",
      description: translations.features.MultiLanguage.description,
    },
    {
      icon: <FaBrain />,
      title: translations.features.KnowledgeHub.title,
      color: "bg-rose-500",
      description: translations.features.KnowledgeHub.description,
    },
    {
      icon: <FaGraduationCap />,
      title: translations.features.AdaptiveLearning.title,
      color: "bg-blue-500",
      description: translations.features.AdaptiveLearning.description,
    },
    {
      icon: <MdGroup />,
      title: translations.features.CollaborativeCoding.title,
      color: "bg-green-500",
      description: translations.features.CollaborativeCoding.description,
    },
    {
      icon: <FaRocket />,
      title: translations.features.SkillProgression.title,
      color: "bg-purple-500",
      description: translations.features.SkillProgression.description,
    },
    {
      icon: <FaChalkboardTeacher />,
      title: translations.features.CourseCreation.title,
      color: "bg-indigo-500",
      description: translations.features.CourseCreation.description,
    },
    {
      icon: <FaUserTie />,
      title: translations.features.LearningAnalytics.title,
      color: "bg-cyan-500",
      description: translations.features.LearningAnalytics.description,
    },
    {
      icon: <FaCode />,
      title: translations.features.CodeReview.title,
      color: "bg-pink-500",
      description: translations.features.CodeReview.description,
    },
  ];
}
