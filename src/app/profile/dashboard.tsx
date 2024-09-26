import {
  FaJs,
  FaPython,
  FaReact,
  FaGraduationCap,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { GiTrophy } from "react-icons/gi";
import { PiScrollFill } from "react-icons/pi";
import dynamic from "next/dynamic";

const ProfileCard = dynamic(() => import("./card"), {
  ssr: false,
});

const ProfileCardDashboard = () => (
  <div className="w-full lg:w-2/3">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
      <ProfileCard
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
      <ProfileCard
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
      <ProfileCard
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
      <ProfileCard
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
);

export default ProfileCardDashboard;
