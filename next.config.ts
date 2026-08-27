import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files. Keep the normal Vinext/Worker
  // output for local development and Sites, and export HTML only in its CI job.
  ...(isGitHubPages
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
