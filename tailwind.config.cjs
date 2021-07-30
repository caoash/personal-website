const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'gowun-dodum': ['"Gowun Dodum"', 'sans-serif']
      }
    },
    colors: {
      ...colors,
      'color-1' : '#f1faee',
      'color-2' : '#8ecae6',
      'color-3' : '#a8dadc',
      'color-4' : '#457b9d',
      'color-5' : '#1d3557',
    },
    customUtilities: {
      scrollBehavior: { rename: "scroll" },
    },
    scrollBehavior: {
      immediately: "smooth",
      smoothly: "smooth",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-custom-native"),
  ],
  mode: 'jit', 
  purge: ["./src/**/*.svelte"],
}
