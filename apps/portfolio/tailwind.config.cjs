/** @type {import('tailwindcss').Config} */

const config = require("@repo/tailwind-config/tailwindConfig");

module.exports = {
  ...config,
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
};
