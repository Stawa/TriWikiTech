import { useState, useEffect } from "react";
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { useLoaderData, useLocation, Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaGraduationCap,
  FaTrophy,
  FaChartLine,
  FaBook,
  FaLaptopCode,
  FaCode,
  FaMedal,
  FaStar,
  FaGithub,
  FaTwitter,
  FaReact,
  FaJs,
  FaHistory,
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { firestoreService } from "~/services/firebase.server";
import { destroySession, getSession } from "~/services/session.server";
import { UserProfile } from "~/types/user";
import { SiTypescript } from "react-icons/si";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.user.name}` },
  {
    name: "description",
    content: `Check out ${data.user.displayName}'s profile on TriWikiTech! Join us to learn, code, and grow together.`,
  },
];

interface LoaderData {
  user: UserProfile;
  error?: string;
  recentCourses: string[];
  isOwnProfile: boolean;
}

const Badges = {
  Developer: <FaShieldAlt />,
  Member: <IoMdPerson />,
  Beta: <FaStar />,
  Expert: <FaGraduationCap />,
  Achiever: <FaTrophy />,
};

export const loader: LoaderFunction = async ({
  params,
  request,
}): Promise<LoaderData | Response> => {
  const { username } = params;

  if (!username) {
    return redirect("/");
  }

  try {
    const session = await getSession(request);
    const currentUserId = session.get("userId");
    const userData = await getUserData(username);
    const isOwnProfile = currentUserId === userData.user.id;

    return {
      ...userData,
      isOwnProfile,
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      user: {} as UserProfile,
      error: "An error occurred while fetching user data",
      recentCourses: [],
      isOwnProfile: false,
    };
  }
};

async function getUserData(
  username: string
): Promise<Omit<LoaderData, "isOwnProfile">> {
  const [userData] = await firestoreService.queryCollection(
    "users",
    "name",
    "==",
    username
  );

  if (!userData) {
    return {
      user: {} as UserProfile,
      error: "User not found",
      recentCourses: [],
    };
  }

  const recentCourses = [
    "Introduction to TypeScript",
    "Advanced React Patterns",
    "Node.js Performance Optimization",
    "GraphQL Fundamentals",
  ];

  return {
    user: userData as UserProfile,
    recentCourses,
  };
}

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

export default function Profile() {
  const { user, error, recentCourses, isOwnProfile } =
    useLoaderData<LoaderData>();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (
      [
        "overview",
        "courses",
        "projects",
        "challenges",
        "achievements",
      ].includes(hash)
    ) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  if (error === "User not found") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            User Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The user you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", icon: <FaChartLine />, label: "Overview" },
    { id: "courses", icon: <FaBook />, label: "Courses" },
    { id: "projects", icon: <FaLaptopCode />, label: "Projects" },
    { id: "challenges", icon: <FaCode />, label: "Challenges" },
    { id: "achievements", icon: <FaMedal />, label: "Achievements" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-blue-100/20 dark:border-blue-700/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
          {/* Header */}
          <div className="relative h-36 sm:h-48 lg:h-72">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-overlay" />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/95 dark:from-gray-900/95 via-white/70 dark:via-gray-900/70 to-transparent" />
          </div>

          <div className="relative px-4 sm:px-8 lg:px-12 pb-8 -mt-24 sm:-mt-32">
            <div className="flex flex-col items-center lg:flex-row lg:items-end lg:space-x-12">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-300 ring-8 ring-white/20 dark:ring-gray-800/20">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.displayName}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                        {user.displayName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Badges */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 flex flex-wrap justify-end gap-1 sm:gap-2">
                  {Object.entries(Badges).map(
                    ([type, icon]) =>
                      user.badges?.includes(type) && (
                        <div
                          key={type}
                          className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-lg border border-indigo-100 dark:border-indigo-800 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                          title={type}
                        >
                          {icon}
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* Profile Info */}
              <div className="mt-4 sm:mt-6 lg:mt-0 flex-1 text-center lg:text-left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
                    <div className="flex flex-col lg:max-w-3xl">
                      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-200 dark:to-gray-300 mb-2 sm:mb-4 drop-shadow-sm">
                        {user.displayName}
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                        {user.bio || (
                          <span className="italic text-gray-500 dark:text-gray-400">
                            Passionate developer exploring web technologies and building amazing experiences. Focused on React, TypeScript and modern web development.
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-4 lg:mt-0">
                      <a
                        href="#"
                        className="p-2 lg:p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 shadow-md backdrop-blur-sm"
                      >
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                      </a>
                      <a
                        href="#"
                        className="p-2 lg:p-3 rounded-lg bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 shadow-md backdrop-blur-sm"
                      >
                        <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                    <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-50/90 dark:bg-blue-900/30 rounded-lg backdrop-blur-sm shadow-sm">
                      <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-base sm:text-lg lg:text-xl" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg font-medium">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-yellow-50/90 dark:bg-yellow-900/30 rounded-lg backdrop-blur-sm shadow-sm">
                      <FaTrophy className="text-yellow-600 dark:text-yellow-400 text-base sm:text-lg lg:text-xl" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg font-medium">
                        1,234 Points
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-50/90 dark:bg-indigo-900/30 rounded-lg backdrop-blur-sm shadow-sm">
                      <FaCode className="text-indigo-600 dark:text-indigo-400 text-base sm:text-lg lg:text-xl" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg font-medium">
                        12 Courses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8 sm:mt-12 lg:mt-16">
              <nav className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-6">
                {tabs.map((tab) => (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 font-medium 
                      text-xs sm:text-sm lg:text-base transition-all duration-300 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]
                      ${
                        activeTab === tab.id
                          ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                          : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-b-2 hover:border-blue-600 dark:hover:border-blue-400"
                      }
                    `}
                  >
                    <div className="flex items-center justify-center w-full space-x-2 sm:space-x-3">
                      <span
                        className={`text-lg sm:text-xl lg:text-2xl ${
                          activeTab === tab.id
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {tab.icon}
                      </span>
                      <span
                        className={`font-semibold whitespace-nowrap ${
                          activeTab === tab.id
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {tab.label}
                      </span>
                    </div>
                  </a>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="mt-6 sm:mt-8 lg:mt-12">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                  {/* Stats & Progress */}
                  <div className="lg:col-span-4 space-y-4 md:space-y-6 lg:space-y-8">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-800 rounded-lg p-4 shadow-lg">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            24
                          </div>
                          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Lessons
                          </div>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-800 rounded-lg p-4 shadow-lg">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            8
                          </div>
                          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Achievements
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Progress */}
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-800 backdrop-blur-xl p-6 sm:p-8 shadow-lg">
                      <div className="relative">
                        <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-6 sm:mb-8 flex items-center gap-3">
                          <span className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                            <FaChartLine className="text-blue-600 dark:text-blue-400" />
                          </span>
                          Learning Progress
                        </h3>
                        <div className="space-y-6 sm:space-y-8">
                          {[
                            {
                              name: "JavaScript",
                              progress: 75,
                              color: "from-yellow-400 via-yellow-500 to-orange-500",
                              icon: FaJs,
                              description: "Advanced concepts & patterns",
                            },
                            {
                              name: "TypeScript",
                              progress: 45,
                              color: "from-blue-400 via-blue-500 to-blue-600",
                              icon: SiTypescript,
                              description: "Types & interfaces",
                            },
                            {
                              name: "React",
                              progress: 60,
                              color: "from-cyan-400 via-cyan-500 to-cyan-600",
                              icon: FaReact,
                              description: "Hooks & component patterns",
                            },
                          ].map((item) => (
                            <div key={item.name} className="group">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3 sm:gap-4">
                                  <span className="p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-inner">
                                    <item.icon className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" />
                                  </span>
                                  <div>
                                    <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                                      {item.name}
                                    </span>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                                <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-700 dark:text-blue-300 shadow-inner">
                                  {item.progress}%
                                </span>
                              </div>
                              <div className="h-2 sm:h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden backdrop-blur-sm p-0.5">
                                <div
                                  style={{ width: `${item.progress}%` }}
                                  className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-lg relative`}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="lg:col-span-8">
                    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-800 backdrop-blur-xl shadow-lg">
                      <div className="relative p-6 sm:p-8 border-b border-gray-100/20 dark:border-gray-800/20 bg-gradient-to-r from-blue-50/50 via-indigo-50/50 to-violet-50/50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-violet-900/20">
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                              <FaHistory className="text-lg sm:text-xl text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                              Recent Activity
                            </h3>
                          </div>
                          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Live Updates
                          </div>
                        </div>
                      </div>
                      <div className="divide-y divide-gray-100/20 dark:divide-gray-800/20">
                        {recentCourses.map((course) => (
                          <div
                            key={course}
                            className="relative p-4 sm:p-6 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200"
                          >
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-blue-500">
                                  <FaBook className="text-white text-lg sm:text-xl" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                                    {course}
                                  </h4>
                                  <span className="max-w-fit text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-700 dark:text-blue-300 font-medium border border-blue-200/20 dark:border-blue-700/20 backdrop-blur-sm">
                                    2h ago
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2 flex items-center gap-2">
                                  <span className="inline-flex items-center gap-1 text-emerald-500 font-semibold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full">
                                    +50 XP
                                  </span>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-blue-500 dark:text-blue-400 font-medium">
                                    Completed lesson
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "courses" && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Courses Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're working hard to bring you an amazing course
                    experience. Stay tuned!
                  </p>
                </div>
              )}
              {activeTab === "projects" && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Projects Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Project showcase features are under development. Check
                    back soon!
                  </p>
                </div>
              )}
              {activeTab === "challenges" && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Challenges Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Get ready for exciting coding challenges. Coming to you
                    shortly!
                  </p>
                </div>
              )}
              {activeTab === "achievements" && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Achievements Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your achievements and badges will be displayed here soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
