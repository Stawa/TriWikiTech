import { useState, useEffect } from "react";
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { useLoaderData, useLocation, Link } from "@remix-run/react";
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
  FaUserSlash,
  FaFolder,
  FaHome,
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { firestoreService } from "~/services/firebase.server";
import { destroySession, getSession } from "~/services/session.server";
import { UserProfile } from "~/types/user";
import { SiTypescript } from "react-icons/si";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: `TriWikiTech | ${data.user.name || "Not Found"}` },
  {
    name: "description",
    content: `Check out ${data.user.displayName}'s profile on TriWikiTech! Join us to learn, code, and grow together.`,
  },
];

interface LoaderData {
  user: UserProfile;
  error?: string;
  recentCourses: string[];
}

const Badges = {
  Developer: {
    icon: <FaShieldAlt />,
    label: "Developer",
    color: "bg-blue-500",
  },
  Member: { icon: <IoMdPerson />, label: "Member", color: "bg-green-500" },
  Beta: { icon: <FaStar />, label: "Beta Tester", color: "bg-yellow-500" },
  Expert: {
    icon: <FaGraduationCap />,
    label: "Expert",
    color: "bg-purple-500",
  },
  Achiever: { icon: <FaTrophy />, label: "Achiever", color: "bg-orange-500" },
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
    const userData = await getUserData(username);

    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      user: {} as UserProfile,
      error: "An error occurred while fetching user data",
      recentCourses: [],
    };
  }
};

async function getUserData(username: string): Promise<LoaderData> {
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

  return {
    user: userData as UserProfile,
    recentCourses: [],
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
  const { user, error, recentCourses } = useLoaderData<LoaderData>();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  const [isImageLoading, setIsImageLoading] = useState(true);

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
    setTimeout(() => {
      setIsImageLoading(false);
    }, 2000);
  }, [location.hash]);

  if (error === "User not found") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
        <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 dark:from-blue-500/10 dark:to-indigo-500/10 blur-3xl" />
            <div className="relative text-center p-6 sm:p-8 lg:p-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-100/50 dark:border-blue-800/50 ring-1 ring-blue-200/50 dark:ring-blue-700/50">
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <FaUserSlash className="text-white text-4xl sm:text-5xl lg:text-6xl" />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 mb-3 sm:mb-4 lg:mb-6">
                  User Not Found
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 lg:mb-10 max-w-md mx-auto">
                  The user you're looking for doesn't exist or may have been
                  removed.
                </p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 dark:hover:shadow-indigo-600/20 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    {
      id: "overview",
      icon: (
        <FaHome className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
      ),
      label: "Overview",
    },
    {
      id: "courses",
      icon: (
        <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
      ),
      label: "Courses",
    },
    {
      id: "projects",
      icon: (
        <FaFolder className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
      ),
      label: "Projects",
    },
    {
      id: "challenges",
      icon: (
        <FaTrophy className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
      ),
      label: "Challenges",
    },
    {
      id: "achievements",
      icon: (
        <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
      ),
      label: "Achievements",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl border border-blue-100/20 dark:border-blue-700/50 ring-1 ring-blue-100/30 dark:ring-blue-700/30">
          <div className="relative px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 pb-6 sm:pb-8">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
              {/* Profile Image */}
              <div className="relative mx-auto">
                <div className="w-32 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-2xl border-4 border-white dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-lg">
                  {isImageLoading && (
                    <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
                  )}
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={`${user.displayName}'s profile picture`}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isImageLoading ? 'opacity-0' : 'opacity-100'
                      }`}
                      onLoad={() => setIsImageLoading(false)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800">
                      <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                        {user.displayName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Info */}
              <div className="mt-6 md:mt-0 flex-1 self-center">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-200 dark:to-gray-300">
                        {user.displayName}
                      </h1>
                      <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
                        {user.bio || (
                          <span className="italic">
                            Passionate developer exploring web technologies and
                            building amazing experiences.
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex justify-center md:justify-end gap-3 mt-4 md:mt-0">
                      <a
                        href="#"
                        className="p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors backdrop-blur-md border border-blue-100/30 dark:border-blue-700/60 shadow-lg"
                      >
                        <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors backdrop-blur-md border border-blue-100/30 dark:border-blue-700/60 shadow-lg"
                      >
                        <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 sm:px-5 sm:py-2 rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 backdrop-blur-md border border-blue-200/40 dark:border-blue-700/40 shadow-lg">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-sm sm:text-base md:text-lg" />
                        <span className="text-xs sm:text-sm md:text-base text-blue-900 dark:text-blue-100 font-medium">
                          Intermediate
                        </span>
                      </div>
                      <span className="hidden sm:inline text-gray-400 dark:text-gray-500">
                        •
                      </span>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <FaTrophy className="text-yellow-600 dark:text-yellow-400 text-sm sm:text-base md:text-lg" />
                        <span className="text-xs sm:text-sm md:text-base text-yellow-900 dark:text-yellow-100 font-medium">
                          1,234 Points
                        </span>
                      </div>
                      <span className="hidden sm:inline text-gray-400 dark:text-gray-500">
                        •
                      </span>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <FaBook className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base md:text-lg" />
                        <span className="text-xs sm:text-sm md:text-base text-indigo-900 dark:text-indigo-100 font-medium">
                          12 Courses
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 sm:mt-8 border-b border-gray-200/80 dark:border-gray-800/80 overflow-x-auto">
              <nav className="flex space-x-4 sm:space-x-8 min-w-max">
                {tabs.map((tab) => (
                  <a
                    key={tab.id}
                    href={`#${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative pb-3 sm:pb-4 text-xs sm:text-sm font-medium transition-colors
                      ${
                        activeTab === tab.id
                          ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }
                    `}
                  >
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <span className="text-base sm:text-lg">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </div>
                  </a>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Stats & Progress */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-200/80 dark:border-gray-800/80 lg:pr-6 pb-8">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                        <FaChartLine className="text-xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Progress & Stats
                      </h3>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                          24
                        </div>
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          Lessons
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                          8
                        </div>
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          Achievements
                        </div>
                      </div>
                    </div>

                    {/* Learning Progress */}
                    <div className="space-y-6">
                      {[
                        {
                          name: "JavaScript",
                          progress: 75,
                          color: "bg-amber-500",
                          icon: FaJs,
                          iconColor: "text-amber-600 dark:text-amber-400",
                          description: "Advanced concepts & patterns",
                        },
                        {
                          name: "TypeScript",
                          progress: 45,
                          color: "bg-blue-500",
                          icon: SiTypescript,
                          iconColor: "text-blue-600 dark:text-blue-400",
                          description: "Types & interfaces",
                        },
                        {
                          name: "React",
                          progress: 60,
                          color: "bg-cyan-500",
                          icon: FaReact,
                          iconColor: "text-cyan-600 dark:text-cyan-400",
                          description: "Hooks & component patterns",
                        },
                      ].map((item) => (
                        <div key={item.name} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                                <item.icon
                                  className={`text-lg ${item.iconColor}`}
                                />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white">
                                  {item.name}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {item.progress}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${item.progress}%` }}
                              className={`h-full ${item.color} rounded-full transition-all duration-300 ease-in-out`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="lg:col-span-8 lg:pl-6 pb-8">
                    <div className="pb-8 border-b border-gray-200/80 dark:border-gray-800/80">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                            <FaHistory className="text-xl text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Recent Activity
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Live Updates
                        </div>
                      </div>
                    </div>
                    {recentCourses.length > 0 ? (
                      <div className="divide-y divide-gray-200/80 dark:divide-gray-800/80">
                        {recentCourses.map((course) => (
                          <div
                            key={course}
                            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                          >
                            <div className="flex items-center gap-4">
                              <div className="shrink-0">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                                  <FaBook className="text-xl text-white" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-4">
                                  <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                                    {course}
                                  </h4>
                                  <span className="shrink-0 text-sm px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                                    2h ago
                                  </span>
                                </div>
                                <div className="mt-2 flex items-center gap-3 text-sm">
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 font-medium">
                                    +50 XP
                                  </span>
                                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                                    Completed lesson
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          No Activity Yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Start learning to see your activity here!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {activeTab === "courses" && (
                <div className="text-center py-12 sm:py-16">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Courses Coming Soon
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                    We're working hard to bring you an amazing course
                    experience. Stay tuned!
                  </p>
                </div>
              )}
              {activeTab === "projects" && (
                <div className="text-center py-12 sm:py-16">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Projects Coming Soon
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                    Project showcase features are under development. Check back
                    soon!
                  </p>
                </div>
              )}
              {activeTab === "challenges" && (
                <div className="text-center py-12 sm:py-16">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Challenges Coming Soon
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                    Get ready for exciting coding challenges. Coming to you
                    shortly!
                  </p>
                </div>
              )}
              {activeTab === "achievements" && (
                <div className="text-center py-12 sm:py-16">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Achievements Coming Soon
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
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
