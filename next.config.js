/**
 * Minimal Next.js configuration for the prototype
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
