# 团队价值快速二筛 · 剩余 826 个已完成

核查开始时间：2026-09-22T00:26:04+08:00；实际联网读取时间见 CSV（UTC）。

逐项读取了剩余 826 个候选的既有源文核验记录，完成团队价值分流；对其中 32 个重点候选补查官方仓库状态、README 和根许可证，均读取成功。其余 794 个未在本轮重新联网核验。原始记录保持不变，当前结论以本批新增证据为准。

本轮 24 个进入建议审阅名单，其他 802 个保留具体限制和分流理由。累计 1,426 个候选二筛全部完成，无未二筛条目。未安装、执行或部署被审项目；未加入主清单、未提交或推送。

## 本轮分类

| 分类 | 数量 |
| --- | ---: |
| 工程组件另列 | 197 |
| 团队直接性不足 | 220 |
| 方法技能另列 | 127 |
| 建议审阅 | 24 |
| 商业或许可边界待核 | 132 |
| 保留待深核 | 126 |

## 建议审阅

介绍为英文，团队用途及限制为中文转述；ID 为全量库存固定编号。Stars 来自本轮官方 API 快照。根许可证不代表第三方依赖和商业配套服务全部同许可。

| ID | 项目 / Stars | Description (EN) | 跟 team 的关系 | 标签 | 根许可证 | 限制 |
| ---: | --- | --- | --- | --- | --- | --- |
| 6448 | [AIHelms](https://github.com/beizhu-1209/AIHelms) · 1,032 | An enterprise AI-resource platform with identity, budgets, cost attribution, and tool distribution. | 组织按人/部门/项目管理模型额度和技能审批。 | enterprise-ai, governance, cost-management | [GPL-3.0](https://github.com/beizhu-1209/AIHelms/blob/main/LICENSE) | GPL/商业许可；A2A协作仍规划。 |
| 6544 | [Helical Insight](https://github.com/helicalinsight/helicalinsight) · 1,054 | An embedded BI platform with AI chat analytics and user-scoped data controls. | 团队可共享报表/仪表盘并按登录身份约束数据。 | ai-assisted, business-intelligence, collaboration | [AGPL-3.0](https://github.com/helicalinsight/helicalinsight/blob/master/LICENSE) | 根 LICENSE 为 AGPL-3.0；SSO 与按登录身份限制数据有文档依据，但“所有企业能力免费”和高性能未逐功能部署验证。 |
| 14 | [prompts.chat](https://github.com/f/prompts.chat) · 170,890 | A self-hostable prompt library with custom branding and authentication for sharing reusable AI instructions. | 团队可自建带身份验证的私有提示词库，统一维护和复用工作模板。 | prompts, knowledge, self-hosted | [MIT（代码） / CC0-1.0（提示数据）](https://github.com/f/prompts.chat/blob/main/LICENSE) | 代码及站点原创内容 MIT；提示数据 CC0-1.0，根 LICENSE 明确分项适用。细粒度成员权限和审批流程未核验。 |
| 467 | [Opik](https://github.com/comet-ml/opik) · 22,181 | A self-hostable platform for agent traces, evaluation datasets, experiments, prompts, and production monitoring. | 工程与评估团队共用执行证据和实验结果，比较提示词与模型改动并排查生产问题。 | observability, evaluation, prompts, self-hosted | [Apache-2.0](https://github.com/comet-ml/opik/blob/main/LICENSE) | 不引用竞品比较表作为事实；外部模型评估是否出网取决于所选供应商。 |
| 681 | [OpenMetadata](https://github.com/open-metadata/OpenMetadata) · 15,278 | A metadata and organizational-context platform linking data ownership, lineage, quality, policies, and reusable knowledge. | 数据和 AI 团队共用业务术语、数据责任人、质量与历史经验，让智能体继承可追溯组织上下文。 | data, knowledge, governance, mcp | [Apache-2.0](https://github.com/open-metadata/OpenMetadata/blob/main/LICENSE) | Apache 开源上下文与元数据平台；AI Studio、托管 AI agents、企业 MCP workflows 等另在 Collate，不将其全部写成开源核心。元数据权限不自动等于源系统数据权限。 |
| 794 | [DataHub](https://github.com/datahub-project/datahub) · 12,744 | A metadata platform for shared data discovery, ownership, governance, and AI context. | 团队把数据责任、谱系与讨论汇成统一元数据图，为员工和智能体提供一致的可解释数据背景。 | data, knowledge, governance | [Apache-2.0](https://github.com/datahub-project/datahub/blob/master/LICENSE) | Apache 开源元数据平台；DataHub Cloud 独立，不承诺本地快速启动具有所有企业部署能力。AI 关联主要是为人与代理提供共同数据上下文。 |
| 1192 | [Agentic Inbox](https://github.com/cloudflare/agentic-inbox) · 7,976 | A shared email application with AI-assisted search and drafting on Cloudflare. | 受信任小组共用邮件处理入口，AI 帮助查找对话与起草回复。 | communication, email, self-hosted | [Apache-2.0](https://github.com/cloudflare/agentic-inbox/blob/main/LICENSE) | 仅适合可信小组：获准用户可访问全部邮箱，无逐邮箱授权。依赖 Cloudflare Access/Workers 等服务；最近推送 2026-04-23。 |
| 1587 | [Nexent](https://github.com/ModelEngine-Group/nexent) · 5,880 | A no-code agent platform with multi-tenancy and role-based access. | 团队共用工具、技能和记忆，同时按租户与角色管理资源。 | ai-native, teams, agents | [MIT](https://github.com/ModelEngine-Group/nexent/blob/develop/LICENSE) | 生产级为项目定位，权限隔离和高可用未实测。 |
| 1624 | [Coze Loop](https://github.com/coze-dev/coze-loop) · 5,744 | Manage prompts, evaluations, and traces for AI agents. | 开发与运营团队共用提示版本、评估集和运行证据。 | llmops, evaluation | [Apache-2.0](https://github.com/coze-dev/coze-loop/blob/main/LICENSE) | 开源版提供核心模块，不能默认等同商业版全部能力。 |
| 1757 | [Transformer Lab](https://github.com/transformerlab/transformerlab-app) · 5,188 | A research platform for model experiments, artifacts, and shared compute. | 实验室团队集中实验跟踪、模型注册和产物，复用现有计算集群。 | research, mlops, teams | [AGPL-3.0](https://github.com/transformerlab/transformerlab-app/blob/main/LICENSE) | 团队部署与个人桌面版有区别；不替代现有集群调度器。 |
| 1898 | [MonkeyCode](https://github.com/chaitin/MonkeyCode) · 4,741 | A self-hostable AI development platform for managing requirements, coding tasks, models, and development environments. | 团队共用开发平台，工程负责人集中管理模型、环境和需求，开发者执行构建测试及预览任务。 | ai-native, coding, collaboration, self-hosted | [AGPL-3.0](https://github.com/chaitin/MonkeyCode/blob/main/LICENSE) | 在线托管环境与内网自建分开；需要单独的开发环境主机，未实测移动端和离线模型组合。 |
| 2230 | [Agent Package Manager](https://github.com/microsoft/apm) · 3,873 | Version and distribute agent configuration with manifests, lockfiles, and policies. | 团队统一技能、提示和插件依赖，通过组织策略与 CI 检查配置漂移。 | skills, governance | [MIT](https://github.com/microsoft/apm/blob/main/LICENSE) | 内容扫描不保证识别所有恶意包；权限与绕过约定需按配置核验。 |
| 2329 | [GEOFlow](https://github.com/yaojingang/GEOFlow) · 3,672 | Coordinate AI content creation, human review, and multi-site publishing. | 品牌、增长和内容团队共用资料、质检、人工放行及发布凭证。 | marketing, teams, ai-native | [AGPL-3.0](https://github.com/yaojingang/GEOFlow/blob/main/LICENSE) | 当前源码 3.2 Beta，稳定版 3.1；AGPL，AI 可见性效果未实测。 |
| 2583 | [Laminar](https://github.com/lmnr-ai/lmnr) · 3,275 | Trace agents, evaluate changes, and track failure signals. | 研发与运维团队共用轨迹、评估集和仪表盘，通过 Slack 接收异常行为线索。 | observability, evaluation | [Apache-2.0](https://github.com/lmnr-ai/lmnr/blob/main/LICENSE.md) | 行为检测需定义与验证；第三方集成不等于本仓提供那些工具本体。 |
| 2919 | [Omnara](https://github.com/omnara-ai/omnara) · 2,859 | Run managed agents with shared execution state and role-based access. | 团队共用代理控制台，按组织/项目角色管理接入与运行状态。 | agents, teams | [Apache-2.0](https://github.com/omnara-ai/omnara/blob/main/LICENSE) | 应用自身仍负责最终用户授权与输出路由；不同计算提供者另配置。 |
| 3256 | [MCPHub](https://github.com/samanhappy/mcphub) · 2,456 | Operate MCP servers through a shared gateway with user-scoped access. | 团队集中连接工具，按用户提供凭据和可见范围，统一日志与健康管理。 | mcp, teams | [Apache-2.0](https://github.com/samanhappy/mcphub/blob/main/LICENSE) | 认证/隔离仍需配置，HA 等生产就绪未实测；不同于其他同名工具。 |
| 4814 | [agentchattr](https://github.com/bcurts/agentchattr) · 1,506 | A local multi-channel chat server for coordinating humans and coding agents through shared conversations. | 人和多个编码智能体共处频道，通过提及传递任务与上下文，减少终端之间手工复制。 | ai-native, collaboration, coding | [MIT](https://github.com/bcurts/agentchattr/blob/main/LICENSE) | 本地/可信网络协调工具，不是公网企业平台；网络模式 HTTP 与自动批准组合有明确限制。 |
| 5142 | [AIL Framework](https://github.com/CIRCL/AIL-framework) · 1,381 | A threat-intelligence framework for unstructured data with AI-assisted descriptions and investigation workflows. | 情报团队可共同检索关联泄漏线索、AI描述和调查结果。 | ai-assisted, security, threat-intelligence | [AGPL-3.0](https://github.com/CIRCL/AIL-framework/blob/master/LICENSE) | AI 辅助只是分析链一部分；采集和模型结果需人工核验，未执行。 |
| 5141 | [OpenTag (Amplift)](https://github.com/amplifthq/opentag) · 1,381 | A Slack teammate that queues coding work for a controlled runner and returns status and evidence to the same thread. | 工程频道提交任务、查看队列、批准关键动作并接收执行证据；runner 离线时保持任务入口。 | ai-native, collaboration, coding, slack | [MIT](https://github.com/amplifthq/opentag/blob/main/LICENSE) | 当前支持的 team profile 仅 Slack；GitHub 是任务目标。与主清单 fancyboi999/open-tag 不是同一仓库，避免同名合并；运行权限随所配代理。 |
| 5480 | [MCPJungle](https://github.com/mcpjungle/MCPJungle) · 1,272 | A self-hosted MCP gateway with shared discovery, access controls, and observability. | 团队集中注册工具，并按客户端分配可访问服务器。 | mcp, gateway, governance, collaboration | [MPL-2.0](https://github.com/mcpjungle/MCPJungle/blob/main/LICENSE) | MPL-2.0；enterprise 是仓库运行模式，不自动意味着收费，但 OAuth flow 尚待完成；不能等同完整企业 SSO。 |
| 5676 | [Taranis AI](https://github.com/taranis-ai/taranis-ai) · 1,219 | An OSINT platform for AI-assisted collection, analysis, and analyst-reviewed reports. | 情报团队整理新闻并共同形成报告交付。 | ai-assisted, threat-intelligence, research | [EUPL-1.2](https://github.com/taranis-ai/taranis-ai/blob/master/LICENSE.md) | 根许可证 EUPL-1.2；跨实例情报共享明确 experimental；可选分析助手使用外部兼容 API，来源及分析需人工复核。 |
| 5815 | [Keinsaas Navigator](https://github.com/keinsaasforever/better-chatbot) · 1,181 | An AI chatbot platform with shareable agents, workflows, and MCP configurations. | 团队可复用助手和工具配置并按可见性使用。 | ai-native, collaboration, chat | [MIT](https://github.com/keinsaasforever/better-chatbot/blob/main/LICENSE) | 文档协同编辑/S3仍规划；免费层不等于无限容量。 |
| 6337 | [Optio](https://github.com/jonwiggins/optio) · 1,055 | A self-hosted agent control plane for ticket, schedule, event, and interactive workflows. | 团队可把Jira/Linear等工作分配给本机或集群代理并统一观测。 | ai-native, agent-operations, workflow | [MIT](https://github.com/jonwiggins/optio/blob/main/LICENSE) | README 明确工作区 admin/member/viewer 与 OAuth/OIDC；身份和运行边界未实测，任务完成仍需验收。 |
| 6453 | [Obot](https://github.com/obot-platform/obot) · 1,034 | An organizational platform for AI gateways, approved tools, identity, and audit. | 团队统一模型/MCP/skills分发及使用治理，无需同一AI客户端。 | enterprise-ai, governance, mcp, collaboration | [MIT](https://github.com/obot-platform/obot/blob/main/LICENSE) | 当前 README 未收录 obot-platform/obot；恢复独立候选。Sentry 设备侧与服务端覆盖不同，需部署对应组件；治理效果未实测。 |

## 重点补查结果

32 个仓库均未归档，但“未归档”或近期推送不等于维护承诺。Argilla 明确不再开发新功能；One API 最近推送为 2026-01-09，均暂列观察。nao 存在商业许可文件。prompts.chat 的 NOASSERTION 来自分项许可说明，本轮按 MIT 代码与 CC0 提示数据记录，未当作没有许可证。

OpenTag (Amplift) 与主表的 Open Tag (fancyboi999) 指向不同仓库；当前主表也未收录 Obot，两项均按独立候选处理。

| ID | 项目 | 结论 | 最近推送（UTC） | 官方依据 |
| ---: | --- | --- | --- | --- |
| 6448 | [AIHelms](https://github.com/beizhu-1209/AIHelms) | 建议审阅 | 2026-09-10T10:50:20Z | [README](https://github.com/beizhu-1209/AIHelms/blob/main/README.md) · [LICENSE](https://github.com/beizhu-1209/AIHelms/blob/main/LICENSE) · [元数据](https://api.github.com/repos/beizhu-1209/AIHelms) |
| 6544 | [Helical Insight](https://github.com/helicalinsight/helicalinsight) | 建议审阅 | 2026-09-16T04:52:12Z | [README](https://github.com/helicalinsight/helicalinsight/blob/master/README.md) · [LICENSE](https://github.com/helicalinsight/helicalinsight/blob/master/LICENSE) · [元数据](https://api.github.com/repos/helicalinsight/helicalinsight) |
| 14 | [prompts.chat](https://github.com/f/prompts.chat) | 建议审阅 | 2026-09-09T10:27:05Z | [README](https://github.com/f/prompts.chat/blob/main/README.md) · [LICENSE](https://github.com/f/prompts.chat/blob/main/LICENSE) · [元数据](https://api.github.com/repos/f/prompts.chat) |
| 238 | [One API](https://github.com/songquanpeng/one-api) | 保留待深核 | 2026-01-09T03:26:43Z | [README](https://github.com/songquanpeng/one-api/blob/main/README.md) · [LICENSE](https://github.com/songquanpeng/one-api/blob/main/LICENSE) · [元数据](https://api.github.com/repos/songquanpeng/one-api) |
| 467 | [Opik](https://github.com/comet-ml/opik) | 建议审阅 | 2026-09-21T16:26:10Z | [README](https://github.com/comet-ml/opik/blob/main/README.md) · [LICENSE](https://github.com/comet-ml/opik/blob/main/LICENSE) · [元数据](https://api.github.com/repos/comet-ml/opik) |
| 681 | [OpenMetadata](https://github.com/open-metadata/OpenMetadata) | 建议审阅 | 2026-09-21T16:25:48Z | [README](https://github.com/open-metadata/OpenMetadata/blob/main/README.md) · [LICENSE](https://github.com/open-metadata/OpenMetadata/blob/main/LICENSE) · [元数据](https://api.github.com/repos/open-metadata/OpenMetadata) |
| 794 | [DataHub](https://github.com/datahub-project/datahub) | 建议审阅 | 2026-09-21T16:15:40Z | [README](https://github.com/datahub-project/datahub/blob/master/README.md) · [LICENSE](https://github.com/datahub-project/datahub/blob/master/LICENSE) · [元数据](https://api.github.com/repos/datahub-project/datahub) |
| 1192 | [Agentic Inbox](https://github.com/cloudflare/agentic-inbox) | 建议审阅 | 2026-04-23T21:04:17Z | [README](https://github.com/cloudflare/agentic-inbox/blob/main/README.md) · [LICENSE](https://github.com/cloudflare/agentic-inbox/blob/main/LICENSE) · [元数据](https://api.github.com/repos/cloudflare/agentic-inbox) |
| 1587 | [Nexent](https://github.com/ModelEngine-Group/nexent) | 建议审阅 | 2026-09-21T15:46:24Z | [README](https://github.com/ModelEngine-Group/nexent/blob/develop/README.md) · [LICENSE](https://github.com/ModelEngine-Group/nexent/blob/develop/LICENSE) · [元数据](https://api.github.com/repos/ModelEngine-Group/nexent) |
| 1624 | [Coze Loop](https://github.com/coze-dev/coze-loop) | 建议审阅 | 2026-09-21T15:32:51Z | [README](https://github.com/coze-dev/coze-loop/blob/main/README.md) · [LICENSE](https://github.com/coze-dev/coze-loop/blob/main/LICENSE) · [元数据](https://api.github.com/repos/coze-dev/coze-loop) |
| 1757 | [Transformer Lab](https://github.com/transformerlab/transformerlab-app) | 建议审阅 | 2026-09-18T21:55:10Z | [README](https://github.com/transformerlab/transformerlab-app/blob/main/README.md) · [LICENSE](https://github.com/transformerlab/transformerlab-app/blob/main/LICENSE) · [元数据](https://api.github.com/repos/transformerlab/transformerlab-app) |
| 1777 | [Argilla](https://github.com/argilla-io/argilla) | 保留待深核 | 2026-09-14T22:23:52Z | [README](https://github.com/argilla-io/argilla/blob/develop/README.md) · [LICENSE](https://github.com/argilla-io/argilla/blob/develop/LICENSE) · [元数据](https://api.github.com/repos/argilla-io/argilla) |
| 1898 | [MonkeyCode](https://github.com/chaitin/MonkeyCode) | 建议审阅 | 2026-09-21T13:57:34Z | [README](https://github.com/chaitin/MonkeyCode/blob/main/README.md) · [LICENSE](https://github.com/chaitin/MonkeyCode/blob/main/LICENSE) · [元数据](https://api.github.com/repos/chaitin/MonkeyCode) |
| 2230 | [Agent Package Manager](https://github.com/microsoft/apm) | 建议审阅 | 2026-09-18T22:58:41Z | [README](https://github.com/microsoft/apm/blob/main/README.md) · [LICENSE](https://github.com/microsoft/apm/blob/main/LICENSE) · [元数据](https://api.github.com/repos/microsoft/apm) |
| 2329 | [GEOFlow](https://github.com/yaojingang/GEOFlow) | 建议审阅 | 2026-09-21T03:56:33Z | [README](https://github.com/yaojingang/GEOFlow/blob/main/README.md) · [LICENSE](https://github.com/yaojingang/GEOFlow/blob/main/LICENSE) · [元数据](https://api.github.com/repos/yaojingang/GEOFlow) |
| 2583 | [Laminar](https://github.com/lmnr-ai/lmnr) | 建议审阅 | 2026-09-21T15:48:51Z | [README](https://github.com/lmnr-ai/lmnr/blob/main/README.md) · [LICENSE](https://github.com/lmnr-ai/lmnr/blob/main/LICENSE.md) · [元数据](https://api.github.com/repos/lmnr-ai/lmnr) |
| 2919 | [Omnara](https://github.com/omnara-ai/omnara) | 建议审阅 | 2026-09-21T09:52:10Z | [README](https://github.com/omnara-ai/omnara/blob/main/README.md) · [LICENSE](https://github.com/omnara-ai/omnara/blob/main/LICENSE) · [元数据](https://api.github.com/repos/omnara-ai/omnara) |
| 3256 | [MCPHub](https://github.com/samanhappy/mcphub) | 建议审阅 | 2026-09-21T07:49:39Z | [README](https://github.com/samanhappy/mcphub/blob/main/README.md) · [LICENSE](https://github.com/samanhappy/mcphub/blob/main/LICENSE) · [元数据](https://api.github.com/repos/samanhappy/mcphub) |
| 3657 | [Autensa](https://github.com/crshdn/mission-control) | 保留待深核 | 2026-09-16T14:49:11Z | [README](https://github.com/crshdn/mission-control/blob/main/README.md) · [LICENSE](https://github.com/crshdn/mission-control/blob/main/LICENSE) · [元数据](https://api.github.com/repos/crshdn/mission-control) |
| 4009 | [BuildingAI](https://github.com/BidingCC/BuildingAI) | 保留待深核 | 2026-08-21T04:01:21Z | [README](https://github.com/BidingCC/BuildingAI/blob/master/README.md) · [LICENSE](https://github.com/BidingCC/BuildingAI/blob/master/LICENSE) · [元数据](https://api.github.com/repos/BidingCC/BuildingAI) |
| 4436 | [nao](https://github.com/getnao/nao) | 商业或许可边界待核 | 2026-09-21T15:42:26Z | [README](https://github.com/getnao/nao/blob/main/README.md) · [LICENSE](https://github.com/getnao/nao/blob/main/LICENSE) · [元数据](https://api.github.com/repos/getnao/nao) |
| 4814 | [agentchattr](https://github.com/bcurts/agentchattr) | 建议审阅 | 2026-09-10T13:27:19Z | [README](https://github.com/bcurts/agentchattr/blob/main/README.md) · [LICENSE](https://github.com/bcurts/agentchattr/blob/main/LICENSE) · [元数据](https://api.github.com/repos/bcurts/agentchattr) |
| 5121 | [Azure Chat](https://github.com/microsoft/azurechat) | 工程组件另列 | 2026-09-11T05:17:22Z | [README](https://github.com/microsoft/azurechat/blob/main/README.md) · [LICENSE](https://github.com/microsoft/azurechat/blob/main/LICENSE) · [元数据](https://api.github.com/repos/microsoft/azurechat) |
| 5142 | [AIL Framework](https://github.com/CIRCL/AIL-framework) | 建议审阅 | 2026-09-21T15:34:01Z | [README](https://github.com/CIRCL/AIL-framework/blob/master/README.md) · [LICENSE](https://github.com/CIRCL/AIL-framework/blob/master/LICENSE) · [元数据](https://api.github.com/repos/CIRCL/AIL-framework) |
| 5141 | [OpenTag (Amplift)](https://github.com/amplifthq/opentag) | 建议审阅 | 2026-09-14T01:35:53Z | [README](https://github.com/amplifthq/opentag/blob/main/README.md) · [LICENSE](https://github.com/amplifthq/opentag/blob/main/LICENSE) · [元数据](https://api.github.com/repos/amplifthq/opentag) |
| 5256 | [Keeper.sh](https://github.com/ridafkih/keeper.sh) | 工程组件另列 | 2026-09-21T01:20:12Z | [README](https://github.com/ridafkih/keeper.sh/blob/main/README.md) · [LICENSE](https://github.com/ridafkih/keeper.sh/blob/main/LICENSE) · [元数据](https://api.github.com/repos/ridafkih/keeper.sh) |
| 5480 | [MCPJungle](https://github.com/mcpjungle/MCPJungle) | 建议审阅 | 2026-08-02T15:15:01Z | [README](https://github.com/mcpjungle/MCPJungle/blob/main/README.md) · [LICENSE](https://github.com/mcpjungle/MCPJungle/blob/main/LICENSE) · [元数据](https://api.github.com/repos/mcpjungle/MCPJungle) |
| 5676 | [Taranis AI](https://github.com/taranis-ai/taranis-ai) | 建议审阅 | 2026-09-21T11:48:45Z | [README](https://github.com/taranis-ai/taranis-ai/blob/master/README.md) · [LICENSE](https://github.com/taranis-ai/taranis-ai/blob/master/LICENSE.md) · [元数据](https://api.github.com/repos/taranis-ai/taranis-ai) |
| 5815 | [Keinsaas Navigator](https://github.com/keinsaasforever/better-chatbot) | 建议审阅 | 2026-08-19T16:53:36Z | [README](https://github.com/keinsaasforever/better-chatbot/blob/main/README.md) · [LICENSE](https://github.com/keinsaasforever/better-chatbot/blob/main/LICENSE) · [元数据](https://api.github.com/repos/keinsaasforever/better-chatbot) |
| 6337 | [Optio](https://github.com/jonwiggins/optio) | 建议审阅 | 2026-09-21T00:41:45Z | [README](https://github.com/jonwiggins/optio/blob/main/README.md) · [LICENSE](https://github.com/jonwiggins/optio/blob/main/LICENSE) · [元数据](https://api.github.com/repos/jonwiggins/optio) |
| 6453 | [Obot](https://github.com/obot-platform/obot) | 建议审阅 | 2026-09-21T15:19:36Z | [README](https://github.com/obot-platform/obot/blob/main/README.md) · [LICENSE](https://github.com/obot-platform/obot/blob/main/LICENSE) · [元数据](https://api.github.com/repos/obot-platform/obot) |
| 6527 | [Knowledge Agent Template](https://github.com/vercel-labs/knowledge-agent-template) | 工程组件另列 | 2026-09-15T08:10:36Z | [README](https://github.com/vercel-labs/knowledge-agent-template/blob/main/README.md) · [LICENSE](https://github.com/vercel-labs/knowledge-agent-template/blob/main/LICENSE) · [元数据](https://api.github.com/repos/vercel-labs/knowledge-agent-template) |

## 其余候选逐项记录

“另列”及“待深核”是本轮分流结论，不是永久排除，也不表示已经通过收录核验。全量 CSV 包含英文介绍、标签、源文位置与 SHA-256。

| 批次 | ID | 项目 | 结论 | 团队价值依据 | 限制与下一步 |
| --- | ---: | --- | --- | --- | --- |
| 004 | 6366 | [Mosaico](https://github.com/mosaico-labs/mosaico) | 工程组件另列 | 机器人团队可共享结构化数据与血缘。 | 零拷贝/查询性能未测，不是代理管理平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 6371 | [RepoAgent](https://github.com/OpenBMB/RepoAgent) | 团队直接性不足 | 研发团队可用Git变更和precommit维护共享代码说明。 | 模型说明需复核，不保证无漂移。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 6445 | [Ralph Playbook](https://github.com/ClaytonFarr/ralph-playbook) | 方法技能另列 | 团队可共享规格、计划和验证习惯。 | 方法指南非运行安全层，示例跳过权限需沙箱。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 6472 | [7/24 Office](https://github.com/wangziqi06/724-office) | 团队直接性不足 | 团队可通过企微群共享工作入口和定时任务。 | Python/Node两代能力不同，生产24/7为自述；后继偏个人。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 6470 | [Design Judge Skills](https://github.com/SeanJ1ang/design-judge-skills) | 方法技能另列 | 设计团队可共享案例核验、申报准备和终检。 | 部分Beta，命中率自测不保证获奖，须核实官方规则。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 6491 | [ClawKeeper](https://github.com/SafeAI-Lab-X/ClawKeeper) | 工程组件另列 | 平台团队可复用执行前判断与审计接口。 | 可选外部Watcher增加模型依赖，拦截覆盖未测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 6490 | [Vibe Security Skill](https://github.com/raroque/vibe-security-skill) | 方法技能另列 | 团队可共享按技术栈加载的安全检查。 | 提示审阅非无漏洞保证，未扫描。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 6563 | [ByteChef](https://github.com/bytechefhq/bytechef) | 商业或许可边界待核 | 团队可复用业务集成、审批和可恢复任务。 | 核心Apache，API发布/Git/关联审计属EE；skills/evals、SSO/高级RBAC仍开发中。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 6574 | [Google Sheets MCP](https://github.com/xing5/mcp-google-sheets) | 工程组件另列 | 团队可让助手处理共享表格与数据。 | 需Google授权；文中宽权限示例不代表最小权限，未改表或发送通知。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 12 | [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 商业或许可边界待核 | 把重复业务步骤转成可维护流程，由团队监控执行与成本并复用智能体模板。 | 团队用途是流程维护与运行，不宣称已核验细粒度多人权限；平台目录 PolyForm Shield，classic MIT。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 13 | [Anthropic Skills](https://github.com/anthropics/skills) | 商业或许可边界待核 | 把品牌规范、组织工作流程和文档操作封装成团队可复用技能；与已有 Agent Skills 标准是实现和规范的区别。 | 示范用途，不保证等同 Claude 产品行为；文档类技能是 source-available，不能统一标为 Apache 开源。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 31 | [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) | 方法技能另列 | 用于团队共同入门和内部训练；课程涵盖应用安全、交付生命周期及 Python/TypeScript 示例。 | 学习资源而非产品；不同章节有外部模型或云服务依赖，未逐章执行。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 43 | [Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills) | 方法技能另列 | 可把规格、任务拆分和质量门槛设为项目共用规范，改善 AI 代码进入团队审查与发布的过程。 | 技能模板，不是强制执行的独立 CI 平台；未验证作者生产级宣传。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 59 | [Crawl4AI](https://github.com/unclecode/crawl4ai) | 工程组件另列 | 为团队的知识库和 RAG 应用统一采集网页并输出结构化 Markdown，可自建接入流水线。 | 工程组件而非多人协作界面；Cloud API 为 closed beta，不能混同自建功能；未实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 62 | [Understand Anything](https://github.com/Egonex-AI/Understand-Anything) | 团队直接性不足 | 生成架构导览与 onboarding 指南；把 JSON 图提交 Git 后，同事无需模型或 API key 即可查看。 | 生成需模型；离线共享的是结果图，不是多人共同编辑平台。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 72 | [Hello-Agents](https://github.com/datawhalechina/hello-agents) | 方法技能另列 | 可供工程团队统一学习智能体架构、记忆与评估实践，再开展共同原型。 | 教程不是团队平台；文档为 CC BY-NC-SA 4.0，不能描述为无条件商业复用。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 73 | [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) | 方法技能另列 | 帮助团队建立提示词术语和模板评估方法，可用于内部培训与工作规范参考。 | 指南与 DAIR 付费课程分开；未逐篇验证技术内容，不能视为效果保证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 80 | [AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners) | 方法技能另列 | 供团队系统学习智能体工程，覆盖可信执行、生产部署、上下文和记忆。 | 主要示例依赖 Microsoft Agent Framework 和 Foundry，通常需要 Azure 账号；未实跑。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 82 | [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) | 方法技能另列 | 人工审查者和 AI 读取同一套规则、验证步骤及修复指引，在 PR 和上线前检查中统一标准。 | 检查规则不是自动证明合规或正确；MCP 托管入口与静态规则分开。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 116 | [Context7](https://github.com/upstash/context7) | 工程组件另列 | 让团队不同编码工具使用一致的库版本文档，减少过时 API 导致的返工与审查成本。 | 文档查询组件，不是共享团队知识库；本地 MCP 客户端不等于整个服务可自建。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 124 | [MemPalace](https://github.com/MemPalace/mempalace) | 保留待深核 | 可部署 shared-brain hub 让多个客户端接入，同步保留项目原文并按主题检索，减少重新传递上下文。 | 未验证多人访问控制粒度；本地默认与远程嵌入选择分开，不能承诺所有配置不出网。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 136 | [Goose](https://github.com/aaif-goose/goose) | 团队直接性不足 | 团队可制作预配置模型供应商、扩展和品牌的发行版，统一员工 AI 工作环境。 | 团队联系在预配置发行与扩展复用，不宣称多人共享会话或组织权限；原 block/goose 名称需别名去重。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 141 | [LlamaIndex OSS](https://github.com/run-llama/llama_index) | 工程组件另列 | 工程团队复用数据、模型与向量库集成来构建内部资料问答和文档应用。 | 维护方重心已转向 LlamaParse 等产品；OSS 框架仍可用，不混同企业解析平台能力。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 146 | [Marketing Skills](https://github.com/coreyhaines31/marketingskills) | 方法技能另列 | 通过共用 product-marketing 背景，让营销、销售支持、内容和增长工作沿用一致产品定位。 | 技能库，不是多人营销管理平台；第三方集成和代理服务单独提供，未实测产出质量。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 160 | [AI Agents in Depth](https://github.com/bojieli/ai-agent-book) | 方法技能另列 | 可用于工程团队建立一致的智能体设计语言和小型评估集，围绕失败案例共同改进。 | 只核验课程范围，未读完整书稿或运行所有实验；多智能体章节不是多人协作平台。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 173 | [Agentic Awesome Skills](https://github.com/sickn33/agentic-awesome-skills) | 方法技能另列 | 把项目选用的技能集合固化成 manifest 与证据，团队可以审查、比较和复用一致配置。 | AAS Core 为预览；apply/recovery 实验性，main 未发布能力不能等同已发布包。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 180 | [Kong AI Gateway](https://github.com/Kong/kong) | 商业或许可边界待核 | 平台团队为内部服务和智能体统一 AI 入口与访问策略，减少各项目重复接入和运维。 | 开源 Gateway、AI 插件、商业增强与 Konnect 边界需按功能确认，不宣称全部社区版可用。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 185 | [Gradio](https://github.com/gradio-app/gradio) | 保留待深核 | 将模型或 API 包装成同事可直接体验的网页，用于跨职能评审和收集反馈。 | 分享 demo 不等于企业组织权限，生产部署需另行设计访问控制。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 203 | [Novu](https://github.com/novuhq/novu) | 商业或许可边界待核 | 工程团队把智能体接入 Slack、Teams、邮件等既有沟通渠道，复用消息与会话基础设施。 | MIT 核心与 enterprise 商业目录分开；Novu Connect 演示不等于全部开源能力。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 206 | [PostHog](https://github.com/PostHog/posthog) | 商业或许可边界待核 | 产品与研发共用行为、错误和模型调用数据，AI 将信号整理成报告或 PR，由团队评审处理。 | MIT 核心与 ee 目录分开；具体 AI 功能的托管/自建边界未逐项核验。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 208 | [LightRAG](https://github.com/HKUDS/LightRAG) | 工程组件另列 | AI 应用团队复用知识接入与检索管线，并通过 RAGAS 和 Langfuse 共同评估、排查回答质量。 | 框架不是多人知识门户；不宣称自带组织权限；RAG-Anything 已有合并说明，后续避免重复。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 232 | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 工程组件另列 | 开发与 QA 团队可复用同一浏览器工具接口，进行探索测试、复现问题和验证 AI 生成页面。 | 不是多人协作平台；shared browser context 不等于用户隔离，CLI+Skills 是独立入口。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 238 | [One API](https://github.com/songquanpeng/one-api) | 保留待深核 | 为团队分发有额度、模型和 IP 限制的令牌，集中管理渠道及用量，统一不同模型接口。 | 最近推送 2026-01-09，超过八个月；当前维护与新模型兼容性待确认。与 New API 属上游/衍生关系，可作为替代方案比较。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 243 | [Claude Code Plugins Directory](https://github.com/anthropics/claude-plugins-official) | 方法技能另列 | 团队可从明确区分官方与第三方的入口选择插件，并参考标准结构打包统一开发能力。 | 官方目录不保证所有插件由 Anthropic 开发或审计；每个插件许可和工具范围分别核验。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 249 | [PageIndex](https://github.com/VectifyAI/PageIndex) | 工程组件另列 | 工程团队可为长报告建立可追溯检索层，供文档分析流程复用并核对原文位置。 | 检索组件，不是多人门户；本地模式使用自带模型 key，不保证推理完全离线。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 281 | [Hugging Face Agents Course](https://github.com/huggingface/agents-course) | 方法技能另列 | 团队可共同学习框架设计并完成带 benchmark 的实践，把观测与评估纳入开发流程。 | 课程不是平台，未执行全部练习；与其他入门课程属于可选替代。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 291 | [Code Review Graph](https://github.com/tirth8205/code-review-graph) | 团队直接性不足 | 为审查者提供变更影响到的调用方、依赖及测试，辅助团队评估 PR 风险。 | 解析失败会返回 partial，不能声称完整分析全库；与通用代码图不同，重点是审查。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 294 | [STORM / Co-STORM](https://github.com/stanford-oval/storm) | 团队直接性不足 | 内容和研究团队可据检索资料整理提纲与知识图，再由人审阅和补充，形成写作前期资料。 | research preview；官方明确不能直接产出可发表文章，协作主要指人机而非多人工作区。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 295 | [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) | 方法技能另列 | 团队复用性能、界面和写作规范，在 AI 编码与审查中使用相同检查标准。 | 技能集合，不是多人平台；Vercel 项目诊断依赖相应账号和指标。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 304 | [OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 团队直接性不足 | 团队复用文档模板并填充数据，把文档质量检查接入 CI/CD 后交付同事审阅。 | 不等于多人实时共同编辑，也不采纳全格式完美还原宣传；未验证渲染保真。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 308 | [Applied ML](https://github.com/eugeneyan/applied-ml) | 方法技能另列 | 团队借鉴真实组织的上线、数据、内部工具与分工经验，用于设计评审和内部学习。 | 案例索引，年份跨度大，未逐篇验证外链及当前适用性。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 309 | [Composio](https://github.com/ComposioHQ/composio) | 商业或许可边界待核 | 工程团队统一接入员工使用的 SaaS 工具，并为不同用户建立独立认证会话，减少重复集成。 | 仓库是 SDK monorepo；MIT 不代表整个 Composio 服务和工具后端均开源自建。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 317 | [FastGPT](https://github.com/labring/FastGPT) | 商业或许可边界待核 | 团队可复用知识处理和工作流，构建内部问答与业务 AI 应用，减少各部门重复开发。 | FastGPT 自定义许可，社区版与商业版分开；未证明全部高级团队功能都在社区版。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 322 | [Deep Agents](https://github.com/langchain-ai/deepagents) | 工程组件另列 | 工程团队复用执行框架，把工具调用纳入人工批准、修改或拒绝流程，并延续任务状态。 | 不提供真人组织工作区；LangSmith 追踪部署为独立集成，不算框架自带全量托管能力。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 332 | [NetBird Agent Network](https://github.com/netbirdio/netbird) | 商业或许可边界待核 | 平台团队通过集中访问策略控制智能体连接内部资源，减少到处散发服务密钥。 | Agent Network beta，不能把成熟 VPN 的状态套到 AI 子项目；各目录许可不同。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 333 | [Nx AI Tooling](https://github.com/nrwl/nx) | 商业或许可边界待核 | 团队在同一 monorepo/CI 工作流中分析失败、提出修复并验证，减少本地与 CI 背景切换。 | Nx 本地构建工具和云 CI 服务边界需分别确认，不将全部自修复能力视为免费本地功能。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 341 | [Page Agent](https://github.com/alibaba/page-agent) | 团队直接性不足 | 工程团队可给现有内部 Web 系统增加自然语言操作入口，减少员工跨菜单执行流程。 | 不提供组织权限系统；网页原有权限和操作确认仍需集成，MCP beta。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 352 | [Repomix](https://github.com/yamadashy/repomix) | 团队直接性不足 | 团队将选定代码背景打包为统一材料，减少审查、调研与不同 AI 工具之间重复搬运。 | 打包不是语义正确性保证；配置可含可执行处理器，未运行第三方仓库配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 368 | [FastMCP](https://github.com/PrefectHQ/fastmcp) | 商业或许可边界待核 | 工程团队将内部函数和数据包装成一致 MCP 接口，让不同 AI 客户端复用工具。 | 私有 registry、SSO、工具 RBAC、组织审计属于 Horizon，不属于 FastMCP 核心框架。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 375 | [Beads](https://github.com/gastownhall/beads) | 团队直接性不足 | 将任务、依赖和历史存到可分支同步的数据结构，团队和智能体可接手长任务并追踪状态。 | CLI 任务系统，不是完整多人权限后台；不采纳零冲突绝对保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 376 | [Symphony](https://github.com/openai/symphony) | 团队直接性不足 | 从 Linear 等工作板接任务，产出 CI、PR 反馈和演示等证据，工程师管理工作并决定是否接受。 | 明确低调工程预览，仅建议可信环境试验；演示描述不等于生产 SLA，依赖良好工程基础。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 381 | [Planning with Files](https://github.com/OthmanAdi/planning-with-files) | 方法技能另列 | 把任务状态和发现保存为仓库可见文档，便于同事或后续智能体恢复上下文、检查计划变化。 | 不是多人项目管理平台；会话记录回放需要显式模式，不将自动恢复理解成读取所有历史。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 384 | [Vercel AI SDK](https://github.com/vercel/ai) | 工程组件另列 | 前后端团队复用模型调用和 UI 约定，统一构建聊天、结构化生成与智能体应用。 | SDK 与 AI Gateway/模型供应商服务独立；默认模型字符串走网关，也可使用供应商包直接连接。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 389 | [PM Skills Marketplace](https://github.com/phuryn/pm-skills) | 方法技能另列 | 产品、设计与研发复用需求、OKR、发布计划和交付检查文档，保留 AI 开发中的意图与验收依据。 | 模板与方法，不保证业务决策质量，也不是多人项目管理后台。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 433 | [Hindsight](https://github.com/vectorize-io/hindsight) | 商业或许可边界待核 | 工程团队为长期智能体建立可复用经验层，改进跨任务上下文连续性。 | 真人团队协作后台属于 Cloud 描述，不能混入 MIT 核心；不采纳最准确基准宣传。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 438 | [PandasAI](https://github.com/sinaptik-ai/pandas-ai) | 商业或许可边界待核 | 数据团队可给非技术同事提供自然语言查询与图表入口，复用现有分析数据。 | 库本身不是多人 BI 平台；ee 与托管企业服务独立；生成查询需验证。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 448 | [Go Micro](https://github.com/micro/go-micro) | 工程组件另列 | Go 工程团队将现有服务端点转为智能体工具，并复用服务发现与持久流程，而非为每个应用重写接入层。 | 不按旧印象仅归为微服务；也不宣称框架自带多人协作后台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 449 | [Skyvern](https://github.com/Skyvern-AI/skyvern) | 商业或许可边界待核 | 技术和业务人员把重复网页操作组织成可维护流程，供内部运营复用。 | 云端 anti-bot 能力不在 AGPL 核心；不保证任意网站始终可用或不受页面变化影响。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 450 | [n8n-MCP](https://github.com/czlonkowski/n8n-mcp) | 工程组件另列 | 团队让 AI 根据真实节点定义构建和检查自动化，减少凭空生成错误配置，复用已有工作流。 | 第三方项目，不等同 n8n 官方 MCP；权限受实例 API 限制，覆盖率不是正确性保证。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 471 | [OpenObserve](https://github.com/openobserve/openobserve) | 商业或许可边界待核 | 工程团队在同一观测平台关联应用与 LLM 数据，排查执行故障并维护告警。 | SSO、高级 RBAC、审计等属于 Enterprise；不引用成本倍率或合规保证。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 488 | [Google ADK](https://github.com/google/adk-python) | 工程组件另列 | 团队用代码维护、测试智能体流程，把人工确认接入工具执行，复用模型与 MCP 集成。 | SDK 不是多人工作区；云托管与模型服务独立，语言实现后续按同产品去重。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 497 | [Wasmer](https://github.com/wasmerio/wasmer) | 工程组件另列 | AI 平台团队为生成代码和工具执行提供可配置边界，复用统一 runtime 接入内部应用。 | 底层执行组件，不是完整智能体权限平台；未验证其安全保证或性能。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 501 | [Awesome Production Machine Learning](https://github.com/EthicalML/awesome-production-machine-learning) | 方法技能另列 | 工程团队选型时按交付问题查找工具，建立模型、数据和实验管理链路。 | 资源索引，不代表所有工具已验证；与案例类 Applied ML 用途不同。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 503 | [Cube Core](https://github.com/cube-js/cube) | 商业或许可边界待核 | 数据团队一次定义指标、维度和访问规则，让 BI 与智能体使用一致业务口径。 | Core headless；Analytics Chat、工作簿和商业 RBAC 等不能归为核心自带 UI。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 509 | [Kortix](https://github.com/kortix-ai/suna) | 商业或许可边界待核 | 公司共用 Git 里的技能、连接器和知识，智能体在隔离分支工作，通过人工批准的变更请求交付。 | 原 Suna；Teams 需开关，邮件/语音实验性；自建与商业组织能力边界需按版本核验。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 528 | [OpenAI Evals](https://github.com/openai/evals) | 方法技能另列 | 团队用私有任务数据建立统一验收集，比较模型版本变化对自身工作流的影响。 | 开源 framework 与 Dashboard Evals 服务不是同一产品表面；私有 eval 不等于模型调用完全本地。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 530 | [Taipy](https://github.com/Avaiga/taipy) | 保留待深核 | 数据科学与业务团队可通过应用比较方案、运行管线并按用户角色使用分析结果。 | 库与 Designer/Studio 等生态组件分开，未逐功能核验套餐。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 561 | [Parlant](https://github.com/emcie-co/parlant) | 保留待深核 | 客服与工程团队把品牌语气、业务规则和边界显式配置，持续审查客户交互行为。 | 不承诺自动合规或完全可靠；须将实际业务规则实现并验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 573 | [Agent Skills for Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 方法技能另列 | 团队用共同方法组织工具输出、持久资料与评估边界，减少不同智能体工作方式之间的上下文损耗。 | 方法资源，不背书效果和学术地位；未执行技能内指令。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 578 | [SkillSpector](https://github.com/NVIDIA/SkillSpector) | 工程组件另列 | 团队在分发和安装技能前统一检查，借助静态分析与可选语义评估建立技能供应链审核入口。 | 扫描不是安全认证，不能据通过结果保证无风险；未运行扫描器。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 595 | [AI Engineering Resources (Chip Huyen)](https://github.com/chiphuyen/aie-book) | 方法技能另列 | 工程与产品共同参考评估、应用架构和开发流程，建立跨职能 AI 交付语言。 | 仓库为配套资源，不含可任意复制的完整商业书稿；未审阅全部书内容。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 603 | [MCP for Beginners](https://github.com/microsoft/mcp-for-beginners) | 方法技能另列 | 团队学习相同的协议与鉴权实践，减少内部工具接入 AI 时的接口和安全理解偏差。 | 教程不是托管工具平台；未逐课运行示例。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 606 | [Apache APISIX](https://github.com/apache/apisix) | 工程组件另列 | 平台团队统一模型鉴权、路由和 token 限流，将本地 MCP 服务转为可集中使用的 HTTP 服务。 | 需要配置具体插件与上游；不把流量控制视为模型输出安全保证。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 627 | [MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox) | 工程组件另列 | 团队集中定义数据库工具与访问范围，复用连接池、身份集成和追踪，避免每个智能体重复接库。 | 原 genai-toolbox；通用 SQL 工具需要适当授权，自定义查询才形成具体边界。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 634 | [aisuite](https://github.com/andrewyng/aisuite) | 工程组件另列 | 团队用统一 API 与工具批准约定开发应用，便于切换模型并复用集成代码。 | OpenWorker 已迁往独立仓库，桌面同事功能不属于此 SDK。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 637 | [RagaAI Catalyst](https://github.com/raga-ai-hub/RagaAI-Catalyst) | 商业或许可边界待核 | 工程与评估人员围绕同一项目管理测试数据和运行证据，比较改动并维护 guardrails。 | SDK 操作需要 Catalyst 认证，不能将 pip 包等同全量自托管平台。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 651 | [Kubeflow](https://github.com/kubeflow/kubeflow) | 工程组件另列 | 平台团队组合 AI 生命周期组件，统一开发者与管理员使用的运行基础。 | 根仓库是子项目入口与元数据，不含所有平台实现；具体能力按子项目核验。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 653 | [Outlines](https://github.com/dottxt-ai/outlines) | 工程组件另列 | 团队定义统一输出 schema，降低 AI 结果与业务接口之间的解析错误和联调成本。 | 结构有效不代表内容事实正确；商业 .txt API 和企业库独立。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 658 | [Pipecat](https://github.com/pipecat-ai/pipecat) | 工程组件另列 | 工程团队构建客服接待、会议助手等实时业务入口，复用语音识别、模型与传输集成。 | 多智能体总线不是多人协作空间；模型和语音服务独立。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 662 | [Plandex](https://github.com/plandex-ai/plandex) | 团队直接性不足 | 开发者把跨文件改动先留在独立审查区，逐步复核后交给团队代码流程。 | 开发工作流，不宣称组织 RBAC 或多人实时共同编辑。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 663 | [iFixAi](https://github.com/ifixai-ai/iFixAi) | 工程组件另列 | 团队用可重复检查和评分产物评审智能体是否满足业务目标与组织边界，可接 CI。 | 评分不等于完整组织保证，不引用 120 秒即证明可靠等宣传。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 679 | [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp) | 方法技能另列 | 团队共同学习从实验到运行的交付流程，统一模型服务维护基础。 | 学习资源，未实跑所有作业；班次和课程日程未刷新。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 692 | [Skill Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | 方法技能另列 | 团队将文档、仓库与资料一次整理，多格式分发给不同 AI 工具，减少重复配置上下文。 | 转换工具不保证生成知识准确或来源许可允许再分发；未实测所有格式。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 694 | [Midscene](https://github.com/web-infra-dev/midscene) | 团队直接性不足 | 开发和 QA 复用自然语言测试，通过截图、动作和断言报告复核用户界面行为。 | 模型判定有误差，不能替代全部确定性测试；不引用基准成功率作普遍保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 695 | [Easy Dataset](https://github.com/ConardLi/easy-dataset) | 团队直接性不足 | 领域专家与模型团队从共同资料构造问答和评估集，再通过人工盲测比较模型与 RAG 质量。 | 不宣称多人账号管理；模型生成答案需专家审核，不能当金标准。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 697 | [React Doctor](https://github.com/millionco/react-doctor) | 团队直接性不足 | 团队将 AI 生成 React 的状态、性能和可维护性问题纳入统一 PR 检查，只报告新引入问题。 | GitHub 与 GitLab 支持深度不同；扫描规则不能证明无缺陷。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 713 | [Univer](https://github.com/dream-num/univer) | 商业或许可边界待核 | 工程团队把表格、文档与 AI 操作嵌入业务应用，支持人工查看和选择合并智能体修改。 | 实时协作、历史和 worktree 依赖相应 SDK/Pro 能力；Workspace 是独立产品仓库。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 726 | [MCP for Unity](https://github.com/CoplayDev/unity-mcp) | 工程组件另列 | 游戏研发团队可复用编辑器自动化接口，把资产、代码和测试操作串入开发流程。 | Coplay 项目，不是 Unity 官方；需要真实 Unity 环境，不保证一轮生成即可用。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 742 | [Instructor](https://github.com/567-labs/instructor) | 工程组件另列 | 团队定义共用结构化接口，减少数据抽取结果进入业务系统时的格式和类型错误。 | 格式验证不代表内容真实；完整 agent 运行观测来自别的框架。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 754 | [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) | 工程组件另列 | Python/.NET 团队共用编排和检查点约定，把人工反馈与运行观测纳入 AI 应用交付。 | Semantic Kernel 后继；Go 实现另仓库，不重复计作新平台；云服务能力单独配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 756 | [MeterSphere](https://github.com/metersphere/metersphere) | 商业或许可边界待核 | QA 与开发在系统/组织/项目层级共管用例、测试计划和缺陷，将 AI 生成用例接入现有测试流程。 | V1/V2 停维；V3 社区与企业版不同，自定义 GPL 附加限制许可不能简称纯 GPL。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 759 | [Scalene](https://github.com/plasma-umass/scalene) | 团队直接性不足 | 工程团队先依据性能测量定位热点，再审查模型给出的优化建议，用于可复现性能改进。 | 建议需验证，不能把模型输出当性能提升保证；会按配置调用外部供应商。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 765 | [Semantica](https://github.com/semantica-agi/semantica) | 工程组件另列 | 数据与平台团队显式维护业务定义、关系和来源，让智能体上下文可查询、可追溯并供复核。 | 来源记录不是合规认证或因果正确性保证；未独立验证其高风险场景可靠性。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 767 | [Astryx](https://github.com/facebook/astryx) | 方法技能另列 | 设计和研发使用一致组件、主题和文档，让 AI 生成界面沿用团队标准而非重复造轮子。 | beta；组件规范不等于实时协作画布，不背书生产规模宣传。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 771 | [LangChain4j](https://github.com/langchain4j/langchain4j) | 工程组件另列 | Java 团队复用模型与向量库接口，在既有业务栈中统一开发 AI 应用。 | 独立 Java 项目，不误并为 LangChain.js 官方语言端口；不是多人协作产品。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 772 | [Eino](https://github.com/cloudwego/eino) | 工程组件另列 | Go 工程团队用一致组件编排业务 AI，并将人工介入接入可恢复任务。 | 框架本身不提供组织用户管理，云部署另配。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 779 | [InsForge](https://github.com/InsForge/InsForge) | 工程组件另列 | 团队给编码智能体提供统一后端操作与状态查询，减少前后端反复手工配置和排障。 | MCP 支持自建和云，CLI+Skills 标为 cloud only；不能把后端用户认证等同平台团队 RBAC。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 806 | [Infracost](https://github.com/infracost/infracost) | 商业或许可边界待核 | 团队在 AI 修改 IaC 的 PR 阶段看到费用变化，用共同政策审查部署前成本。 | 核心 CLI 已有独立仓库；组织政策仪表盘属于 Cloud，费用是估算不是账单保证。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 821 | [Nango](https://github.com/NangoHQ/nango) | 商业或许可边界待核 | 团队统一处理 SaaS OAuth、连接隔离和重试，让 AI 代表不同用户调用各自授权服务。 | Elastic 许可，免费自建功能受限；完整 Cloud/Enterprise 不等于免费源码功能。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 827 | [assistant-ui](https://github.com/assistant-ui/assistant-ui) | 保留待深核 | 工程团队复用一致 AI 交互组件，将需要人工确认的工具动作清楚呈现在业务界面。 | 前端库不提供组织治理后端，审批安全需后端执行。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 835 | [Kubeshark](https://github.com/kubeshark/kubeshark) | 保留待深核 | SRE 与智能体共用真实网络和 API 证据定位故障，生成可追溯排障上下文。 | 访问网络数据需部署相应权限；不将所有加密流量可见宣传作普遍保证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 841 | [FastAPI-MCP](https://github.com/tadata-org/fastapi_mcp) | 保留待深核 | 团队复用既有业务 API 和鉴权逻辑，让智能体调用内部功能而不维护另一套接口。 | 需正确配置原 FastAPI 依赖；托管 Tadata 服务是独立选项。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 858 | [CocoIndex](https://github.com/cocoindex-io/cocoindex) | 保留待深核 | 团队将代码、会议、Slack 和文档变动持续更新到 AI 上下文，减少重复全量处理与知识过时。 | 更新机制不保证答案正确或源权限自动继承；企业服务单独。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 865 | [LanceDB](https://github.com/lancedb/lancedb) | 工程组件另列 | AI 团队在统一数据层管理不同模态和版本，供模型应用、分析和检索复用。 | 基础设施，不是团队知识门户；Cloud/Enterprise 与本地引擎区别。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 873 | [Weights & Biases Experiments](https://github.com/wandb/wandb) | 商业或许可边界待核 | ML 团队共用实验记录比较模型与参数变化，将数据到生产模型的结果持续追踪。 | MIT SDK 不代表整个平台免费自建；与已收录 Weave 的 LLM 应用观测分开。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 876 | [Prompt flow](https://github.com/microsoft/promptflow) | 商业或许可边界待核 | 团队共同维护提示词与代码流程，把质量评估放进 CI 后再部署，比较改动效果。 | 正式多人云协作来自 Azure AI 版本；本地 MIT 工具不等同云工作区。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 878 | [GitHub Copilot CLI](https://github.com/github/copilot-cli) | 商业或许可边界待核 | 开发者在团队 GitHub 工作流中处理任务和代码上下文，并受组织 Copilot 启用策略控制。 | 产品仓库不据此认定源码开源；需要相应 Copilot 访问，默认审批描述不替代具体模式配置。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 880 | [Tambo](https://github.com/tambo-ai/tambo) | 团队直接性不足 | 前后端团队将已有业务组件暴露给 AI，用户在熟悉界面完成任务而非复制聊天文本。 | 应用开发工具，不是多人协作平台；仓库不同 workspace 许可分别记录。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 882 | [OpenSRE](https://github.com/Tracer-Cloud/opensre) | 团队直接性不足 | SRE 团队接入已有监控和故障工具，在内部运行排障流程并保留可审查上下文。 | public alpha，Teams/Confluence 等仍路线图，不当成熟生产平台保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 894 | [OpenHive](https://github.com/aden-hive/hive) | 团队直接性不足 | 工程团队把长期业务任务置于共用状态和成本控制之下，监督执行并恢复中断工作。 | colony 指智能体不是人员组织，JS/TS SDK 尚路线图；不采纳零配置可靠运行承诺。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 903 | [Spring AI Alibaba](https://github.com/alibaba/spring-ai-alibaba) | 保留待深核 | Java 团队在现有 Spring 栈中构建长任务，接入人工反馈、可视化评估和 MCP 管理。 | Admin、框架和 runtime 是不同组成，不把多智能体编排等同真人组织协作。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 915 | [Open SWE](https://github.com/langchain-ai/open-swe) | 商业或许可边界待核 | 团队从 GitHub、Slack、Linear 或看板派任务，持续复用同一任务线程、CI 结果与评审反馈。 | 生产自建依赖 LangGraph Agent Server 许可 key，不能因应用 MIT 就宣称整栈无商业条件；开发中 API 会变化。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 923 | [Comp AI CRM](https://github.com/trycompai/crm) | 团队直接性不足 | 销售团队维护同一客户事实库，AI 自动研究和安排跟进，对弱证据更新保留人工处理。 | 明确单租户、没有组织实体，不宣传多组织权限；不背书绝不猜测客户事实保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 925 | [mcp-use](https://github.com/mcp-use/mcp-use) | 工程组件另列 | 工程团队共用类型、检查器和连接规范，将内部工具交付给多种 AI 客户端。 | 开发框架不是组织级工具治理 SaaS；v1/v2 配置需区分。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 969 | [Cookiecutter Data Science](https://github.com/drivendataorg/cookiecutter-data-science) | 方法技能另列 | 团队使用共同数据、代码和产物目录，降低新人接手及跨项目复用成本。 | 项目模板而非 AI 功能产品；v1/v2 工具调用不同。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 997 | [AWS MCP Servers](https://github.com/awslabs/mcp) | 工程组件另列 | 云平台团队统一为 AI 暴露运维与开发工具，复用服务配置并纳入既有 IAM 边界。 | 推荐生产路径正转向 Agent Toolkit for AWS；后继独有身份审计能力不归旧仓库，逐服务支持不同。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1019 | [Spring AI](https://github.com/spring-projects/spring-ai) | 工程组件另列 | Java 团队沿用模块化和强类型接口，把 AI 集成到现有业务系统，减少独立技术栈维护。 | 与 Spring AI Alibaba 是相关但不同层；Boot 版本依赖不同，不泛化互换。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1020 | [Databend](https://github.com/databendlabs/databend) | 商业或许可边界待核 | 数据与平台团队在共同数据引擎上向智能体提供查询、受控执行和快照实验，减少对生产数据的直接操作。 | Apache 与 Elastic 双重代码边界需按模块确认，不宣称全部开源免费或绝对安全。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1036 | [RisingWave](https://github.com/risingwavelabs/risingwave) | 工程组件另列 | 数据团队统一接入数据库和事件变更，为 AI 应用提供持续更新的上下文与查询结果。 | 数据流基础设施，不提供完整业务 agent；不采用固定延迟保证。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1038 | [garak](https://github.com/NVIDIA/garak) | 工程组件另列 | 安全与评估团队用可重复探针检查泄漏、注入等问题，将失败证据交给开发修复。 | 扫描无法证明无漏洞，不运行任何攻击或外部目标测试。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1047 | [PaperQA2](https://github.com/Future-House/paper-qa) | 团队直接性不足 | 研究团队对共同文献集提出问题并追踪原文引用，作为文献综述与事实复核的输入。 | 引用不保证推断正确；获取论文的许可与 API 资源可能另需权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1050 | [BAML](https://github.com/BoundaryML/baml) | 商业或许可边界待核 | 工程团队以共用类型、错误和测试约定开发 AI 程序，通过多语言接口接入现有应用。 | 不依据旧印象仅描述提示词 DSL；编译类型约束不保证业务正确。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1066 | [KAG](https://github.com/OpenSPG/KAG) | 工程组件另列 | 领域专家与工程师把规则和业务知识显式建模，供团队 AI 问答复用并追溯原文。 | 推理框架不是多人知识管理 UI，不采纳优于 SOTA 的宣传。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1071 | [Astron Agent](https://github.com/iflytek/astron-agent) | 保留待深核 | 业务与研发在同一平台编排跨系统工作流，复用模型和工具，把 AI 分析接到实际操作。 | 不采纳高可用或稳定性绝对保证；外部模型与平台工具需另配授权。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1107 | [Rig](https://github.com/0xPlaygrounds/rig) | 工程组件另列 | Rust 团队复用模型与检索接口，将智能体运行纳入现有 OpenTelemetry 观测。 | 官方提示后续有破坏性变更；不是多人协作平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1130 | [FlowGram](https://github.com/bytedance/flowgram.ai) | 工程组件另列 | 研发团队复用画布、节点表单和变量机制，构建内部流程平台。 | 开发框架，不是开箱即用协作平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1131 | [OGX](https://github.com/ogx-ai/ogx) | 工程组件另列 | 平台团队统一模型、检索及技能接口，供多个应用复用。 | 原 Llama Stack；部分接口 alpha，不把兼容宣传当所有 API 等价。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1135 | [GitMCP](https://github.com/idosal/git-mcp) | 团队直接性不足 | 团队让编码工具读取同一项目文档与源码，减少背景搬运。 | 远程文档服务不保证消除幻觉；私有仓库边界未核验。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1137 | [Artemis](https://github.com/google/artemis) | 团队直接性不足 | QA 与开发共用真机测试、截图和 Logcat 证据复现问题。 | 不采纳基准成功率保证；需要设备与模型配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1145 | [Flue](https://github.com/withastro/flue) | 工程组件另列 | 团队把长期 AI 任务接到业务事件并保留恢复状态和运行记录。 | 框架而非多人工作区；沙箱和渠道需集成。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1152 | [Monty](https://github.com/pydantic/monty) | 工程组件另列 | 平台团队用统一函数和挂载边界运行 AI 代码，控制时间、内存与宿主访问。 | 不是完整 Python 或多人平台；Full Monty 商业服务独立。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1159 | [DataFlow](https://github.com/OpenDCAI/DataFlow) | 保留待深核 | 数据团队在 Python/Git 中复用清洗与生成流程，保留管线来源和变更。 | WebUI/MCP 在独立项目；生成数据须审核。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1164 | [Claude Agent SDK (Python)](https://github.com/anthropics/claude-agent-sdk-python) | 商业或许可边界待核 | 工程团队在业务应用中统一配置代理工具与批准策略，复用执行能力。 | 商业服务条款适用；allowlist 自动批准不等于移除未列工具。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1174 | [Sandcastle](https://github.com/mattpocock/sandcastle) | 团队直接性不足 | 团队可建立统一的隔离执行和审查管线，把 agent 修改交回 Git。 | AFK 默认可能绕过宿主审批，需明确配置；不保证合并安全。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1185 | [R2R](https://github.com/SciPhi-AI/R2R) | 保留待深核 | 工程团队复用统一文档接入与检索后端，支撑内部知识应用。 | 已展开根 README 链接；不宣称多人权限已验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1203 | [Apify MCP Server](https://github.com/apify/apify-mcp-server) | 工程组件另列 | 工程和研究团队复用采集工具接入 AI 工作流，减少逐网站集成。 | 托管与本地 stdio 功能不同；Actors 和费用单独，不保证任意网站可抓取。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1215 | [Azure RAG Chat Sample](https://github.com/Azure-Samples/azure-search-openai-demo) | 保留待深核 | 团队可参考员工福利与内部政策问答案例构建组织知识助手。 | Azure 服务依赖和成本另计；示例不是完整企业产品。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1226 | [Steel Browser](https://github.com/steel-dev/steel-browser) | 工程组件另列 | 平台团队统一供应浏览器环境，让 AI 和 Selenium/Playwright 流程复用。 | 基础设施而非多人工作台；外部网站限制仍适用。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1241 | [kubectl-ai (Google Cloud)](https://github.com/GoogleCloudPlatform/kubectl-ai) | 团队直接性不足 | 运维团队借助已有 kubectl 配置完成集群诊断和操作，降低命令背景搬运。 | 与 sozercan/kubectl-ai 区分；执行权限来自配置，需核对建议。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1262 | [Guardrails AI](https://github.com/guardrails-ai/guardrails) | 商业或许可边界待核 | 团队将输出格式和风险检查写成可复用规则，统一应用质量边界。 | 托管远程推理已宣布停用；验证器迁移 PyPI，不能照旧部署说明推荐。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1269 | [Strands Agents](https://github.com/strands-agents/harness-sdk) | 保留待深核 | Python/TS 团队复用运行和监控约定构建应用。 | team 目录是项目治理文档，不是真人协作功能；语言包合并计一项。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1280 | [LLM Zoomcamp](https://github.com/DataTalksClub/llm-zoomcamp) | 方法技能另列 | 为团队建立 RAG、评估和监控的共同知识基础。 | 课程资源，不是部署平台。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 1282 | [Feast](https://github.com/feast-dev/feast) | 工程组件另列 | ML 平台团队复用特征定义并统一离线与在线供给。 | 基础设施，需要接入现有数据系统。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1285 | [MCP Registry](https://github.com/modelcontextprotocol/registry) | 工程组件另列 | 帮助团队发现和统一选用 MCP 集成。 | 公共发现目录；README 仍标注预览，不代表企业私有治理平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1288 | [Unstract](https://github.com/Zipstack/unstract) | 商业或许可边界待核 | 业务与数据团队复用文档提取流程并通过 API 或 ETL 交付。 | SSO、企业 RBAC 等属于托管企业方案；核心 AGPL。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1298 | [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) | 工程组件另列 | 团队统一维护 AI 应用的主题、交互路径与业务规则。 | 规则框架，不保证消除所有风险；不同于 Guardrails AI。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1315 | [Vespa](https://github.com/vespa-engine/vespa) | 工程组件另列 | 搜索与 ML 团队共用向量、文本和模型推理服务。 | 服务基础设施，不是终端团队协作应用。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1330 | [Talk to Figma MCP](https://github.com/grab/cursor-talk-to-figma-mcp) | 团队直接性不足 | 连接设计与研发交付，复用设计文件并自动修改内容。 | 需要 Figma 插件及 WebSocket；不是独立协作权限系统。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1351 | [Models.dev](https://github.com/anomalyco/models.dev) | 工程组件另列 | 团队统一模型元数据来源，用于接入、选型和能力过滤。 | 社区数据可能滞后，报价和能力仍需供应商确认。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1358 | [GPT-Load](https://github.com/tbphp/gpt-load) | 工程组件另列 | 平台团队集中管理模型通道、故障切换、日志与使用策略。 | 2.0 不能原地导入或迁移 1.x 数据；上游账号使用条件另计。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1379 | [Superagent SDK](https://github.com/superagent-ai/superagent) | 保留待深核 | 工程团队统一接入提示注入检测和敏感信息处理。 | 红队场景标为 Coming soon；不是旧版通用智能体平台。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1382 | [Repowise](https://github.com/repowise-dev/repowise) | 商业或许可边界待核 | 开发者、评审者与智能体复用同一代码证据，减少重复调查。 | RBAC、多租户仍计划中；SSO 等在推出，商业能力不归开源核心。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1386 | [GEPA](https://github.com/gepa-ai/gepa) | 工程组件另列 | 团队用共同评估指标迭代提示、配置和智能体架构。 | 优化框架，效果依赖评估设计；示例收益不能普遍化。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1409 | [Julep](https://github.com/julep-ai/julep) | 工程组件另列 | 工程团队用明确流程、重试和执行记录维护可靠智能体服务。 | Julep 3 仍是 release candidate；Temporal 可选，演示使用假推理器。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1411 | [Call Center AI](https://github.com/microsoft/call-center-ai) | 保留待深核 | 客服团队可参考来电处理、真人回退、录音与质量追踪。 | 依赖 Azure 服务；回拨与 IVR 增强列为未来功能。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1415 | [Tech Leads Club Agent Skills](https://github.com/tech-leads-club/agent-skills) | 方法技能另列 | 团队分发共同技能并通过锁文件与扫描记录追踪来源。 | 扫描不等于绝对安全；引擎 MIT、自有技能 CC-BY、第三方各自许可。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 1427 | [AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | 团队直接性不足 | 安全与平台团队在内部自检和 CI/CD 中统一扫描 AI 组件。 | 当前缺少认证，定位内部使用；不能写成可公开部署的多人平台。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1436 | [Genkit](https://github.com/genkit-ai/genkit) | 工程组件另列 | 研发团队统一模型接入和智能体工作流开发方式。 | 语言成熟度不同：Python Beta、Dart Preview；不是同等稳定。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1448 | [XcodeBuildMCP](https://github.com/getsentry/XcodeBuildMCP) | 工程组件另列 | 移动研发团队统一智能体访问 Xcode 项目的工具接口。 | 依赖 macOS 与 Xcode，不是跨平台编译服务。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1453 | [Materialize](https://github.com/MaterializeInc/materialize) | 商业或许可边界待核 | 数据团队统一提供跨系统实时视图，供 AI/RAG 和业务应用使用。 | BSL 1.1 四年后转 Apache；社区版有内存和磁盘额度。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1467 | [FunClip](https://github.com/modelscope/FunClip) | 团队直接性不足 | 内容团队从访谈或录制素材提取片段并交付字幕。 | 单点内容工具，不是多人项目管理；代码与模型许可分别适用。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1481 | [Rainbond](https://github.com/goodrain/rainbond) | 商业或许可边界待核 | 平台与交付团队统一部署 AI 软件和模型服务，减少基础设施操作负担。 | AI 编码部署入口 RainSkills 是独立项目；许可证含 Apache 之外条件。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1486 | [Aim](https://github.com/aimhubio/aim) | 保留待深核 | ML 团队集中比较训练运行与指标，复用实验记录。 | 核心跟踪器不等于包含全部企业支持或权限能力。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1488 | [NLWeb](https://github.com/nlweb-ai/NLWeb) | 团队直接性不足 | 网站团队把现有结构化内容提供给访客和 AI 客户端。 | 实现定位概念验证；A2A 仍写 soon，不当作现成功能。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1489 | [Claude Code Security Reviewer](https://github.com/anthropics/claude-code-security-review) | 团队直接性不足 | 研发和安全团队在 PR 中查看差异扫描发现并复核。 | README 明确未强化提示注入防护，只适用于可信 PR。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1493 | [jscpd](https://github.com/kucherenko/jscpd) | 工程组件另列 | 团队将代码健康检查接入智能体与评审，并区分 monorepo 团队范围。 | 检测引擎本身非生成式 AI；定位智能体工具链组件。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1502 | [FalkorDB](https://github.com/FalkorDB/FalkorDB) | 商业或许可边界待核 | 平台团队为 RAG 和记忆应用共建可查询知识关系层。 | SSPLv1，不应写成宽松许可证；多租户隔离未实测。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1534 | [ArcBox](https://github.com/arcboxlabs/arcbox) | 团队直接性不足 | Mac 研发团队可统一构建、CI 和智能体隔离环境。 | 代理沙箱会关闭代理提示；VM 隔离不代表所有操作无风险，macOS 专用。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1537 | [Claude Code Configuration Showcase](https://github.com/ChrisWiles/claude-code-showcase) | 方法技能另列 | 团队将规则、质量检查和工单到 PR 流程保存为可复用项目配置。 | 配置示例须按项目适配，不能把作者的运行体验当作保证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 1549 | [Destructive Command Guard](https://github.com/Dicklesworthstone/destructive_command_guard) | 团队直接性不足 | 团队统一配置命令防护规则，降低智能体破坏代码与基础设施的机会。 | 部分异常默认 fail-open，不是完整沙箱或绝对拦截保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1561 | [Google Agents CLI](https://github.com/google/agents-cli) | 工程组件另列 | 团队统一智能体部署、CI/CD、密钥和企业注册流程。 | 依赖 Google Cloud；为旧 Agent Starter Pack 指向的后继项目。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1563 | [AIO Sandbox](https://github.com/agent-infra/sandbox) | 工程组件另列 | 工程团队复用统一智能体执行环境，便于调试和验证任务产物。 | 组件共用一个容器文件系统，不是租户间隔离；云部署需私有端口边界。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1567 | [Baserow](https://github.com/baserow/baserow) | 商业或许可边界待核 | 团队共建业务数据、内部应用与自动化，通过自然语言辅助搭建。 | Premium/Enterprise 不在 MIT 核心范围；合规宣传未独立审计。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1575 | [MCP Atlassian](https://github.com/sooperset/mcp-atlassian) | 工程组件另列 | 团队把工单和知识文档接入智能体，覆盖云端与自建 Atlassian。 | 非 Atlassian 官方产品；具体工具权限依认证配置，未实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1597 | [AgentOps](https://github.com/AgentOps-AI/agentops) | 团队直接性不足 | 研发与运维团队复用执行轨迹和成本视图排查智能体问题。 | 评估和调试还有独立路线图，不能将计划项全写成已实现。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1599 | [Giskard](https://github.com/Giskard-AI/giskard-oss) | 保留待深核 | 团队统一构建多轮测试与知识库质量评估，支撑发布检查。 | v2 不再积极维护；传统表格 ML 扫描仍仅 v2，不能归到 v3。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1603 | [Vercel Open Agents](https://github.com/vercel-labs/open-agents) | 团队直接性不足 | 研发团队可参考云端任务、会话与代码改动交付的完整架构。 | 需 fork 适配并依赖 Vercel，不是已验证的通用多人产品。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1605 | [Klavis](https://github.com/Klavis-AI/klavis) | 保留待深核 | 团队开发智能体时复用业务系统授权和连接层。 | 训练沙箱与业务连接器是不同方案，云端服务不等于全部可自建。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 004 | 1607 | [Emdash](https://github.com/generalaction/emdash) | 团队直接性不足 | 研发团队从工单启动任务，在同一界面检查差异、PR 和 CI。 | 桌面工作台；并行智能体不代表多人同时编辑。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1619 | [Godot MCP](https://github.com/Coding-Solo/godot-mcp) | 工程组件另列 | 游戏研发团队让智能体读取运行反馈并辅助场景修改与排错。 | Godot 专项连接器，不提供独立团队权限。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1629 | [GPUStack](https://github.com/gpustack/gpustack) | 商业或许可边界待核 | IT 与研发团队统一分配 GPU、提供模型服务并管理用户访问和用量。 | GPU 拓扑视图标为 Enterprise；引擎与模型兼容及性能未实测。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1632 | [RuoYi AI](https://github.com/ageerle/ruoyi-ai) | 商业或许可边界待核 | 业务与研发共同维护模型、知识库和含人工审核的业务流程。 | 前端和管理端另仓；商业版独立，未核验具体 RBAC。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1637 | [Dograh](https://github.com/dograh-hq/dograh) | 团队直接性不足 | 客服开发团队共同维护话术流程，通过回放和草稿修改迭代语音助手。 | 语音和电话服务需配置；未核验多人权限，效果未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1642 | [Shortest](https://github.com/antiwork/shortest) | 团队直接性不足 | 开发与测试团队用自然语言维护端到端场景和浏览器验证流程。 | 框架需要外部服务；开发环境 SSO 说明不等于产品团队权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 004 | 1690 | [.NET Agent Skills](https://github.com/dotnet/skills) | 方法技能另列 | .NET 团队复用官方工程知识，并比较技能的激活、成本和未通过率。 | Copilot 自定义代理文件不是 Codex 原生代理；插件能力因组件而异。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 1692 | [Harbor](https://github.com/harbor-framework/harbor) | 工程组件另列 | 团队共用评估环境和基准，比较不同智能体并复现实验。 | 评估框架，不是业务协作平台；云环境需另配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 004 | 1693 | [Agent OS by Builder Methods](https://github.com/buildermethods/agent-os) | 方法技能另列 | 团队把代码约定提炼成共用标准，再按任务注入智能体。 | 轻量方法与配置，不是操作系统或多人管理后台。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 1701 | [TaskingAI](https://github.com/TaskingAI/TaskingAI) | 商业或许可边界待核 | 工程团队统一 AI 后端模块和控制台测试，前端可独立开发。 | 使用专属 TaskingAI 许可证；未核验企业权限或一键生产承诺。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1716 | [LLM Engineers Handbook](https://github.com/PacktPublishing/LLM-Engineers-Handbook) | 方法技能另列 | 团队可共同练习数据管道、评估、部署和监控的完整工程流程。 | 书籍需另获取；代码可能不同于书中版本，AWS 示例需云资源。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 004 | 1718 | [mirrord](https://github.com/metalbear-co/mirrord) | 商业或许可边界待核 | 开发者和编码智能体使用相同集群上下文调试，减少重复部署。 | 数据库分支、队列拆分和预览环境属于付费层；不执行 README 的自动试用指令。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 004 | 1737 | [Neo4j Knowledge Graph Builder](https://github.com/neo4j-labs/llm-graph-builder) | 团队直接性不足 | 团队将分散资料转成可复用关系数据，供知识检索和应用开发。 | Neo4j Desktop 需分开部署前后端；不是多人权限产品。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 1748 | [Sparrow](https://github.com/katanaml/sparrow) | 商业或许可边界待核 | 业务和数据团队通过统一 API 处理票据、验证结果并编排后续任务。 | README 同时写 GPL 和营收/专有使用限制，需核对具体许可；云后端可选，不能笼统承诺不出网。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 1764 | [MCP UI](https://github.com/MCP-UI-Org/mcp-ui) | 工程组件另列 | 工程团队把 AI 工具输出变成可交互界面，便于用户检查与操作。 | 是 SDK，宿主支持决定交互能力，不是独立协作应用。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 1775 | [MCP Go SDK](https://github.com/modelcontextprotocol/go-sdk) | 保留待深核 | Go 团队统一内部工具协议和客户端实现，复用 OAuth 基础组件。 | SDK 不提供完整团队服务；新贡献 Apache、既有代码 MIT。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 1777 | [Argilla](https://github.com/argilla-io/argilla) | 保留待深核 | AI 工程师与领域专家共同标注、反馈和迭代评估数据。 | 官方明确原作者不再增加新功能，仍承诺按需修复和补丁；最近推送 2026-09-14 不能抵消这一维护声明，先列观察项。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 1781 | [Entire CLI](https://github.com/entireio/cli) | 团队直接性不足 | 同事可查看代码变更的提示与工具记录，并从共同检查点接续工作。 | 会话含上下文，远端检查点独立推送；不是默认组织权限后台。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 1813 | [MCPorter](https://github.com/openclaw/mcporter) | 工程组件另列 | 团队让自动化脚本与不同智能体复用同一工具接口和认证配置。 | 开发工具而非权限后台，实际能力依连接的 MCP 服务。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 1822 | [MockServer](https://github.com/mock-server/mockserver-monorepo) | 保留待深核 | 研发与 QA 共用确定性模型响应、协议模拟和故障场景，减少真实服务依赖。 | 测试基础设施本身非生成式 AI；HTTP/3 仍实验性。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 1831 | [Coral](https://github.com/withcoral/coral) | 团队直接性不足 | 团队将 GitHub、Slack 和监控资料组合查询，减少跨工具手动汇总。 | 本地执行不代表不访问来源 API；不推断多人权限管理。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 1869 | [SwiftUI Agent Skill](https://github.com/twostraws/SwiftUI-Agent-Skill) | 方法技能另列 | Apple 开发团队共用 API、性能、设计和可访问性约定。 | 技能指导不代替编译测试或可访问性验证，其他 Swift 技能另仓。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 1874 | [Ant Design X](https://github.com/ant-design/x) | 工程组件另列 | 前端团队统一对话、流式内容与动态卡片的交互实现。 | UI 工具包，不提供模型服务或组织管理后台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 1911 | [Infinity](https://github.com/infiniflow/infinity) | 工程组件另列 | 平台团队统一稠密、稀疏、全文等检索层，复用知识应用后端。 | 数据库组件，不是多人工作区；性能数字未复现，与 RAGFlow 独立。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 1919 | [Rivet by Ironclad](https://github.com/Ironclad/rivet) | 团队直接性不足 | 工程团队用可视化代理图检查提示链，并把同一逻辑嵌入业务应用。 | 不同于 Rivet Actors；不是多人实时编辑能力的证明。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 1924 | [RATH](https://github.com/Kanaries/Rath) | 团队直接性不足 | 分析团队快速产出图表与探索结果，支持业务评审和讨论。 | 可视化探索不等于因果证明；Runcell 为独立项目。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 1945 | [FastRTC](https://github.com/gradio-app/fastrtc) | 工程组件另列 | 开发团队复用语音交互、轮次处理和前后端连接，开发客服等 AI 应用。 | 通信组件，不是现成多人会议系统；临时电话能力不等于生产号码服务。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 1965 | [Koog](https://github.com/JetBrains/koog) | 工程组件另列 | JVM/移动团队统一代理实现、失败恢复及监控接入。 | 开发框架，各平台实际能力需确认，不是多人业务产品。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 1971 | [Memgraph](https://github.com/memgraph/memgraph) | 商业或许可边界待核 | 平台团队统一图关系与向量/全文查询，为共用知识应用供数。 | 基础 BSL、企业 MEL；SSO 和细粒度权限属于 Enterprise。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 1984 | [OpenKB](https://github.com/VectifyAI/OpenKB) | 团队直接性不足 | 团队将原始材料沉淀成可复用实体、概念与交叉引用，减少重复整理。 | CLI 知识编译器，不是已验证多人权限产品；自动合成仍需复核。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 1986 | [MCP C# SDK](https://github.com/modelcontextprotocol/csharp-sdk) | 工程组件另列 | .NET 团队统一业务工具与模型上下文接口，复用认证实现。 | SDK 不等于企业访问管理成品，引用的扩展规范仍位于 draft。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 1989 | [PyRIT](https://github.com/microsoft/PyRIT) | 保留待深核 | 安全专业人员与工程师可共用 AI 风险测试工具链。 | 根文档定位明确但功能细节有限；未审白皮书或复现测试。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 1990 | [Kungfu](https://github.com/kungfu-systems/kungfu) | 团队直接性不足 | 团队把目标、决策和交付状态从单次代理会话中独立出来，便于接续。 | Alpha；内置 Mock 演示验证本地机制，不证明真实代理恢复效果。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 1999 | [Pydantic Logfire](https://github.com/pydantic/logfire) | 商业或许可边界待核 | 工程团队用统一追踪、指标、日志和 SQL 查询排查 AI 应用问题。 | 本仓库仅 SDK/文档；UI 与服务端闭源，自托管需企业许可。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2003 | [Embabel Agent Framework](https://github.com/embabel/embabel-agent) | 工程组件另列 | Java/Kotlin 团队复用 Spring 业务能力、事务及测试方式开发代理流程。 | 框架层，不能把可选插件或沙箱章节全部当核心能力。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2008 | [Judge0](https://github.com/judge0/judge0) | 工程组件另列 | 工程团队统一代码执行服务，用于智能体、验证和开发应用。 | 执行基础设施，不是多人协作前端；GPLv3，沙箱强度未实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2012 | [CoStrict](https://github.com/zgsm-ai/costrict) | 团队直接性不足 | 研发团队统一需求、架构、任务和测试步骤，结合 Git 审查生成代码。 | 私有部署能力不代表所有依赖均离线；代码质量未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2029 | [Purple Llama](https://github.com/meta-llama/PurpleLlama) | 商业或许可边界待核 | 安全和 AI 团队共用输入输出防护与风险评估基准。 | 评估/基准 MIT，模型适用各 Llama Community 许可；不是全量 MIT。 主清单已有其中 Llama Guard；本候选仅评估是否扩展为整个 Purple Llama 工具/评估套件，不重复新增同一防护模型。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2032 | [RubyLLM](https://github.com/crmne/ruby_llm) | 工程组件另列 | Ruby 团队统一模型接入、用量跟踪和人工批准步骤，复用现有 Rails 应用。 | 1.x 与 2.0 文档分开，不能沿用旧版本能力；非现成团队产品。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2038 | [mcpo](https://github.com/open-webui/mcpo) | 工程组件另列 | 团队复用现有 MCP 工具到只支持 OpenAPI 的内部应用。 | 协议桥，不是完整访问治理；不采信 stdio 天生不安全的绝对表述。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2039 | [Sacred](https://github.com/IDSIA/sacred) | 保留待深核 | ML 团队保存参数和运行配置，复查同事的实验结果。 | 通用实验工具；Neptune 协作截图是外部集成，不是核心自带平台。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2050 | [Builder.io Skills](https://github.com/BuilderIO/skills) | 方法技能另列 | 团队把计划和差异转成便于审阅的视觉产物，并复核代理工作。 | 部分上下文导入尚 Coming soon；屏幕记忆依赖独立 Clips 产品。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2062 | [Unity MCP by IvanMurzak](https://github.com/IvanMurzak/Unity-MCP) | 工程组件另列 | 游戏团队复用编辑、测试与调试接口，并版本管理项目级插件设置。 | 云授权和本地连接不同；不能把同名其他 Unity MCP 的能力混入。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2066 | [Agent Client Protocol](https://github.com/agentclientprotocol/agent-client-protocol) | 工程组件另列 | 工具团队用统一协议连接不同编辑器与智能体，降低重复集成。 | 协议/Schema 仓库不是运行时；crate/schema 版本不等于协商协议版本。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2067 | [Spec Workflow MCP](https://github.com/Pimzino/spec-workflow-mcp) | 商业或许可边界待核 | 团队围绕需求、设计与任务逐步审阅，记录反馈和修订。 | 作者暂休；用户认证和 HTTPS 尚未内置，需反向代理补足。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2068 | [just-bash](https://github.com/vercel-labs/just-bash) | 工程组件另列 | 工程团队为智能体复用可控命令接口与虚拟文件环境。 | Beta；宿主自定义命令默认可信，任意宿主代码无法强制取消，不是完整 OS 沙箱。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2077 | [AI Engineer Coach](https://github.com/microsoft/AI-Engineering-Coach) | 团队直接性不足 | 团队可用共同实践维度开展培训，发现重复提示并转成可复用技能。 | 主要是个人本地分析，不是集中员工监控后台，评分非生产力证明。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2090 | [Kubeflow Pipelines](https://github.com/kubeflow/pipelines) | 保留待深核 | ML 团队共用组件、管道和实验服务，复用端到端训练交付流程。 | 是 Kubeflow 组件，不等于完整平台；版本依赖需按兼容矩阵选。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2092 | [Bot on Anything](https://github.com/zhayujie/bot-on-anything) | 保留待深核 | 团队可在 Slack、飞书、钉钉或企微共用模型问答入口。 | 轻量聊天框架；长期记忆、规划等属于另项目 CowAgent。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2098 | [Excel MCP Server](https://github.com/haris-musa/excel-mcp-server) | 团队直接性不足 | 业务与数据团队复用表格处理接口，交付可继续人工审阅的工作簿。 | 不需安装 Excel，不代表公式计算完全等同 Excel；非多人编辑服务。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2103 | [CML](https://github.com/iterative/cml) | 工程组件另列 | 数据科学与工程团队通过 Git 追踪实验，并在 PR 中共同比较指标和图表。 | CLI 与流水线工具，数据/模型版本管理通常配合 DVC，算力另配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2102 | [Gemini API Skills](https://github.com/google-gemini/gemini-skills) | 方法技能另列 | 开发团队为编码代理提供统一的 Gemini 接入上下文，减少过时 API 用法。 | 技能内容需跟随版本；本次未逐条核验评估提升或 SDK 文档。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2127 | [CSGHub](https://github.com/OpenCSGs/csghub) | 保留待深核 | 平台团队集中验证、分发和管理模型资产，通过 Web/Git/API 共用资源。 | 根文档未展开各版企业能力，不能保证全部高级功能免费可用。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2130 | [DocETL](https://github.com/ucbepic/docetl) | 工程组件另列 | 数据团队共同维护文档批处理逻辑，把工单等非结构化材料转成可分析表格。 | 管道引擎而非多人资料库；自动优化的成本与质量需实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2137 | [microfeed](https://github.com/microfeed/microfeed) | 团队直接性不足 | 内容团队可由人审核代理起草的内容，再通过同一 CMS 管理发布。 | WebMCP 实验性且依赖浏览器；主要面向轻量内容管理，未核验多人角色。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2148 | [Octelium](https://github.com/octelium/octelium) | 保留待深核 | 团队为人员与代理统一内部资源、模型和 SaaS 的访问身份及策略。 | 通用访问基础设施，非业务助手；零信任能力未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2151 | [Deepchecks](https://github.com/deepchecks/deepchecks) | 商业或许可边界待核 | ML 与工程团队共同检查测试结果，在 CI 和生产反馈中迭代模型。 | 监控另仓；高级功能商业许可，不能全部算 AGPL 核心。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2154 | [Container Use](https://github.com/dagger/container-use) | 团队直接性不足 | 研发团队将并行代理改动留在独立分支，查看命令日志并人工接管。 | 早期开发；容器隔离不等于已验证多租户安全。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2180 | [Google Gen AI Python SDK](https://github.com/googleapis/python-genai) | 工程组件另列 | Python 团队统一模型、工具和多模态接入，复用官方客户端。 | 下一主版本 AFC 调用位置将变化；两类服务能力不同，非协作平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2187 | [OpenClaw China](https://github.com/BytePioneer-AI/openclaw-china) | 工程组件另列 | 团队在钉钉、企微、飞书等现有渠道接入 AI 助手，复用消息收发。 | 是 OpenClaw 插件集，不是独立代理平台；渠道授权与能力分别配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2189 | [Kubernetes Agent Sandbox](https://github.com/kubernetes-sigs/agent-sandbox) | 工程组件另列 | 平台团队用统一模板与生命周期管理代理执行环境，复用持久存储和身份。 | 仅编排层，底层安全隔离委托 gVisor/Kata 等 RuntimeClass。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2200 | [MCP Rust SDK](https://github.com/modelcontextprotocol/rust-sdk) | 工程组件另列 | Rust 团队复用标准工具协议和异步实现，减少内部 AI 集成成本。 | 3.x 有破坏性迁移；生态列表产品不属于 SDK 本身。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2221 | [Claude Code Workflows by OneRedOak](https://github.com/OneRedOak/claude-code-workflows) | 方法技能另列 | 团队在 PR 和本地复用评审标准，把常规检查与人工架构判断衔接。 | 第三方工作流模板，不保证安全或可访问性合规；更多流程尚未来。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2224 | [LazyLLM](https://github.com/LazyAGI/LazyLLM) | 团队直接性不足 | 工程与算法团队从原型、坏例反馈到微调部署共用一套应用流程。 | 多用户并发不等于组织权限；跨基础设施兼容未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2234 | [LiteFlow](https://github.com/dromara/liteflow) | 保留待深核 | Java 团队把代理作为业务节点与已有规则一起编排和维护。 | 通用规则引擎的 AI 扩展，不是完整智能体或团队工作区。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2246 | [OpenAI Agents SDK for JavaScript](https://github.com/openai/openai-agents-js) | 工程组件另列 | JS/TS 团队统一代理编排与可观察性，把人工批准接入应用流程。 | 框架非多人产品；语言版本独立于 Python SDK，不等同全部服务可自建。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2274 | [Vocode Core](https://github.com/vocodedev/vocode-core) | 商业或许可边界待核 | 客服与业务开发团队复用语音会话、电话和会议接入组件。 | 正在招募维护者；库不等于托管坐席平台，通信服务独立。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2277 | [kagent](https://github.com/kagent-dev/kagent) | 保留待深核 | 平台团队统一代理、模型配置和可复用运维工具的部署管理。 | Kubernetes 原生框架，实际工具权限取决于部署配置，未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2278 | [Reef](https://github.com/Human-Agent-Society/reef) | 团队直接性不足 | 研发团队将运行反馈关联到模型或 harness 优化，保留可迭代交付链路。 | 模型训练需 GPU；harness 优化需代表任务和评估器，不保证自改进。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2296 | [Conductor Plugin](https://github.com/gemini-cli-extensions/conductor) | 方法技能另列 | 团队把产品、技术栈和流程偏好写成版本化上下文，统一代理任务生命周期。 | 插件方法层，非强制执行的多人项目管理服务。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2310 | [Morphik Core](https://github.com/morphik-org/morphik-core) | 商业或许可边界待核 | 团队应用可共用文档存储与检索层，处理图表等视觉上下文。 | 不是 Morphik 后台业务 AI workers；BSL 源码可见，各版四年后转 Apache。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2311 | [MCP Java SDK](https://github.com/modelcontextprotocol/java-sdk) | 工程组件另列 | Java 团队复用同步/异步工具接口，接入业务数据与 AI 应用。 | Spring Boot starters、安全与注解为扩展层，不全部算 SDK 内置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2315 | [Microsoft MCP Servers](https://github.com/microsoft/mcp) | 工程组件另列 | 使用 Azure/Fabric 的团队复用统一工具接入与工程基础。 | Teams、Word 等目录链接不代表这些服务源码都在本仓，远端授权独立。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2326 | [cc-sdd](https://github.com/gotalab/cc-sdd) | 方法技能另列 | 团队明确文件边界和依赖，在阶段关口批准规格并检查跨任务一致性。 | Claude/Codex 稳定而其他宿主 Beta；受 Kiro 启发但不是其官方产品。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2328 | [Speaches](https://github.com/speaches-ai/speaches) | 工程组件另列 | 团队应用可共用语音转写与生成服务，复用兼容接口和本地计算资源。 | 服务组件非会议协作成品；代码和模型许可需分别确认。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2334 | [md2wechat](https://github.com/geekjourneyx/md2wechat-skill) | 商业或许可边界待核 | 内容团队复用排版与发布前检查，将草稿交运营人员审阅。 | Source Available；商业使用需授权，专业 API 单独提供。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2339 | [OpenSumi](https://github.com/opensumi/core) | 团队直接性不足 | 工具团队可复用 IDE 基础和云端/桌面模板，构建统一开发环境。 | 框架不等于成品 IDE；示例项目各自维护，未核验组织功能。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2341 | [Dataherald](https://github.com/Dataherald/dataherald) | 商业或许可边界待核 | 业务与数据团队共用问数 API、管理台和 Slack 入口。 | 裸引擎无用户/认证；管理台和 Slack 需 Enterprise 组件，授权细节需另核。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2345 | [Mirage](https://github.com/strukto-ai/mirage) | 工程组件另列 | 平台团队统一 Slack、文件和业务 API 接口，并配置代理可见范围和操作策略。 | 执行运行时可本地或远端，不能保证所有配置无泄漏；不是完整 OS。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2348 | [Modern Go Guidelines](https://github.com/JetBrains/go-modern-guidelines) | 方法技能另列 | Go 团队共用与 go.mod 对应的语法和标准库规则，减少生成代码过时写法。 | 本次核验指南定位，未逐条验证 Go API；CLI 可能触发工具链下载。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2350 | [Laravel Boost](https://github.com/laravel/boost) | 方法技能另列 | Laravel 团队用官方上下文规范代理生成代码，统一框架实践。 | 根 README 仅说明定位，不据此推断额外协作或权限功能。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2354 | [Butterbase](https://github.com/butterbase-ai/butterbase) | 商业或许可边界待核 | 工程团队共用数据库、RLS 和后端工具，为 AI 应用统一基础接口。 | 自建不含上游 AI 路由适配、实际计费配额及客户管理面板，需自行实现。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2382 | [TruLens](https://github.com/truera/trulens) | 工程组件另列 | 研发与质量团队比较分步评分、成本和延迟，把失败关联到执行证据。 | 模型裁判评分需校准，不保证客观正确；后端可独立选择。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2398 | [DBHub](https://github.com/bytebase/dbhub) | 工程组件另列 | 数据与研发团队复用数据库查询接口，并配置只读、行数和超时限制。 | 审批、数据脱敏、细粒度访问与审计属于 Bytebase，不是 DBHub 自带。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2409 | [Unity Catalog](https://github.com/unitycatalog/unitycatalog) | 保留待深核 | 数据与 AI 团队统一发现和治理表、文件、函数及模型，跨计算引擎复用。 | 开源实现不能等同同名商业云服务全部能力；Linux Foundation sandbox 项目。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2425 | [AgentENV](https://github.com/kvcache-ai/AgentENV) | 工程组件另列 | 平台与训练团队共用可恢复、可分叉执行环境，管理批量代理实验。 | 需 Linux/KVM 或专门 PVM 路径，规模性能来自项目报告未复现。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2453 | [Google Antigravity Python SDK](https://github.com/google-antigravity/antigravity-sdk-python) | 商业或许可边界待核 | Python 团队复用代理运行层与状态管理，减少重复编排实现。 | 单独克隆不能运行，需包含编译运行时的 PyPI wheel；仓库许可不代表运行时全部源码公开。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2476 | [Mesh LLM](https://github.com/Mesh-LLM/mesh-llm) | 工程组件另列 | 平台团队复用分散 GPU 和内存，通过统一接口提供模型推理。 | 基础设施非多人工作区；跨节点权限、模型兼容和性能未实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2482 | [AgentFS](https://github.com/tursodatabase/agentfs) | 工程组件另列 | 工程团队查询文件与工具历史、保存状态快照，便于调试和复现。 | 状态层不提供完整执行安全隔离，需与容器/VM 分别配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2507 | [NVIDIA Agent Skills](https://github.com/NVIDIA/skills) | 方法技能另列 | 使用 NVIDIA 栈的团队共用厂商维护的操作知识，统一训练、仿真和部署实践。 | 技能 CC-BY、代码 Apache；verified 标签不保证所有环境效果，产品依赖另计。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2538 | [Docker Agent](https://github.com/docker/docker-agent) | 保留待深核 | 团队版本管理代理配置，并通过现有镜像仓库分发一致工具与工作流。 | 代理团队不等于真人协作；Docker CLI 插件非自动安全边界。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2541 | [DeepScientist](https://github.com/ResearAI/DeepScientist) | 团队直接性不足 | 研究团队保留实验路径、结果和复现经验，可查看进度并接管代理工作。 | 更强认证、权限及连接器保护仍在路线图，不宣称成熟组织隔离。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2544 | [Postgres MCP Pro](https://github.com/crystaldba/postgres-mcp) | 团队直接性不足 | 开发与数据库团队共用诊断依据，辅助 SQL 和性能评审。 | restricted/unrestricted 不同；仍需数据库只读权限配合，未验证索引建议。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2560 | [LangGraph JavaScript](https://github.com/langchain-ai/langgraphjs) | 工程组件另列 | JS 团队统一持久流程、记忆与人工状态检查，降低复杂代理交付成本。 | LangSmith 观察和部署属独立平台，不全算开源库自带。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2562 | [Superlinked Inference Engine](https://github.com/superlinked/sie) | 工程组件另列 | 平台团队统一检索、生成等模型接口，按需加载并通过 Kubernetes 扩展。 | 推理基础设施；具体模型授权与性能需分别验证。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2568 | [Go Agent Skills by samber](https://github.com/samber/cc-skills-golang) | 方法技能另列 | Go 团队复用语言实践，并用显式公司技能覆盖默认规范。 | Git/CI/PR 流程技能需另外插件，未逐条验证规则效果。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2576 | [Sentrux](https://github.com/sentrux/sentrux) | 团队直接性不足 | 团队可把结构检查和规则反馈接入代理改码过程，辅助统一质量门槛。 | 静态分数不证明软件正确；自改进效果未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2608 | [Effective HTML](https://github.com/plannotator/effective-html) | 方法技能另列 | 团队用可查看、可标注的 HTML 解释计划与改动，便于跨角色评审。 | 技能资料集，标注使用 Plannotator；不是独立多人协作服务。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2621 | [OpenOcta](https://github.com/openocta/openocta) | 工程组件另列 | 运维团队可复用技能和消息工单集成，统一巡检与告警分析。 | 桌面客户端和企业 AMC 分开；本地存储不代表所有远端工具及模型不出网。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2678 | [Desloppify](https://github.com/peteromallet/desloppify) | 商业或许可边界待核 | 团队在 CI 对完整项目设置质量门槛，持续跟踪结构问题和修复。 | CI 跳过主观阶段，非 diff-only 扫描；商业化许可有条件，分数不是正确性证明。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2693 | [TanStack AI](https://github.com/TanStack/ai) | 工程组件另列 | 前后端团队共用工具契约和消息类型，统一 AI 界面与代理实现。 | SDK 非模型服务，能力依适配器；沙箱路径需额外运行环境。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2699 | [WeCom CLI](https://github.com/WecomTeam/wecom-cli) | 保留待深核 | 团队复用现有企业文档、待办与会议数据，通过 CLI/技能统一自动化入口。 | 需企业微信账号及相应授权，外部消息或审批动作仍需业务许可。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2713 | [Vibe Workflow](https://github.com/KhazP/vibe-coding-prompt-template) | 方法技能另列 | 团队保存 PRD、技术设计与代理规则，用交付证据复查实现。 | 方法和 CLI 模板，不能替代实际测试或强制安全策略。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2719 | [Chaterm](https://github.com/chaterm/Chaterm) | 团队直接性不足 | 运维团队沉淀知识与技能，复查跨主机任务和故障处理记录。 | 自动回滚与安全保证未实测，具体部署版本和权限粒度需另核。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2730 | [Snyk Agent Scan](https://github.com/snyk/agent-scan) | 商业或许可边界待核 | 安全团队检查代理工具供应链，并可将结果接入企业集中管理。 | 会发送脱敏后组件信息至扫描 API，非纯离线；CLI 输出实验性，企业 Evo 独立。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2753 | [Microsoft Agent Skills](https://github.com/microsoft/skills) | 方法技能另列 | 团队共用 Azure SDK 与 Foundry 上下文，统一代理开发实践。 | 在建目录，部分服务预览；技能本身不提供云平台能力。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2764 | [ChainForge](https://github.com/ianarawjo/ChainForge) | 团队直接性不足 | 团队以共同数据流和评分标准评审模型输出与提示改动。 | 网页试玩功能有限；本地支持执行 Python，不等于可直接公网多人部署。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2785 | [Lowdefy](https://github.com/lowdefy/lowdefy) | 保留待深核 | 团队审查 AI 生成的配置，并共用认证、组件和数据连接搭建内部应用。 | 代理友好的通用框架，不是自带 AI 助手；无代码注入等绝对宣称未采信。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2786 | [OpenBidKit Yibiao](https://github.com/FB208/OpenBidKit_Yibiao) | 团队直接性不足 | 投标团队复用企业资料、调整方案并人工定稿与导出。 | 查重/废标检查部分是预留入口，不能写成全部已实现；第三方 Web 版另仓。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2796 | [Claude Commerce Agents](https://github.com/anthropics/commerce-agents) | 团队直接性不足 | 业务与开发团队共用工具契约，参考员工后台审核和客户购物两种流程。 | 虚构业务演示，不下真实订单或扣款；授权和业务规则由部署方实现。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2805 | [opensrc](https://github.com/vercel-labs/opensrc) | 工程组件另列 | 工程团队让代理查阅依赖真实实现，辅助调试、文档和代码评审。 | 源码获取组件，不保证代理理解或许可证自动合规。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2819 | [Flutter Agent Plugins](https://github.com/flutter/agent-plugins) | 方法技能另列 | 移动团队共用测试、架构和界面调试流程，将代理操作转成持久集成测试。 | 插件知识和配置，不是完整测试平台；效果未逐项实测。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2837 | [OpenGAP](https://github.com/open-gitagent/opengap) | 方法技能另列 | 团队审查代理身份、技能和职责，通过分支/PR 追踪记忆与配置变更。 | 合规检查不是法律认证；曾名 gitagent/gapman，后续按别名去重。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2840 | [seekdb](https://github.com/oceanbase/seekdb) | 保留待深核 | 平台团队复用统一数据层，为知识查询和代理状态建立可分支实验空间。 | 数据库分支不是执行代码沙箱；性能与各版访问控制未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2851 | [Vibium](https://github.com/VibiumDev/vibium) | 团队直接性不足 | 开发与 QA 共用浏览器操作、截图及验证接口，辅助复现界面问题。 | 工具层非自动完整测试套件，安装可能下载浏览器。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2856 | [Ax (ax-llm)](https://github.com/ax-llm/ax) | 工程组件另列 | 研发团队共用类型契约、流程和优化方式，追踪代理状态与执行。 | TypeScript 优先；JS 运行时不是容器/VM，宿主回调仍是授权边界。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2866 | [Supabase MCP](https://github.com/supabase/mcp) | 工程组件另列 | 团队统一项目数据库与配置访问，让代理复用既有开发资源。 | 本地/自建工具子集且无 OAuth 2.1；请求级凭据不可错误共用 handler。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2881 | [EventCatalog](https://github.com/event-catalog/eventcatalog) | 商业或许可边界待核 | 团队共同维护服务、消息、决策和 runbook，让人与代理查询同一架构上下文。 | 混合许可，付费目录商业授权；不能全部能力写为 MIT 核心。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2884 | [forkd](https://github.com/deeplethe/forkd) | 工程组件另列 | 平台团队复用预热环境及快照，管理并行实验和执行资源。 | 默认拒绝出口网络和第三方安全审计仍计划中，性能未复现。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 2903 | [Cloudflare Skills](https://github.com/cloudflare/skills) | 方法技能另列 | 团队共用 Workers、Agents SDK 与性能检查的代理知识。 | 技能不提供云资源本身；原生插件和单独技能安装范围不同。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2909 | [Lumen](https://github.com/jnsahaj/lumen) | 团队直接性不足 | 研发团队在终端检查 PR、标注差异并理解变更原因。 | AI 功能可选，非自动完整审查平台；Git 和 jj 支持分别配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2933 | [Agent Rules from Programming Books](https://github.com/ciembor/agent-rules-books) | 方法技能另列 | 团队将架构、重构与质量约定固化为项目规则供代理复用。 | 规则为对书籍的提炼，不等同原书全文或质量保证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2941 | [Lepton AI SDK](https://github.com/leptonai/leptonai) | 商业或许可边界待核 | 平台团队统一部署端点、训练任务、存储与集群，并复用代理技能。 | Apache 仅 Python 库，不代表云平台或 GPU 算力免费开源。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 2948 | [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) | 保留待深核 | 评估与研发团队共用可扩展任务、评分和基准组件。 | 基准框架非业务平台；预置任务数量与模型结果未重新测量。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2951 | [Web Quality Skills](https://github.com/addyosmani/web-quality-skills) | 方法技能另列 | 设计、前端和 QA 共用现场指标、实验测量与修复检查流程。 | 非认证工具；规则和自动扫描不能证明完整 WCAG 合规。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2960 | [Aaron Marketing Skills](https://github.com/aaron-he-zhu/aaron-marketing-skills) | 方法技能另列 | 营销团队统一内容、广告、邮件和发布流程，共用事实与同意记录。 | 8-bot staff 是智能体；MCP 目录仅参考，根目录非标准插件安装根。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 2968 | [Social Media Agent](https://github.com/langchain-ai/social-media-agent) | 团队直接性不足 | 内容团队由人修改、接受或拒绝草稿，再接入发布及 Slack 通知。 | 基本模式不含 Slack、图片和部分 URL 解析；依赖多项外部服务。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2973 | [NiubiGEO](https://github.com/Albert-Weasker/niubigeo) | 团队直接性不足 | 产品与营销团队共用原始回答和重复测试结果，检查品牌描述并追踪变化。 | 测试反映选定模型与样本，不保证整体曝光或增长；官方推广服务另计。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 2983 | [OpenLIT](https://github.com/openlit/openlit) | 保留待深核 | 工程与运维团队共用代理步骤、工具、成本和评估记录排查问题。 | 未验证全部集成或性能，开源平台不等于自动质量保证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 2996 | [Git AI](https://github.com/git-ai-project/git-ai) | 商业或许可边界待核 | 团队评审时追溯生成意图，按需扩展组织级使用与成本分析。 | 跨仓统计及安全提示存储属 Teams；squash/rebase 需 Teams 或 CI Actions 保持归因。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3011 | [TrustGraph](https://github.com/trustgraph-ai/trustgraph) | 保留待深核 | 平台团队把文档和系统数据组织为集合，按流程步骤控制检索范围。 | 共享上下文不保证确定性或无幻觉；权限与加密可验证性未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3015 | [Tirith](https://github.com/sheeki03/tirith) | 工程组件另列 | 团队可统一命令、技能与依赖检查策略，并保留可解释检测记录。 | 并非完整沙箱；不同 shell/平台拦截能力不同，在线增强与离线检测需区分。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3021 | [Trieve](https://github.com/devflowinc/trieve) | 工程组件另列 | 工程团队共用混合检索与 RAG API，为内部知识或产品搜索减少重复建设。 | 基础平台非完整多人工作区，模型与存储需独立配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3037 | [paperless-gpt](https://github.com/icereed/paperless-gpt) | 团队直接性不足 | 团队文档归档流程可复用标题、标签和扫描件识别，减少人工整理。 | 依赖 Paperless-ngx；不同于已停维 paperless-ai，模型准确率未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3052 | [Agent Toolkit for AWS](https://github.com/aws/agent-toolkit-for-aws) | 工程组件另列 | 云平台团队统一开发部署上下文，结合 IAM、CloudWatch 和 CloudTrail 管理代理活动。 | 接入 AWS 服务需授权和资源；为旧工具后继，不代表完整云服务开源。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3066 | [Spring AI Alibaba DataAgent](https://github.com/spring-ai-alibaba/DataAgent) | 团队直接性不足 | 数据与业务团队检查分析计划，再生成可复核的图表报告并通过 MCP 复用。 | 企业级定位未实测；模型、向量库和数据访问需配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3067 | [FastAPI LangGraph Agent Template](https://github.com/wassim249/fastapi-langgraph-agent-production-ready-template) | 保留待深核 | 工程团队复用统一后端骨架、限流与运行追踪，减少重复搭建。 | 模板须适配业务；赞助模型网关非模板内置免费服务，生产就绪未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3075 | [Bright Data MCP](https://github.com/brightdata/brightdata-mcp) | 商业或许可边界待核 | 研究与数据团队复用统一网页采集入口，接入知识和分析管道。 | 连接器依赖 Bright Data 托管服务，免费额度非永久保证；非整个采集平台开源。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3091 | [Supabase Agent Skills](https://github.com/supabase/agent-skills) | 方法技能另列 | 团队复用数据库、迁移与安全检查知识，统一代理操作规范。 | 技能不同于 Supabase MCP 工具，服务与授权仍需配置。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3093 | [NeMo Agent Toolkit](https://github.com/NVIDIA/NeMo-Agent-Toolkit) | 工程组件另列 | 工程团队共用观察、性能分析和评估层，减少框架间重复接入。 | Dynamo runtime intelligence 实验性；遥测 opt-in，A2A 团队非真人组织。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3104 | [llms.txt](https://github.com/AnswerDotAI/llms-txt) | 方法技能另列 | 文档团队维护统一索引与 Markdown，帮助同事使用的代理定位准确资料。 | 提案非强制互联网标准，不保证模型采纳、检索排名或曝光。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3128 | [Expo Skills](https://github.com/expo/skills) | 方法技能另列 | 移动团队共用构建、部署、升级和设计系统规则，减少代理工作方式差异。 | 技能辅助使用文档/CLI，不能代替各版本真实构建验证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3164 | [Apache Burr](https://github.com/apache/burr) | 工程组件另列 | 工程团队共用明确状态转换、运行轨迹和调试界面，复现代理决策。 | Apache 孵化项目；与 Hamilton DAG 功能不同，不能用用户评价代替实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3171 | [Lark Channel Bridge](https://github.com/zarazhangrui/lark-coding-agent-bridge) | 团队直接性不足 | 团队可在群聊分发任务、接收进度和共同维护机器人访问范围。 | 默认仅本人聊天但执行为 full；工作目录非沙箱，管理员绕过 allowed-chats。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3173 | [Cisco Skill Scanner](https://github.com/cisco-ai-defense/skill-scanner) | 保留待深核 | 团队在提交或 CI 审核技能变更，统一潜在注入和代码风险检查。 | best-effort 非安全认证；可选模型复核准确性仍待配对验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3211 | [HuixiangDou](https://github.com/InternLM/HuixiangDou) | 团队直接性不足 | 团队可在群聊按需获取专业知识，减少无关回复和信息刷屏。 | HuixiangDou2 为独立后继；不同微信渠道有费用/部署区别。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3213 | [SAG](https://github.com/Zleap-AI/SAG) | 团队直接性不足 | 团队可通过带来源的知识图和 MCP 复用资料，迁移/备份知识资产。 | 明确 local-first、single-user；v1 已不维护。可共享知识产物/API，但非真人多租户工作区。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3223 | [NitroStack](https://github.com/nitrocloudofficial/nitrostack) | 工程组件另列 | 工具团队复用依赖注入、守卫和异常处理建立一致代理后端。 | 框架非完整组织服务；NitroStudio 属关联工具，实际安全需配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3247 | [docmd](https://github.com/docmd-io/docmd) | 工程组件另列 | 文档团队维护一份源文，同时输出站点、检索、llms.txt 与 MCP/知识包。 | 0.9 系列能力需按发布版确认；云 Relay 与静态生成器区别。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3251 | [Parseable](https://github.com/parseablehq/parseable) | 保留待深核 | 运维与 AI 团队统一日志、指标和轨迹，使用模型辅助分析遥测。 | 基础观察平台非根因正确性保证，企业功能与权限粒度未核验。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3264 | [Excalidraw MCP by yctimlin](https://github.com/yctimlin/mcp_excalidraw) | 团队直接性不足 | 团队把架构图作为仓库文件共同维护，人工与代理检查并修改同一图稿。 | 非官方 Excalidraw MCP；可选 share 上传加密图，未核验真人权限体系。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3293 | [Workflow SDK](https://github.com/vercel/workflow) | 工程组件另列 | 研发团队为长任务和代理执行复用可恢复流程与运行证据。 | 通用流程 SDK，不是完整多人平台；部署后端需按环境选择。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3298 | [Prism PHP](https://github.com/prism-php/prism) | 工程组件另列 | PHP 团队统一模型提供者与工具接入，复用业务 AI 开发接口。 | 独立库非 Laravel 官方平台，未核验特定团队权限。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3310 | [KunLun-M](https://github.com/LoRexxar/Kunlun-M) | 工程组件另列 | 安全与研发团队让代理复用静态分析证据，辅助审查和修复。 | 静态检测本身不代表漏洞可利用或已验证，未运行扫描。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3356 | [Primo](https://github.com/primocms/primo) | 团队直接性不足 | 开发与内容人员分别用代理/文件和浏览器维护同一网站，复用跨站组件。 | 本地 pull/edit/push 流程 Beta，代理友好不等于自带模型。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3362 | [Terraform and OpenTofu Skill](https://github.com/antonbabenko/terraform-skill) | 方法技能另列 | 平台团队统一模块、测试、CI 和多团队 state 隔离规范。 | 技能指导非执行策略强制层，基础设施方案仍需验证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3364 | [UpTrain](https://github.com/uptrain-ai/uptrain) | 商业或许可边界待核 | 研发团队复用评分和根因分析模板，对比模型与检索方案。 | 真人协作功能仍 Coming Soon；模型评分调用可能传出数据。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3373 | [PortalJS](https://github.com/datopian/portaljs) | 工程组件另列 | 数据团队统一目录、schema 和展示页，交付便于查找的数据资产。 | 框架/生成流程非成品数据治理平台，元数据质量仍需维护。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3381 | [Claudex Loop](https://github.com/chaseai-yt/claudex-loop) | 方法技能另列 | 团队复用独立计划审阅和最终检查，记录作者、评审及裁决。 | 技能方法而非多人平台；模型选择与账号可用性独立，评审不保证正确。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3387 | [1Backend](https://github.com/1backend/1backend) | 保留待深核 | 工程团队共用账号、路由和容器模型运行层，构建多应用后端。 | AGPL；零信任/零配置为定位，未验证隔离或生产稳定性。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3401 | [BoxLite](https://github.com/boxlite-ai/boxlite) | 工程组件另列 | 平台团队复用隔离环境、受控网络和持久执行状态。 | macOS Intel 尚未来；隔离、任意 OCI 和云规模未实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3405 | [Autolabel](https://github.com/refuel-ai/autolabel) | 团队直接性不足 | 数据团队复用标注规则和模型比较流程，再人工复核训练数据。 | Python 库非多标注员平台；成本和准确率未复现。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3408 | [OpenMeter](https://github.com/openmeterio/openmeter) | 商业或许可边界待核 | 工程、运营团队统一模型用量、访问额度和计费依据。 | 不是支付处理商、税引擎或完整财务系统，不自带操作 UI。 README 标注发布仍为 Beta，可能有破坏性变更。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3417 | [Instill Core](https://github.com/instill-ai/instill-core) | 商业或许可边界待核 | 平台与数据团队复用资料处理、API 和模型部署链路。 | 基础平台，具体许可证和组织权限须按模块确认；未安装实测。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3426 | [LLMStack](https://github.com/trypromptly/LLMStack) | 团队直接性不足 | 团队共用模型配置和业务数据，在 Slack/Discord 触发可复用流程。 | Promptly 托管另计；默认管理员需改配置，未核验细粒度成员权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3431 | [Better Harness](https://github.com/QoderAI/better-harness) | 方法技能另列 | 团队定位反复摩擦，形成有证据、可验证的流程改进任务。 | 各宿主入口不同，缺失证据需保留；不是自动生产力保证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3432 | [AssetOpsBench](https://github.com/IBM/AssetOpsBench) | 工程组件另列 | 维护工程师与研究团队共用工单、传感器和故障评估场景。 | 基准/参考框架，不等于可直接控制工业设备的生产系统。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3433 | [CLAIMED Component Compiler](https://github.com/claimed-framework/claimed) | 工程组件另列 | 数据与工程团队把实验代码转为统一容器和管道资产，便于交付复用。 | 普通 Kubernetes job 生成与新 grid 后端支持不同，后者 K8s/PBS 尚未来。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3459 | [Company Research Agent](https://github.com/guy-hartstein/company-research-agent) | 团队直接性不足 | 业务研究团队复用资料来源、任务记录和 PDF 简报开展讨论。 | 依赖多个搜索/模型服务，非多人研究权限平台；报告事实需复核。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3466 | [DeepBot](https://github.com/kevinluosl/deepbot) | 团队直接性不足 | 团队可复用文档、数据和消息操作流程，衔接飞书等已有系统。 | 跨 Tab 主要代理协作，未核验真人多租户；路径白名单不代表完全安全。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3476 | [Agentic Stack](https://github.com/codejunkie99/agentic-stack) | 方法技能另列 | 团队可版本管理统一上下文，将经审核的经验复用到不同工具。 | 监督器不是 OS 沙箱；夜间学习只暂存候选，未验证所有宿主权限。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3487 | [Agent Substrate](https://github.com/agent-substrate/substrate) | 工程组件另列 | 平台团队集中复用执行资源和状态快照，支撑大规模代理运行。 | 非 Google 正式支持产品；密度和恢复速度未复现，非代理开发 SDK。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3504 | [Shannon by Kocoro](https://github.com/Kocoro-lab/Shannon) | 工程组件另列 | 团队统一运行策略、费用上限、人审与故障分析，便于监督交付。 | 不同于 Keygraph 安全测试 Shannon；审批需显式策略启用，隔离未实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3511 | [dstack](https://github.com/dstackai/dstack) | 保留待深核 | 平台团队集中管理开发、训练和推理资源，复用不同云与自有集群。 | 代理驱动推理优化 experimental；不是所有硬件兼容的实测保证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3514 | [Skills Best Practices](https://github.com/mgechev/skills-best-practices) | 方法技能另列 | 团队统一技能结构、触发说明和评估方式，减少不可复用配置。 | 方法指南，skillgrade 为独立工具；本次未逐条验证规范版本。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3522 | [Product Requirement Prompts](https://github.com/Wirasm/prp) | 方法技能另列 | 团队共用需求上下文、研究和实现计划，改善代理交付与评审衔接。 | 提示方法非强制工作流，团队培训是独立商业服务。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3520 | [Forge Tool-call Reliability](https://github.com/antoinezambelli/forge) | 工程组件另列 | 研发团队复用工具响应检查、重试与约束步骤，提升本地模型应用可维护性。 | 不是多代理编排器；基准场景有限且部分版本未重测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3523 | [Aix-DB](https://github.com/apconw/Aix-DB) | 团队直接性不足 | 业务与数据团队复用问数、图表和技能接口交付分析。 | 未核验细粒度数据权限；赞助模型平台非本项目能力。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3526 | [Agent Vault](https://github.com/Infisical/agent-vault) | 商业或许可边界待核 | 平台团队集中保管真实凭据，为代理配置服务范围和请求记录。 | 默认未匹配域名仍转发，需启用 deny；建议与代理不同主机，EE 与 Agent Proxy 分开。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3536 | [Unla](https://github.com/AmoyLab/Unla) | 保留待深核 | 团队共用管理界面和 YAML 映射，统一内部代理工具接入。 | 快速迭代可能破坏兼容且文档滞后，未核验完整组织治理。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3549 | [APIAuto](https://github.com/TommyLemon/APIAuto) | 团队直接性不足 | 研发与 QA 共用测试用例、文档和调试结果，并辅助生成检查内容。 | 自动测试效果及竞品优越性未实测；AutoUI 为独立项目。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3563 | [Claude Blog](https://github.com/AgriciDaniel/claude-blog) | 方法技能另列 | 内容团队共用品牌、编辑质量关口和可审阅产物包。 | 评分是内部 rubric，不能保证搜索/引用效果或全部事实准确。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3579 | [Mutant](https://github.com/mbj/mutant) | 商业或许可边界待核 | 研发团队验证 AI 生成测试是否能抓住真实行为变化，辅助评审质量。 | 确定性测试工具非生成式 AI；商业许可证方案需确认，存活变异需人工判断。 README 明确商业使用需按开发者订阅。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3582 | [TFX](https://github.com/tensorflow/tfx) | 工程组件另列 | ML 与工程团队复用组件和元数据，追踪训练输入输出与恢复。 | 平台组件，需 Airflow/Kubeflow 等编排配置；非业务协作应用。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3595 | [Beelzebub](https://github.com/beelzebub-labs/beelzebub) | 商业或许可边界待核 | 安全团队收集受控诱饵交互，接入既有日志和调查流程。 | 团队跨环境协调在托管 Platform；不保证发现所有注入，GPL。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3603 | [Gondolin](https://github.com/earendil-works/gondolin) | 工程组件另列 | 工程团队统一文件、网络和凭据代理边界，复用本地执行环境。 | krun experimental；虚拟机资产首次下载，边界仍需正确策略配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3602 | [FOLib](https://github.com/BoCloud/folib) | 商业或许可边界待核 | 平台团队统一模型与依赖仓库、同步分发及 MCP 查询入口。 | GPL 描述同时附禁止商业售卖条款，采用前需核对，不称纯标准 GPL。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3617 | [Jar-Analyzer](https://github.com/jar-analyzer/jar-analyzer) | 团队直接性不足 | 安全与研发共用调用链和本地分析证据，AI/MCP 辅助查询大代码库。 | 纯分析可离线，外部 AI 调用数据边界另计，漏洞发现未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3626 | [Apache Ossie](https://github.com/apache/ossie) | 工程组件另列 | 数据与业务团队用一致 KPI 和语义定义连接 BI 与 AI 工具。 | 规范非完整分析产品，不保证所有生态已实现互操作。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3638 | [NannyML](https://github.com/NannyML/nannyml) | 保留待深核 | 数据科学与运维团队共用模型退化和漂移信号，支持上线后的排错。 | 估计有前提且不是实际标签指标保证，不是所有 LLM 任务通用监控。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3637 | [open-kritt](https://github.com/Kritt-ai/open-kritt) | 团队直接性不足 | 安全与开发团队把聚焦分析合并去重，按验证结果安排修复。 | 专业研究平台，历史赏金和检测能力未独立验证；AGPL。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3642 | [A2A Python SDK](https://github.com/a2aproject/a2a-python) | 工程组件另列 | 工程团队统一跨服务代理通信，复用数据库与追踪集成。 | SDK 版本不等于所有协议版本兼容；非真人任务管理平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3649 | [AXI](https://github.com/kunchenguid/axi) | 方法技能另列 | 工具团队统一可发现、低噪声接口，降低跨工具自动化维护成本。 | 方法与生态目录，第三方适配器独立；基准未复现。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3655 | [Stop That Shit](https://github.com/lennney/stop-that-shit) | 方法技能另列 | 团队可统一只审不改、最小修复和证据充分即停止等交付约定。 | Guard 返回拒绝不等于宿主已执行拦截；隔离仍由宿主 sandbox 负责。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3657 | [Autensa](https://github.com/crshdn/mission-control) | 保留待深核 | 产品与工程团队审核计划、查看任务进度和构建经验，再接入 PR 流程。 | 有计划审阅与任务/PR 流程，但当前根文档未充分确认真人成员权限、组织共享边界；暂不因控制台存在就优先推荐为多人平台。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3664 | [DingTalk OpenClaw Connector](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector) | 工程组件另列 | 团队在现有群聊、待办和日程中使用代理，配置私聊/群聊访问范围。 | 按用户身份执行获授权限；Coming Soon 项目不算已实现，依赖 OpenClaw。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3674 | [GitHub Copilot App](https://github.com/github/app) | 商业或许可边界待核 | 研发团队把 issue、计划、代理进度和 PR 检查集中到同一工作台。 | 应用发布/反馈仓非完整开源代码保证；云端、账号与 BYOK 路径不同。 发布/反馈仓声明 All rights reserved，不能视为完整开源产品。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 005 | 3683 | [FIT Framework](https://github.com/ModelEngine-Group/fit-framework) | 工程组件另列 | 研发团队共用函数引擎和流程原语，将既有业务系统接入 AI。 | 标题为 SNAPSHOT，兼容与分布式自动部署宣传未实测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3684 | [GenAI Processors](https://github.com/google-gemini/genai-processors) | 工程组件另列 | 工程团队复用统一内容模型和流式处理组件，降低代理数据链路重复代码。 | 开发库非完整代理平台，模型调用服务独立。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3690 | [Kubernetes MCP Server by containers](https://github.com/containers/kubernetes-mcp-server) | 工程组件另列 | 运维团队复用资源、日志和指标接口，将代理接入现有集群工具链。 | 默认功能包含写操作，应配置只读或禁用破坏工具；实际权限取决于集群身份。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3714 | [Agentset](https://github.com/agentset-ai/agentset) | 保留待深核 | 团队集中管理文档接入、检索、评估和应用交付。 | 托管与自建范围需分别确认，多租户隔离未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 005 | 3724 | [docext](https://github.com/NanoNets/docext) | 团队直接性不足 | 数据与业务团队比较解析方案，生成可复核 Markdown 和字段结果。 | 工具包非完整多人档案系统，模型权重与代码许可分别适用。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 005 | 3728 | [Skybridge](https://github.com/alpic-ai/skybridge) | 工程组件另列 | 工程团队共用工具契约、本地模拟和 UI 组件，构建可交互 AI 应用。 | Alpic 托管分析与商店服务独立，自建支持 Node，不保证所有宿主完全一致。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3735 | [AI Red Teaming Playground Labs](https://github.com/microsoft/AI-Red-Teaming-Playground-Labs) | 方法技能另列 | 安全团队可用共同练习学习评估流程与失败模式。 | 教学环境并非防护产品；未运行攻击练习或证明当前模型行为。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 005 | 3745 | [Agent Safehouse](https://github.com/eugene1g/agent-safehouse) | 工程组件另列 | 团队复用拒绝优先策略，按开发环境配置文件和工具访问。 | macOS 专用加固层非完美攻击隔离；关联 worktree 默认可读，规则快照不实时更新。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 005 | 3754 | [llmwiki](https://github.com/atomicstrata/llm-wiki-compiler) | 方法技能另列 | 团队用统一类型、证据和人工队列维护手册、决策与研究知识。 | 适合可持续审阅知识，不适合高变动信息洪流；自动合成仍需核对。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 3758 | [superglue](https://github.com/superglue-ai/superglue) | 商业或许可边界待核 | 业务与工程团队共用数据映射、迁移和代理访问层，减少手动集成。 | 平台 FSL、SDK MIT；效率与自动迁移效果未测，重要业务数据需人工验证。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3776 | [Future AGI](https://github.com/future-agi/future-agi) | 商业或许可边界待核 | 研发团队集中调查失败、比较评估与运行记录，形成改进闭环。 | nightly 早期测试版，Kubernetes/Helm 和 Marketplace 尚未来，SDK 分仓许可独立。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3788 | [Languine](https://github.com/languine-ai/languine) | 团队直接性不足 | 产品与开发团队复用翻译配置，接入项目与发布流水线。 | 需开启 Deployment Protection，否则 API key 可公开；新自建用 selfhosted 标签，latest 仍旧版。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3807 | [Ui.Vision RPA](https://github.com/A9T9/RPA) | 团队直接性不足 | 业务与 QA 团队复用宏和脚本，连接 AI 定位与可验证自动化。 | 浏览器自动化不等于多人调度治理，附加模块与运行条件需分别确认。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3813 | [Spotify Portal AI Plugins](https://github.com/spotify/portal-ai-plugins) | 商业或许可边界待核 | 平台团队将服务归属、故障信息和操作入口提供给编码助手。 | 依赖 Spotify Portal 和认证；Shunt 当前仅面向 Claude，不是独立开放服务目录。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3824 | [Azure DevOps MCP](https://github.com/microsoft/azure-devops-mcp) | 工程组件另列 | 研发团队可在助手中读取项目任务、代码、构建和测试上下文。 | 工具名存在合并改名的兼容性变动；权限沿用所连接 DevOps 服务。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 3830 | [Google Ads + Meta Ads + GA4 MCP](https://github.com/irinabuht12-oss/google-meta-ads-ga4-mcp) | 商业或许可边界待核 | 营销团队统一查询广告表现、归因和活动配置。 | 文档接入的是 Ryze 托管服务，不能据 MIT 标记推定服务端可完整自托管；含修改广告的工具，未调用。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3840 | [LangGraph4j](https://github.com/langgraph4j/langgraph4j) | 工程组件另列 | Java 团队可统一构建有状态代理流程，并集成 Spring AI 或 LangChain4j。 | 受 LangGraph 启发的独立实现；实验功能与稳定分支需区分。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 3846 | [TokenCost](https://github.com/AgentOps-AI/tokencost) | 团队直接性不足 | 工程团队可在应用和评测中统一统计预计模型成本。 | 估算不是供应商账单；价格表时效和分词误差需单独确认。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3853 | [ContextGem](https://github.com/shcherbak-ai/contextgem) | 工程组件另列 | 文档处理团队可标准化抽取字段并追溯段落、句子来源以便复核。 | 是抽取开发框架，不是自带多人审阅权限的成品。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 3852 | [Agentic Security](https://github.com/msoedov/agentic_security) | 团队直接性不足 | AI 安全团队可复用模型接口扫描、攻击数据集及测试流程。 | 强化学习攻击同时出现在未来路线图中，不作为已核实能力；没有执行攻击或验证安全效果。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3854 | [Notte](https://github.com/nottelabs/notte) | 商业或许可边界待核 | 自动化团队可将确定性脚本与代理组合成可复用网页流程。 | SSPL v1；凭据保险库、托管会话等列在 API 服务部分，不能全算作本地核心能力。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3860 | [Langchain.rb](https://github.com/patterns-ai-core/langchainrb) | 工程组件另列 | Ruby 团队可以统一模型调用和检索组件，复用 AI 应用基础能力。 | Rails 深度集成另有 gem；SDK 不自带多人权限。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 3863 | [Elyra](https://github.com/elyra-ai/elyra) | 保留待深核 | 数据科学团队可复用流水线和代码片段，通过 Git 与远程运行统一实验流程。 | 调试器标为实验功能，AI Assistant 需额外配置；dev 镜像可能含未发布功能。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 3868 | [Featureform](https://github.com/featureform/featureform) | 保留待深核 | 团队集中管理可复用特征、训练集、归属与血缘，减少重复建设。 | 计算由已有数据基础设施执行；具体治理功能部署要求未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 3876 | [LLM Agents Nix](https://github.com/numtide/llm-agents.nix) | 方法技能另列 | 团队可通过统一 Nix 包定义减少编码代理环境差异。 | 打包不赋予上游开源许可，包含 unfree 二进制；不是代理协作平台。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 3888 | [LocalAGI](https://github.com/mudler/LocalAGI) | 工程组件另列 | 通过 Slack、GitHub Issues 等连接器把本地代理和知识库接入团队流程。 | 本地运行不自动保证连接外部工具后的数据不外流；代理组不等于成员权限。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 3890 | [Comp AI](https://github.com/trycompai/comp) | 商业或许可边界待核 | 合规团队集中整理证据、政策和控制实施任务。 | AGPL 核心与商业 /ee 分开；Docker/Vercel 部署步骤仍写 coming soon，不能保证认证结果。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3903 | [Semantic Segmentation Editor](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) | 团队直接性不足 | 标注团队可统一处理二维图像和三维点云训练数据。 | 文档技术栈较旧；未证明多人权限或任务分派，属于数据生产工具。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3929 | [MCP Memory Service](https://github.com/doobidoo/mcp-memory-service) | 团队直接性不足 | 团队可复用跨代理上下文、决策记忆，并按文档配置远程认证与同步。 | 迁移提示与当前仓 URL 同名，不能据此判定停更；性能宣传未验证，嵌入维度配置需一致。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3947 | [kubewall](https://github.com/kubewall/kubewall) | 团队直接性不足 | 运维团队统一查看集群、日志和配置，并使用模型辅助排障。 | 调用外部模型时不能泛称数据始终本地；浏览器访问不等于已具备团队 RBAC。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3960 | [YoMo](https://github.com/yomorun/yomo) | 工程组件另列 | 平台团队可统一部署和管理代理工具，复用跨区域运行基础设施。 | 性能与安全效果未实测；不是业务团队协作界面。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 3963 | [Appllama Skills](https://github.com/Appllama/appllama-skills) | 方法技能另列 | 移动团队可统一设计研究、界面实现和模拟器验收标准。 | 依赖 Appllama 设计库/MCP；技能许可不等于素材和品牌授权。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 3970 | [LLM Space](https://github.com/deer-flow/llm-space) | 团队直接性不足 | 代理开发团队可版本化提示与工具，回放失败记录并比较运行表现。 | 本地桌面工作台，未证明多人同步；默认存在可退出的匿名遥测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3973 | [Harness Anything](https://github.com/yb2460/harness-anything) | 团队直接性不足 | 办公及研究团队可复用文档、表格、演示稿和文献处理流程。 | Office 操控依赖 COM 和对应桌面软件；不是多人在线编辑平台。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 3974 | [Valqore](https://github.com/valqore/valqore) | 工程组件另列 | 平台与治理团队可在 CI 检查基础设施策略，并输出代理治理证据。 | AI 模型镜像需单独许可；规则通过不等于法定合规或真实安全保证。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 3978 | [Diffgram](https://github.com/diffgram/diffgram) | 商业或许可边界待核 | 数据团队统一管理标注、预测和人工监督流程。 | 自定义 DLv2 商业许可；文档/HTML/DICOM 标为路线图，fak/DOS 是另仓。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3980 | [Databricks AI Dev Kit](https://github.com/databricks-solutions/ai-dev-kit) | 商业或许可边界待核 | 数据工程团队可复用 Databricks 开发模式和官方代理技能入口。 | 受 Databricks License 约束；Genie Code 平台功能不等于本仓实现。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 3983 | [fastdup](https://github.com/visual-layer/fastdup) | 商业或许可边界待核 | 视觉团队可统一清洗分析训练素材，减少数据质量问题。 | 当前 README 标注 CC BY-NC-ND 4.0；不能因宣传 open-source 就假定商业使用和修改自由。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4006 | [Microsoft Learn MCP](https://github.com/MicrosoftDocs/mcp) | 团队直接性不足 | 团队编码助手可使用统一官方资料来源，减少过时 API 上下文。 | 不能保证消除幻觉或供应链风险；仓库接入说明不等于完整服务实现。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4009 | [BuildingAI](https://github.com/BidingCC/BuildingAI) | 保留待深核 | 团队可复用知识库、模型接入和用户计费后台构建企业应用。 | 有用户注册、会员和计费，但不足以确认团队共同编辑、组织角色或共享资产边界；保留进一步核验。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4013 | [Hermes Paperclip Adapter](https://github.com/NousResearch/hermes-paperclip-adapter) | 团队直接性不足 | 使用 Paperclip 的团队可统一任务唤醒、代理会话和技能资源。 | 需 Hermes 与 Paperclip；employee 指代理，非独立人事协作产品。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4026 | [MatrixOne](https://github.com/matrixorigin/matrixone) | 工程组件另列 | 数据团队可隔离试验数据分支、追溯变更，并为 RAG 提供搜索底座。 | 行业首创、零开销等宣传未验证；数据库基础设施而非协作界面。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4036 | [AutoChain](https://github.com/Forethought-Technologies/AutoChain) | 保留待深核 | 开发团队可复用场景回归，减少手工对话验收。 | 模拟对话不等于真实用户效果；需集成业务工具。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4057 | [NVIDIA Video Search and Summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) | 商业或许可边界待核 | 视觉与运营团队可复用视频检索、事件分析和报告架构。 | 本地 NIM 需相应开发许可；仓库 Apache 与资产、服务许可分开。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4061 | [Sourcery](https://github.com/sourcery-ai/sourcery) | 商业或许可边界待核 | 研发团队在 PR 入口获得自动审阅反馈，辅助人工 review。 | 服务接入仓不证明审阅引擎开源；私有仓需付费方案，代码片段会送模型服务。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4071 | [Jido](https://github.com/agentjido/jido) | 工程组件另列 | Elixir 团队可将代理流程纳入已有监督与容错架构。 | 框架组件，具体持久化/租户隔离需配置验证；多代理非多人。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4078 | [VibeKit](https://github.com/superagent-ai/vibekit) | 团队直接性不足 | 研发团队可复用 Docker 隔离、敏感数据脱敏与运行追踪。 | 零风险宣传不能视为保证；隔离和脱敏效果未测，模型联网取决于代理。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4093 | [AI Code Review GitLab](https://github.com/sunmh207/AI-Codereview-Gitlab) | 商业或许可边界待核 | 研发团队在合并/提交时获得审阅记录，并把结果同步到团队通讯工具。 | 开源与 Pro 功能需区分；Task Flow 为另一个推荐项目，提交统计不能代表个人绩效。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4091 | [GPTDiscord](https://github.com/Kav-K/GPTDiscord) | 团队直接性不足 | 社区或团队可在 Discord 中使用知识问答、内容管理及分析入口。 | 依赖外部模型和服务；文档提及迁移及待完成 assistant 支持，未验证兼容性。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4089 | [AnySearch MCP](https://github.com/anysearch-ai/anysearch-mcp-server) | 工程组件另列 | 团队研究代理可复用统一搜索和批量信息采集接口。 | 匿名模式有更低限额；依赖远程搜索服务，未注册账号或调用写接口。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4097 | [pg-aiguide](https://github.com/timescale/pg-aiguide) | 方法技能另列 | 数据库团队可统一按版本查官方文档和使用 PostgreSQL 工程规范。 | 扩展文档从 TimescaleDB 开始，其余不能按规划视为已支持。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4104 | [kordoc](https://github.com/chrisryugj/kordoc) | 团队直接性不足 | 处理韩国公文的团队可统一 HWP/HWPX、PDF 和 Office 文档流程。 | 审批栏生成不等于真实审批流；格式兼容和提取质量未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4120 | [Byzer-lang](https://github.com/byzer-org/byzer-lang) | 工程组件另列 | 数据团队可复用统一语言编排数据与 AI 处理。 | Notebook/GUI 为另仓；本项目主要是语言引擎。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4122 | [Responsible AI Toolbox](https://github.com/microsoft/responsible-ai-toolbox) | 保留待深核 | 模型开发与业务团队可围绕统一评估视图审阅模型行为和群体差异。 | Tracker/GenBit 是关联仓库；评估界面不保证伦理或法规合规。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4123 | [NullHub](https://github.com/nullclaw/nullhub) | 团队直接性不足 | 运维团队可集中查看代理实例、任务队列、日志和升级回滚。 | 管理本地生态组件，不代表完整真人团队权限或集群平台。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4127 | [Stripe AI](https://github.com/stripe/ai) | 工程组件另列 | AI 产品团队可复用 token 计量、计费集成和 Stripe 工程技能。 | Stripe 托管服务与 SDK 分开；不执行支付或账单写操作。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4139 | [Monoscope](https://github.com/monoscope-tech/monoscope) | 商业或许可边界待核 | 运维团队统一分析日志、指标与追踪，并定时汇总异常。 | AGPL；自托管认证/SSO 需自行配置，不等同云版内置能力。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4152 | [Mellea](https://github.com/generative-computing/mellea) | 工程组件另列 | 工程团队可复用类型化模型调用和验证规则，提升流程可测试性。 | 格式和要求检查不能保证语义事实正确，非团队界面。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4156 | [tRPC-Agent-Go](https://github.com/trpc-group/trpc-agent-go) | 工程组件另列 | Go 工程团队可统一代理服务的状态、工具协议、评测和运行追踪。 | 生产级/功能等价宣传未实测；代码执行能力需按部署边界配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4159 | [Underthesea](https://github.com/undertheseanlp/underthesea) | 工程组件另列 | 越南语产品团队可复用语言处理与代理调用组件。 | 零依赖描述针对代理 HTTP 客户端，不应推广到所有 NLP 功能；不是多人平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4160 | [SkillsBench](https://github.com/benchflow-ai/skillsbench) | 团队直接性不足 | 团队可在共同任务集上比较技能效果和代理行为。 | 基准成绩不代表业务效果；部分任务需云凭据和 GPU。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4170 | [Babysitter](https://github.com/a5c-ai/babysitter) | 团队直接性不足 | 研发团队可统一代理交付流程和验收关口，保留运行证据。 | 无幻觉、绝对服从等表述未验证；运行边界依赖具体 harness。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4192 | [Stakpak](https://github.com/stakpak/agent) | 团队直接性不足 | 运维团队可复用基础设施代码、故障诊断和部署流程，并保留人工介入。 | 防止危险操作的有效性未测；自动审批和工具配置影响边界。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4197 | [Timefold Solver](https://github.com/TimefoldAI/timefold-solver) | 商业或许可边界待核 | 团队可优化排班、任务分配和资源计划。 | 社区 Apache 与专有 Enterprise 分开；是传统优化 AI，不应标生成式 ai-native。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4200 | [airda](https://github.com/hitsz-ids/airda) | 团队直接性不足 | 分析团队可复用业务知识与 SQL 生成，辅助查找表和分析数据。 | 语料库未完成；自调试及精准检索效果未验证，多代理非多人。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4205 | [Beta9 / Beam](https://github.com/beam-cloud/beta9) | 保留待深核 | 平台团队可复用容器调度、GPU、存储和弹性推理端点。 | Beam 托管快速入门与自有基础设施分开；冷启动性能未测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4208 | [MCP Brasil](https://github.com/Mcp-Brasil/mcp-brasil) | 工程组件另列 | 巴西研究、数据和运营团队可统一检索多部门公开数据。 | 独立非政府项目；MIT 仅代码，数据源许可与可接受使用规则另行适用。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4220 | [AiEditor](https://github.com/aieditor-team/AiEditor) | 商业或许可边界待核 | 团队可在知识库、CMS 和业务系统中复用 AI 编辑能力。 | Pro 专业分页等与核心分开；README 未明确具体许可证，商业授权需查 LICENSE。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4223 | [Anyquery](https://github.com/julien040/anyquery) | 工程组件另列 | 团队可给助手统一访问分散业务数据的接口。 | 核心 AGPL、RPC MIT、插件各自许可；Atlas Cloud 广告不等于引擎自带全部模型。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4230 | [SymbolicAI](https://github.com/ExtensityAI/symbolicai) | 工程组件另列 | AI 工程团队可复用语义操作与带约束的数据模型。 | 契约校验不保证所有语义正确性；属于开发框架。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4246 | [Claude Agent SDK TypeScript](https://github.com/anthropics/claude-agent-sdk-typescript) | 商业或许可边界待核 | 团队可将代码理解、文件操作和命令执行集成到内部服务。 | 受 Anthropic 商业服务条款约束，不能默认整套 MIT；运行权限需自行配置。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4263 | [Spectrum](https://github.com/photon-hq/spectrum-ts) | 保留待深核 | 团队可把代理能力接入 Slack、Discord、邮件等现有沟通入口。 | iMessage 等托管基础设施独立于 MIT SDK；渠道部署要求未测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4270 | [LLM Sherpa](https://github.com/nlmatics/llmsherpa) | 工程组件另列 | 知识工程团队可保留章节层级与段落上下文，统一文档切分。 | 后端另仓；官方提示免费/付费服务器代码未更新，建议自建。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4276 | [Grounded Docs MCP Server](https://github.com/arabold/docs-mcp-server) | 保留待深核 | 工程团队可统一提供库版本资料和内部文件上下文给助手。 | 索引不保证消除幻觉；模型和数据流配置需单独核实。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4281 | [Blitz](https://github.com/blitzdotdev/blitz-mac) | 团队直接性不足 | 移动团队可统一截图、版本、内购和送审准备。 | 需 Apple 权限和 macOS；含发布写操作，本次未执行；不保证审核速度。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4308 | [Google ADK Java](https://github.com/google/adk-java) | 工程组件另列 | Java 团队可复用工具集成、开发调试和 A2A 互操作。 | Evaluate Agents 段明确 coming soon，不能把概述中的评测视为完整已交付。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4321 | [roborev](https://github.com/kenn-io/roborev) | 团队直接性不足 | 研发团队可在每次提交后发现问题并将审阅结果带回修复循环。 | 通过代理复审不等于代码无缺陷；本地连续审阅组件。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4325 | [Zilla](https://github.com/aklivity/zilla) | 商业或许可边界待核 | 平台团队可统一代理工具端点、身份授权与遥测。 | Aklivity Community License 限制独立商业托管；高级 OAuth 和共享状态属 Plus。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4334 | [Context Engineering Kit](https://github.com/NeoLabHQ/context-engineering-kit) | 方法技能另列 | 研发团队可统一规格、审阅和推理验证流程。 | 100% 可用及科学证明为作者自述，未验证；插件非强制系统隔离。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4339 | [UUSEC WAF](https://github.com/Safe3/uusec-waf) | 商业或许可边界待核 | 安全运维团队可用于网站/API 流量防护和规则管理。 | 防零日、低误报为项目自述，未测试；免费描述不证明完整源码与宽松许可。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4347 | [Motion Design Skill](https://github.com/LottieFiles/motion-design-skill) | 方法技能另列 | 设计研发团队可统一动画节奏、交互反馈和验收标准。 | 指导资料不等于自动保证视觉质量，未安装技能。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4350 | [LLPhant](https://github.com/LLPhant/LLPhant) | 保留待深核 | PHP 团队可在 Laravel/Symfony 应用复用模型和检索组件。 | 开发库不是协作成品，具体后端支持需按版本验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4363 | [BigSet](https://github.com/tinyfish-io/bigset-oss) | 团队直接性不足 | 研究和运营团队可生成可导出表格，重复刷新公开来源。 | 明确实验性、依赖 TinyFish API；SQL 查询仍在路线图，完整性未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4395 | [Evalite](https://github.com/mattpocock/evalite) | 保留待深核 | TypeScript 团队可统一 LLM 应用评测工具链。 | 根 README 功能说明很少，未据品牌补写 CI、评分器或多人能力。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4398 | [Lumentis](https://github.com/hrishioa/lumentis) | 团队直接性不足 | 团队可将会议记录和零散材料整理成可浏览的知识文档。 | PDF、自动转写、文件夹和持续更新列在 coming soon，不能算现成功能。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4403 | [Pentest-AI](https://github.com/0xSteph/pentest-ai) | 团队直接性不足 | 安全研发团队可审阅可回放证据，并把结果接入 CI/工程报告。 | 验证裁决不代表完整安全；外部模型/scanner/OOB 数据流另算，未执行。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4408 | [LOTUS](https://github.com/lotus-data/lotus) | 工程组件另列 | 数据团队可统一大规模提取、筛选、归并和代理日志分析。 | 准确率与成本优势未实测，需模型及运行环境。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4417 | [AutoSci](https://github.com/skyllwt/AutoSci) | 团队直接性不足 | 研究团队可复用读论文、实验、写作和跨项目知识积累流程。 | 完整论文系统位于 paper 分支；main Claude 版本与 Codex/OpenCode preview 不可混写。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4420 | [Google Gen AI JavaScript SDK](https://github.com/googleapis/js-genai) | 工程组件另列 | 应用团队可统一模型接口和工具调用集成。 | 预告自动函数调用及 Node 支持变化；SDK 不包含托管模型或组织协作界面。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4428 | [LabelU](https://github.com/opendatalab/labelU) | 团队直接性不足 | 标注团队可统一图像、视频、音频数据生产，并批量应用预标注。 | 模型服务与 GPU 需另部署，成员权限未在本次段落中核实。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4431 | [Paddler](https://github.com/intentee/paddler) | 工程组件另列 | 产品和 LLMOps 团队可集中提供推理、弹性实例与监控。 | agent 指服务节点；自托管不自动满足合规或成本承诺。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4433 | [Mantis](https://github.com/google/mantis) | 团队直接性不足 | 安全团队可复用分析/修复方法与验证流程。 | 仅受限隔离环境试验；生成漏洞和补丁需专家核验，本次未执行。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4436 | [nao](https://github.com/getnao/nao) | 商业或许可边界待核 | 数据团队维护上下文和评测，业务用户通过聊天可视化并反馈答案。 | LICENSE 指定带 @license Enterprise 标记的文件适用商业订阅条款；不能整仓标标准 Apache，需进一步区分团队功能落在哪些文件。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4439 | [Open Science Desktop](https://github.com/ai4s-research/open-science) | 团队直接性不足 | 研究团队可将实验、图表、报告与执行记录串为可复核工作流。 | 桌面本地为主，不直接证明多人账户；第三方技能许可独立，审批可被改为全自动。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4452 | [Ragbits](https://github.com/deepsense-ai/ragbits) | 保留待深核 | AI 工程团队可统一解析、检索和模型调用，并扩展批量入库流程。 | 多代理角色不等于真人协作；需外部存储和模型配置。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4461 | [Blume](https://github.com/haydenbleasel/blume) | 团队直接性不足 | 文档团队统一发布供人和代理使用的资料。 | 核心为静态文档生成；可选/托管 AI 功能需独立配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4468 | [Testkube](https://github.com/kubeshop/testkube) | 商业或许可边界待核 | 工程团队可统一测试运行、结果与排障，把测试接入代理流程。 | 本仓 MIT agent；跨集群控制台、SSO/SCIM、团队 RBAC 等属于控制平面。 Testkube AI 的工作流生成、失败分析、修复 PR 也列在商业控制平面。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4480 | [Callstack Agent Skills](https://github.com/callstackincubator/agent-skills) | 方法技能另列 | 移动团队统一性能、导航、CI 测试与迁移评估方法。 | 部分测试/设备技能来自关联仓；技能建议不保证上线质量。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4489 | [Agent Flow](https://github.com/patoles/agent-flow) | 团队直接性不足 | 研发团队可检查代理执行路径与耗时，辅助调试和审阅。 | 读取事件流，不是查看模型内部思维；无真人协作权限证明。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4492 | [LLM Gateway](https://github.com/theopenco/llmgateway) | 商业或许可边界待核 | 平台团队可统一模型调用入口与费用观测。 | 核心 AGPL；团队组织管理在企业版，多组织管理需 white-label 许可。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4490 | [Agentic Coding Flywheel Setup](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup) | 方法技能另列 | 团队可统一 VPS 开发环境和工具配置，减少环境漂移。 | 部分模块仍 TODO；vibe 模式跳过权限，不应默认适合共享生产环境，未安装。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4499 | [Hugging Face AI Sheets](https://github.com/huggingface/aisheets) | 团队直接性不足 | 数据与运营团队可用表格方式批量整理和增强数据。 | 共享部署不等于实时多人编辑；推理服务或本地模型需配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4504 | [Lemmy](https://github.com/badlogic/lemmy) | 工程组件另列 | 工程团队可复用模型适配、对话序列化和工具拦截基础能力。 | 开发组件集合，未证明多人权限；red-teaming 是示例。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4509 | [Headcount](https://github.com/cbrock84/headcount) | 方法技能另列 | 团队可按部门复用需求、销售支持、安全和交付管理工作规范。 | 虚拟部门不是实际员工协作系统；专业建议仍需人工复核。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4512 | [ROSA](https://github.com/nasa-jpl/rosa) | 工程组件另列 | 机器人研发团队可复用 ROS 查询与工具交互入口。 | IsaacSim 扩展仍 coming soon；未运行机器人或验证控制安全。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4521 | [Adala](https://github.com/HumanSignal/Adala) | 团队直接性不足 | 数据团队可用标准标注和输出约束迭代批量处理任务。 | 独立服务及 Label Studio 教程仍 coming soon；不因同属 HumanSignal 就视为已完整集成。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4527 | [Telegram MCP](https://github.com/chigwell/telegram-mcp) | 工程组件另列 | 团队助手可检索沟通历史与群上下文，辅助整理信息。 | 工具层限权不降低 Telegram 会话本身权限；含发消息与管理写操作，本次未调用。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4530 | [MuseBot](https://github.com/yincongcyincong/MuseBot) | 团队直接性不足 | 团队可在飞书、钉钉、企微、Slack 等入口使用统一 AI 回复。 | 需各平台身份配置；多渠道不等于组织级知识隔离。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4537 | [n8n AI Automations](https://github.com/lucaswalter/n8n-ai-automations) | 方法技能另列 | 营销团队可复用通讯稿、图片和视频制作，并在 Slack 进行审阅。 | 模板依赖 n8n 与付费 API；不代表完整营销团队替代，未导入执行。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4544 | [AI Manus](https://github.com/Simpleyyt/ai-manus) | 团队直接性不足 | 团队可部署通用代理入口，查看或接管任务并复用交付附件。 | K8s/Swarm 集群和移动/Windows 控制仍规划；登录不证明细粒度组织隔离。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4545 | [MCP Tools](https://github.com/f/mcptools) | 工程组件另列 | 集成团队可统一测试客户端/服务端和调试工具接口。 | 工具调用可能有副作用；协议调试工具不构成完整访问治理。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4552 | [Pixeltable](https://github.com/pixeltable/pixeltable) | 工程组件另列 | AI 团队可在统一代码中审阅数据处理、检索和服务定义。 | 云服务有限 Beta；MCP/skill 另仓，运行资源仍需部署。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4558 | [Ryze Marketing Skills](https://github.com/irinabuht12-oss/marketing-skills) | 方法技能另列 | 营销团队可统一广告诊断和内容优化方法。 | 依赖托管连接器，不是独立广告数据服务；外链技能总数与仓库数量不应混用。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4555 | [Hivemind](https://github.com/activeloopai/hivemind) | 商业或许可边界待核 | 工程师的代理经验可在团队工作空间内检索和复用。 | 默认云后端；同工作空间所有用户可读捕获数据，支持退出采集；BYOC 不等于整个控制服务本地。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4572 | [LocalVocal](https://github.com/royshil/obs-localvocal) | 团队直接性不足 | 内容与直播团队可在本地生成字幕及翻译，复用现有 OBS 流程。 | 不是会议协作平台；语言质量和性能未测，模型需另获取。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4571 | [MCP PHP SDK](https://github.com/modelcontextprotocol/php-sdk) | 工程组件另列 | PHP 团队可复用工具、资源、会话和授权协议实现。 | 首个 major 前仍 experimental；新贡献 Apache、既有代码 MIT。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4585 | [RuleGo](https://github.com/rulego/rulego) | 工程组件另列 | 工程团队可复用可动态配置的业务规则与数据编排。 | 通用规则引擎；Tpclaw 和审批 GFlow 为关联产品，不全属于核心。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4589 | [Hope Agent](https://github.com/shiwenwen/hope-agent) | 团队直接性不足 | 可通过飞书文档、多维表格、知识库等工具协助团队业务操作。 | 总体仍定位个人代理；跨端同一会话不等于多人权限，云模式需配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4591 | [llm-chain](https://github.com/sobelio/llm-chain) | 工程组件另列 | Rust 团队可复用 LLM 应用基础组件。 | 模型示例较早；不等同完整 LLMOps 管理平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4597 | [mcp-remote](https://github.com/punkpeye/mcp-remote) | 工程组件另列 | 团队可让旧客户端接入统一远程 MCP 服务。 | 原生支持远程认证的客户端可不需要此桥；旧客户端兼容说明需按版本确认。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4599 | [ktx](https://github.com/Kaelio/ktx) | 团队直接性不足 | 数据团队可沉淀统一指标和 wiki 知识，减少代理重复探索数仓。 | 效果依赖数据和上下文质量，不能保证查询准确；非业务权限系统。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4607 | [Google Search Console MCP](https://github.com/AminForou/mcp-gsc) | 团队直接性不足 | SEO 团队可共用服务账号集成及索引、表现分析工具。 | GA4 与更高级一键接入属于另行托管版本；沿用 GSC 权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4610 | [MCP Language Server](https://github.com/isaacphi/mcp-language-server) | 工程组件另列 | 研发团队可使助手利用定义、引用、重命名及诊断信息。 | 需独立 language server；重命名可改文件，未执行。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4609 | [data.gouv.fr MCP](https://github.com/datagouv/datagouv-mcp) | 工程组件另列 | 研究数据团队可用统一入口查询数据集、资源、发布机构与许可。 | 服务器许可不替代各数据集条款；分析准确性未测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4614 | [MCP Server Kubernetes](https://github.com/Flux159/mcp-server-kubernetes) | 工程组件另列 | 运维团队可把集群上下文和管理能力接入助手。 | non-destructive 仍允许创建/更新，不等于只读；权限取决于 kubeconfig。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4617 | [Dory](https://github.com/Augani/dory) | 团队直接性不足 | 工程团队可统一本地运行环境及代理执行边界。 | 当前仅 Apple Silicon 已验证，Intel 待硬件验证；GPL，隔离效果未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4630 | [dsRAG](https://github.com/D-Star-AI/dsRAG) | 工程组件另列 | 知识工程团队可复用复杂文档检索和上下文组织。 | benchmark 高准确率不代表所有业务语料；框架不带成员权限。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4632 | [DataProfiler](https://github.com/capitalone/DataProfiler) | 工程组件另列 | 数据治理团队可统一 schema、统计特征和 PII/NPI 检测。 | reports 精简安装禁用默认敏感数据识别；检测不能保证无遗漏。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4639 | [Gortex](https://github.com/zzet/gortex) | 团队直接性不足 | 研发团队可追踪跨服务引用、变更影响与 PR 审阅依据。 | 语言支持按不同解析层次区分；token 倍数与解析正确性未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4637 | [MiniMax MCP](https://github.com/MiniMax-AI/MiniMax-MCP) | 工程组件另列 | 内容团队可在代理流程中复用多媒体生成接口。 | 依赖模型 API 和对应区域凭据；较新额外能力推荐 CLI，不全在本服务器。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4644 | [HarnessRouter](https://github.com/HarnessRouter/harnessrouter) | 工程组件另列 | 产品团队可替换编码后端，统一任务进度、产物、取消和错误处理。 | 社区 Apache 不替代安装的上游 CLI 条款；成本/性能依任务。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4647 | [MemoryOS](https://github.com/BAI-LAB/MemoryOS) | 团队直接性不足 | 开发团队可复用存储、更新、检索和生成的记忆组件。 | 主要针对个性化代理；研究基准不保证组织知识治理，详细文档有待补充。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4652 | [CVE MCP Server](https://github.com/mukul975/cve-mcp-server) | 工程组件另列 | 安全团队统一关联 CVE、利用风险、补丁与情报来源。 | 风险分数是项目方法，不替代组织修复决策；部分来源需 key/注册。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4651 | [n8n-as-code](https://github.com/EtienneLescot/n8n-as-code) | 方法技能另列 | 自动化团队可版本化工作流、审阅差异和解决同步冲突。 | 独立社区项目；需匹配 n8n 节点 schema，第三方模板各自许可。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4654 | [d3k / dev3000](https://github.com/vercel-labs/dev3000) | 团队直接性不足 | 研发团队可向助手提供统一复现轨迹，减少前后端排障上下文割裂。 | 本地调试 runtime，不是多人观测服务；需 Node24+。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4657 | [Uber ADR](https://github.com/uber/ADR) | 保留待深核 | 企业安全团队可盘点员工代理、统一轨迹与检测评测。 | Prevention 与离线 Explorer 未公开，不能宣传本仓已提供完整阻断；生产使用为作者自述。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4656 | [Patchwork](https://github.com/patched-codes/patchwork) | 团队直接性不足 | 团队可把重复修复和 PR 审阅流程接入本地或 CI/CD。 | 核心 AGPL，自定义模板 Apache；安全/RAG flow 需可选依赖。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4663 | [OpenChoreo](https://github.com/openchoreo/openchoreo) | 保留待深核 | 平台团队定义组织边界与 golden paths，开发者和代理复用自助交付入口。 | 通用平台扩展到代理工作负载，不是仅靠 AI 自动交付；部署复杂度需评估。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4660 | [FuzzyAI](https://github.com/cyberark/FuzzyAI) | 工程组件另列 | 安全团队可复用自动化模型接口测试。 | 测试发现不保证安全，未运行攻击。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4670 | [AI Horde](https://github.com/Haidra-Org/AI-Horde) | 保留待深核 | 团队可私有部署，汇聚可动态加入的推理资源。 | 公共服务依志愿算力，非 SLA；公共 kudos 与私有部署分开，AGPL。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4672 | [Deep Agents JavaScript](https://github.com/langchain-ai/deepagentsjs) | 工程组件另列 | JS 团队可复用长任务执行基础能力与上下文管理。 | 根 README 是符号链接，已读取目标；peer dependency 版本需对齐，子代理非多人。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4679 | [Code-Mode Library](https://github.com/universal-tool-calling-protocol/code-mode) | 团队直接性不足 | 工程团队可统一工具调用接口并批量编排 API。 | Node isolates/VM 宣传不能等同强 OS 沙箱，性能基准未复现。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4683 | [Lemon AI](https://github.com/hexdocom/lemonai) | 商业或许可边界待核 | 团队可复用研究报告与分析产物，并进行人机反复修订。 | 自定义 Apache 附加限制；Docker 描述不证明独立强 VM，云模型启用后非零云依赖。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4695 | [Better Agents](https://github.com/langwatch/better-agents) | 方法技能另列 | 团队可以共同审阅提示版本、评测和工程目录规范。 | 生成 AGENTS.md 不保证代理行为；依赖 Scenario/LangWatch 等组件。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4697 | [Prismer Cloud](https://github.com/Prismer-AI/PrismerCloud) | 商业或许可边界待核 | 平台团队可复用代理上下文及跨会话经验。 | 托管能力与 MIT 接入代码边界未完整核实；Signet/LuminPulse 为另仓，不算本仓全量能力。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4707 | [Cookiy User Research Skill](https://github.com/cookiy-ai/user-research-skill) | 方法技能另列 | 产品研究团队可统一研究计划、访谈材料和证据报告。 | MIT 仅技能，执行依赖 Cookiy 服务；支持真人或合成参与者，不能全称真实用户。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4722 | [Agentic Commerce Protocol](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) | 保留待深核 | 电商产品团队可依据公共 schema/API 规范接入代理购买流程。 | Beta 协议，不是完整支付服务或商户系统；本次未执行交易。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4731 | [LitterBox](https://github.com/BlackSnufkin/LitterBox) | 团队直接性不足 | 安全团队可集中查看样本分析结果与关联告警。 | 部分分析需独立 Windows VM；检测分数不是安全保证，未上传样本或执行。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4735 | [Claude Hooks Multi-Agent Observability](https://github.com/disler/claude-code-hooks-multi-agent-observability) | 团队直接性不足 | 工程团队可检查并发代理运行事件和失败轨迹。 | 观察 hook 事件不等于完整内部推理或 OS 审计；代理编排非成员管理。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4741 | [RagBuilder](https://github.com/KruxAI/ragbuilder) | 团队直接性不足 | 团队可用共同测试集比较切分、检索配置并保存结果。 | 自动最优仅相对给定评测集，不保证生产质量。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4753 | [Qdrant MCP Server](https://github.com/qdrant/mcp-server-qdrant) | 工程组件另列 | 团队可统一部署远程语义记忆工具供代理使用。 | 需 Qdrant；共享端点不自动证明成员级数据权限。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4771 | [Mirascope](https://github.com/Mirascope/mirascope) | 保留待深核 | Python/TypeScript 团队可复用模型调用方式及输出结构。 | SDK 不提供模型托管或多人界面。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4775 | [DevOps AI Guidelines](https://github.com/VersusControl/devops-ai-guidelines) | 方法技能另列 | 运维管理者可复用组织落地规范与团队培训路径。 | 治理指南不是强制技术控制，独立事故产品只为赞助。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4780 | [Documind](https://github.com/DocumindHQ/documind) | 工程组件另列 | 团队可复用文档结构化模板与字段抽取。 | AGPL 与 Zerox 原 MIT 代码分开；托管版 Beta，抽取准确性未测。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4783 | [RocketMQ Rust MCP](https://github.com/mxsm/rocketmq-rust) | 工程组件另列 | 消息平台团队可把诊断和管理能力提供给 AI 助手。 | 非 Apache 官方实现；MCP 是整仓组件，未核验全部实现或生产兼容性。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4786 | [WebCodex](https://github.com/yyjeqhc/webcodex) | 团队直接性不足 | 工程团队可复用受项目授权约束的代码操作与人工差异审阅入口。 | 非 OpenAI 官方产品；临时 share 与长期部署分开，机器执行权限需配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4797 | [Data API Builder](https://github.com/Azure/data-api-builder) | 保留待深核 | 数据平台团队可把现有数据库统一提供给应用和 AI 助手。 | 需配置数据库与身份访问控制；不能把 endpoint 支持理解为完整 AI 应用。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4828 | [Pi MCP Adapter](https://github.com/nicobailon/pi-mcp-adapter) | 方法技能另列 | 团队可提交统一 .mcp.json，并减少每个会话加载的工具定义。 | 祖先配置发现边界不是文件所有权或符号链接沙箱；需信任项目配置。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4829 | [AVA](https://github.com/antvis/AVA) | 保留待深核 | 分析产品团队可复用自然语言查询、建议和可视化模块。 | 框架而非多人 BI 产品；分析结果需验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4836 | [Shadow](https://github.com/ishaan1013/shadow) | 团队直接性不足 | 研发团队可将任务转换为分支、提交与可审阅 PR，保留仓库上下文。 | 隔离及自动清理需实际部署验证；不是自动正确代码保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4834 | [Pentest Copilot](https://github.com/bugbasesecurity/pentest-copilot) | 团队直接性不足 | 安全团队可复用授权测试的任务与结果分析工作流。 | 自动执行不代表安全或结果可靠；未连接目标或运行攻击。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4843 | [MCP Swift SDK](https://github.com/modelcontextprotocol/swift-sdk) | 工程组件另列 | Apple 平台团队可复用协议工具、资源与授权集成。 | README 所称 latest 仅其声明版本，不保证协议全局最新；新旧贡献许可不同。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4842 | [botmux](https://github.com/deepcoldy/botmux) | 团队直接性不足 | 团队在话题/oncall 群触发代理、接力会话并收集结果反馈。 | 沿用 CLI 权限并非新隔离层；自动 setup 会建应用/发版，本次未执行。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4846 | [Creator Buddy](https://github.com/SpaceZephyr/creator-buddy) | 方法技能另列 | 内容运营团队可复用选题、素材、图文、视频与成品质检流程。 | 平台数据/外部模型依赖独立；资料与素材使用范围需按来源，未执行采集。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4844 | [PeterCat](https://github.com/afx-team/petercat) | 团队直接性不足 | 维护团队可自动入库 GitHub 文档/issue，并在网站与仓库提供支持。 | 答疑准确性、权限及运营规模未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4850 | [MAESTRO Research Assistant](https://github.com/murtaza-nasir/maestro) | 商业或许可边界待核 | 研究团队可围绕计划与文档复用端到端调查流程。 | 当前 alpha；多人细粒度权限未证实；AGPL 或商业双许可。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4863 | [ralphex](https://github.com/umputun/ralphex) | 方法技能另列 | 研发团队可复用计划、验证命令、分支和审阅流程。 | 默认 Claude 参数跳过权限，需隔离环境；自动通过不代表正确。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4864 | [brooks-lint](https://github.com/hyhmrright/brooks-lint) | 方法技能另列 | 团队可统一架构与测试审阅维度，追踪回归并导出 SARIF。 | 不是传统 linter；parser benchmark 只验证报告解析，不证明发现正确。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4878 | [ConnectOnion](https://github.com/openonion/connectonion) | 团队直接性不足 | 交付团队可统一创建、运行、部署与诊断工具链。 | 代理协作 trust system 仍路线图；生产级宣传未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4882 | [KaibanJS](https://github.com/kaiban-ai/KaibanJS) | 团队直接性不足 | 团队可可视化监督代理任务状态及阶段产物。 | Team 指代理组；分布式同步为社区另仓，不归核心。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4891 | [Element Plus X](https://github.com/element-plus-x/Element-Plus-X) | 工程组件另列 | 前端团队可复用一致的 AI 交互组件和设计体系。 | UI 组件不含模型或企业组织后台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4901 | [Korvus](https://github.com/postgresml/korvus) | 保留待深核 | 工程团队可减少检索管线分散组件，统一数据查询接口。 | 依赖数据库环境；SDK 不提供团队权限平台。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4905 | [EigenFlux](https://github.com/phronesis-io/eigenflux) | 商业或许可边界待核 | 平台团队可部署统一代理信息交换层，减少重复发现。 | 自定义 Apache 附加条件；企业 hub 简化配置仍路线图，非真人成员平台。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4907 | [Refinery](https://github.com/code-kern-ai/refinery) | 商业或许可边界待核 | 工程师与领域专家可围绕标签函数和数据质量共同复核。 | 开源版明确单用户，团队工作空间及多用户为商业版。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4911 | [HVE Core](https://github.com/microsoft/hve-core) | 方法技能另列 | 团队可标准化研究、计划、实现和审阅，并复用落地指南。 | 官方明确快速演化，仅宜作为模式学习来源，不是稳定生产依赖；部分 OWASP 内容 CC BY-SA。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4916 | [ModelFox](https://github.com/modelfoxdotdev/modelfox) | 商业或许可边界待核 | 工程团队可复用多语言推理与统一模型产物。 | 除 crates/app 外 MIT；app 生产使用需付费许可。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4915 | [git-lrc](https://github.com/HexmosTech/git-lrc) | 商业或许可边界待核 | 团队可在共同 Git 工作流检查变更，并追踪哪些提交经过审阅。 | 自托管/SSO 属 Enterprise；防事故宣传不保证效果，服务数据路径需核实。 修改版 Sustainable Use License：限制转售、竞争性服务和商业再分发修改版本。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4922 | [Nixopus](https://github.com/nixopus/nixopus) | 商业或许可边界待核 | 运维团队可集中部署、监控和处理应用故障。 | 跨机器部署、负载均衡和自动扩缩仍路线图；AGPL/商业许可，未验证自主修复效果。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4923 | [AgentQL](https://github.com/tinyfish-io/agentql) | 商业或许可边界待核 | 自动化团队可复用结构化网页查询与 Playwright 工作流。 | 依赖 AgentQL 服务；适配任何网页/自愈为宣传，不保证绕过授权或长期稳定。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 4927 | [MCP Kotlin SDK](https://github.com/modelcontextprotocol/kotlin-sdk) | 工程组件另列 | Kotlin 团队可跨 JVM/Native/JS/Wasm 复用代理协议集成。 | 新贡献 Apache、已有 MIT；不同平台支持需实际验证。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4939 | [AppPlatform](https://github.com/ModelEngine-Group/app-platform) | 团队直接性不足 | 产品与工程团队可共建应用，并在 Store 跨项目复用函数、RAG 和代理。 | 依赖 FIT/Waterflow，复用不等于同时多人编辑或完整租户权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4942 | [TensorHouse](https://github.com/ikatsov/tensor-house) | 团队直接性不足 | 团队可共同评估数据/集成准备度，制作原型并对齐需求。 | 定位参考与原型，不是生产业务系统。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4943 | [Agent Protocol](https://github.com/agi-inc/agent-protocol) | 工程组件另列 | 工程团队可统一代理调用接口，降低跨框架集成成本。 | 最小协议核心，不是完整协作运行平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 4946 | [Paritok](https://github.com/Paritok-official/paritok-4b-v1) | 团队直接性不足 | 团队可在模型调用入口试验统一上下文压缩与费用观测。 | 可取回原文不等于模型决策无损；自身基准也有质量下降，需GPU或服务，模型许可另算。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4984 | [SwiftAgents](https://github.com/twostraws/SwiftAgents) | 方法技能另列 | Swift 团队可提交统一代码生成约定减少常见问题。 | 偏向 iOS26+，兼容旧平台需调整；规则不是自动正确性保证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 4982 | [AiderDesk](https://github.com/hotovo/aider-desk) | 团队直接性不足 | 工程团队可复用审阅与受控工具流程，接入 Jira/Linear 和内部 wiki。 | 桌面工程工具，无真人实时协作证明；权限需配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4981 | [OSS-Fuzz-Gen](https://github.com/google/oss-fuzz-gen) | 团队直接性不足 | 安全与维护团队可扩展模糊测试覆盖并比较生成目标。 | 生成 target 需编译验证；旧模型列表不代表当前服务可用，未执行。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 4994 | [Agent Network Protocol](https://github.com/agent-network-protocol/AgentNetworkProtocol) | 保留待深核 | 平台团队可按公共规范设计跨代理身份和通信。 | 草案存在不等于实现已支持；不是团队协作成品。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 4997 | [Tabnine VS Code](https://github.com/codota/tabnine-vscode) | 商业或许可边界待核 | 研发团队可使用代码库上下文辅助实现、测试、解释和文档。 | 扩展仓不等于服务/模型全开源；企业定制与自托管有方案边界，不保证免法律责任。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 5010 | [Inkeep Agents](https://github.com/inkeep/agents) | 商业或许可边界待核 | 业务和技术人员可在可视化与代码两种方式间共同维护同一智能体，工程侧接入 CI/CD。 | ELv2 加补充条款的源码可见许可，不标标准开源；Cloud 仍提供 waitlist 入口。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 5042 | [AI Builders Curriculum](https://github.com/ai-builders-foundation/ai-builders-curriculum) | 方法技能另列 | 团队培训/黑客松可共用有账户、数据库和可解释设置的实践基线。 | 默认离线 demo，不代表无 key 可调用真实云模型；教学而非生产成品。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 5050 | [MLOps Python Package](https://github.com/fmind/mlops-python-package) | 方法技能另列 | 团队可统一任务命令、检查、测试、打包与 CI 约定。 | 参考包非完整托管平台；cookiecutter/LLMOps例子各为另仓。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 006 | 5066 | [Google ADK TypeScript](https://github.com/google/adk-js) | 保留待深核 | JS 团队可复用代理逻辑、工具与多运行时接口。 | 语言版本功能需独立核验，不能直接套用 Python/Java 的完整功能。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 5079 | [Kodus](https://github.com/kodustech/kodus-ai) | 商业或许可边界待核 | 团队统一 Kody Rules 和 PR 反馈，减少反复讲解工程约定。 | 社区有规则/插件数量限制；Cockpit 属 Teams，SSO/RBAC/审计属 Enterprise。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 5086 | [FastCtx](https://github.com/yc-duan/fastctx) | 团队直接性不足 | 工程团队可统一代理工具输入输出，减少平台命令与编码差异。 | 共享进程限同用户，不是团队访问系统；修改操作不自动重放。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 5091 | [OpenSERP](https://github.com/karust/openserp) | 保留待深核 | 研究/SEO 团队可复用代理搜索后端与统一结果结构。 | 搜索引擎可限流/改变页面，免费无 key 不保证可用性或使用授权。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 5103 | [Tavily Python SDK](https://github.com/tavily-ai/tavily-python) | 保留待深核 | 团队可在研究代理中统一信息采集接口及企业代理会话。 | keyless 仅 search/extract 且限流；SDK 不等于检索服务自托管。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 5098 | [meow LLM Detector](https://github.com/chen-006/meow-llm-detector) | 团队直接性不足 | 团队可比较模型端点行为变化并保存检验报告。 | 不能认证真实模型身份或归因供应商行为；在线报告公开，测试会产生API费用。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 5097 | [React Native AI](https://github.com/callstackincubator/ai) | 保留待深核 | 移动团队可复用文本、语音、embedding 和统一观测。 | 系统模型依设备支持；DevTools亦支持远程不代表所有流程本地。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 5094 | [AgentFlow](https://github.com/agentenv/agentflow) | 工程组件另列 | 平台团队可定义依赖、并行和迭代任务，并复用运行配置。 | 需要目标运行环境和凭据；多代理图不是成员工作流权限。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 5106 | [GPU Poor](https://github.com/RahulSChand/gpu_poor) | 团队直接性不足 | 基础设施团队可做算力容量规划的初步比较。 | 估算非硬件实测，不据此保证采购或部署性能。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 5108 | [DeepSeek Design](https://github.com/Devin-AXIS/deepseek-design) | 商业或许可边界待核 | 设计研发团队可围绕真实文件修改原型/演示稿并继续交付。 | iPolloWork 第三方产品，source-available 非纯开源；不同插件能力独立。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 006 | 5113 | [QVerisFlow](https://github.com/QVerisAI/QVerisFlow) | 团队直接性不足 | 业务工程团队可共用可视化流程并暂停、恢复、干预执行。 | 代理生成不保证最优；需外部工具层，多代理不是多用户权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 5117 | [spaCy LLM](https://github.com/explosion/spacy-llm) | 保留待深核 | NLP 团队可在已有 pipeline 中复用提示、解析与模型适配。 | 老模型接口仍在列表，当前可用性需验证；免训练数据不等于免评测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 006 | 5116 | [MySQL MCP (designcomputer)](https://github.com/designcomputer/mysql_mcp_server) | 工程组件另列 | 数据团队可把数据库分析工具接入助手。 | 不是天然只读，需专门最小权限数据库账号；托管接入为第三方服务。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 5121 | [Azure Chat](https://github.com/microsoft/azurechat) | 工程组件另列 | 组织可在自有 Azure 租户提供员工问答入口，并连接内部服务。 | MIT 的 Azure 部署应用/参考实现；身份、云资源和网络需配置，转工程方案栏目，不当作免配置成品。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 006 | 5140 | [codedb](https://github.com/justrach/codedb) | 团队直接性不足 | 研发团队可给助手聚焦代码上下文，辅助理解调用与测试。 | 编辑仍由宿主工具负责；解析质量和性能未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 006 | 5139 | [Parallax](https://github.com/GradientHQ/parallax) | 工程组件另列 | 基础设施团队可将不同设备组成模型推理资源池。 | 网络/异构硬件性能需验证，不等于完整多租户治理。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5147 | [NLUX](https://github.com/nlkitai/nlux) | 商业或许可边界待核 | 前端团队可复用聊天 UI、模型适配与应用模板。 | 修改版 MPL2.0 附使用限制，不应当纯 MPL；模型后端需另接。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5146 | [Apple Docs MCP](https://github.com/kimsungwhee/apple-docs-mcp) | 工程组件另列 | Apple 平台团队可让助手引用官方 API 资料和示例。 | 第三方服务器不是 Apple 官方产品；内容范围与时效需按来源。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5152 | [TAKT](https://github.com/nrslib/takt) | 方法技能另列 | 团队可版本化计划—实现—审阅流程，保留日志与输出契约。 | 隔离工作目录不是系统沙箱，各 provider 权限行为需验证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5150 | [Atmos](https://github.com/cloudposse/atmos) | 工程组件另列 | 平台团队可统一身份、配置、工具链和自助基础设施操作。 | 内置 AI/MCP，仍需配置模型与云权限；遥测和 Atmos Pro 服务单独区分，未执行云操作。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5169 | [AI Sales Team Skills](https://github.com/zubair-trabzada/ai-sales-team-claude) | 方法技能另列 | 销售团队可统一线索资格、采购角色、会前准备和管道报告。 | 虚拟销售团队不是 CRM 或真人成员系统；外联需人工审阅，未发送。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5166 | [NanoResearch](https://github.com/OpenRaiser/NanoResearch) | 团队直接性不足 | 研究团队可串联计算任务、图表与论文草稿，追溯实验产物。 | 真实/不编造为作者自述，结果与论文仍需研究者核验，未跑实验。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5174 | [LangChain4j AIDeepin](https://github.com/moyangzhan/langchain4j-aideepin) | 团队直接性不足 | Java 团队可复用管理端/用户端构建业务助手。 | 根说明未证明成员角色或租户隔离，需部署验证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5172 | [NeuroSploit](https://github.com/JoasASantos/NeuroSploit) | 团队直接性不足 | 安全团队可统一授权范围、收集工具记录并复核发现。 | 投票不证明漏洞正确或合规；未执行任何目标测试。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5197 | [Chidori](https://github.com/ThousandBirdsInc/chidori) | 保留待深核 | 工程团队可复核模型/工具调用，并在 CI 重放与恢复长流程。 | 字节相同回放使用已记录结果，不证明重新执行模型确定性；外部副作用需配置。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5196 | [PentesterFlow](https://github.com/PentesterFlow/agent) | 团队直接性不足 | 安全团队可复用授权范围和证据驱动的调查流程。 | 模式改变会影响确认边界；未执行扫描或利用。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5206 | [AutoBE](https://github.com/wrtnlabs/autobe) | 团队直接性不足 | 研发团队可从结构化需求获得可审阅后端产物与测试。 | 100% buildable 不保证业务正确；AGPL工具与生成代码可另许可分开。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5210 | [sim-use](https://github.com/lycorp-jp/sim-use) | 工程组件另列 | 移动团队可复用模拟器/设备验收步骤与结构化页面观测。 | 真实iOS应用需开发签名/设备条件；截图通道可超出目标应用，未操作设备。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5232 | [mindwalk](https://github.com/cosmtrek/mindwalk) | 团队直接性不足 | 研发团队可复核代理访问和修改范围，理解任务执行轨迹。 | 地图体现观测到的行为而非模型真实理解；可选评估发送摘要给模型。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5231 | [Claw AI Lab](https://github.com/Claw-AI-Lab/Claw-AI-Lab) | 团队直接性不足 | 研究团队可查看多个项目产物并反馈、干预、恢复研究流程。 | 预览版，AI lab/team不证明多人权限；科研结果需独立验证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5241 | [LangChain Rust](https://github.com/Abraxas-365/langchain-rust) | 工程组件另列 | Rust团队可复用模型/向量组件。 | 社区语言实现，不默认等同LangChain官方全部特性。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5246 | [Noodles](https://github.com/unslop-xyz/noodles) | 团队直接性不足 | 研发团队可可视化理解代理生成代码和PR变更。 | 图不保证完整或正确调用关系，需人工核对。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5256 | [Keeper.sh](https://github.com/ridafkih/keeper.sh) | 工程组件另列 | 团队可统一跨日历忙闲同步，并让代理访问日程。 | 跨日历同步与 MCP/API 接入工具，AGPL，自托管包含 Pro 功能；当前证据不等于多人任务协作或原生 AI 推理，转集成组件。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5284 | [SpecStory](https://github.com/specstoryai/getspecstory) | 商业或许可边界待核 | 团队可复用历史设计决策、解决方案和提炼技能。 | 多人搜索与同步依赖Cloud，不等于本地工具全含；需注意会话内容范围。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5286 | [MetaScreener](https://github.com/ChaokunHong/MetaScreener) | 团队直接性不足 | 研究团队可按统一纳排标准筛标题摘要，并集中复核不确定案例。 | 固定seed/temperature不保证完全可复现；不能代替研究者确认，成本/准确率未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5292 | [xmcp](https://github.com/basementstudio/xmcp) | 工程组件另列 | 工程团队可统一MCP项目结构、认证中间件和部署方式。 | 提供认证工具不等于默认安全；根README符号链接已展开。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5296 | [OpenMOSS](https://github.com/uluckyXH/OpenMOSS) | 团队直接性不足 | 团队可监督任务调度、角色审阅与日志，复用代理业务技能。 | 模拟AI公司非真人组织；onboarding向导、agent管理UI、流程可视化等仍未完成。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5305 | [AntSK](https://github.com/shuyu-labs/AntSK) | 商业或许可边界待核 | C#团队可提供企业知识问答，并复用角色与私有部署能力。 | 定制许可证保留品牌；特定多租户服务需商业授权；GraphRAG/高级Text2SQL/流程编排属Pro。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5307 | [Saiku](https://github.com/spiculedata/saiku) | 团队直接性不足 | 分析团队可让代理复用受校验的度量/层级查询，与人查看同一数据结果。 | 依赖语义模型；示例账号仅demo，不能据API校验保证业务正确。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5310 | [CLI Agent Orchestrator](https://github.com/awslabs/cli-agent-orchestrator) | 团队直接性不足 | 研发团队可复用跨CLI任务分工和统一编排入口。 | 保留宿主认证和权限，不自动提供OS沙箱；EKS需另配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5332 | [Waza](https://github.com/microsoft/waza) | 方法技能另列 | 团队可共用评测套件，并上传结果保留历史比较。 | 模板包仍coming soon；结构合规不证明技能有效，依赖执行器。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5342 | [Yao Open Skills](https://github.com/yaojingang/yao-open-skills) | 方法技能另列 | 团队可把分析方法和输出模板沉淀为共同资产。 | 长期能力线与已发布列表分开；虚构示例不当客户案例。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5337 | [oh-my-agent](https://github.com/first-fluke/oh-my-agent) | 方法技能另列 | 研发团队可统一验收检查、规格产物与复核记录。 | skills-only安装不含完整harness；测试通过不保证满足全部需求。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5360 | [agents.json](https://github.com/wild-card-ai/agents-json) | 工程组件另列 | 集成团队可复用API工具的统一描述与执行接口。 | 早期规范，外部API权限与费用独立，未调用写接口。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5359 | [Attractor Specifications](https://github.com/strongdm/attractor) | 方法技能另列 | 团队可把代理loop、模型接口和编排行为作为可审阅契约。 | 仅规格不是现成Attractor运行实现，不把模型生成当已部署。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5358 | [LuaN1aoAgent](https://github.com/SanMuzZzZz/LuaN1aoAgent) | 商业或许可边界待核 | 安全团队可追溯任务范围、工具调用和验证产物。 | 高风险人工审批仍未完成；v1成绩不归v2；AGPL/商业条款，未运行。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5367 | [Kit Code Intelligence](https://github.com/cased/kit) | 保留待深核 | 研发团队可统一跨仓上下文、依赖分析和变更摘要。 | 组件需集成模型/权限，production-ready未经部署实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5374 | [Helmor](https://github.com/dohooo/helmor) | 团队直接性不足 | 团队开发者可把代理修改转成GitHub/GitLab可审阅交付。 | 本地单人工作台，不证明真人共享编辑；worktree非系统隔离。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5378 | [EmbedAnything](https://github.com/StarlightSearch/EmbedAnything) | 工程组件另列 | 知识工程团队可复用多来源入库与embedding组件。 | 框架对比benchmark仍coming soon；不等于团队文档权限平台。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5381 | [Agent Plugins Specification](https://github.com/agentplugins/agent-plugins-spec) | 方法技能另列 | 团队可按统一清单分发可复用插件。 | 1.1工作草案非已发布；客户端如何暴露技能不在规范内。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5385 | [pgbot](https://github.com/pgrundev/pgbot) | 团队直接性不足 | 数据库团队可把健康检查和变化报告提供给代理及CI。 | Beta；只读诊断不是自动修复/完整数据库审计，性能影响未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5388 | [ArkFlow](https://github.com/arkflow-rs/arkflow) | 团队直接性不足 | 平台团队可复用数据接入、转换和多节点运行管理。 | AI概述未对应当前组件清单中独立模型processor；具体接入需验证，exactly-once仅条件支持。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5392 | [React Native AI Full Stack](https://github.com/dabit3/react-native-ai) | 工程组件另列 | 移动团队可复用前后端界面与模型代理结构。 | 不是callstack同名库；认证需自己接provider，具体模型列表未逐项验证。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5395 | [Puppyone](https://github.com/puppyone-ai/puppyone-cloud) | 团队直接性不足 | 团队可集中版本化代理资料，按文件范围分发给不同代理。 | 明确built for agents而非人类协作；文件隔离和审计效果未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5416 | [Smyth Runtime Environment](https://github.com/SmythOS/sre) | 保留待深核 | 平台团队可复用统一资源接口与生命周期管理。 | OS比喻不等于实际操作系统沙箱；视觉Studio另仓。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5415 | [Agent-MCP](https://github.com/rinadelph/Agent-MCP) | 团队直接性不足 | 研发团队可集中查看代理任务和可检索项目知识。 | AGPL；高级框架文档仍完善，perfect context/无限扩展不作保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5414 | [LiteLLM Agent Control Plane](https://github.com/LiteLLM-Labs/litellm-agent-control-plane) | 商业或许可边界待核 | 团队通过同一UI/API使用多个代理后端并复用会话。 | 控制面依赖各runtime；不从access概述推断完整SSO/RBAC。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5418 | [CodeFuse ChatBot](https://github.com/codefuse-ai/codefuse-chatbot) | 团队直接性不足 | 研发运维团队可统一代码与文档检索辅助开发生命周期。 | 文档更新较早，部分模型coming soon；多人权限未核实。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5422 | [Weave Semantic Merge](https://github.com/Ataraxy-Labs/weave) | 团队直接性不足 | 研发团队可减少并行人/代理修改的结构性合并冲突。 | 语义结构合并不保证业务正确或无冲突，需测试审阅。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5431 | [Xtreme1](https://github.com/xtreme1-io/xtreme1) | 商业或许可边界待核 | 标注团队可统一类别体系、预标注和数据质量复核。 | RLHF为beta，企业版另行提供；标注精度未测。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5448 | [Gas City](https://github.com/gastownhall/gascity) | 保留待深核 | 平台团队可复用runtime、任务追踪和期望状态协调组件。 | 构建编排器的SDK，不直接等于Gas Town完整产品或真人工作区。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5462 | [TrustRAG](https://github.com/gomate-community/TrustRAG) | 保留待深核 | 知识工程团队可复用模块化检索与分层问题处理。 | trusted/reliable是目标而非保证；未见完整多人治理。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5464 | [Strands Agents Tools](https://github.com/strands-agents/tools) | 保留待深核 | 开发团队可统一代理工具实现，减少重复集成。 | Slack工具已标deprecated；工具集合不等于安全执行环境，需按工具权限配置。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5470 | [Renumics Spotlight](https://github.com/Renumics/spotlight) | 团队直接性不足 | ML工程团队可共同分析异常簇和数据质量，并沟通复杂数据问题。 | 可视化分析非多人权限系统；数据问题仍需领域解释。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5469 | [Human Review](https://github.com/petergyang/human-review) | 团队直接性不足 | 团队审阅者可直接修改产物并批量反馈给代理，减少文字定位误差。 | 类似GoogleDoc交互不代表多人实时同步；需宿主代理接收。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5477 | [Passmark](https://github.com/bug0inc/passmark) | 商业或许可边界待核 | QA团队可复用浏览器验收步骤和带AI总结的测试报告。 | FSL未来Apache，不是当前纯Apache；多模型一致不保证断言正确。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5481 | [promptmap](https://github.com/utkusen/promptmap) | 团队直接性不足 | AI安全团队可重复运行攻击规则并审阅目标响应。 | 控制模型判断可能误报漏报；GPL，未测试实际目标。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5483 | [Prompty](https://github.com/microsoft/prompty) | 方法技能另列 | 团队可版本化并跨语言复用提示资产与执行配置。 | 运行时格式对齐不保证模型结果一致；模型服务另配。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5490 | [Meta Ads MCP by Pipeboard](https://github.com/pipeboard-co/meta-ads-mcp) | 商业或许可边界待核 | 营销团队可统一查询广告数据和准备活动修改。 | BSL1.1；其他四广告节点工具不全属本仓，托管服务条件独立，未执行广告修改。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5496 | [wllama](https://github.com/ngxson/wllama) | 工程组件另列 | 前端团队可复用端侧模型运行能力。 | 受浏览器/硬件/模型限制，不含团队管理。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5501 | [SkillNet](https://github.com/zjunlp/SkillNet) | 方法技能另列 | 团队可把技能作为可检查、评测和复用的软件资产。 | 生成评测依模型，orchestration需兼容gateway；评分非安全保证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5500 | [KubeAI](https://github.com/kubeai-project/kubeai) | 保留待深核 | 平台团队可统一提供LLM、embedding、rerank和语音服务。 | 操作层不同于其依赖vLLM/Ollama；需集群与模型许可。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5510 | [FoloUp](https://github.com/FoloUp/FoloUp) | 团队直接性不足 | 招聘团队可统一访谈准备与结果审阅。 | 模型评分不应替代人工招聘决策，公平性未验证；外部服务需配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5516 | [Easel](https://github.com/ZJU-REAL/Easel) | 团队直接性不足 | 运营团队可复用账号画像、内容资产和排期工作流。 | 定位个人创作者助手，不证明多人权限；自动发布受平台限制。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5521 | [uni-api](https://github.com/yym68686/uni-api) | 商业或许可边界待核 | 工程团队可统一多模型入口及故障切换。 | backend-only，用户计费前端属uni-api-web；不要混写为全栈团队门户。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5520 | [Website Rebuild Skill](https://github.com/boyang-hu/website-rebuild-skill) | 方法技能另列 | 前端团队可做授权迁移/存档重建，并用视觉和行为证据验收。 | 技术可复现不授予源站内容许可；默认私有不部署，未运行。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5524 | [IntellAgent](https://github.com/plurai-ai/intellagent) | 团队直接性不足 | QA团队可共同定义边缘场景并比较实验结果。 | 模拟结果不代表真实用户分布或全部失败覆盖。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5523 | [AgentRT](https://github.com/openairymax/agentrt) | 工程组件另列 | 平台团队可复用代理运行底座和统一协议入口。 | OS-grade为定位非隔离认证；AGPL或Apache任选，未测执行边界。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5548 | [Guard Skills](https://github.com/amElnagdy/guard-skills) | 方法技能另列 | 团队可统一提交/合并前的质量复核。 | 提示式审阅可能漏报，copy安装需主动更新。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5553 | [GSD Pi](https://github.com/open-gsd/gsd-pi) | 方法技能另列 | 团队可通过仓库需求、决策、验证证据接力工作。 | 本地工作流不证明多人权限，自动完成仍需验收。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5565 | [hackingBuddyGPT](https://github.com/ipa-lab/hackingBuddyGPT) | 团队直接性不足 | 安全研究团队可复用目标连接、运行上限、工具与日志。 | 执行真实命令，需隔离授权环境；未运行任何实验。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5571 | [AttackGen](https://github.com/mrwadams/attackgen) | 方法技能另列 | 安全团队可准备桌面演练、注入事件与验收标准。 | 生成情景不是实际攻击或检测能力，需主持人复核。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5580 | [Power Pwn](https://github.com/mbrg/power-pwn) | 团队直接性不足 | 企业安全团队可核查Copilot/GPT/MCP等配置与数据访问。 | 含攻击性模块，未执行；目录推荐只表示授权评估用途。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5589 | [Supavec](https://github.com/supavec/supavec) | 保留待深核 | 团队可在统一后端管理检索问答数据。 | 依赖Supabase/Upstash等；任意规模宣传未验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5590 | [PAUL](https://github.com/ChristopherKahler/paul) | 方法技能另列 | 团队可对齐完成标准并保留计划与实际变更的差异。 | 提示流程不能保证执行质量；对其他代理质量的比较未验证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5596 | [Hexabot](https://github.com/hexabot-ai/Hexabot) | 商业或许可边界待核 | 团队可复用跨渠道业务自动化。 | FCL-1.0-ALv2，不应当纯Apache；需Node及外部服务。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5599 | [ai-jail](https://github.com/akitaonrails/ai-jail) | 工程组件另列 | 团队可统一代理文件和进程执行边界。 | 不是恶意代码VM替代，项目文件可扩大能力而非只收紧；GPL。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5614 | [Kill AI Slop](https://github.com/yetone/kill-ai-slop) | 方法技能另列 | 设计团队可统一评审口径并保留前后对照。 | 审美规则非通用质量定律，未执行自动修改。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5613 | [Langtrace](https://github.com/Scale3-Labs/langtrace) | 保留待深核 | AI工程团队统一排障和用量分析。 | 应用AGPL、SDK Apache；语义约定仍演进。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5612 | [Sashiko](https://github.com/sashiko-dev/sashiko) | 团队直接性不足 | 维护团队可自动读取邮件列表或Git补丁并复核发现。 | 输出概率性；GitHub/GitLab集成实验且不支持，检测率自测非保证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5621 | [Roast](https://github.com/Shopify/roast) | 保留待深核 | Ruby团队可版本化重复业务/开发流程。 | 本地agent有文件系统权限，不是沙箱；模型需另配置。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5628 | [BricksLLM](https://github.com/bricks-cloud/BricksLLM) | 商业或许可边界待核 | 团队统一key分发、成本限制和模型调用观测。 | 托管dashboard另算；脱敏不保证无遗漏。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5637 | [YiGraph](https://github.com/iDC-NEU/YiGraph) | 团队直接性不足 | 分析团队可从多源资料构图并复核关系计算。 | 算法计算不保证原始数据或模型解释正确；敏感业务判断需人工。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5635 | [Synthadoc](https://github.com/axoviq-ai/synthadoc) | 团队直接性不足 | 知识团队可归并资料、复核矛盾并追踪入库/费用记录。 | AGPL；按端口分部门不等于RBAC，自动准确性/扩展性未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5643 | [JXWAF](https://github.com/jx-sec/jxwaf) | 商业或许可边界待核 | 安全团队可统一业务防护策略和日志。 | 多租户仅云WAF，标准版不含；防护测试为作者自述，不作效果保证。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5639 | [OpenInference](https://github.com/Arize-ai/openinference) | 保留待深核 | 平台团队统一模型、检索和工具轨迹，接入兼容后端。 | 并非完整观测UI，需后端与数据采集配置。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5647 | [Aegis Method Pack](https://github.com/GanyuanRan/Aegis) | 方法技能另列 | 团队可统一责任边界、验收证据与遗留路径处理。 | benchmark有限且非独立人工评审，不保证零风险或普遍提升。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5655 | [Testsigma](https://github.com/testsigmahq/testsigma) | 商业或许可边界待核 | QA团队可复用测试资产、生成场景并接CI与缺陷系统。 | README混合商业产品介绍，未证实所有GenAI/治理能力在Apache仓中；效率比例未测。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5657 | [RAGxplorer](https://github.com/gabrielchua/RAGxplorer) | 团队直接性不足 | 检索团队可沟通和排查RAG检索表现。 | Streamlit demo另仓，无团队权限层。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5662 | [RicePrompt Engine](https://github.com/jieyefriic/rp-engine) | 保留待深核 | 工程团队可审阅版本化节点、提示、数据源和MCP调用。 | 视觉RicePrompt产品另算；执行代码权限需配置。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5661 | [AVA Voice Agent for Asterisk](https://github.com/hkjarral/AVA-AI-Voice-Agent-for-Asterisk) | 商业或许可边界待核 | 客服/通信团队可接入既有PBX并管理语音流程。 | 多安装管理AVA Operator商业早期预览，非MIT Core；通信兼容需验证。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5673 | [MoAI ADK](https://github.com/modu-ai/moai-adk) | 方法技能另列 | 研发团队可统一规格、审阅和跨会话通信边界。 | 各阶段仍有上下文限制，比较指标未核验；配置可解除turn限制。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5690 | [CosmoEdge](https://github.com/cosmo-wander-ai/cosmo-edge) | 商业或许可边界待核 | 边缘平台团队可统一模型部署、告警和设备运营。 | Apache核心与商业模型/保护工具分开；各硬件模型和benchmark范围不同。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5699 | [EvoSkill](https://github.com/sentient-agi/EvoSkill) | 保留待深核 | 工程团队可比较技能/提示变体并保留效果依据。 | 优化依赖代表性评测集，不能保证业务外推效果。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5701 | [AI Workflow Builder Template](https://github.com/vercel-labs/workflow-builder-template) | 保留待深核 | 团队可从Slack/Linear等连接与可审阅代码开始搭建流程。 | 模板依赖Vercel/Neon/模型服务；认证不是完整团队授权。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5706 | [Aegra](https://github.com/aegra/aegra) | 保留待深核 | 平台团队可在自有环境提供代理会话和恢复API。 | 兼容性未实测，竞品价格为历史比较；不是LangSmith所有功能替代。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5712 | [Symfony AI](https://github.com/symfony/ai) | 工程组件另列 | PHP团队可复用标准组件/Bundle构建AI应用。 | 组件不是组织协作成品，模型和存储另配。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5709 | [COG Second Brain](https://github.com/huytieu/COG-second-brain) | 团队直接性不足 | 团队负责人可汇总GitHub/Linear/Slack、会议决策与PRD。 | 隐私保护的真正团队协作仍路线图；整合依外部权限，未调用写操作。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5720 | [OpenEvals](https://github.com/langchain-ai/openevals) | 保留待深核 | 团队可共用质量规则并补充业务专属评测。 | 模型judge可能偏差；代理专属eval另仓。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5719 | [Polis](https://github.com/compdemocracy/polis) | 商业或许可边界待核 | 团队/社区可收集意见并了解共识和分歧。 | 不是生成式代理；群体解释需合理样本，AGPL附额外许可。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5728 | [RAGLite](https://github.com/superlinear-ai/raglite) | 团队直接性不足 | 知识团队可复用本地/服务器检索，并通过Chainlit接Slack/Teams。 | 渠道能力依Chainlit；不是自带完整多人知识权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5730 | [Elixir LangChain](https://github.com/brainlid/langchain) | 工程组件另列 | Elixir团队可统一模型接口，并通过context限定用户可用动作。 | 社区实现不等同Python/JS全部能力，权限需应用正确实现。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5736 | [SkillPack](https://github.com/CreminiAI/skillpack) | 方法技能另列 | 把提示、脚本和技能组合成具体岗位任务包，同事从 Slack/Telegram 调用本地运行的智能体。 | 本地运行不意味着模型和消息服务完全不联网；未核验组织权限粒度。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5753 | [kubectl AI by sozercan](https://github.com/sozercan/kubectl-ai) | 工程组件另列 | 运维团队可辅助准备测试/开发集群配置。 | 非其他组织同名工具；apply会改集群，需审阅与权限，未执行。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5774 | [Fast MCP Ruby](https://github.com/yjacquin/fast-mcp) | 工程组件另列 | Rails/Rack团队可统一把现有工具资源提供给助手。 | 非Python同名FastMCP；权限要由应用正确配置。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5771 | [Google Gen AI Go SDK](https://github.com/googleapis/go-genai) | 工程组件另列 | Go团队复用模型接口。 | GenerateVideos有major迁移预告，需固定兼容版本；非协作成品。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5783 | [SimAI](https://github.com/aliyun/SimAI) | 工程组件另列 | 基础设施团队可比较分布式拓扑与推理资源配置。 | 模拟非实测；SimCCL/SimAI-CLEM另仓，适用条件需校准。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 007 | 5789 | [InfiAgent / MLA](https://github.com/polyuiislab/infiAgent) | 团队直接性不足 | 开发团队可复用长流程恢复、模型故障切换和并发经验存储。 | 桌面/市场已移出本仓；无限运行和无损上下文宣传未验证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5811 | [SearchCLI](https://github.com/volcengine/SearchCLI) | 保留待深核 | 团队可复用数据接入、质量调优与验证流程。 | CLI开放不等于云检索服务开源或免费。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5821 | [Foundation Lab](https://github.com/rudrankriyam/Foundation-Models-Framework-Lab) | 团队直接性不足 | 移动AI团队可复用recipes并比较配置和可重現运行记录。 | 依Apple系统/硬件能力，实验工具不是组织协作服务。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5823 | [Agent Memory Leaderboard](https://github.com/AML-memory/agent-memory-leaderboard) | 团队直接性不足 | 团队可用统一版本化方法比较记忆存取效果。 | 不代表所有场景排名，公开提交平台与本地实现边界需确认。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5828 | [Laravel AI SDK](https://github.com/laravel/ai) | 保留待深核 | PHP团队可用框架一致接口复用AI组件。 | SDK不含托管模型或成员治理。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5826 | [Chat with Your Data](https://github.com/Azure-Samples/chat-with-your-data-solution-accelerator) | 团队直接性不足 | 团队集中索引政策/手册并由管理员配置知识和persona。 | 明确是起点非开箱生产系统，需自有语料评测和访问设置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5834 | [AI Elements Vue](https://github.com/vuepont/ai-elements-vue) | 保留待深核 | 前端团队可统一AI交互设计。 | 审批UI不等于后端权限执行，需AI SDK和shadcn-vue。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5836 | [Ref MCP](https://github.com/ref-tools/ref-tools-mcp) | 保留待深核 | 团队可向编码代理提供API/库文档上下文。 | 需Ref服务key，源码接入不等于全检索后端开放。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5850 | [HALO](https://github.com/context-labs/HALO) | 团队直接性不足 | 团队可导入生产轨迹，定位重试、耗时和费用。 | 优化成效未复现，需适当轨迹数据与权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5858 | [TypeSafe Agent Skills](https://github.com/typesafe-ai/skills) | 方法技能另列 | 团队可复用工单路由等决策流程，并为不确定结果接人工审阅。 | MIT技能依赖TypeSafe模型服务，不保证概率校准效果。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5864 | [Autoprompt Skill](https://github.com/Spielewoy/autoprompt-skill) | 方法技能另列 | 团队可复用分级工作路径与交付检查。 | 45%降低失败为作者宣传未复验；依宿主及验证质量。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5860 | [ALwrity](https://github.com/ALwrity/ALwrity) | 团队直接性不足 | 营销团队可统一品牌知识、内容计划和分析。 | production-ready/成效未测，账号认证不代表细粒度组织权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5872 | [Cloudflare AI Packages](https://github.com/cloudflare/ai) | 保留待深核 | JS团队可复用WorkersAI/Gateway/Search接入。 | resumable streaming文档仍coming soon；云服务另计费。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5881 | [Hercules](https://github.com/test-zeus-ai/testzeus-hercules) | 团队直接性不足 | QA团队可复用业务验收脚本并接CI。 | AGPL开放核心，设备清单多为浏览器仿真；自愈/正确性未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5879 | [Power BI Modeling MCP](https://github.com/microsoft/powerbi-modeling-mcp) | 商业或许可边界待核 | BI团队可批量维护指标、关系和DAX。 | 公开预览且EULA；不能编辑报表页/布局，模型变更需审阅。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5885 | [Gentleman Guardian Angel](https://github.com/Gentleman-Programming/gentleman-guardian-angel) | 方法技能另列 | 团队可在提交入口复用AGENTS.md规范。 | 模型审阅不等同强制静态正确性，provider依赖另装。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5890 | [Agent Stack](https://github.com/i-am-bee/agentstack) | 保留待深核 | 平台团队可统一A2A代理部署和应用接入。 | 部署即用宣传未实测；不同于其他同名AgentStack。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5904 | [Loki Fact Verification](https://github.com/Libr-AI/OpenFactVerification) | 团队直接性不足 | 新闻研究团队可批量准备可复核事实依据。 | 自动判定不保证真实，需检查证据来源。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5912 | [dotai](https://github.com/udecode/dotai) | 方法技能另列 | 团队可引用同一规范源，减少拷贝漂移。 | 部分依特定工具/编排器；本次仅读取资料，不激活其goal/写操作。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5923 | [Omnigraph](https://github.com/ModernRelay/omnigraph) | 团队直接性不足 | 团队可审阅隔离分支上的代理知识修改并合并。 | PythonSDK未推出；规模和安全性未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5937 | [Claude Codex Settings](https://github.com/fcakyon/claude-codex-settings) | 方法技能另列 | 团队可统一技能、hooks、规范和允许列表。 | 不同工具能力不同，自动权限模板需适配，未安装。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5940 | [AgentBay SDK](https://github.com/agentbay-ai/wuying-agentbay-sdk) | 商业或许可边界待核 | 平台团队可统一代理执行环境接口。 | Apache仅SDK，云沙箱非随仓自托管全部实现；需服务账号。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5949 | [Audino](https://github.com/midas-research/audino) | 商业或许可边界待核 | 语音团队可管理标注项目并导出训练数据。 | CC BY-NC，商业团队需处理授权；v1/v2仍迁移中。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5955 | [osgrep](https://github.com/Ryandonofrio3/osgrep) | 团队直接性不足 | 研发团队可向助手提供聚焦代码上下文。 | 解析和节省token效果未测，非组织共享权限服务。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5953 | [ArtifactFS](https://github.com/cloudflare/artifact-fs) | 保留待深核 | 平台团队可减少沙箱/CI启动时完整克隆开销。 | Beta，需系统FUSE；Cloudflare Artifacts是独立服务。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5974 | [Product Manager Prompts](https://github.com/deanpeters/product-manager-prompts) | 商业或许可边界待核 | 产品团队可共同复用PRD、用户故事和风险复盘结构。 | 当前CC BY-NC-SA，商业需书面许可；旧MIT副本条件另算。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5985 | [AI Writing Textlint Preset](https://github.com/textlint-ja/textlint-rule-preset-ai-writing) | 方法技能另列 | 日文内容团队可在编辑/CI统一文风检查并接MCP。 | 模式检测不是判定作者是否AI，需textlint对应版本。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 5984 | [OpenRath](https://github.com/Rath-Team/OpenRath) | 团队直接性不足 | 工程团队可统一会话血缘、人工中断及租户动作授权。 | 安全取决于backend；多session不是自动真人协作。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 5983 | [Browser4](https://github.com/platonai/Browser4) | 保留待深核 | 数据与自动化团队可复用抓取/提取流程与MCP入口。 | 高访问量/稳定性未测试，零token仅部分确定性提取路径。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 5998 | [Jonex](https://github.com/yuezhiai/jonex) | 商业或许可边界待核 | 团队可把分散内容转成有来源的业务知识服务。 | 自定义Apache附加条件；治理与推理准确性未测。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 5996 | [MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server) | 保留待深核 | 数据库团队可统一代理查询与管理工具。 | 含删除/变更工具，需最小权限；托管与自建接入分开，未执行。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6002 | [World2Agent](https://github.com/machinepulse-ai/world2agent) | 保留待深核 | 工程团队可复用统一传感schema与接入方式。 | 明确非完整产品，设备与数据可信度需验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6001 | [AI JSX](https://github.com/fixie-ai/ai-jsx) | 保留待深核 | 前端团队复用提示/React组件来构建AI体验。 | 框架示例较早，兼容性需验证，非多人协作服务。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6005 | [MassGen](https://github.com/massgen/MassGen) | 团队直接性不足 | 团队可比较多代理方案并审阅投票/轨迹。 | 权限engine需opt-in；共识不证明正确，prompt约束不是OS隔离。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6014 | [Prometheus by EuniAI](https://github.com/EuniAI/Prometheus) | 商业或许可边界待核 | 研发团队可复用知识图驱动的修复验收流程。 | GPL/商业双许可，benchmark和竞品描述未复验。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 6027 | [STRIDE GPT](https://github.com/mrwadams/stride-gpt) | 团队直接性不足 | 安全和开发团队可共同审阅系统威胁及控制措施。 | 模型分析不保证穷尽威胁；drawio默认托管，离线需另配。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6038 | [LLM Sandbox](https://github.com/vndee/llm-sandbox) | 保留待深核 | 团队可统一模型代码运行的资源与网络限制。 | 隔离依后端/挂载/privilege配置，不能保证完全安全。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6036 | [RAGChecker](https://github.com/amazon-science/RAGChecker) | 团队直接性不足 | RAG团队可按组件指标定位问题并比较改进。 | 概述upcoming与后续发布消息不同，按已发布消息理解；评测不保证事实。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6046 | [ChatDBG](https://github.com/plasma-umass/ChatDBG) | 团队直接性不足 | 研发团队可利用实际调试状态辅助定位问题。 | 其他debugger功能仍回移，模型建议需测试；未运行调试。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6041 | [Axflow](https://github.com/axflow/axflow) | 团队直接性不足 | 工程团队可复用models/axgen/axeval。 | extract/serve/finetune仍在开发，不计现有。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6058 | [SGR Agent Core](https://github.com/vamplabAI/sgr-agent-core) | 保留待深核 | 工程团队可复用搜索、澄清和结构化执行接口。 | production-ready未验证，schema不保证推理正确。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6063 | [AxisAgentic](https://github.com/XYZ-AI-Lab/AxisAgentic) | 团队直接性不足 | 团队可用同一轨迹重建上下文、评测和筛选训练资料。 | 搜索为当前参考recipe，不含模型权重，适配需开发。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6061 | [CloudBase AI Toolkit](https://github.com/TencentCloudBase/CloudBase-AI-Toolkit) | 保留待深核 | 应用团队可统一数据库、函数、存储与部署工作流。 | 需云账号/服务费用，工具可改资源；未执行部署。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6066 | [CodeStable](https://github.com/codestable/CodeStable) | 方法技能另列 | 研发团队可共同维护可靠事实和交付边界。 | 不负责会话分享/代理编排，Threadshare/cs-agent为另仓。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6081 | [Xalgorix](https://github.com/xalgorix/xalgorix) | 商业或许可边界待核 | 安全团队可复核漏洞证据和修复报告。 | 自托管single-operator；团队/RBAC在托管Team，验证成功不保证通用可利用性。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 6080 | [Paperthin](https://github.com/LilMGenius/paperthin) | 方法技能另列 | 团队可统一事实来源、评测独立性与交付经验复核。 | 单一项目提炼方法不证明普遍效果；技能不是强制安全层。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6088 | [Nebula](https://github.com/berylliumsec/nebula) | 团队直接性不足 | 安全团队可把调查记录整理成可审阅报告。 | v3 Linux预览，需Docker/Podman；不当成熟全平台产品。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6104 | [Skill Compose](https://github.com/dp-archive/archive) | 团队直接性不足 | 团队可复用/审阅技能包，发布聊天/API并按运行反馈改进。 | 英文首页空，依据中文页；当前维护状态未确认，分享链接不证明成员权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6107 | [Relay Pulse](https://github.com/prehisle/relay-pulse) | 保留待深核 | 团队可比较供应商可用率、延迟和错误。 | 产生调用成本；探测不是模型身份或服务合法性认证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6122 | [JamAI Base](https://github.com/EmbeddedLLM/JamAIBase) | 团队直接性不足 | 团队可统一知识数据和模型处理列。 | 表格UI非实时多人权限证明，v1→v2需迁移。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6128 | [Instructa AI Prompts](https://github.com/instructa/ai-prompts) | 方法技能另列 | 团队可统一代码约定、脚手架与自动化指导。 | 配置路径可能随版本改变，提示不保证执行合规。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6162 | [Raindrop Workshop](https://github.com/raindrop-ai/workshop) | 团队直接性不足 | 团队可利用执行证据排障和编写回归评测。 | 事件轨迹不是模型内部全部思维；未核实所有telemetry数据边界。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6163 | [AI Factory](https://github.com/lee-to/ai-factory) | 方法技能另列 | 团队可统一开发规范和可恢复计划。 | zero config不保证适合所有仓，安装动作未执行。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6174 | [X-Agent](https://github.com/wenge-research/x-agent) | 团队直接性不足 | 产品团队可零代码组合业务助手。 | 示例部署默认凭据需替换；企业级与隔离未实测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6182 | [VoAPI](https://github.com/VoAPI/VoAPI) | 商业或许可边界待核 | 团队可统一模型分发与用户用量控制。 | 独立费率/权限定制属Pro，许可和部署需核对。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 6180 | [Lynxe](https://github.com/spring-ai-alibaba/Lynxe) | 团队直接性不足 | Java团队可把数据查询/日志分析代理通过HTTP集成业务。 | 非Manus官方；执行确定性与内部采用为自述，未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6179 | [Open SEO MCP Skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills) | 方法技能另列 | 营销团队可共用站点诊断和关键词研究流程。 | MIT技能与托管数据服务分开；与Ryze营销技能重合，选入时宜合并生态入口。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6177 | [OpenClaw Agent Skills](https://github.com/openclaw/agent-skills) | 方法技能另列 | 团队可复用统一审阅和交付证据流程。 | 主要OpenClaw项目，远程验证/发布需独立配置授权，未执行。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6190 | [AuC](https://github.com/ufy2024/AuC) | 团队直接性不足 | 工程团队可复用工具分级及执行证据。 | 与AuM协同能力分开；ConversationStore共享仍计划，测试数为自述。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6197 | [Agentlas OS](https://github.com/agentlas-ai/Agentlas-OS) | 方法技能另列 | 团队可复用带角色、记忆边界和验证要求的代理包。 | 执行权限由宿主落实，不是独立OS隔离；公开发布需用户选择。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6225 | [Arbor](https://github.com/RUC-NLPIR/Arbor) | 团队直接性不足 | 研究团队可复核尝试、失败与保留改进。 | 演示回放不需key不等于真实执行无成本，2.5倍宣传未复验。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6228 | [ClawVault](https://github.com/tophant-ai/ClawVault) | 团队直接性不足 | 团队可检查代理访问敏感资料的轨迹与规则。 | hook保护不是全面系统隔离；安全效果未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6226 | [Higgsfield AI Skills](https://github.com/higgsfield-ai/skills) | 方法技能另列 | 创意团队可复用品牌、商品素材和内容生产方法。 | MIT技能依赖Higgsfield服务，模型/肖像素材许可独立。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6231 | [OpenAPI Tool Servers](https://github.com/open-webui/openapi-servers) | 保留待深核 | 集成团队可复用标准REST工具服务模式。 | OpenAPI本身不自动带认证或安全，例子需加固。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6229 | [Kangas](https://github.com/comet-ml/kangas) | 团队直接性不足 | ML团队可共同检查训练数据和模型标签。 | 规模性能自述，远程模式不自动等于组织权限。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6253 | [Cisco MCP Scanner](https://github.com/cisco-ai-defense/mcp-scanner) | 团队直接性不足 | 安全团队可在接入/CI检查工具定义及依赖风险。 | 部分引擎依外部API；扫描不证明安全，动态模式会运行服务，未执行。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6261 | [pyscn](https://github.com/ludo-technologies/pyscn) | 团队直接性不足 | 团队可检查重复、复杂度和架构规则，辅助代理代码验收。 | 不是LLM，Polyscan周报服务另算；不可仅凭dead-code标记自动删除。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6267 | [Microsoft 365 Agents SDK](https://github.com/microsoft/Agents) | 保留待深核 | 团队可把自选AI服务嵌入员工使用的渠道。 | 此仓主要导航/样例，核心语言源码另仓；部分渠道需订阅。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6265 | [Dynamiq](https://github.com/dynamiq-ai/dynamiq) | 保留待深核 | 工程团队可复用模型flow、异步代理和执行工具。 | 沙箱能力由外部服务提供，非开箱团队治理。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6275 | [numbat](https://github.com/perplexityai/numbat) | 团队直接性不足 | 安全团队可汇总不同代理轨迹并做事件重建。 | 阻断默认关闭且仅同步pre-action支持面，不是全系统防护。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6283 | [Kernel Images](https://github.com/kernel/kernel-images) | 保留待深核 | 平台团队可复用网页代理测试环境。 | 镜像不是完整Kernel托管服务，隔离随后端。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6282 | [Loki Mode](https://github.com/asklokesh/loki-mode) | 商业或许可边界待核 | 团队可对PR运行检查并保存可审阅证据。 | BSL1.1，计划2030-03-19转Apache；企业服务独立、SAML仍规划，示例可跳过宿主权限。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 6306 | [AIRecon](https://github.com/pikpikcu/airecon) | 团队直接性不足 | 安全团队可复核阶段化测试证据和报告。 | 本地模型不代表网络测试离线；未执行，外部数据集另仓。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6304 | [Judgeval](https://github.com/JudgmentLabs/judgeval) | 商业或许可边界待核 | 团队可从生产轨迹构建评测并接告警。 | 服务端监控依Judgment服务，judge可能误判。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 007 | 6318 | [Patter SDK](https://github.com/PatterAI/Patter) | 保留待深核 | 通信团队可共用呼叫状态/hooks并模拟测试。 | 需运营商/模型服务，SDK不含免费电话网络。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6330 | [fastCRW](https://github.com/us/crw) | 保留待深核 | 数据团队可复用代理内容采集入口。 | 本地与Cloud能力/额度分开；采集稳定和授权需按目标。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6324 | [Rules Template](https://github.com/Bhartendu-Kumar/rules_template) | 方法技能另列 | 团队可维护一份规范并通过链接给多助手复用。 | 提示模式不保证token收益或代码质量，兼容性需验证。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6344 | [Agentic Radar](https://github.com/splx-ai/agentic-radar) | 团队直接性不足 | 安全团队可静态审阅代理工具和风险。 | 高级LLM模式会发送提示，静态分析并非全面动态防护。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6355 | [Kotlin Agent Skills](https://github.com/Kotlin/kotlin-agent-skills) | 方法技能另列 | 团队统一后端框架和build tooling约定。 | 指导内容需与项目Kotlin版本匹配，未运行。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6350 | [Chronon](https://github.com/airbnb/chronon) | 保留待深核 | 数据团队可统一特征定义与训练/线上一致性。 | 依赖数据基础设施，正确性与性能未实测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6361 | [Minima](https://github.com/Minima-AI-Inc/minima) | 团队直接性不足 | 团队可在自有环境提供文档检索给现有助手。 | ChatGPT/Claude模式模型在外部，不称全本地；权限需部署配置。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6380 | [OpenClaw Marketing Skills](https://github.com/LeoYeAI/openclaw-marketing-skills) | 方法技能另列 | 增长团队可复用基于真实指标的诊断和活动产物。 | MyClaw云和TweetClaw为配套服务；效果不保证，未发布内容。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 007 | 6379 | [IX](https://github.com/kreneskyp/ix) | 团队直接性不足 | 团队可设计任务流并通过统一界面监督代理。 | chatroom多agent不等于真人多人权限；较旧模型定位需验证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6386 | [Agentica](https://github.com/wrtnlabs/agentica) | 保留待深核 | 工程团队可复用已有API构建业务代理。 | 列出函数不代表自动安全正确，权限需应用控制。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6389 | [WebWhiz](https://github.com/webwhiz-ai/webwhiz) | 团队直接性不足 | 支持团队可复用网站知识并收集离线消息。 | train/fine-tune措辞未证明实际权重微调；AGPL、答案需验证。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6401 | [Octos](https://github.com/octos-org/octos) | 保留待深核 | 平台团队可为自有UI提供一致runtime和人工控制入口。 | 应用仍负责界面/授权，kernel不等于完整团队产品。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6408 | [AgentDock MCP](https://github.com/uvwt/agentdock) | 保留待深核 | 平台团队可统一多设备文件、命令和任务接口。 | 不含聊天或推理；跨节点配套NexusDock另仓，安全未测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6405 | [StageRAG](https://github.com/darrencxl0301/StageRAG) | 团队直接性不足 | 团队可评估检索质量并对低置信答案制定处理。 | 延迟/显存依设备，置信分数不保证校准或无幻觉。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6421 | [AI Code Reviewer Action](https://github.com/villesau/ai-codereviewer) | 团队直接性不足 | 研发团队可在PR入口获取初步审阅。 | 依模型API并发送diff，自动评论非人工review替代。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 007 | 6419 | [Autoevals](https://github.com/braintrustdata/autoevals) | 保留待深核 | 团队可统一质量评测并定制prompt和指标。 | 得分非事实正确性保证，需业务真值。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6426 | [Prompt Ops](https://github.com/meta-llama/prompt-ops) | 保留待深核 | 团队可用自有样本比较迁移提示和质量。 | 论文效果不保证业务提升，详细PDO教程仍待发布。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 007 | 6442 | [LandingAI ADE Python](https://github.com/landing-ai/ade-python) | 商业或许可边界待核 | 文档工程团队可统一PDF/图像抽取和异步作业。 | SDK非完整解析模型开源，需LandingAI服务。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 008 | 6455 | [Arcade MCP](https://github.com/ArcadeAI/arcade-mcp) | 商业或许可边界待核 | 集成团队可复用内部API和OAuth工具授权。 | 托管凭据/Cloud不等于MIT框架完整自托管服务。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 008 | 6466 | [99AI](https://github.com/vastxie/99AI) | 商业或许可边界待核 | 团队可集中提供模型聊天与用户管理。 | 开发版授权另算，不能将全部功能默认视为Apache社区提供。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 008 | 6463 | [TRACER](https://github.com/adrida/tracer) | 团队直接性不足 | 团队可评估分类成本与观测流量，保留不确定请求给LLM。 | 与teacher一致不等于真实标签正确；90%路由和延迟宣传未测。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 008 | 6474 | [Salesforce Skills Library](https://github.com/forcedotcom/sf-skills) | 方法技能另列 | Salesforce团队可统一平台构建规范。 | 快速变化，不按GAAPI稳定性保证；平台授权另算。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 008 | 6483 | [LiveStream Agent Studio](https://github.com/HanyuanWang/LiveStream-Agent-Studio) | 商业或许可边界待核 | 运营/投放/内容团队复用录屏、转写、流量和脚本产物。 | 首次公开Beta，仅评价测试/内部研究，平台会员权限与云费用另算。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 008 | 6497 | [OntoGPT](https://github.com/monarch-initiative/ontogpt) | 保留待深核 | 知识研究团队可标准化实体抽取并验证标识符来源。 | 存在的ID不保证匹配语义正确，未ground项明确AUTO。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6500 | [Web Clone Skill](https://github.com/Jane-xiaoer/claude-skill-web-clone) | 方法技能另列 | 前端团队可在授权迁移中复用证据等级与验收方法。 | 可抓取不代表可发布，原站授权独立，未复刻。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 008 | 6505 | [AI Beat](https://github.com/tophant-ai/aibeat) | 团队直接性不足 | 团队可设计对抗场景并把工具/文件/运行事件纳入证据。 | 判断仍需人工复核，执行目标测试本轮未做。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 008 | 6503 | [Jezweb Claude Skills](https://github.com/jezweb/claude-skills) | 方法技能另列 | 团队可复用发布/文档/审阅的产物流程。 | 外部部署/消息操作需单独授权；thinking框架另仓。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
| 008 | 6527 | [Knowledge Agent Template](https://github.com/vercel-labs/knowledge-agent-template) | 工程组件另列 | 团队可集中同步知识源、管理用户并在GitHub/Discord使用。 | MIT 的知识助手模板；有用户管理及公开会话分享，但需 fork、配置并部署。Slack/Linear 仍规划，转模板/工程组件。 主要提供 SDK、协议、运行时、数据或工具集成能力；适合工程组件栏目，不作为即用团队产品优先推荐。 |
| 008 | 6524 | [KAITO](https://github.com/kaito-project/kaito) | 保留待深核 | 平台团队复用GPU资源编排和模型配置。 | 不重加依赖vLLM本体；GPU估算与模型兼容未测。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6523 | [Datadog Pup](https://github.com/DataDog/pup) | 保留待深核 | 运维团队可统一日志、指标、事件和oncall工具入口。 | CLI非Datadog后端，含写工具，凭据存储有文件fallback。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6522 | [VulnHunter](https://github.com/capitalone/VulnHunter) | 团队直接性不足 | 安全团队可复核可达攻击面与修复建议。 | 发现有效性未测，需自有模型访问和授权；未执行。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 008 | 6532 | [Agent Dashboard](https://github.com/hoangsonww/Claude-Code-Agent-Monitor) | 团队直接性不足 | 团队可观察执行状态与token，并接工作通知。 | hook覆盖依runtime版本；非全系统审计，未发通知。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 008 | 6530 | [clawk](https://github.com/clawkwork/clawk) | 团队直接性不足 | 研发团队可复用隔离开发环境与网络allowlist。 | guest运行跳过审批，挂载项目仍可修改；不能保证无数据外流。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 008 | 6536 | [Alumnium](https://github.com/alumnium-hq/alumnium) | 保留待深核 | QA团队可复用Appium/Playwright/Selenium验收流程。 | 模型断言需校准，不保证测试鲁棒性。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6535 | [SWE AF](https://github.com/Agent-Field/SWE-AF) | 团队直接性不足 | 团队可把规格转成实现/审阅/测试流程与跨仓交付。 | 依AgentField；共享learning默认关，未验证benchmark和自动交付。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 008 | 6540 | [Python A2A](https://github.com/themanojdesai/python-a2a) | 保留待深核 | 工程团队可连接不同代理/工具和可视化流程。 | 非官方A2A SDK；协议归属和fullcompat宣传不采信，版本需验证。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6547 | [Tensorlake](https://github.com/tensorlakeai/tensorlake) | 商业或许可边界待核 | 平台团队可复用MicroVM与长任务运行API。 | 服务规模/性能宣传未测，源码SDK不证明完整云控制面开放。 保留候选；采用前需厘清许可、版本、托管服务或功能范围，暂不进入主短名单。 |
| 008 | 6553 | [rizzo pii](https://github.com/Rizzo-AI-Academy/rizzo-pii) | 团队直接性不足 | 法务文档团队可在模型处理前复核敏感实体并替换。 | 去标识化不等于完全匿名/GDPR保证；PyMuPDF与模型许可另算。 现有证据主要支持个人工作、代理编排或产物交接，尚不足以优先推荐为真人团队协作产品；并非永久排除。 |
| 008 | 6558 | [AWS AI Stack](https://github.com/serverless/aws-ai-stack) | 保留待深核 | 团队可复用AWS事件驱动后端与部署结构。 | 需云资源和模型额度，数据处理承诺依具体服务配置，非开箱团队RBAC。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6556 | [MCPM](https://github.com/pathintegral-institute/mcpm.sh) | 保留待深核 | 团队可复用配置、发现工具并减少跨客户端重复安装。 | 公开隧道需认证范围控制；演示视频仍v1旧命令。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6569 | [Fantasy](https://github.com/charmbracelet/fantasy) | 保留待深核 | Go团队可复用模型/工具抽象。 | 图片/音频模型/PDF尚不支持，work in progress。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6580 | [Sematic](https://github.com/sematic-ai/sematic) | 保留待深核 | ML团队可共用类型化管线、注释、运行图和重跑。 | 需部署环境，复现依数据/依赖固定。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6577 | [FalkorDB GraphRAG SDK](https://github.com/FalkorDB/GraphRAG-SDK) | 保留待深核 | 知识团队可检查实体来源并在证据不足时拒答。 | 高准确率不保证事实无误；拒答由应用接入，依FalkorDB。 已有团队应用价值，但当前证据、维护状态或具体部署边界仍值得另行确认；本轮完成分流，不视为已通过收录核验。 |
| 008 | 6588 | [Sentry Skills](https://github.com/getsentry/skills) | 方法技能另列 | 团队可复用PR审阅、上下文规范与问题分流。 | 部分只适合Sentry内部；产品接入/排障技能在sentry-for-ai另仓。 主要通过共享规则、学习材料、模板或工程实践服务团队；单列资料栏目，不作为多人产品优先推荐。 |
