/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.spider-vo.net", "spidervo.s3.fr-par.scw.cloud"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
