/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["a.storyblok.com"],
  },
};

module.exports = nextTranslate(nextConfig);
