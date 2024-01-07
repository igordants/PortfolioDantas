/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '128': '32px',
        '144': '36px',
    },
    inset:{
      '17':'68px'
    }
  },
  plugins: [],
  }
}