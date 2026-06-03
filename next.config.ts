import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Safe to leave images unoptimized if you are using external images, 
  // but you can remove it if you want Vercel's automatic image optimization!
  images: {
    unoptimized: true,
  },
};

export default nextConfig;