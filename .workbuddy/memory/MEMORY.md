# AvocadoZero 信息学网站 - 项目记忆

## 项目概述
- 信息学奥赛工作室官方网站
- 框架：Astro 5 + Tailwind CSS 3
- 仓库：avocadozero-home-page（GitHub + Gitee 双平台）
- 部署：阿里云 ECS 47.101.55.91（主） + GitHub Pages（备） + Gitee Pages（备）

## 阿里云 ECS 部署
- **服务器 IP**：47.101.55.91
- **Nginx 配置**：`server/nginx-avocado.conf`
- **部署脚本**：`npm run deploy:aliyun`（rsync 同步 dist/ 到服务器）
- **静态文件目录**：`/var/www/avocado-home-page/`
- **域名**：备案审核中，备案后设置 `DOMAIN` 环境变量覆盖 site URL
- **build:aliyun**：base 为 `/`（根路径），site 为 IP 或域名
- **未来规划**：`/var/www/oj/`（做题网）、`/var/www/api/`（API）

## 技术细节
- 设计风格：科技现代风，深蓝色调
- 响应式：移动端汉堡菜单 + Tailwind responsive grid
- 部署配置通过 `DEPLOY_TARGET` 环境变量切换
  - `aliyun` → site: `http://47.101.55.91`, base: `/`
  - `github` → site: `avocadozero.github.io`, base: `/avocadozero-home-page`
  - `gitee` → site: `jessechiu.gitee.io`, base: `/avocadozero-home-page`
  - `local` → site: `localhost:4321`, base: `/`

## 页面列表
1. / → 首页
2. /about-cs → 什么是信息学
3. /curriculum → 课程体系
4. /benefits → 学信息学有什么用
5. /admission → 升学帮助
6. /success → 成功案例
7. /awards → 学员获奖
8. /about → 关于我们

## 部署命令
- 本地开发：npm run dev
- 本地构建：npm run build
- 阿里云构建+部署：npm run deploy:aliyun
- GitHub Pages构建：npm run build:github
- Gitee Pages构建+部署：npm run deploy:gitee

## Gitee Pages 部署注意事项
- 部署分支：`pages`（根目录）
- 免费版需在 Gitee 后台手动点击「更新」按钮
- 站点地址：https://jessechiu.gitee.io/avocadozero-home-page/
