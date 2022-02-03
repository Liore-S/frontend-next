module.exports = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'sans': ['Montserrat','sans-serif'],
    },
    extend: {
      spacing:{
        '0.7':'0.175rem',
      },
      animation:{
        'scrol':'scrolling 2s linear infinite',
      },
      keyframes:{
        scrolling:{
          '0%':{transform:'translateX(20rem)'},
          '100%':{transform:'translateX(-120rem)'},
        },
      }
    },
  },
  plugins: [],
}
