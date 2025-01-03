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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.5' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'glow-delayed': 'glow 4s ease-in-out 1s infinite',
        'glow-slow': 'glow 4s ease-in-out 2s infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
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
