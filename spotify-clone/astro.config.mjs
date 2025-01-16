import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";  // Cambia esta línea

export default defineConfig({
  output: 'server',
  adapter: netlify({
    imagService: 'passthrough',
    dist: new URL('./dist/', import.meta.url)
  }),
  integrations: [tailwind(), vue(), react()],
});