/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pixelify Sans', 'sans-serif'],
      },
      colors: {
        primary: "#070F2B", 
        secondary: "#1B1A55",
        accent: "#535C91",
        neutral: "#9290C3",
        highlight: "#FACC15",
      },
    },
  },
  plugins: [],
}

