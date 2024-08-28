/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", " sans-serif"],
        Noto:["Noto Sans"]
        
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
        slideInRight: 'slideInRight 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

