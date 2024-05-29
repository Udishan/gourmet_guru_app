/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yourFont: ['font2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}