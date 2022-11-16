/** @type {import('next').NextConfig} */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }
    return config;
  },
  env: {
    BACKEND_API_URL: "http://localhost:3018/",
  },
};

module.exports = nextConfig;
