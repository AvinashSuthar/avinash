/** @type {import('tailwindcss').Config} */

const config = require("@repo/tailwind-config/tailwind.config.cjs");

module.exports = {
  ...config,
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
};
