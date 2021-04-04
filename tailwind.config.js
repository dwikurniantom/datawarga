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
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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
