const BackgroundSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#F472B6" />
      </linearGradient>
      <linearGradient id="gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="50%" stopColor="#3730A3" />
        <stop offset="100%" stopColor="#6B21A8" />
      </linearGradient>
      <pattern
        id="pattern-circles"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="20"
          cy="20"
          r="1"
          fill="currentColor"
          className="text-white dark:text-gray-700"
          fillOpacity="0.3"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#gradient-light)"
      className="block dark:hidden"
    />
    <rect
      width="100%"
      height="100%"
      fill="url(#gradient-dark)"
      className="hidden dark:block"
    />
    <rect
      width="100%"
      height="100%"
      fill="url(#pattern-circles)"
      fillOpacity="0.3"
    />
    <path
      d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      fill="currentColor"
      className="text-white dark:text-gray-900"
      fillOpacity="0.1"
    />
  </svg>
);

export default BackgroundSVG;
