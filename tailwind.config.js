const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        dgreen: '#114232',
        grass: '#87A922',
        ijo: '#0E5E24',
        ylow: '#FCDC2A',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        righteous: ["Righteous", "sans-serif"]
      }
    },
  },
  plugins: [
    // Iconify plugin, requires writing list of icon sets to load
    addIconSelectors(['mdi', 'mdi-light']),
  ],
}

