#!/bin/bash
set -e

GITEE_REMOTE=${GITEE_REMOTE:-"https://gitee.com/jessechiu/avocadozero-home-page.git"}
DEPLOY_BRANCH="pages"

echo "🔨 Building for Gitee Pages..."
npm run build:gitee

echo ""
echo "📦 Deploying dist/ to $DEPLOY_BRANCH branch..."

# Enter dist directory
cd dist

# Initialize git
git init
git checkout -b "$DEPLOY_BRANCH"
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to gitee pages branch
git remote add gitee "$GITEE_REMOTE"
git push -f gitee "$DEPLOY_BRANCH"

cd ..

echo ""
echo "✅ Deploy to Gitee Pages complete!"
echo ""
echo "下一步操作："
echo "  1. 打开 https://gitee.com/jessechiu/avocadozero-home-page"
echo "  2. 进入「服务」→「Gitee Pages」"
echo "  3. 部署分支选择「pages」，部署目录留空（根目录）"
echo "  4. 点击「更新」按钮"
echo "  5. 访问 https://jessechiu.gitee.io/avocadozero-home-page/"
