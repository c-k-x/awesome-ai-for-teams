# Glama 与 Smithery 用这个文件构建并运行 server，检查 5 个工具的 schema。
# 运行时不需要装依赖：dist/server.mjs 已经把 MCP SDK 和 catalog 都打包进去了。
FROM node:22-alpine

WORKDIR /app
COPY mcp/dist/server.mjs ./server.mjs

ENTRYPOINT ["node", "/app/server.mjs"]
