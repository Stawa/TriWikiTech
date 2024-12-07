import { Link } from "@remix-run/react";
import { BiTime, BiCalendar } from "react-icons/bi";

import calculateReadTime from "~/utils/calculateReadTime";
import convertDate from "~/utils/convertDate";

interface HeroProps {
  badge: {
    chapter: number;
    title: string;
  };
  title: {
    main: string;
    sub: string;
  };
  description: string;
  readTime: number;
  modified_time: Date;
}

function HeroSection({
  badge,
  title,
  description,
  readTime,
  modified_time,
}: HeroProps) {
  return (
    <>
      {/* Hero Section Banner */}
      <section
        id="hero"
        className="relative w-full py-16 lg:h-[630px] overflow-hidden bg-white dark:bg-gray-900"
      >
        {/* Clean, subtle background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_2px,transparent_2px)] bg-[length:30px_30px] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
        </div>

        <div className="container relative h-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto h-full flex flex-col lg:justify-center">
            {/* Header Content */}
            <div className="flex flex-col items-center space-y-6 lg:space-y-8">
              {/* Title Section */}
              <div className="text-center space-y-4 lg:space-y-6 w-full">
                {/* Hero Badge */}
                <div className="inline-flex items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full shadow-sm">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Chapter {badge.chapter}
                    </span>
                    <div className="w-1 h-4 bg-blue-300 dark:bg-blue-700 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {badge.title}
                    </span>
                  </div>
                </div>

                {/* Main Title */}
                <div className="space-y-2 max-w-6xl mx-auto">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title.main}
                  </h1>
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {title.sub}
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mt-4 lg:mt-6">
                  {description}
                </p>
              </div>

              {/* Meta information */}
              <div className="flex justify-center pt-4 lg:pt-6">
                {/* Desktop View */}
                <div className="hidden lg:flex items-center gap-12 px-8 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src="https://avatars.githubusercontent.com/u/69102292?v=4"
                        alt="Author avatar"
                        className="w-12 h-12 rounded-full ring-2 ring-blue-500/20 dark:ring-blue-400/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-gray-900">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Written by
                      </div>
                      <Link
                        to="https://github.com/stawa"
                        target="_blank"
                        className="font-medium text-gray-900 dark:text-white text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        Stawa
                      </Link>
                    </div>
                  </div>

                  <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>

                  {/* Reading Time */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                      <BiTime className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Reading time
                      </div>
                      <div className="text-base font-medium text-gray-900 dark:text-white">
                        {calculateReadTime(readTime)} minutes
                      </div>
                    </div>
                  </div>

                  <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>

                  {/* Last Updated */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                      <BiCalendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Last updated
                      </div>
                      <div className="text-base font-medium text-gray-900 dark:text-white">
                        {convertDate(modified_time)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile and Medium Screen View */}
                <div className="lg:hidden w-full px-4">
                  <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-4">
                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src="https://avatars.githubusercontent.com/u/69102292?v=4"
                        alt="Author avatar"
                        className="w-10 h-10 rounded-full ring-2 ring-blue-500/20 dark:ring-blue-400/20"
                      />
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Written by
                        </div>
                        <Link
                          to="https://github.com/stawa"
                          target="_blank"
                          className="font-medium text-gray-900 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          Stawa
                        </Link>
                      </div>
                    </div>

                    <div className="h-px w-full bg-gray-200/70 dark:bg-gray-700/70 my-4"></div>

                    {/* Reading Time and Last Updated */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                          <BiTime className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Reading time
                          </div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {calculateReadTime(readTime)} minutes
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                          <BiCalendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Last updated
                          </div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {convertDate(modified_time)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
