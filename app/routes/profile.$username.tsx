import { useState, useEffect } from "react";
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
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
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { firestoreService } from "~/services/firebase.server";
import { destroySession, getSession } from "~/services/session.server";
import { UserProfile } from "~/types/user";
import { convertToUserProfile } from "~/utils/convert";

import UserNotFound from "~/components/Profile/NotFound";
import ProfileBanner from "~/components/Profile/Banner";
import NavItem from "~/components/Profile/NavItems";

import OverviewContent from "~/components/Profile/Content/Overview";
import CoursesContent from "~/components/Profile/Content/Courses";
import ProjectsContent from "~/components/Profile/Content/Projects";
import ChallengesContent from "~/components/Profile/Content/Challenges";
import AchievementsContent from "~/components/Profile/Content/Achievements";

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

  const handleUpdateDisplayedBadges = async (displayedBadges: string[]) => {
    try {
      const response = await fetch("/api/updateDisplayedBadges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id, displayedBadges }),
      });
      if (!response.ok) {
        throw new Error("Failed to update displayed badges");
      }
    } catch (error) {
      console.error("Failed to update displayed badges:", error);
    }
  };

  if (error === "User not found") {
    return <UserNotFound />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewContent recentCourses={recentCourses} />;
      case "courses":
        return <CoursesContent />;
      case "projects":
        return <ProjectsContent />;
      case "challenges":
        return <ChallengesContent />;
      case "achievements":
        return <AchievementsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 3xl:px-32 py-8 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-8xl mx-auto w-full flex flex-col">
        <main className="flex-1">
          <div className="w-full space-y-8 bg-white dark:bg-indigo-900 bg-opacity-50 dark:bg-opacity-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
              <div className="lg:col-span-1">
                <ProfileBanner
                  user={convertToUserProfile(user)}
                  badges={Badges}
                  isOwnProfile={isOwnProfile}
                  onUpdateDisplayedBadges={handleUpdateDisplayedBadges}
                />
              </div>
              <div className="lg:col-span-2 space-y-4 lg:space-y-8">
                <nav className="mb-4">
                  <ul className="flex flex-wrap justify-start gap-2 sm:gap-4">
                    <NavItem
                      onClick={() => setActiveTab("overview")}
                      icon={<FaChartLine className="text-teal-400" />}
                      text="Overview"
                      isActive={activeTab === "overview"}
                      href="#overview"
                    />
                    <NavItem
                      onClick={() => setActiveTab("courses")}
                      icon={<FaBook className="text-emerald-400" />}
                      text="Courses"
                      isActive={activeTab === "courses"}
                      href="#courses"
                    />
                    <NavItem
                      onClick={() => setActiveTab("projects")}
                      icon={<FaLaptopCode className="text-violet-400" />}
                      text="Projects"
                      isActive={activeTab === "projects"}
                      href="#projects"
                    />
                    <NavItem
                      onClick={() => setActiveTab("challenges")}
                      icon={<FaCode className="text-amber-400" />}
                      text="Challenges"
                      isActive={activeTab === "challenges"}
                      href="#challenges"
                    />
                    <NavItem
                      onClick={() => setActiveTab("achievements")}
                      icon={<FaMedal className="text-rose-400" />}
                      text="Achievements"
                      isActive={activeTab === "achievements"}
                      href="#achievements"
                    />
                  </ul>
                </nav>
                {renderContent()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
