// next.config.js

import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: "",
      }
    ]
  },
  // Other Next.js configuration options can be added here
};

module.exports = nextConfig;
