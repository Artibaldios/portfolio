import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig : NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages compatibility
  },
  assetPrefix: isProd ? '/portfolio' : '',
  basePath: isProd ? '/portfolio' : '',
  output: 'export', // Export as static HTML
};

export default nextConfig;
