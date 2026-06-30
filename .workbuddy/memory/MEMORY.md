# AvocadoZero 信息学网站 - 项目记忆

## 项目概述
- 信息学奥赛工作室官方网站
- 框架：Astro 5 + Tailwind CSS 3
- GitHub 仓库：avocadozero-home-page
- 部署：GitHub Pages + 阿里云 OSS

## 技术细节
- 设计风格：科技现代风，深蓝色调
- 响应式：移动端汉堡菜单 + Tailwind responsive grid
- 部署时需设置 `DEPLOY_TARGET=github` 使 base path 为 `/avocadozero-home-page`

## 页面列表
1. / → 首页
2. /about-cs → 什么是信息学
3. /curriculum → 课程体系
4. /benefits → 学信息学有什么用
5. /admission → 升学帮助
6. /success → 成功案例
7. /about → 关于我们

## 部署命令
- 本地开发：npm run dev
- GitHub Pages构建：npm run build:github
- 本地构建：npm run build
