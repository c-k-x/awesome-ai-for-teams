#!/usr/bin/env node
/**
 * 打包成完全自包含的单文件 dist/server.mjs。
 *
 * catalog 会被内联进产物，因此 dist/server.mjs 不依赖任何外部文件，
 * 可以直接 `npx github:c-k-x/awesome-ai-for-teams` 运行。
 *
 *   node scripts/bundle.mjs        # 生成 dist/server.mjs
 */
import { execFileSync } from 'node:child_process';
import { statSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dist');
const STUB = join(ROOT, 'src', '_inline-catalog.js');

mkdirSync(OUT, { recursive: true });

// 把 catalog.json 变成一个 JS 模块，赋值给 globalThis。
// 用 JSON.parse 包一层字符串，比直接甩对象字面量更省体积也更安全。
const catalogText = readFileSync(join(ROOT, 'data', 'catalog.json'), 'utf8');
writeFileSync(
  STUB,
  `globalThis.__INLINE_CATALOG__ = JSON.parse(${JSON.stringify(catalogText)});\n`,
  'utf8'
);

try {
  execFileSync(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['-y', 'esbuild', 'src/server.js',
     '--bundle', '--platform=node', '--format=esm',
     '--outfile=dist/server.mjs'],
    { cwd: ROOT, stdio: 'inherit' }
  );

  // 单文件模式必须真的自包含：删掉 data/ 也要能跑。
  // 这里只在产物里确认内联标记存在，实际运行由 test/smoke.mjs 覆盖。
  const bundled = readFileSync(join(OUT, 'server.mjs'), 'utf8');
  if (!bundled.includes('__INLINE_CATALOG__')) {
    throw new Error('bundled output does not carry the inline catalog');
  }

  const size = statSync(join(OUT, 'server.mjs')).size;
  console.log(`dist/server.mjs — ${(size / 1024).toFixed(0)}KB，catalog 已内联`);
} finally {
  rmSync(STUB, { force: true });
}
