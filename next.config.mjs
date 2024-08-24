/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
