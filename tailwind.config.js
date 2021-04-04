const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.gray,
      }
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      translate: ['motion-safe'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
