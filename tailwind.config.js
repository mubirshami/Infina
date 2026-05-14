/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#092A5E", 
      },
      fontFamily: {
        customFont: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        customFontSize: '36px', 
      },
    },
  },
  plugins: [],
};
