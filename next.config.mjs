/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages. Outputs the site to `out/`.
  output: "export",
  // GitHub Pages serves `foo/index.html` for `/foo/` — trailing slash keeps links happy.
  trailingSlash: true,
  // next/image's default loader needs a server; static export requires this.
  images: { unoptimized: true },
};

export default nextConfig;
