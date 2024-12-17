import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'], // Add the required domain here
  },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['res.cloudinary.com'], // Add the required domain here
//   },
// };

// module.exports = nextConfig;
