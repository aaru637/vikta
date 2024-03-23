/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: "680px",
      md: "1040px",
      lg: "1100px",
    },
    fontFamily: {
      signika: ["Signika", "sans-serif"],
      roboto: ["Roboto Slab", "serif"],
      raleway: ["Raleway", "serif"],
      patua: ["Patua One", "serif"],
      oswald: ["Oswald", "serif"],
      exo_2: ["Exo 2", "serif"],
      dosis: ["Dosis", "serif"],
      poppins: ["Poppins", "serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
