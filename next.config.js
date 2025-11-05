/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  turbopack: {
    // Explicitly set the project root to avoid workspace root inference warnings
    root: __dirname,
  },
};

module.exports = nextConfig;
