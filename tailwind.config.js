const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,jsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui()]
}
