import type { NextConfig } from "next";

const nextConfig : NextConfig = {
  reactStrictMode: true,
  basePath: '/portfolio',
  output: 'export', // Export as static HTML
};

export default nextConfig;
