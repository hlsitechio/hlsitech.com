/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      scale: {
        '95': '0.95',
      },
      blur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};