/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
