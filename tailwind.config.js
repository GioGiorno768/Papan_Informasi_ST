/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        dgreen: '#114232',
        grass: '#87A922',
        ylow: '#FCDC2A'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        righteous: ["Righteous", "sans-serif"]
      }
    },
  },
  plugins: [],
}

