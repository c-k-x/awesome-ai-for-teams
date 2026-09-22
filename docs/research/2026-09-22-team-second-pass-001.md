# 团队价值快速二筛 · 第 1 批（200 / 1,426）

核查日期：2026-09-22（Asia/Shanghai）。官方 API 查询时间见 CSV 的 live_checked_at（UTC）。

本批从已完成源文核验的 1,426 个候选中，按团队功能信号排序后逐项阅读前 200 个的已有核验记录；只对入围 15 个补查官方仓库元数据、README 和根许可证。其余 185 个没有在本批重新联网核验。自动排序不是自动淘汰，也不是产品质量评分。另有 1,226 个候选尚未二筛；此前 4,099 个仅做简介初筛的项目不在本批范围内。

未执行被审项目、未安装或部署，功能来自官方文档而非实测。15 个入围项目均未归档；pushed_at 仅表示仓库推送活动，不代表稳定发行或维护承诺。根许可证不覆盖所有依赖、子模块及托管服务。与主 README 按项目名和仓库路径比对未发现同项目；相邻产品用途仍可能重叠。主清单尚未新增，以下均供用户审阅。

## 分类结果

| 分类 | 数量 | 处理方式 |
| --- | ---: | --- |
| 建议审阅 | 15 | 团队功能明确；已补查官方仓库状态、README 与根许可证，进入用户审阅短名单。 |
| 商业或许可边界待核 | 30 | 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 工程组件另列 | 43 | 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 方法技能另列 | 27 | 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 团队直接性不足 | 26 | 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 保留待深核 | 59 | 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |

## 建议优先审阅的 15 个

介绍为英文；团队用途和限制为中文转述。ID 沿用全量库存固定编号，便于后续确认，非推荐名次。星数为本批联网快照。

| ID | 项目 / Stars | Description (EN) | 跟 team 的关系 | 标签 | 根许可证 / 最近推送（UTC） | 限制 |
| ---: | --- | --- | --- | --- | --- | --- |
| 966 | [Omnigent](https://github.com/omnigent-ai/omnigent) · 10,135 | A multi-user workspace for sharing live agent sessions, co-driving work, and forking conversations across machines. | 成员受邀加入、共享会话、共同操作或分叉继续任务，可连接组织身份登录，直接支持结对与交接。 | ai-native, collaboration, coding, handoff | [Apache-2.0](https://github.com/omnigent-ai/omnigent/blob/main/LICENSE) / 2026-09-21 | co-drive 在原拥有者机器执行，必须明确共享权限；本地服务可达性与 OIDC 需正确部署。 |
| 1302 | [Yuxi](https://github.com/xerrors/Yuxi) · 7,158 | A self-hosted multi-tenant platform for agents and knowledge retrieval. | 按租户、部门和成员共享知识库、智能体与技能，并管理权限和审批。 | ai-native, knowledge, teams | [MIT](https://github.com/xerrors/Yuxi/blob/main/LICENSE) / 2026-09-21 | 本体 MIT；组合部署组件各有许可证，未实测隔离。 |
| 577 | [Rowboat](https://github.com/rowboatlabs/rowboat) · 17,936 | A shared workspace where teammates bring their own local agents, context, and model accounts into collaborative rooms. | Space 共用线程、文件、白板与变更历史；各成员自己的智能体处理私有背景后将产物带回团队审阅。 | ai-native, collaboration, knowledge, handoff | [Apache-2.0](https://github.com/rowboatlabs/rowboat/blob/main/LICENSE) / 2026-09-21 | 本地私有记忆和共享产物有边界，但不据 README 宣称技术上绝无泄漏；模型联网由配置决定。 |
| 2124 | [OpenAgents Workspace](https://github.com/openagents-org/openagents) · 4,128 | A shared workspace for human-agent threads, files, and browser activity. | 真人同事与多个智能体共用文件、会话和浏览器，可用链接邀请队友。 | ai-native, collaboration | [Apache-2.0](https://github.com/openagents-org/openagents/blob/develop/LICENSE) / 2026-09-21 | 区别于 xlang 同名平台；headless Goose 的审批模式会转 auto，需注意运行时差异。 |
| 2263 | [Cumora](https://github.com/yetone/cumora) · 3,831 | Team chat where people and persistent AI agents share conversations, task boards, and calendars. | 真人与智能体使用同一成员表、群聊、私信、看板和日历，可以认领任务并延续记忆。 | ai-native, collaboration, agents, tasks | [MIT](https://github.com/yetone/cumora/blob/main/LICENSE) / 2026-09-21 | iOS beta；Android 未发布需自建；BYOA 各引擎沙箱边界不同，不能都描述成默认隔离。 |
| 5257 | [Commonly](https://github.com/Team-Commonly/commonly) · 1,345 | A shared workspace where people and agents coordinate through persistent rooms, tasks, memory, and artifacts. | 人和智能体共用 pod、线程、任务板与知识；GitHub 双向任务同步、访问控制和审计记录。 | ai-native, collaboration, knowledge, self-hosted | [Apache-2.0](https://github.com/Team-Commonly/commonly/blob/main/LICENSE) / 2026-09-20 | 官方注明项目早期；本地 Compose 与公共 Kubernetes 部署边界不同，未实测。 |
| 4868 | [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) · 1,486 | A collaborative document-intelligence platform with annotation, citation graphs, and agents. | 团队共享标注和引用依据，按语料权限、版本和讨论共同复核。 | ai-native, document-intelligence, collaboration, annotation | [MIT](https://github.com/Open-Source-Legal/OpenContracts/blob/main/LICENSE) / 2026-09-19 | AI 依赖底层标注质量，不保证法律判断；未实测规模和隔离。 |
| 4853 | [OmniBox](https://github.com/import-ai/omnibox) · 1,495 | An AI knowledge hub with capture, document indexing, team permissions, and sharing. | 团队可在多租户知识空间收集资料并共享问答与文档。 | ai-native, knowledge-management, collaboration, rag | [Apache-2.0](https://github.com/import-ai/omnibox/blob/main/LICENSE) / 2026-09-17 | RSS 仍规划；托管服务和自部署能力需实际配置验证。 |
| 6316 | [Foxel](https://github.com/DrizzleTime/Foxel) · 1,061 | Private cloud file management with semantic search, RBAC, and sharing. | 团队统一多存储文件，按路径分配权限并审计操作。 | ai-assisted, file-management, collaboration | [MIT](https://github.com/DrizzleTime/Foxel/blob/main/LICENSE) / 2026-09-18 | 公开demo凭据不用于部署；语义权限一致性未测。 |
| 562 | [DocsGPT](https://github.com/arc53/DocsGPT) · 18,282 | A private AI knowledge platform with document ingestion, agents, and team-scoped sharing controls. | 团队把文档和会议资料整理成可检索知识，通过成员角色和团队范围共享给助手使用。 | knowledge, agents, collaboration, self-hosted | [MIT](https://github.com/arc53/DocsGPT/blob/main/LICENSE) / 2026-09-21 | 不采纳无幻觉和完全隐私保证；外部模型是否接收数据由配置决定。 |
| 400 | [Kotaemon](https://github.com/Cinnamon/kotaemon) · 25,776 | A customizable document-QA application with multi-user login, private and public collections, and shared chats. | 成员区分个人与公共文档集合，共享有价值的问答，团队可扩展自己的 RAG 管线。 | knowledge, rag, collaboration, self-hosted | [Apache-2.0](https://github.com/Cinnamon/kotaemon/blob/main/LICENSE.txt) / 2026-07-14 | 未实测权限粒度与共享行为；外部模型或解析服务需单独配置。 |
| 3359 | [Bionic](https://github.com/bionic-gpt/bionic-gpt) · 2,371 | A self-hosted AI workspace and agent runtime with team permissions, reusable skills, and audit controls. | 内部 AI 团队统一接入批准的模型、资料和工具，向成员提供带权限、使用控制和审计的工作区。 | agents, knowledge, governance, self-hosted | [Apache-2.0](https://github.com/bionic-gpt/bionic-gpt/blob/main/LICENCE) / 2026-09-21 | 社区软件与付费部署支持分开；离线能力取决于采用本地模型和服务，未部署验证。 |
| 4391 | [Relaticle](https://github.com/relaticle/relaticle) · 1,694 | A self-hosted CRM with MCP tools, custom fields, and isolated workspaces. | 销售和业务团队可共享 CRM 数据，并按工作空间限制代理访问。 | ai-native, crm, mcp, collaboration | [AGPL-3.0](https://github.com/relaticle/relaticle/blob/main/LICENSE) / 2026-09-21 | AGPL；五层授权和生产级为文档声明，未实测。 |
| 5309 | [Bedrock Chat](https://github.com/aws-samples/bedrock-chat) · 1,326 | An AWS chat platform with knowledge bots, shared bot stores, and agent automation. | 组织可共享定制知识bot，并用Cognito组控制创建权限。 | enterprise-ai, aws, rag, collaboration | [MIT-0](https://github.com/aws-samples/bedrock-chat/blob/v3/LICENSE) / 2026-09-15 | V2→V3需迁移；多租户指bot元数据过滤，不直接等同独立客户强隔离。 |
| 6164 | [Lody](https://github.com/LodyAI/Lody) · 1,096 | A shared coding-agent workspace where teammates inspect conversations, dispatch work, and review changes across devices. | 同事共看完整会话、执行状态、文件与 diff，追加指令；共享智能体预设并在跨设备界面审批权限。 | ai-native, collaboration, coding, review | [Apache-2.0](https://github.com/LodyAI/Lody/blob/main/LICENSE) / 2026-09-21 | 机器默认私有，由所有者共享；文档工作区与整个工作区 local-first 仍属未来计划，不写成已支持。 |

## 入围证据

README 均重新获取并与前轮缓存比较；功能依据未发生实质变化。OpenAgents 的变化仅为合作方图片链接。CSV 保存了读取时间、文档 URL 和内容 SHA-256。

| ID | 官方依据 | 核验位置 |
| ---: | --- | --- |
| 966 | [README](https://github.com/omnigent-ai/omnigent/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/omnigent-ai/omnigent) | README Collaborate with your team L486-540 |
| 1302 | [README](https://github.com/xerrors/Yuxi/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/xerrors/Yuxi) | README L18–25、280–295：多人工作区、权限及运行管理。 |
| 6164 | [README](https://github.com/LodyAI/Lody/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/LodyAI/Lody) | README L33-36、L62-72、L127-144 |
| 400 | [README](https://github.com/Cinnamon/kotaemon/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/Cinnamon/kotaemon) | README Introduction、For developers L69 |
| 3359 | [README](https://github.com/bionic-gpt/bionic-gpt/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/bionic-gpt/bionic-gpt) | README What Bionic Provides、Security and Control、Commercial Support |
| 577 | [README](https://github.com/rowboatlabs/rowboat/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/rowboatlabs/rowboat) | README L37-39、Spaces L54-82、隐私边界 L127-136、自建 L277 |
| 2124 | [README](https://github.com/openagents-org/openagents/blob/develop/README.md) · [仓库元数据](https://api.github.com/repos/openagents-org/openagents) | README L93–96、356–368：实时人机协作与邀请。 |
| 562 | [README](https://github.com/arc53/DocsGPT/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/arc53/DocsGPT) | README Key Features、已完成项 L59-62 |
| 4853 | [README](https://github.com/import-ai/omnibox/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/import-ai/omnibox) | README user/team、permissions、sharing、multi-tenancy 和 WeChat capture。 |
| 4868 | [README](https://github.com/Open-Source-Legal/OpenContracts/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/Open-Source-Legal/OpenContracts) | README corpus 版本/权限、人工标注、讨论中 @agent、API/MCP。 |
| 5309 | [README](https://github.com/aws-samples/bedrock-chat/blob/v3/README.md) · [仓库元数据](https://api.github.com/repos/aws-samples/bedrock-chat) | README bot store、RAG、group gating和共享KB过滤。 |
| 6316 | [README](https://github.com/DrizzleTime/Foxel/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/DrizzleTime/Foxel) | README语义搜索、RBAC/path规则和sharelinks。 |
| 4391 | [README](https://github.com/relaticle/relaticle/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/relaticle/relaticle) | README workspace-scoped 授权、CRM 工具、活动历史和管道分析。 |
| 5257 | [README](https://github.com/Team-Commonly/commonly/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/Team-Commonly/commonly) | README L27-35、L239-268、L351 |
| 2263 | [README](https://github.com/yetone/cumora/blob/main/README.md) · [仓库元数据](https://api.github.com/repos/yetone/cumora) | README L7、L18-25、L61；官方 LICENSE |

## 其余 185 个逐项处理记录

暂未进入短名单不代表永久排除。每行保留团队价值、限制与分流理由；完整英文介绍、标签和初轮证据见同名 CSV。

| ID | 项目 | 本批结论 | 团队价值依据 | 未优先推荐的原因 / 下一步 |
| ---: | --- | --- | --- | --- |
| 5085 | [Agor](https://github.com/preset-io/agor) | 商业或许可边界待核 | 实时光标、评论、共享会话和环境；分支权限、个人凭据、费用记录和共享知识库。 | README 明确 BSL 1.1 source-available，当前不能标为 OSI 开源；未部署实测。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 421 | [PentAGI](https://github.com/vxcontrol/pentagi) | 保留待深核 | 安全团队管理用户、记录调查结果并观察测试过程，成员令牌继承角色权限以交接工作。 | 只核验平台范围，未执行测试；不背书完全隔离、AGI 或自动发现效果。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1275 | [ai-memory](https://github.com/akitaonrails/ai-memory) | 保留待深核 | 成员在同一服务器共享项目经验，个人交接保持私有，支持身份与审计。 | 不将竞品比较作为事实；需配置多用户与数据作用域。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2358 | [GoClaw](https://github.com/nextlevelbuilder/goclaw) | 商业或许可边界待核 | 服务器版为团队隔离成员会话和工作区，集中管理代理与渠道接入。 | Lite 桌面版无 RBAC/多租户；CC BY-NC，不应写成可无条件商业使用。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 2631 | [Google Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp) | 工程组件另列 | 团队集中接入文档、表格、邮件和日历，按用户 OAuth 与工具权限调用。 | 社区项目非 Google 官方；集中部署仍需自行配置 OAuth 与应用授权。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2683 | [Kite](https://github.com/kite-org/kite) | 保留待深核 | 运维团队按集群权限共享监控与排错，人工确认代理写操作并保留审计。 | 默认清单给 cluster-admin，chart 为评估配置；不能称默认生产最小权限。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 190 | [Agno](https://github.com/agno-agi/agno) | 工程组件另列 | 平台团队把智能体作为服务运行，按角色和租户分配权限，并统一管理人工审批与执行记录。 | SDK、AgentOS runtime 和 UI 是不同层，不把框架本身说成开箱即用业务应用。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1155 | [Worktrunk](https://github.com/max-sixty/worktrunk) | 团队直接性不足 | 工程成员用一致工作区流程隔离 AI 修改，方便测试和交接分支。 | worktree 不保证最终合并无冲突；不是多用户 SaaS。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1672 | [ClawTeam](https://github.com/HKUDS/ClawTeam) | 保留待深核 | 多个真人可共享一个代理团队，通过命名空间区分成员并追踪任务。 | 多用户命名空间不等于完整身份鉴权；自动研究效果未验证。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2611 | [MrDoc](https://github.com/zmister2016/MrDoc) | 保留待深核 | 小团队按项目分配协作权限，集中维护文档并用 AI 辅助写作。 | 本次核验根文档，未确认各版 AI 能力和商业授权范围。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 641 | [Coder](https://github.com/coder/coder) | 商业或许可边界待核 | 平台团队统一开发环境、成员身份、AI 模型接入和费用审计，让同事委派任务时复用受控基础设施。 | 高级团队功能含 Premium，不宣称全部开源免费；需部署数据库和运行基础设施。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 2025 | [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) | 保留待深核 | 同一服务器上的成员可实时协作，向智能体传递单元格并审批文件和命令操作。 | 仍处 JupyterLab 孵化期；代理及服务依赖另装。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 3988 | [Full-Stack AI Agent Template](https://github.com/vstorm-co/full-stack-ai-agent-template) | 工程组件另列 | 团队可从带组织空间、成员邀请、角色和共享会话的模板起步。 | 项目生成器，生产安全和各框架组合需部署验证；未实测。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 4827 | [Traycer](https://github.com/traycerai/traycer) | 商业或许可边界待核 | 明确允许邀请成员进入共同工作区、共享看板和任务分配。 | Privacy Mode 团队默认开、个人可选；服务方案与 MIT 客户端边界需区分。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 4880 | [DEEIX Chat](https://github.com/DEEIX-AI/DEEIX-Chat) | 保留待深核 | 管理员集中管理用户角色、模型路由、使用额度和审计记录，为成员提供统一 AI 入口。 | 重型文档提取与 OCR 属可选服务；未核验所有身份供应商和计费路径，不承诺生产可靠性。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 65 | [LobeHub](https://github.com/lobehub/lobehub) | 商业或许可边界待核 | README 明确 Workspace 团队共享空间，结合 Pages、项目和计划执行形成协作入口。 | 正文采用 LobeHub Community License，徽章仍写 Apache；不能据徽章宣称全量 Apache 开源；各部署版本功能未实测。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 1294 | [Craft Agents](https://github.com/craft-ai-agents/craft-agents-oss) | 保留待深核 | 围绕业务文档和工具连接开展工作，并分享会话交接。 | 不是已核验的多人 RBAC；GUI 与 CLI 默认许可模式不同。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2427 | [OneCLI](https://github.com/onecli/onecli) | 商业或许可边界待核 | 每名员工配一个智能体，团队统一控制工具权限、共享连接和人工审批，从 Slack 或工作台使用。 | 普通代码 Apache-2.0，ee 目录生产使用需企业订阅；具体 IdP 等功能分界需按目录确认，不写全量免费。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 2581 | [Cool Admin Midway](https://github.com/cool-team-official/cool-admin-midway) | 工程组件另列 | 业务开发团队复用权限后台与多租户结构，构建 AI 客服等内部流程。 | 后台框架与前端另仓，生成及隔离效果未实测。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 3234 | [Wanwu](https://github.com/UnicomAI/wanwu) | 保留待深核 | 团队统一管理知识与模型，用低代码流程连接 OA/CRM/ERP，并支持多租户与权限控制。 | 不采纳竞品比较和自动合规宣传；具体业务流程与权限策略需自行配置和验证。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 4550 | [ICM Architect](https://github.com/RinDig/icm-architect) | 方法技能另列 | 团队可共享阶段、契约、人工关口和状态文件，便于交接。 | 文件结构方法不等于强制执行引擎或成员权限。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 5347 | [DocFlow](https://github.com/xun082/DocFlow) | 保留待深核 | 多人同步编辑、成员光标和历史版本，AI 帮团队起草产品规划、技术方案和会议文档。 | 跨文档私有知识库、自主 Agent、侧边栏群聊及音视频属于未来计划，不能写成已支持；未实测。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5473 | [cq](https://github.com/mozilla-ai/cq) | 保留待深核 | 团队可部署共享知识存储，复用经审批的经验而非反复踩坑。 | 0.x可能破坏性变更；云组织namespace仍规划，自建需负责auth/tenancy/RBAC。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 142 | [Cherry Studio Enterprise](https://github.com/CherryHQ/cherry-studio) | 商业或许可边界待核 | 管理员统一分配模型和知识库权限，员工共用团队知识和配置，支持集中运维。 | 团队后台为商业企业版，仅部分源码向客户提供；AGPL 社区桌面版不包含这些后台能力。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 245 | [Postiz](https://github.com/gitroomhq/postiz-app) | 保留待深核 | 营销成员在同一平台协作、评论和排期，结合 AI 与 API 自动化完成内容交接。 | 具体 AI 创作能力需查功能文档，不从标题扩展；托管与自建等价仅按此次 README 声明。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 349 | [agentmemory](https://github.com/rohitg00/agentmemory) | 保留待深核 | 团队按命名空间共享经验，保留来源与操作审计，通过 share/feed 等接口交接背景。 | 完整能力需要运行服务；离线 shim 只提供小型工具集，不等同完整团队平台。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 442 | [OpenWork](https://github.com/different-ai/openwork) | 商业或许可边界待核 | 组织发布并分配能力给团队或个人，成员从已有 AI 客户端复用同一技能与连接，减少重复配置。 | 组织控制平面在 ee，生产使用受订阅及免费人数条件限制；不能把整个产品标为 MIT。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 480 | [Teable](https://github.com/teableio/teable) | 商业或许可边界待核 | 业务和研发围绕同一表格、视图、权限及自动化协作，AI 在已有业务数据上构建流程和应用。 | Standalone 自建没有 AI/App Builder；官方完整镜像需付费计划解锁 AI，不能宣传社区版免费全功能。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 572 | [DeepWiki-Open](https://github.com/AsyncFuncAI/deepwiki-open) | 团队直接性不足 | 帮助新成员理解代码结构，让团队用可浏览的 wiki 和图解交接架构背景。 | 独立实现，非原 DeepWiki 官方；生成内容需对照代码检查，不保证全面正确。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 951 | [Visdom](https://github.com/fossasia/visdom) | 团队直接性不足 | 研究与模型开发成员将图像、曲线和文本广播到共同看板，协作分析实验和调试结果。 | 实验显示工具，不是生成式助手或完整实验权限平台。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1029 | [anarlog](https://github.com/fastrepl/anarlog) | 商业或许可边界待核 | 成员将会议音频转为可检查笔记，整理决策和待办后交接团队，IT 可评估自建组件。 | 社区本地应用 MIT，企业组件商业许可；不是 char 当前源码，未退役；是否本地处理取决于模型选择。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 1100 | [Instatic](https://github.com/CoreBunch/Instatic) | 保留待深核 | 内容与设计成员共管页面和发布流程，AI 修改保持可编辑节点，操作记录和角色帮助交接审阅。 | 预 1.0，API/流程仍会变化；未实测权限和审计不可改写保证。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1538 | [AI Coding Guide Zh](https://github.com/KimYx0207/AI-Coding-Guide-Zh) | 方法技能另列 | 团队可按角色训练成员，并建立结果核验和权限协作约定。 | 第三方教程；仅核验课程定位，工具细节仍以各官方文档为准。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 1789 | [Zotero MCP](https://github.com/54yyyu/zotero-mcp) | 团队直接性不足 | 研究团队成员可整理共同文献资料、提取批注并形成可交接引用。 | 本次未确认 Zotero 群组库权限支持；不能直接称为团队共享后台。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1821 | [Awesome Agentic Patterns](https://github.com/nibzard/awesome-agentic-patterns) | 方法技能另列 | 团队可共用交接、人工审批、共享配置与治理设计模式。 | 方法目录，本次核验主题范围，未逐篇复现模式成效。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 1903 | [Liveblocks](https://github.com/liveblocks/liveblocks) | 工程组件另列 | 团队产品可嵌入多人同步、评论和通知，支持人与 AI 共用应用。 | SDK 仓库不代表整套托管后端开源；部分组件许可不同。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2110 | [Clawith](https://github.com/dataelement/Clawith) | 保留待深核 | 团队按组织共享知识、管理代理工作区，并审批危险操作和查看审计。 | 开源 demo 是不保证稳定的预览；托管生产服务另列。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2381 | [Make Sense](https://github.com/SkalskiP/make-sense) | 团队直接性不足 | 视觉团队成员准备可导出标注数据，减少手工绘框再交接训练。 | 小型项目工具，不是完整多标注员管理平台；安装栈较旧。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 2438 | [AnyLabeling](https://github.com/vietanhdev/anylabeling) | 团队直接性不足 | 数据团队成员用 AI 预标注加快数据准备，再人工修订和交接。 | 桌面标注工具，不宣称多人任务分配或质量审批系统。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 2512 | [DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | 保留待深核 | 销售与客服共用漏斗、角色权限、轮转分配和人机交接，按组织控制花费。 | 葡语原文转述；隔离、合规与防封号宣称未实测，两种 WhatsApp 接入不同。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2711 | [LLM for Zotero](https://github.com/yilewang/llm-for-zotero) | 团队直接性不足 | 研究团队成员比较论文、记录来源和导出笔记，便于复核与交接。 | 共享库权限未核验；外接 MCP 助手负责审批，插件不再二次确认文件命令。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 2736 | [Litho](https://github.com/sopaco/deepwiki-rs) | 团队直接性不足 | 研发团队用生成文档辅助架构评审、新成员入职和知识交接。 | 持续知识同步及更广代理集成主要在 Terrain，不能把后继全部能力归此工具。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 3190 | [Memoh](https://github.com/felinics/Memoh) | 保留待深核 | 团队可为成员分配代理环境，共用部署并跨渠道接续任务。 | 多用户范围和隔离未实测；云计算与 AGPL 软件许可分开。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 3324 | [Spacebot](https://github.com/spacedriveapp/spacebot) | 商业或许可边界待核 | 团队在 Slack/Discord 等并发协作，共享上下文并通过持久审批监督后台任务。 | FSL 两年后转 Apache，当前非宽松开源；跨渠道记忆与权限隔离未实测。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 3352 | [PenEcho](https://github.com/penecho/penecho) | 团队直接性不足 | 团队成员可将讨论和结构化图稿保留为可检查产物，辅助设计交接。 | 未核验多人实时协作；AGPL，另有商业许可。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 4446 | [Bub](https://github.com/bubbuild/bub) | 保留待深核 | 明确面向多人和代理共处的群聊环境，保留可检查、回放及交接的记录。 | 小型 runtime，需要按渠道配置权限和业务能力。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5437 | [Jean](https://github.com/coollabsio/jean) | 团队直接性不足 | 研发成员可围绕团队issue/PR调查和追踪审阅发现。 | 本地客户端非多人编辑；Yolo模式与权限配置需区分。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 5918 | [Okou](https://github.com/okou-ai/okou) | 保留待深核 | 成员把工作方法交给团队复用，执行仍用各自权限。 | 根README未详述许可/自托管范围，不能宣称全部免费开放。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 6055 | [MateClaw](https://github.com/mateaix/mateclaw) | 保留待深核 | 组织可统一管理用户/工具/会话，并复核持续任务与交付。 | 原生/DSH不同runtime，数据会发配置服务；安全未实测。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 6072 | [EnvoyMesh](https://github.com/allenpeng0705/EnvoyMesh) | 保留待深核 | 团队可按签名名册/邀请连接代理并交接复合任务。 | 安全效果未测；共享模型与个人历史隔离需部署核查。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 6110 | [Proof SDK](https://github.com/EveryInc/proof-sdk) | 工程组件另列 | 成员与代理共同编辑、评论和提出修改，保留来源。 | SDK与托管Proof分开，认证/生产部署需集成。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 6452 | [OpenLoomi](https://github.com/melandlabs/openloomi) | 团队直接性不足 | 成员可追踪团队承诺、会议与跨工具决策，减少遗漏交接。 | 主要个人桌面伙伴，不证明组织级共享权限。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 44 | [OpenDesign](https://github.com/nexu-io/open-design) | 团队直接性不足 | 复用团队 DESIGN.md、模板和工作流，将原型或品牌调整交接为 HTML/PDF/PPTX 等产物。 | 以本地设计工作台为主，不声称多人实时编辑；云模型服务独立，调用模型可能联网。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 55 | [NextChat Enterprise](https://github.com/ChatGPTNextWeb/NextChat) | 商业或许可边界待核 | 企业版由管理员配置模型资源、成员及知识库权限，并集中审计团队对话。 | 这些团队能力明确来自另售 Enterprise Edition，不能归到 MIT 社区仓库或宣称免费自建可用。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 75 | [Learn Claude Code](https://github.com/shareAI-lab/learn-claude-code) | 方法技能另列 | 工程团队可以据此理解权限审批、任务依赖、持久调度和执行记录，减少自研 runtime 的沟通成本。 | 第三方教学项目，不是 Anthropic 官方源码；模拟 Agent Teams 不代表真人协作产品。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 130 | [Twenty](https://github.com/twentyhq/twenty) | 保留待深核 | 销售团队共享客户与商机数据，让智能体按对象读写权限生成摘要、分类线索并起草跟进邮件。 | 未核验所有部署版本套餐差异；按文档说明权限，不声称实测已覆盖。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 164 | [New API](https://github.com/QuantumNous/new-api) | 工程组件另列 | 集中管理成员分组、API key 权限和模型路由，团队客户端共用统一入口并查看费用与审计。 | 基于 One API 的独立衍生项目；上游模型服务需自行授权，不能把网关等同免费模型。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 194 | [Claude How To](https://github.com/luongnv89/claude-howto) | 方法技能另列 | 明确提供团队 onboarding、project-CLAUDE.md 和共享插件实践，用于统一成员使用规范。 | 第三方教程，未核验所有快速变化的宿主功能说明。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 256 | [Qdrant](https://github.com/qdrant/qdrant) | 工程组件另列 | AI 平台团队为共享应用提供语义检索层，按租户分区并监控查询服务。 | 不是企业知识助手；默认演示启动不带认证，租户分区不能替代应用授权设计。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 569 | [Gas Town](https://github.com/gastownhall/gastown) | 团队直接性不足 | 工程团队可把长任务、交接记录和验收门槛留在 Git/Beads 中，管理多个智能体产出的集成。 | 主要智能体编排，不是多人账号平台；自动合并策略需按团队流程配置。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 610 | [Memori](https://github.com/MemoriLabs/Memori) | 工程组件另列 | 将编码习惯、审查偏好和项目约定沉淀为共享上下文，辅助新成员理解团队经验。 | 当前快速开始走 Memori Cloud；Apache SDK 不表示托管后台全量开源自建。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 828 | [Agent Orchestrator (AO)](https://github.com/Untrivial-ai/agent-orchestrator) | 团队直接性不足 | 工程师统一监督多个任务的代码、测试和 PR 状态，将评审反馈回送原智能体，便于交接。 | 本地看板不是已核验多人权限平台；遥测包含项目所有者账号，不笼统称完全匿名。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 955 | [Astrid](https://github.com/astrid-runtime/astrid) | 工程组件另列 | 平台团队为智能体和工具划定独立权限、配额和状态空间，使授权不由模型自行扩大。 | 当前用户态 runtime，不是可启动 OS 或完整业务产品；不保证绝无越权。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1091 | [Plannotator](https://github.com/backnotprop/plannotator) | 保留待深核 | 成员先审计划与产物，再把批注交给智能体执行；可收集同事对同一计划的反馈。 | 开源异步链接分享正在转入 deprecated support，Workspaces 为主要托管协作路径；URL fragment 内容不加密。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1569 | [agentsview](https://github.com/kenn-io/agentsview) | 保留待深核 | 团队可把成员本地会话推送到共享 PostgreSQL，集中查询和查看成本。 | 默认本地；README 跟随 main，发布版能力需看变更日志。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1687 | [OpenResearch](https://github.com/alphaXiv/OpenResearch) | 团队直接性不足 | 研究团队可交接与提交绑定的实验、日志和产物，复现实验分支。 | 远端服务无应用层认证，同机其他用户可访问；不是已验证多用户隔离。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1809 | [Magic](https://github.com/dtyq/magic) | 保留待深核 | 多名成员共用项目、分工模块并查看进度，按部门和成员控制预算。 | 沙箱称 proprietary，具体开源版本覆盖需确认；零泄漏和百倍效率不采信。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1823 | [ByteRover CLI](https://github.com/campfirein/byterover-cli) | 商业或许可边界待核 | 团队审查知识变更、分支合并上下文，并在成员间共享项目经验。 | 默认本地，成员权限与共享空间由 Cloud 提供；Elastic License 2.0。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 1828 | [agentgateway](https://github.com/agentgateway/agentgateway) | 工程组件另列 | 平台团队统一预算、OAuth、RBAC 和调用追踪，管理跨应用 AI 接入。 | 网关基础设施，非完整业务工作区；与迁出 AI 能力的 kgateway 区分。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2056 | [Kiro](https://github.com/kirodotdev/Kiro) | 商业或许可边界待核 | 团队共享规格、项目规则与权限，通过组织身份和用量治理推广 AI 开发。 | 该仓库是问题跟踪器，不含 Kiro 产品源码；各入口成熟度不同。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 2082 | [Mike](https://github.com/open-legal-products/mike) | 保留待深核 | 法务团队复用案件资料、文档库和表格式审查工作流，并连接现有协作工具。 | Word 插件 Beta；案例检索以美国 CourtListener 为例，专业结果需人工核验。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2089 | [SwanLab](https://github.com/SwanHubX/SwanLab) | 保留待深核 | 成员在共同项目查看实验、比较参数并分享持久链接和讨论结果。 | 本仓库 SDK 与云端/自托管平台边界须区分，未测试各部署版权限。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2165 | [PilotDeck](https://github.com/OpenBMB/PilotDeck) | 团队直接性不足 | 团队可围绕项目保留文件、技能、任务花费和可纠正记忆，便于复查交接。 | 工作区隔离不等于真人多租户；研究基准未复现，AGPL。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 2299 | [Polyaxon](https://github.com/polyaxon/polyaxon) | 保留待深核 | 团队共享 GPU、查看成员项目与实验，统一训练工作负载。 | 平台组件和托管服务需区分；企业访问功能未细查。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2492 | [Radar](https://github.com/skyhook-io/radar) | 保留待深核 | 运维团队共用 RBAC 限定的集群视图，向代理提供拓扑和审计上下文。 | 需配置认证和网络边界；命名空间缓存范围与权限过滤不是同一概念。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2502 | [II Agent](https://github.com/Intelligent-Internet/ii-agent) | 保留待深核 | 团队可在计划、研究与产物编辑之间交接，幻灯片模块明确提到协作编辑。 | 协作能力按模块区分，未核验组织权限和全部自建功能。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2525 | [Metorial Catalog](https://github.com/metorial/metorial) | 工程组件另列 | 团队可集中选择业务连接并在配套平台管理凭据、权限和审计。 | 本仓是目录，核心引擎在 metorial-platform；不可把完整控制面当目录自带。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2904 | [SQL Explorer](https://github.com/explorerhq/sql-explorer) | 保留待深核 | 数据团队保存和共享查询，辅助业务成员分析数据。 | 需适配 Django/数据库权限；不是自然语言查询正确性的保证。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2952 | [Erupt](https://github.com/erupts/erupt) | 工程组件另列 | 团队复用管理后台权限、审计和模型配置，把 AI 接入内部应用。 | 审批引擎 Erupt Flow 为商业扩展，不能归免费核心。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 3014 | [Cordys CRM](https://github.com/1Panel-dev/CordysCRM) | 商业或许可边界待核 | 销售团队共用客户、权限、审批记录和分析，接入 AI 辅助线索及成单分析。 | FIT2CLOUD 许可含 GPLv3 之外限制；AI 助手和分析引擎需配置。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 3100 | [SkillClaw](https://github.com/AMAP-ML/SkillClaw) | 保留待深核 | 成员将经验交给共同演化服务，检查共享技能、验证状态与版本历史。 | 团队部署需共享存储与独立服务，访问隔离和自动改进质量未实测。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 3209 | [CubeStudio](https://github.com/data-infra/cube-studio) | 工程组件另列 | 团队按项目组和角色共享算力、标注任务及模型交付，集中管理权限。 | 旧 tencentmusic 仓已归并至此；硬件与多租户效果未实测，不逐项背书全部兼容。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 3506 | [Harmonist](https://github.com/GammaLabTechnologies/harmonist) | 方法技能另列 | 团队共享评审、记忆更新和文件完整性门槛，帮助新成员沿用规范。 | 规则执行依宿主集成，不保证模型或所有路径无法绕过；未运行安装。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 3719 | [Loonflow](https://github.com/blackholll/loonflow) | 商业或许可边界待核 | 团队共用审批、部门角色和审计，代理通过同一权限服务处理工单。 | AGPL 核心，多租户需额外授权；托管 SaaS 独立。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 3730 | [ChatWiki](https://github.com/zhimaAi/chatwiki) | 商业或许可边界待核 | 运营客服团队共享账号权限、内容草稿与人机转接流程。 | 定制 Apache 衍生许可要求组织商业使用另授权，非纯 Apache。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 4149 | [APIPark](https://github.com/APIParkLab/APIPark) | 工程组件另列 | 平台团队将模型与提示模板发布为 API，业务团队通过订阅审批使用，集中查看权限和调用日志。 | 商业企业功能另有咨询入口，未逐项验证社区版差异；不背书性能或自动合规。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 4296 | [Treg](https://github.com/superdesigndev/treg) | 商业或许可边界待核 | 团队集中维护凭据与技能，让成员代理复用工具并保留调用审计。 | Apache 附加条款限制竞争性托管；第三方调用收费与自托管代码分开。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 4322 | [SecureAI Tools](https://github.com/SecureAI-Tools/SecureAI-Tools) | 保留待深核 | 团队成员可共享一套自托管模型和文档问答入口。 | 简单认证不等于企业 SSO/细粒度知识权限；模型服务需另配。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 4371 | [MateCloud](https://github.com/mateaix/matecloud) | 工程组件另列 | Java 团队可复用身份权限、租户、审计和 AI 工具工程底座。 | 脚手架而非业务成品；实际租户隔离和所列版本兼容性未测。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 4773 | [FIM One](https://github.com/fim-ai/fim-one) | 商业或许可边界待核 | 业务团队可统一知识、数据和系统操作，通过组织成员审批敏感动作。 | Source Available 非 OSI；当前 IM 首发飞书，Slack/Teams/企微等部分仍在路线图。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 4859 | [Azure Skills Plugin](https://github.com/microsoft/azure-skills) | 方法技能另列 | 云团队可共享部署验证、诊断、成本与权限操作规范。 | 依赖云身份及服务，工具可修改资源；技能不保证合规或安全，未执行。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 5049 | [Project Starter / Claude Workflow v2](https://github.com/CloudAI-X/claude-workflow-v2) | 方法技能另列 | 研发团队可共享权限模板、工程规范和 review 经验。 | 跨工具仅支持相应子集，技能安装不等于全部 hooks 可用。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 5143 | [Vibeyard](https://github.com/elirantutia/vibeyard) | 保留待深核 | 团队成员可通过加密 P2P 分享会话，选择只读或可写共同处理任务。 | 会话分享不等于完整组织 RBAC；任务自动 Done 不证明验收通过。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5588 | [Fusion](https://github.com/Runfusion/Fusion) | 团队直接性不足 | 研发团队可复用验收计划、任务看板和交接邮箱。 | 自动合并需按任务配置；agent companies非真人组织，长时效果未测。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 3 | [Skills For Real Engineers](https://github.com/mattpocock/skills) | 方法技能另列 | 共享 CONTEXT.md 和 ADR，统一领域术语；把讨论转为规格、工单及依赖关系，支持团队交接。 | 作者的可定制技能集，不提供组织账号和协作后台；不同安装方式可编辑性不同。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 32 | [Graphify](https://github.com/Graphify-Labs/graphify) | 保留待深核 | 代码与文档地图可提交 Git 共享，或用一个 HTTP MCP 服务供全队查询，帮助理解依赖和交接上下文。 | 代码 AST 本地处理；文档多模态分析可能调用模型；持续跨会议资料处理属于独立 Enterprise 层。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 306 | [NanoClaw](https://github.com/nanocoai/nanoclaw) | 保留待深核 | Slack 中每个智能体有独立身份、容器和记忆，在共享房间与画布协作，并通过网关控制凭据。 | 隔离和渠道需配置；依赖 OneCLI 等组件，不背书绝对安全或竞品比较。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 385 | [Onlook](https://github.com/onlook-dev/onlook) | 团队直接性不足 | 设计与研发围绕真实组件、品牌 token 和可分享预览交接，实现设计到代码的反馈。 | early access；团队协作总项和评论仍未勾选，不宣传完整多人协作；非 Next.js 支持仍规划中。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 519 | [OpenSEO](https://github.com/every-app/open-seo) | 保留待深核 | 营销团队可共享站点研究与 SEO 工作入口，让 AI 调用已有数据服务完成分析。 | 依赖 DataForSEO key；未核验细粒度成员权限，托管订阅与自带 API 成本分开。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 649 | [DVC](https://github.com/treeverse/dvc) | 工程组件另列 | 团队共享实验版本、数据与参数，通过 Git 与远程存储复现同事结果，支撑评审交接。 | CLI 与扩展有不同功能边界；不是托管多人实验平台，需配置数据存储。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1324 | [DeepAudit](https://github.com/lintsinghua/DeepAudit) | 保留待深核 | 安全团队集中导入项目、检查审计日志并交接报告。 | 列举的主要 CVE 成果标为闭源版本，不能归给开源版。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1340 | [CyberStrikeAI](https://github.com/AIPentest/CyberStrikeAI) | 保留待深核 | 安全团队管理授权测试任务、角色、人工审批与审计证据。 | 仅核验文档所述能力，未验证权限隔离与检测效果。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1636 | [UltraRAG](https://github.com/OpenBMB/UltraRAG) | 工程组件另列 | 团队共享 YAML 管道、提示和依赖锁文件，协作调试知识应用。 | 定位研究探索和工业原型，不等于成品多人知识系统。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2255 | [LeanCTX](https://github.com/yvgude/lean-ctx) | 团队直接性不足 | 团队可共享代码索引并在 CI 使用可核验上下文门槛，交接代理记忆。 | 统一图、Context as Code 和完整多代理治理仍属愿景，不能混为已交付。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 2463 | [SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) | 方法技能另列 | 团队共享简明英语规则，让技术说明、交接与用户文档更易读。 | 规则遵从不等于读者理解；不当作 ASD-STE100 合规认证。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 3140 | [Social Media Research Skills](https://github.com/ScrapeCreators/social-media-research-skills) | 方法技能另列 | 营销团队复用评论分析、竞品和广告研究流程，形成带依据的共享简报。 | 需 ScrapeCreators API，技能开源不等于底层数据服务免费。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 3219 | [RedAmon](https://github.com/samugit83/redamon) | 保留待深核 | 安全与研发以共享发现图和修复 PR 交接问题，保留关键人工检查。 | 限授权测试；基准、企业隔离和修复质量未复现，自动步骤仍须人工审核。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 3577 | [Proma](https://github.com/proma-ai/Proma) | 商业或许可边界待核 | 团队版管理员可分配共享额度、查看用量并下发统一技能版本。 | 组织技能和额度管理属于商业版，开源版需自建且迭代放缓。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 3644 | [MCP Agent Mail](https://github.com/Dicklesworthstone/mcp_agent_mail) | 工程组件另列 | 工程团队追踪代理间决策和交接，通过 Git 留存可审计材料。 | 文件预留是 advisory，不是强制文件锁；不是真人邮件服务。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 4898 | [Lime](https://github.com/limecloud/lime) | 团队直接性不足 | 团队可把检查规则和研究方法整理为共享 skills，审阅任务链。 | 桌面本地为主，不证明成员同步；GPL，代理协作非真人协作。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 5004 | [Navop](https://github.com/feigeCode/navop) | 商业或许可边界待核 | 研发运维团队可让助手复用数据库/远程操作上下文与审计。 | Apache 附补充许可限制收费/竞争用途；本机工作台非多人权限系统。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 5107 | [Space Agent](https://github.com/agent0ai/space-agent) | 保留待深核 | 团队可在个人层构建工具，再向群组共享流程与能力。 | 前端 runtime 可自改界面，权限隔离效果未验证；不是无限可用性保证。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5137 | [Watcher](https://github.com/thalesgroup-cert/Watcher) | 保留待深核 | 安全团队共享告警、IOC 和情报分析，并与 TheHive/MISP 协作。 | 依赖外部源/模型；自动情报不保证完整或准确。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5136 | [PM Skills](https://github.com/mohitagw15856/pm-claude-skills) | 方法技能另列 | 团队可共享 PRD、事后复盘与设计交接等工作模板。 | 范围也含生活建议；专业水平和 CI gate 不保证内容正确，不能替代领域专家。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 5144 | [Claw Empire](https://github.com/GreenSheep01201/claw-empire) | 团队直接性不足 | 研发团队可监督代理任务、报告归档，并审批合并。 | 办公室模拟的是代理角色，非真实组织系统；worktree 不是 OS 沙箱。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 5234 | [Poco](https://github.com/poco-ai/poco-claw) | 保留待深核 | 在频道提及常驻智能体，将消息转为任务并查看执行进度；发布到共享文件供同事复用。 | 云订阅仍为 coming soon；README 内部链接出现 poco-agent 别名，最终链接待校验；未实测隔离。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5440 | [Dropbase](https://github.com/DropbaseHQ/dropbase) | 保留待深核 | 团队可快速构建后台工具，并以可编辑代码和可分享应用目录交接。 | 自托管不证明完整宽松许可；需审阅生成代码和数据连接，未部署。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5651 | [thClaws](https://github.com/thClaws/thClaws) | 保留待深核 | 团队可配置组织策略、模型网关与工具审计。 | 版本段落不一致；升级会迁移项目路径，文件工具隔离不等于shell全隔离。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5805 | [Oxen](https://github.com/Oxen-AI/Oxen) | 工程组件另列 | ML团队通过共享server同步数据版本，支持重现实验与交接。 | 大规模性能未测，权限需按部署配置。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 5863 | [AuditPilot](https://github.com/Ricky-7-Yan/intelligent-audit-system) | 保留待深核 | 审计团队统一控制模板、发现责任人及整改复核。 | 单节点SQLite/RAG；bearer基线不替代企业SSO/KMS，未实测。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 5870 | [StateM](https://github.com/henryqin1997/statem) | 方法技能另列 | 团队可共享runbook，把验收与交接状态留在文件。 | benchmark自述，模型判定不等同确定性证据。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 6087 | [ARTEX](https://github.com/Autumn-27/ARTEX) | 保留待深核 | 安全团队可追溯跨任务资产、发现和审批证据。 | AGPL；自主利用需限定授权，未执行。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 6133 | [Crit](https://github.com/tomasz-tomczyk/crit) | 保留待深核 | 团队可精确评论交付物，并通过分享/拉取形成反馈。 | 部分示例绕过权限，需按宿主配置；共享服务独立。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 6189 | [AIConfig](https://github.com/lastmile-ai/aiconfig) | 工程组件另列 | 提示作者与开发者共享同一配置产物协作。 | Node运行也需Python编辑器；非多人在线服务。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 6485 | [TongFlow](https://github.com/tong-io/tongflow) | 保留待深核 | 创意团队可在共享节点格式中交接并由代理生成可编辑流程。 | desktop是Cloud壳非离线版；AGPL/商业，插件需另装联网。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 27 | [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 方法技能另列 | 把色彩、字体、间距和组件规范保存为 MASTER.md 与页面覆盖文件，让团队各成员的 AI 生成界面沿用同一标准。 | 团队级高级 Design Token 架构和支持属于 Premium；本仓库是基础技能，不是设计协作 SaaS。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 70 | [Netdata](https://github.com/netdata/netdata) | 商业或许可边界待核 | 运维团队通过异常评分及集中告警定位故障；Cloud 提供成员权限和集中视图。 | Agent 是 GPL 开源，UI 与 Cloud 闭源；组织 RBAC/SSO 属于 Cloud，不写成开源 Agent 自带。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 86 | [Headroom](https://github.com/headroomlabs-ai/headroom) | 商业或许可边界待核 | 团队可在 AI 应用调用链压缩上下文，并将失败经验写入项目共用规则文件；组织部署另有服务。 | OSS 定位个人本地使用；组织集中配置、SSO 和共享看板属于单独服务；压缩质量和节省比例未实测。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 122 | [Meilisearch](https://github.com/meilisearch/meilisearch) | 工程组件另列 | 工程团队为内部 AI 检索应用构建搜索层，按租户和 API 权限限定可见数据。 | 搜索基础设施，不是成品团队助手；副本分片等企业功能需区分许可，不把 EE 算免费社区功能。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 167 | [JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | 工程组件另列 | 业务与研发共同搭建内部应用，复用组织角色和细粒度数据权限，并把 AI 接入业务流程。 | 未逐模块核验发行版本和可选集成，不采用效率百分比或几分钟上线承诺。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 197 | [ToolJet](https://github.com/ToolJet/ToolJet) | 商业或许可边界待核 | AI 生成的页面和查询保留在团队可共同编辑的平台中，沿用权限、环境及版本历史。 | ToolJet AI 标注 Enterprise；MCP beta；不把高级 RBAC/SCIM 视为社区功能。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 287 | [Skills CLI](https://github.com/vercel-labs/skills) | 方法技能另列 | 团队将技能随项目提交，并用同一分发入口安装到不同成员的编码工具。 | 不同宿主特性不一致；不是组织审核平台，与 skillshare 的同步治理用途有交叉。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 374 | [Kilo Code](https://github.com/Kilo-Org/kilocode) | 商业或许可边界待核 | 团队可在已有 PR 工作流接收 AI 审查反馈，成员选择不同编辑器时沿用同一工具生态。 | 开源客户端与 Cloud Agent/Code Reviews 服务分开，不声称审查后台全部在 MIT 仓库。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 429 | [NocoBase](https://github.com/nocobase/nocobase) | 商业或许可边界待核 | 业务人员可视化审查数据模型、页面和流程；AI 员工按角色、字段权限执行，保留可追溯记录。 | 插件化产品，未逐插件核验开源与商业授权，不能把全部产品能力归到免费版。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 498 | [LiveKit](https://github.com/livekit/livekit) | 工程组件另列 | 工程团队构建会议或语音工作流，让人和 AI 在同一实时会话交换音视频与数据，按 token 控制房间权限。 | 此仓库是 SFU 服务；STT/LLM/TTS 在独立 Agents SDK 和供应商中，不混为一体。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 617 | [DeepCode](https://github.com/HKUDS/DeepCode) | 保留待深核 | 团队把开发约定封装为技能，任务关联批准、测试与产物，便于成员审查和接手。 | 多个 UI 共用本地服务不等于多人账号系统；不按早期论文复现工具印象描述当前产品。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 667 | [cc-connect](https://github.com/chenhg5/cc-connect) | 保留待深核 | 成员从飞书、钉钉、Slack 等工作频道调用项目智能体，管理员限制目录与 shell 等高权限命令。 | 不同平台能力不同，需按 support matrix 配置；群聊连接本地执行器不等于默认安全多租户。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 710 | [Logto](https://github.com/logto-io/logto) | 工程组件另列 | 工程团队为 AI 应用统一登录、成员邀请和组织角色，避免各产品重复实现权限基础。 | 通用身份组件，不是智能体执行策略引擎；Cloud 与自建套餐需区别。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 718 | [Casdoor](https://github.com/casdoor/casdoor) | 工程组件另列 | 团队统一员工和应用身份，把 AI/MCP 接入已有 SSO 与角色策略，并追踪登录和管理操作。 | 身份层不负责验证 AI 业务决策；具体 MCP 授权路径需按集成确认。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 744 | [Context Engineering Template](https://github.com/coleam00/context-engineering-intro) | 方法技能另列 | 团队把项目背景和验收方式留成共同资料，让新会话和不同成员的 AI 使用一致上下文。 | 模板不是强制执行平台，不采纳 10x/100x 效果宣传。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 842 | [BISHENG](https://github.com/dataelement/bisheng) | 保留待深核 | 业务专家和研发共同编排文档审查、报告与客服流程，在执行中人工介入并按组管理应用权限。 | 未逐项区分发行版商业功能，不声称全免费；专家级和高精度宣传未实测。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 862 | [Corsair](https://github.com/corsairdev/corsair) | 工程组件另列 | 工程团队复用 SaaS 连接和认证，向不同用户提供自己的工具权限与业务数据接入。 | OAuth 刷新与 webhook 托管由 Hub 提供，可自建范围需对应部署，不能承诺全量托管等价。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 893 | [Hugging Face Skills](https://github.com/huggingface/skills) | 方法技能另列 | ML 团队用共用技能规范模型、数据和作业操作，减少成员使用不同 AI 工具时的流程差异。 | 技能不包含模型与算力服务；按需选择流程，不执行仓库指令。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 898 | [Kedro](https://github.com/kedro-org/kedro) | 工程组件另列 | 成员按共同模板组织数据、模型版本与管线，让不同工程背景的人复现、测试和维护同一项目。 | 数据工程框架，不是聊天或 agent 协作平台；部署编排可依赖其他工具。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 974 | [Claude Code Infrastructure Showcase](https://github.com/diet103/claude-code-infrastructure-showcase) | 方法技能另列 | 团队借鉴技能触发和文档组织方式，把工程规范纳入成员共用的 AI 编码环境。 | 明确不是可运行应用；部分 hooks 需按项目改造，权限仍自行管理。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 1034 | [Hunk](https://github.com/modem-dev/hunk) | 团队直接性不足 | 团队成员审查多文件 AI 修改时看到关联注释和变更流，将人工判断放在代码交付环节。 | 审查客户端，不是组织托管 PR 平台；注释不保证正确。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1061 | [Local Deep Research (LearningCircuit)](https://github.com/LearningCircuit/local-deep-research) | 保留待深核 | 组织可部署统一研究入口，同时把成员的数据与模型密钥分开保存，形成可复核报告。 | 与 langchain-ai/local-deep-researcher 不是同项目；未实测加密隔离，不引用自报准确率。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1092 | [Graft](https://github.com/trailhq/Graft) | 团队直接性不足 | 团队提交同一上下文接入配置，各成员从代码生成本地图，减少新会话重复定位项目知识。 | 图缓存不提交，不能描述成直接共享所有经验图；性能指标未验证。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1103 | [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) | 工程组件另列 | 平台团队通过声明式策略统一约束 AI 执行环境，减少每个智能体自行管理权限。 | 0.1.0 仍 upcoming；Kubernetes 和 WSL 路径有实验状态；不保证绝对阻止泄漏。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1116 | [mcp-agent](https://github.com/lastmile-ai/mcp-agent) | 工程组件另列 | 工程团队复用工具连接与运行模式，复杂任务可持久暂停等待成员批准后恢复。 | 持久能力依赖 Temporal，基础库与相关服务分开。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1142 | [FIRERPA Android](https://github.com/firerpa/lamda) | 保留待深核 | 明确多人并发远程访问，团队共同查看设备、验证选择器和调试自动化。 | 设备服务、客户端及授权边界需分别确认；未实测并发隔离。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1168 | [Mastering GitHub Copilot](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming) | 方法技能另列 | 团队采用同一练习和流程培训成员，统一 AI 编码基本方法。 | 课程不是产品；Copilot 访问另需授权，未运行课程。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 1190 | [Hatchet](https://github.com/hatchet-dev/hatchet) | 工程组件另列 | 多个团队在同一实例管理队列、运行与告警，用角色分配访问。 | SSO 与多区等为 Cloud 功能。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1276 | [GenOffice](https://github.com/genspark-ai/genoffice) | 团队直接性不足 | 团队成员可检查 AI 文档改动后交付真实 Office 文件，也可通过 MCP 复用处理能力。 | 人机共编不等于真人实时协作；ee 为未来商业模块，网络服务需 token。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1278 | [Browser Tools MCP](https://github.com/AgentDeskAI/browser-tools-mcp) | 团队直接性不足 | 开发与测试共享浏览器日志和审计上下文。 | 浏览器插件与 MCP 工具，不是团队权限平台。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 1319 | [Gentle AI](https://github.com/Gentleman-Programming/gentle-ai) | 方法技能另列 | 用文件状态统一成员和不同智能体的规范开发与评审流程。 | 各集成能力不同；咨询服务与开源代码分开。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 1387 | [Nasiko](https://github.com/Nasiko-Labs/nasiko) | 工程组件另列 | 平台团队集中管理智能体调用、凭据、工具权限和链路追踪。 | 部署基础设施，不是多人业务协作前端；隔离未实测。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1518 | [Rivet Actors](https://github.com/rivet-dev/actors) | 工程组件另列 | 研发团队构建持久会话及多人文档同步的共同后端。 | 后端原语，不是开箱即用文档产品；与其他同名 Rivet 区分。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1520 | [Lightdash](https://github.com/lightdash/lightdash) | 商业或许可边界待核 | 数据与业务团队共用指标语义和权限，并通过 PR、CI 评审分析变更。 | 可自建核心 BI；AI 与企业产品介绍不能全部归入免费核心。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 1596 | [OpenConnector](https://github.com/oomol-lab/open-connector) | 工程组件另列 | 平台团队统一管理业务系统连接、权限范围和调用记录。 | 自建需自行管理 OAuth 应用和存储；第三方服务权益不由仓库许可授予。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1740 | [Agent-Native](https://github.com/BuilderIO/agent-native) | 工程组件另列 | 人与智能体使用同一验证和权限实现，共同处理应用数据。 | TypeScript 开发框架，不是即装即用业务协作系统。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1765 | [GitHub Agentic Workflows](https://github.com/github/gh-aw) | 工程组件另列 | 团队版本管理 issue 分流、PR 审查和文档维护规则，并控制写入权限。 | 补充而不替代确定性 CI；权限可配置，默认约束不是绝对保证。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1786 | [SuperSonic](https://github.com/tencentmusic/supersonic) | 保留待深核 | 分析工程师维护共用指标语义，业务成员据此问数和查看图表。 | 需先搭建语义模型；减少幻觉是设计目标，非正确率保证。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 1843 | [ACI.dev](https://github.com/aipotheosis-labs/aci) | 工程组件另列 | 平台团队集中管理业务工具授权，为内部智能体提供统一调用层。 | 统一 MCP 服务和 Python SDK 另仓；自然语言权限效果未实测。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1852 | [OpenAgents Control](https://github.com/darrenhinde/OpenAgentsControl) | 方法技能另列 | 团队把标准提交到项目上下文目录，新成员和智能体沿用同一约定。 | 方法和代理配置，不保证每次同等质量；对竞品比较未采信。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 1910 | [AI Coding Dictionary](https://github.com/mattpocock/dictionary-of-ai-coding) | 方法技能另列 | 帮助团队统一上下文、会话、工具和权限术语，减少沟通误解。 | 学习参考；本次核验范围，不逐条背书全部解释。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 1992 | [LongMemory](https://github.com/CaviraOSS/LongMemory) | 工程组件另列 | 团队应用可按项目、租户、成员和角色检索知识，并保留历史来源。 | 治理与检索效果未实测；独立 n8n 节点采用不同许可。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 1995 | [ContextForge](https://github.com/IBM/mcp-context-forge) | 工程组件另列 | 平台团队集中发布工具入口、鉴权限流和追踪；跨网关传递用户身份与 RBAC 上下文。 | 工程网关，不是聊天协作平台；未验证多集群和第三方插件行为。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2069 | [Archestra](https://github.com/archestra-ai/archestra) | 商业或许可边界待核 | 团队统一助手、个人身份工具授权、私有 MCP 目录、SSO/RBAC 与费用。 | Open Core；README 免费范围为不足 30 人团队，企业许可另计。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 2247 | [NotFair Plugin](https://github.com/nowork-studio/notfair-plugin) | 方法技能另列 | 营销团队共享 SEO、广告预算和内容操作规范，形成可审阅的变更。 | 技能不是成品营销系统；需授权外部账号，未验证投放效果。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 2292 | [PipesHub](https://github.com/pipeshub-ai/pipeshub-ai) | 保留待深核 | 将 Slack、Drive、GitHub、Microsoft 365 等组织资料统一检索，并按用户源权限返回可引用答案。 | 按团队/角色/历史的个性化搜索仍在待办；是否出网取决于选择的模型供应商，不照搬绝不出网宣传。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2388 | [AI Marketing Skills by Eric Siu](https://github.com/ericosiu/ai-marketing-skills) | 方法技能另列 | 营销销售团队共享内容质检、实验计分、审批和会议行动项流程。 | 技能集合非独立平台；收入与固定内容评分承诺未验证。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 2586 | [acpx](https://github.com/openclaw/acpx) | 工程组件另列 | 工具团队用同一接口连接不同编码代理，管理会话、权限与机器可读输出。 | pre-1.0 接口可能变化；shared runtime 是本地会话共享而非真人多租户。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2600 | [AChat](https://github.com/AprilNEA/AChat) | 保留待深核 | 团队集中整理 AI 对话、成员角色、权限和使用成本。 | 仅 README 能力声明，未核验同步冲突、权限粒度和部署成熟度。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2623 | [AGiXT](https://github.com/Josh-XT/AGiXT) | 保留待深核 | 团队统一业务工具和模型接入，组合服务执行工作流。 | 根文档概述，未核验合规宣称或细粒度企业功能。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |
| 2653 | [GraphJin](https://github.com/dosco/graphjin) | 工程组件另列 | 团队统一业务系统查询、调用者权限、可追踪动作及持续问题监测。 | GraphQL 联邦 _entities 仍计划中；治理效果未实测，非所有配置默认只读。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2725 | [Generative AI for Beginners .NET](https://github.com/microsoft/Generative-AI-for-beginners-dotnet) | 方法技能另列 | .NET 团队可统一学习本地模型、代理工具和云部署的工程方式。 | 课程非产品；本地和托管场景区别，未执行所有样例。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 2740 | [Scriberr](https://github.com/rishikanthc/Scriberr) | 团队直接性不足 | 团队成员将会议或访谈变成可复核文字，再形成摘要与知识材料。 | 作者声明未放弃并计划恢复，未验证实际发布节奏；接入云模型后并非完全离线。 当前证据主要支持个人使用、产物交接或代理编排，暂不优先；不是判定没有团队价值。 |
| 2747 | [SWIRL Community](https://github.com/swirlai/swirl-search) | 商业或许可边界待核 | 团队按来源系统权限搜索分散资料，减少另建知识副本的维护。 | MCP、三段重排、固定答案和幻觉提醒属于 Enterprise；数据不复制不等于模型不接收检索内容。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 2850 | [Ruler](https://github.com/intellectronica/ruler) | 方法技能另列 | 团队维护一份规则，成员拉取后同步到各编码工具，减少配置漂移。 | Beta Research Preview；配置同步不等于强制执行组织策略。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 2876 | [Rill](https://github.com/rilldata/rill) | 商业或许可边界待核 | 数据团队维护共同指标语义，业务成员与 AI 使用一致分析定义。 | 本地已有行级访问策略；Conversational BI、MCP 和托管部署列于 Cloud，不能全归本地版。 保留候选；先厘清团队能力的版本、服务与授权边界，再决定推荐写法。 |
| 2889 | [LangChain Academy](https://github.com/langchain-ai/langchain-academy) | 方法技能另列 | 团队系统学习有状态代理与部署，建立一致实现方式。 | 课程不是生产服务，依赖模型及部分外部服务，未逐课运行。 团队价值主要是复用规则、技能或学习材料，适合实践栏目，暂不进入协作产品短名单。 |
| 2902 | [Claude-to-IM Skill](https://github.com/op7418/Claude-to-IM-skill) | 工程组件另列 | 成员可在团队消息工具接收进度、批准工具调用并接续任务。 | QQ 仅私聊、微信单账号；渠道接入不能等同多人组织授权。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2934 | [whylogs](https://github.com/whylabs/whylogs) | 工程组件另列 | 数据科学与工程团队共享分布摘要、约束和漂移线索，支持审计与训练排错。 | 记录库非完整 WhyLabs 平台；摘要检测不保证覆盖全部数据问题。 团队价值主要通过工程集成实现，适合基础设施或开发组件栏目，不作为即用协作产品优先推荐。 |
| 2959 | [Gerev](https://github.com/GerevAI/gerev) | 保留待深核 | 成员跨业务工具查找内部知识，减少求助同事和重复搜索。 | GitHub Enterprise、Microsoft Teams 等仍未勾选；Klu 托管链接不等于此仓全部功能。 存在团队使用证据；本批未补查当前维护及许可全貌，保留下一轮重点核验。 |

## 后续队列

下一批从队列 JSON 中 second_pass=未二筛 的 1,226 项继续，每批 200；本批“保留待深核”单独保留，不阻塞下一批。前轮源文核验结果保持原样，不将二筛结论回写为排除。
