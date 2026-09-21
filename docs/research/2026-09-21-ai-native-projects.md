# AI Native 团队项目补充（2026-09-21）

本轮按 `stars:>100` 检索 AI Native 相关项目，经审阅选择候选表中的 **1–9、11、12、15**，新增 12 项。中英文清单从 166 项增至 178 项。

## 检索范围与依据

- 检索开始时间：`2026-09-21T10:20:39+08:00`。以下 stars 沿用本轮 GitHub API 读取快照，不代表后续实时数值。
- 检索名称与简介中的 `"ai-native"`、`"ai native"`、`"AI原生"`，以及 `topic:ai-native`，均附加 `stars:>100 fork:false`，完整分页并去重。
- 共得到 232 个仓库结果，按明确措辞或相关标签筛到 230 个，包含 1 个已归档项目；其中 172 个处于 101–999 stars。另从 AI-DLC 等相关方向补查 Chorus 等候选。
- 关键词命中与自称 AI Native 不直接作为收录理由。优先检查共享资料、成员权限、任务交接、共同维护的工程方法，以及团队可复用的模型与工具基础设施。
- 用途和能力边界均依据维护者 README **转述**；团队关联与分类为本轮收录判断，未安装实测。
- Paca 在上一轮广泛检索中已经命中，但未进入深入核验名单；本轮补充，避免把筛选遗漏误记为星数门槛变化带来的发现。

## 确认收录的 12 项

编号沿用本轮 21 项候选审阅表，项目链接为维护者仓库及 README 来源。

| 原编号 | 项目 | Stars 快照 | 分类 | 跟团队的关系与能力边界（转述与判断） |
| ---: | --- | ---: | --- | --- |
| 1 | [Paca](https://github.com/Paca-AI/paca) | 1,840 | 任务委派与交付跟进 | 人与 Agent 共用 Scrum 看板、迭代、需求和设计文档，结合成员角色跟进交付。 |
| 2 | [Chorus](https://github.com/Chorus-AIDLC/Chorus) | 1,173 | 任务委派与交付跟进 | 将提案、文档、任务执行和人工验证关联起来，集中管理 Agent 权限与进展。 |
| 3 | [HQBase](https://github.com/HQBase/hqbase) | 328 | 共享协作空间 | 成员共同处理邮箱，通过访问控制、审计和 MCP 接入助手；部署于自有 Cloudflare 账户。 |
| 4 | [Tentix](https://github.com/labring/tentix) | 411 | 聊天与会议接入 | 客服团队通过工单结合 AI 回复、知识检索和人工交接；部分员工管理和分析功能仍在规划中。 |
| 5 | [OpenKnowledge](https://github.com/inkeep/open-knowledge) | 4,268 | 共享资料与助手 | 通过 Git/GitHub 共享、同步 Markdown 文档，成员和 Agent 复用共同资料。 |
| 6 | [OpenPencil](https://github.com/open-pencil/open-pencil) | 8,520 | 白板与视觉协作 | 支持 WebRTC 多人实时共同编辑，并用 AI/MCP 修改和检查设计稿；仍在积极开发。 |
| 7 | [Potpie](https://github.com/potpie-ai/potpie) | 5,731 | 共享规则与经验 | 关联代码、PR、任务和团队决策，为不同助手提供可检索的项目上下文；不将其描述为完整多人权限平台。 |
| 8 | [Markplane](https://github.com/zerowand01/markplane) | 182 | 任务委派与交付跟进 | 将任务、计划和依赖随 Git 分享，以摘要和 MCP 减少交接时重复解释项目状态；与 Backlog.md 有用途重叠。 |
| 9 | [Knowns](https://github.com/knowns-dev/knowns) | 246 | 共享规则与经验 | 将需求、任务、验收条件和决策存入仓库，供成员及助手复用；独立团队同步服务仍为计划。 |
| 11 | [Higress](https://github.com/higress-group/higress) | 9,419 | 模型接入 | 平台团队统一管理模型和 MCP 工具入口，供多个应用复用鉴权、限流和观测配置。 |
| 12 | [Plano](https://github.com/katanemo/plano) | 7,061 | 模型接入 | 将模型与 Agent 路由、过滤和追踪集中到代理层，减少团队各项目重复建设。 |
| 15 | [My Git Handbook](https://github.com/xirong/my-git) | 7,397 | 实践指南 | 为团队建立 Agent 变更审查、PR、worktree、CI 和发布协作约定提供案例与模板。 |

## 本轮未选择

保留审阅编号与结果，避免后续重复推荐时混淆本轮决定；未选择不代表项目永久不适合收录。

| 原编号 | 项目 | 结果 |
| ---: | --- | --- |
| 10 | [marimo](https://github.com/marimo-team/marimo) | 本轮未选择。 |
| 13 | [DataBuff](https://github.com/databufflabs/databuff) | 本轮未选择。 |
| 14 | [OpenDeRisk](https://github.com/derisk-ai/OpenDerisk) | 本轮未选择。 |
| 16 | [AI-Native Engineering](https://github.com/alfonsograziano/ai-native-engineering) | 本轮未选择。 |
| 17 | [Awesome QA Skills](https://github.com/naodeng/awesome-qa-skills) | 本轮未选择。 |
| 18 | [PROSE / awesome-ai-native](https://github.com/danielmeppiel/awesome-ai-native) | 本轮未选择。 |
| 19 | [AI-Native PM OS](https://github.com/vishalmdi/ai-native-pm-os) | 本轮未选择。 |
| 20 | [AngusTester](https://github.com/AngusKit/AngusTester) | 本轮未选择。 |
| 21 | [AngusKit](https://github.com/AngusKit/AngusKit) | 本轮未选择。 |

TeamAI CLI 已在清单中；已归档的 aide，以及未超过 100 stars 的 taskade/taskade、multigent/multigent 和 jpantsjoha/ai-native-developer-experience 未进入本轮收录表。

## 文档验证

- 中英文各 178 项，新增 12 项，原有 166 项保留。
- 按分类核对两种语言的条目链接、顺序和数量，检查英文名排序、重复项、目录锚点、相对链接和 UTF-8。
- 核对本表选择编号与清单实际新增项目一致，保留未实现能力和部署边界。
- 本次仅修改 Markdown，无应用构建或测试任务；运行 `git diff --check` 检查空白。
