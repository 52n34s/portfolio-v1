import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 rejects local image query strings unless allowed here.
    // `?v=2` busts the optimizer cache for the replaced Find My Stack logo.
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/brand-2026/app-logo-findmystack-2026.png", search: "?v=2" },
    ],
  },
};

export default nextConfig;
