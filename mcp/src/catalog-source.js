/**
 * 源码模式下的数据加载：读同仓库的 catalog.json。
 *
 * 打包时这个文件会被 esbuild 的 alias 换成生成的内联版本
 * （scripts/bundle.mjs 会写一个 _inline-catalog.js），
 * 这样 dist/server.mjs 不依赖任何外部文件。
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));

// src/catalog-source.js 在 src/ 下；dist 版本走内联，不会用到这里。
const CANDIDATES = [
  join(HERE, '..', 'data', 'catalog.json'),        // src/ → ../data
  join(HERE, 'data', 'catalog.json'),               // 与脚本同目录
  join(HERE, '..', '..', 'data', 'catalog.json'),   // 仓库根兜底
];

const found = CANDIDATES.find((p) => existsSync(p));
if (!found) {
  console.error(
    'Cannot find data/catalog.json. Looked in:\n  ' + CANDIDATES.join('\n  ')
  );
  process.exit(1);
}

export const CATALOG = JSON.parse(readFileSync(found, 'utf8'));
