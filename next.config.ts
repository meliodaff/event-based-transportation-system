import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mkmujnxnfaapirbysgdl.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.toyota.com.ph",
      },
      {
        protocol: "https",
        hostname: "www.toyota.com.sg",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
    ],
  },
};

export default nextConfig;
