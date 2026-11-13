#!/usr/bin/env node
/**
 * awesome-ai-for-teams MCP server
 *
 * 把 78 个工具的核实数据（定位、适合/不适合、限制、已知 issue 编号、
 * 许可条款）和 28 组对比、5 个场景暴露给 AI 客户端。
 *
 * 数据来源：https://github.com/c-k-x/awesome-ai-for-teams（CC0-1.0）
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// 打包版把 catalog 内联进本文件（见 scripts/bundle.mjs），源码版从磁盘读。
// _inline-catalog.js 只在打包时存在，源码模式走 catch 分支。
await import('./_inline-catalog.js').catch(() => {});
const CATALOG = globalThis.__INLINE_CATALOG__ ?? loadFromDisk();

function loadFromDisk() {
  const HERE = dirname(fileURLToPath(import.meta.url));
  const CANDIDATES = [
    join(HERE, '..', 'data', 'catalog.json'),
    join(HERE, 'data', 'catalog.json'),
    join(HERE, '..', '..', 'data', 'catalog.json'),
  ];
  const found = CANDIDATES.find((p) => existsSync(p));
  if (!found) {
    console.error(
      'Cannot find data/catalog.json. Looked in:\n  ' + CANDIDATES.join('\n  ')
    );
    process.exit(1);
  }
  return JSON.parse(readFileSync(found, 'utf8'));
}

const TOOLS = CATALOG.tools;
const COMPARISONS = CATALOG.comparisons;
const SCENES = CATALOG.scenes;

/** 把工具压成一段可读摘要，避免把整个 JSON 塞进上下文。 */
function brief(t) {
  return [
    `${t.name} [${t.id}] — ${t.category}`,
    `  ${t.summary}`,
    `  Licence: ${t.licence} | ${t.stars} stars | last commit ${t.lastCommit}`,
    `  Fits when: ${t.fitsWhen.join('; ')}`,
    `  Not for: ${t.notFor.join('; ')}`,
    `  Limits: ${t.limits.join('; ')}`,
    t.knownIssues ? `  Known issues: ${t.knownIssues}` : '',
    t.licenceNote ? `  Licence note: ${t.licenceNote}` : '',
    `  Page: ${t.page}`,
  ]
    .filter(Boolean)
    .join('\n');
}

function full(t) {
  return JSON.stringify(t, null, 2);
}

/** 关键词匹配：标题、摘要、分类、限制都要能命中。 */
function matches(t, query) {
  const q = query.toLowerCase();
  return (
    t.name.toLowerCase().includes(q) ||
    t.summary.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.limits.some((x) => x.toLowerCase().includes(q)) ||
    t.fitsWhen.some((x) => x.toLowerCase().includes(q)) ||
    t.topics.some((x) => x.toLowerCase().includes(q))
  );
}

// 版本号与 package.json 保持一致，客户端据此判断是否需要更新缓存
const server = new Server(
  { name: 'awesome-ai-for-teams', version: '1.2.2' },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'search_tools',
      description:
        'Search verified AI tools for engineering teams by keyword, category or licence. ' +
        'Every entry states when it fits, when it does not, its limits, licence terms and open issue numbers.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Keyword: tool name, use case, or a constraint such as "self-hosted" or "AGPL".' },
          category: { type: 'string', description: 'Filter by category, for example "Memory & Retrieval" or "Model Access".' },
          licence: { type: 'string', description: 'Filter by licence, for example "MIT", "AGPL-3.0", "Apache-2.0".' },
          limit: { type: 'number', description: 'Maximum results to return. Default 5.' },
        },
        required: [],
      },
    },
    {
      name: 'get_tool',
      description:
        'Get the full verified record for one tool: fit and misfit cases, limits, licence clauses, known issues with issue numbers, and the source used to verify it.',
      inputSchema: {
        type: 'object',
        properties: { id: { type: 'string', description: 'Tool id, for example "mem0" or "zep".' } },
        required: ['id'],
      },
    },
    {
      name: 'compare_tools',
      description:
        'Compare two tools using an already published comparison, which states the differences, when each fits, when neither fits, and the known issues for each.',
      inputSchema: {
        type: 'object',
        properties: {
          a: { type: 'string', description: 'First tool id.' },
          b: { type: 'string', description: 'Second tool id.' },
        },
        required: ['a', 'b'],
      },
    },
    {
      name: 'list_categories',
      description: 'List every category with the tools in it, so you know what can be searched.',
      inputSchema: { type: 'object', properties: {}, required: [] },
    },
    {
      name: 'list_scenarios',
      description:
        'List step-by-step team scenarios: context handoffs, parallel agent review, shared skills, task tracking and session recovery.',
      inputSchema: { type: 'object', properties: {}, required: [] },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args = {} } = req.params;

  if (name === 'search_tools') {
    const limit = Math.min(Number(args.limit) || 5, 20);
    let hits = TOOLS;
    if (args.query) hits = hits.filter((t) => matches(t, args.query));
    if (args.category)
      hits = hits.filter((t) =>
        t.category.toLowerCase().includes(args.category.toLowerCase())
      );
    if (args.licence)
      hits = hits.filter((t) =>
        `${t.licence} ${t.licence_spdx}`
          .toLowerCase()
          .includes(args.licence.toLowerCase())
      );

    if (!hits.length) {
      return {
        content: [
          {
            type: 'text',
            text:
              'No tool in the list matches that. The catalog covers 78 tools for engineering teams; ' +
              'try a broader keyword, or call list_categories first.',
          },
        ],
      };
    }
    return {
      content: [
        {
          type: 'text',
          text: `${hits.length} match(es), showing ${Math.min(hits.length, limit)}:\n\n` +
            hits
              .slice(0, limit)
              .map(brief)
              .join('\n\n---\n\n'),
        },
      ],
    };
  }

  if (name === 'get_tool') {
    const t = TOOLS.find((x) => x.id === args.id);
    if (!t) {
      return {
        content: [
          {
            type: 'text',
            text: `No tool with id "${args.id}". Call search_tools or list_categories to find the right id.`,
          },
        ],
      };
    }
    return { content: [{ type: 'text', text: full(t) }] };
  }

  if (name === 'compare_tools') {
    const found = COMPARISONS.find(
      (c) =>
        c.tools.includes(args.a) && c.tools.includes(args.b) && c.tools.length === 2
    );
    if (!found) {
      const related = COMPARISONS.filter(
        (c) => c.tools.includes(args.a) || c.tools.includes(args.b)
      ).map((c) => c.slug);
      return {
        content: [
          {
            type: 'text',
            text:
              `No published comparison for ${args.a} and ${args.b}.` +
              (related.length
                ? ` Comparisons that exist for one of them: ${related.join(', ')}.`
                : ''),
          },
        ],
      };
    }
    const dims = found.dimensions
      .map((d) => `  - ${d.name}: A=${d.a} | B=${d.b}`)
      .join('\n');
    return {
      content: [
        {
          type: 'text',
          text: [
            `${found.title}`,
            found.summary,
            'Differences:',
            dims,
            `When to choose ${args.a}:`,
            found.chooseA.map((x) => `  - ${x}`).join('\n'),
            `When to choose ${args.b}:`,
            found.chooseB.map((x) => `  - ${x}`).join('\n'),
            `When neither fits: ${found.neither}`,
            `Page: ${found.page}`,
          ].join('\n'),
        },
      ],
    };
  }

  if (name === 'list_categories') {
    const byCat = {};
    for (const t of TOOLS) (byCat[t.category] ||= []).push(`${t.name} [${t.id}]`);
    return {
      content: [
        {
          type: 'text',
          text: Object.entries(byCat)
            .map(([c, names]) => `${c} (${names.length})\n  ${names.join(', ')}`)
            .join('\n\n'),
        },
      ],
    };
  }

  if (name === 'list_scenarios') {
    return {
      content: [
        {
          type: 'text',
          text: SCENES.map(
            (s) =>
              `${s.title}\n  ${s.summary}\n  Steps: ${s.steps.join(' → ')}\n  Page: ${s.page}`
          ).join('\n\n---\n\n'),
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
