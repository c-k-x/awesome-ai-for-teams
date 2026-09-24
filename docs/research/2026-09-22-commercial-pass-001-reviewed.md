# 商业与许可边界 · 第 1 批重点核验结果

核查日期：2026-09-22。重点候选已补查当前 GitHub 元数据、README 和根许可证；未安装或部署。

本批 15 个重点项目中，1 个进入建议审阅；其余保留为商业、企业版、附加许可或 source-available 边界项目。

| ID | 项目 / Stars | 结果 | 跟 team 的关系 | 许可证与官方核验结论 |
| ---: | --- | --- | --- | --- |
| 4827 | [Traycer](https://github.com/traycerai/traycer) · 1,506 | 建议审阅 | 明确允许邀请成员进入共同工作区、共享看板和任务分配。 | MIT；README 明确邀请成员、共享看板、实时编辑和任务分配。 |
| 641 | [Coder](https://github.com/coder/coder) · 16,518 | 商业功能边界 | 平台团队统一开发环境、成员身份、AI 模型接入和费用审计，让同事委派任务时复用受控基础设施。 | AGPL 核心；Premium 与 AI Gateway 等团队治理功能需要按方案区分。 |
| 5592 | [Heym](https://github.com/heymrun/heym) · 1,245 | 附加许可边界 | 团队可共同维护流程、文件和dashboard，接企业OIDC并审阅执行。 | README 标 MIT，但 Commons Clause 限制商业销售，GitHub API 返回 NOASSERTION。 |
| 142 | [Cherry Studio Enterprise](https://github.com/CherryHQ/cherry-studio) · 52,063 | 商业版团队功能 | 管理员统一分配模型和知识库权限，员工共用团队知识和配置，支持集中运维。 | 社区版 AGPL；团队后台、共享知识库和员工权限属于 Enterprise Edition。 |
| 1823 | [ByteRover CLI](https://github.com/campfirein/byterover-cli) · 4,964 | Elastic 许可 / Cloud | 团队审查知识变更、分支合并上下文，并在成员间共享项目经验。 | 团队共享空间和成员权限来自 Cloud；CLI 根许可证为 Elastic License 2.0。 |
| 2427 | [OneCLI](https://github.com/onecli/onecli) · 3,498 | EE 功能边界 | 每名员工配一个智能体，团队统一控制工具权限、共享连接和人工审批，从 Slack 或工作台使用。 | Apache 核心与 ee 目录企业订阅功能分开。 |
| 3324 | [Spacebot](https://github.com/spacedriveapp/spacebot) · 2,399 | 许可待确认 | 团队在 Slack/Discord 等并发协作，共享上下文并通过持久审批监督后台任务。 | README 明确团队协作和审批，但根许可证 API 返回 NOASSERTION。 |
| 4266 | [Open Mercato](https://github.com/open-mercato/open-mercato) · 1,763 | 企业包边界 | 团队共享业务架构、规格、review 流程，业务助手写操作由审批卡控制。 | 核心 MIT；MFA、SSO/SCIM、记录锁和 Agent Orchestrator 位于商业 Enterprise 包。 |
| 5085 | [Agor](https://github.com/preset-io/agor) · 1,406 | BSL / source-available | 实时光标、评论、共享会话和环境；分支权限、个人凭据、费用记录和共享知识库。 | README 与 LICENSE 明确 BSL 1.1，当前不能标为 OSI 开源。 |
| 2069 | [Archestra](https://github.com/archestra-ai/archestra) · 4,290 | Open Core / Enterprise | 团队统一助手、个人身份工具授权、私有 MCP 目录、SSO/RBAC 与费用。 | 默认 AGPL，Enterprise 标记文件适用商业许可；SSO、RBAC 和费用功能需按文件核对。 |
| 4936 | [Arkon](https://github.com/nduckmink/arkon) · 1,460 | PolyForm Internal Use | 按部门与角色提供组织知识，编辑者审阅知识更新计划，支持草稿审批、版本回退和管理操作审计。 | 团队知识、RBAC、审批和审计明确，但许可证限制第三方服务销售。 |
| 442 | [OpenWork](https://github.com/different-ai/openwork) · 23,686 | EE 控制面 | 组织发布并分配能力给团队或个人，成员从已有 AI 客户端复用同一技能与连接，减少重复配置。 | 核心包 MIT；组织控制面、MCP 网关和推理能力在 EE，生产使用需订阅。 |
| 3014 | [Cordys CRM](https://github.com/1Panel-dev/CordysCRM) · 2,737 | 附加许可 | 销售团队共用客户、权限、审批记录和分析，接入 AI 辅助线索及成单分析。 | FIT2CLOUD Open Source License 基于 GPLv3 并带额外限制；CRM 团队功能明确。 |
| 4773 | [FIM One](https://github.com/fim-ai/fim-one) · 1,530 | Source Available | 业务团队可统一知识、数据和系统操作，通过组织成员审批敏感动作。 | 明确不是 OSI 开源；飞书审批已交付，其他 IM 渠道仍在路线图。 |
| 5792 | [HiveChat](https://github.com/HiveNexus/HiveChat) · 1,187 | 附加商业条件 / 维护观察 | 管理员一次配置模型，按成员分组控制模型访问和月度 Token 限额，可对接企微、钉钉、飞书登录。 | Apache 2.0 文本带衍生作品商业许可条件；最近代码推送为 2025-09-16。 |

## 结论

- 直接建议审阅：Traycer（ID 4827）。
- 其余 14 个保留给用户决定是否需要商业产品或受限许可项目。
- 本批剩余 185 个仍按原分流台账保留，下一步继续核验剩余 25 个商业/许可项目。
