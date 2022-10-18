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
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
