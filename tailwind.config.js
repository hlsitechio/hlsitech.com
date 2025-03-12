/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionDuration: {
        400: "400ms",
      },
      scale: {
        95: "0.95",
        102: "1.02",
        105: "1.05",
      },
      blur: {
        xs: "2px",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: 0.7 },
          "100%": { transform: "scale(2)", opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        spin: "spin 1s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        ripple: "ripple 0.7s ease-out",
        fadeIn: "fadeIn 0.3s ease-in",
      },
      boxShadow: {
        glow: "0 0 15px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 25px rgba(59, 130, 246, 0.6)",
      },
    },
  },
  plugins: [],
};
