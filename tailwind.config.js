/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dgreen: "#114232",
        grass: "#87A922",
        ylow: "#FCDC2A",
      },
      backgroundColor: {
        dgreen: "#114232",
        grass: "#87A922",
        ylow: "#FCDC2A",
      },
      fontSize: {
        "10xl": "11rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        righteous: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
}

