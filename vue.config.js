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
    name: 'Web Profile',
    themeColor: '#000425',
    msTileColor: '#000425',
    manifestCrossorigin: 'use-credentials',
    iconPaths: {
      favicon32: 'static/img/icons/favicon-32x32.png',
      favicon16: 'static/img/icons/favicon-16x16.png',
      appleTouchIcon: 'static/img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'static/img/icons/safari-pinned-tab.svg',
      msTileImage: 'static/img/icons/msapplication-icon-144x144.png'
    }
  }
}