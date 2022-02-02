module.exports = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif','system-ui','Monsterrat','sans-serif'],
    },
    extend: {
      spacing:{
        '0.7':'0.175rem'
      }
    },
  },
  plugins: [],
}
