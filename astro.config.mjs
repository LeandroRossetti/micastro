import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/micastro/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});