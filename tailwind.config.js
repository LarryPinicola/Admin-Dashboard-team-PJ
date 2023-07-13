/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],   
  theme: {
    fontFamily : {
      'poppins' : ['Poppins', 'sans-serif']
  },
    extend: {},
    
  },
  plugins: [
    require('flowbite/plugin')
]

}

