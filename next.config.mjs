/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served from GitHub Pages.
  output: "export",
  // GitHub Pages serves project sites under /<repo-name>; the deploy workflow sets BASE_PATH.
  basePath: process.env.BASE_PATH || "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
