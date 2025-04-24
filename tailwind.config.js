/** @type {import('tailwindcss').Config} */

const primaryGradient = {
  'grad-1': 'hsl(249, 99%, 64%)',
  'grad-2': 'hsl(278, 94%, 30%)'
}

const violetColors = {
  "100": "hsl(270, 3%, 87%)",
  "200": "hsl(279, 6%, 55%)",
  "300": "hsl(279, 6%, 55%)"
}
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "error": "",
        primary: primaryGradient,
        'new-violet': violetColors,
        'dark-orchid': 'hsl(279.47deg 67.86% 10.98%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

