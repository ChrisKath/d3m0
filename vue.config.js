module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Got\'t Patiphat — Web Profile'
        return args
      })
  },

  css: {
    modules: true
  },

  pwa: {
    name: 'unset',
    themeColor: '#010122',
    msTileColor: '#010122',
    manifestCrossorigin: 'use-credentials'
  }
}