export const OpenGraph = () => {
  return `<section class="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_2px,transparent_2px)] bg-[length:30px_30px] animate-pulse"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center relative z-10">
        <div class="inline-flex items-center mb-6 md:mb-8 px-4 py-2 md:px-6 md:py-3 rounded-full bg-blue-50/80 dark:bg-blue-900/50 shadow-lg backdrop-blur-sm">
          <svg class="text-blue-500 dark:text-blue-400 mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
          </svg>
          <span class="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-300">
            JavaScript Environment Setup
          </span>
        </div>

        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8 leading-tight">
          Setting Up Your
          <span class="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
            JavaScript Environment
          </span>
        </h1>

        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 mb-6">
          A comprehensive guide to setting up a professional JavaScript
          development environment. Follow these steps to create an optimal
          workspace for learning and building JavaScript applications.
        </p>

        <div class="flex justify-center">
          <div class="flex items-center gap-4 px-6 py-3 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-sm backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div class="flex items-center gap-3">
              <img
                alt="Author avatar"
                width="460"
                height="460"
                decoding="async"
                class="rounded-full h-8 w-8 ring-2 ring-blue-500/20 dark:ring-blue-400/20"
                src="https://avatars.githubusercontent.com/u/69102292?v=4"
              />
              <a
                class="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Stawa"
              >
                Stawa
              </a>
            </div>
            <div class="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            <time
              datetime="2024-11-25"
              title="Written on November 25, 2024"
              class="text-gray-600 dark:text-gray-400 text-sm"
            >
              November 25, 2024
            </time>
          </div>
        </div>
      </div>
    </div>
  </section>`;
};
