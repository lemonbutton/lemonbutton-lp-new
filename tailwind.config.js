/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        lemon: "#D7DF00",
      },
      keyframes: {
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        scaleIn: "scaleIn 0.1s ease-out",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
