export default function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="grid-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#000000"
              stopOpacity="0.9"
              className="dark:stop-color-[#ffffff] dark:stop-opacity-[0.9]"
            >
              <animate
                attributeName="stop-color"
                values="#000000; #333333; #000000"
                dur="15s"
                repeatCount="indefinite"
              />
            </stop>
            <stop
              offset="100%"
              stopColor="#CCCCCC"
              stopOpacity="0.3"
              className="dark:stop-color-[#ffffff] dark:stop-opacity-[0.5]"
            >
              <animate
                attributeName="stop-color"
                values="#CCCCCC; #EEEEEE; #CCCCCC"
                dur="7s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="url(#grid-gradient)"
            strokeWidth="1"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="60 60"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
