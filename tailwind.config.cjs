/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    backgroundSize: {
      "gradient-dashed": "20px 2px, 100% 2px",
    },
    extend: {
      boxShadow: {
        "pacamara-shadow": "0px 25px 50px -12px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        "pacamara-inter": ['"Inter"', "sans-serif"],
        "pacamara-space": ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        "pacamara-primary": "#003049",
        "pacamara-secondary": "#84CC16",
        "pacamara-accent": "#84CC16",
        "pacamara-dark": "#1E2229",
        "pacamara-white": "#f7fee7",
      },
      aspectRatio: {
        "9/10": "9 / 16",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
