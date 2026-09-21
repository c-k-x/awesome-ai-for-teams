# Awesome AI for Teams

简体中文 | [English](README.en.md)

帮助团队发现和选择 AI 工具与实践资源的精选清单，覆盖日常协作、软件开发，以及 AI 应用的构建、运行与改进。

按工作用途分类，每项提供项目入口和简短介绍。既包括直接使用的产品，也包括需要开发接入的组件；顺序不代表排名。简介依据官方资料转述，收录不代表统一实测或生产认证。

欢迎[推荐资源或修正条目](CONTRIBUTING.md)。

## 目录

- [团队知识与业务助手](#团队知识与业务助手)
- [团队工作台与任务协作](#团队工作台与任务协作)
- [聊天与会议中的 AI](#聊天与会议中的-ai)
- [白板与视觉协作](#白板与视觉协作)
- [Agent 助手与会话管理](#agent-助手与会话管理)
- [应用开发与流程编排](#应用开发与流程编排)
- [文档解析与资料准备](#文档解析与资料准备)
- [记忆与团队经验复用](#记忆与团队经验复用)
- [评估与运行观测](#评估与运行观测)
- [模型接入与运行基础设施](#模型接入与运行基础设施)
- [协议与协作约定](#协议与协作约定)
- [实践与学习资源](#实践与学习资源)
  - [实践指南](#实践指南)
  - [教程与研究](#教程与研究)
  - [更多资源索引](#更多资源索引)
- [贡献](#贡献)
- [许可](#许可)

## 团队知识与业务助手

查询组织资料，整理文档，并将 AI 接到已有业务流程。

- [Atlassian Rovo](https://www.atlassian.com/software/rovo) - 结合 Jira、Confluence 等工作资料搜索知识，并用可配置的 Agent 协助整理和推进项目事项。
- [Dust](https://dust.tt/) - 将公司资料和业务工具接到可共享的 Agent，让同事复用同一套问答与工作方法。
- [Elastic Agent Builder](https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder) - 在 Elasticsearch 数据之上配置模型、指令和工具，构建能查询组织资料的业务助手。
- [Glean Independent Agents](https://www.glean.com/blog/introducing-independent-agents) - 结合连接的公司知识持续处理调查、反馈和跟进工作，并让负责人查看与审核结果。
- [Lindy](https://docs.lindy.ai/) - 从 Slack 连接邮箱、日历和 CRM，将会后跟进或周期报告保存为可重复运行的工作。
- [Macro](https://github.com/macro-inc/macro) - 将邮件、消息、任务和文档关联到共同工作区，让团队和 Agent 查询背景、整理资料并跟进事项。
- [Notion Agent](https://www.notion.com/help/notion-agent) - 根据工作区资料查找信息、整理内容并修改页面和数据库，协助完成多步文档工作。
- [Notion Custom Agents](https://www.notion.com/help/custom-agents) - 将答疑、反馈分流和周期报告配置成团队维护的助手，按时间或事件触发运行。
- [Salesforce Agentforce](https://www.salesforce.com/agentforce/) - 把自然语言请求接到 Salesforce 数据和配置好的业务动作，构建销售与客服 Agent。
- [XYNE Spaces](https://github.com/juspay/xyne-spaces) - 将消息、邮件和文档纳入组织检索与协作空间，为人和 Agent 提供按权限获取的上下文。

## 团队工作台与任务协作

共同委托、跟进和审阅 Agent 工作；已有业务平台的集成与需要另行部署的工作台并列收录。

- [Agenta](https://github.com/Agenta-AI/agenta) - 将助手配置、共享文件、触发条件和运行轨迹放进团队工作台，供成员共同维护和复用。
- [Asana AI Teammates](https://asana.com/product/ai/ai-teammates) - 在 Asana 项目中接收具体任务，利用项目背景整理材料和产出草稿，再交回团队审阅。
- [Buzz (Block)](https://github.com/block/buzz) - 在自托管频道中连接人和 Agent，以签名身份和共享事件记录组织讨论与执行结果。
- [Cloudflare OS](https://github.com/cloudflare/cloudflare-os) - 让团队通过 AI 创建并共享有状态的小应用，在 Cloudflare 运行环境中继续协作；目前为 Early Access。
- [GitHub Agent HQ](https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents) - 在 GitHub 中选择编码 Agent、观察会话并审阅其 PR，让异步任务进入现有代码交付流程。
- [Lemma](https://github.com/lemma-work/lemma-platform) - 为人和 Agent 共用的业务应用提供数据表、文件、权限、工作流与人工等待节点。
- [Linear Agents](https://linear.app/docs/agents-in-linear) - 从任务单委托 Agent 并在原处跟进进度和产物，同时保留人的任务负责人。
- [Manor AI](https://github.com/manor-os/manor-ai) - 在自托管工作区组合知识检索、Agent 任务、工具绑定和审批，跟踪业务工作的执行与产物。
- [monday.com Agents](https://support.monday.com/hc/en-us/articles/33347027353746-AI-Agents-on-monday-com) - 接收看板事项或触发事件，结合资料进行分类、更新和交接，并留下运行记录。
- [Octo](https://github.com/Mininglamp-OSS/octo-server) - 将组织聊天、文件与 Agent 运行接在同一后端，通过配套客户端展示回复、状态和工具活动。
- [Open Tag](https://github.com/fancyboi999/open-tag) - 把频道消息转为可认领、指派和转交的 Agent 任务，保留线程与执行背景；适合自托管评估。
- [QM](https://github.com/yc-software/qm) - 按个人与房间范围组织共享助手、文件、记忆和执行环境，适合试验组织内协作；项目标为早期实验。
- [Raft (formerly Slock)](https://raft.build/) - 把团队频道、Agent 任务认领与待审阅状态连接起来，让同事共同交接和检查产物。
- [Solo (solo-agent)](https://github.com/solo-agent/solo) - 将 Agent 任务的负责人、执行记录、交付版本和评审结果关联起来，支持提交与退回流程。
- [Synapse (Z.ai)](https://github.com/zai-org/Synapse) - 以共享会话连接成员、原生 Actor 和外部 Agent，管理资源授权、唤醒与交接；仍处于早期开发。
- [team9](https://github.com/team9ai/team9) - 在频道、线程和共享文档中与基于 OpenClaw 的 Agent 协作，集中保留团队讨论与产物。
- [Tutti](https://github.com/tutti-os/tutti) - 关联多个 Agent 的会话、任务和文件以减少交接搬运；本地版与多人 VM 房间版本需分别评估。

## 聊天与会议中的 AI

沿用团队沟通入口接入助手；消息平台、集成层和实际执行服务承担不同工作。

- [AgentConnect](https://github.com/agentconnect-md/agentconnect) - 把执行机器上的 Agent 接到 Slack、飞书和代码平台，通过消息、事件或计划触发团队任务。
- [Ask Gemini in Google Chat](https://support.google.com/chat/answer/17036303) - 在 Google Chat 中结合工作资料查信息、准备内容和处理连接的应用任务；目前仅支持英语。
- [Centaur (Paradigm)](https://github.com/paradigmxyz/centaur) - 让团队从 Slack 委托工程任务，在 Kubernetes 沙箱中执行，并将进展和结果送回讨论串。
- [Claude Tag](https://www.anthropic.com/news/introducing-claude-tag) - 让成员在 Slack 线程中共同委托和跟进 Claude 的工作；当前为 Team 与 Enterprise 测试版。
- [钉钉 AI 助理 (DingTalk)](https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode) - 通过直通模式把已有 Agent 服务接进钉钉，后端负责规划执行，平台承接消息交互。
- [飞书豆包工作伙伴 (Feishu)](https://www.feishu.cn/community/article?id=7605435352983014344) - 在飞书协作环境中接入知识、技能与业务流程，为同事提供资料问答和办事入口；原名 aily。
- [LangBot](https://github.com/langbot-app/LangBot) - 将 AI 助手接入飞书、企业微信等聊天平台，复用内置能力或已有的 Dify、n8n 流程。
- [Mattermost Agents](https://docs.mattermost.com/administration-guide/configure/agents-admin-guide) - 在 Mattermost 频道和私信中配置 AI 助手，复用现有讨论入口并管理模型和工具接入。
- [Microsoft Teams Agents](https://support.microsoft.com/en-us/teams/platform/frequently-asked-questions-about-agents-in-microsoft-teams) - 在会议、频道和聊天中使用内置或自建 Agent，辅助记录、项目问答与业务操作；功能依类型和许可而异。
- [Nextcloud Assistant Talk Bot](https://github.com/nextcloud/talk_bot_ai) - 将 Nextcloud Assistant 接入 Talk 对话，通过 @assistant 使用已配置的模型回答问题。
- [Rocket.Chat AI App](https://docs.rocket.chat/docs/rocketchat-ai-app-setup-guide) - 在团队聊天和客服接待中提供知识问答与对话摘要；AI App 为需相应许可的 Beta 功能。
- [Slack AI Agents](https://slack.com/help/articles/33076000248851-Work-with-AI-agents-in-Slack) - 从频道和专门会话使用 Slackbot 或已安装的 Agent 应用，让请求与结果留在团队讨论中。
- [企业微信智能机器人 (WeCom)](https://github.com/WecomTeam/aibot-node-sdk) - 用官方 SDK 接收消息和卡片事件、发送流式回复，将自建 AI 服务接入企业微信。
- [ZoomMate](https://news.zoom.com/zoom-launches-zoommate/) - 根据会议和聊天背景生成材料，并通过配置的工作流推进 CRM、工单等会后跟进。

## 白板与视觉协作

将 AI 草稿变成可继续讨论、编辑或嵌入产品的图形成果。

- [Excalidraw MCP App](https://github.com/excalidraw/excalidraw-mcp) - 在支持 MCP Apps 的客户端中生成和交互编辑 Excalidraw 图，让团队继续修改 AI 草稿。
- [FigJam AI](https://help.figma.com/hc/en-us/articles/16822138920343-Use-AI-tools-in-FigJam) - 为工作坊生成白板和图表，并对讨论中的便签分类、生成摘要。
- [Miro AI](https://miro.com/ai/ai-overview/) - 围绕团队白板中的材料整理想法、生成文档和图表，辅助产品探索与设计讨论。
- [tldraw Agent Starter Kit](https://tldraw.dev/starter-kits/agent) - 为开发者提供让 Agent 读取、创建和修改画布图形的应用模板，用于构建视觉协作产品。

## Agent 助手与会话管理

直接执行编码与其他任务，或管理多个助手的会话、工作目录和交接；个人工作台不自动等同于多人权限平台。

- [Apache Maka (Incubating)](https://github.com/apache/maka) - 通过桌面或终端执行 Agent 任务，并用事件记录追查工具调用与结束状态；尚无正式 Apache 发行版。
- [Claude Code](https://code.claude.com/docs/en/overview) - 读取项目、修改文件并运行开发命令，帮助开发者沿着执行反馈排查问题和实现功能。
- [Clay Studio (chadbyte)](https://github.com/chadbyte/clay) - 将本机编程 Agent 暴露为可跨设备进入的浏览器工作区，支持共同查看会话与接手工作。
- [cli-continues](https://github.com/yigitkonur/cli-continues) - 从本地编码会话提取交接 Markdown，让另一种助手接着处理项目；交接不等于迁移运行状态。
- [codeg](https://github.com/xintaofei/codeg) - 在统一界面管理多种编程 Agent 的会话和任务，用 Git worktree 分开修改并集中审阅。
- [Codex](https://github.com/openai/codex) - 在终端中读取和修改仓库、运行命令与检查，将编码任务接到实际开发环境。
- [Cursor](https://cursor.com/) - 在编辑器中结合代码、终端和差异上下文完成修改，并让开发者审阅生成的变更。
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - 在终端中调用 Gemini 处理仓库分析、文件修改和命令执行，也可通过无头模式接入自动化。
- [Herdr](https://github.com/herdrdev/herdr) - 集中管理多个 Agent 的终端会话，观察等待输入的状态，并通过 CLI 操作和接续工作现场。
- [Hermes Agent (Nous Research)](https://github.com/NousResearch/hermes-agent) - 结合终端、聊天网关、定时任务和文件记忆，让长期使用的助手复用偏好与操作技能。
- [holaOS](https://github.com/holaboss-ai/holaOS) - 在桌面中并排使用应用与 Agent，并复用工具、技能和本地记忆；多人治理需区分产品版本。
- [Letta](https://github.com/letta-ai/letta-code) - 让持续使用的 Agent 维护带版本的文件记忆，并通过 CLI 或应用接口继续项目工作。
- [OpenClaw](https://github.com/openclaw/openclaw) - 运行常驻助手网关，从聊天平台和设备接收任务，并管理工具执行、会话和工作区记忆。
- [OpenCode](https://github.com/anomalyco/opencode) - 支持自选模型的编码助手，通过项目规则、工具和角色配置复用开发工作方式。
- [OpenMemory (Mem0)](https://github.com/mem0ai/openmemory) - 在 Claude Code、Codex 与 OpenCode 之间转换和导入编码会话；当前 Beta 工具不同于已归档的同名记忆服务。

## 应用开发与流程编排

通过可视化平台或开发框架组合模型、工具、步骤与状态，构建团队自己的 AI 应用。

- [AgentScope](https://github.com/agentscope-ai/agentscope) - 用 Python 组合模型、工具与 Agent 协作组件，开发自己的助手应用。
- [AutoGen](https://github.com/microsoft/autogen) - 通过消息、轮次和交接组织多 Agent 应用；项目处于维护模式，新项目需核对官方迁移建议。
- [Coze Studio](https://github.com/coze-dev/coze-studio) - 通过可视化界面组合知识库、插件与工作流，构建和发布助手应用；此处指可自建的 Studio。
- [CrewAI](https://github.com/crewAIInc/crewAI) - 用角色、任务和流程组织多个 Agent 的分工与结果交接。
- [Dify](https://github.com/langgenius/dify) - 将知识检索、提示词和工具调用编排为 AI 应用，并发布为网页或 API。
- [LangGraph](https://github.com/langchain-ai/langgraph) - 用显式状态和流程分支开发多步 Agent，接入持久化与人工审核后继续任务。
- [n8n](https://github.com/n8n-io/n8n) - 连接表单、邮件、业务接口和 AI 节点，自动化跨系统的数据处理与后续操作。
- [Temporal](https://docs.temporal.io/evaluate/understanding-temporal) - 用持久化工作流连接模型调用、外部操作与长时间人工等待，管理恢复和重试；业务操作仍需防重复。

## 文档解析与资料准备

把原始文件整理成便于检索和模型阅读的内容。

- [Docling](https://github.com/docling-project/docling) - 将 PDF、Office 文件和图片等转换为包含文本、表格与版面结构的文档表示。
- [LlamaParse](https://developers.llamaindex.ai/llamaparse/parse/) - 通过解析服务处理扫描件、表格和图表等复杂文档，供后续提取、检索与分析使用。
- [MarkItDown](https://github.com/microsoft/markitdown) - 将常见办公文件、PDF 和网页转换成 Markdown，减少模型读取多种格式时的适配工作。
- [Unstructured](https://github.com/Unstructured-IO/unstructured) - 将不同格式的文档拆为带类型和元数据的内容元素，供清洗、切分与知识检索使用。

## 记忆与团队经验复用

保存、整理或分发后续任务需要的资料与方法；个人记忆、团队知识和配置分发分别按实际用途选择。

- [Basic Memory](https://github.com/basicmachines-co/basic-memory) - 以 Markdown 笔记保存知识，通过索引、关系和 MCP 让人和助手共同读写、检索与复用。
- [Cognee](https://github.com/topoteretes/cognee) - 将分散资料加工为文本索引与知识图，帮助 Agent 检索相关内容及跨文档关系。
- [Graphiti](https://github.com/getzep/graphiti) - 从文本或结构化资料构建带时间与来源信息的知识图，帮助应用查询关系及其变化。
- [LangMem](https://github.com/langchain-ai/langmem) - 为开发者提供记忆提取、更新和搜索组件，可接入 LangGraph Store 或自有存储。
- [MCP Knowledge Graph Memory Server](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - 以本地文件保存实体、关系和观察，为兼容助手提供简单的结构化记忆工具；属于参考实现。
- [Mem0](https://github.com/mem0ai/mem0) - 为已有应用提取并检索对话中的偏好和事实，减少跨会话反复询问相同信息。
- [Memobase](https://github.com/memodb-io/memobase) - 从对话维护结构化用户画像和事件时间线，为个性化应用提供跨会话背景。
- [Memora (Microsoft)](https://github.com/microsoft/Memora) - 用记忆正文、概括和检索线索分开组织长期资料，供开发者研究细节保留与召回效果。
- [Memoria (Matrix Origin)](https://github.com/matrixorigin/Memoria) - 为 Agent 记忆提供检索、快照、分支与合并，让团队能够检查和修订记忆变更。
- [MemOS](https://github.com/MemTensor/MemOS) - 通过记忆 API 或宿主插件保存、检索用户信息和任务经验，为已有 Agent 补充长期上下文。
- [MemU](https://github.com/NevaMind-AI/memU) - 把个人会话经验整理为可检索的记忆和技能，供多个助手复用；不等同于多人知识权限平台。
- [OpenViking](https://github.com/volcengine/OpenViking) - 以目录、摘要和语义检索组织资料、记忆与技能，让 Agent 按需深入读取上下文。
- [ReMe (formerly MemoryScope)](https://github.com/agentscope-ai/ReMe) - 将对话和外部资料整理进可编辑的 Markdown 知识工作区，供 Agent 搜索、读取和更新。
- [Supermemory](https://github.com/supermemoryai/supermemory) - 通过 API 结合用户画像、记忆提取和资料检索，减少个性化助手的上下文拼装工作。
- [TeamAI CLI](https://github.com/Tencent/teamai-cli) - 通过 Git 分发团队技能、规则和 MCP 配置，并检索共享经验，减少不同 Agent 客户端之间的重复配置。
- [TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) - 通过代理采集会话并提炼记忆、技能与知识资产，为后续 Agent 任务检索和装配上下文。
- [Zep](https://help.getzep.com/concepts) - 将对话与业务资料整理成带时间关系的图，并为 Agent 检索和组装上下文；此处指托管服务。

## 评估与运行观测

追查执行过程，以案例比较改动，或为应用接入专门的内容检查；各类评分都需要业务标准。

- [Arize Phoenix](https://github.com/Arize-ai/phoenix) - 在可自行部署的平台中查看 AI 调用轨迹、维护数据集并比较评估实验。
- [Braintrust](https://www.braintrust.dev/docs/evaluate) - 把线上轨迹转为测试数据，以同一组任务和评分器比较提示词、模型与 Agent 版本。
- [Datadog Agent Observability](https://docs.datadoghq.com/llm_observability/) - 关联模型、工具调用和业务服务追踪，帮助团队在现有 Datadog 环境中排查 Agent 问题。
- [DeepEval](https://deepeval.com/docs/getting-started) - 以测试案例、指标和阈值检查 AI 回答及执行过程，将质量回归检查接入 Python 开发流程。
- [Grafana Cloud Agent Observability](https://grafana.com/docs/grafana-cloud/observe-and-act/agent-observability/introduction/) - 在 Grafana Cloud 中查看 Agent 会话、模型调用与在线评估；区别于单独部署 Tempo 和 Loki。
- [Langfuse](https://github.com/langfuse/langfuse) - 关联执行轨迹、提示词版本、测试案例和评分，帮助团队调试并持续改进 AI 应用。
- [LangSmith](https://docs.langchain.com/langsmith/observability) - 追踪 Agent 执行过程，以数据集、人工反馈和评估实验比较应用版本。
- [Llama Guard](https://github.com/meta-llama/PurpleLlama/tree/main/Llama-Guard4) - 对模型输入或回答进行内容风险分类，供应用决定放行、拒绝或人工复查；分类结果不代表业务授权。
- [New Relic AI Monitoring](https://docs.newrelic.com/docs/ai-monitoring/intro-to-ai-monitoring/) - 把受支持的模型、Agent 和工具调用纳入应用监控，关联耗时、错误和用量。
- [OpenLLMetry](https://github.com/traceloop/openllmetry) - 为受支持的模型、向量数据库和框架添加 OpenTelemetry 采集，并将轨迹送往观测后端。
- [OpenTelemetry eBPF Instrumentation (OBI)](https://github.com/open-telemetry/opentelemetry-ebpf-instrumentation) - 在受支持的 Linux 环境采集应用和模型相关遥测，减少逐应用埋点；支持范围需按版本核对。
- [Promptfoo](https://github.com/promptfoo/promptfoo) - 用配置和测试案例比较提示词、模型或 Agent，可接入 CI 并开展红队测试。
- [Ragas](https://github.com/vibrantlabsai/ragas) - 用评估指标与实验流程检查检索覆盖、回答依据和 Agent 行为，比较应用改动。
- [W&B Weave](https://docs.wandb.ai/weave) - 记录 AI 应用的调用与版本，并用数据集和评分器比较改动前后的表现。

## 模型接入与运行基础设施

统一模型入口、使用云平台，或为 Agent 配置执行环境；网关、托管 Agent 与沙箱不能互相等同。

- [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html) - 在 AWS 账户中接入托管基础模型与知识库，复用云平台的资源和访问管理。
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) - 托管 Claude 的多步执行循环、会话与环境，以事件流接收任务进展和产物；目前为 Beta。
- [Daytona](https://www.daytona.io/docs/) - 通过 API 管理项目沙箱、文件和进程，为编程 Agent 准备可继续使用的工作环境。
- [E2B](https://github.com/e2b-dev/E2B) - 按需创建 Linux 沙箱，让应用运行 Agent 生成的代码并取回输出和文件。
- [Gemini Enterprise Agent Platform (Vertex AI)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes) - 在 Google Cloud 中管理模型接入、部署和 Agent 运行；原 Vertex AI 平台的现行名称。
- [Helicone](https://docs.helicone.ai/getting-started/quick-start) - 通过网关或异步日志集中观察模型调用与用量，网关路线还能参与路由和请求控制。
- [LiteLLM](https://github.com/BerriAI/litellm) - 通过 SDK 或代理统一接入多家模型服务，并在代理中管理应用密钥、路由和用量。
- [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) - 在 Azure 中按项目组织模型、Agent、工具与评估资产，接入托管运行和观测能力。
- [OpenRouter](https://openrouter.ai/docs/quickstart) - 通过托管入口调用多家模型，配置供应商选择与备用模型，并集中查看用量。
- [Portkey AI Gateway](https://github.com/Portkey-AI/gateway) - 将模型调用的重试、备用路由和负载分配集中到网关；完整管理平台需另行评估。

## 协议与协作约定

统一接入、交接或记录格式，需由具体工具实现支持。

- [A2A](https://a2a-protocol.org/latest/) - 定义独立 Agent 服务之间的能力发现、消息、任务状态与产物交接方式。
- [Agent Skills](https://agentskills.io/specification) - 将工作步骤、参考资料和脚本打包为可按需加载的技能，便于复用团队方法。
- [AGENTS.md](https://agents.md/) - 用仓库中的 Markdown 文件向编码助手提供项目背景、开发约定和检查命令。
- [Model Context Protocol（MCP）](https://modelcontextprotocol.io/) - 为 Agent 应用连接工具、数据资源和提示模板提供共同协议。
- [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai) - 约定模型、Agent 与工具调用的追踪和指标字段，帮助团队统一观测口径。

## 实践与学习资源

### 实践指南

围绕工具调用、团队配置、长任务和人工介入建立可重复的方法。

- [Claude Code Project Settings](https://code.claude.com/docs/en/settings) - 参考项目级设置与个人覆盖的组织方式，将团队配置纳入版本管理并核对生效范围。
- [Claude Code Subagents](https://code.claude.com/docs/en/sub-agents) - 了解如何将边界清楚的任务交给独立上下文，并配置工具、权限与结果交接。
- [Context Compaction (Anthropic)](https://platform.claude.com/docs/en/build-with-claude/compaction) - 了解长任务如何压缩对话并继续工作，以及哪些进度和证据仍需另外保存。
- [Function Calling (OpenAI)](https://developers.openai.com/api/docs/guides/function-calling) - 学习模型请求工具、应用执行和结果回传的流程，为业务接口设计明确的调用边界。
- [Human-in-the-loop (LangChain)](https://docs.langchain.com/oss/python/langchain/human-in-the-loop) - 学习如何在工具执行前暂停、接收批准或修改，再用持久化状态继续任务。
- [Prompt Caching (Anthropic)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) - 了解如何组织稳定的提示词前缀并核对缓存命中，优化重复背景的处理开销。
- [Workload Identity Federation (Google Cloud)](https://docs.cloud.google.com/iam/docs/workload-identity-federation) - 学习用运行环境的身份换取短期访问凭据，减少 Agent 服务部署时分发长期密钥的工作。

### 教程与研究

用于团队共学和形成改进假设；论文结论应结合原实验条件理解。

- [ADE Failure Registry](https://github.com/ADE-standard/ade-failure-registry) - 通过带来源的 Agent 失败案例寻找设计评审与复盘问题；案例分类不等于行业标准。
- [Agent Learning Paths (Pauldest)](https://github.com/Pauldest/awesome-ai-agent/tree/main/paths) - 用逐步扩展的编码与系统工程练习组织学习，适合团队制定实践提纲。
- [Agent-Learning-Hub（kngwyc3）](https://github.com/kngwyc3/Agent-Learning-Hub) - 基于 Datawhale 路线补充练习和笔记，从工具调用逐步学习检索、记忆与 Agent 开发。
- [Anthropic 评估指南](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) - 介绍如何定义成功标准、准备测试案例，并选择代码、人工或模型评分方式。
- [awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) - 为使用助手和开发 Agent 提供不同的中文学习路线，配有练习与成果交付要求。
- [Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657) - 分析多 Agent 的任务设定、协作和验证失败，配套 [MAST](https://github.com/multi-agent-systems-failure-taxonomy/MAST) 提供分类与研究材料。

### 更多资源索引

用于继续发现候选；目录收录不代表已验证其中所有项目。

- [Awesome Agent Skills (VoltAgent)](https://github.com/VoltAgent/awesome-agent-skills) - 查找面向开发、文档和测试等任务的技能项目，借鉴团队可复用的操作方法。
- [Awesome AI Agent Papers (VoltAgent)](https://github.com/VoltAgent/awesome-ai-agent-papers) - 按协作、记忆、工具和评估等主题寻找论文，再回到原研究核对方法与条件。
- [Awesome MCP Servers (appcypher)](https://github.com/appcypher/awesome-mcp-servers) - 按能力比较不同作者的 MCP 服务实现，以及相关宿主和管理工具。
- [Awesome MCP Servers (punkpeye)](https://github.com/punkpeye/awesome-mcp-servers) - 按用途寻找连接文件、数据库和业务系统的 MCP 服务实现。
- [Awesome Official MCP Servers (MCPStar)](https://github.com/MCPStar/Awesome-Official-MCP-Servers) - 优先寻找厂商维护的 MCP 仓库、服务和文档入口，采用前仍需核对维护主体。

## 贡献

请阅读[中文贡献指南](CONTRIBUTING.md)或[英文贡献指南](CONTRIBUTING.en.md)，通过 Issue 或 Pull Request 推荐项目、补充使用场景、修正介绍和失效链接。中英文清单保持相同条目与分类；不熟悉另一种语言时，可以注明需要翻译协助。

## 许可

本清单采用 [CC0 1.0 Universal](LICENSE)。各收录项目、商标和外部资料遵循其各自许可与条款。
