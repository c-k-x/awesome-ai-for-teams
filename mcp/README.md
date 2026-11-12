# awesome-ai-for-teams-mcp

A Model Context Protocol server over the [awesome-ai-for-teams](https://github.com/c-k-x/awesome-ai-for-teams)
catalog: 78 AI tools for engineering teams, each verified against its repository
README, source tree and open issues.

Every entry states **when it fits, when it does not, its limits, its licence
terms and its open issue numbers**. No ranking, no sponsored placement.
Data licence: CC0-1.0, so fork it freely.

## Why

Most "AI tool" lists give a name and a one-liner. When you actually have to pick
one, the questions are different: *What does it refuse to do? Which licence will
legal object to? Which known issue bites at scale?* This server answers those,
because that is what the source list records.

## Install

### Option A — one command, no clone, no install

```json
{
  "mcpServers": {
    "awesome-ai-for-teams": {
      "command": "npx",
      "args": ["-y", "github:c-k-x/awesome-ai-for-teams"]
    }
  }
}
```

**Claude Desktop** — `~/Library/Application Support/Claude/claude_desktop_config.json`
(macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows).
**Cursor** — `.cursor/mcp.json` or Settings → MCP.

`npx` clones the repository once and caches it. `dist/server.mjs` bundles both
the MCP SDK and the catalog, so there is no `npm install` step and no sibling
data file to keep in place.

To pick up new data later, clear the npx cache for this package:

```bash
npx clear-npx-cache        # or: rm -rf ~/.npm/_npx
```

### Option B — clone, for editing or contributing

```bash
git clone https://github.com/c-k-x/awesome-ai-for-teams.git
cd awesome-ai-for-teams/mcp
npm install          # only needed for the unbundled src/server.js
```

Point your client at `…/awesome-ai-for-teams/mcp/src/server.js` instead.

### Option C — two files, no clone

```bash
mkdir -p ~/mcp/awesome-ai-for-teams && cd ~/mcp/awesome-ai-for-teams
curl -fsSLO https://raw.githubusercontent.com/c-k-x/awesome-ai-for-teams/main/mcp/dist/server.mjs
```

`dist/server.mjs` is self-contained — one file is enough. Point your client at
its absolute path.

## Tools

| Tool | What it answers |
|---|---|
| `search_tools` | Find tools by keyword, category or licence. Filters constraints such as "self-hosted" or "AGPL". |
| `get_tool` | Full record for one tool: fit and misfit cases, limits, licence clauses, known issues with issue numbers, and the source used to verify it. |
| `compare_tools` | A published side-by-side comparison: differences, when each fits, when neither fits, and known issues for each. |
| `list_categories` | Every category with the tools in it. |
| `list_scenarios` | Step-by-step team scenarios: handoffs, parallel agent review, shared skills, task tracking, session recovery. |

## Example prompts

```
Which self-hosted memory layer should I pick if legal objects to AGPL?
→ search_tools with query "memory", licence "MIT"

Is Zep actually a memory store, or something else?
→ get_tool id "zep"

Backlog.md or It's a Plan for agent task tracking?
→ compare_tools a "backlog" b "its-a-plan"
```

## Data freshness

`data/catalog.json` is a snapshot. The live pages, which carry the same content
plus Chinese editions, are at [www.goodthingure.com](https://www.goodthingure.com/).
Regenerate the catalog with `build-mcp-catalog.py` in the site build directory.

## Scope and honesty

- Curated list, not a benchmark. Nothing was end-to-end tested.
- Star counts and licences come from the GitHub API; dates are in each record.
- Known issues are quoted with issue numbers so you can check them yourself.
- No ranking, no vendor payment, no sponsored placement.

## Licence

CC0-1.0. Listed projects and their trademarks keep their own licences.
