/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': '#30C17C',
        'lime' : '#7CE761',
        'red' : '#FF2D2D',
        'blue' : '#377DFF',
        'orange' : '#FFA800',
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        
      },
      fontSize: {
        '1xl': '18px',
      },
      
    },
  },
  plugins: [],
}

