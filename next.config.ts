import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true,
};

export default nextConfig;
