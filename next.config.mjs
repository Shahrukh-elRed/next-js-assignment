/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets-dev.elred.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
