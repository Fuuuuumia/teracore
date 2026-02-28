import { base } from '$app/paths';

/**
 * @param path 
 * @returns base
 */
export function resolve(path: string): string {
  return `${base}${path}`;
}
