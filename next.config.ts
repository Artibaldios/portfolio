import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export mode
  basePath: '/portfolio', // Replace with your repo name (critical for GitHub Pages)
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Set the output folder (default is 'out')
  distDir: 'out',
};

export default nextConfig;
