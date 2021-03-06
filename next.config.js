/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["lh3.googleusercontent.com", "images.ctfassets.net"],
  },
};

module.exports = nextConfig;
