import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
build: {
    outDir: '../dist', // Build the output to the dist folder outside the client directory
  },
  site: "https://alpha-og.github.io/",
  base: "portfolio",
});

