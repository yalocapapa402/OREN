/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        'oren-black': '#0a0a0a',
        'oren-red': '#ff0000', // El rojo de la cereza
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'], // Para títulos gigantes
        'inter': ['Inter', 'sans-serif'], // Para texto normal
      }
    },
  },
  plugins: [],
}