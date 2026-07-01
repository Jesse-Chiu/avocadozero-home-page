#!/bin/bash
# ============================================================
# 部署官网到阿里云 ECS
# 用法:
#   SSH_USER=root              # 可选，默认 root
#   SERVER_IP=47.101.55.91     # 可选，默认 47.101.55.91
#   bash server/deploy.sh
#
# 首次部署前需要:
#   1. SSH 免密登录: ssh-copy-id root@47.101.55.91
#   2. 安装 Nginx:
#      CentOS / Alibaba Cloud Linux:  yum install -y nginx
#      Ubuntu / Debian:               apt update && apt install -y nginx
#   3. 创建目录: mkdir -p /var/www/avocado-home-page
#   4. 上传配置: scp server/nginx-avocado.conf root@47.101.55.91:/etc/nginx/conf.d/avocado.conf
#   5. 启动 Nginx:
#      ssh root@47.101.55.91 "nginx -t && systemctl start nginx && systemctl enable nginx"
#   6. 阿里云安全组放行 80 端口（控制台 → 安全组 → 入方向 → 添加 0.0.0.0/0 TCP:80）
# ============================================================
set -e

SSH_USER="${SSH_USER:-root}"
SERVER_IP="${SERVER_IP:-47.101.55.91}"
REMOTE_DIR="/var/www/avocado-home-page"
SSH_TARGET="${SSH_USER}@${SERVER_IP}"

echo "🔨 构建阿里云版本..."
npm run build:aliyun

echo ""
echo "📦 部署到 ${SSH_TARGET}:${REMOTE_DIR} ..."

# rsync: -a 归档模式, -z 压缩传输, --delete 删除服务器上多余文件
rsync -az --delete \
    --exclude='.DS_Store' \
    --exclude='.git' \
    dist/ "${SSH_TARGET}:${REMOTE_DIR}/"

echo ""
echo "✅ 部署完成！"
echo "   访问地址: http://${SERVER_IP}/"
echo ""
echo "   💡 如果是首次部署，还需要在服务器上："
echo "      cp server/nginx-avocado.conf → /etc/nginx/conf.d/avocado.conf"
echo "      nginx -t && nginx -s reload"
