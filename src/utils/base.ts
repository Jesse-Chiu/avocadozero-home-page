/**
 * 基础路径工具 - 自动适配本地开发 / GitHub Pages 等不同部署环境
 *
 * 使用方式:
 *   import { path } from '../utils/base';
 *   <a href={path('/about')}>关于我们</a>
 */
export const BASE = (import.meta.env.BASE_URL as string) || '/';

/**
 * 生成带基础路径的完整 URL
 * @param p 以 / 开头的路径，如 '/about', '/curriculum'
 * @returns 拼接了 base 的完整路径
 */
export function path(p: string): string {
  return `${BASE}${p}`;
}
