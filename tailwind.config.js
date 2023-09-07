/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#222222',
        },

        primary: {
          '50': '#edfcf3',
          '100': '#d4f7e1',
          '200': '#adedc8',
          '300': '#78dda8',
          '400': '#3bc481',
          '500': '#1eab6a',
          '600': '#118a55',
          '700': '#0e6e47',
          '800': '#0d583a',
          '900': '#0c4831',
          '950': '#05291c',
        },
      }
    },
  },
  plugins: [],
}