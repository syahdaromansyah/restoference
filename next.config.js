/** @type {import('next').NextConfig} */
const nextPWA = require('next-pwa');
const nextConfig = nextPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  images: {
    domains: ['restaurant-api.dicoding.dev'],
  },
});

module.exports = nextConfig;
