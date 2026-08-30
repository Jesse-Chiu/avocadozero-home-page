# AvocadoZero 信息学网站 - 项目记忆

## 项目概述
- 信息学奥赛工作室官方网站
- 框架：Astro 5 + Tailwind CSS 3
- 仓库：avocadozero-home-page（GitHub + Gitee 双平台）
- 部署：阿里云 ECS 47.101.55.91（主） + GitHub Pages（备） + Gitee Pages（备）

## 阿里云 ECS 部署
- **服务器 IP**：47.101.55.91
- **域名**：www.avocadozero.cn（已备案，DNS 已解析）
- **HTTPS**：已启用（443 SSL + HTTP→HTTPS 301 跳转）
- **SSL 证书**：`/etc/nginx/ssl/www.avocadozero.cn.{pem,key}`
- **Nginx 配置**：`server/nginx-avocado.conf`（部署到 `/etc/nginx/conf.d/avocado.conf`）
- **部署脚本**：`npm run deploy:aliyun`（scp 同步 dist/ 到服务器，默认 SSH_USER=admin）
- **静态文件目录**：`/var/www/avocado-home-page/`
- **build:aliyun**：base 为 `/`（根路径），site 为 `https://www.avocadozero.cn`
- **未来规划**：`/var/www/oj/`（做题网）、`/var/www/api/`（API）

## 技术细节
- 设计风格：科技现代风，深蓝色调
- 响应式：移动端汉堡菜单 + Tailwind responsive grid
- 部署配置通过 `DEPLOY_TARGET` 环境变量切换
  - `aliyun` → site: `https://www.avocadozero.cn`, base: `/`
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

## 内容导入规范（CSP 课件）
- **代码必须语法高亮**：所有导入的课件内容，C++ 代码块必须输出 `<pre><code class="language-cpp">`（转换时把 c++/c 语言标记统一为 cpp），由 `public/vendor/hljs/` 本地 highlight.js（atom-one-light 浅色主题）客户端高亮；禁止纯文本代码块
- 代码块样式：浅色背景（`#fafafa`）+ 边框 + 投影，不用深色
- 图片放 `public/images/csp/{章号}/`，HTML 中路径 `/images/csp/{章号}/`，由 `[type].astro` 统一替换为带 base 的 path()
- docx 转换保留：红色标注（`color:#FF0000`）、加粗、上标 `<sup>`、表格、真题高亮块（quiz-block）
- 转换后检查文档尾部是否夹带原文档水印（如「牛油果零壹信奥🥑」），需清除
- 内容文件：`src/data/csp-content/{id}-{knowledge|practice}.html`

## Gitee Pages 部署注意事项
- 部署分支：`pages`（根目录）
- 免费版需在 Gitee 后台手动点击「更新」按钮
- 站点地址：https://jessechiu.gitee.io/avocadozero-home-page/
