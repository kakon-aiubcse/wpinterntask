/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sfp: ['"SF Pro Display"', "sans-serif"],
      },
      screens: {
        xs: { max: "375px" },
      },
    },
  },
  plugins: [],
};
