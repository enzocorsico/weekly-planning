/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // webpack: (config, context) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300
  //   }
  //   return config
  // },

  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: process.env.PATH_API + "/:slug*",
      }
    ]
  }
}

module.exports = nextConfig