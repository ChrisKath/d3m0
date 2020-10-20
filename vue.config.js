const webpack = require('webpack')

module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',

  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ]
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Got\'t Patiphat — Web Profile'
        return args
      })
  },

  css: {
    requireModuleExtension: true
  },

  pwa: {
    name: 'unset',
    themeColor: '#010122',
    msTileColor: '#010122',
    manifestCrossorigin: 'use-credentials'
  }
}