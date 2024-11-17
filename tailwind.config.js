/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: '#FF6752',
        aluminium: '#A4AFB7',
        'dodger-blue': '#4487FF',
        'venice-blue': '#015F91',
        'white-smoke': '#F3F6FB',
        granite: '#808080',
        'smokey-gray': '#707070',
        'banana-yellow': '#FFE530'
      },
      boxShadow: {
        'input-box': '2px 3px 4px #00000029'
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px'
      },
      fontFamily: {
        gibson: 'Gibson SemiBold',
        museo: 'Museo Sans Rounded',
        comfortaa: 'Comfortaa'
      }
    }
  },
  plugins: []
}
