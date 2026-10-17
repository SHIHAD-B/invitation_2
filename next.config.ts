import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Phones open the dev server by this computer's network address.
  // Without this, Next blocks the JavaScript and the Open button does nothing.
  allowedDevOrigins: ["192.168.1.243"],
  // Serve already-compressed WebP files as-is. Render's CPU is too small
  // to resize multi-megabyte PNGs on the first request.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
