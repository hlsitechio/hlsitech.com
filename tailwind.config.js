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
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        circuitReveal: {
          "0%": { clipPath: "inset(100% 100% 100% 100%)" },
          "25%": { clipPath: "inset(0% 100% 100% 0%)" },
          "50%": { clipPath: "inset(0% 0% 100% 0%)" },
          "75%": { clipPath: "inset(0% 0% 0% 0%)" },
          "100%": { clipPath: "inset(0% 0% 0% 0%)" },
        },
        circuitFadeIn: {
          "0%": { opacity: 0 },
          "75%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "33%": { opacity: 0.9 },
          "66%": { opacity: 0.95 },
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
        glitch: "glitch 0.5s ease-in-out infinite",
        circuitReveal: "circuitReveal 1.5s ease-in-out forwards",
        circuitFadeIn: "circuitFadeIn 2s ease-in-out forwards",
        scanline: "scanline 2s linear infinite",
        flicker: "flicker 0.3s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 15px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 25px rgba(59, 130, 246, 0.6)",
      },
    },
  },
  plugins: [],
};
