/**
 * 客户端登录工具
 *
 * 说明：当前网站是纯静态站点（Astro 5 static build），
 * 登录态保存在 localStorage 中。这只是「访问门槛」式的鉴权，
 * 不能阻止有心人查看源码。后续若需要更安全的方案，
 * 可以接入后端 API（建议挂在同一台 ECS 上，跑 Node/Python 服务）。
 */

const AUTH_STORAGE_KEY = 'avocadozero_auth';
const AUTH_USER_KEY = 'avocadozero_user';

// 默认凭证（根据需求定义）
const DEFAULT_USERNAME = 'avocado';
const DEFAULT_PASSWORD = 'c++';

export const AUTH_CREDENTIALS = {
  username: DEFAULT_USERNAME,
  password: DEFAULT_PASSWORD,
};

export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_STORAGE_KEY) === '1';
}

export function getCurrentUser(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_USER_KEY);
}

export function login(username: string, password: string): boolean {
  if (typeof window === 'undefined') return false;
  if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
    localStorage.setItem(AUTH_STORAGE_KEY, '1');
    localStorage.setItem(AUTH_USER_KEY, username);
    return true;
  }
  return false;
}

export function logout(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
}

/**
 * 页面加载时调用：如果未登录，跳转到 /login
 * 用法：在 .astro 页面 <script> 中调用 requireAuth();
 */
export function requireAuth(redirectTo: string = '/login'): void {
  if (typeof window === 'undefined') return;
  if (!isLoggedIn()) {
    const next = encodeURIComponent(window.location.pathname);
    window.location.href = `${redirectTo}?next=${next}`;
  }
}
