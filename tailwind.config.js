const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./dashboard/static/assets/js/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* main colors */
        "main-color": "#c2dae4",
        "secondary-color": "#3D7186",
        "teritary-color": "#2C5464",
        "secondary-text": "#e7e3d4",
        "primary-text": "#cfefe7",
        "secondary-color-alfa-1": " #ffffff80",

        /* Shadows */
        "line-color": "#3d718600",

        /* buttons */
        "btn-primary": "#22577a",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
