/** @type {import('tailwindcss').Config} */
module.exports = {  
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
  ],  
  content: [
    "./index.php",
    "./index.html",
  ],
  theme: {
    fontFamily : {
      sans: ['neue-haas-unica', 'sans-serif'],
      display: ['itc-avant-garde-gothic-pro', 'sans-serif']
    },
    extend: {
      fontSize: {
        sm: ['14px', '21px'],
        base: ['16px', '26px'],
        lg: ['18px', '20px'],
        xl: ['24px', '26px'],
        '2xl': ['30px', '32px'],
        '3xl': ['38px', '40px']
      },
      letterSpacing: {
        slight: '-0.01em'
      },
      colors: {
        'black': '#2C3131',
        'gray-80': '#565A5A',
        'gray-60': '#818383',
        'gray-40': '#ABADAD',
        'gray-20': '#D5D6D6',
        'gray-5': '#F4F4F4',
        'gray-2': '#FAFAFA',
        'green': '#348383'
      }
    },
  },
  plugins: [],
}

