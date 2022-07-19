/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#282C34',
        leftnav: '#0E1017',
        primary: '#7000DF',
        secondary: '#C996CC',
        react: '#61DAFB',
        vue: '#42B983',
        js: '#FFE400',
        ts: '#2D79C7',
        web: '#FFFEEE',
        etc: '#fff',
        pagination: '#7359F6',
      },
    },
  },
  plugins: [],
}
