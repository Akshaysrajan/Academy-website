/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#84c5ff',
          400: '#43a9ff',
          500: '#1a91ff',
          600: '#0077e6',
          700: '#0062cc',
          800: '#0052a3',
          900: '#003d7a',
        },
        orange: {
          50: '#fff8f0',
          100: '#ffefd8',
          200: '#ffd8a8',
          300: '#ffba70',
          400: '#ff983d',
          500: '#ff7a1a',
          600: '#f05e00',
          700: '#cc4a00',
          800: '#a63c00',
          900: '#803000',
        },
      },
    },
  },
  plugins: [],
};