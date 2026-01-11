import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const assetPrefix = isProd ? '/vito' : '';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  basePath: assetPrefix,
  assetPrefix: assetPrefix
};

export default nextConfig;
