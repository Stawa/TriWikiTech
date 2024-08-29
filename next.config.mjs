/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/socket.io/:path*",
        destination: "/api/socketio",
      },
    ];
  },
};

export default nextConfig;
