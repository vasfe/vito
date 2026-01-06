import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/vito",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactCompiler: true,
};

export default nextConfig;
