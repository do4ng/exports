import { relative } from 'path';

export function getExportsInCommonjs(path: string): string[] {
  const devPath = relative(__dirname, path).replace(/\\/g, '/');
  const module = require(devPath);

  return Object.keys(module);
}

export async function getExportsInEsModule(path: string): Promise<string[]> {
  const devPath = relative(__dirname, path).replace(/\\/g, '/');
  const module = await import(devPath);

  return Object.keys(module);
}

export async function getExports(path: string): Promise<string[]> {
  // dynamic require javascript file

  try {
    return getExportsInCommonjs(path);
  } catch (_) {
    return getExportsInEsModule(path);
  }
}
