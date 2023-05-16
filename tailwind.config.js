/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#bcd8ed',
        black: '#000000',
        white: '#ffffff',
        lightgrey: '#e4e4e4',
        darkgrey: '#232325',
      },
    },
  },
  plugins: [],
};
