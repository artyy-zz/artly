import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    localPatterns: [{ pathname: "/artwork/**" }, { pathname: "/arti/**" }],
  },
};

export default nextConfig;
