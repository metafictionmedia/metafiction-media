/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: '**' },
    ],
  },
  async redirects() {
    return [
      // Jeffrey collapsed into In Development (old /jeffree URL kept)
      { source: '/jeffree', destination: '/development', permanent: false },
      { source: '/jeffrey', destination: '/development', permanent: false },
      { source: '/shop', destination: '/store', permanent: false },
      // Old live-site routes not in the sketchbook redesign
      { source: '/behind-the-scenes', destination: '/development', permanent: false },
      { source: '/contact', destination: '/story', permanent: false },
    ]
  },
}

module.exports = nextConfig
