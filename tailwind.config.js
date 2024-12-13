/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2C3639',
        secondary: '#3F4E4F',
        accent: '#A27B5C',
        neutral: '#DCD7C9',
      }
    },
  },
  plugins: [],
}

