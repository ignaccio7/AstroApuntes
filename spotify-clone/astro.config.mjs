import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";  // Cambia esta línea

export default defineConfig({
  output: 'server',
  adapter: netlify({
    imagService: 'passthrough',
    functionName: 'astro-ssr'    
  }),
  integrations: [tailwind(), vue(), react()],
});