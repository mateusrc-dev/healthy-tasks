/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
    images: {
      domains: [
        "avatars.githubusercontent.com", // precisamos desse domínio para as imagens funcionarem no next
      ]
    },
  }
  
  module.exports = nextConfig
  