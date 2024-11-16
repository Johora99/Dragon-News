/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        DimGray:'rgb(112, 111, 111)',
        CeriseRed:'rgb(215, 32, 80)',
        Gainsboro:'rgb(243, 243, 243)',
        DarkCharcoal:'rgb(64, 63, 63)',
        MiddleGray:'rgb(159, 159, 159)',
        Cultured:'rgb(231, 231, 231)',
        LightBlue:'rgb(24, 119, 242)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

