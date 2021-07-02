module.exports = {
  redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  },

  productionBrowserSourceMaps: false,
  future: {
    webpack5: true
  }
}
