/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding : '32px',
    },
    extend: {
      fontFamily:{
        arvo: ['Arvo'],
        poppins:['Poppins']
      }
    },
  },
  plugins: [],
}

