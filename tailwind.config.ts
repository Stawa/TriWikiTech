import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "9 / 16",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(var(--tw-rotate))',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(var(--tw-rotate))',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shine: {
          '0%': { opacity: '0.4' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.4' },
        },
        'status-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '0.8',
          },
        },
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'shine': 'shine 2s ease-in-out infinite',
        'gradient': 'gradient 2s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 3s',
        'status-pulse': 'status-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      dropShadow: {
        'glow-yellow': '0 0 8px rgba(250, 204, 21, 0.5)',
        'glow-blue': '0 0 8px rgba(96, 165, 250, 0.5)',
        'glow-purple': '0 0 8px rgba(192, 132, 252, 0.5)',
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
} satisfies Config;
