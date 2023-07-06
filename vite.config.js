import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [splitVendorChunkPlugin(), react()],
  base: "https://theodoretwombly.github.io/shri2023-task/",
  build: {
    outDir: "docs",
  },
});
