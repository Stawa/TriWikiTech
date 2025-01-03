import { Link } from "@remix-run/react";
import { FaArrowRight } from "react-icons/fa";

interface LanguageCardProps {
  title: string;
  description: string;
  href: string;
}

export default function LanguageCard({ title, description, href }: LanguageCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/20 dark:to-blue-500/20 flex items-center justify-center mb-4 ring-1 ring-black/5 dark:ring-white/5">
            <img
              src={`/lang/${title}.svg`}
              alt={title}
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              width="40"
              height="40"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
        <Link
          to={href}
          className="inline-flex items-center justify-center mt-auto px-6 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-700 text-indigo-600 dark:text-indigo-400 font-medium rounded-xl group-hover:from-indigo-600 group-hover:to-blue-600 dark:group-hover:from-indigo-500 dark:group-hover:to-blue-500 group-hover:text-white transition-all duration-300"
        >
          <span>Start Learning</span>
          <FaArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div
        className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-100 dark:ring-gray-700 group-hover:ring-indigo-600/20 dark:group-hover:ring-indigo-400/20 transition-all duration-300"
        aria-hidden="true"
      />
    </div>
  );
}
