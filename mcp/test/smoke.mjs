#!/usr/bin/env node
/**
 * Smoke test: 启动 server，调 5 个工具各一次，断言返回内容。
 * 不依赖测试框架，`node test/smoke.mjs` 直接跑。
 */
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SERVER = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'server.js');

const proc = spawn('node', [SERVER], { stdio: ['pipe', 'pipe', 'inherit'] });

let buffer = '';
const replies = new Map();
let resolveAll;
const done = new Promise((r) => (resolveAll = r));

proc.stdout.on('data', (chunk) => {
  buffer += chunk.toString();
  const lines = buffer.split('\n');
  buffer = lines.pop();
  for (const line of lines) {
    if (!line.trim()) continue;
    const msg = JSON.parse(line);
    if (msg.id !== undefined) {
      replies.set(msg.id, msg);
      if (msg.id === 7) resolveAll();
    }
  }
});

function send(id, method, params) {
  proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
}

function text(id) {
  const msg = replies.get(id);
  if (!msg) throw new Error(`no reply for id ${id}`);
  if (msg.error) throw new Error(`tool error: ${msg.error.message}`);
  return msg.result.content[0].text;
}

setTimeout(async () => {
  try {
    send(1, 'initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'smoke', version: '1' },
    });
    send(2, 'tools/list', {});
    send(3, 'tools/call', { name: 'search_tools', arguments: { query: 'memory', licence: 'MIT', limit: 2 } });
    send(4, 'tools/call', { name: 'get_tool', arguments: { id: 'openwebui' } });
    send(5, 'tools/call', { name: 'compare_tools', arguments: { a: 'backlog', b: 'its-a-plan' } });
    send(6, 'tools/call', { name: 'list_categories', arguments: {} });
    send(7, 'tools/call', { name: 'list_scenarios', arguments: {} });

    await done;

    const toolList = replies.get(2).result.tools.map((t) => t.name);
    if (toolList.length !== 5) throw new Error(`expected 5 tools, got ${toolList.length}`);

    const search = text(3);
    if (!search.includes('match')) throw new Error('search returned no match line');
    if (!search.includes('MIT')) throw new Error('search did not honour the licence filter');

    const detail = JSON.parse(text(4));
    if (detail.id !== 'openwebui') throw new Error('get_tool returned the wrong tool');
    if (!Array.isArray(detail.limits) || detail.limits.length < 3) {
      throw new Error('get_tool returned too few limits');
    }

    const compare = text(5);
    if (!compare.includes('Backlog.md')) throw new Error('compare missing first tool');
    if (!compare.includes("It's a Plan")) throw new Error('compare missing second tool');

    const cats = text(6);
    if (!cats.includes('(')) throw new Error('category list has no counts');

    const scenes = text(7);
    if (!scenes.includes('http')) throw new Error('scenario list has no page links');

    // 无匹配分支必须给出提示，而不是空字符串
    send(8, 'tools/call', { name: 'search_tools', arguments: { query: 'zzz-no-such-thing' } });
    setTimeout(() => {
      const miss = text(8);
      if (!miss.toLowerCase().includes('no tool')) throw new Error('empty-result message missing');

      console.log('smoke test passed: 5 tools, search/detail/compare/categories/scenarios all return content');
      proc.kill();
      process.exit(0);
    }, 300);
  } catch (err) {
    console.error('smoke test failed:', err.message);
    proc.kill();
    process.exit(1);
  }
}, 400);
