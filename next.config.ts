import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  basePath: isProd ? '/vito' : '',
  assetPrefix: isProd ? '/vito' : '',
  env: {
    ASSET_PREFIX: isProd ? '/vito' : '',
  },
};

export default nextConfig;
