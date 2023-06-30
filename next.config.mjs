/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  sassOptions: {
    additionalData: `
      @import "@/styles/variables.module.scss";
      @import "@/styles/globals.module.scss";
    `,
  },
};

export default nextConfig;
