module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      borderRadius: {
        md: '4px'
      },
      backgroundImage: {
        'header-image': "url('./src/assets/images/header-image.jpg')",
      },
      fontFamily: {
        header: ["Header Font", "cursive"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}