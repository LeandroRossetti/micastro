import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  base: '/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],
});