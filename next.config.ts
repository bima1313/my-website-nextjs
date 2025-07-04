import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
      protocol:'https',
      hostname: `${process.env.SUPABASE_HOSTNAME}`,
      pathname: '/**'
    },
    ],
  },
};

export default nextConfig;
