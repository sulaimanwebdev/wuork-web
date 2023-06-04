/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2lg:': '1083px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}