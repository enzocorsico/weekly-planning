/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  webpack: (config, context) => {
    if (config.mode === "development") {
      config.watchOptions = {
        poll: 1000,
        ignored: "/node_modules/",
        aggregateTimeout: 200
      }
    }
    return config
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