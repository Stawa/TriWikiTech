"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getUserData, User } from "@components/user";
import { FiEdit, FiMail, FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const ProfileVisibilityBadge = dynamic(() => import("@app/profile/badge"));
const ProfileCardDashboard = dynamic(() => import("@app/profile/dashboard"), {
  ssr: false,
});
const LoadingPlaceholder = dynamic(() => import("@app/profile/load"));

interface ProfileInfoProps {
  user: User;
}

const ProfileInfo = ({ user }: ProfileInfoProps) => (
  <div className="w-full lg:w-1/3">
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute top-4 right-4">
          <ProfileVisibilityBadge isPublic={user.isPublic} />
        </div>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center mb-2 md:mb-4">
          <div className="w-24 h-24 relative">
            <Image
              src={user.avatar || ""}
              alt={user.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover border-4 border-white shadow-xl"
              quality={100}
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-4 md:mt-6 mb-2">
            {user.name}
          </h2>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 md:p-6 mb-4 md:mb-6 shadow-inner">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 md:mb-3 flex items-center">
            <FaUserCircle className="mr-2 text-purple-500" /> Bio
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            No bio available.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 md:pt-6">
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg flex items-center mb-2 md:mb-3">
          <FiMail className="mr-2 md:mr-3 text-purple-500" /> {user.email}
        </p>
      </div>
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center text-sm md:text-base">
          <FiEdit className="mr-2" /> Edit Profile
        </button>
        <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center text-sm md:text-base">
          <FiSettings className="mr-2" /> Settings
        </button>
      </div>
    </div>
  </div>
);

export default function ProfileDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await getUserData();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <LoadingPlaceholder />;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-xl md:text-2xl text-gray-600 dark:text-gray-400">
        No user data available.
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
