module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      fontFamily: {
        'sans': 'Vazirmatn'
      },
      boxShadow: {
        'box': '0 4px 250px 0 #36385326',
      },
      colors: {
        'secondary': {
          700: '#555775',
          800: '#3F4264',
          900: '#2A2D53'
        },
        'primary': '#4A6DFF'
      }
    },
  },
  plugins: [],
}
