// next.config.ts

const nextConfig = {
  images: {
    domains: ["img.icons8.com", "cdn.jsdelivr.net"], // Add any external image domains here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
