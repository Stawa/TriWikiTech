const LoadingPlaceholder = () => (
  <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="w-full lg:w-1/3">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 md:p-8 animate-pulse">
            <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-full w-full mb-4"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-full w-full"></div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 md:p-8 animate-pulse"
              >
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadingPlaceholder;
