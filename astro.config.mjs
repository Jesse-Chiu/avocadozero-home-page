import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://avocadozero.github.io',
  // 本地开发用 '/', GitHub Pages部署用 '/avocadozero-home-page'
  base: process.env.DEPLOY_TARGET === 'github' ? '/avocadozero-home-page' : '/',
  integrations: [tailwind()],
  output: 'static',
  vite: {
    css: {
      devSourcemap: true,
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@content': path.resolve(__dirname, 'src/content'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  },
});
