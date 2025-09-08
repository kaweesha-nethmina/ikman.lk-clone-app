/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#149777',
        secondary: '#fdc702',
        accent: '#6b3506',
        background: '#f5f5f5',
        card: '#f8fffe',
        border: '#e8f5f3',
      }
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}