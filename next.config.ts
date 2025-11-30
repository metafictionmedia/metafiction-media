import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jeffreythemonster.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
