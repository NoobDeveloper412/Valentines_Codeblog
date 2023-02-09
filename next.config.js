/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  webpack: function(config, { isServer }) {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
          fs: false
      }
    }
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    
    return config
  },
  
}
