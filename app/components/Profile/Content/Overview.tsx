import { FaClock } from "react-icons/fa";
import StackedAreaChart from "~/components/Profile/Charts";

interface ProgressContentProps {
  recentCourses: string[];
}

const data = [
  { name: "Jan", courses: 4, projects: 2, challenges: 5 },
  { name: "Feb", courses: 3, projects: 1, challenges: 7 },
  { name: "Mar", courses: 5, projects: 3, challenges: 9 },
  { name: "Apr", courses: 6, projects: 4, challenges: 11 },
  { name: "May", courses: 4, projects: 2, challenges: 8 },
  { name: "Jun", courses: 7, projects: 5, challenges: 13 },
  { name: "Jul", courses: 8, projects: 6, challenges: 15 },
];

function ProgressContent({ recentCourses }: ProgressContentProps) {
  return (
    <>
      <div className="bg-white dark:bg-indigo-800 bg-opacity-50 dark:bg-opacity-50 p-4 lg:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4 text-indigo-600 dark:text-cyan-300">
          Learning Progress 2024
        </h2>
        <StackedAreaChart data={data} />
      </div>
      <div className="bg-white dark:bg-indigo-800 bg-opacity-50 dark:bg-opacity-50 p-4 lg:p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4 text-indigo-600 dark:text-cyan-300">
          Recent Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
          {recentCourses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 p-3 lg:p-4 rounded-lg shadow-md flex items-center space-x-2 lg:space-x-4 hover:bg-opacity-70 dark:hover:bg-opacity-70 transition-all duration-300"
            >
              <FaClock className="text-xl lg:text-2xl text-green-500 dark:text-green-400" />
              <span className="text-xs lg:text-sm text-green-600 dark:text-green-300">
                {course}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProgressContent;
