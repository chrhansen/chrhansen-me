import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const normalizedBasePath = rawBasePath
  ? rawBasePath.startsWith("/") ? rawBasePath : `/${rawBasePath}`
  : "";

/** @type {import("next").NextConfig} */
const createNextConfig = (phase) => ({
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  // Keep dev cache isolated from build output to avoid chunk-missing reload errors.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  basePath: normalizedBasePath || undefined,
  assetPrefix: normalizedBasePath || undefined,
  images: {
    unoptimized: true,
  },
});

export default createNextConfig;
