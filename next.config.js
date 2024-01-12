/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", port: "", hostname: "cdn2.thedogapi.com", pathname: "/images/**" }],
  },
};

module.exports = nextConfig;
// "https://cdn2.thedogapi.com/images/Syd4xxqEm_1280.jpg"
