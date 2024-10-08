// @ts-check
import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },

  integrations: [
    sentry(),
    spotlightjs(),
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
