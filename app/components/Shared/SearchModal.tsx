import { forwardRef, useEffect, useState } from "react";
import { FaSearch, FaTimes, FaGraduationCap, FaCode } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { JavaScriptCourseModules } from "~/components/Courses/JavaScript/Index";
import { useSearch } from "~/context/SearchContext";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "course" | "quiz" | "resource";
  icon: JSX.Element;
}

interface LoaderData {
  Index: {
    languages: {
      [key: string]: {
        description: string;
      };
    };
    quizzes?: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
    resources?: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
}

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal = forwardRef<HTMLInputElement, SearchModalProps>(
  ({ onClose }, ref) => {
    const { Index } = useLoaderData<LoaderData>();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { setIsSearchOpen } = useSearch();

    useEffect(() => {
      setIsSearchOpen(true);
      return () => setIsSearchOpen(false);
    }, [setIsSearchOpen]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    // Initialize with default results
    useEffect(() => {
      const defaultItems = getDefaultResults();
      setResults(defaultItems);
    }, [Index]);

    const getDefaultResults = () => {
      const allResults: SearchResult[] = [];

      // Add JavaScript course modules
      JavaScriptCourseModules.forEach((category) => {
        category.modules.forEach((module) => {
          allResults.push({
            id: `javascript-${module.href.split("/").pop()}`,
            title: module.title,
            description: module.description,
            url: module.href,
            type: "course",
            icon: <FaGraduationCap className="w-5 h-5" />,
          });
        });
      });

      // Add quizzes if available
      if (Index?.quizzes) {
        Object.entries(Index.quizzes).forEach(([key, quiz]) => {
          allResults.push({
            id: `quiz-${key}`,
            title: quiz.title,
            description: quiz.description,
            url: `/quizzes/${key.toLowerCase()}`,
            type: "quiz",
            icon: <FaCode className="w-5 h-5" />,
          });
        });
      }

      // Add main course entries if available
      if (Index?.languages) {
        Object.entries(Index.languages).forEach(([key, language]) => {
          allResults.push({
            id: `course-${key}`,
            title: `${key} Course`,
            description: language.description,
            url: `/courses/${key.toLowerCase()}`,
            type: "course",
            icon: <FaGraduationCap className="w-5 h-5" />,
          });
        });
      }

      // Shuffle array and return first 3 items
      return allResults
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    };

    const searchContent = (searchQuery: string) => {
      if (!searchQuery.trim()) {
        return getDefaultResults();
      }

      const normalizedQuery = searchQuery.toLowerCase().trim();
      const results: SearchResult[] = [];

      // Always search through JavaScript course modules first
      JavaScriptCourseModules.forEach((category) => {
        category.modules.forEach((module) => {
          if (
            module.title.toLowerCase().includes(normalizedQuery) ||
            module.description.toLowerCase().includes(normalizedQuery)
          ) {
            results.push({
              id: `javascript-${module.href.split("/").pop()}`,
              title: module.title,
              description: module.description,
              url: module.href,
              type: "course",
              icon: <FaGraduationCap className="w-5 h-5" />,
            });
          }
        });

        // Search in category names
        if (category.category.toLowerCase().includes(normalizedQuery)) {
          results.push({
            id: `javascript-category-${category.id}`,
            title: category.category,
            description: `${category.category} section of JavaScript course`,
            url: `/courses/javascript#${category.id}`,
            type: "course",
            icon: <FaGraduationCap className="w-5 h-5" />,
          });
        }
      });

      // Then search through languages/courses
      if (Index?.languages) {
        Object.entries(Index.languages).forEach(([key, language]) => {
          if (
            key.toLowerCase().includes(normalizedQuery) ||
            language.description.toLowerCase().includes(normalizedQuery)
          ) {
            results.push({
              id: key,
              title: `${key} Course`,
              description: language.description,
              url: `/courses/${key.toLowerCase()}`,
              type: "course",
              icon: <FaGraduationCap className="w-5 h-5" />,
            });
          }
        });
      }

      // Search through quizzes if they exist
      if (Index?.quizzes) {
        Object.entries(Index.quizzes).forEach(([key, quiz]) => {
          if (
            quiz.title.toLowerCase().includes(normalizedQuery) ||
            quiz.description.toLowerCase().includes(normalizedQuery)
          ) {
            results.push({
              id: `quiz-${key}`,
              title: quiz.title,
              description: quiz.description,
              url: `/quizzes/${key.toLowerCase()}`,
              type: "quiz",
              icon: <FaCode className="w-5 h-5" />,
            });
          }
        });
      }

      return results;
    };

    const handleSearch = (searchQuery: string) => {
      setQuery(searchQuery);
      if (searchQuery.length < 2) {
        setResults(getDefaultResults());
        return;
      }

      setIsLoading(true);
      // Simulate network delay
      setTimeout(() => {
        setResults(searchContent(searchQuery));
        setIsLoading(false);
      }, 300);
    };

    const getTypeColor = (type: SearchResult["type"]) => {
      switch (type) {
        case "course":
          return "text-blue-600 dark:text-blue-400";
        case "quiz":
          return "text-green-600 dark:text-green-400";
        case "resource":
          return "text-purple-600 dark:text-purple-400";
        default:
          return "text-gray-600 dark:text-gray-400";
      }
    };

    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </motion.div>

        <div className="fixed inset-0 z-50">
          <div className="container mx-auto px-4 pt-20 sm:pt-28">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl mx-auto overflow-hidden border border-white/20 dark:border-gray-800/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-gray-200/50 dark:border-gray-800/50 flex items-center gap-4 bg-white/50 dark:bg-gray-900/50">
                <div className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400">
                  <FaSearch className="w-5 h-5" />
                </div>
                <input
                  ref={ref}
                  type="text"
                  placeholder="Search courses, quizzes, and resources..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 dark:text-gray-200 placeholder-gray-400 text-lg font-medium"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button
                  onClick={onClose}
                  className="p-2.5 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-xl transition-colors duration-200"
                  aria-label="Close search"
                >
                  <FaTimes className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="p-6 max-h-[65vh] overflow-y-auto">
                {isLoading ? (
                  <div className="flex justify-center py-12">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 rounded-full border-[3px] border-indigo-600/20 dark:border-indigo-400/20"></div>
                      <div className="absolute inset-0 rounded-full border-t-[3px] border-indigo-600 dark:border-indigo-400 animate-spin"></div>
                    </div>
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        to={result.url}
                        onClick={onClose}
                        className="group block p-5 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-200 border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 ${getTypeColor(result.type)} group-hover:scale-110 transition-transform duration-200`}>
                            {result.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                                {result.title}
                              </h3>
                              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 capitalize shrink-0">
                                {result.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : query.length > 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-gray-500 dark:text-gray-400">
                    <div className="p-4 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 mb-6">
                      <FaSearch className="w-8 h-8 opacity-60" />
                    </div>
                    <p className="text-lg font-medium">No results found for "{query}"</p>
                    <p className="text-sm mt-2 text-gray-400 dark:text-gray-500">Try searching with different keywords</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent inline-block mb-2">
                        Suggested content
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Popular courses and quizzes you might like
                      </p>
                    </div>
                    <div className="space-y-4">
                      {results.map((result) => (
                        <Link
                          key={result.id}
                          to={result.url}
                          onClick={onClose}
                          className="group block p-5 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-200 border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 ${getTypeColor(result.type)} group-hover:scale-110 transition-transform duration-200`}>
                              {result.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                                  {result.title}
                                </h3>
                                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 capitalize shrink-0">
                                  {result.type}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {result.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
);

SearchModal.displayName = "SearchModal";

export default SearchModal;
