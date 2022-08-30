/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  i18n: {
    locales: ['en', 'jp', 'kr'],
    defaultLocale: 'en'
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
