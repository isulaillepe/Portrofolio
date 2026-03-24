import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portrofolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
