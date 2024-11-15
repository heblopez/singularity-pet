/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: '#ff6752',
        aluminium: '#A4AFB7',
        'dodger-blue': '#4487FF',
        'venice-blue': '#015F91'
      },
      boxShadow: {
        'input-box': '2px 3px 4px #00000029'
      }
    }
  },
  plugins: []
}
