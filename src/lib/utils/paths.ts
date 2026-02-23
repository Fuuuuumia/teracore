import { base } from '$app/paths';

/**
 * パスを解決する関数
 * @param path 相対パス
 * @returns base プレフィックス付きの完全なパス
 */
export function resolve(path: string): string {
  return `${base}${path}`;
}
