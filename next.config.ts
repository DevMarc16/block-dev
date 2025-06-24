import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'docs.ethers.org',
      'wagmi.sh',
      'flare.network',
      'xrpl.org',
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com'
    ],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
