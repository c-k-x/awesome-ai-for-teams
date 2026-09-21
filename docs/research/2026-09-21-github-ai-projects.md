# GitHub AI 项目补充调研（2026-09-21）

本轮按 **1,000 stars 以上、不设收录星数上限** 的要求寻找可补充项目，经审阅保留新增 **30 个条目**，同步到[中文清单](../../README.md)和[英文清单](../../README.en.md)。清单由 136 项增至 166 项；未保留的 13 项已从双语清单移除，空的“浏览器操作与网页自动化”分类一并移除。

## 时间与范围

- 开始检索：`2026-09-21T09:47:38+08:00`。
- 范围调整：`2026-09-21T09:50:35+08:00`，从 1,000–50,000 stars 扩展为 1,000 stars 以上。
- 分页检索完成：`2026-09-21T09:59:32+08:00`。
- 表中 stars 为本轮 GitHub API 读取快照，读取时间位于上述检索开始至 `2026-09-21T10:00:21+08:00` 之间，不代表后续实时数值。
- 广泛检索排除 fork 和已归档仓库；另对重点候选直接读取仓库 API，检查归档、迁移和星数。
- 广泛检索去重后得到 **6,591 个仓库候选**；重点获取了 **71 个仓库**的元数据，新增条目逐项核对维护者 README，必要时补充官方产品资料。
- 这些是关键词和 Topics 命中的仓库，不等于已经确认与 AI 相关的项目总数，也不等于全部经过人工逐项审阅。GitHub 标签并不完备，本轮不声称穷尽所有 AI 项目。
- 本轮未安装或实测候选产品；以下用途与边界均为官方资料的**转述**，收录判断依据本仓库的[贡献指南](../../CONTRIBUTING.md)。

## 检索方式

使用 GitHub `GET /search/repositories`，按 stars 降序，每页 100 条。超过 1,000 条的查询继续拆分星数区间，再分页拉取并按仓库名称去重；遇到 `incomplete_results=true` 的响应重试。GitHub 的单次检索结果上限与不完整响应定义见[官方文档](https://docs.github.com/en/rest/search/search#about-search)。

下面每个表达式均附加 `stars:>=1000 fork:false archived:false`；实际执行时拆分星数区间。50,000 以上另行补查，也核查了 10,000,000 stars 以上没有仓库，避免内部查询区间产生实际遗漏。

| 检索表达式 | 拉取记录数（不同表达式之间存在重复） |
| --- | ---: |
| `ai in:name,description` | 3,461 |
| `llm in:name,description` | 942 |
| `agent in:name,description` | 2,135 |
| `rag in:name,description` | 179 |
| `topic:machine-learning` | 1,448 |
| `topic:artificial-intelligence` | 428 |
| `topic:mcp` | 619 |
| `topic:generative-ai` | 183 |

共完成 33 个分段查询，合计拉取 9,395 条记录，去重后 6,591 条。每个分段的实际拉取数量均与该次返回的 `total_count` 一致；检索期间星数和索引仍可能变化。

## 已新增条目

项目链接指向维护者仓库，既是清单入口，也是 README 核验来源。没有将 stars 排名、厂商性能宣传或开源声明本身当作收录理由。

| 项目 | Stars 快照 | 分类 | 收录用途与边界（转述） |
| --- | ---: | --- | --- |
| [Bifrost](https://github.com/maximhq/bifrost) | 8,199 | 模型接入 | 通过统一网关接入多家模型，集中配置备用路由、负载分配和调用日志；集群与部分治理能力属于企业版。 |
| [Aider](https://github.com/Aider-AI/aider) | 49,086 | Agent 助手、会话与交接 | 在终端中结合代码库映射与 Git 修改项目，并接入 lint 和测试反馈，便于团队检查和回退 AI 生成的变更。 |
| [OpenHands Agent Canvas](https://github.com/OpenHands/OpenHands) | 88,653 | Agent 助手、会话与交接 | 在可自托管的控制台中管理编码 Agent 会话，切换本地或远程执行后端，并配置定时和事件触发的开发任务。 |
| [Tabby](https://github.com/TabbyML/tabby) | 33,881 | Agent 助手、会话与交接 | 自行部署代码补全和问答服务，结合代码仓库与内部文档，为团队编辑器提供共同的开发背景。 |
| [Meetily](https://github.com/Zackriya-Solutions/meetily) | 30,973 | 聊天与会议接入 | 在本机录制和转写会议，并用可选的本地或云端模型生成摘要；社区版与 Pro 的导出和团队功能需分别核对。 |
| [Vexa](https://github.com/Vexa-ai/vexa) | 2,805 | 聊天与会议接入 | 让机器人加入 Google Meet、Teams 或 Zoom，通过 API 提供实时转写，供团队接入会议纪要和后续知识处理。 |
| [AgentTeams](https://github.com/agentscope-ai/AgentTeams) | 5,650 | 共享协作空间 | 在 Matrix 房间中组织人与不同运行环境的 Agent 协作，共享文件并查看任务过程；由平台管理各 Agent 容器。 |
| [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | 76,865 | 共享协作空间 | 将文档、Wiki 和项目放在共同工作区，结合 AI 搜索与写作辅助团队整理资料；自托管与企业功能需按部署版本核对。 |
| [Open WebUI](https://github.com/open-webui/open-webui) | 152,645 | 共享协作空间 | 在自托管界面中连接模型、知识库与工具，让成员通过共享频道和笔记协作，并配置用户组与访问权限。 |
| [Backlog.md](https://github.com/MrLesk/Backlog.md) | 6,794 | 任务委派与交付跟进 | 把任务、依赖和验收条件保存为仓库中的 Markdown，通过 CLI、MCP 和看板让人与编码 Agent 共同维护交付计划。 |
| [Multica](https://github.com/multica-ai/multica) | 50,899 | 任务委派与交付跟进 | 把任务单分配给已有编码 Agent，在自有运行环境执行，并将进展、阻塞和结果交回同一任务单供团队审阅。 |
| [PR-Agent](https://github.com/The-PR-Agent/pr-agent) | 13,086 | 任务委派与交付跟进 | 通过 CLI、CI 或代码平台事件生成 PR 说明、审阅意见和修改建议；现为社区维护项目，区别于 Qodo 商业产品。 |
| [53AI Hub](https://github.com/53AI/53AIHub) | 4,658 | 共享资料与助手 | 将不同平台的 Agent、提示词和 AI 工具集中发布到团队门户，管理分组与访问；组织架构集成等功能依版本而异。 |
| [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) | 66,265 | 共享资料与助手 | 在工作区中组织文档问答、Agent 和工具，并选择本地或云端模型；多人账户与权限管理需使用 Docker 版。 |
| [LibreChat](https://github.com/danny-avila/LibreChat) | 44,490 | 共享资料与助手 | 在可自托管的聊天平台中统一使用多家模型，将带工具和文件检索的助手共享给指定成员与用户组。 |
| [MaxKB](https://github.com/1Panel-dev/MaxKB) | 22,848 | 共享资料与助手 | 通过文档导入、知识检索和工作流构建内部问答助手，并嵌入已有业务系统供同事使用。 |
| [Onyx](https://github.com/onyx-dot-app/onyx) | 32,182 | 共享资料与助手 | 连接组织资料并共享问答与自定义 Agent；标准部署提供资料同步和检索，Lite 与企业版的能力需分别核对。 |
| [PandaWiki](https://github.com/chaitin/PandaWiki) | 10,276 | 共享资料与助手 | 将产品文档、技术资料与 FAQ 发布为 Wiki，结合 AI 创作、搜索和问答，并接入团队聊天入口。 |
| [WeKnora](https://github.com/Tencent/WeKnora) | 28,035 | 共享资料与助手 | 同步飞书、GitLab 等资料，在共享知识库中检索问答，并将文档整理为可编辑、有修订记录的 Wiki。 |
| [Activepieces](https://github.com/activepieces/activepieces) | 24,617 | 应用开发与流程编排 | 通过可视化流程连接 AI、业务应用和人工审批节点，复用可扩展的连接组件；企业功能另行提供。 |
| [Haystack](https://github.com/deepset-ai/haystack) | 26,563 | 应用开发与流程编排 | 用可替换的 Python 组件组合资料索引、检索与 Agent 流程，明确控制上下文准备、路由和生成步骤。 |
| [Mastra](https://github.com/mastra-ai/mastra) | 28,212 | 应用开发与流程编排 | 用 TypeScript 构建带工具、记忆和评估的 Agent，将多步工作配置为可暂停并等待人工输入的流程。 |
| [Sim](https://github.com/simstudioai/sim) | 29,687 | 应用开发与流程编排 | 在工作区中结合可视化流程、共享文件和知识库构建 Agent，连接业务系统并查看运行日志；聊天服务由 Sim 托管。 |
| [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) | 15,429 | 执行环境与托管运行 | 通过统一 API 管理 Docker 或 Kubernetes 沙箱，为 Agent 提供命令执行、文件操作和代码运行环境。 |
| [LangWatch](https://github.com/langwatch/langwatch) | 4,843 | 评估、观测与内容检查 | 结合调用追踪、Agent 模拟测试和评估检查应用表现，并观察编码助手会话与用量；企业模块需另行许可。 |
| [MLflow](https://github.com/mlflow/mlflow) | 28,058 | 评估、观测与内容检查 | 在共同平台记录 Agent 调用轨迹、评估数据与提示词版本，帮助团队比较实验、定位回归并观察线上表现。 |
| [AG-UI](https://github.com/ag-ui-protocol/ag-ui) | 15,961 | 协议与协作约定 | 用事件协议连接 Agent 后端与用户界面，传递流式消息、工具活动和状态变化，并支持人工输入。 |
| [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) | 26,315 | 实践指南 | 通过上下文管理、状态持久化、工具调用和人工交互等工程原则，帮助团队设计与审查 Agent 应用。 |
| [MEX](https://github.com/mex-memory/mex) | 1,631 | 共享规则与经验 | 将架构、决策和交接记录保存在代码仓库中，供同事与编码 Agent 检索复用；通过 Git 分享，各自维护本地索引。 |
| [skillshare](https://github.com/runkids/skillshare) | 2,682 | 共享规则与经验 | 从统一来源同步多种 AI 编程工具的技能、规则与 Agent 定义，并通过项目配置和团队 Git 仓库分发。 |

AppFlowy 的 AI 搜索、写作和共同工作区用途另参考[官方产品页](https://appflowy.com/)。

## 本次审阅未保留

以下编号对应团队关联审阅表；仅记录本次选择结果，不作为已收录条目。保留编号为：1, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 34, 35, 38, 39, 40, 41, 42。

| 原编号 | 项目 | 处理结果 |
| ---: | --- | --- |
| 2 | [Ollama](https://github.com/ollama/ollama) | 按本次审阅选择移出清单。 |
| 3 | [vLLM](https://github.com/vllm-project/vllm) | 按本次审阅选择移出清单。 |
| 4 | [Firecrawl](https://github.com/firecrawl/firecrawl) | 按本次审阅选择移出清单。 |
| 5 | [OpenDataLoader PDF](https://github.com/opendataloader-project/opendataloader-pdf) | 按本次审阅选择移出清单。 |
| 6 | [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 按本次审阅选择移出清单。 |
| 12 | [Sokuji](https://github.com/kizuna-ai-lab/sokuji) | 按本次审阅选择移出清单。 |
| 19 | [Next AI Draw.io](https://github.com/DayuanJiang/next-ai-draw-io) | 按本次审阅选择移出清单。 |
| 29 | [RAGFlow](https://github.com/infiniflow/ragflow) | 按本次审阅选择移出清单。 |
| 31 | [CopilotKit](https://github.com/CopilotKit/CopilotKit) | 按本次审阅选择移出清单。 |
| 33 | [Langflow](https://github.com/langflow-ai/langflow) | 按本次审阅选择移出清单。 |
| 36 | [Browser Use](https://github.com/browser-use/browser-use) | 按本次审阅选择移出清单。 |
| 37 | [Stagehand](https://github.com/browserbase/stagehand) | 按本次审阅选择移出清单。 |
| 43 | [Awesome GitHub Copilot](https://github.com/github/awesome-copilot) | 按本次审阅选择移出清单。 |

## 去重与暂缓

| 项目 | Stars 快照 | 处理依据 |
| --- | ---: | --- |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 59,253 | 现有清单已收录，本次不重复添加。 |
| [continuedev/continue](https://github.com/continuedev/continue) | 35,963 | README 明确说明不再积极维护；虽未标记 archived，本次暂缓新增。 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 55,471 | GitHub API 显示 archived=true，本次暂缓新增。 |
| [invariantlabs-ai/invariant](https://github.com/invariantlabs-ai/invariant) | 459 | 459 stars，低于本次 1,000 stars 门槛。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 156,635 | 现有清单已收录，本次不重复添加。 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 185,951 | 现有清单已收录，本次不重复添加。 |
| [traceloop/openllmetry](https://github.com/traceloop/openllmetry) | 7,441 | 现有清单已收录，本次不重复添加。 |

`coderabbitai/ai-pr-reviewer` 的仓库 API 读取未成功，本轮不将其写入清单；无法仅凭这一结果断言它已删除或归档。

## 仍待深入核验的重点候选

以下已获取元数据，但尚未完成可收录程度的审阅；部分已阅读 README。保留为后续调查入口，不代表不推荐，也不因高星数直接加入。

| 候选仓库 | Stars 快照 | 下一步核验重点 |
| --- | ---: | --- |
| [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) | 29,542 | 调研报告方向候选；后续与搜索工具一起审阅分类。 |
| [Blaizzy/mlx-audio](https://github.com/Blaizzy/mlx-audio) | 7,919 | 语音模型组件；本轮先补可直接用于团队会议的产品。 |
| [comet-ml/opik](https://github.com/comet-ml/opik) | 22,171 | 评估与观测候选；本轮先补 MLflow 与 LangWatch。 |
| [ComposioHQ/composio](https://github.com/ComposioHQ/composio) | 30,266 | 已阅读 README；需另行细化托管工具服务与 SDK 的收录边界。 |
| [guardrails-ai/guardrails](https://github.com/guardrails-ai/guardrails) | 7,436 | README 公告验证器分发和托管推理迁移；接入方式需按迁移后的资料复核。 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 74,937 | 模型微调方向；本轮重点为协作、应用开发和运行，未扩展训练分类。 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 39,779 | 图检索方向的候选；本轮优先补充完整文档检索流程。 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 30,886 | Agent 操作 Office 文档候选；与文档解析不同，需单独核验编辑和输出边界。 |
| [ItzCrazyKns/Vane](https://github.com/ItzCrazyKns/Vane) | 36,885 | 原 Perplexica 已更名；后续按调研与搜索用途单独核验。 |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | 37,406 | 浏览器工具候选；本轮未保留浏览器自动化分类，后续需重新评估团队用途。 |
| [NirDiamant/RAG_Techniques](https://github.com/NirDiamant/RAG_Techniques) | 29,561 | RAG 教程候选；需逐例核对可运行性和依赖版本。 |
| [OpenBMB/ChatDev](https://github.com/OpenBMB/ChatDev) | 34,352 | 多 Agent 开发候选；需核验当前产品形态及与已有编排工具的差异。 |
| [oraios/serena](https://github.com/oraios/serena) | 29,652 | 代码语义检索与编辑候选；需单独核验语言覆盖和现有助手的接入方式。 |
| [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | 3,762 | 组织检索候选；连接器和权限同步边界仍待深入核验。 |
| [pydantic/pydantic-ai](https://github.com/pydantic/pydantic-ai) | 20,074 | Agent 框架候选；本轮保留框架类别的规模，未将所有框架都加入。 |
| [rowboatlabs/rowboat](https://github.com/rowboatlabs/rowboat) | 17,929 | 办公助手候选；仍需区分个人记忆与多人共享工作能力。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 52,250 | 文档处理与应用开发候选；需区分开源组件与托管产品，已有 LlamaParse 条目。 |
| [Skyvern-AI/skyvern](https://github.com/Skyvern-AI/skyvern) | 23,044 | 浏览器自动化候选；本轮未保留浏览器自动化分类，后续需重新评估团队用途。 |
| [SWE-agent/SWE-agent](https://github.com/SWE-agent/SWE-agent) | 20,371 | 自动修复候选；需核验维护状态、推荐入口和交付流程。 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | 83,981 | 网页资料准备候选；本轮未保留网页抓取工具，后续需明确团队资料准备场景。 |
| [yamadashy/repomix](https://github.com/yamadashy/repomix) | 28,432 | 代码上下文准备候选；后续与语义代码检索一起审阅分类。 |

## 描述核验要点

- 不把多人功能等同于桌面版默认功能：AnythingLLM 的多人账户与权限属于 Docker 版。
- 不混用社区版、云服务与企业版能力：Meetily、Onyx、Bifrost、Activepieces、53AI Hub、AppFlowy 和 LangWatch 均保留必要边界；Sim 的聊天服务由厂商托管。
- 采用迁移后的仓库入口：PR-Agent 为 `The-PR-Agent/pr-agent`，OpenHands 为 `OpenHands/OpenHands`，OpenSandbox 为 `opensandbox-group/OpenSandbox`。
- 不把计划功能写成已交付能力：Vexa 只描述已提供的会议机器人与转写用途；不加入尚待验证的 Jitsi 支持。
- MEX 的共享依赖正常 Git 流程，本地 Hub 和索引不等于多人托管服务。
- 本清单同时接纳可自建产品与开发组件，不统一称其为无限制开源。Open WebUI、Multica、53AI Hub 等项目的具体许可仍以各仓库文件为准。

## 文档验证

- 中英文各 166 项，新增 30 项；原有条目全部保留。
- 按分类逐项比较链接与顺序，检查英文名排序、重复项和 UTF-8 文本。
- 检查目录锚点、相对链接和列表空行；新增 GitHub 仓库链接均已通过仓库 API 核验。
- 运行 `git diff --check`。本次仅修改 Markdown，仓库没有应用构建、lint 或单元测试配置。
