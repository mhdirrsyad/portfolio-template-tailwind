/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    // make container to center
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#647D87',
        secondary: '#93AFB7',
        hover: '#93AFB7',
        dark: '#020617',
        'light-dark': '#475569',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

