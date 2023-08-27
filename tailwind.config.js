/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tertiary': '#B38E5B',
        'secondary': '#FF9122',
      }
    },
  },
  plugins: [],
}

