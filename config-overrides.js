const path = require('path')
const {
  override,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  addLessLoader(),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@img': path.resolve(__dirname, './src/assets/images')
  })
)
