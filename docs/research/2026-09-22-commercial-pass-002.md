# 商业与许可边界核验 · 第 2 批（剩余 25 个）

本批完成商业/许可边界队列的最后 25 个项目分流。团队价值保留在台账中；没有把来源不明、附加条款或尚未成熟的项目自动写成普通开源推荐。

| ID | 项目 | 结论 | Description (EN) | 跟 team 的关系 | 标签 | 限制 |
| ---: | --- | --- | --- | --- | --- | --- |
| 5108 | [DeepSeek Design](https://github.com/Devin-AXIS/deepseek-design) | 商业/许可候选待确认 | A visual design plugin for editable artifacts inside DeepSeek Harness. | 设计研发团队可围绕真实文件修改原型/演示稿并继续交付。 | ai-native, design, prototyping | iPolloWork 第三方产品，source-available 非纯开源；不同插件能力独立。 |
| 5147 | [NLUX](https://github.com/nlkitai/nlux) | 工程组件另列 | React and JavaScript components for conversational AI interfaces. | 前端团队可复用聊天 UI、模型适配与应用模板。 | ai-native, ui-components, javascript | 修改版 MPL2.0 附使用限制，不应当纯 MPL；模型后端需另接。 |
| 5284 | [SpecStory](https://github.com/specstoryai/getspecstory) | 商业/许可候选待确认 | Tools for capturing coding conversations as searchable and shareable engineering knowledge. | 团队可复用历史设计决策、解决方案和提炼技能。 | ai-native, knowledge-management, developer-tools | 多人搜索与同步依赖Cloud，不等于本地工具全含；需注意会话内容范围。 |
| 5305 | [AntSK](https://github.com/shuyu-labs/AntSK) | 商业/许可候选待确认 | A .NET AI knowledge-base and agent platform for private deployment. | C#团队可提供企业知识问答，并复用角色与私有部署能力。 | enterprise-ai, dotnet, rag, self-hosted | 定制许可证保留品牌；特定多租户服务需商业授权；GraphRAG/高级Text2SQL/流程编排属Pro。 |
| 5414 | [LiteLLM Agent Control Plane](https://github.com/LiteLLM-Labs/litellm-agent-control-plane) | 工程组件另列 | A unified interface for running agents across runtimes with sessions and schedules. | 团队通过同一UI/API使用多个代理后端并复用会话。 | ai-native, agent-operations, control-plane | 控制面依赖各runtime；不从access概述推断完整SSO/RBAC。 |
| 5431 | [Xtreme1](https://github.com/xtreme1-io/xtreme1) | 工程组件另列 | A multimodal training-data platform with assisted annotation and ontology management. | 标注团队可统一类别体系、预标注和数据质量复核。 | annotation, multimodal, data-quality | RLHF为beta，企业版另行提供；标注精度未测。 |
| 5477 | [Passmark](https://github.com/bug0inc/passmark) | 工程组件另列 | A Playwright library for natural-language regression tests and multi-model assertions. | QA团队可复用浏览器验收步骤和带AI总结的测试报告。 | ai-native, testing, browser-automation | FSL未来Apache，不是当前纯Apache；多模型一致不保证断言正确。 |
| 5490 | [Meta Ads MCP by Pipeboard](https://github.com/pipeboard-co/meta-ads-mcp) | 工程组件另列 | An MCP integration for Meta advertising operations and performance analysis. | 营销团队可统一查询广告数据和准备活动修改。 | ai-native, mcp, marketing | BSL1.1；其他四广告节点工具不全属本仓，托管服务条件独立，未执行广告修改。 |
| 5521 | [uni-api](https://github.com/yym68686/uni-api) | 工程组件另列 | A configuration-driven LLM API gateway with routing, retries, and key-level controls. | 工程团队可统一多模型入口及故障切换。 | llm-gateway, self-hosted, infrastructure | backend-only，用户计费前端属uni-api-web；不要混写为全栈团队门户。 |
| 5628 | [BricksLLM](https://github.com/bricks-cloud/BricksLLM) | 工程组件另列 | An LLM gateway with per-user limits, usage tracking, and request controls. | 团队统一key分发、成本限制和模型调用观测。 | llm-gateway, governance, cost-management | 托管dashboard另算；脱敏不保证无遗漏。 |
| 5643 | [JXWAF](https://github.com/jx-sec/jxwaf) | 工程组件另列 | A web firewall combining AI-model and semantic traffic analysis. | 安全团队可统一业务防护策略和日志。 | ai-assisted, security, waf | 多租户仅云WAF，标准版不含；防护测试为作者自述，不作效果保证。 |
| 5661 | [AVA Voice Agent for Asterisk](https://github.com/hkjarral/AVA-AI-Voice-Agent-for-Asterisk) | 工程组件另列 | A voice-agent integration for Asterisk and FreePBX with configurable speech and model providers. | 客服/通信团队可接入既有PBX并管理语音流程。 | voice-agents, telephony, customer-support | 多安装管理AVA Operator商业早期预览，非MIT Core；通信兼容需验证。 |
| 5719 | [Polis](https://github.com/compdemocracy/polis) | 商业/许可候选待确认 | An AI-assisted platform for gathering opinions and mapping collective sentiment. | 团队/社区可收集意见并了解共识和分歧。 | collaboration, feedback, collective-intelligence | 不是生成式代理；群体解释需合理样本，AGPL附额外许可。 |
| 5879 | [Power BI Modeling MCP](https://github.com/microsoft/powerbi-modeling-mcp) | 工程组件另列 | An official MCP interface for creating and validating Power BI semantic models. | BI团队可批量维护指标、关系和DAX。 | mcp, business-intelligence, data-modeling | 公开预览且EULA；不能编辑报表页/布局，模型变更需审阅。 |
| 5940 | [AgentBay SDK](https://github.com/agentbay-ai/wuying-agentbay-sdk) | 工程组件另列 | SDKs for cloud sandboxes supporting browser, desktop, mobile, and code workloads. | 平台团队可统一代理执行环境接口。 | ai-native, sandbox, sdk | Apache仅SDK，云沙箱非随仓自托管全部实现；需服务账号。 |
| 5974 | [Product Manager Prompts](https://github.com/deanpeters/product-manager-prompts) | 方法技能另列 | Reusable prompts for product discovery, requirements, stakeholder alignment, and delivery. | 产品团队可共同复用PRD、用户故事和风险复盘结构。 | prompt-templates, product-management, team-practices | 当前CC BY-NC-SA，商业需书面许可；旧MIT副本条件另算。 |
| 5998 | [Jonex](https://github.com/yuezhiai/jonex) | 商业/许可候选待确认 | A multimodal knowledge platform combining parsing, wiki, ontology, and retrieval. | 团队可把分散内容转成有来源的业务知识服务。 | ai-native, knowledge-management, rag | 自定义Apache附加条件；治理与推理准确性未测。 |
| 6014 | [Prometheus by EuniAI](https://github.com/EuniAI/Prometheus) | 商业/许可候选待确认 | A coding-agent platform for issue analysis, reproduction, and patch generation. | 研发团队可复用知识图驱动的修复验收流程。 | ai-native, coding, bug-fixing | GPL/商业双许可，benchmark和竞品描述未复验。 |
| 6081 | [Xalgorix](https://github.com/xalgorix/xalgorix) | 商业/许可候选待确认 | An AI security-testing agent with independent finding verification and reports. | 安全团队可复核漏洞证据和修复报告。 | ai-native, security, reporting | 自托管single-operator；团队/RBAC在托管Team，验证成功不保证通用可利用性。 |
| 6282 | [Loki Mode](https://github.com/asklokesh/loki-mode) | 商业/许可候选待确认 | A spec-driven coding harness with deterministic checks and verification artifacts. | 团队可对PR运行检查并保存可审阅证据。 | ai-native, coding, verification | BSL1.1，计划2030-03-19转Apache；企业服务独立、SAML仍规划，示例可跳过宿主权限。 |
| 6304 | [Judgeval](https://github.com/JudgmentLabs/judgeval) | 工程组件另列 | A Python SDK for agent tracing, behavioral evaluation, and regression analysis. | 团队可从生产轨迹构建评测并接告警。 | llmops, evaluation, observability | 服务端监控依Judgment服务，judge可能误判。 |
| 6442 | [LandingAI ADE Python](https://github.com/landing-ai/ade-python) | 工程组件另列 | An official client for grounded document parsing and typed extraction APIs. | 文档工程团队可统一PDF/图像抽取和异步作业。 | document-processing, structured-extraction, sdk | SDK非完整解析模型开源，需LandingAI服务。 |
| 6455 | [Arcade MCP](https://github.com/ArcadeAI/arcade-mcp) | 工程组件另列 | A Python MCP framework with authorization-aware tools and evaluations. | 集成团队可复用内部API和OAuth工具授权。 | mcp, python, authorization | 托管凭据/Cloud不等于MIT框架完整自托管服务。 |
| 6466 | [99AI](https://github.com/vastxie/99AI) | 商业/许可候选待确认 | A self-hostable AI web platform with multiple users and model services. | 团队可集中提供模型聊天与用户管理。 | enterprise-ai, multi-user, self-hosted | 开发版授权另算，不能将全部功能默认视为Apache社区提供。 |
| 6483 | [LiveStream Agent Studio](https://github.com/HanyuanWang/LiveStream-Agent-Studio) | 商业/许可候选待确认 | A Windows workbench for livestream-commerce analysis and content planning. | 运营/投放/内容团队复用录屏、转写、流量和脚本产物。 | ai-native, marketing, content-production | 首次公开Beta，仅评价测试/内部研究，平台会员权限与云费用另算。 |

## 商业边界阶段状态

225 个商业/许可边界项目已全部分流：首批 200 个中 15 个完成官方重点核验，1 个进入建议审阅；本批 25 个完成剩余分流。下一阶段可处理工程组件、方法技能和团队直接性不足项目。
