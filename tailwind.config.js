const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Hero ui
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["font-inter", "sans-serif"],
        work: ["font-work-sans", "sans-serif"],
        poppins: ["font-poppins", "sans-serif"],
      },
      // screens: {
      //   'xs': '375px',
      // },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
        screens: {
          // 'xs': '375px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

