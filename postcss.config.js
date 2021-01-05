const autoprefixer = require('autoprefixer')
const tailwind = require('tailwindcss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [autoprefixer, tailwind, cssnano],
}
