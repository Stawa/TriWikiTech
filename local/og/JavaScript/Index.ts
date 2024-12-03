export const OpenGraph = () => {
  return `
  <section class="relative w-full py-24 sm:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 opacity-90"></div>

    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] bg-[length:20px_20px] animate-pulse"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="w-full text-center">
        <div class="inline-flex items-center space-x-3 px-6 py-2.5 mb-10 rounded-full bg-white/10 text-blue-50 backdrop-blur-md border border-white/20 shadow-lg">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
          <span class="text-base font-semibold tracking-wide">
            10-Week Course
          </span>
        </div>

        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 leading-tight">
          <span class="block text-white mb-3 text-shadow-lg">
            The Art of
          </span>
          <span class="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-2xl">
            JavaScript
          </span>
        </h1>

        <p class="text-xl sm:text-2xl text-blue-50 max-w-3xl mx-auto mb-8 leading-relaxed font-light tracking-wide">
          Embark on a transformative journey from foundational concepts to
          advanced mastery. Build real-world applications while learning
          modern best practices.
        </p>
      </div>
    </div>
  </section>
`;
};
