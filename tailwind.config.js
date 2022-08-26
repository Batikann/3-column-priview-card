/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      colors:{
        'brightOrange':"hsl(31, 77%, 52%)",
        'darkCyan':"hsl(184, 100%, 22%)",
        'veryDarkCyan':"hsl(179, 100%, 13%)"
      }
    },
  },
  plugins: [],
}
