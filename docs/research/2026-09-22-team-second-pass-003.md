# 团队价值快速二筛 · 第 3 批（累计 600 / 1,426）

核查时间：2026-09-22T00:22:30+08:00；各仓库实际读取时间见 CSV（UTC）。

沿用已保存的排序队列，本批逐项阅读接下来的 200 份源文核验记录，对 15 个重点候选补查官方 README、根许可证及仓库元数据：15 份 README 和元数据、14 份许可证文件获取成功；1 项许可证文件未确认。最终 8 项进入建议审阅短名单。其余 185 个未在本批重新联网核验；自动排序只确定阅读顺序，不决定排除。累计二筛 600 个，剩余 826 个。前轮 4,099 个仅做简介初筛的项目不在本批范围内。

功能描述是官方文档的转述，未部署或运行项目。最近推送仅为仓库活动信号，不代表稳定版本或维护承诺。根许可证不涵盖所有依赖及托管服务。主清单未新增、未推送；“建议审阅”不等于确认收录。

## 分类结果

| 分类 | 数量 | 处理方式 |
| --- | ---: | --- |
| 建议审阅 | 8 | 已有明确的真人团队使用证据；补查官方资料后进入用户审阅短名单。 |
| 商业或许可边界待核 | 34 | 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 方法技能另列 | 57 | 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 工程组件另列 | 61 | 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 团队直接性不足 | 26 | 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 保留待深核 | 14 | 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |

## 建议审阅的 8 个

ID 沿用库存固定编号。星数为本批联网快照；团队用途及限制为中文转述，介绍为英文。

| ID | 项目 / Stars | Description (EN) | 跟 team 的关系 | 标签 | 根许可证 / 最近推送（UTC） | 限制 |
| ---: | --- | --- | --- | --- | --- | --- |
| 6035 | [AgentRQ](https://github.com/agentrq/agentrq) · 1,123 | A shared task workspace for humans and agents with MCP, schedules, and approvals. | 团队可派发任务、实时同步状态并处理敏感操作许可。 | ai-native, collaboration, project-management | [Apache-2.0](https://github.com/agentrq/agentrq/blob/main/LICENSE) / 2026-09-21 | allow_all_commands可改变边界；工作完成仍需验收。 |
| 68 | [Paperclip](https://github.com/paperclipai/paperclip) · 81,184 | An agent operations platform with tasks, human approvals, budgets, and organization-scoped activity tracking. | 支持多个真人用户，按组织管理任务、审批、智能体角色和费用；保留执行记录便于负责人监督。 | ai-native, governance, workflow, self-hosted | [MIT](https://github.com/paperclipai/paperclip/blob/master/LICENSE) / 2026-09-21 | 这里有明确真人用户证据，不只是 AI 组织图；不保证其预算和隔离宣传已经过独立测试。 |
| 1492 | [Mission Control by Builderz](https://github.com/builderz-labs/mission-control) · 6,248 | A self-hosted dashboard for agent operations and governance. | 团队集中分派任务、复核失败、跟踪花费并管理角色和审批。 | ai-native, operations, teams | [MIT](https://github.com/builderz-labs/mission-control/blob/main/LICENSE) / 2026-09-20 | Alpha，API/schema 可能变化；shared/strict 工作区运行时资源边界不同，未实测。 |
| 1772 | [SkillHub](https://github.com/iflytek/skillhub) · 5,135 | A self-hosted registry for publishing, versioning, reviewing, and distributing organizational agent skills. | 团队命名空间、Owner/Admin/Member、技能版本和晋升审批，把个人技能沉淀成组织受控资产。 | skills, governance, knowledge, self-hosted | [Apache-2.0](https://github.com/iflytek/skillhub/blob/main/LICENSE) / 2026-09-21 | 注册分发平台，不负责所有技能执行；不能替代被分发技能各自的许可和审查。 |
| 3122 | [Observal](https://github.com/Observal/Observal) · 2,850 | Discover, review, and observe internal AI components. | 组织集中注册技能、代理和 MCP，审核版本并用使用反馈改善共享资产。 | teams, governance | [Apache-2.0](https://github.com/Observal/Observal/blob/main/LICENSE) / 2026-09-20 | 会话分析涉及组织数据，实际采集边界与隔离未实测。 |
| 3322 | [Agent Skills Platform](https://github.com/FrancyJGLisboa/agent-skills-platform) · 2,401 | Package and review reusable skills for a governed team marketplace. | 组织为技能分配责任人、审批、版本和验证证据，让同事统一安装复用。 | skills, teams, governance | [MIT](https://github.com/FrancyJGLisboa/agent-skills-platform/blob/main/LICENSE) / 2026-09-15 | 报告接收者不等于技能安装者；测试记录不代表所有宿主均可靠。 |
| 5127 | [GenU](https://github.com/aws-samples/generative-ai-use-cases) · 1,388 | A deployable collection of generative-AI business applications with shareable use cases and chats. | 员工可共享自定义用例、会话与提示，复用业务实践。 | enterprise-ai, collaboration, aws | [MIT-0](https://github.com/aws-samples/generative-ai-use-cases/blob/main/LICENSE) / 2026-09-13 | 根许可证为 MIT-0；需要 AWS 服务及对应费用，分享范围需配置；示例架构不是合规保证。 |
| 5457 | [LabelLLM](https://github.com/opendatalab/LabelLLM) · 1,280 | A multimodal annotation platform with task management and assisted labeling. | 研究标注团队可共享部署、追踪任务进度和质量。 | annotation, datasets, collaboration | [Apache-2.0](https://github.com/opendatalab/LabelLLM/blob/main/LICENSE) / 2026-07-02 | 共享标注任务服务，非通用 AI-native 办公助手；最近推送 2026-07-02；细粒度角色隔离未核验。 |

## 官方证据

CSV 保存官方文档链接、读取时间及内容 SHA-256，便于复查。

| ID | 官方来源 | 功能依据 |
| ---: | --- | --- |
| 6035 | [README](https://github.com/agentrq/agentrq/blob/main/README.md) · [元数据](https://api.github.com/repos/agentrq/agentrq) | READMEhuman-agent board、事件流、Slack多租户。 |
| 6368 | [README](https://github.com/superdoc/docx-editor/blob/main/README.md) · [元数据](https://api.github.com/repos/superdoc/docx-editor) | README OOXML、Yjs协作、serverautomation。 |
| 68 | [README](https://github.com/paperclipai/paperclip/blob/master/README.md) · [元数据](https://api.github.com/repos/paperclipai/paperclip) | README L91-95、L169-173、L242、L273、L456-462 |
| 1492 | [README](https://github.com/builderz-labs/mission-control/blob/main/README.md) · [元数据](https://api.github.com/repos/builderz-labs/mission-control) | README L5–8、23、82–94、177：控制面、治理与证据。 |
| 1772 | [README](https://github.com/iflytek/skillhub/blob/main/README.md) · [元数据](https://api.github.com/repos/iflytek/skillhub) | README L41-42、Highlights L81-106、对照表 L503-508 |
| 1798 | [README](https://github.com/SenteLabsAI/OpenExecutive/blob/main/README.md) · [元数据](https://api.github.com/repos/SenteLabsAI/OpenExecutive) | README L8–12、307、352：治理、集成、允许名单和跨渠道记忆。 |
| 3122 | [README](https://github.com/Observal/Observal/blob/main/README.md) · [元数据](https://api.github.com/repos/Observal/Observal) | README L47–69、171–175、239：目录、反馈、Apache 内 SSO/SCIM。 |
| 3322 | [README](https://github.com/FrancyJGLisboa/agent-skills-platform/blob/main/README.md) · [元数据](https://api.github.com/repos/FrancyJGLisboa/agent-skills-platform) | README L19–37、46–54、98–107：工作流转技能与团队治理。 |
| 5127 | [README](https://github.com/aws-samples/generative-ai-use-cases/blob/main/README.md) · [元数据](https://api.github.com/repos/aws-samples/generative-ai-use-cases) | README 登录用户共享用例、JSON 导入导出和会话分享。 |
| 5409 | [README](https://github.com/higress-group/himarket/blob/main/README.md) · [元数据](https://api.github.com/repos/higress-group/himarket) | README Higress网关、OIDC、市场、审批与metering。 |
| 5457 | [README](https://github.com/opendatalab/LabelLLM/blob/main/README.md) · [元数据](https://api.github.com/repos/opendatalab/LabelLLM) | README research teams、task management、pre-annotation和共享访问。 |
| 5685 | [README](https://github.com/mem9-ai/mem9/blob/main/README.md) · [元数据](https://api.github.com/repos/mem9-ai/mem9) | README server/plugins/CLI、hybrid recall、hosted/selfhost。 |
| 5770 | [README](https://github.com/FunnyWolf/agentic-soc-platform/blob/master/README.md) · [元数据](https://api.github.com/repos/FunnyWolf/agentic-soc-platform) | README case/playbook、LDAP、角色、Inbox和audit。；2026-09-22 官方 contents API 根目录无 LICENSE |
| 6139 | [README](https://github.com/Emiyaaaaa/HiveMind/blob/main/README.md) · [元数据](https://api.github.com/repos/Emiyaaaaa/HiveMind) | README ordered runs、RBAC/APIkey/OIDC。 |
| 6204 | [README](https://github.com/StreetLamb/tribe/blob/master/README.md) · [元数据](https://api.github.com/repos/StreetLamb/tribe) | READMEMulti-Tenancy、public API与HITL。 |

## 其余 192 个逐项记录

以下分流不构成永久排除。工程组件和实践资料仍可在相应栏目进一步考虑。

| ID | 项目 | 本批结论 | 团队价值依据 | 限制与下一步 |
| ---: | --- | --- | --- | --- |
| 6078 | [Manaflow](https://github.com/manaflow-ai/manaflow) | 团队直接性不足 | 研发团队可把代理输出转为可查看diff和CI的PR。 | Linuxbeta、Windows待支持；多会话不代表多人权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 6096 | [HugAgentOS](https://github.com/ZJU-REAL/HugAgentOS) | 商业或许可边界待核 | 团队可评估企业部署底座与组织版扩展。 | 社区是个人workspace；团队权限/SSO/协作/审计属Enterprise，本体Apache附品牌条件。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6236 | [Sidecar](https://github.com/marcus/sidecar) | 团队直接性不足 | 开发者可围绕团队任务/PR统一审阅与工作目录管理。 | 本地个人界面，不证明多人同步；文首命令仅作资料未执行。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 6368 | [SuperDoc](https://github.com/superdoc/docx-editor) | 工程组件另列 | 团队与代理可在同一文档中评论、建议和追踪修改。 | DOCX 协作编辑器及 SDK/MCP，AGPL/商业双许可；需应用身份和同步服务集成，转工程组件。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 71 | [MinerU](https://github.com/opendatalab/MinerU) | 商业或许可边界待核 | 将团队 PDF、Office 和图片资料转为统一结构及可追溯页块引用，接入共享知识库的数据处理链。 | 是解析组件，不是多人知识协作产品；MinerU 许可有 Apache 之外附加条件；不同格式和质量档能力不同。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 95 | [Impeccable](https://github.com/pbakaus/impeccable) | 方法技能另列 | 团队在仓库共享 PRODUCT.md、DESIGN.md 与检查配置，统一界面质量标准及迭代反馈。 | 规则检测和 LLM 评审能力不同；不是多人设计画布，未实测视觉效果。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 96 | [Cline](https://github.com/cline/cline) | 团队直接性不足 | 开发者先审计划和变更，再接入团队的日志、审计或自定义策略插件，支持可控 AI 开发。 | Multi-Agent Teams 指智能体协作，不是真人组织权限；自动批准可改变人工控制边界。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 115 | [TrendRadar](https://github.com/sansan0/TrendRadar) | 团队直接性不足 | 将同一主题的筛选结果和分析推送到 Slack、飞书、钉钉或企微，形成团队共享情报简报。 | 频道推送不等于多人协作工作区；模型、数据源和通知渠道需配置，未实测。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 117 | [Pathway](https://github.com/pathwaycom/pathway) | 商业或许可边界待核 | 同步 Drive、SharePoint、数据库等共享资料的变化，让团队应用使用持续更新的知识而非手动重建索引。 | BSL 1.1 源码可见；exactly-once 和部分分布式部署属 Enterprise；不宣称源系统权限自动继承。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 128 | [PrivateGPT](https://github.com/zylon-ai/private-gpt) | 商业或许可边界待核 | 工程团队可共享一个私有 AI 应用后端，复用文档接入、引用检索和工具集成能力。 | 不运行模型；RBAC、企业连接器、审计和终端用户工作区属于 Zylon，不属于 PrivateGPT API。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 139 | [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD) | 方法技能另列 | 通过可共享的 brief、规格和架构文档串起产品、设计、开发与测试，保留决策上下文。 | 方法和技能集合，角色讨论不等于真人协作后台；额外模块独立。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 154 | [Made With ML](https://github.com/GokuMohandas/Made-With-ML) | 方法技能另列 | 把 ML 与软件工程实践结合，展示实验追踪与部署流程，并说明团队集中共享实验记录的方式。 | 教程不是成品平台；实验默认本地，团队 MLflow 服务器需另外部署。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 198 | [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules) | 方法技能另列 | 把命名、框架、测试和审查要求提交到共享 .cursor/rules，供贡献者的 AI 使用同一套规范。 | 规则资源集，不保证模型严格遵守；赞助商知识功能不是本项目能力。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 283 | [Conductor](https://github.com/conductor-oss/conductor) | 工程组件另列 | 研发和运营把 AI 步骤与人工审批接起来，长任务可暂停恢复，并追踪运行状态和责任边界。 | Apache OSS 与 Orkes 企业服务分开；需开发 workers，并非所有业务开箱即用。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 326 | [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 团队直接性不足 | 研究或产品团队可共享带引用的调研产物，并定制领域研究流程作为人工评审输入。 | 实验应用，不保证无偏或事实准确；智能体协作不代表真人多人权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 354 | [Budibase](https://github.com/Budibase/budibase) | 商业或许可边界待核 | 员工请求可转为记录、审批与通知，业务和工程共同维护内部操作流程。 | GPL/MPL 核心与 BSL 付费功能分开，不能据产品总览宣称全部免费可自建。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 405 | [Awesome n8n Templates](https://github.com/enescingoz/awesome-n8n-templates) | 方法技能另列 | 运营、销售与工程可借鉴现有工作流连接共享表格、消息和 AI 步骤，减少重复搭建。 | 示例合集，需逐模板配置与测试；n8n 和第三方服务许可不由本仓库替代。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 460 | [NVIDIA NemoClaw](https://github.com/NVIDIA/NemoClaw) | 工程组件另列 | 平台团队统一配置受支持智能体的运行环境、网络出口、快照和操作审批。 | 依赖 OpenShell，参考栈不等于安全保证；roadmap 不代表交付承诺。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 552 | [Bit](https://github.com/teambit/bit) | 工程组件另列 | 团队共享组件与创建标准，AI 通过 MCP 复用现有模块，从开发到 CI 减少重复实现。 | 开源工具与 Bit Cloud/Ripple CI 独立，可配置本地或自选 CI。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 590 | [WrenAI](https://github.com/Canner/WrenAI) | 商业或许可边界待核 | 团队将指标、连接关系与业务知识版本化，给 AI 统一查询口径，再共享分析看板。 | 组织级部署、Git Sync 和高级治理含商业服务边界，不将全部团队云功能归给 Apache 引擎。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 599 | [Lark CLI](https://github.com/larksuite/cli) | 工程组件另列 | 在团队已有飞书资产上自动处理任务，企业可通过 wrapper 集中管凭据、限制命令并接审计。 | 以授权用户身份执行；README 不建议直接把个人凭据 bot 放进多人群，企业集成需配置边界。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 630 | [Trigger.dev](https://github.com/triggerdotdev/trigger.dev) | 工程组件另列 | 工程团队运行长期 AI 任务，按需暂停等待同事批准或反馈，并共享日志与运行状态。 | 自建与托管伸缩边界需按部署确认，不把无超时宣传视为无限资源保证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 702 | [Trellis](https://github.com/mindfold-ai/Trellis) | 方法技能另列 | 团队共享规范和任务，个人日志分离，AI 在不同工具里沿用同一工程标准与审查背景。 | AGPL；文件式流程而非多人 SaaS，不保证模型完全遵守规范。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 715 | [Bytebase](https://github.com/bytebase/bytebase) | 商业或许可边界待核 | 研发、DBA 和安全人员在统一审批流程中处理 AI 数据操作，保留变更和访问记录。 | 各高级权限功能的社区/商业版本需按套餐确认，不把平台总览全部归为免费能力。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 798 | [CubeSandbox](https://github.com/TencentCloud/CubeSandbox) | 工程组件另列 | 平台团队集中供给执行环境和凭据出口，复用隔离任务、暂停恢复与审计设施。 | 部分 snapshot 路径 preview；不引用启动耗时、极致隔离等未实测宣传。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 902 | [MCP Inspector](https://github.com/modelcontextprotocol/inspector) | 工程组件另列 | 开发团队共享协议调试方式，并把服务检查接 CI 或智能体反馈循环，核对工具行为。 | v2 与 legacy v1 分开，不将旧配置当当前通用；不是 MCP 服务治理平台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 926 | [VoltAgent](https://github.com/VoltAgent/voltagent) | 商业或许可边界待核 | 工程团队用同一 runtime 维护工具和流程，接入人工审批，并通过控制台排查运行情况。 | 开源 framework 与 VoltOps Console Cloud/Self-hosted 的功能授权需分别确认，不混同全部免费。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 929 | [SkyPilot](https://github.com/skypilot-org/skypilot) | 工程组件另列 | AI 团队提交作业，基础设施团队统一管理算力、调度和资源共享，减少重复部署和资源浪费。 | Agent Sessions/Sandboxes 等新闻入口需单独核验成熟度，不当作所有部署已支持。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 945 | [Cangjie Skill](https://github.com/kangarooking/cangjie-skill) | 方法技能另列 | 团队把获准使用的学习资料和方法提炼成共享技能，保留来源、更新差异和校验过程。 | 提炼结果需复核，工具 MIT 不授权任意复制原书或视频内容。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1044 | [Deep Lake](https://github.com/activeloopai/deeplake) | 工程组件另列 | 模型和应用团队共享数据版本及来源，把多模态样本、检索和训练数据连接起来。 | 平台与各数据集许可独立，未核验托管/自建全部功能边界。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1127 | [RocketRide](https://github.com/rocketride-org/rocketride-server) | 工程组件另列 | 团队共享可版本化 JSON 管线，在熟悉 IDE 内共同构建、运行和检查 AI 数据流程。 | 不采纳运行即生产就绪的保证；模型和外部数据服务需单独配置。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1220 | [OpenSpace](https://github.com/HKUDS/OpenSpace) | 保留待深核 | 团队共享成功工作方法，并依据历史与质量信号复用技能。 | 效果评估非安全认证；需配置运行权限。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 1244 | [Flyte](https://github.com/flyteorg/flyte) | 商业或许可边界待核 | 团队共享可恢复任务与算力工作流，衔接研发和生产运行。 | Flyte 2 分布式开源后端仍 coming soon；当前生产后端来自 Union，不混同 Flyte 1。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1331 | [Product Manager Skills](https://github.com/deanpeters/Product-Manager-Skills) | 方法技能另列 | 产品团队共享需求、利益相关方对齐和路线图模板。 | CC BY-NC-SA；README 允许日常团队使用，但转售与再授权受限。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1344 | [Open Multi-Agent](https://github.com/open-multi-agent/open-multi-agent) | 工程组件另列 | 组织可将人工审批和可离线核验的记录接入智能体流程。 | 运行库而非托管后台；无模型调用的演示不证明真实模型表现。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1359 | [ClearML](https://github.com/clearml/clearml) | 工程组件另列 | 团队共享实验、产物和报告，并复现实验环境与数据版本。 | 编排、服务等有独立组件，不能仅安装此 SDK 就视为完整平台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1418 | [JiuwenSwarm](https://github.com/openJiuwen-ai/jiuwenswarm) | 团队直接性不足 | 工程团队可编排复杂任务、设置人工检查与预算并查看执行树。 | team 主要指智能体群组，不能推断真人多租户权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 1432 | [iPolloWork](https://github.com/Devin-AXIS/iPolloWork) | 商业或许可边界待核 | 围绕项目集中查看职责、任务、审批与可编辑成果，连接人与智能体工作。 | Source Available License；不同引擎集成方式不同，未核验多人隔离。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1472 | [Agent Governance Toolkit](https://github.com/microsoft/agent-governance-toolkit) | 工程组件另列 | 平台团队统一约束工具行为、归因操作并保留审计依据。 | Public Preview 可能破坏兼容；合规映射不等于认证，各语言能力不同。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1524 | [Gemini Notebook MCP CLI](https://github.com/jacob-bd/gemini-notebook-mcp-cli) | 工程组件另列 | 团队可通过智能体整理资料与管理笔记本共享。 | 非官方桥接；企业支持实验性，个人账户测试范围更广。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1553 | [Claude Code Ultimate Guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | 方法技能另列 | 覆盖团队推广、治理、指标与共享知识，供建立使用规范。 | 第三方指南；本次核验目录与定位，未逐章验证产品细节。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1593 | [TrueForge](https://github.com/truefoundry/trueforge) | 保留待深核 | 团队可共享托管运行环境，并集中配置工具和人工检查点。 | local 默认无登录仅适合本机；沙箱当前依赖 Daytona，其他提供者计划中。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 1609 | [PySpur](https://github.com/PySpur-Dev/pyspur) | 保留待深核 | 工程团队维护测试案例、检查步骤结果，并在持久流程中等待人工审批。 | 自改进仍 Coming soon；10 倍效率为项目宣传未实测。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 1631 | [AgentScope Java](https://github.com/agentscope-ai/agentscope-java) | 工程组件另列 | Java 团队复用审批、会话和分布式运行抽象，统一智能体工程实践。 | AgentScope Service 控制面和外部 Agent Evolution 不能全部算进 Java 库。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1643 | [SenseNova Skills](https://github.com/OpenSenseNova/SenseNova-Skills) | 方法技能另列 | 共享项目、工作项和版本产物，并记录进度与下一步建议。 | 技能套件和 Raccoon 商业产品分开，企业安全不直接归给技能。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1655 | [Cloudflare Agents](https://github.com/cloudflare/agents) | 工程组件另列 | 工程团队复用持久会话、前端状态同步和人工审批构建 AI 应用。 | 依赖 Cloudflare 平台；不是开箱即用真人团队工作区。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1662 | [ZenML](https://github.com/zenml-io/zenml) | 商业或许可边界待核 | AI 工程团队共享运行指标、代码版本和环境，并复用现有基础设施。 | ZenML Pro 另列；不把企业支持全部归为 Apache 核心。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1670 | [AstronRPA](https://github.com/iflytek/astron-rpa) | 商业或许可边界待核 | 业务团队共建跨应用自动化，并通过团队市场分享机器人和调度任务。 | 团队能力部分称 enterprise modules，具体版本和许可证条款待采用前确认。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1736 | [AxonHub](https://github.com/looplj/axonhub) | 工程组件另列 | 平台团队集中模型接入、配额、请求追踪和数据访问范围。 | Apache 与 LGPL 多许可证；任意模型兼容是宣传概括，未实测全量。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1798 | [Open Executive](https://github.com/SenteLabsAI/OpenExecutive) | 商业或许可边界待核 | 管理团队复用组织知识、预算审批与渠道上下文，辅助项目协调。 | README 标 Apache-2.0，但 LICENSE 多处删改标准条文，GitHub 返回 NOASSERTION；暂不直接标为标准 Apache，需维护者澄清。云托管仍未交付。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1832 | [AG2](https://github.com/ag2ai/ag2) | 工程组件另列 | 工程团队统一代理通信、注册和审计轨迹，构建可追踪任务流程。 | 经典 autogen 命名空间已迁至 ag2-classic，不能沿用旧类/API 描述。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1881 | [Seldon Core](https://github.com/SeldonIO/seldon-core) | 商业或许可边界待核 | 平台团队统一模型服务、管道与共享推理资源。 | Business Source License，不按历史 Apache 印象描述；商业使用需核对条款。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1905 | [AI-DLC Workflows](https://github.com/awslabs/aidlc-workflows) | 方法技能另列 | 团队跨编码工具复用交付流程、审批门槛、知识与审计记录。 | 工作流体系，不是独立多人 SaaS，审计数量不代表质量保证。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1920 | [agent-device](https://github.com/callstack/agent-device) | 工程组件另列 | 移动开发与 QA 共享执行反馈和测试证据，并协调并行任务的设备访问。 | 补充已有测试套件；各平台依赖与能力不同。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1921 | [Failproof AI](https://github.com/FailproofAI/failproofai) | 商业或许可边界待核 | 团队把策略提交版本库，在不同代理工具中保留统一会话与审计线索。 | 拦截能力因宿主而异，SDK 需额外 hook；MIT 加 Commons Clause，企业自建托管层另计。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1928 | [Remotion Agent Skills](https://github.com/remotion-dev/skills) | 方法技能另列 | 内容与研发团队共享视频代码、版式和动画制作规范。 | 技能仓库不替代 Remotion 运行时及其单独许可。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 1975 | [Varlock](https://github.com/dmno-dev/varlock) | 工程组件另列 | 团队共享配置结构和校验规则，智能体可理解配置而无需直接读取值。 | 不保证任何使用路径都不泄漏；需正确集成与配置。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 1982 | [FreeScout](https://github.com/freescout-help-desk/freescout) | 商业或许可边界待核 | 客服团队集中分派和处理客户对话，在现有共享邮箱中接入 AI。 | AI 是独立模块，本次未核验模块功能或费用；不能称核心内置全部 AI。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 1994 | [RuVector](https://github.com/ruvnet/RuVector) | 工程组件另列 | 工程团队为代理保留项目记忆、反馈和可追溯记录，按需接入共享服务。 | 部分统一记忆管理仍仅内存，跨类型整合未完成；Shared Brain 为可选托管层。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2034 | [MS-Agent](https://github.com/modelscope/ms-agent) | 团队直接性不足 | 工程团队跨 CLI、TUI 和 WebUI 复用逻辑，通过 hooks 接入规则、审批和结果检查。 | 早期 AgentFabric 新闻不能作为当前默认能力证明；Agent Hub 远端同步可选。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2115 | [nono](https://github.com/nolabs-ai/nono) | 工程组件另列 | 团队共享可审查的文件、网络、凭据和工具策略，统一代理运行边界。 | 尚未 1.0；旧命名空间迁至 nolabs-ai，零延迟等宣传未实测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2155 | [Dagu](https://github.com/dagucloud/dagu) | 商业或许可边界待核 | 运维团队共享 YAML 流程、运行历史与人工任务，将模型或编码代理接入日常自动化。 | SSO、RBAC、审计等需 self-host 许可，不能因功能表而归免费社区版。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 2181 | [Hyper-Extract](https://github.com/yifanfeng97/Hyper-Extract) | 工程组件另列 | 团队把文档编译成可追踪知识结构，更新来源并导出可共享笔记。 | CLI 组件，不是多人权限服务；领域模板不代表专业准确性验证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2199 | [Sourcebot](https://github.com/sourcebot-dev/sourcebot) | 保留待深核 | 开发团队跨仓库查询代码、追踪引用并共享可核对的理解依据。 | 需配置索引、模型与认证；未核验细粒度仓库权限继承。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 2198 | [CascadeFlow](https://github.com/lemony-ai/cascadeflow) | 工程组件另列 | 平台团队把预算、质量策略和决策轨迹统一放入代理运行循环。 | 非 HTTP 网关；节省比例和延迟为项目基准，未复现。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2208 | [Executor](https://github.com/UsefulSoftwareCo/executor) | 工程组件另列 | 团队统一工具连接和凭据配置，为不同代理设置允许、审批或禁止策略。 | 共享工具不等于完整组织 RBAC；云、桌面和自托管有不同部署边界。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2215 | [SwarmForge](https://github.com/unclebob/swarm-forge) | 团队直接性不足 | 工程团队可检查分支交付、审批和澄清记录，接续不同代理完成的工作。 | main 是共享运行时和入口，不能直接当可运行产品；需选产品分支。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2258 | [Atmosphere](https://github.com/Atmosphere/atmosphere) | 工程组件另列 | 工程团队统一代理服务的重连、审批、成本和按租户观察能力。 | 事件驱动框架非托管平台，计算调度由宿主负责；适配器能力不同。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2268 | [Tracecat](https://github.com/TracecatHQ/tracecat) | 商业或许可边界待核 | 安全团队共用事件、流程、工具和审计日志，协调 AI 辅助响应。 | 多租户与细粒度访问属 Enterprise；不能全算社区版。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 2523 | [sem](https://github.com/Ataraxy-Labs/sem) | 商业或许可边界待核 | 团队评审实体级差异，并可用共享图和代理监听辅助讨论变更。 | 共享团队图属可选云层；登录本身不上传，非全部能力本地。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 2607 | [Zadig](https://github.com/koderover/zadig) | 保留待深核 | 研发、QA 与运维共用环境和模板，把 AI 检查与发布审批接入交付流程。 | 根文档未细分所有版本功能；风险评估不替代发布验证。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 2609 | [Determined](https://github.com/determined-ai/determined) | 工程组件另列 | ML 团队共享训练资源和实验记录，复现模型迭代。 | 平台需要适配训练代码，未核验企业版治理差异。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2616 | [claude-tap](https://github.com/liaohch3/claude-tap) | 团队直接性不足 | 工程团队用请求差异和工具记录定位代理行为，并共享 HTML 证据。 | 记录可能包含提示及业务上下文；非组织权限平台，未执行抓取。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2670 | [DingTalk Workspace CLI](https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli) | 工程组件另列 | 团队统一文档、审批、待办和组织数据接口，按企业授权复用自动化。 | 共创阶段，需管理员授权；认证/审计绝对性宣传未实测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2672 | [Loop Library and Loopy](https://github.com/Forward-Future/loopy) | 方法技能另列 | 团队共享任务执行规范，明确检查、停止和交回人工的条件。 | 网站目录和可选技能不同；模板不授予自动执行或外发权限。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 2702 | [BotSharp](https://github.com/SciSharp/BotSharp) | 工程组件另列 | 企业开发团队复用代理状态、评估、审计和消息渠道实现。 | 框架不是完整组织后台，模型清单示例较早，未验证全部接入。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2716 | [Spice.ai](https://github.com/spiceai/spiceai) | 工程组件另列 | 平台团队统一数据连接、检索与模型接口，为业务应用提供共享上下文。 | 性能与零生产负担宣传未实测；连接器、推理模型依赖分别配置。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2722 | [AI Knowledge Graph Generator](https://github.com/robert-mcdermott/ai-knowledge-graph) | 团队直接性不足 | 团队将资料关系转成可共享 HTML 和结构化图数据，按来源检查抽取结果。 | 推理边不等同源文事实；单机工具，无独立多人管理。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 2762 | [Jarvis Registry](https://github.com/ascending-llc/jarvis-registry) | 工程组件另列 | 团队统一工具发现、身份、细粒度 ACL 与请求审计。 | 衍生于 mcp-gateway-registry，独立企业扩展；权限效果未实测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2900 | [ResearchStudio](https://github.com/microsoft/ResearchStudio) | 方法技能另列 | 研究团队共享研究方向、观点记录和论文配套海报、视频等产物流程。 | 技能套件，未证明端到端科学结论有效；pptx2video 另仓。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 2898 | [DeepTeam](https://github.com/confident-ai/deepteam) | 商业或许可边界待核 | 安全与 AI 团队共享风险场景、评估标准和回归检查。 | 团队托管报告在 Confident AI；本地运行不等于所用模型都离线。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 2922 | [OpenClaw Security Practice Guide](https://github.com/slowmist/openclaw-security-practice-guide) | 方法技能另列 | 团队可建立工具安装审查、敏感操作确认和审计记录约定。 | 仅针对特定场景，v2.8 脚本 Beta；指南不保证安全，未执行部署脚本。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 2924 | [Argent](https://github.com/software-mansion/argent) | 商业或许可边界待核 | 开发与 QA 共享确定性复现、视觉差异和性能诊断证据。 | 源码 Apache，但若干平台二进制专有且限制再分发；遥测默认开启可退出。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 2955 | [TeaQL Agent Kit](https://github.com/teaql/teaql-agent-kit) | 工程组件另列 | 团队先审可执行领域模型，再验证并生成统一 API 与审计契约。 | 核心模式与可运行示例分仓；结构检查不保证完整业务正确性。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 2988 | [CompozyOS](https://github.com/compozy/compozy) | 保留待深核 | 技术团队集中保存审批、产物和运行事件，复用定时或事件驱动流程。 | v0.3 Beta，v0.2 仅关键修复；不把旧版功能直接混入。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 3079 | [Advanced Context Engineering](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents) | 方法技能另列 | 团队把代码研究、实现计划和验证记录作为共享审阅产物，保持对变更的共同理解。 | 方法文章而非工具；作者明确不适用所有问题，性能及生产力案例未独立验证。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3148 | [AgentField](https://github.com/Agent-Field/agentfield) | 工程组件另列 | 平台团队统一路由、记忆、追踪和人工审批，将代理作为可管理服务。 | 万人规模和生产就绪为项目宣称未复现；安装还可能设置自启动。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3165 | [Claude Agent ACP Adapter](https://github.com/agentclientprotocol/claude-agent-acp) | 工程组件另列 | 工具团队统一编辑器接入，保留工具审批、审阅和会话恢复交互。 | 协议适配层，不是独立模型或组织平台；扩展支持依客户端。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3331 | [Apify Agent Skills](https://github.com/apify/agent-skills) | 方法技能另列 | 数据与自动化团队共享采集、Actor 开发和输出 schema 规范。 | 技能不等于托管算力和数据服务免费；未测试所有 Actor。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3345 | [DeepBI](https://github.com/DeepInsight-AI/DeepBI) | 保留待深核 | 业务与数据团队共享持久查询和可视化，减少反复手工分析。 | 自动分析报告仍待开发；未核验权限或所有数据源兼容。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 3464 | [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) | 方法技能另列 | 前端团队共享现代 API、兼容和回退原则，减少过时代码。 | 预览内容，不能代替目标浏览器测试或完整可访问性审核。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3508 | [Memanto](https://github.com/moorcheh-ai/memanto) | 保留待深核 | 团队代理共享可追踪经验，检查冲突、过时信息和来源。 | 过期记忆仍可带标记召回，不等于删除；模型判断和访问治理未实测。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 3531 | [ArcKit](https://github.com/tractorjuice/arc-kit) | 方法技能另列 | 架构、产品和交付团队共享需求、ADR、供应商分析及评审流程。 | 领域政策模板非法律/合规认证，本次仅核验范围未逐项查法规。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3535 | [envd](https://github.com/tensorchord/envd) | 工程组件另列 | 团队共享环境声明和 OCI 镜像，减少依赖差异与入职配置成本。 | 容器开发环境非高强度安全沙箱，云集群需配置。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3534 | [shadcn Lint](https://github.com/shadcn-ui/lint) | 方法技能另列 | 设计与前端团队把组件和主题约束写成可共享 lint 规则。 | 静态检查不保证整体 UX 或可访问性；不要求使用 shadcn/ui。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3555 | [KiwiQ](https://github.com/rcortx/kiwiq) | 工程组件另列 | 工程与营销团队共用工作流、审批和客户文档，追踪执行状态。 | SDK-first 非可视化构建器；多个存储/消息服务需部署，生产规模未复现。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3678 | [Agent Router](https://github.com/theagentrouter/agent-router) | 工程组件另列 | 平台团队统一凭据、配额、路由、故障切换与使用归属。 | 原 Envoy AI Gateway，同一项目别名去重；不等于业务端多人应用。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3702 | [Neuron AI](https://github.com/neuron-core/neuron-ai) | 工程组件另列 | PHP 团队复用模型、工具、监控和审批机制，连接现有业务应用。 | 框架非独立组织平台，长期维护与可靠性承诺未验证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3740 | [ASO and App Marketing Skills](https://github.com/appeeky/aso-skills) | 方法技能另列 | 增长团队共享关键词、竞品、素材和上线检查方法。 | 依赖 Appeeky API，独立桌面软件不全在技能仓；评分不保证增长。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3743 | [Pilot Shell](https://github.com/maxritter/pilot-shell) | 商业或许可边界待核 | 团队可通过 Git 共享规则与经验，复查计划、差异和运行证据。 | 安装会配置多项依赖/hooks；含许可证激活机制，不能笼统视作免费开源工具。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 3871 | [OpenAkita](https://github.com/openakita/openakita) | 团队直接性不足 | 可将自动化代理接入飞书、企微、钉钉等团队工作入口，复用知识和审批流程。 | AI 公司指代理组织，不证明真人组织 RBAC；沙箱安全效果未实测，源码 AGPL 品牌另有条件。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 3891 | [lat.md](https://github.com/vercel-labs/lat.md) | 方法技能另列 | 让研发团队共享设计理由、代码关联和测试规格，并通过检查避免文档漂移。 | 检查引用一致性不等于证明实现正确或测试充分；仓库级工作流组件。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3928 | [TypeUI](https://github.com/bergside/typeui) | 方法技能另列 | 设计研发团队可共享设计系统、布局指导和界面生成规范。 | MIT 声明针对 CLI 与公开 registry，不代表所有托管资源免费或可自托管。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3939 | [Feathr](https://github.com/feathr-ai/feathr) | 工程组件另列 | 数据团队共享特征变换和训练数据，复用注册定义与在线服务。 | 需要底层数据基础设施；生产使用年限为项目自述而非本次核验。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3976 | [Native Feel Skill](https://github.com/yetone/native-feel-skill) | 方法技能另列 | 桌面研发团队可共享架构原则、WebView 指引和交付审查清单。 | 基于第三方技术分析与逆向观察，不是 Raycast 官方规范；性能效果未测。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 3977 | [MCP Unity Editor](https://github.com/CoderGamester/mcp-unity) | 工程组件另列 | 游戏研发团队可共享项目级 MCP 配置，让助手读取场景和执行编辑器操作。 | 需 Unity/Node 环境；协作潜力不等于同时多人编辑。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 3996 | [GoNavi](https://github.com/Syngnat/GoNavi) | 团队直接性不足 | 数据研发团队可给助手结构化数据库上下文，并复用查询审计与导出流程。 | 桌面为主，Web Server 标为实验；含数据库写工具，未执行。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4042 | [Guardian CLI](https://github.com/zakirkun/guardian-cli) | 团队直接性不足 | 安全团队可统一评估流程、工具证据和代理动作审计。 | 实时多操作者协作仍在路线图；没有运行扫描或攻击。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4053 | [Zoo Code](https://github.com/Zoo-Code-Org/Zoo-Code) | 团队直接性不足 | 研发团队可共享定制模式和编码流程。 | 独立延续项目而非原团队官方新产品；拦截效果未实测。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4131 | [Datus](https://github.com/Datus-ai/Datus-agent) | 保留待深核 | 数据工程师与分析师通过 CLI、聊天和 API 共享指标、SQL 与反馈知识。 | 授权与沙箱效果未实测；需配置现有数据平台。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 4211 | [Git Worktree Runner](https://github.com/coderabbitai/git-worktree-runner) | 方法技能另列 | 研发团队可提交共享分支环境配置，用于 PR 审阅和代理隔离工作目录。 | worktree 不提供 OS 沙箱；共享 hooks 信任后才执行。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4218 | [Wukong AICRM](https://github.com/WuKongOpenSource/Wukong-AICRM) | 商业或许可边界待核 | 销售、售前和客户成功团队共享客户上下文、任务分配与经验。 | 当前源码仅非商业用途开放；生产部署、商业使用和托管需另行商业授权。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 4236 | [UnitySkills](https://github.com/Besty0728/Unity-Skills) | 工程组件另列 | 游戏团队可复用编辑器操作，并对代理调用进行审批和审计。 | 维护基线 Unity2022.3+/6；旧版升级保留 Bypass，不能假定自动开启审批。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4280 | [ModelDB](https://github.com/VertaAI/modeldb) | 保留待深核 | 模型团队共享实验报告并追踪代码、数据、配置及环境。 | README 维护主体自述未另查；部署兼容性未实测。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 4282 | [DSH Agent Teams](https://github.com/NanmiCoder/dsh-agent-teams) | 团队直接性不足 | 研发团队可查看任务 DAG、执行归档并审批代理工作计划。 | 依赖预发布 Harness；scope audit 是完成时审计而非写操作拦截，代理 team 非真人权限。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4336 | [ClawFlows](https://github.com/nikilster/clawflows) | 方法技能另列 | 团队可共享会议准备、邮件处理等流程模板并进行版本回滚。 | 许多模板是个人用途，依赖 OpenClaw/外部服务；works every time 不作保证。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4376 | [MLRun](https://github.com/mlrun/mlrun) | 工程组件另列 | 数据、ML 与 DevOps 团队共享可版本化项目和 CI/CD 交付流程。 | 减少成本/交付时间为宣传，实际部署资源与集成需验证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4396 | [Skills Hub](https://github.com/qufei1993/skills-hub) | 方法技能另列 | 团队可通过 Git 仓库共享技能内容、标签及项目级配置。 | Git 同步不是内置成员治理；软链接/复制行为依赖平台。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4412 | [Claude Code Subagents Collection](https://github.com/lst97/claude-code-sub-agents) | 方法技能另列 | 团队可共享前后端、测试、安全与产品角色的工作规范。 | 提示定义不保证专业正确性或强制质量门；多代理非多人。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4445 | [IWE](https://github.com/iwe-org/iwe) | 工程组件另列 | 团队可用 Git 共享决策和知识结构，让人和代理查询同一份文件。 | 明确核心无内置 AI；liwe 库 API 未稳定，Mac 应用与技能另仓。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4473 | [Swift Concurrency Agent Skill](https://github.com/AvdLee/Swift-Concurrency-Agent-Skill) | 方法技能另列 | Swift 团队可共享迁移规则、并发排错和异步测试指导。 | 指南不代替编译与并发测试，未安装运行。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4485 | [Agently](https://github.com/AgentEra/Agently) | 工程组件另列 | 工程团队可共同维护提示契约、执行追踪和长流程审批。 | Session 不等于持久工作流；开源核心与生态服务分开。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4531 | [AI DevKit](https://github.com/codeaholicguy/ai-devkit) | 方法技能另列 | 研发团队把多工具设置、工程规范与可检索决策随仓库共享。 | 本地控制层，不是托管多人权限平台；跨 agent 通信依客户端支持。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4583 | [rep+](https://github.com/repplus/rep-chrome) | 团队直接性不足 | 开发安全团队可共享请求样本和脱敏截图，辅助调试分析。 | 本地浏览器扩展；扫描范围有限，调用 LLM 的数据路径需配置，未运行测试。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4586 | [LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness) | 团队直接性不足 | 团队可查看长期任务进展、审批和恢复证据，支持多阶段交付。 | DeepSeek 当前 phase1 CLI，GUI/MCP 待后续；长时成功率未测。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4619 | [Claude Code Academic Workflow](https://github.com/pedrohcgs/claude-code-my-workflow) | 方法技能另列 | 研究团队可共享论文、课件和数字结论追溯规范。 | 并非自主 daemon，循环由用户/技能发起；质量门效果未实测。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4693 | [Memento Skills](https://github.com/Memento-Teams/Memento-Skills) | 团队直接性不足 | 团队可复用积累技能并通过审计、质量检查与回滚管理迭代。 | 桌面/服务/研究模块需区分；技能演化效果和隔离未测。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4713 | [CC Safety Net](https://github.com/kenryu42/cc-safety-net) | 方法技能另列 | 团队可通过 Git 共享危险命令与敏感路径规则。 | 坏配置 fail-open；不是 OS 沙箱，文档指出部分 CLI/交互输入未覆盖；hook 需各端安装。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4743 | [Director](https://github.com/video-db/Director) | 团队直接性不足 | 媒体团队可复用摘要、片段和分享工作流。 | 依赖 VideoDB 和生成服务，不是独立全量视频基础设施。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4764 | [KAI Scheduler](https://github.com/kai-scheduler/KAI-Scheduler) | 工程组件另列 | 平台团队可在共享 GPU 集群中平衡不同团队的资源需求。 | 需 Kubernetes 资源与策略配置，规模/性能未测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4811 | [npcpy](https://github.com/NPC-Worldwide/npcpy) | 工程组件另列 | 开发团队可共享角色/工具定义并通过 API 服务化代理流程。 | team 指代理；自动执行代码需受控配置，Incognide 是另产品。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 4825 | [Custom AI Agent for Burp](https://github.com/six2dez/burp-ai-agent) | 团队直接性不足 | 安全团队可把既有 Burp 测试与代理工具、审计串联。 | 非 Burp 内置 AI；官方 README 披露0.9.x问题并称1.0修复，未独立验证；未运行扫描。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 4900 | [Phantom](https://github.com/ghostwright/phantom) | 保留待深核 | 团队可通过 Slack 请求工作，并共享报告、仪表盘和内部工具。 | 高度自主可执行基础设施操作；自述案例非实测，公开 URL 仍需配置认证。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 4904 | [Rust Skills](https://github.com/actionbook/rust-skills) | 方法技能另列 | Rust 团队可共享编码约定、领域架构和依赖上下文。 | CoWork 包管理属另项目；领域正确性宣传未验证。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 4936 | [Arkon](https://github.com/nduckmink/arkon) | 商业或许可边界待核 | 按部门与角色提供组织知识，编辑者审阅知识更新计划，支持草稿审批、版本回退和管理操作审计。 | 采用 PolyForm Internal Use，不能按标题直接标为 OSI 开源；通知系统和员工 CLI 等仍未完成。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5012 | [UX/UI Agent Skills](https://github.com/plugin87/ux-ui-agent-skills) | 方法技能另列 | 设计研发团队可共享 tokens、可访问性与交互质量检查。 | 专家年限和每次可用为宣传，自动检查不等于完整可访问性认证。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5063 | [AutoCVE](https://github.com/larlarua/AutoCVE) | 团队直接性不足 | 安全团队可集中管理项目审计、验证记录与报告。 | 一键 CVE 不保证有效漏洞或编号授予；AGPL，未执行审计/利用。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5078 | [codesight](https://github.com/Houseofmvps/codesight) | 工程组件另列 | 研发团队可共享项目结构知识，辅助上手与变更分析。 | TypeScript 用 AST，其余主要 regex；性能/准确率未测，不混称全部语义解析。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5118 | [Haft](https://github.com/m0n0x41d/haft) | 方法技能另列 | 团队通过 Git 共享决策和证据，同步后可明确处理冲突。 | v9 无内置 agent executor；语义分类不是发布授权，需由实际流程执行。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5175 | [Quilt](https://github.com/quiltdata/quilt) | 商业或许可边界待核 | 科研数据团队可共享带元数据、文档和血缘的可重现数据包。 | 完整搜索可视化、多用户协作治理属企业平台，非本仓全量开放能力。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5184 | [App Store Preflight Skills](https://github.com/truongduy2611/app-store-preflight-skills) | 方法技能另列 | 移动团队可共享送审清单并检查代码、配置与元数据。 | 不保证通过苹果审核；指南时效与业务适用需核验。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5249 | [C Code Style](https://github.com/MaJerle/c-code-style) | 方法技能另列 | C团队可共享代码规范并用格式化工具和技能减少风格漂移。 | 规则目标是风格一致，不是缺陷或安全验证；根README为符号链接。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5248 | [FastClaw](https://github.com/fastclaw-ai/fastclaw) | 商业或许可边界待核 | 管理员可向用户共享模型/技能，用户拥有私有覆盖和隔离会话。 | Source Available，限制跨组织SaaS与移除品牌；隔离效果未测。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5273 | [Lenny Product Skills](https://github.com/RefoundAI/lenny-skills) | 方法技能另列 | 产品团队可共享PRD、优先级、指标及组织运作方法。 | 引用核实为项目自述，技能不能保证决策质量；不是原作者官方产品。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5306 | [RepoBrain](https://github.com/study8677/repobrain) | 方法技能另列 | 研发团队可共享仓库动态上下文和统一行为规范。 | 原名Antigravity Workspace Template；benchmark未复现，外部MCP需显式启用。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5319 | [Thinking Skills](https://github.com/tjboudreaux/cc-thinking-skills) | 方法技能另列 | 团队可共享讨论框架与明确输出步骤。 | 评测存在证据缺口且提升未达自定阈值，不宣传提高准确率。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5348 | [ApeRAG](https://github.com/apecloud/ApeRAG) | 保留待深核 | 知识团队可集中维护文档、检索图和代理，并保留审计。 | 生产级为自述；底层服务需部署，局部MIT指依赖不是主项目Apache许可。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 5377 | [Hopsworks](https://github.com/logicalclocks/hopsworks) | 商业或许可边界待核 | ML团队共享特征/模型/数据，按项目治理并追溯血缘。 | 托管serverless仍beta；本地企业部署条件与各组件许可需独立确认。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5393 | [Screenwriting Skills](https://github.com/jtydhr88/screenwriting-skills) | 方法技能另列 | 编剧团队可共享故事拆解、文档链、反馈和交付约定。 | 技能MIT不覆盖书籍/剧本引用；方法不保证创作质量。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5409 | [HiMarket](https://github.com/higress-group/himarket) | 商业或许可边界待核 | 组织统一分发AI资源，控制订阅审批、身份、配额与用量。 | README 标 Apache-2.0，但 LICENSE 的定义及授权条文有改写，GitHub 返回 NOASSERTION；许可证待澄清。依赖 Higress 等后端。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5410 | [Deep Researcher Agent](https://github.com/Xiangyue-Zhang/auto-deep-researcher-24x7) | 工程组件另列 | 科研团队可在固定预算与目标下复用训练、反思和报告流程。 | 长期无人值守效果未复现，任务结论仍需实验验证。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5435 | [IoT DC3](https://github.com/pnoker/iot-dc3) | 工程组件另列 | 工业平台团队可把设备数据以统一接口提供给代理，保留按工具授权和审计。 | AGPL/商业许可；不能推定适合关键设备自主控制，未连接设备。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5502 | [AI Builder Club Skills](https://github.com/AI-Builder-Club/skills) | 方法技能另列 | 团队可共享运行/验证流程与积累经验。 | 生产效果为作者自述；skills安装不自动提供云隔离设施。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5517 | [Newsjack](https://github.com/elvisun/newsjack) | 方法技能另列 | 公关团队可共享新闻角度、事实检查、媒体清单与报告。 | 部分技能未推出；实时数据增强依Medialyst，未发媒体消息。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5533 | [iOS Simulator Skill](https://github.com/conorluddy/ios-simulator-skill) | 方法技能另列 | 移动团队可共享构建、可访问性及本地化验收流程。 | 需Apple工具链，默认偏AppleSilicon；自动WCAG检查非完整认证。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5604 | [AWorld](https://github.com/inclusionAI/AWorld) | 工程组件另列 | 业务专家与工程团队可共享领域知识并评估代理执行。 | battle-tested和规模效果未验证；示例成果不保证通用成熟度。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5616 | [Xcode Build Optimization Skills](https://github.com/AvdLee/Xcode-Build-Optimization-Agent-Skill) | 方法技能另列 | 移动团队可共享可审阅计划和构建证据。 | 长期团队监控属RocketSim另产品；Cursor插件仍coming soon。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5644 | [Kubetorch](https://github.com/run-house/kubetorch) | 工程组件另列 | ML与平台团队可共享集群计算并在IDE/CI接收运行日志。 | 速度/省成本比例未实测；托管平台独立。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5660 | [LightAgent](https://github.com/wanxingai/LightAgent) | 工程组件另列 | 开发团队可复用审批、运行轨迹和工作流恢复。 | 0.10为development；SharedMemoryPool原型在内存，不宣称成熟分布式记忆。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5665 | [Goose Skills](https://github.com/gooseworks-ai/goose-skills) | 方法技能另列 | 增长团队共享分析和活动产物。 | MIT技能/CLI连接独立付费GooseWorks API；不混同Block Goose。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5685 | [mem9](https://github.com/mem9-ai/mem9) | 工程组件另列 | 团队可共享知识空间并通过dashboard管理记忆。 | 共享主要是跨代理/runtime 的记忆层；可自建，但控制面、数据库与成员治理需配置；转记忆工程组件，不当作即用多人协作平台。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5721 | [Truss](https://github.com/basetenlabs/truss) | 工程组件另列 | 模型与平台团队共享代码、权重和依赖交付。 | 部分伸缩/运行能力依部署平台；自有infra需要配置。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5741 | [ChatJS](https://github.com/FranciscoMoretti/chat-js) | 团队直接性不足 | 团队可复用聊天后端/界面并分享对话结果。 | 公开链接不等于细粒度团队权限；模型gateway与执行器另配。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5772 | [Free4Chat](https://github.com/i365dev/free4chat) | 团队直接性不足 | 团队可短时共享任务、媒体和产物，保留各参与者原有执行边界。 | 明确实验testbed，无永久workspace；短时房间不代替组织身份治理。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 5770 | [Agentic SOC Platform](https://github.com/FunnyWolf/agentic-soc-platform) | 商业或许可边界待核 | 安全团队在统一案件中共享SIEM数据、情报和调查报告。 | README 声明 MIT，但官方 license API 未返回许可证，根目录也无 LICENSE；暂未确认实际授权文件，保留待核。外部模型数据流需按配置检查。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5822 | [.NET Skills](https://github.com/Aaronontheweb/dotnet-skills) | 方法技能另列 | 团队统一C#/EF/Akka/测试和共享工具约定。 | 专门agents只含Claude插件，Codex只有skills；效果未测。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5843 | [HackGPT](https://github.com/yashab-cyber/HackGpt) | 商业或许可边界待核 | 安全团队可统一调查报告、角色及审计。 | 大规模企业级/零日能力未经测试；MIT附企业条款需核对，未执行攻击。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5861 | [GoModel](https://github.com/ENTERPILOT/GoModel) | 商业或许可边界待核 | 平台团队可按用户/团队/key分配预算并观测调用。 | OIDC等Pro商业；对竞品和最快的断言未验证，不引用。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 5895 | [AWS Agent Skills](https://github.com/itsmostafa/aws-agent-skills) | 方法技能另列 | 云团队可共享IaC、IAM和排障模式。 | 社区非AWS官方；自动更新不保证时效与正确性。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5911 | [ClaudeBox](https://github.com/RchGrav/claudebox) | 工程组件另列 | 研发团队可共享语言profile和网络allowlist配置。 | Docker隔离取决于挂载/权限，不是绝对安全。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5921 | [Agent SOP](https://github.com/strands-agents/agent-sop) | 方法技能另列 | 团队可共享参数化目标、约束和多步骤方法。 | 自然语言MUST不是技术强制控制。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5957 | [Munk AI](https://github.com/chaxiu/munk-ai) | 工程组件另列 | 开发/QA团队可共享自然语言验收与设备反馈。 | Linux/Windows beta；iOS仅macOS，不等于各平台同等支持。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 5990 | [Awesome Journal Skills](https://github.com/brycewang-stanford/Awesome-Journal-Skills) | 方法技能另列 | 科研团队可共享投稿要求检查与论文修订流程。 | 机构关联与绩效未独立验证；规则需以期刊最新官网为准，不保证录用。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 5997 | [Vibecode Pro Max Kit](https://github.com/withkynam/vibecode-pro-max-kit) | 方法技能另列 | 团队可共享计划、规格、审阅文件和项目记忆。 | 自动质量声明未测；安装保留文件有vc命名冲突例外。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 6011 | [Swift iOS Skills](https://github.com/dpearson2699/swift-ios-skills) | 商业或许可边界待核 | 移动团队可共享框架用法与开发约定。 | PolyForm Perimeter；部分框架beta，目标iOS26+不适合直接套旧平台。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6025 | [Nekro Agent](https://github.com/KroMiose/nekro-agent) | 商业或许可边界待核 | 团队可复用机器人事件/工具集成和共享插件。 | 自定义Apache许可，结构化MCP管理预览；云社区不等于成员权限。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |
| 6102 | [DevOps Security Agent Skills](https://github.com/BagelHole/DevOps-Security-Agent-Skills) | 方法技能另列 | 运维团队可共享编码代理guardrails、平台/模型治理方法。 | 技能不等于专家能力或合规认证，未执行。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 6108 | [ClawSec](https://github.com/prompt-security/clawsec) | 方法技能另列 | 团队可复用技能来源检查、漂移检测与安装审批。 | AGPL；装包不等于启用持久hook，可选保护另装。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 6139 | [Hivemind Runtime](https://github.com/Emiyaaaaa/HiveMind) | 工程组件另列 | 平台团队可统一不同编排框架的运行、工具记录和审计。 | LICENSE 采用指向官方 Apache-2.0 的短声明，API 未自动识别；不是与前两项相同的条文改写。定位 runtime，RBAC/OIDC 需要部署集成，转工程组件。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 6204 | [Tribe](https://github.com/StreetLamb/tribe) | 保留待深核 | 团队可共用平台构建流程并审批工具调用。 | 有多用户/多租户文档证据，但 team 多指代理组；最近推送 2025-10-27，近一年无推送，维护与部署兼容性待核。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 6222 | [Vigolium](https://github.com/vigolium/vigolium) | 团队直接性不足 | 安全团队可统一扫描发现和变更审计schema。 | 自主测试需限定授权，模块数量非有效性证明；未执行。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 6235 | [GameDev Agent Skills](https://github.com/gamedev-skills/awesome-gamedev-agent-skills) | 方法技能另列 | 游戏团队可共享引擎规范、美术方向和交付清单。 | 数量文字有旧新不一致，版本需按支持表，未验证质量。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 6242 | [AgentRC](https://github.com/microsoft/agentrc) | 方法技能另列 | 团队可在CI检查规范漂移并通过APM分发共享资产。 | 实验性，APM组织审计为配套工具，不全属AgentRC。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 6258 | [Loom Delivery Harness](https://github.com/valkor-ai/loom) | 方法技能另列 | 团队可共享交付方法与按任务加载的技术参考。 | 不是录屏产品Loom；效果和跨host行为未测。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 6263 | [Clearwing](https://github.com/Lazarus-AI/clearwing) | 团队直接性不足 | 安全团队可复用人工授权、发现记录和代码审计。 | 与Glasswing等效仅挑战目标，未证实；未执行。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 6276 | [Pydantic Deep Agents](https://github.com/vstorm-co/pydantic-deepagents) | 工程组件另列 | 团队可复用类型化工具、审批和任务编排构建内部代理。 | 无限context/100%类型安全为宣传，judge合并不保证正确；agent team非多人。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 6271 | [Agents Flex](https://github.com/agents-flex/agents-flex) | 工程组件另列 | Java团队可复用模型路由、审批、恢复及租户查询检查。 | 隔离依配置与扩展，生产特性未测。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 6295 | [Ongrid](https://github.com/ongridio/ongrid) | 保留待深核 | 运维团队可从Slack/Telegram调查告警并通过写入门审批变更。 | AGPL；自动根因/修复效果未验证，生产操作未执行。 有进一步审阅价值；本批未完成当前状态与许可补查，保留后续处理。 |
| 6325 | [Claw Patrol](https://github.com/denoland/clawpatrol) | 工程组件另列 | 团队可用HCL规则限制SQL/K8s/HTTP并接人工审批。 | 仅覆盖解析协议与经网关流量，非所有代理操作防护。 团队价值主要通过集成或部署实现；适合工程组件栏目。 |
| 6348 | [LabClaw](https://github.com/wu-yc/LabClaw) | 方法技能另列 | 研究团队可共享领域工具使用与产物规范。 | 不是完整LabOS或实验设备控制平台；生物医学输出需专家审核。 团队价值主要来自共享流程、规范或技能；单列实践资料，不优先作为多人产品。 |
| 6360 | [Echo Agent](https://github.com/fuyuxiang/echo-agent) | 团队直接性不足 | 团队可用IM入口交付定时任务并审计高风险动作。 | gateway仅loopback；off策略会关闭审批，非默认组织权限平台。 现有证据主要是个人工具、产物交接或代理编排；暂不优先作为真人协作产品。 |
| 6359 | [Lightswind UI](https://github.com/codewithMUHILAN/Lightswind-UI-Library) | 商业或许可边界待核 | 前端团队可复用一致组件并共享Pro授权接入。 | Pro块/模板独立收费，世界首创比较不采信。 需厘清版本、许可或托管服务边界；保留候选，不直接排除。 |

## 后续

继续处理队列中尚未二筛的 826 项。前面各批的待深核、商业边界、工程组件和实践资料均保留记录，不为推进批次而自动淘汰。
