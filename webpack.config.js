const path = require('path')

module.exports = {
  entry: './public/javascripts/draw.js', // pomenyat nahui
  watch: true,
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js'
  },
  mode: 'development'
}
