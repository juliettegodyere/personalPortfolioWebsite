/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Prevent Turbopack from accidentally picking a parent folder as the workspace root
    // when multiple lockfiles exist in the broader directory tree.
    root: __dirname
  }
};

module.exports = nextConfig;

