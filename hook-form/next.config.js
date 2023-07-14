/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ecommerce7.s3.sa-east-1.amazonaws.com',
            port: '',
            pathname: '/**',
          },
        ],
      },

}

module.exports = nextConfig
