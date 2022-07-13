/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  productionBrowserSourceMaps: true,
  NEXT_PUBLIC_GOOGLE_TAGMANAGER: process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER,
  NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
}

module.exports = nextConfig
