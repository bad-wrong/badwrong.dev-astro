import react from "@astrojs/react";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://badwrong.dev",

  integrations: [
    vue(),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
