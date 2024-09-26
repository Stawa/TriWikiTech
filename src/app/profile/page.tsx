"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { getUserData, User } from "@components/user";
import { FiTrendingUp, FiEdit, FiMail, FiSettings } from "react-icons/fi";
import {
  FaBookBookmark,
  FaGraduationCap,
  FaJs,
  FaPython,
  FaReact,
  FaStar,
} from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { PiScrollFill } from "react-icons/pi";
import { FaCheckCircle, FaUserCircle } from "react-icons/fa";

const ProfileVisibilityBadge = dynamic(() => import("@app/profile/badge"));
const DashboardCard = dynamic(() => import("@app/profile/card"));

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
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="animate-spin rounded-full h-16 w-16 md:h-32 md:w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
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
                  <FiMail className="mr-2 md:mr-3 text-purple-500" />{" "}
                  {user.email}
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
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <DashboardCard
                title="Recent Courses"
                icon={<FaBookBookmark className="w-6 h-6 md:w-8 md:h-8" />}
                items={[
                  {
                    title: "Introduction to JavaScript",
                    icon: <FaJs className="w-3 h-3 md:w-4 md:h-4" />,
                    href: "/courses/javascript",
                  },
                  {
                    title: "Advanced Python Programming",
                    icon: <FaPython className="w-3 h-3 md:w-4 md:h-4" />,
                    href: "/courses/python",
                  },
                  {
                    title: "Web Development with React",
                    icon: <FaReact className="w-3 h-3 md:w-4 md:h-4" />,
                    href: "/courses/react",
                  },
                ]}
                gradientFrom="from-blue-500"
                gradientTo="to-purple-600"
                bgColor="bg-blue-50 dark:bg-blue-900"
              />
              <DashboardCard
                title="Recent Quizzes"
                icon={<PiScrollFill className="w-6 h-6 md:w-8 md:h-8" />}
                items={[
                  {
                    title: "JavaScript Basics Quiz",
                    icon: <FaJs className="w-3 h-3 md:w-4 md:h-4" />,
                    href: "/quizzes/javascript",
                  },
                  {
                    title: "Python Data Structures",
                    icon: <FaPython className="w-3 h-3 md:w-4 md:h-4" />,
                    href: "/quizzes/python",
                  },
                  {
                    title: "React Hooks Challenge",
                    icon: <FaReact className="w-3 h-3 md:w-4 md:h-4" />,
                    href: "/quizzes/react",
                  },
                ]}
                gradientFrom="from-purple-500"
                gradientTo="to-pink-600"
                bgColor="bg-purple-50 dark:bg-purple-900"
              />
              <DashboardCard
                title="Learning Progress"
                icon={<FiTrendingUp className="w-6 h-6 md:w-8 md:h-8" />}
                items={[
                  {
                    title: "Courses Completed: 5",
                    icon: <FaGraduationCap className="w-3 h-3 md:w-4 md:h-4" />,
                  },
                  {
                    title: "Quizzes Passed: 12",
                    icon: <FaCheckCircle className="w-3 h-3 md:w-4 md:h-4" />,
                  },
                  {
                    title: "Total Points: 1250",
                    icon: <FaStar className="w-3 h-3 md:w-4 md:h-4" />,
                  },
                ]}
                gradientFrom="from-green-500"
                gradientTo="to-teal-600"
                bgColor="bg-green-50 dark:bg-green-900"
              />
              <DashboardCard
                title="Achievements"
                icon={<GiTrophy className="w-6 h-6 md:w-8 md:h-8" />}
                items={[
                  {
                    title: "JavaScript Master",
                    icon: <FaJs className="w-3 h-3 md:w-4 md:h-4" />,
                  },
                  {
                    title: "Python Enthusiast",
                    icon: <FaPython className="w-3 h-3 md:w-4 md:h-4" />,
                  },
                  {
                    title: "React Ninja",
                    icon: <FaReact className="w-3 h-3 md:w-4 md:h-4" />,
                  },
                ]}
                gradientFrom="from-yellow-500"
                gradientTo="to-orange-600"
                bgColor="bg-yellow-50 dark:bg-yellow-900"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
