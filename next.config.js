/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coinlayer.com',
        port: '',
        pathname: '/icons/**'
      }
    ]
  }
}

module.exports = nextConfig
