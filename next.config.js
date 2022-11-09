/** @type {import('next').NextConfig} */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin") 


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack:(config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    }
    else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }
    return config;
  }
}

module.exports = nextConfig
