/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "api.lorem.space",
      "placeimg.com",
      "cdn.shopify.com",
      "cdn.lorem.space",
      "cdn.pixabay.com",
      "camarasal.com",
      "catalogo.gac-sa.cl",
    ],
  },
};
const withPWA = require("next-pwa")({
  dest: "public",
  include: ["production"],
  register: true,
});

module.exports = withPWA(nextConfig);
