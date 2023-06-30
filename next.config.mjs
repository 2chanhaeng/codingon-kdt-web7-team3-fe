import config from "./config/index.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  sassOptions: {
    additionalData: `
      @import "@/styles/variables.module.scss";
      @import "@/styles/globals.module.scss";
    `,
  },
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${config.api}/:path*`,
      },
    ];
  },
};

export default nextConfig;
