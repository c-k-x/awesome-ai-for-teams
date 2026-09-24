# 商业与许可边界核验 · 第 1 批（200 个）

本批从 225 个商业或许可边界项目中按团队、权限、共享、治理和任务信号排序，逐项复核已有官方源文记录。15 个重点候选需要补查当前官方 README、根许可证和版本边界。

未安装、执行或部署项目。source-available、Enterprise、Cloud、AGPL/GPL 和附加条款单独保留。

## 分类结果

| 分类 | 数量 |
| --- | ---: |
| 方法技能另列 | 10 |
| 重点待官方补查 | 15 |
| 商业或许可边界待核 | 66 |
| 保留待深核 | 9 |
| 工程组件另列 | 38 |
| 团队直接性不足 | 62 |

## 重点待官方补查的 15 个

| ID | 项目 | Description (EN) | 跟 team 的关系 | 当前限制 |
| ---: | --- | --- | --- | --- |
| 4827 | [Traycer](https://github.com/traycerai/traycer) | An agent-orchestration app with shared boards, real-time editing, and team collaboration. | 明确允许邀请成员进入共同工作区、共享看板和任务分配。 | Privacy Mode 团队默认开、个人可选；服务方案与 MIT 客户端边界需区分。 |
| 641 | [Coder](https://github.com/coder/coder) | Self-hosted development workspaces and coding-agent infrastructure with centralized identity and model controls. | 平台团队统一开发环境、成员身份、AI 模型接入和费用审计，让同事委派任务时复用受控基础设施。 | 高级团队功能含 Premium，不宣称全部开源免费；需部署数据库和运行基础设施。 |
| 5592 | [Heym](https://github.com/heymrun/heym) | A self-hosted agent platform with workflows, evaluations, approvals, and team sharing. | 团队可共同维护流程、文件和dashboard，接企业OIDC并审阅执行。 | MIT加Commons Clause，属于source-available，受限制商业销售需另授权；worker本地存储依赖与安全边界需验证。 |
| 142 | [Cherry Studio Enterprise](https://github.com/CherryHQ/cherry-studio) | A privately deployable AI workspace with centralized model access, shared knowledge bases, and employee permissions. | 管理员统一分配模型和知识库权限，员工共用团队知识和配置，支持集中运维。 | 团队后台为商业企业版，仅部分源码向客户提供；AGPL 社区桌面版不包含这些后台能力。 |
| 1823 | [ByteRover CLI](https://github.com/campfirein/byterover-cli) | Version and curate agent context with optional team synchronization. | 团队审查知识变更、分支合并上下文，并在成员间共享项目经验。 | 默认本地，成员权限与共享空间由 Cloud 提供；Elastic License 2.0。 |
| 2427 | [OneCLI](https://github.com/onecli/onecli) | An employee-agent platform with sandboxed runtimes, shared policy, approval workflows, and credential gateways. | 每名员工配一个智能体，团队统一控制工具权限、共享连接和人工审批，从 Slack 或工作台使用。 | 普通代码 Apache-2.0，ee 目录生产使用需企业订阅；具体 IdP 等功能分界需按目录确认，不写全量免费。 |
| 3324 | [Spacebot](https://github.com/spacedriveapp/spacebot) | Run shared agent conversations, memory, and approved tasks across team channels. | 团队在 Slack/Discord 等并发协作，共享上下文并通过持久审批监督后台任务。 | FSL 两年后转 Apache，当前非宽松开源；跨渠道记忆与权限隔离未实测。 |
| 4266 | [Open Mercato](https://github.com/open-mercato/open-mercato) | A business-application framework with AI development workflows and permission-scoped assistants. | 团队共享业务架构、规格、review 流程，业务助手写操作由审批卡控制。 | 具体模块及隔离需部署验证；通用技能另仓，不能把宣传效率当实测。 |
| 5085 | [Agor](https://github.com/preset-io/agor) | A self-hosted workspace for running coding agents on isolated branches with shared sessions and project knowledge. | 实时光标、评论、共享会话和环境；分支权限、个人凭据、费用记录和共享知识库。 | README 明确 BSL 1.1 source-available，当前不能标为 OSI 开源；未部署实测。 |
| 2069 | [Archestra](https://github.com/archestra-ai/archestra) | An enterprise AI platform with chat, tool governance, and team cost tracking. | 团队统一助手、个人身份工具授权、私有 MCP 目录、SSO/RBAC 与费用。 | Open Core；README 免费范围为不足 30 人团队，企业许可另计。 |
| 4936 | [Arkon](https://github.com/nduckmink/arkon) | An organizational knowledge hub that compiles documents into a reviewed wiki and serves permission-scoped context through MCP. | 按部门与角色提供组织知识，编辑者审阅知识更新计划，支持草稿审批、版本回退和管理操作审计。 | 采用 PolyForm Internal Use，不能按标题直接标为 OSI 开源；通知系统和员工 CLI 等仍未完成。 |
| 442 | [OpenWork](https://github.com/different-ai/openwork) | A workspace for sharing agent workflows, skills, and connected services across people and tools. | 组织发布并分配能力给团队或个人，成员从已有 AI 客户端复用同一技能与连接，减少重复配置。 | 组织控制平面在 ee，生产使用受订阅及免费人数条件限制；不能把整个产品标为 MIT。 |
| 3014 | [Cordys CRM](https://github.com/1Panel-dev/CordysCRM) | A self-hosted CRM with AI skill interfaces and sales collaboration. | 销售团队共用客户、权限、审批记录和分析，接入 AI 辅助线索及成单分析。 | FIT2CLOUD 许可含 GPLv3 之外限制；AI 助手和分析引擎需配置。 |
| 4773 | [FIM One](https://github.com/fim-ai/fim-one) | An enterprise agent platform connecting business systems with configurable human approvals. | 业务团队可统一知识、数据和系统操作，通过组织成员审批敏感动作。 | Source Available 非 OSI；当前 IM 首发飞书，Slack/Teams/企微等部分仍在路线图。 |
| 5792 | [HiveChat](https://github.com/HiveNexus/HiveChat) | An AI chat application with centrally configured models, user groups, and group-specific token quotas. | 管理员一次配置模型，按成员分组控制模型访问和月度 Token 限额，可对接企微、钉钉、飞书登录。 | 多租户明确出现在 Cloud 版说明，不能据此推断自建版也支持；未实测第三方登录。 |

## 其余 185 个逐项分流

| ID | 项目 | 结论 | 团队价值依据 | 限制 / 下一步 |
| ---: | --- | --- | --- | --- |
| 2056 | [Kiro](https://github.com/kirodotdev/Kiro) | 方法技能另列 | 团队共享规格、项目规则与权限，通过组织身份和用量治理推广 AI 开发。 | 该仓库是问题跟踪器，不含 Kiro 产品源码；各入口成熟度不同。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 55 | [NextChat Enterprise](https://github.com/ChatGPTNextWeb/NextChat) | 商业或许可边界待核 | 企业版由管理员配置模型资源、成员及知识库权限，并集中审计团队对话。 | 这些团队能力明确来自另售 Enterprise Edition，不能归到 MIT 社区仓库或宣称免费自建可用。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5004 | [Navop](https://github.com/feigeCode/navop) | 商业或许可边界待核 | 研发运维团队可让助手复用数据库/远程操作上下文与审计。 | Apache 附补充许可限制收费/竞争用途；本机工作台非多人权限系统。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 6489 | [CliRelay](https://github.com/kittors/CliRelay) | 商业或许可边界待核 | 团队多人管理模型访问并让用户查询各自用量。 | 订阅/OAuth转接是否允许取决于上游条款，MIT不授予服务再分发权。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 2358 | [GoClaw](https://github.com/nextlevelbuilder/goclaw) | 商业或许可边界待核 | 服务器版为团队隔离成员会话和工作区，集中管理代理与渠道接入。 | Lite 桌面版无 RBAC/多租户；CC BY-NC，不应写成可无条件商业使用。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 4296 | [Treg](https://github.com/superdesigndev/treg) | 商业或许可边界待核 | 团队集中维护凭据与技能，让成员代理复用工具并保留调用审计。 | Apache 附加条款限制竞争性托管；第三方调用收费与自托管代码分开。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 4967 | [gawkbot](https://github.com/najmuzzaman-mohammad/gawkbot) | 保留待深核 | 团队可共享自动化机器人与工作面板，并人工审批对外写操作。 | Sustainable Use License 非宽松开源；unsafe 可绕过检查，集成数量和效果未测。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 5770 | [Agentic SOC Platform](https://github.com/FunnyWolf/agentic-soc-platform) | 保留待深核 | 安全团队在统一案件中共享SIEM数据、情报和调查报告。 | 模型配置影响数据流；全本地部署不自动保证外部LLM不收数据。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 6358 | [Atlassian MCP Server](https://github.com/atlassian/atlassian-mcp-server) | 工程组件另列 | 团队可按现有权限检索任务/知识并从助手处理工作。 | 云服务不是完整server源码；第三方连接器full/limited权限语义不同。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 70 | [Netdata](https://github.com/netdata/netdata) | 商业或许可边界待核 | 运维团队通过异常评分及集中告警定位故障；Cloud 提供成员权限和集中视图。 | Agent 是 GPL 开源，UI 与 Cloud 闭源；组织 RBAC/SSO 属于 Cloud，不写成开源 Agent 自带。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 480 | [Teable](https://github.com/teableio/teable) | 商业或许可边界待核 | 业务和研发围绕同一表格、视图、权限及自动化协作，AI 在已有业务数据上构建流程和应用。 | Standalone 自建没有 AI/App Builder；官方完整镜像需付费计划解锁 AI，不能宣传社区版免费全功能。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 720 | [Superset (coding workspace)](https://github.com/superset-sh/superset) | 保留待深核 | 工程师把并行 AI 任务分开运行，查看差异并交回编辑器或终端，接入团队现有代码评审流程。 | 不是 Apache Superset；ELv2 源码可见，不是标准开源；不宣称真人多人权限。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 3375 | [AgentsMesh](https://github.com/AgentsMesh/AgentsMesh) | 商业或许可边界待核 | 团队统一 runner、任务、组织成员和代理会话，协调分布式工作。 | BSL，README 要求生产商业许可至变更日，后转 GPL；未验证大规模运行。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 3730 | [ChatWiki](https://github.com/zhimaAi/chatwiki) | 商业或许可边界待核 | 运营客服团队共享账号权限、内容草稿与人机转接流程。 | 定制 Apache 衍生许可要求组织商业使用另授权，非纯 Apache。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1363 | [SQLBot](https://github.com/dataease/SQLBot) | 商业或许可边界待核 | 业务与数据团队共用数据问答、术语与 SQL 示例，并分配访问范围。 | FIT2CLOUD 许可证含 GPLv3 之外附加限制；未实测 SQL 正确率。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 3719 | [Loonflow](https://github.com/blackholll/loonflow) | 商业或许可边界待核 | 团队共用审批、部门角色和审计，代理通过同一权限服务处理工单。 | AGPL 核心，多租户需额外授权；托管 SaaS 独立。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 65 | [LobeHub](https://github.com/lobehub/lobehub) | 保留待深核 | README 明确 Workspace 团队共享空间，结合 Pages、项目和计划执行形成协作入口。 | 正文采用 LobeHub Community License，徽章仍写 Apache；不能据徽章宣称全量 Apache 开源；各部署版本功能未实测。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 117 | [Pathway](https://github.com/pathwaycom/pathway) | 商业或许可边界待核 | 同步 Drive、SharePoint、数据库等共享资料的变化，让团队应用使用持续更新的知识而非手动重建索引。 | BSL 1.1 源码可见；exactly-once 和部分分布式部署属 Enterprise；不宣称源系统权限自动继承。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 197 | [ToolJet](https://github.com/ToolJet/ToolJet) | 商业或许可边界待核 | AI 生成的页面和查询保留在团队可共同编辑的平台中，沿用权限、环境及版本历史。 | ToolJet AI 标注 Enterprise；MCP beta；不把高级 RBAC/SCIM 视为社区功能。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 429 | [NocoBase](https://github.com/nocobase/nocobase) | 商业或许可边界待核 | 业务人员可视化审查数据模型、页面和流程；AI 员工按角色、字段权限执行，保留可追溯记录。 | 插件化产品，未逐插件核验开源与商业授权，不能把全部产品能力归到免费版。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 559 | [Sealos](https://github.com/labring/sealos) | 商业或许可边界待核 | 团队统一云开发与部署环境，按工作区控制角色和资源额度，为 AI 应用提供运行基础。 | Sealos Sustainable Use 自定义许可，不是标准开源许可证；不将宣传的 AI-native 等同原生多人智能体产品。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1029 | [anarlog](https://github.com/fastrepl/anarlog) | 商业或许可边界待核 | 成员将会议音频转为可检查笔记，整理决策和待办后交接团队，IT 可评估自建组件。 | 社区本地应用 MIT，企业组件商业许可；不是 char 当前源码，未退役；是否本地处理取决于模型选择。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1520 | [Lightdash](https://github.com/lightdash/lightdash) | 保留待深核 | 数据与业务团队共用指标语义和权限，并通过 PR、CI 评审分析变更。 | 可自建核心 BI；AI 与企业产品介绍不能全部归入免费核心。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 2898 | [DeepTeam](https://github.com/confident-ai/deepteam) | 商业或许可边界待核 | 安全与 AI 团队共享风险场景、评估标准和回归检查。 | 团队托管报告在 Confident AI；本地运行不等于所用模型都离线。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 3577 | [Proma](https://github.com/proma-ai/Proma) | 商业或许可边界待核 | 团队版管理员可分配共享额度、查看用量并下发统一技能版本。 | 组织技能和额度管理属于商业版，开源版需自建且迭代放缓。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 4555 | [Hivemind](https://github.com/activeloopai/hivemind) | 方法技能另列 | 工程师的代理经验可在团队工作空间内检索和复用。 | 默认云后端；同工作空间所有用户可读捕获数据，支持退出采集；BYOC 不等于整个控制服务本地。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 6266 | [REBUILD](https://github.com/getrebuild/rebuild) | 商业或许可边界待核 | 业务团队可共享实体、部门角色、审批和专属助手。 | GPL/商业双许可，具体AI和高阶功能版差需确认。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 13 | [Anthropic Skills](https://github.com/anthropics/skills) | 商业或许可边界待核 | 把品牌规范、组织工作流程和文档操作封装成团队可复用技能；与已有 Agent Skills 标准是实现和规范的区别。 | 示范用途，不保证等同 Claude 产品行为；文档类技能是 source-available，不能统一标为 Apache 开源。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 612 | [CVAT](https://github.com/cvat-ai/cvat) | 商业或许可边界待核 | 标注与模型团队分配任务、按角色协作，并用评论和 issues 复核数据质量。 | SSO、部分 AI agents/SAM 功能属于 Online 付费或 Enterprise；serverless 第三方模型许可单独核验。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1921 | [Failproof AI](https://github.com/FailproofAI/failproofai) | 商业或许可边界待核 | 团队把策略提交版本库，在不同代理工具中保留统一会话与审计线索。 | 拦截能力因宿主而异，SDK 需额外 hook；MIT 加 Commons Clause，企业自建托管层另计。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5358 | [LuaN1aoAgent](https://github.com/SanMuzZzZz/LuaN1aoAgent) | 商业或许可边界待核 | 安全团队可追溯任务范围、工具调用和验证产物。 | 高风险人工审批仍未完成；v1成绩不归v2；AGPL/商业条款，未运行。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5377 | [Hopsworks](https://github.com/logicalclocks/hopsworks) | 商业或许可边界待核 | ML团队共享特征/模型/数据，按项目治理并追溯血缘。 | 托管serverless仍beta；本地企业部署条件与各组件许可需独立确认。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5810 | [Todo for AI](https://github.com/todo-for-ai/todo-for-ai) | 工程组件另列 | 团队成员和代理同步项目任务并保留人工监督。 | 企业安全/合规宣传未验证，需核查具体权限。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 362 | [Task Master](https://github.com/eyaltoledano/claude-task-master) | 保留待深核 | 把 PRD、任务拆分、状态和依赖显式记录，供开发者与智能体复用，减少任务交接歧义。 | MIT 加 Commons Clause，不标为标准 MIT；未核验独立团队协作服务的套餐边界。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 590 | [WrenAI](https://github.com/Canner/WrenAI) | 商业或许可边界待核 | 团队将指标、连接关系与业务知识版本化，给 AI 统一查询口径，再共享分析看板。 | 组织级部署、Git Sync 和高级治理含商业服务边界，不将全部团队云功能归给 Apache 引擎。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 713 | [Univer](https://github.com/dream-num/univer) | 工程组件另列 | 工程团队把表格、文档与 AI 操作嵌入业务应用，支持人工查看和选择合并智能体修改。 | 实时协作、历史和 worktree 依赖相应 SDK/Pro 能力；Workspace 是独立产品仓库。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 891 | [FiftyOne](https://github.com/voxel51/fiftyone) | 商业或许可边界待核 | 数据与模型团队用同一可视化视图检查样本和预测，定位数据问题并交接质量改进。 | 正式云端多人协作主要归 Enterprise，不当作开源版无条件提供。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1244 | [Flyte](https://github.com/flyteorg/flyte) | 工程组件另列 | 团队共享可恢复任务与算力工作流，衔接研发和生产运行。 | Flyte 2 分布式开源后端仍 coming soon；当前生产后端来自 Union，不混同 Flyte 1。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 1249 | [Refly](https://github.com/refly-ai/refly) | 商业或许可边界待核 | 团队将 SOP 变成可复用技能，在工作区维护版本与运行记录。 | 自定义 Apache 附加限制许可；部分导出与教程未完成，不采纳完全合规承诺。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1662 | [ZenML](https://github.com/zenml-io/zenml) | 保留待深核 | AI 工程团队共享运行指标、代码版本和环境，并复用现有基础设施。 | ZenML Pro 另列；不把企业支持全部归为 Apache 核心。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 1670 | [AstronRPA](https://github.com/iflytek/astron-rpa) | 商业或许可边界待核 | 业务团队共建跨应用自动化，并通过团队市场分享机器人和调度任务。 | 团队能力部分称 enterprise modules，具体版本和许可证条款待采用前确认。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 2155 | [Dagu](https://github.com/dagucloud/dagu) | 商业或许可边界待核 | 运维团队共享 YAML 流程、运行历史与人工任务，将模型或编码代理接入日常自动化。 | SSO、RBAC、审计等需 self-host 许可，不能因功能表而归免费社区版。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 4218 | [Wukong AICRM](https://github.com/WuKongOpenSource/Wukong-AICRM) | 商业或许可边界待核 | 销售、售前和客户成功团队共享客户上下文、任务分配与经验。 | 当前源码仅非商业用途开放；生产部署、商业使用和托管需另行商业授权。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 4697 | [Prismer Cloud](https://github.com/Prismer-AI/PrismerCloud) | 商业或许可边界待核 | 平台团队可复用代理上下文及跨会话经验。 | 托管能力与 MIT 接入代码边界未完整核实；Signet/LuminPulse 为另仓，不算本仓全量能力。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 86 | [Headroom](https://github.com/headroomlabs-ai/headroom) | 保留待深核 | 团队可在 AI 应用调用链压缩上下文，并将失败经验写入项目共用规则文件；组织部署另有服务。 | OSS 定位个人本地使用；组织集中配置、SSO 和共享看板属于单独服务；压缩质量和节省比例未实测。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 203 | [Novu](https://github.com/novuhq/novu) | 商业或许可边界待核 | 工程团队把智能体接入 Slack、Teams、邮件等既有沟通渠道，复用消息与会话基础设施。 | MIT 核心与 enterprise 商业目录分开；Novu Connect 演示不等于全部开源能力。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 332 | [NetBird Agent Network](https://github.com/netbirdio/netbird) | 商业或许可边界待核 | 平台团队通过集中访问策略控制智能体连接内部资源，减少到处散发服务密钥。 | Agent Network beta，不能把成熟 VPN 的状态套到 AI 子项目；各目录许可不同。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 354 | [Budibase](https://github.com/Budibase/budibase) | 商业或许可边界待核 | 员工请求可转为记录、审批与通知，业务和工程共同维护内部操作流程。 | GPL/MPL 核心与 BSL 付费功能分开，不能据产品总览宣称全部免费可自建。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 374 | [Kilo Code](https://github.com/Kilo-Org/kilocode) | 商业或许可边界待核 | 团队可在已有 PR 工作流接收 AI 审查反馈，成员选择不同编辑器时沿用同一工具生态。 | 开源客户端与 Cloud Agent/Code Reviews 服务分开，不声称审查后台全部在 MIT 仓库。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 926 | [VoltAgent](https://github.com/VoltAgent/voltagent) | 商业或许可边界待核 | 工程团队用同一 runtime 维护工具和流程，接入人工审批，并通过控制台排查运行情况。 | 开源 framework 与 VoltOps Console Cloud/Self-hosted 的功能授权需分别确认，不混同全部免费。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1164 | [Claude Agent SDK (Python)](https://github.com/anthropics/claude-agent-sdk-python) | 商业或许可边界待核 | 工程团队在业务应用中统一配置代理工具与批准策略，复用执行能力。 | 商业服务条款适用；allowlist 自动批准不等于移除未列工具。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1432 | [iPolloWork](https://github.com/Devin-AXIS/iPolloWork) | 商业或许可边界待核 | 围绕项目集中查看职责、任务、审批与可编辑成果，连接人与智能体工作。 | Source Available License；不同引擎集成方式不同，未核验多人隔离。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 2067 | [Spec Workflow MCP](https://github.com/Pimzino/spec-workflow-mcp) | 方法技能另列 | 团队围绕需求、设计与任务逐步审阅，记录反馈和修订。 | 作者暂休；用户认证和 HTTPS 尚未内置，需反向代理补足。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 2268 | [Tracecat](https://github.com/TracecatHQ/tracecat) | 商业或许可边界待核 | 安全团队共用事件、流程、工具和审计日志，协调 AI 辅助响应。 | 多租户与细粒度访问属 Enterprise；不能全算社区版。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 2747 | [SWIRL Community](https://github.com/swirlai/swirl-search) | 商业或许可边界待核 | 团队按来源系统权限搜索分散资料，减少另建知识副本的维护。 | MCP、三段重排、固定答案和幻觉提醒属于 Enterprise；数据不复制不等于模型不接收检索内容。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 2876 | [Rill](https://github.com/rilldata/rill) | 商业或许可边界待核 | 数据团队维护共同指标语义，业务成员与 AI 使用一致分析定义。 | 本地已有行级访问策略；Conversational BI、MCP 和托管部署列于 Cloud，不能全归本地版。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 4168 | [JeeSite 5](https://github.com/thinkgem/jeesite5) | 商业或许可边界待核 | 团队可复用组织权限底座、企业知识问答和业务工具集成。 | 社区/商业功能需区分；Apache 之外附补充条款，不能按纯 Apache 宣传。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 4198 | [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) | 商业或许可边界待核 | 团队可把企业数据库以受权限控制的 API 提供给 AI 应用。 | 审计、LDAP/SAML、部分连接器和多租户列入商业能力，不能全算社区版。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5454 | [LangChat](https://github.com/LangChat/langchat) | 商业或许可边界待核 | 企业团队可基于现有角色体系定制内部知识机器人。 | Pro商业版独立，根README未详分全部功能。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5655 | [Testsigma](https://github.com/testsigmahq/testsigma) | 商业或许可边界待核 | QA团队可复用测试资产、生成场景并接CI与缺陷系统。 | README混合商业产品介绍，未证实所有GenAI/治理能力在Apache仓中；效率比例未测。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5976 | [DocKit](https://github.com/geek-fun/dockit) | 商业或许可边界待核 | 数据团队成员可复用数据库查询、解释和诊断工具。 | Apache源码但官方build AI/MCP属付费Ultimate，非免费社区功能。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 6082 | [Gabber](https://github.com/gabber-dev/gabber) | 商业或许可边界待核 | 团队可构建多人语音/视频AI交互应用。 | 核心SUL/企业许可；移动/Unity等SDK仍coming soon。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 6096 | [HugAgentOS](https://github.com/ZJU-REAL/HugAgentOS) | 商业或许可边界待核 | 团队可评估企业部署底座与组织版扩展。 | 社区是个人workspace；团队权限/SSO/协作/审计属Enterprise，本体Apache附品牌条件。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 6563 | [ByteChef](https://github.com/bytechefhq/bytechef) | 保留待深核 | 团队可复用业务集成、审批和可恢复任务。 | 核心Apache，API发布/Git/关联审计属EE；skills/evals、SSO/高级RBAC仍开发中。 团队价值信号较强，保留后续补查；暂不把 README 能力直接写成收录结论。 |
| 71 | [MinerU](https://github.com/opendatalab/MinerU) | 商业或许可边界待核 | 将团队 PDF、Office 和图片资料转为统一结构及可追溯页块引用，接入共享知识库的数据处理链。 | 是解析组件，不是多人知识协作产品；MinerU 许可有 Apache 之外附加条件；不同格式和质量档能力不同。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 111 | [Strix](https://github.com/usestrix/strix) | 商业或许可边界待核 | 安全与开发团队通过可复现发现、修复建议及补丁交接安全问题，适合已有测试授权的工程流程。 | SSO 和定制报告属 Enterprise；云 PR Review 与本地 CLI 分开，不背书零误报或自动合规。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 128 | [PrivateGPT](https://github.com/zylon-ai/private-gpt) | 工程组件另列 | 工程团队可共享一个私有 AI 应用后端，复用文档接入、引用检索和工具集成能力。 | 不运行模型；RBAC、企业连接器、审计和终端用户工作区属于 Zylon，不属于 PrivateGPT API。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 166 | [Shannon (Keygraph)](https://github.com/KeygraphHQ/shannon) | 商业或许可边界待核 | 开发和安全团队可在本地或 CI 中验证问题，通过报告和 SARIF 交接修复。 | 组织级共享平台和全生命周期漏洞管理属 Keygraph Enterprise；不背书无误报宣传。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 503 | [Cube Core](https://github.com/cube-js/cube) | 商业或许可边界待核 | 数据团队一次定义指标、维度和访问规则，让 BI 与智能体使用一致业务口径。 | Core headless；Analytics Chat、工作簿和商业 RBAC 等不能归为核心自带 UI。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 637 | [RagaAI Catalyst](https://github.com/raga-ai-hub/RagaAI-Catalyst) | 商业或许可边界待核 | 工程与评估人员围绕同一项目管理测试数据和运行证据，比较改动并维护 guardrails。 | SDK 操作需要 Catalyst 认证，不能将 pip 包等同全量自托管平台。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 756 | [MeterSphere](https://github.com/metersphere/metersphere) | 商业或许可边界待核 | QA 与开发在系统/组织/项目层级共管用例、测试计划和缺陷，将 AI 生成用例接入现有测试流程。 | V1/V2 停维；V3 社区与企业版不同，自定义 GPL 附加限制许可不能简称纯 GPL。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1792 | [Kiln](https://github.com/Kiln-AI/Kiln) | 商业或许可边界待核 | 产品、领域专家和 QA 可打分、补样本和标回归，通过 Git 与工程师协作。 | 核心 Python/REST 为 MIT，桌面 app 为 source-available fair-code，不能统称 MIT。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1881 | [Seldon Core](https://github.com/SeldonIO/seldon-core) | 商业或许可边界待核 | 平台团队统一模型服务、管道与共享推理资源。 | Business Source License，不按历史 Apache 印象描述；商业使用需核对条款。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1914 | [Agentation](https://github.com/benjitaylor/agentation) | 商业或许可边界待核 | 产品、设计和 QA 标记页面元素，向开发及智能体交接准确定位与修改意见。 | 反馈工具，不是多人看板；PolyForm Shield 许可。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1982 | [FreeScout](https://github.com/freescout-help-desk/freescout) | 团队直接性不足 | 客服团队集中分派和处理客户对话，在现有共享邮箱中接入 AI。 | AI 是独立模块，本次未核验模块功能或费用；不能称核心内置全部 AI。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2523 | [sem](https://github.com/Ataraxy-Labs/sem) | 方法技能另列 | 团队评审实体级差异，并可用共享图和代理监听辅助讨论变更。 | 共享团队图属可选云层；登录本身不上传，非全部能力本地。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 2830 | [Tips for Publishing Research Code](https://github.com/paperswithcode/releasing-research-code) | 方法技能另列 | 研究团队统一依赖、训练、评估及复现命令，改善交接和成果发布。 | 属于工程方法；NeurIPS 2021 说明是历史背景，不当作当前会议要求。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 2924 | [Argent](https://github.com/software-mansion/argent) | 团队直接性不足 | 开发与 QA 共享确定性复现、视觉差异和性能诊断证据。 | 源码 Apache，但若干平台二进制专有且限制再分发；遥测默认开启可退出。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2944 | [DataChain](https://github.com/datachain-ai/datachain) | 团队直接性不足 | 数据团队复用明确版本和来源的上下文，避免重复处理并便于交接。 | 共享注册表、分布式计算、MCP 和权限在 Studio，不全属本地库。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3083 | [Mito](https://github.com/mito-ds/mito) | 团队直接性不足 | 数据团队通过表格操作生成可交接 Python 分析，并在 notebook 内检查和调试。 | Mito Pro 与开源能力需按方案区分，不把生成代码视作自动生产可靠。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3743 | [Pilot Shell](https://github.com/maxritter/pilot-shell) | 商业或许可边界待核 | 团队可通过 Git 共享规则与经验，复查计划、差异和运行证据。 | 安装会配置多项依赖/hooks；含许可证激活机制，不能笼统视作免费开源工具。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5175 | [Quilt](https://github.com/quiltdata/quilt) | 团队直接性不足 | 科研数据团队可共享带元数据、文档和血缘的可重现数据包。 | 完整搜索可视化、多用户协作治理属企业平台，非本仓全量开放能力。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 5248 | [FastClaw](https://github.com/fastclaw-ai/fastclaw) | 商业或许可边界待核 | 管理员可向用户共享模型/技能，用户拥有私有覆盖和隔离会话。 | Source Available，限制跨组织SaaS与移除品牌；隔离效果未测。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 6011 | [Swift iOS Skills](https://github.com/dpearson2699/swift-ios-skills) | 方法技能另列 | 移动团队可共享框架用法与开发约定。 | PolyForm Perimeter；部分框架beta，目标iOS26+不适合直接套旧平台。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 6025 | [Nekro Agent](https://github.com/KroMiose/nekro-agent) | 商业或许可边界待核 | 团队可复用机器人事件/工具集成和共享插件。 | 自定义Apache许可，结构化MCP管理预览；云社区不等于成员权限。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 6359 | [Lightswind UI](https://github.com/codewithMUHILAN/Lightswind-UI-Library) | 工程组件另列 | 前端团队可复用一致组件并共享Pro授权接入。 | Pro块/模板独立收费，世界首创比较不采信。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 715 | [Bytebase](https://github.com/bytebase/bytebase) | 商业或许可边界待核 | 研发、DBA 和安全人员在统一审批流程中处理 AI 数据操作，保留变更和访问记录。 | 各高级权限功能的社区/商业版本需按套餐确认，不把平台总览全部归为免费能力。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 1798 | [Open Executive](https://github.com/SenteLabsAI/OpenExecutive) | 商业或许可边界待核 | 管理团队复用组织知识、预算审批与渠道上下文，辅助项目协调。 | 云托管尚未来；共享密钥与 Google 登录配置有边界，不等于专业决策保障。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5409 | [HiMarket](https://github.com/higress-group/himarket) | 商业或许可边界待核 | 组织统一分发AI资源，控制订阅审批、身份、配额与用量。 | 依赖Higress/后端服务；治理效果和计费适用未实测。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 5843 | [HackGPT](https://github.com/yashab-cyber/HackGpt) | 团队直接性不足 | 安全团队可统一调查报告、角色及审计。 | 大规模企业级/零日能力未经测试；MIT附企业条款需核对，未执行攻击。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 5861 | [GoModel](https://github.com/ENTERPILOT/GoModel) | 商业或许可边界待核 | 平台团队可按用户/团队/key分配预算并观测调用。 | OIDC等Pro商业；对竞品和最快的断言未验证，不引用。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 6182 | [VoAPI](https://github.com/VoAPI/VoAPI) | 商业或许可边界待核 | 团队可统一模型分发与用户用量控制。 | 独立费率/权限定制属Pro，许可和部署需核对。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 12 | [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 团队直接性不足 | 把重复业务步骤转成可维护流程，由团队监控执行与成本并复用智能体模板。 | 团队用途是流程维护与运行，不宣称已核验细粒度多人权限；平台目录 PolyForm Shield，classic MIT。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 317 | [FastGPT](https://github.com/labring/FastGPT) | 商业或许可边界待核 | 团队可复用知识处理和工作流，构建内部问答与业务 AI 应用，减少各部门重复开发。 | FastGPT 自定义许可，社区版与商业版分开；未证明全部高级团队功能都在社区版。 团队价值存在，但版本、企业功能、托管服务或许可证边界需要确认。 |
| 433 | [Hindsight](https://github.com/vectorize-io/hindsight) | 团队直接性不足 | 工程团队为长期智能体建立可复用经验层，改进跨任务上下文连续性。 | 真人团队协作后台属于 Cloud 描述，不能混入 MIT 核心；不采纳最准确基准宣传。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 449 | [Skyvern](https://github.com/Skyvern-AI/skyvern) | 工程组件另列 | 技术和业务人员把重复网页操作组织成可维护流程，供内部运营复用。 | 云端 anti-bot 能力不在 AGPL 核心；不保证任意网站始终可用或不受页面变化影响。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 806 | [Infracost](https://github.com/infracost/infracost) | 团队直接性不足 | 团队在 AI 修改 IaC 的 PR 阶段看到费用变化，用共同政策审查部署前成本。 | 核心 CLI 已有独立仓库；组织政策仪表盘属于 Cloud，费用是估算不是账单保证。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 878 | [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 工程组件另列 | 开发者在团队 GitHub 工作流中处理任务和代码上下文，并受组织 Copilot 启用策略控制。 | 产品仓库不据此认定源码开源；需要相应 Copilot 访问，默认审批描述不替代具体模式配置。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 915 | [Open SWE](https://github.com/langchain-ai/open-swe) | 团队直接性不足 | 团队从 GitHub、Slack、Linear 或看板派任务，持续复用同一任务线程、CI 结果与评审反馈。 | 生产自建依赖 LangGraph Agent Server 许可 key，不能因应用 MIT 就宣称整栈无商业条件；开发中 API 会变化。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1288 | [Unstract](https://github.com/Zipstack/unstract) | 团队直接性不足 | 业务与数据团队复用文档提取流程并通过 API 或 ETL 交付。 | SSO、企业 RBAC 等属于托管企业方案；核心 AGPL。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1632 | [RuoYi AI](https://github.com/ageerle/ruoyi-ai) | 团队直接性不足 | 业务与研发共同维护模型、知识库和含人工审核的业务流程。 | 前端和管理端另仓；商业版独立，未核验具体 RBAC。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1748 | [Sparrow](https://github.com/katanaml/sparrow) | 团队直接性不足 | 业务和数据团队通过统一 API 处理票据、验证结果并编排后续任务。 | README 同时写 GPL 和营收/专有使用限制，需核对具体许可；云后端可选，不能笼统承诺不出网。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2678 | [Desloppify](https://github.com/peteromallet/desloppify) | 方法技能另列 | 团队在 CI 对完整项目设置质量门槛，持续跟踪结构问题和修复。 | CI 跳过主观阶段，非 diff-only 扫描；商业化许可有条件，分数不是正确性证明。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 2941 | [Lepton AI SDK](https://github.com/leptonai/leptonai) | 工程组件另列 | 平台团队统一部署端点、训练任务、存储与集群，并复用代理技能。 | Apache 仅 Python 库，不代表云平台或 GPU 算力免费开源。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 3600 | [Full Stack PM AI Courses](https://github.com/carlvellotti/free-ai-courses) | 方法技能另列 | 产品团队可用实际任务训练代理使用，建立与研发协作的共同方法。 | CC BY-NC-ND，课程免费不代表宿主模型免费或可任意改编。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 3758 | [superglue](https://github.com/superglue-ai/superglue) | 团队直接性不足 | 业务与工程团队共用数据映射、迁移和代理访问层，减少手动集成。 | 平台 FSL、SDK MIT；效率与自动迁移效果未测，重要业务数据需人工验证。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3890 | [Comp AI](https://github.com/trycompai/comp) | 团队直接性不足 | 合规团队集中整理证据、政策和控制实施任务。 | AGPL 核心与商业 /ee 分开；Docker/Vercel 部署步骤仍写 coming soon，不能保证认证结果。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3978 | [Diffgram](https://github.com/diffgram/diffgram) | 团队直接性不足 | 数据团队统一管理标注、预测和人工监督流程。 | 自定义 DLv2 商业许可；文档/HTML/DICOM 标为路线图，fak/DOS 是另仓。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4093 | [AI Code Review GitLab](https://github.com/sunmh207/AI-Codereview-Gitlab) | 团队直接性不足 | 研发团队在合并/提交时获得审阅记录，并把结果同步到团队通讯工具。 | 开源与 Pro 功能需区分；Task Flow 为另一个推荐项目，提交统计不能代表个人绩效。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4197 | [Timefold Solver](https://github.com/TimefoldAI/timefold-solver) | 团队直接性不足 | 团队可优化排班、任务分配和资源计划。 | 社区 Apache 与专有 Enterprise 分开；是传统优化 AI，不应标生成式 ai-native。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4246 | [Claude Agent SDK TypeScript](https://github.com/anthropics/claude-agent-sdk-typescript) | 工程组件另列 | 团队可将代码理解、文件操作和命令执行集成到内部服务。 | 受 Anthropic 商业服务条款约束，不能默认整套 MIT；运行权限需自行配置。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 4468 | [Testkube](https://github.com/kubeshop/testkube) | 团队直接性不足 | 工程团队可统一测试运行、结果与排障，把测试接入代理流程。 | 本仓 MIT agent；跨集群控制台、SSO/SCIM、团队 RBAC 等属于控制平面。 Testkube AI 的工作流生成、失败分析、修复 PR 也列在商业控制平面。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 5079 | [Kodus](https://github.com/kodustech/kodus-ai) | 方法技能另列 | 团队统一 Kody Rules 和 PR 反馈，减少反复讲解工程约定。 | 社区有规则/插件数量限制；Cockpit 属 Teams，SSO/RBAC/审计属 Enterprise。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 5596 | [Hexabot](https://github.com/hexabot-ai/Hexabot) | 工程组件另列 | 团队可复用跨渠道业务自动化。 | FCL-1.0-ALv2，不应当纯Apache；需Node及外部服务。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 5690 | [CosmoEdge](https://github.com/cosmo-wander-ai/cosmo-edge) | 工程组件另列 | 边缘平台团队可统一模型部署、告警和设备运营。 | Apache核心与商业模型/保护工具分开；各硬件模型和benchmark范围不同。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 5949 | [Audino](https://github.com/midas-research/audino) | 团队直接性不足 | 语音团队可管理标注项目并导出训练数据。 | CC BY-NC，商业团队需处理授权；v1/v2仍迁移中。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 6547 | [Tensorlake](https://github.com/tensorlakeai/tensorlake) | 团队直接性不足 | 平台团队可复用MicroVM与长任务运行API。 | 服务规模/性能宣传未测，源码SDK不证明完整云控制面开放。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 180 | [Kong AI Gateway](https://github.com/Kong/kong) | 工程组件另列 | 平台团队为内部服务和智能体统一 AI 入口与访问策略，减少各项目重复接入和运维。 | 开源 Gateway、AI 插件、商业增强与 Konnect 边界需按功能确认，不宣称全部社区版可用。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 206 | [PostHog](https://github.com/PostHog/posthog) | 工程组件另列 | 产品与研发共用行为、错误和模型调用数据，AI 将信号整理成报告或 PR，由团队评审处理。 | MIT 核心与 ee 目录分开；具体 AI 功能的托管/自建边界未逐项核验。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 309 | [Composio](https://github.com/ComposioHQ/composio) | 团队直接性不足 | 工程团队统一接入员工使用的 SaaS 工具，并为不同用户建立独立认证会话，减少重复集成。 | 仓库是 SDK monorepo；MIT 不代表整个 Composio 服务和工具后端均开源自建。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 333 | [Nx AI Tooling](https://github.com/nrwl/nx) | 团队直接性不足 | 团队在同一 monorepo/CI 工作流中分析失败、提出修复并验证，减少本地与 CI 背景切换。 | Nx 本地构建工具和云 CI 服务边界需分别确认，不将全部自修复能力视为免费本地功能。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 368 | [FastMCP](https://github.com/PrefectHQ/fastmcp) | 工程组件另列 | 工程团队将内部函数和数据包装成一致 MCP 接口，让不同 AI 客户端复用工具。 | 私有 registry、SSO、工具 RBAC、组织审计属于 Horizon，不属于 FastMCP 核心框架。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 438 | [PandasAI](https://github.com/sinaptik-ai/pandas-ai) | 工程组件另列 | 数据团队可给非技术同事提供自然语言查询与图表入口，复用现有分析数据。 | 库本身不是多人 BI 平台；ee 与托管企业服务独立；生成查询需验证。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 471 | [OpenObserve](https://github.com/openobserve/openobserve) | 工程组件另列 | 工程团队在同一观测平台关联应用与 LLM 数据，排查执行故障并维护告警。 | SSO、高级 RBAC、审计等属于 Enterprise；不引用成本倍率或合规保证。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 509 | [Kortix](https://github.com/kortix-ai/suna) | 团队直接性不足 | 公司共用 Git 里的技能、连接器和知识，智能体在隔离分支工作，通过人工批准的变更请求交付。 | 原 Suna；Teams 需开关，邮件/语音实验性；自建与商业组织能力边界需按版本核验。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 821 | [Nango](https://github.com/NangoHQ/nango) | 团队直接性不足 | 团队统一处理 SaaS OAuth、连接隔离和重试，让 AI 代表不同用户调用各自授权服务。 | Elastic 许可，免费自建功能受限；完整 Cloud/Enterprise 不等于免费源码功能。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 873 | [Weights & Biases Experiments](https://github.com/wandb/wandb) | 团队直接性不足 | ML 团队共用实验记录比较模型与参数变化，将数据到生产模型的结果持续追踪。 | MIT SDK 不代表整个平台免费自建；与已收录 Weave 的 LLM 应用观测分开。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 876 | [Prompt flow](https://github.com/microsoft/promptflow) | 工程组件另列 | 团队共同维护提示词与代码流程，把质量评估放进 CI 后再部署，比较改动效果。 | 正式多人云协作来自 Azure AI 版本；本地 MIT 工具不等同云工作区。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 1020 | [Databend](https://github.com/databendlabs/databend) | 团队直接性不足 | 数据与平台团队在共同数据引擎上向智能体提供查询、受控执行和快照实验，减少对生产数据的直接操作。 | Apache 与 Elastic 双重代码边界需按模块确认，不宣称全部开源免费或绝对安全。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1050 | [BAML](https://github.com/BoundaryML/baml) | 工程组件另列 | 工程团队以共用类型、错误和测试约定开发 AI 程序，通过多语言接口接入现有应用。 | 不依据旧印象仅描述提示词 DSL；编译类型约束不保证业务正确。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 1262 | [Guardrails AI](https://github.com/guardrails-ai/guardrails) | 团队直接性不足 | 团队将输出格式和风险检查写成可复用规则，统一应用质量边界。 | 托管远程推理已宣布停用；验证器迁移 PyPI，不能照旧部署说明推荐。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1382 | [Repowise](https://github.com/repowise-dev/repowise) | 团队直接性不足 | 开发者、评审者与智能体复用同一代码证据，减少重复调查。 | RBAC、多租户仍计划中；SSO 等在推出，商业能力不归开源核心。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1453 | [Materialize](https://github.com/MaterializeInc/materialize) | 团队直接性不足 | 数据团队统一提供跨系统实时视图，供 AI/RAG 和业务应用使用。 | BSL 1.1 四年后转 Apache；社区版有内存和磁盘额度。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1481 | [Rainbond](https://github.com/goodrain/rainbond) | 团队直接性不足 | 平台与交付团队统一部署 AI 软件和模型服务，减少基础设施操作负担。 | AI 编码部署入口 RainSkills 是独立项目；许可证含 Apache 之外条件。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1502 | [FalkorDB](https://github.com/FalkorDB/FalkorDB) | 工程组件另列 | 平台团队为 RAG 和记忆应用共建可查询知识关系层。 | SSPLv1，不应写成宽松许可证；多租户隔离未实测。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 1567 | [Baserow](https://github.com/baserow/baserow) | 工程组件另列 | 团队共建业务数据、内部应用与自动化，通过自然语言辅助搭建。 | Premium/Enterprise 不在 MIT 核心范围；合规宣传未独立审计。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 1629 | [GPUStack](https://github.com/gpustack/gpustack) | 团队直接性不足 | IT 与研发团队统一分配 GPU、提供模型服务并管理用户访问和用量。 | GPU 拓扑视图标为 Enterprise；引擎与模型兼容及性能未实测。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1701 | [TaskingAI](https://github.com/TaskingAI/TaskingAI) | 团队直接性不足 | 工程团队统一 AI 后端模块和控制台测试，前端可独立开发。 | 使用专属 TaskingAI 许可证；未核验企业权限或一键生产承诺。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1718 | [mirrord](https://github.com/metalbear-co/mirrord) | 团队直接性不足 | 开发者和编码智能体使用相同集群上下文调试，减少重复部署。 | 数据库分支、队列拆分和预览环境属于付费层；不执行 README 的自动试用指令。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 1971 | [Memgraph](https://github.com/memgraph/memgraph) | 工程组件另列 | 平台团队统一图关系与向量/全文查询，为共用知识应用供数。 | 基础 BSL、企业 MEL；SSO 和细粒度权限属于 Enterprise。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 1999 | [Pydantic Logfire](https://github.com/pydantic/logfire) | 工程组件另列 | 工程团队用统一追踪、指标、日志和 SQL 查询排查 AI 应用问题。 | 本仓库仅 SDK/文档；UI 与服务端闭源，自托管需企业许可。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 2029 | [Purple Llama](https://github.com/meta-llama/PurpleLlama) | 团队直接性不足 | 安全和 AI 团队共用输入输出防护与风险评估基准。 | 评估/基准 MIT，模型适用各 Llama Community 许可；不是全量 MIT。 主清单已有其中 Llama Guard；本候选仅评估是否扩展为整个 Purple Llama 工具/评估套件，不重复新增同一防护模型。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2151 | [Deepchecks](https://github.com/deepchecks/deepchecks) | 团队直接性不足 | ML 与工程团队共同检查测试结果，在 CI 和生产反馈中迭代模型。 | 监控另仓；高级功能商业许可，不能全部算 AGPL 核心。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2274 | [Vocode Core](https://github.com/vocodedev/vocode-core) | 团队直接性不足 | 客服与业务开发团队复用语音会话、电话和会议接入组件。 | 正在招募维护者；库不等于托管坐席平台，通信服务独立。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2310 | [Morphik Core](https://github.com/morphik-org/morphik-core) | 工程组件另列 | 团队应用可共用文档存储与检索层，处理图表等视觉上下文。 | 不是 Morphik 后台业务 AI workers；BSL 源码可见，各版四年后转 Apache。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 2334 | [md2wechat](https://github.com/geekjourneyx/md2wechat-skill) | 工程组件另列 | 内容团队复用排版与发布前检查，将草稿交运营人员审阅。 | Source Available；商业使用需授权，专业 API 单独提供。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 2341 | [Dataherald](https://github.com/Dataherald/dataherald) | 团队直接性不足 | 业务与数据团队共用问数 API、管理台和 Slack 入口。 | 裸引擎无用户/认证；管理台和 Slack 需 Enterprise 组件，授权细节需另核。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2354 | [Butterbase](https://github.com/butterbase-ai/butterbase) | 团队直接性不足 | 工程团队共用数据库、RLS 和后端工具，为 AI 应用统一基础接口。 | 自建不含上游 AI 路由适配、实际计费配额及客户管理面板，需自行实现。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 2453 | [Google Antigravity Python SDK](https://github.com/google-antigravity/antigravity-sdk-python) | 工程组件另列 | Python 团队复用代理运行层与状态管理，减少重复编排实现。 | 单独克隆不能运行，需包含编译运行时的 PyPI wheel；仓库许可不代表运行时全部源码公开。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 2730 | [Snyk Agent Scan](https://github.com/snyk/agent-scan) | 方法技能另列 | 安全团队检查代理工具供应链，并可将结果接入企业集中管理。 | 会发送脱敏后组件信息至扫描 API，非纯离线；CLI 输出实验性，企业 Evo 独立。 主要是技能、方法、模板或学习资料，适合实践栏目。 |
| 2881 | [EventCatalog](https://github.com/event-catalog/eventcatalog) | 工程组件另列 | 团队共同维护服务、消息、决策和 runbook，让人与代理查询同一架构上下文。 | 混合许可，付费目录商业授权；不能全部能力写为 MIT 核心。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 2996 | [Git AI](https://github.com/git-ai-project/git-ai) | 团队直接性不足 | 团队评审时追溯生成意图，按需扩展组织级使用与成本分析。 | 跨仓统计及安全提示存储属 Teams；squash/rebase 需 Teams 或 CI Actions 保持归因。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3075 | [Bright Data MCP](https://github.com/brightdata/brightdata-mcp) | 工程组件另列 | 研究与数据团队复用统一网页采集入口，接入知识和分析管道。 | 连接器依赖 Bright Data 托管服务，免费额度非永久保证；非整个采集平台开源。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 3364 | [UpTrain](https://github.com/uptrain-ai/uptrain) | 团队直接性不足 | 研发团队复用评分和根因分析模板，对比模型与检索方案。 | 真人协作功能仍 Coming Soon；模型评分调用可能传出数据。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3408 | [OpenMeter](https://github.com/openmeterio/openmeter) | 工程组件另列 | 工程、运营团队统一模型用量、访问额度和计费依据。 | 不是支付处理商、税引擎或完整财务系统，不自带操作 UI。 README 标注发布仍为 Beta，可能有破坏性变更。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 3417 | [Instill Core](https://github.com/instill-ai/instill-core) | 团队直接性不足 | 平台与数据团队复用资料处理、API 和模型部署链路。 | 基础平台，具体许可证和组织权限须按模块确认；未安装实测。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3526 | [Agent Vault](https://github.com/Infisical/agent-vault) | 工程组件另列 | 平台团队集中保管真实凭据，为代理配置服务范围和请求记录。 | 默认未匹配域名仍转发，需启用 deny；建议与代理不同主机，EE 与 Agent Proxy 分开。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 3579 | [Mutant](https://github.com/mbj/mutant) | 团队直接性不足 | 研发团队验证 AI 生成测试是否能抓住真实行为变化，辅助评审质量。 | 确定性测试工具非生成式 AI；商业许可证方案需确认，存活变异需人工判断。 README 明确商业使用需按开发者订阅。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3595 | [Beelzebub](https://github.com/beelzebub-labs/beelzebub) | 团队直接性不足 | 安全团队收集受控诱饵交互，接入既有日志和调查流程。 | 团队跨环境协调在托管 Platform；不保证发现所有注入，GPL。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3602 | [FOLib](https://github.com/BoCloud/folib) | 团队直接性不足 | 平台团队统一模型与依赖仓库、同步分发及 MCP 查询入口。 | GPL 描述同时附禁止商业售卖条款，采用前需核对，不称纯标准 GPL。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3674 | [GitHub Copilot App](https://github.com/github/app) | 团队直接性不足 | 研发团队把 issue、计划、代理进度和 PR 检查集中到同一工作台。 | 应用发布/反馈仓非完整开源代码保证；云端、账号与 BYOK 路径不同。 发布/反馈仓声明 All rights reserved，不能视为完整开源产品。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3776 | [Future AGI](https://github.com/future-agi/future-agi) | 工程组件另列 | 研发团队集中调查失败、比较评估与运行记录，形成改进闭环。 | nightly 早期测试版，Kubernetes/Helm 和 Marketplace 尚未来，SDK 分仓许可独立。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 3813 | [Spotify Portal AI Plugins](https://github.com/spotify/portal-ai-plugins) | 团队直接性不足 | 平台团队将服务归属、故障信息和操作入口提供给编码助手。 | 依赖 Spotify Portal 和认证；Shunt 当前仅面向 Claude，不是独立开放服务目录。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3830 | [Google Ads + Meta Ads + GA4 MCP](https://github.com/irinabuht12-oss/google-meta-ads-ga4-mcp) | 工程组件另列 | 营销团队统一查询广告表现、归因和活动配置。 | 文档接入的是 Ryze 托管服务，不能据 MIT 标记推定服务端可完整自托管；含修改广告的工具，未调用。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 3854 | [Notte](https://github.com/nottelabs/notte) | 工程组件另列 | 自动化团队可将确定性脚本与代理组合成可复用网页流程。 | SSPL v1；凭据保险库、托管会话等列在 API 服务部分，不能全算作本地核心能力。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 3980 | [Databricks AI Dev Kit](https://github.com/databricks-solutions/ai-dev-kit) | 团队直接性不足 | 数据工程团队可复用 Databricks 开发模式和官方代理技能入口。 | 受 Databricks License 约束；Genie Code 平台功能不等于本仓实现。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 3983 | [fastdup](https://github.com/visual-layer/fastdup) | 团队直接性不足 | 视觉团队可统一清洗分析训练素材，减少数据质量问题。 | 当前 README 标注 CC BY-NC-ND 4.0；不能因宣传 open-source 就假定商业使用和修改自由。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4057 | [NVIDIA Video Search and Summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) | 工程组件另列 | 视觉与运营团队可复用视频检索、事件分析和报告架构。 | 本地 NIM 需相应开发许可；仓库 Apache 与资产、服务许可分开。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 4061 | [Sourcery](https://github.com/sourcery-ai/sourcery) | 团队直接性不足 | 研发团队在 PR 入口获得自动审阅反馈，辅助人工 review。 | 服务接入仓不证明审阅引擎开源；私有仓需付费方案，代码片段会送模型服务。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4139 | [Monoscope](https://github.com/monoscope-tech/monoscope) | 工程组件另列 | 运维团队统一分析日志、指标与追踪，并定时汇总异常。 | AGPL；自托管认证/SSO 需自行配置，不等同云版内置能力。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 4220 | [AiEditor](https://github.com/aieditor-team/AiEditor) | 团队直接性不足 | 团队可在知识库、CMS 和业务系统中复用 AI 编辑能力。 | Pro 专业分页等与核心分开；README 未明确具体许可证，商业授权需查 LICENSE。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4325 | [Zilla](https://github.com/aklivity/zilla) | 工程组件另列 | 平台团队可统一代理工具端点、身份授权与遥测。 | Aklivity Community License 限制独立商业托管；高级 OAuth 和共享状态属 Plus。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 4339 | [UUSEC WAF](https://github.com/Safe3/uusec-waf) | 团队直接性不足 | 安全运维团队可用于网站/API 流量防护和规则管理。 | 防零日、低误报为项目自述，未测试；免费描述不证明完整源码与宽松许可。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4436 | [nao](https://github.com/getnao/nao) | 工程组件另列 | 数据团队维护上下文和评测，业务用户通过聊天可视化并反馈答案。 | 自托管不自动保证数据安全；任何数据栈支持为概述，需具体适配。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |
| 4492 | [LLM Gateway](https://github.com/theopenco/llmgateway) | 团队直接性不足 | 平台团队可统一模型调用入口与费用观测。 | 核心 AGPL；团队组织管理在企业版，多组织管理需 white-label 许可。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4683 | [Lemon AI](https://github.com/hexdocom/lemonai) | 团队直接性不足 | 团队可复用研究报告与分析产物，并进行人机反复修订。 | 自定义 Apache 附加限制；Docker 描述不证明独立强 VM，云模型启用后非零云依赖。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4850 | [MAESTRO Research Assistant](https://github.com/murtaza-nasir/maestro) | 团队直接性不足 | 研究团队可围绕计划与文档复用端到端调查流程。 | 当前 alpha；多人细粒度权限未证实；AGPL 或商业双许可。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4905 | [EigenFlux](https://github.com/phronesis-io/eigenflux) | 团队直接性不足 | 平台团队可部署统一代理信息交换层，减少重复发现。 | 自定义 Apache 附加条件；企业 hub 简化配置仍路线图，非真人成员平台。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4907 | [Refinery](https://github.com/code-kern-ai/refinery) | 团队直接性不足 | 工程师与领域专家可围绕标签函数和数据质量共同复核。 | 开源版明确单用户，团队工作空间及多用户为商业版。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4915 | [git-lrc](https://github.com/HexmosTech/git-lrc) | 团队直接性不足 | 团队可在共同 Git 工作流检查变更，并追踪哪些提交经过审阅。 | 自托管/SSO 属 Enterprise；防事故宣传不保证效果，服务数据路径需核实。 修改版 Sustainable Use License：限制转售、竞争性服务和商业再分发修改版本。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4916 | [ModelFox](https://github.com/modelfoxdotdev/modelfox) | 团队直接性不足 | 工程团队可复用多语言推理与统一模型产物。 | 除 crates/app 外 MIT；app 生产使用需付费许可。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4922 | [Nixopus](https://github.com/nixopus/nixopus) | 团队直接性不足 | 运维团队可集中部署、监控和处理应用故障。 | 跨机器部署、负载均衡和自动扩缩仍路线图；AGPL/商业许可，未验证自主修复效果。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4923 | [AgentQL](https://github.com/tinyfish-io/agentql) | 团队直接性不足 | 自动化团队可复用结构化网页查询与 Playwright 工作流。 | 依赖 AgentQL 服务；适配任何网页/自愈为宣传，不保证绕过授权或长期稳定。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 4997 | [Tabnine VS Code](https://github.com/codota/tabnine-vscode) | 团队直接性不足 | 研发团队可使用代码库上下文辅助实现、测试、解释和文档。 | 扩展仓不等于服务/模型全开源；企业定制与自托管有方案边界，不保证免法律责任。 当前证据更偏个人工具、代理编排或产物交接，暂不优先作为真人团队产品。 |
| 5010 | [Inkeep Agents](https://github.com/inkeep/agents) | 工程组件另列 | 业务和技术人员可在可视化与代码两种方式间共同维护同一智能体，工程侧接入 CI/CD。 | ELv2 加补充条款的源码可见许可，不标标准开源；Cloud 仍提供 waitlist 入口。 主要是工程集成、SDK、运行时或基础设施，适合组件栏目。 |

## 下一步

先补查上面的 15 个重点候选，再继续处理剩余 25 个商业/许可边界项目。
