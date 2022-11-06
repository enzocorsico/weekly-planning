/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.PATH_API + "/:path*",
      }
    ]
  }
}

module.exports = nextConfig