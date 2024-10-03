"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { User, getUserData } from "@components/user";
import { FiEdit, FiMail, FiSettings } from "react-icons/fi";
import { FaUserCircle, FaLock, FaShieldAlt, FaFlask } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useRouter } from "next/navigation";
import { getUserByUsername } from "./handle";
import Link from "next/link";

const ProfileImage = dynamic(() => import("@app/profile/image"));
const ProfileVisibilityBadge = dynamic(() => import("@app/profile/badge"));
const ProfileCardDashboard = dynamic(() => import("@app/profile/dashboard"), {
  ssr: false,
});
const LoadingPlaceholder = dynamic(() => import("@app/profile/load"));

interface ProfileInfoProps {
  user: User;
}

interface Badge {
  name: "Developer" | "Member" | "Beta Tester";
  color: string;
  icon: React.ReactNode;
}

const ModifyBadges: { [key: string]: Badge } = {
  Admin: {
    name: "Developer",
    color: "bg-red-600",
    icon: <FaShieldAlt />,
  },
  Member: {
    name: "Member",
    color: "bg-green-600",
    icon: <IoMdPerson />,
  },
  "Beta Tester": {
    name: "Beta Tester",
    color: "bg-yellow-600",
    icon: <FaFlask />,
  },
};

const ProfileInfo = ({ user }: ProfileInfoProps) => (
  <div className="w-full lg:w-1/3">
    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
        <div className="absolute top-4 right-4">
          <ProfileVisibilityBadge isPublic={user.isPublic} />
        </div>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center mb-2 md:mb-4">
          <div className="w-24 h-24 relative">
            <ProfileImage {...user} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mt-4 md:mt-6 mb-2">
            {user.displayName}
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {user.badges.map((badge, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs font-semibold text-white ${ModifyBadges[badge].color} rounded-full flex items-center`}
              >
                {ModifyBadges[badge].icon}
                <span className="ml-1">{ModifyBadges[badge].name}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 md:p-6 mb-4 md:mb-6 shadow-inner">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 md:mb-3 flex items-center">
            <FaUserCircle className="mr-2 text-purple-600 dark:text-purple-500" />{" "}
            Bio
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            {user.bio || "No bio available."}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 pt-4 md:pt-6">
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg flex items-center mb-2 md:mb-3">
          <FiMail className="mr-2 md:mr-3 text-purple-600 dark:text-purple-400" />{" "}
          {user.email}
        </p>
      </div>
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button className="flex-1 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center text-sm md:text-base">
          <FiEdit className="mr-2" /> Edit Profile
        </button>
        <button className="flex-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center text-sm md:text-base">
          <FiSettings className="mr-2" /> Settings
        </button>
      </div>
    </div>
  </div>
);

const PrivateProfileMessage = () => (
  <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
    <div className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-3xl p-6 sm:p-8 text-center max-w-md w-full transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-4 inline-block mb-6">
        <FaLock className="text-4xl sm:text-5xl text-purple-600 dark:text-purple-400" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Private Profile
      </h2>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
        This profile is set to private. Only the profile owner can view its
        contents.
      </p>
      <Link
        href="/"
        className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-sm sm:text-base inline-block"
      >
        Go Back
      </Link>
    </div>
  </div>
);

export default function ProfileDashboard({
  params,
}: {
  params: { username: string };
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchAndProcessUserData() {
      try {
        const [userData, currentUserData] = await Promise.all([
          getUserByUsername(params.username),
          getUserData(),
        ]);

        if (!userData) {
          router.push("/404");
        } else if (
          !userData.isPublic &&
          (!currentUserData || currentUserData.id !== userData.id)
        ) {
          setIsPrivate(true);
        } else {
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching or processing user data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAndProcessUserData();
  }, [router, params.username]);

  if (loading) {
    return <LoadingPlaceholder />;
  }

  if (isPrivate) {
    return <PrivateProfileMessage />;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-xl md:text-2xl text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900">
        User not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="container mx-auto px-4 py-8 md:py-12 lg:py-24"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <ProfileInfo user={user} />
          <ProfileCardDashboard />
        </div>
      </div>
    </div>
  );
}
