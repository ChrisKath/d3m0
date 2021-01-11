const path = require('path')
const {
  override,
  disableChunk,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')

module.exports = override(
  disableChunk(),
  addLessLoader(),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@img': path.resolve(__dirname, './src/assets/images')
  })
)
