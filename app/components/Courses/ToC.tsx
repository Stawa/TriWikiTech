import { Link } from "@remix-run/react";
import { TiArrowLeftOutline } from "react-icons/ti";

interface TableOfContentsProps {
  navigation: {
    id: string;
    title: string;
    number: string;
  }[];
}

function TableOfContents({ navigation }: TableOfContentsProps) {
  return (
    <>
      {/* Table of Contents */}
      <div className="lg:col-span-3">
        <div className="sticky top-24">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b-2 border-blue-500 dark:border-blue-400 inline-block">
            Table of Contents
          </h3>
          <nav className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center py-3 rounded-lg transition-all duration-300"
              >
                <span className="mr-3 text-blue-600 dark:text-blue-400 font-mono text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                  {item.number}
                </span>
                <span className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </span>
              </a>
            ))}
            <div className="border-t-2 border-gray-200 dark:border-gray-700">
              <Link
                to="/courses/javascript"
                className="flex items-center py-3 rounded-lg transition-all duration-300 mt-2"
              >
                <span className="mr-3 text-green-600 dark:text-green-400 font-mono text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  <TiArrowLeftOutline />
                </span>
                <span className="text-gray-800 dark:text-gray-200 font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                  Back to Course Overview
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Breakline for smaller screens */}
      <div className="block lg:hidden w-full my-4">
        <div className="h-px w-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </>
  );
}

export default TableOfContents;
