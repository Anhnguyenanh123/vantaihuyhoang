import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taxitailongthanh.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**.vnecdn.net",
      },
      {
        protocol: "https",
        hostname: "vnexpress.net",
      },
    ],
  },
};

export default nextConfig;
