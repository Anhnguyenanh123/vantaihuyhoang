import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taxitailongthanh.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.vnecdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vnexpress.net",
      },
    ],
  },
};

export default nextConfig;
