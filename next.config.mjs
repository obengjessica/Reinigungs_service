/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev }) => {
    // Prevent intermittent EPERM cache rename errors on Windows production builds.
    if (!dev && process.platform === "win32") {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
