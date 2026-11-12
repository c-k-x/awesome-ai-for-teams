#!/usr/bin/env node
/**
 * 打包成单文件，供不装依赖直接运行的用户使用。
 *
 *   node scripts/bundle.mjs        # 生成 dist/server.mjs
 *
 * 产物自带 data/catalog.json 的读取路径，依赖已内联。
 */
import { execFileSync } from 'node:child_process';
import { statSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dist');

mkdirSync(OUT, { recursive: true });

execFileSync(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['-y', 'esbuild', 'src/server.js',
   '--bundle', '--platform=node', '--format=esm',
   '--outfile=dist/server.mjs'],
  { cwd: ROOT, stdio: 'inherit' }
);

const size = statSync(join(OUT, 'server.mjs')).size;
console.log(`dist/server.mjs — ${(size / 1024).toFixed(0)}KB`);
console.log('Run with: node dist/server.mjs');
