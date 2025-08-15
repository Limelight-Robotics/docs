// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/limelight-robotics.github.io/docs/',
  vite: {
    plugins: [tailwindcss()]
  }
});