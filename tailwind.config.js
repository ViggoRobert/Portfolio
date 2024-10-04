/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'text': '#f9fbf9',
      'background': '#121713',
      'primary': '#FFE0D6',
      'secondary': '#0f1410',
      'accent': '#97aab0',
     },     
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka'],
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

