import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 部署目标映射：site URL + base path
// DOMAIN 环境变量用于备案完成后覆盖 site URL（形如 https://avocadozero.cn）
const domain = process.env.DOMAIN;
const deployTarget = process.env.DEPLOY_TARGET || 'local';
const deployConfig = {
  github:  { site: 'https://avocadozero.github.io', base: '/avocadozero-home-page' },
  gitee:   { site: 'https://jessechiu.gitee.io',   base: '/avocadozero-home-page' },
  aliyun:  { site: domain || 'http://47.101.55.91', base: '/' },
  local:   { site: 'http://localhost:4321',         base: '/' },
};
const { site, base } = deployConfig[deployTarget] || deployConfig.local;

export default defineConfig({
  site,
  base,
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
