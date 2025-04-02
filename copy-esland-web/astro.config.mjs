// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import auth from 'auth-astro';
import vercelAdapter from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false // es -> / y en -> /en
      // prefixDefaultLocale: true // es -> /es y en -> /en
    }
  },

  integrations: [react(), auth()],
  output: 'server',
  adapter: vercelAdapter()
});