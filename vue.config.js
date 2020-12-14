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
        args[0].title = process.env.VUE_APP_WEB_TITLE
        return args
      })
  },

  css: {
    requireModuleExtension: true
  },

  pwa: {
    name: process.env.VUE_APP_NAME,
    themeColor: '#282B30',
    msTileColor: '#282B30',
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