import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://www.course-api.com/images/**")],
  },
};

export default nextConfig;
