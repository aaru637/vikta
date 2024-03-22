/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
    },
    fontFamily: {
      signika: ['Signika', 'sans-serif'],
      roboto: ['Roboto Slab', 'serif'],
      raleway: ['Raleway', 'serif'],
      patua: ['Patua One', 'serif'],
      oswald: ['Oswald', 'serif'],
      exo_2: ['Exo 2', 'serif'],
      dosis: ['Dosis', 'serif'],
    },
  },
  plugins: [],
}

