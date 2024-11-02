/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rollingLogo: 'rollingLogo 2s ease-in-out forwards',
      },
      keyframes: {
        rollingLogo: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '50%': { transform: 'translateX(50%) rotate(360deg)' },
          '100%': { transform: 'translateX(0) rotate(720deg)' },
        },
      },
    },
  },
  plugins: [daisyui],
};