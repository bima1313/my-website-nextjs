import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(`${process.env.NEXT_PUBLIC_PROFILE_URL}`),
      new URL(`${process.env.NEXT_PUBLIC_PORTFOLIO_1}`),
      new URL(`${process.env.NEXT_PUBLIC_PORTFOLIO_2}`),
      new URL(`${process.env.NEXT_PUBLIC_PORTFOLIO_3}`),
      new URL(`${process.env.NEXT_PUBLIC_PORTFOLIO_4}`),
      new URL(`${process.env.NEXT_PUBLIC_PORTFOLIO_5}`),
    ],
  },
};

export default nextConfig;
