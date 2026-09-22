# 团队价值快速二筛 · 第 2 批（累计 400 / 1,426）

核查时间：2026-09-22T00:18:16+08:00；各仓库实际读取时间见 CSV（UTC）。

沿用已保存的排序队列，本批逐项阅读接下来的 200 份源文核验记录，对 15 个重点候选补查官方 README、根许可证及仓库元数据。其余 185 个未在本批重新联网核验；自动排序只确定阅读顺序，不决定排除。累计二筛 400 个，剩余 1,026 个。前轮 4,099 个仅做简介初筛的项目不在本批范围内。

功能描述是官方文档的转述，未部署或运行项目。最近推送仅为仓库活动信号，不代表稳定版本或维护承诺。根许可证不涵盖所有依赖及托管服务。主清单未新增、未推送；“建议审阅”不等于确认收录。

## 分类结果

| 分类 | 数量 | 处理方式 |
| --- | ---: | --- |
| 建议审阅 | 9 | 已有明确的真人团队使用证据；补查官方资料后进入用户审阅短名单。 |
| 商业或许可边界待核 | 29 | 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 方法技能另列 | 39 | 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 工程组件另列 | 53 | 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 团队直接性不足 | 57 | 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 保留待深核 | 13 | 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |

## 建议审阅的 9 个

ID 沿用库存固定编号。星数为本批联网快照；团队用途及限制为中文转述，介绍为英文。

| ID | 项目 / Stars | Description (EN) | 跟 team 的关系 | 标签 | 根许可证 / 最近推送（UTC） | 限制 |
| ---: | --- | --- | --- | --- | --- | --- |
| 3026 | [SnapOtter](https://github.com/snapotter-hq/SnapOtter) · 2,718 | A self-hosted file-processing platform with OCR, transcription, and local AI. | 团队通过 UI/API 共用文档和多媒体处理流程，并接入 OIDC 登录。 | documents, automation | [AGPL-3.0](https://github.com/snapotter-hq/SnapOtter/blob/main/LICENSE) / 2026-09-21 | AGPLv3 与商业双许可；OIDC 登录已在文档列出，细粒度文档共享权限未实测；生产需替换默认演示配置。 |
| 4007 | [ClawManager](https://github.com/Yuan-lab-LLM/ClawManager) · 1,896 | A Kubernetes control plane for agent runtimes, governed model access, and reusable resources. | 平台团队集中管理多用户代理实例、身份目录、成本和运行治理。 | ai-native, governance, kubernetes, agent-operations | [MIT](https://github.com/Yuan-lab-LLM/ClawManager/blob/main/LICENSE) / 2026-09-21 | Team 编排部分包含代理成员，不能全解读为真人协作；各隔离模式及安全效果未测。 |
| 5336 | [TokenHub](https://github.com/astaxie/TokenHub) · 1,323 | A model-governance gateway with project keys, team permissions, usage attribution, and provider-bill reconciliation. | 成员、组长和管理员按职责管理模型与费用，平台和财务共用按项目、团队和成本中心归因的数据。 | gateway, governance, cost, self-hosted | [Apache-2.0](https://github.com/astaxie/TokenHub/blob/main/LICENSE) / 2026-09-21 | 上游提供商能力由账号决定；未验证账单对账准确性或宣称节省幅度。 |
| 5784 | [Alook](https://github.com/alookai/alook) · 1,188 | Shared rooms that let teammates work with persistent AI agents running on their own machines. | 邀请同事进服务器、频道或私信，通过固定身份共同访问本地编码智能体，跨设备延续对话。 | ai-native, collaboration, agents | [Apache-2.0](https://github.com/alookai/alook/blob/main/LICENSE) / 2026-09-21 | 自带已有智能体和模型服务；项目不供应或托管模型，未验证强多租户隔离。 |
| 911 | [doccano](https://github.com/doccano/doccano) · 10,771 | A collaborative text-annotation platform for building classification, entity, and sequence datasets. | 标注人员共同维护 NLP 训练或评估数据，借助项目和 API 交接数据给模型团队。 | data, annotation, collaboration | [MIT](https://github.com/doccano/doccano/blob/master/LICENSE) / 2026-04-14 | 用于协作准备 NLP 训练和评估数据，非 AI-native 助手；最近推送 2026-04-14，部署及权限粒度未实测。 |
| 1053 | [Kaneo](https://github.com/usekaneo/kaneo) · 9,147 | A self-hosted project-management workspace with an official MCP interface for tasks, projects, and labels. | 真人团队和 AI 共用现有任务与项目数据，智能体通过内建 MCP 接口减少手工搬运状态。 | tasks, collaboration, mcp, self-hosted | [MIT](https://github.com/usekaneo/kaneo/blob/main/LICENSE) / 2026-09-20 | 项目管理工具加 AI 接口，不宣称内置自主编码或高级权限。 |
| 2030 | [Octop](https://github.com/TencentCloud/Octop) · 4,501 | A self-hosted assistant for small teams with per-user agents and workspaces. | 小团队共用一个部署，通过 JWT 区分用户并把任务接到企业消息渠道。 | ai-native, teams | [MIT](https://github.com/TencentCloud/Octop/blob/main/LICENSE) / 2026-09-21 | 共享资源池和自主 AgentTeams 仍计划中；自建不等于云模型不出网。 |
| 2590 | [Open-Inspect](https://github.com/ColeMurray/background-agents) · 3,265 | A background coding system with multiplayer sessions and workplace integrations. | 同事可在同一会话协作，通过 Slack、工单和 PR 交接任务并保留提交归属。 | coding, collaboration | [MIT](https://github.com/ColeMurray/background-agents/blob/main/LICENSE) / 2026-09-21 | 仅限受信任的单组织部署；不校验每位用户的仓库权限，可访问共享 GitHub App 已授权的仓库，不能当作多租户隔离。 |
| 5230 | [Tracely](https://github.com/Jwuthri/Tracely-ai) · 1,354 | An agent evaluation platform that converts production failures into replayable regression cases and CI gates. | 团队在组织/工作区里把真实失败归类成问题、冻结测试，再阻止相同问题进入下一次 PR。 | evaluation, ci, observability, self-hosted | [MIT](https://github.com/Jwuthri/Tracely-ai/blob/master/LICENSE) / 2026-09-16 | dev 模式无认证，团队应选择对应身份模式；回放不等于真实外部环境所有行为均被覆盖。 |

## 官方证据

15 个重点候选中，9 个进入短名单；其余 6 个因许可冲突、企业版本边界、维护间隔或组件定位而分流。CSV 保存官方文档链接、读取时间及内容 SHA-256，便于复查。

| ID | 官方来源 | 功能依据 |
| ---: | --- | --- |
| 3026 | [README](https://github.com/snapotter-hq/SnapOtter/blob/main/README.md) · [元数据](https://api.github.com/repos/snapotter-hq/SnapOtter) | README L19、42–50、179–182：工具、本地 AI、SSO 与许可。 |
| 4007 | [README](https://github.com/Yuan-lab-LLM/ClawManager/blob/main/README.md) · [元数据](https://api.github.com/repos/Yuan-lab-LLM/ClawManager) | README LDAP/角色映射、owner isolation、AI Gateway、审计和共享资源。 |
| 4266 | [README](https://github.com/open-mercato/open-mercato/blob/main/README.md) · [元数据](https://api.github.com/repos/open-mercato/open-mercato) | README CRM/ERP、组织 RBAC、架构技能与 scoped AI assistants。；企业包 README: https://github.com/open-mercato/open-mercato/blob/main/packages/enterprise/README.md |
| 5053 | [README](https://github.com/ishaan1013/sandbox/blob/main/README.md) · [元数据](https://api.github.com/repos/ishaan1013/sandbox) | README L5、运行依赖 L24-36 |
| 5336 | [README](https://github.com/astaxie/TokenHub/blob/main/README.md) · [元数据](https://api.github.com/repos/astaxie/TokenHub) | README Enterprise Token Governance、角色表和 L75-79 |
| 5784 | [README](https://github.com/alookai/alook/blob/main/README.md) · [元数据](https://api.github.com/repos/alookai/alook) | README What is Alook、Features、Bring Your Own Agent |
| 5792 | [README](https://github.com/HiveNexus/HiveChat/blob/main/README.md) · [元数据](https://api.github.com/repos/HiveNexus/HiveChat) | README 功能概览 L9-23、后台管理 L52-54、Cloud 说明 L76-77 |
| 5810 | [README](https://github.com/todo-for-ai/todo-for-ai/blob/main/README.md) · [元数据](https://api.github.com/repos/todo-for-ai/todo-for-ai) | READMEreal-time humans/agents、项目洞察和task管理。 |
| 911 | [README](https://github.com/doccano/doccano/blob/master/README.md) · [元数据](https://api.github.com/repos/doccano/doccano) | README 定位、Features collaborative annotation |
| 1053 | [README](https://github.com/usekaneo/kaneo/blob/main/README.md) · [元数据](https://api.github.com/repos/usekaneo/kaneo) | README Why Kaneo、MCP Server L151-153 |
| 1938 | [README](https://github.com/rivet-dev/agentos/blob/main/README.md) · [元数据](https://api.github.com/repos/rivet-dev/agentos) | README L16–26、163、176–185：嵌入运行时、multiplayer 与权限。 |
| 2030 | [README](https://github.com/TencentCloud/Octop/blob/main/README.md) · [元数据](https://api.github.com/repos/TencentCloud/Octop) | README L50–52、66、108、495–496：多用户、工作区与审批。 |
| 2590 | [README](https://github.com/ColeMurray/background-agents/blob/main/README.md) · [元数据](https://api.github.com/repos/ColeMurray/background-agents) | README L10–19、31–68、190：多人会话、GitHub App 和访问边界。 |
| 3746 | [README](https://github.com/UniversalDataTool/universal-data-tool/blob/master/README.md) · [元数据](https://api.github.com/repos/UniversalDataTool/universal-data-tool) | README L26–39、55：多模态标注和实时协作。 |
| 5230 | [README](https://github.com/Jwuthri/Tracely-ai/blob/master/README.md) · [元数据](https://api.github.com/repos/Jwuthri/Tracely-ai) | README L9-14、Auth & teams L156 |

## 其余 191 个逐项记录

以下分流不构成永久排除。工程组件和实践资料仍可在相应栏目进一步考虑。

| ID | 项目 | 本批结论 | 团队价值依据 | 限制与下一步 |
| ---: | --- | --- | --- | --- |
| 3044 | [Harness Engineering by Ryan Lopopolo](https://github.com/lopopolo/harness-engineering) | 方法技能另列 | 团队把可靠性、权限、验证和经验沉淀为可复用工作环境。 | 工程方法文章，不是独立运行时；100 倍效果修辞未采信。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3047 | [OrgKernel](https://github.com/MetapriseAI/OrgKernel) | 工程组件另列 | 平台团队把智能体身份、单任务工具权限和执行记录接入组织工作流，追溯谁授权了什么动作。 | SSO/SAML、SCIM、策略引擎和权限图仍在路线图；不能照简介当成已支持，也不背书无法绕过宣传。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3058 | [MetaMCP](https://github.com/metatool-ai/metamcp) | 工程组件另列 | 团队统一工具命名空间与接入配置，使用 OIDC 和注册策略管理入口。 | 开发分支需验证，部分安全/观察中间件与检索仍计划中；社区 fork 独立。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3102 | [Yao Meta Skill](https://github.com/yaojingang/yao-meta-skill) | 方法技能另列 | 团队把个人技能转成可评审资产，核对兼容、权限与发布依据。 | beta 待外部测试；真实提供者、盲评、权限执行与遥测证据仍分项待完成。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3268 | [Learning Opportunities](https://github.com/DrCatHicks/learning-opportunities) | 方法技能另列 | 团队用项目内练习和前后测记录培养技能，帮助新成员理解代码库。 | 可选学习介入，不是绩效评分器；研究依据不保证单次训练效果。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3375 | [AgentsMesh](https://github.com/AgentsMesh/AgentsMesh) | 商业或许可边界待核 | 团队统一 runner、任务、组织成员和代理会话，协调分布式工作。 | BSL，README 要求生产商业许可至变更日，后转 GPL；未验证大规模运行。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 3391 | [Agents Best Practices](https://github.com/DenisSergeevitch/agents-best-practices) | 方法技能另列 | 团队复用权限、观察、恢复与交付检查的架构约定。 | 明确不替代运行时授权、沙箱和日志；未执行其自更新指令。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3485 | [Dash by Agno](https://github.com/agno-agi/dash) | 保留待深核 | 业务团队通过 Slack 问数，开发者管理身份和只读 SQL 权限。 | 生产需 AgentOS JWT 验证；自学习效果未测，不同于 Plotly Dash。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 3575 | [ToolHive](https://github.com/stacklok/toolhive) | 工程组件另列 | 平台团队集中分发工具、接入身份源、管理权限和观察日志。 | 身份策略需配置认证源；Stacklok Enterprise 附加能力另计，token 节省未实测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3636 | [WordPress Agent Skills](https://github.com/WordPress/agent-skills) | 方法技能另列 | 团队版本管理统一区块、插件、权限与项目分流规范。 | v1 仍迭代，测试来自维护者，未独立复现每个技能。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3673 | [MySQL MCP (benborla)](https://github.com/benborla/mcp-server-mysql) | 工程组件另列 | 数据与工程团队复用只读默认查询、schema 权限和脱敏入口。 | 写入可显式启用；脱敏和权限未实测，数据库账号仍需最小权限。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4168 | [JeeSite 5](https://github.com/thinkgem/jeesite5) | 商业或许可边界待核 | 团队可复用组织权限底座、企业知识问答和业务工具集成。 | 社区/商业功能需区分；Apache 之外附补充条款，不能按纯 Apache 宣传。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 4198 | [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) | 商业或许可边界待核 | 团队可把企业数据库以受权限控制的 API 提供给 AI 应用。 | 审计、LDAP/SAML、部分连接器和多租户列入商业能力，不能全算社区版。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 4204 | [Coding Agent Template](https://github.com/vercel-labs/coding-agent-template) | 工程组件另列 | 团队可部署按用户区分任务、API key 和 GitHub 身份的编码代理服务。 | 依赖 Vercel/Neon 等服务；模板仍需验证部署配置和隔离。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4266 | [Open Mercato](https://github.com/open-mercato/open-mercato) | 商业或许可边界待核 | 团队共享业务架构、规格、review 流程，业务助手写操作由审批卡控制。 | 核心 MIT；企业包含 MFA、SSO/SCIM、记录锁与 Agent Orchestrator，不属于开源许可范围。团队 AI 与企业模块边界应进一步确认。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 4275 | [AboutSecurity](https://github.com/wgpsec/AboutSecurity) | 方法技能另列 | 安全团队可共享代码审计、云与 AI 安全的检查方法。 | 方法资料非完整自动安全平台；关联 tchkiller 能力不算本仓，未执行任何技能。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4381 | [Durable Streams](https://github.com/durable-streams/durable-streams) | 工程组件另列 | 团队应用可复用多人/多设备同步和持久会话基础协议。 | 底层数据原语，应用身份授权和冲突处理仍需集成。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4565 | [WikiChat](https://github.com/stanford-oval/WikiChat) | 团队直接性不足 | 团队可搭建有引用的知识问答入口并保存用户会话。 | 主要围绕 Wikipedia，不是任意企业知识库；不保证完全无幻觉。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4649 | [Steedos / ObjectStack](https://github.com/steedos/steedos-platform) | 工程组件另列 | 团队可复用字段级权限、业务模块和工作流底座。 | 架构迁移中，v2仍支持而新开发聚焦 ObjectStack；新旧能力不可混为已完整迁移。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4681 | [Sandbox Agent](https://github.com/rivet-dev/sandbox-agent) | 工程组件另列 | 平台团队可统一远程代理控制、权限交互、轨迹存储和回放。 | 运行在已有 sandbox 内，本身不供应底层隔离；Gigacode 为实验功能。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4720 | [MATLAB MCP Server](https://github.com/matlab/matlab-mcp-server) | 工程组件另列 | 工程研究团队的成员可各自复用 MATLAB 计算与检查工具。 | 明确禁止多个用户共享 MCP 服务器，集中共享需联系 MathWorks；MATLAB 许可另算。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4754 | [SkillKit](https://github.com/rohitg00/skillkit) | 方法技能另列 | 团队提交 .skills manifest，使成员安装一致技能集。 | 上游技能许可证独立；宣称支持数量及兼容性未逐端测试。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4861 | [Minutes](https://github.com/silverstein/minutes) | 团队直接性不足 | 团队成员可整理会议决策并授权助手检索历史记录。 | 本地记录非多人协作库；选择云总结或助手时授权内容会发往供应商。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4944 | [Rulesync](https://github.com/dyoshikawa/rulesync) | 方法技能另列 | 团队维护单一规则来源，同步不同工具的 skills、MCP 与权限配置。 | 各工具支持面不同；ignore 已弃用但14.x仍兼容，需按迁移规则。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4967 | [gawkbot](https://github.com/najmuzzaman-mohammad/gawkbot) | 商业或许可边界待核 | 团队可共享自动化机器人与工作面板，并人工审批对外写操作。 | Sustainable Use License 非宽松开源；unsafe 可绕过检查，集成数量和效果未测。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5053 | [Sandbox (ishaan1013)](https://github.com/ishaan1013/sandbox) | 保留待深核 | 成员实时共同编辑代码，结合 AI 补全、终端与预览进行结对开发和原型评审。 | 最近推送为 2025-01-08，距核查日超过一年；维护与依赖兼容性待确认。依赖 Clerk、Liveblocks、E2B、Cloudflare，非完全离线自建。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 5236 | [MemoraX Code](https://github.com/memorax-ai/memorax-code) | 团队直接性不足 | 工程团队可复用项目规则、架构决策和已验证修复知识。 | shared主要指跨工具会话，未证明组织成员隔离。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5346 | [LLM SAST Skills](https://github.com/utkusen/sast-skills) | 方法技能另列 | 安全研发团队可共享代码审计步骤与报告格式。 | 模型提示不等价确定性SAST，误报/漏报未测；未执行扫描。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5345 | [StenographAI](https://github.com/stenolabs/stenoai) | 团队直接性不足 | 团队成员可整理会议摘要与回查对话，适合本地处理要求。 | Linux为alpha；外部模型可选，启用后并非绝不离开设备，赞助API另算。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5365 | [Duckle](https://github.com/slothflowlabs/duckle) | 工程组件另列 | 数据团队可在Git审阅单文件流水线，区分部署与启用权限。 | 单机定位非分布式仓库；AI引擎可选下载，性能宣传未复现。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5405 | [autocontext](https://github.com/greyhaven-ai/autocontext) | 团队直接性不足 | 工程团队可比较代理迭代，复用trace、报告、playbook和数据集。 | 递归改善依赖评测标准，不保证任何任务成功。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5450 | [AIPEXBASE](https://github.com/kuafuai/aipexbase) | 工程组件另列 | AI应用团队可复用身份、权限和可调用后端能力。 | 具体服务能力和成熟度未测；AI-generated案例不能证明安全性。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5454 | [LangChat](https://github.com/LangChat/langchat) | 商业或许可边界待核 | 企业团队可基于现有角色体系定制内部知识机器人。 | Pro商业版独立，根README未详分全部功能。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5467 | [Caliber](https://github.com/caliber-ai-org/ai-setup) | 方法技能另列 | 团队可同步规则并引导新成员安装hooks，减少上下文漂移。 | 分数为结构/路径检查非语义准确率；PowerShell-only可漏hooks，生成调用外部模型。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5541 | [Engineering Workflow Skills](https://github.com/jsmastery-pro/skills) | 方法技能另列 | 团队把状态保存在规格/测试/规则文件中，可跨成员接力。 | 方法依宿主执行，检查不保证需求全部满足。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5587 | [LangChain Skills](https://github.com/langchain-ai/langchain-skills) | 方法技能另列 | 团队可共享框架开发与人工审批模式。 | early development；LangSmith轨迹工作流另仓。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5592 | [Heym](https://github.com/heymrun/heym) | 商业或许可边界待核 | 团队可共同维护流程、文件和dashboard，接企业OIDC并审阅执行。 | MIT加Commons Clause，属于source-available，受限制商业销售需另授权；worker本地存储依赖与安全边界需验证。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5646 | [Bernstein](https://github.com/sipyourdrink-ltd/bernstein) | 工程组件另列 | 团队可版本化代理权限、验收与产物血缘。 | Beta；HMAC审计和强文件隔离需opt-in，调度确定性不等于LLM确定性。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5707 | [AgentShield](https://github.com/affaan-m/agentshield) | 工程组件另列 | 安全团队可审阅密钥、权限、hooks和MCP配置。 | 规则可能误报漏报，分数不证明安全；事件统计与赞助托管推理非本次验证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5754 | [TypedAI](https://github.com/TrafficGuard/typedai) | 保留待深核 | 研发团队可共同使用AI工作流并接入GoogleCloudIAP身份。 | 更多auth和infra scripts仍coming soon，需具体云部署。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 5769 | [Magic Cloud](https://github.com/polterguy/magic) | 工程组件另列 | 团队可构建内部后台并按角色给代理业务操作权限。 | 托管代码生成器独立且未来定价待定；sandbox安全宣传未验证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5792 | [HiveChat](https://github.com/HiveNexus/HiveChat) | 商业或许可边界待核 | 管理员一次配置模型，按成员分组控制模型访问和月度 Token 限额，可对接企微、钉钉、飞书登录。 | 根 LICENSE 为 Apache 加附加条件，开发并分发衍生作品要求商业许可，不能标为标准 Apache。最近推送为 2025-09-16；Cloud 多租户不归自建版。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5810 | [Todo for AI](https://github.com/todo-for-ai/todo-for-ai) | 商业或许可边界待核 | 团队成员和代理同步项目任务并保留人工监督。 | README 标 MIT，但根 LICENSE 实为 Apache-2.0，存在许可标识冲突，确认前暂缓推荐。组织权限未实测。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5829 | [GPT-RAG](https://github.com/Azure/GPT-RAG) | 工程组件另列 | 组织可跨业务知识源构建带权限裁剪的问答流程。 | 加速器模板需云配置，ZeroTrust定位不等于自动合规认证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5913 | [Zylos](https://github.com/zylos-ai/zylos-core) | 保留待深核 | 团队可通过飞书/Telegram共享任务入口和带审计通信。 | Slack等需自写channel，生产可靠为作者自述。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 5916 | [Prompt Poet](https://github.com/character-ai/prompt-poet) | 方法技能另列 | 技术与非技术成员可共同维护提示模板和截断优先级。 | 模板不是多人编辑服务，需控制输入与执行环境。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5951 | [Call.md](https://github.com/video-db/call.md) | 保留待深核 | 团队成员可整理会前/中/后信息并接后续流程。 | 录音/转写/AI内容发VideoDB，不是全本地会议工具；权限配置需确认。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 5976 | [DocKit](https://github.com/geek-fun/dockit) | 商业或许可边界待核 | 数据团队成员可复用数据库查询、解释和诊断工具。 | Apache源码但官方build AI/MCP属付费Ultimate，非免费社区功能。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6082 | [Gabber](https://github.com/gabber-dev/gabber) | 商业或许可边界待核 | 团队可构建多人语音/视频AI交互应用。 | 核心SUL/企业许可；移动/Unity等SDK仍coming soon。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6266 | [REBUILD](https://github.com/getrebuild/rebuild) | 商业或许可边界待核 | 业务团队可共享实体、部门角色、审批和专属助手。 | GPL/商业双许可，具体AI和高阶功能版差需确认。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6358 | [Atlassian MCP Server](https://github.com/atlassian/atlassian-mcp-server) | 商业或许可边界待核 | 团队可按现有权限检索任务/知识并从助手处理工作。 | 云服务不是完整server源码；第三方连接器full/limited权限语义不同。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6489 | [CliRelay](https://github.com/kittors/CliRelay) | 商业或许可边界待核 | 团队多人管理模型访问并让用户查询各自用量。 | 订阅/OAuth转接是否允许取决于上游条款，MIT不授予服务再分发权。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6570 | [ApeAdmin](https://github.com/KevinLiss/ApeAdmin) | 工程组件另列 | 团队可把业务后台按现有角色权限暴露为代理工具。 | 部署底座不含业务插件；AI编写不是唯一AI依据，安全未测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2 | [Superpowers](https://github.com/obra/superpowers) | 方法技能另列 | 将设计确认、计划、测试和审查写成可复用工作规范，减少同事使用不同 AI 编码方式带来的交接差异。 | 技能和开发方法集合，不是多人协作平台；具体流程应按团队规则调整。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4 | [ECC](https://github.com/affaan-m/ECC) | 方法技能另列 | 统一开发规则、审查流程和团队版本化记忆，便于跨工具交接上下文。 | 不同运行时功能不等价；开源仓库与付费 ECC Pro GitHub App 分开；未测试规则效果。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 22 | [LangChain](https://github.com/langchain-ai/langchain) | 工程组件另列 | 工程团队统一模型、检索器和工具接口，复用应用组件并协作迭代。 | 不自带多人工作区；LangSmith、LangGraph 是独立产品；现有清单只有 HITL 文档，不能算已收录整个框架。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 84 | [Orca](https://github.com/stablyai/orca) | 团队直接性不足 | 从团队工单开启隔离任务，查看 PR 并将 diff 评论反馈给智能体，衔接团队任务与代码审查。 | 桌面工作台与手机遥控，不宣称多人实时共同编辑；团队关联通过已有 GitHub/Linear 工作流。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 87 | [Ruflo](https://github.com/ruvnet/ruflo) | 团队直接性不足 | 工程团队可复用任务流程和项目记忆，通过跨部署通信及变更前检查交接工作。 | 主要是智能体编排，不能当成多人 SaaS；不背书自动合规、零泄漏或性能倍数；Web UI beta。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 94 | [OpenSpec](https://github.com/Fission-AI/OpenSpec) | 方法技能另列 | 统一需求、设计和实施任务；跨仓库规格库让平台团队维护规范、产品团队只读引用，便于计划评审和交接。 | 跨仓库 Stores 为 beta；采用 Git 共享，不是独立项目管理 SaaS。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 111 | [Strix](https://github.com/usestrix/strix) | 商业或许可边界待核 | 安全与开发团队通过可复现发现、修复建议及补丁交接安全问题，适合已有测试授权的工程流程。 | SSO 和定制报告属 Enterprise；云 PR Review 与本地 CLI 分开，不背书零误报或自动合规。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 140 | [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 工程组件另列 | 让开发和 QA 工作流基于真实浏览器截图、网络请求、控制台与性能 trace 验证改动，改善问题复现和交接。 | 不是团队协作界面；官方只保证 Chrome/Chrome for Testing，部分性能工具会请求 CrUX。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 153 | [CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 工程组件另列 | 工程团队可为已有办公、设计和协作软件建立可复用操作接口，接入内部 AI 自动化流程。 | 生成接口框架，不等于所有软件已经支持；各 harness 的依赖、质量和授权需分别核验。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 166 | [Shannon (Keygraph)](https://github.com/KeygraphHQ/shannon) | 商业或许可边界待核 | 开发和安全团队可在本地或 CI 中验证问题，通过报告和 SARIF 交接修复。 | 组织级共享平台和全生命周期漏洞管理属 Keygraph Enterprise；不背书无误报宣传。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 209 | [MindsHub](https://github.com/mindsdb/mindshub) | 保留待深核 | 把 AI 生成的内部工具和分析发布成团队可访问 URL，支持自建平台统一运行。 | superproject 为 MIT，但子模块各有许可；推理服务独立，不宣称所有托管能力均在源码中。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 221 | [LangExtract](https://github.com/google/langextract) | 工程组件另列 | 数据与业务团队将文本抽取为统一结构，并通过原文定位及 HTML 结果审查、交接。 | 组件而非多人标注平台；模型推断的准确性需人工验证，不能等同事实保证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 222 | [Open Code Review](https://github.com/alibaba/open-code-review) | 团队直接性不足 | 团队在合并前获得带代码上下文的审查评论，也可扫描现有目录辅助接手代码。 | 需要模型端点；不把作者基准优势视为普遍效果，仍需人工审查。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 276 | [GitHub MCP Server](https://github.com/github/github-mcp-server) | 工程组件另列 | 把团队已有代码、Issue、PR 和 CI 状态接入 AI，减少背景搬运并支持协作任务处理。 | 能力受授权和组织策略约束；GitHub Enterprise Server 不支持同样的远程托管路径。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 299 | [Google Workspace CLI](https://github.com/googleworkspace/cli) | 工程组件另列 | 让智能体处理团队 Drive、日历、邮件等现有工作资产，统一 API 调用及结构化输出。 | 仓库明确不是 Google 官方支持产品；尚未 v1，可能破坏性变更，权限由 OAuth 控制。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 323 | [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | 工程组件另列 | 团队构建可交接、可人工介入和可追踪的 AI 应用，以共用框架排查执行问题。 | 软件开发组件，不是多人协作平台；各模型与沙箱服务费用和边界独立。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 362 | [Task Master](https://github.com/eyaltoledano/claude-task-master) | 商业或许可边界待核 | 把 PRD、任务拆分、状态和依赖显式记录，供开发者与智能体复用，减少任务交接歧义。 | MIT 加 Commons Clause，不标为标准 MIT；未核验独立团队协作服务的套餐边界。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 367 | [DESIGN.md Specification](https://github.com/google-labs-code/design.md) | 方法技能另列 | 设计与研发把视觉规范作为共同文件交给 AI，并比较版本变化、检查 token 和结构，改善设计交接。 | 规范与工具，不是多人设计 SaaS；对比 Awesome DESIGN.md 的第三方案例应分开。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 417 | [Distilly](https://github.com/titanwings/distilly) | 方法技能另列 | 将同事提供的经验、决策模式和工作资料整理成可复用技能，辅助人员交接和知识传承。 | 原名 Colleague Skill；输出是资料驱动画像，不是本人、授权替身或其真实观点，需检查来源与使用范围。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 443 | [Archon](https://github.com/coleam00/Archon) | 团队直接性不足 | 把团队规划、实现、测试、审查和 PR 过程写进仓库 YAML，从多个协作入口复用。 | 确定的是流程结构，不保证生成结果确定性或无冲突；未实测部署。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 510 | [DBX](https://github.com/t8y2/dbx) | 团队直接性不足 | 团队可自建浏览器入口，复用数据库连接，并给 AI 限定只读、数据写入或高风险操作范围。 | 未证实多用户细粒度 RBAC；连接操作模式不等同完整组织权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 511 | [Google Agent Skills](https://github.com/google/skills) | 方法技能另列 | 采用 Google 栈的团队复用架构、认证、AI 安全和企业检索等操作方法，统一工程交接。 | 技能包不提供相关云服务；各服务权限和费用独立，未运行技能。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 514 | [Pydantic AI](https://github.com/pydantic/pydantic-ai) | 工程组件另列 | 工程团队用统一类型和数据校验约定协作开发 AI 应用，减少模型输出与业务代码接口错配。 | Harness、Logfire、Gateway 是独立层或产品，不把全部治理能力归入基础库。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 515 | [DB-GPT](https://github.com/eosphoros-ai/DB-GPT) | 团队直接性不足 | 数据团队把数据库、表格与知识库接入同一分析流程，生成可交接的图表、报告和摘要。 | 不宣称已有细粒度多人员权限；SQL 和代码产出仍需验证。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 559 | [Sealos](https://github.com/labring/sealos) | 商业或许可边界待核 | 团队统一云开发与部署环境，按工作区控制角色和资源额度，为 AI 应用提供运行基础。 | Sealos Sustainable Use 自定义许可，不是标准开源许可证；不将宣传的 AI-native 等同原生多人智能体产品。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 570 | [Cloudflare Security Audit Skill](https://github.com/cloudflare/security-audit-skill) | 方法技能另列 | 安全审查以覆盖台账和可核验发现交接，区分确认、待验证与已排除问题，便于团队复审。 | 单仓库起步技能，不等同 Cloudflare 内部全量安全系统；未执行任何审计。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 600 | [Claude SEO](https://github.com/AgriciDaniel/claude-seo) | 方法技能另列 | 营销团队和代理商用统一审查流程生成可验证改进清单，便于向研发或客户交接。 | 公共 MIT 与私有社区镜像分开；不背书流量效果或耗时承诺。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 602 | [Data Formulator](https://github.com/microsoft/data-formulator) | 团队直接性不足 | 数据分析者把来源关系、探索分支和图表保留下来，便于向同事解释分析路径与结果。 | 人机分析工作台，不宣称多人员实时协作或细粒度权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 612 | [CVAT](https://github.com/cvat-ai/cvat) | 商业或许可边界待核 | 标注与模型团队分配任务、按角色协作，并用评论和 issues 复核数据质量。 | SSO、部分 AI agents/SAM 功能属于 Online 付费或 Enterprise；serverless 第三方模型许可单独核验。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 615 | [OpenWiki](https://github.com/langchain-ai/openwiki) | 团队直接性不足 | 团队共用代码 wiki、版本化来源和配置，在源码变化后更新说明，降低入职与交接文档过时风险。 | 模型生成仍需 review；不能因 grounded claims 机制就保证文档始终准确。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 621 | [Memvid](https://github.com/memvid/memvid) | 工程组件另列 | 工程团队可将记忆数据作为可版本化文件交接和复用，支持可审查的 AI 工作流。 | 可携带文件不是多人权限治理；不引用基准领先或延迟倍率。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 648 | [Framelink Figma MCP](https://github.com/GLips/Figma-Context-MCP) | 工程组件另列 | 设计师的 Figma 文件成为开发智能体的结构化输入，减少截图和口头说明的交接损耗。 | 第三方实现，非 Figma 官方；不保证一次生成即准确还原。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 720 | [Superset (coding workspace)](https://github.com/superset-sh/superset) | 商业或许可边界待核 | 工程师把并行 AI 任务分开运行，查看差异并交回编辑器或终端，接入团队现有代码评审流程。 | 不是 Apache Superset；ELv2 源码可见，不是标准开源；不宣称真人多人权限。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 872 | [Loop Engineering](https://github.com/cobusgreyling/loop-engineering) | 团队直接性不足 | 团队把日常 triage、CI 和 PR 跟进流程变成有状态可检查的循环，保留验证和交接依据。 | 初期 report-only；不是自动重构保证，具体执行策略需按项目配置。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 891 | [FiftyOne](https://github.com/voxel51/fiftyone) | 商业或许可边界待核 | 数据与模型团队用同一可视化视图检查样本和预测，定位数据问题并交接质量改进。 | 正式云端多人协作主要归 Enterprise，不当作开源版无条件提供。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 957 | [Metaflow](https://github.com/Netflix/metaflow) | 工程组件另列 | 科学家与工程师在统一代码、数据、运行和产物记录上协作，把实验可追溯地交给生产。 | 框架与 Outerbounds 服务分开，基础设施和生产编排需配置。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 963 | [OpenChamber](https://github.com/openchamber/openchamber) | 团队直接性不足 | 工程师围绕团队 Issue、失败检查和审查意见启动任务，使用变更导览理解 AI 改动再交付。 | 多端个人会话不宣称多人权限；独立于 OpenCode 官方团队。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 984 | [Visual Explainer](https://github.com/nicobailon/visual-explainer) | 方法技能另列 | 将智能体输出变成同事易读的 HTML 图解和比较表，支持设计审查与需求交接。 | PPTX best-effort，HTML 为依据；可视化不证明内容正确。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 996 | [Feynman](https://github.com/Companion-Inc/feynman) | 团队直接性不足 | 研究团队可围绕来源、文档产物和验证记录审查成果，保留注释与版本便于交接。 | 本地 workbench 不宣称完整多用户组织平台；研究结论需人工核查。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1015 | [drawio-skill](https://github.com/Agents365-ai/drawio-skill) | 方法技能另列 | 团队维护可编辑架构图、同步真实系统变化，并用多视图及 walkthrough 进行设计评审和交接。 | 仿真与自检不证明架构正确；不是此前未选 Next AI Draw.io 项目。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1088 | [BentoML](https://github.com/bentoml/BentoML) | 工程组件另列 | 模型与平台团队通过版本化服务包交付推理接口，减少环境差异和部署交接成本。 | BentoCloud 是独立托管服务，开源框架不包含所有运营后台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1139 | [CCPM](https://github.com/automazeio/ccpm) | 方法技能另列 | 真人与智能体共用 GitHub Issue 状态和评论，保留需求到代码的交接链。 | 技能流程，不是另一个有完整 RBAC 的管理服务。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1158 | [K8sGPT](https://github.com/k8sgpt-ai/k8sgpt) | 工程组件另列 | SRE 团队把集群检查结果转成可理解排障解释，减少交接背景成本。 | 模型是否外传数据取决于配置；不是自动修复保证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1184 | [deepsec](https://github.com/vercel-labs/deepsec) | 团队直接性不足 | 安全团队可对大型代码库做持续可恢复审查，并交接持久化发现。 | 大库扫描成本可能很高；仅资料核验，未运行。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1197 | [Evidently](https://github.com/evidentlyai/evidently) | 工程组件另列 | 团队共用指标、参考集和通过条件，把评估接 CI 并交接可读报告。 | LLM judge 不是事实保证；Cloud 与本地库独立。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1211 | [AI Dev Tasks](https://github.com/snarktank/ai-dev-tasks) | 方法技能另列 | 团队用同一需求和任务格式逐步批准 AI 修改，便于跟踪与交接。 | 提示模板，不是强制执行审批平台。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1249 | [Refly](https://github.com/refly-ai/refly) | 商业或许可边界待核 | 团队将 SOP 变成可复用技能，在工作区维护版本与运行记录。 | 自定义 Apache 附加限制许可；部分导出与教程未完成，不采纳完全合规承诺。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1264 | [Apache HertzBeat](https://github.com/apache/hertzbeat) | 工程组件另列 | 运维团队在同一平台收集信号、分析告警并通知已有协作渠道。 | 无采集 agent 不代表没有 AI；未核验所有 AI 子功能。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1363 | [SQLBot](https://github.com/dataease/SQLBot) | 商业或许可边界待核 | 业务与数据团队共用数据问答、术语与 SQL 示例，并分配访问范围。 | FIT2CLOUD 许可证含 GPLv3 之外附加限制；未实测 SQL 正确率。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1381 | [Engram](https://github.com/Gentleman-Programming/engram) | 团队直接性不足 | 团队可通过记忆约定和 Git 同步交接项目上下文。 | 默认本地记忆；云共享可选，不能把本地安装等同多人服务。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1544 | [Ouroboros by Q00](https://github.com/Q00/ouroboros) | 方法技能另列 | 团队将需求转成可追踪规格及 GitHub Epic/Task，便于审查和交接。 | 业务插件另仓；与 razzant 同名项目无关系，自改进效果未实测。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1557 | [OpenPencil by ZSeven-W](https://github.com/ZSeven-W/openpencil) | 保留待深核 | 设计与研发可共同编辑画布，查看远端光标和冲突并交接设计。 | 旧 TypeScript 编辑器已退役；赞助商能力不归本项目，Rust 产品仍开发中。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 1578 | [LoopX](https://github.com/loopx-project/loopx) | 团队直接性不足 | 团队保留任务目标、人工关口与证据，便于恢复和交接。 | 不是自主生产控制器；跨主机共享目标协调仍孵化中。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1697 | [AI Data Science Team](https://github.com/business-science/ai-data-science-team) | 团队直接性不足 | 数据团队保存项目、步骤谱系与可重现脚本，便于交接分析。 | Beta，0.1.0 前可能破坏兼容；team 主要指智能体。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1766 | [Code-Graph-RAG](https://github.com/vitali87/code-graph-rag) | 工程组件另列 | 开发团队复用代码关系和代理笔记，辅助排错、变更审查和交接。 | 共享图的清空涉及所有项目；托管和企业服务另计。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1792 | [Kiln](https://github.com/Kiln-AI/Kiln) | 商业或许可边界待核 | 产品、领域专家和 QA 可打分、补样本和标回归，通过 Git 与工程师协作。 | 核心 Python/REST 为 MIT，桌面 app 为 source-available fair-code，不能统称 MIT。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1876 | [AIPOCH Open-Science](https://github.com/aipoch/open-science) | 团队直接性不足 | 研究团队可交接带生产代码和执行证据的图表、报告与项目产物。 | 本地工作台，shared Notebook 不足以证明真人实时多人编辑。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1904 | [Atlas by pacifio](https://github.com/pacifio/atlas) | 保留待深核 | 团队将提交关联提示、工具和决策，通过组织同步交接编码上下文。 | 本地默认，团队同步需登录；Linux 构建未测试。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 1914 | [Agentation](https://github.com/benjitaylor/agentation) | 商业或许可边界待核 | 产品、设计和 QA 标记页面元素，向开发及智能体交接准确定位与修改意见。 | 反馈工具，不是多人看板；PolyForm Shield 许可。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1933 | [Latitude](https://github.com/latitude-dev/latitude-llm) | 团队直接性不足 | 团队把运行问题归组、交接给编码代理生成 PR，再用失败样本复核。 | 自修复为工作流定位，不保证自动正确；托管额度可能变化未作为推荐依据。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1938 | [Rivet agentOS](https://github.com/rivet-dev/agentos) | 工程组件另列 | 工程团队可让多名用户观察和协作同一智能体，并统一会话记录。 | 具备多人共同观察同一代理的集成能力，但仍是嵌入式 runtime，不是即用团队工作台；转工程组件栏目。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2133 | [Malwoverview](https://github.com/alexandreborges/malwoverview) | 团队直接性不足 | 安全分析团队整合情报来源，将风险解释和分析建议交接给同事复核。 | AI 为可选增强，不是完整 SOC 协作系统；部分情报服务需付费密钥。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2217 | [ClaraVerse](https://github.com/claraverse-space/ClaraVerse) | 团队直接性不足 | 团队可复用集成与流程，并在人审看板中检查代理任务交付。 | Crew 主要指智能体团队；同步默认针对设备，未核验企业 SSO/SCIM，AGPL。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2314 | [Acontext](https://github.com/memodb-io/Acontext) | 工程组件另列 | 团队可检查、纠正并复用代理经验，通过普通文件和 Git 交接上下文。 | 自动归纳仍需审核；不是语义向量检索或多人权限后台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2355 | [OpenScience by Synthetic Sciences](https://github.com/synthetic-sciences/openscience) | 团队直接性不足 | 研究团队可交接代码、资料和实验过程，由人检查结果与证据。 | 与 AIPOCH 同名项目独立；BioNeMo 接口实验性，未证明真人实时多人编辑。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2390 | [Expect](https://github.com/millionco/expect) | 团队直接性不足 | 研发与 QA 用真实浏览器检查变更，交接可复现问题和回归结果。 | CI 自动批准测试计划且不提取 cookies，30 分钟超时；移动测试与托管企业版尚未来，未实测。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2444 | [Hyperresearch](https://github.com/jordan-gibbs/hyperresearch) | 团队直接性不足 | 研究团队复用带来源的资料库、报告检查和运行清单，交接可追溯调查。 | 榜单为内部测试且第三方验证待完成；不是准确性保证。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2478 | [HolmesGPT](https://github.com/HolmesGPT/holmesgpt) | 团队直接性不足 | SRE 团队把告警、日志和知识库汇成调查结果，并交接修复建议。 | Operator 需 Kubernetes；README 同时述只读与写回/开 PR，不能称所有模式只读；Teams 经 Robusta。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2549 | [SocratiCode](https://github.com/giancarloerra/SocratiCode) | 工程组件另列 | 研发团队复用代码与基础设施索引，辅助影响分析和跨代理交接。 | 共享团队云索引/SSO/审计为 private beta；本地多代理索引不等于多人权限。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2604 | [AX (Google)](https://github.com/google/ax) | 工程组件另列 | 平台团队统一任务资源、预装上下文、网络白名单和恢复操作。 | 未稳定，可能重大破坏性变更；底层隔离依赖 Agent Substrate，规模宣称未实测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2624 | [Squad by bradygaster](https://github.com/bradygaster/squad) | 方法技能另列 | 工程团队把代理角色和决策保留在仓库，通过 issue 分流、人审和升级机制协作。 | 主要人领导代理，不等同多人身份平台；预览 SDK 独立成熟度。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 2625 | [Mnemosyne](https://github.com/mnemosyne-oss/mnemosyne) | 工程组件另列 | 团队可在实例间同步记忆、交接上下文并保留变更事件。 | 同步不自动证明访问隔离和冲突一致性；不是独立多租户平台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2642 | [Paper2Agent](https://github.com/jmiao24/Paper2Agent) | 方法技能另列 | 研究团队把论文方法封装成可交接工具，降低同事重复搭建成本。 | 自动生成可靠性需复核，原论文和代码授权分别适用。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 2645 | [EFAK-AI](https://github.com/smartloli/EFAK) | 团队直接性不足 | 运维团队共用实时指标和自然语言诊断，交接性能与消费延迟分析。 | 建议不等于已验证修复；未核验多人权限粒度。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2709 | [Comet](https://github.com/rpamis/comet) | 方法技能另列 | 团队保存需求、依赖、验收与归档，通过可检查状态和技能评估交接工作。 | Native 与 Classic 独立流程；多代理不是多人权限平台，评分不保证质量。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 2784 | [Deepnote Open Source](https://github.com/deepnote/deepnote) | 保留待深核 | 数据团队可用清晰 notebook 差异交接分析，再按需使用云端共同编辑。 | 同一 notebook 多人协作与更强算力属于 Deepnote Cloud，不全在开源核心。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 2830 | [Tips for Publishing Research Code](https://github.com/paperswithcode/releasing-research-code) | 商业或许可边界待核 | 研究团队统一依赖、训练、评估及复现命令，改善交接和成果发布。 | 属于工程方法；NeurIPS 2021 说明是历史背景，不当作当前会议要求。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 2908 | [Amurex Meeting Copilot](https://github.com/thepersonalaicompany/amurex) | 团队直接性不足 | 参会同事可整理会议要点、行动项和迟到回顾，便于工作交接。 | 本仓为 Chrome 会议扩展，不代表 Amurex 全部生态功能；未实测转写质量。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2912 | [Cabinet](https://github.com/cabinetai/cabinet) | 团队直接性不足 | 团队可用可版本化资料、决策和人机频道衔接工作任务。 | AI team 主要代理，不推断组织鉴权；调用外部模型不能保证数据绝不离机。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2921 | [MCP Apps](https://github.com/modelcontextprotocol/ext-apps) | 工程组件另列 | 团队应用把代理结果转为可审阅与操作的 UI，提高人机协作可见性。 | 需合规宿主支持；规范/SDK 不是现成多人平台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2944 | [DataChain](https://github.com/datachain-ai/datachain) | 商业或许可边界待核 | 数据团队复用明确版本和来源的上下文，避免重复处理并便于交接。 | 共享注册表、分布式计算、MCP 和权限在 Studio，不全属本地库。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 2970 | [Visa Vulnerability Agentic Harness](https://github.com/visa/visa-vulnerability-agentic-harness) | 工程组件另列 | 安全与研发团队通过静态种子、候选发现、修复和验证结果交接问题。 | 修复和验证在默认配置中关闭；LLM 发现与补丁需人审，仅限授权代码，未实测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3038 | [Designer Skills Pack](https://github.com/Owl-Listener/designer-skills) | 方法技能另列 | 设计团队共用评审、交接规格、流程节奏与设计债整理方法。 | 技能库非设计协作应用；宿主费用与产品信息不以本 README 为权威。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3083 | [Mito](https://github.com/mito-ds/mito) | 商业或许可边界待核 | 数据团队通过表格操作生成可交接 Python 分析，并在 notebook 内检查和调试。 | Mito Pro 与开源能力需按方案区分，不把生成代码视作自动生产可靠。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 3097 | [ORG-2](https://github.com/org2AI/ORG2) | 保留待深核 | 同事可回放智能体如何完成工作、在上下文中评论，把代码改动追溯到请求和执行会话。 | 组织级项目管理、自建 Supabase 会话协作和群组 Issue 工作流仍标 WIP，不能当成成熟完整平台。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 3103 | [MemSearch](https://github.com/zilliztech/memsearch) | 工程组件另列 | 团队可复用项目笔记与语义检索，跨编码工具交接上下文。 | 多用户需专用 Milvus；跨工具记忆不自动等于权限隔离，后台归纳需复核。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3125 | [Apache Hamilton](https://github.com/apache/hamilton) | 工程组件另列 | 数据科学、工程与运维共用流程和 UI，检查结果、排查失败并交接。 | 数据流程框架，UI 和执行环境需另部署，不是现成业务助手。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3201 | [CodeMachine](https://github.com/moazbuilds/CodeMachine-CLI) | 团队直接性不足 | 工程团队将研究、实现和审查步骤显式化，跨项目复用并交接上下文。 | headless 代理层，自动化程度可变，不等于默认人工审批。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3202 | [OSSInsight](https://github.com/pingcap/ossinsight) | 团队直接性不足 | 团队可调查 AI 工具生态、仓库活动与协作网络，辅助选型研究。 | 贡献统计不是人员绩效或项目质量的直接证明，排名和总量未刷新。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3207 | [Shippie](https://github.com/mattzcarey/shippie) | 团队直接性不足 | 研发团队将聚焦问题的评论接入 PR，辅助人工发现缺陷和边界条件。 | 需代码与 PR 写权限；不是自动替代人工评审，旧称 Code Review GPT。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3285 | [Shepherd](https://github.com/shepherd-agents/shepherd) | 团队直接性不足 | 团队先审工作区产物和执行记录，再选择应用或放弃结果。 | early alpha；macOS/Linux 执行 OS 级授权，Windows 不支持需 WSL；外部副作用不一概可回滚。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3312 | [Agentic Project Management](https://github.com/sdi2200262/agentic-project-management) | 方法技能另列 | 团队可检查规格、规则、任务总结和交接文件，保持跨会话项目状态。 | 人手执行每次代理交换，并非自动编排后台；不同于微软同缩写 APM。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3321 | [Lanhu MCP](https://github.com/dsphper/lanhu-mcp) | 工程组件另列 | 设计、开发和测试共用需求与设计稿，通过留言板和飞书提醒交接分析。 | 企业级权限仍计划中；协作者记录不是蓝湖官方组织成员权威来源。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3369 | [AiSOC](https://github.com/beenuar/AiSOC) | 团队直接性不足 | 安全团队集中查看事件、调查步骤和判断依据，支持分析交接。 | 无 key 的 sandbox demo 是模拟器，部分 npm/视频待发布，不能证明真实检测效果。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3380 | [TEngine](https://github.com/Alex-Rachel/TEngine) | 团队直接性不足 | 游戏研发团队共用架构查询、任务分级和规范检查，协作维护 Unity 项目。 | AI 是项目开发工作流而非游戏内模型功能；框架与 MCP 环境需另配置。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3400 | [Figma Console MCP](https://github.com/southleft/figma-console-mcp) | 团队直接性不足 | 设计与研发同步 tokens、检查组件和版本差异，交接可编辑设计资产。 | 功能依本地/云模式和 Figma API；自动扫描不等于可访问性认证。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3450 | [Ripwire](https://github.com/redhat-et/ripwire) | 工程组件另列 | 研发团队复用确定性调用图、影响范围和测试定位，辅助审查与交接。 | 部分规则未验证且人类友好输出仍路线图；性能/token 数据未复现。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3457 | [COCO Annotator](https://github.com/jsbroks/coco-annotator) | 保留待深核 | 视觉团队共用网页标注与数据格式，准备可交接训练集。 | 高级企业工具 DataTorch 独立；未验证部署维护和多用户粒度。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 3551 | [MCPJam](https://github.com/MCPJam/inspector) | 工程组件另列 | 工具团队同步服务器配置，比较客户端行为并在 CI 检查回归。 | 托管版仅 HTTPS，不含 stdio、隧道、skills/tasks；本地版范围不同。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3562 | [Deep Research Web UI](https://github.com/AnotiaWang/deep-research-web-ui) | 团队直接性不足 | 研究团队可导出报告、检查来源并保留修改前历史，便于复核交接。 | 客户端模式仍向配置服务发送 API 请求；服务端共享 key 不等于组织权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3600 | [Full Stack PM AI Courses](https://github.com/carlvellotti/free-ai-courses) | 商业或许可边界待核 | 产品团队可用实际任务训练代理使用，建立与研发协作的共同方法。 | CC BY-NC-ND，课程免费不代表宿主模型免费或可任意改编。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 3618 | [noScribe](https://github.com/kaixxx/noScribe) | 团队直接性不足 | 研究团队可在本机整理访谈文本，再人工核对并交接分析材料。 | 单机转写非多人访谈管理系统；官网为 noscribe.de，未验证准确率。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3746 | [Universal Data Tool](https://github.com/UniversalDataTool/universal-data-tool) | 保留待深核 | 数据团队实时共同标注并用标准格式交接训练数据。 | 最近推送为 2025-03-15，距核查日超过一年；维护与现代部署兼容性待确认。免注册协作不等于企业身份隔离。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 3780 | [EvalAI](https://github.com/Cloud-CV/EvalAI) | 工程组件另列 | 研究团队统一数据划分、评估协议和提交结果，协作比较实验。 | 基准基础设施，容器评估和额外算力需配置，不保证排名代表泛化。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3870 | [Context+](https://github.com/forloopcodes/contextplus) | 工程组件另列 | 研发团队可让助手查询大型代码库结构与引用影响，提高交接和修改上下文质量。 | 准确率宣传未验证；是代码上下文组件，不是团队权限平台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4040 | [grepai](https://github.com/yoanbernabeu/grepai) | 工程组件另列 | 团队可让助手检索代码意图并分析调用影响，辅助交接与修改。 | 本地隐私取决于实际嵌入配置；节省 token 的效果未测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4114 | [Slack MCP Server](https://github.com/korotovsky/slack-mcp-server) | 工程组件另列 | 团队助手可检索频道和线程，汇总沟通上下文。 | 非 Slack 官方；优先合规 OAuth 接入，stealth 不是免除访问授权；发消息默认禁用。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4143 | [Routa](https://github.com/phodal/routa) | 团队直接性不足 | 研发团队可集中审阅任务、轨迹、交付证据和验收状态。 | 多代理协调不自动证明多人访问控制；代理验证不取代人工验收。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4182 | [SolidGPT](https://github.com/AI-Citizen/SolidGPT) | 团队直接性不足 | 研发团队可结合代码与工作文档理解项目上下文。 | 建议少于100文件、最多500文件；未证明组织权限与大仓库规模能力。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4273 | [Nimbalyst](https://github.com/nimbalyst/nimbalyst) | 团队直接性不足 | 研发团队可整理代理交付文档、任务和代码，逐项接受或拒绝可视化差异。 | 同步服务器是独立项目，不属于本 MIT 仓完整实现；部分 agent provider 为 alpha。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4407 | [OpenReview](https://github.com/vercel-labs/openreview) | 团队直接性不足 | 研发团队可在 GitHub 评论触发审阅并通过反应选择建议。 | Beta，可能破坏性变更；可推送 PR 修改，需配置机器人权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4487 | [Claude Code Skills and Agents](https://github.com/feiskyer/claude-code-settings) | 方法技能另列 | 研发团队可复用问题修复、PR 审阅、计划评审和交接流程。 | 第三方配置，所谓官方 marketplace 指安装机制；手动安装可能覆盖配置，未执行。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4581 | [Reversa](https://github.com/sandeco/reversa) | 方法技能另列 | 研发团队可沉淀遗留业务规则、ADR 和模块契约，支持交接与改造。 | 提取规格需人核验；代理 Teams 不等于组织权限。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4659 | [OrcaRouter Lite](https://github.com/Continuum-AI-Corp/OrcaRouter-Lite) | 团队直接性不足 | 小型平台团队可复用模型入口和故障切换。 | 没有多租户/RBAC/SSO/审计控制台，Teams 版尚待推出；Docker 镜像仍 coming soon。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4738 | [PaperDebugger](https://github.com/PaperDebugger/paperdebugger) | 团队直接性不足 | 研究团队可在写作界面获得审阅建议和评论材料。 | README 只读声明与插入/自动评论功能有张力，不能承诺绝不修改；可靠性仍改善中。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4794 | [agtx](https://github.com/fynnfluegge/agtx) | 团队直接性不足 | 研发团队可跟踪规格、计划、差异与审阅材料的交付流程。 | 共享看板主要供代理；部分容器流程预接受 bypass，不能默认安全。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4801 | [agmsg](https://github.com/fujibee/agmsg) | 团队直接性不足 | 研发团队可复用跨工具代理交接与审阅通信，减少手工复制。 | 本地薄传输层，team 指代理组，不提供组织权限或执行隔离。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4822 | [Voxbento](https://github.com/fossasia/voxbento) | 保留待深核 | 活动团队可协调同传席位、交接和聊天，并结合转写为参会者提供内容。 | 主体为真人同传平台，AI 是辅助转写；不应标全自动翻译系统。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 4950 | [Superlog](https://github.com/superloglabs/superlog) | 团队直接性不足 | 运维团队可集中调试遥测与事件，并接入调查 runtime。 | 默认 community runner 仅记录本地事件摘要，不能等同云端自主调查全部能力。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5018 | [Obsei](https://github.com/obsei/obsei) | 团队直接性不足 | 客服运营团队可把评论/新闻分类、情感和 PII 分析结果投递到工单等系统。 | 明确 Alpha，master 可破坏性变动；更多媒体类型仍未来方向。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5045 | [KitOps](https://github.com/kitops-ml/kitops) | 工程组件另列 | 数据科学、开发和 SRE 团队可统一交接不可变 AI 产物并接入签名/发布流程。 | 扫描和签名需搭配其他工具；可审计不自动等于合规。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5269 | [px0](https://github.com/px0-ai/px0) | 团队直接性不足 | 研发团队可审阅代码图与Git差异，并把修改需求交回代理。 | 性能宣传未测；部分代理默认自动授权，远程部署需访问控制。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5339 | [nvk LLM Wiki](https://github.com/nvk/llm-wiki) | 方法技能另列 | 团队可把研究与批准简报转成交付项目，保留来源和交接快照。 | 文件/跨runtime共享不等于成员权限；导出需验证隐私范围。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5375 | [GTM Engineer Skills](https://github.com/onvoyage-ai/gtm-engineer-skills) | 方法技能另列 | 增长团队可交接品牌分析、内容简报、图表和网站改进文件。 | 不保证搜索排名/AI引用，来源和素材仍需人工复核。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5438 | [Jupyter MCP Server](https://github.com/datalayer/jupyter-mcp-server) | 工程组件另列 | 数据科学团队可让助手操作既有notebook并保留协作内容。 | 托管Datalayer身份/后台运行与开源server区分；代码执行权限取决于runtime。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5498 | [Better Hub](https://github.com/better-auth/better-hub) | 团队直接性不足 | AI PR 摘要配合行内 diff、审查评论、Issue 分诊和 CI 状态，支持团队交接审查。 | 依托 GitHub 工作流；README 较简短，未验证自建和组织权限细节。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5549 | [CCCC](https://github.com/ChesterRa/cccc) | 团队直接性不足 | 团队可监督跨机器代理交接和证据轨迹，并配置工作组连接。 | 部分runtime自动绕过审批；浏览器admin权限与后台协作grant独立，非默认强沙箱。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5591 | [PR Lens](https://github.com/coldteadotai/pr-lens) | 团队直接性不足 | 审阅者可在PR评论中查看变更影响与数据形状。 | 图是辅助解释，需与代码核对；托管服务与skill分开。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5606 | [Reverify](https://github.com/2akouwu/reverify) | 方法技能另列 | 工程团队可要求结构/行为结论有工具证据并保留交接记录。 | 输入集合上的一致不证明全域等价；支持的claim范围有限，非万能事实验证。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5627 | [Showboat](https://github.com/simonw/showboat) | 方法技能另列 | 团队可复跑代理交付证据，辅助PR审阅和交接。 | 复跑命令可能有副作用；输出匹配不证明需求全部正确。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5666 | [Repository Harness](https://github.com/hoangnb24/repository-harness) | 方法技能另列 | 团队把共识和验证留在仓库，支持跨会话交接。 | 明确不是调度器/任务库/runtime；方法需团队执行。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5675 | [Interpretable Context Methodology](https://github.com/RinDig/Interpretable-Context-Methodology) | 方法技能另列 | 团队可直接审阅阶段输入、契约和交接文件。 | 方法不是强制编排器，不适合实时多代理紧密通信。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5692 | [Sage Agent Platform](https://github.com/ZHangZHengEric/Sage) | 团队直接性不足 | 团队可通过企微/飞书/钉钉交付文件和自动化结果。 | local账号不证明完整组织治理，production-ready未实测。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5742 | [Agent File](https://github.com/letta-ai/agent-file) | 工程组件另列 | 团队可版本化和交接代理状态。 | 目前不含archival Passages；跨框架兼容需适配，非全部无缝转移。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5802 | [OpenTag (CopilotKit)](https://github.com/CopilotKit/OpenTag) | 团队直接性不足 | 在工作线程里处理表格、生成引用简报，创建 Linear 等事项前要求批准，减少跨工具交接。 | 与 Amplift OpenTag 不同；CopilotKit 核心此前未选择，此处为独立应用供再审；个人 Composio 连接仅 Slack，其他渠道仍有规划项。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5959 | [OpenHands Software Agent SDK](https://github.com/OpenHands/software-agent-sdk) | 工程组件另列 | 研发平台团队可集成维护/重构任务与agent server。 | SDK不同于完整OpenHands产品，隔离由部署提供。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5994 | [Dr Claw](https://github.com/OpenLAIR/dr-claw) | 团队直接性不足 | 研究团队可复用项目目录与科研技能，跟踪实验到交付。 | Cursor仍计划；科研严谨性/结果需验证，自托管不等于无需模型费用。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 6022 | [Coding Tools MCP](https://github.com/xyTom/coding-tools-mcp) | 工程组件另列 | 平台团队可统一文件、patch、命令和Git接口。 | dangerous关闭命令权限门，不等于强系统沙箱；未执行。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |

## 后续

继续处理队列中尚未二筛的 1,026 项。前两批的待深核、商业边界、工程组件和实践资料均保留记录，不为推进批次而自动淘汰。
