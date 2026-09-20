# Awesome AI for Teams

帮助团队发现和选择 AI 工具与实践资源的精选清单，涵盖日常协作、软件开发，以及 AI 应用的构建与改进。

按「想完成什么工作」浏览；每项链接指向项目官网、官方仓库或资源作者的入口。既收录可直接使用的产品，也收录需要开发接入的组件，不按热度或能力排名。介绍为依据官方资料的简要转述，收录不代表实测认证。

欢迎[推荐项目、纠正介绍或修复链接](CONTRIBUTING.md)。

## 目录

- [团队知识与日常协作](#团队知识与日常协作)
- [编码与代码维护](#编码与代码维护)
- [自动化与应用开发](#自动化与应用开发)
- [文档解析与资料准备](#文档解析与资料准备)
- [跨会话记忆与知识复用](#跨会话记忆与知识复用)
- [评估与运行追踪](#评估与运行追踪)
- [模型接入与用量管理](#模型接入与用量管理)
- [代码执行环境](#代码执行环境)
- [协议与协作约定](#协议与协作约定)
- [教程与研究资源](#教程与研究资源)
- [贡献](#贡献)
- [许可](#许可)

## 团队知识与日常协作

在已有文档、聊天和白板工作流中使用 AI，或维护团队共用的助手。

- [Atlassian Rovo](https://www.atlassian.com/software/rovo) - 结合 Jira、Confluence 等工作资料搜索知识，并用可配置的 Agent 协助整理和推进项目事项。
- [Dust](https://dust.tt/) - 将公司资料和业务工具接到可共享的 Agent，让同事复用同一套问答与工作方法。
- [FigJam AI](https://help.figma.com/hc/en-us/articles/16822138920343-Use-AI-tools-in-FigJam) - 为工作坊生成白板和图表，并对讨论中的便签分类、生成摘要。
- [LangBot](https://github.com/langbot-app/LangBot) - 将 AI 助手接入飞书、企业微信等聊天平台，复用内置能力或已有的 Dify、n8n 流程。
- [Miro AI](https://miro.com/ai/ai-overview/) - 围绕团队白板中的材料整理想法、生成文档和图表，辅助产品探索与设计讨论。
- [Notion Agent](https://www.notion.com/help/notion-agent) - 根据工作区资料查找信息、整理内容并修改页面和数据库，协助完成多步文档工作。
- [Notion Custom Agents](https://www.notion.com/help/custom-agents) - 将答疑、反馈分流和周期报告配置成团队维护的助手，按时间或事件触发运行。

## 编码与代码维护

在代码仓库中查找、修改和验证；这些助手可服务团队开发流程，但不等同于多人项目管理平台。

- [Claude Code](https://code.claude.com/docs/en/overview) - 读取项目、修改文件并运行开发命令，帮助开发者沿着执行反馈排查问题和实现功能。
- [Codex](https://github.com/openai/codex) - 在终端中读取和修改仓库、运行命令与检查，将编码任务接到实际开发环境。
- [Cursor](https://cursor.com/) - 在编辑器中结合代码、终端和差异上下文完成修改，并让开发者审阅生成的变更。
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - 在终端中调用 Gemini 处理仓库分析、文件修改和命令执行，也可通过无头模式接入自动化。
- [OpenCode](https://github.com/anomalyco/opencode) - 支持自选模型的编码助手，通过项目规则、工具和角色配置复用开发工作方式。

## 自动化与应用开发

将 AI 接入业务流程；可视化平台适合共同配置应用，开发框架适合用代码控制步骤与状态。

- [AgentScope](https://github.com/agentscope-ai/agentscope) - 用 Python 组合模型、工具与 Agent 协作组件，开发自己的助手应用。
- [Coze Studio](https://github.com/coze-dev/coze-studio) - 通过可视化界面组合知识库、插件与工作流，构建和发布助手应用；此处指可自建的 Studio。
- [CrewAI](https://github.com/crewAIInc/crewAI) - 用角色、任务和流程组织多个 Agent 的分工与结果交接。
- [Dify](https://github.com/langgenius/dify) - 将知识检索、提示词和工具调用编排为 AI 应用，并发布为网页或 API。
- [LangGraph](https://github.com/langchain-ai/langgraph) - 用显式状态和流程分支开发多步 Agent，接入持久化与人工审核后继续任务。
- [n8n](https://github.com/n8n-io/n8n) - 连接表单、邮件、业务接口和 AI 节点，自动化跨系统的数据处理与后续操作。

## 文档解析与资料准备

把原始文件整理成便于检索和模型阅读的内容；解析组件仍需与知识库、权限和检索流程配合。

- [Docling](https://github.com/docling-project/docling) - 将 PDF、Office 文件和图片等转换为包含文本、表格与版面结构的文档表示。
- [LlamaParse](https://developers.llamaindex.ai/llamaparse/parse/) - 通过解析服务处理扫描件、表格和图表等复杂文档，供后续提取、检索与分析使用。
- [MarkItDown](https://github.com/microsoft/markitdown) - 将常见办公文件、PDF 和网页转换成 Markdown，减少模型读取多种格式时的适配工作。
- [Unstructured](https://github.com/Unstructured-IO/unstructured) - 将不同格式的文档拆为带类型和元数据的内容元素，供清洗、切分与知识检索使用。

## 跨会话记忆与知识复用

为助手保存和检索后续任务需要的信息；团队共享范围、事实更正与访问权限需要另外设计。

- [Basic Memory](https://github.com/basicmachines-co/basic-memory) - 以 Markdown 笔记保存知识，通过索引、关系和 MCP 让人和助手共同读写、检索与复用。
- [Graphiti](https://github.com/getzep/graphiti) - 从文本或结构化资料构建带时间与来源信息的知识图，帮助应用查询关系及其变化。
- [Mem0](https://github.com/mem0ai/mem0) - 为已有应用提取并检索对话中的偏好和事实，减少跨会话反复询问相同信息。

## 评估与运行追踪

检查一次任务为何失败，并用固定案例比较提示词、模型和流程改动。

- [Arize Phoenix](https://github.com/Arize-ai/phoenix) - 在可自行部署的平台中查看 AI 调用轨迹、维护数据集并比较评估实验。
- [Langfuse](https://github.com/langfuse/langfuse) - 关联执行轨迹、提示词版本、测试案例和评分，帮助团队调试并持续改进 AI 应用。
- [LangSmith](https://docs.langchain.com/langsmith/observability) - 追踪 Agent 执行过程，以数据集、人工反馈和评估实验比较应用版本。
- [Promptfoo](https://github.com/promptfoo/promptfoo) - 用配置和测试案例比较提示词、模型或 Agent，可接入 CI 并开展红队测试。
- [Ragas](https://github.com/vibrantlabsai/ragas) - 用评估指标与实验流程检查检索覆盖、回答依据和 Agent 行为，比较应用改动。

## 模型接入与用量管理

为多个应用集中处理模型供应商适配、路由和使用记录。

- [LiteLLM](https://github.com/BerriAI/litellm) - 通过 SDK 或代理统一接入多家模型服务，并在代理中管理应用密钥、路由和用量。
- [Portkey AI Gateway](https://github.com/Portkey-AI/gateway) - 将模型调用的重试、备用路由和负载分配集中到网关；完整管理平台需另行评估。

## 代码执行环境

为需要运行生成代码、处理文件或启动项目的 Agent 准备任务环境。

- [Daytona](https://www.daytona.io/docs/) - 通过 API 管理项目沙箱、文件和进程，为编程 Agent 准备可继续使用的工作环境。
- [E2B](https://github.com/e2b-dev/E2B) - 按需创建 Linux 沙箱，让应用运行 Agent 生成的代码并取回输出和文件。

## 协议与协作约定

用于统一接入、交接或记录格式，需由具体工具实现支持。

- [A2A](https://a2a-protocol.org/latest/) - 定义独立 Agent 服务之间的能力发现、消息、任务状态与产物交接方式。
- [AGENTS.md](https://agents.md/) - 用仓库中的 Markdown 文件向编码助手提供项目背景、开发约定和检查命令。
- [Agent Skills](https://agentskills.io/specification) - 将工作步骤、参考资料和脚本打包为可按需加载的技能，便于复用团队方法。
- [Model Context Protocol（MCP）](https://modelcontextprotocol.io/) - 为 Agent 应用连接工具、数据资源和提示模板提供共同协议。
- [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai) - 约定模型、Agent 与工具调用的追踪和指标字段，帮助团队统一观测口径。

## 教程与研究资源

用于学习、发现候选或形成改进思路；资源索引不代表其中每个项目都已核验。

- [Agent-Learning-Hub（kngwyc3）](https://github.com/kngwyc3/Agent-Learning-Hub) - 基于 Datawhale 路线补充练习和笔记，从工具调用逐步学习检索、记忆与 Agent 开发。
- [Anthropic 评估指南](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) - 介绍如何定义成功标准、准备测试案例，并选择代码、人工或模型评分方式。
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - 按用途寻找连接文件、数据库和业务系统的 MCP 服务实现。
- [Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657) - 分析多 Agent 的任务设定、协作和验证失败，配套 [MAST](https://github.com/multi-agent-systems-failure-taxonomy/MAST) 提供分类与研究材料。

## 贡献

请先阅读[贡献指南](CONTRIBUTING.md)，通过 Issue 或 Pull Request 推荐资源、说明实际用途或修正失效链接。优先补充清晰的团队使用场景与官方依据，同一项目通常只放在最相关的分类。

## 许可

本清单采用 [CC0 1.0 Universal](LICENSE)。各收录项目、商标和外部资料遵循其各自许可与条款。
