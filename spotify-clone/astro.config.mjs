import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/edge";  // Cambiamos a edge

export default defineConfig({
  output: 'server',
  adapter: netlify({
    imagService: 'passthrough'
  }),
  integrations: [tailwind(), vue(), react()],
});