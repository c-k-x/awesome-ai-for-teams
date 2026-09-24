# Awesome AI for Teams

[简体中文](README.md) | English

A curated list of AI tools and practical resources to help teams discover and choose ways to collaborate, develop software, and build, operate, and improve AI applications.

Browse by the work you need to do. Each entry links to the project and briefly explains its purpose. The list includes ready-to-use products and developer components; ordering is not a ranking. Descriptions summarize official material, not standardized hands-on testing or production certification.

[Suggest a resource or correct an entry](CONTRIBUTING.en.md).

## Contents

- [Model Access](#model-access)
- [Document Parsing and Preparation](#document-parsing-and-preparation)
- [Agent Assistants, Sessions, and Handoffs](#agent-assistants-sessions-and-handoffs)
- [Chat and Meeting Integrations](#chat-and-meeting-integrations)
- [Shared Collaboration Spaces](#shared-collaboration-spaces)
- [Task Delegation and Delivery](#task-delegation-and-delivery)
- [Whiteboards and Visual Collaboration](#whiteboards-and-visual-collaboration)
- [Team Knowledge and Shared Practices](#team-knowledge-and-shared-practices)
  - [Shared Knowledge and Assistants](#shared-knowledge-and-assistants)
  - [Shared Rules and Experience](#shared-rules-and-experience)
- [Knowledge Retrieval and Memory](#knowledge-retrieval-and-memory)
- [Application Development and Workflows](#application-development-and-workflows)
- [Execution Environments and Managed Runtimes](#execution-environments-and-managed-runtimes)
- [Evaluation, Observability, and Content Checks](#evaluation-observability-and-content-checks)
- [Protocols and Learning Resources](#protocols-and-learning-resources)
  - [Protocols and Conventions](#protocols-and-conventions)
  - [Practical Guides](#practical-guides)
  - [Tutorials and Research](#tutorials-and-research)
  - [More Resource Directories](#more-resource-directories)
- [Contributing](#contributing)
- [License](#license)

## Model Access

Unify model access, routing, and usage management across providers, or use existing cloud model services.

- [AIHelms](https://github.com/beizhu-1209/AIHelms) - Manage model quotas, cost attribution, and skill approvals by person, department, and project. GPL and commercial licensing options; A2A collaboration remains planned.
- [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html) - Access hosted foundation models and knowledge bases within AWS resource and access management.
- [Bifrost](https://github.com/maximhq/bifrost) - Access multiple model providers through one gateway with fallbacks, load balancing, and request logs; clustering and some governance features require the enterprise edition.
- [Gemini Enterprise Agent Platform (Vertex AI)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes) - Manage model access, deployment, and agent runtimes on Google Cloud under the platform name replacing Vertex AI.
- [Helicone](https://docs.helicone.ai/getting-started/quick-start) - Observe model requests and usage through a gateway or asynchronous logging, with routing and request controls in the gateway path.
- [Higress](https://github.com/higress-group/higress) - Centralize model APIs and MCP tools with authentication, rate limits, request logs, and observability so team projects can reuse common access infrastructure.
- [LiteLLM](https://github.com/BerriAI/litellm) - Access multiple model providers through an SDK or proxy, with application keys, routing, and usage management in the proxy.
- [MCPHub](https://github.com/samanhappy/mcphub) - Centralize MCP servers with per-user credentials, visibility controls, request logs, and health monitoring.
- [MCPJungle](https://github.com/mcpjungle/MCPJungle) - Publish a shared MCP tool directory and control which servers each client can access, with centralized observability. OAuth flows remain planned.
- [Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/what-is-foundry) - Organize models, agents, tools, and evaluation assets by project on Azure with managed execution and observability.
- [Obot](https://github.com/obot-platform/obot) - Distribute approved models, MCP servers, and skills across an organization with shared identity, access, and audit infrastructure for different AI clients. Device-side and server-side auditing require their respective components.
- [OpenRouter](https://openrouter.ai/docs/quickstart) - Access models through a hosted endpoint with provider selection, model fallbacks, and centralized usage records.
- [Plano](https://github.com/katanemo/plano) - Centralize model and agent routing, filters, and tracing in a proxy layer so team applications can reuse shared runtime configuration.
- [Portkey AI Gateway](https://github.com/Portkey-AI/gateway) - Centralize model retries, fallback routing, and load balancing in a gateway; assess the full management platform separately.
- [TokenHub](https://github.com/astaxie/TokenHub) - Allocate model access and project keys by team role, track usage by project and cost center, and compare internal records with provider bills.

## Document Parsing and Preparation

Convert PDFs, office files, scans, and other source material into content suitable for model input and retrieval.

- [Docling](https://github.com/docling-project/docling) - Convert PDFs, office files, and images into a structured document representation with text, tables, and layout information.
- [LlamaParse](https://developers.llamaindex.ai/llamaparse/parse/) - Use a parsing service to prepare scans, tables, and charts in complex documents for extraction, retrieval, and analysis.
- [MarkItDown](https://github.com/microsoft/markitdown) - Convert common office files, PDFs, and web pages to Markdown for model input and text analysis.
- [Unstructured](https://github.com/Unstructured-IO/unstructured) - Partition documents into typed elements with metadata for cleaning, chunking, and knowledge retrieval.

## Agent Assistants, Sessions, and Handoffs

Use assistants to execute tasks, manage multiple sessions, and continue work across sessions or tools.

- [Aider](https://github.com/Aider-AI/aider) - Edit projects from the terminal using repository maps and Git, with lint and test feedback to help teams inspect and revert AI-generated changes.
- [Apache Maka (Incubating)](https://github.com/apache/maka) - Run agent tasks through desktop or terminal interfaces with event records for tool calls and completion states; no official Apache release yet.
- [Claude Code](https://code.claude.com/docs/en/overview) - Read a project, edit files, and run development commands to investigate problems and implement changes with execution feedback.
- [Clay Studio (chadbyte)](https://github.com/chadbyte/clay) - Expose local coding agents through a browser workspace for cross-device access, shared sessions, and handoffs.
- [cli-continues](https://github.com/yigitkonur/cli-continues) - Prepare text-based handoffs from local coding sessions so another assistant can continue the project; running processes are not migrated.
- [codeg](https://github.com/xintaofei/codeg) - Manage coding agent sessions and tasks in one interface, separating changes with Git worktrees for review.
- [Codex](https://github.com/openai/codex) - Read and modify repositories and run commands and checks from a terminal-based coding agent.
- [Cursor](https://cursor.com/) - Combine code, terminal output, and diffs in an editor to make changes that developers can review.
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - Use Gemini from the terminal for repository analysis, file changes, and command execution, with headless automation support.
- [Golutra](https://github.com/golutra/golutra) - Turn existing CLI agents into a parallel AI team with workflows, result handoffs, and long-running memory; EverOS can provide the memory layer; licensed under BSL-1.1.
- [Herdr](https://github.com/herdrdev/herdr) - Manage multiple agent terminals, identify sessions waiting for input, and control workspaces through a CLI.
- [Hermes Agent (Nous Research)](https://github.com/NousResearch/hermes-agent) - Combine a terminal, messaging gateway, scheduled tasks, and file-based memory to reuse preferences and procedures over time.
- [Hive (tt-a1i)](https://github.com/tt-a1i/hive) - Organize Claude Code, Codex, Gemini, and other CLI agents into a visible local team with PTYs, a shared Markdown task graph, and a browser workbench; BUSL-1.1 with no multi-user authentication boundary.
- [holaOS](https://github.com/holaboss-ai/holaOS) - Use applications and agents side by side on a desktop with reusable tools, skills, and local memory; team governance depends on the edition.
- [Letta](https://github.com/letta-ai/letta-code) - Run persistent agents with versioned file-based memory through a CLI or application interfaces.
- [MCO](https://github.com/mco-org/mco) - Run multiple coding agents in parallel from a CLI, compare their results, and execute in read-only or write modes; an engineering orchestration component rather than a multi-user workspace.
- [OpenClaw](https://github.com/openclaw/openclaw) - Run a persistent assistant gateway that accepts tasks from messaging platforms and devices and manages tools, sessions, and workspace memory.
- [OpenCode](https://github.com/anomalyco/opencode) - Choose model providers and reuse project rules, tools, and agent roles in a coding assistant.
- [OpenHands Agent Canvas](https://github.com/OpenHands/OpenHands) - Manage coding agent sessions in a self-hostable console, switch between local and remote backends, and automate development tasks through schedules and events.
- [OpenHive (Aden)](https://github.com/aden-hive/hive) - Run production business processes through a multi-agent harness where a Queen grows worker agents around a persistent plan, shared ledger, recovery, observability, and human oversight; Apache-2.0.
- [OpenMemory (Mem0)](https://github.com/mem0ai/openmemory) - Convert and import coding sessions across Claude Code, Codex, and OpenCode; the current beta differs from the archived memory service of the same name.
- [Tabby](https://github.com/TabbyML/tabby) - Self-host code completion and chat backed by repositories and internal documentation, giving team editors shared development context.

## Chat and Meeting Integrations

Bring assistants into existing chat and meeting channels to reduce manual transfer of requests, context, and results.

- [AgentConnect](https://github.com/agentconnect-md/agentconnect) - Connect agents on execution machines to Slack, Feishu, and code platforms for tasks triggered by messages, events, or schedules.
- [Agentic Inbox](https://github.com/cloudflare/agentic-inbox) - Share an email interface with AI-assisted conversation search and reply drafting on Cloudflare Workers. Intended for trusted groups: authorized users can access every mailbox.
- [Ask Gemini in Google Chat](https://support.google.com/chat/answer/17036303) - Use work context in Google Chat to find information, prepare content, and act through connected applications; currently available only in English.
- [Centaur (Paradigm)](https://github.com/paradigmxyz/centaur) - Delegate engineering tasks from Slack to Kubernetes sandboxes and return progress and results to the originating thread.
- [Claude Tag](https://www.anthropic.com/news/introducing-claude-tag) - Let teammates jointly delegate and follow Claude tasks in Slack threads; currently a beta for Team and Enterprise.
- [DingTalk AI Assistant](https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode) - Connect an existing agent service to DingTalk through passthrough mode, keeping planning and execution in the backend.
- [Feishu (豆包工作伙伴, formerly aily)](https://www.feishu.cn/community/article?id=7605435352983014344) - Connect knowledge, skills, and business workflows within Feishu for workplace questions and tasks; formerly aily.
- [LangBot](https://github.com/langbot-app/LangBot) - Connect AI assistants to chat platforms such as Feishu and WeCom, using built-in capabilities or existing Dify and n8n workflows.
- [Mattermost Agents](https://docs.mattermost.com/administration-guide/configure/agents-admin-guide) - Configure AI assistants in Mattermost channels and direct messages, managing model and tool access within existing discussions.
- [Meetily](https://github.com/Zackriya-Solutions/meetily) - Capture and transcribe meetings locally, then summarize them with a local or cloud model; export and team features differ between Community and Pro editions.
- [Microsoft Teams Agents](https://support.microsoft.com/en-us/teams/platform/frequently-asked-questions-about-agents-in-microsoft-teams) - Use built-in or custom agents in meetings, channels, and chats for notes, project questions, and business tasks, depending on agent type and licensing.
- [Nextcloud Assistant Talk Bot](https://github.com/nextcloud/talk_bot_ai) - Connect Nextcloud Assistant to Talk conversations so participants can ask the configured model through @assistant.
- [OpenTag (Amplift)](https://github.com/amplifthq/opentag) - Queue coding work from Slack, request approval for key actions, and return progress and delivery evidence to the originating thread. Slack is the supported team entry point; distinct from Open Tag by fancyboi999.
- [Rocket.Chat AI App](https://docs.rocket.chat/docs/rocketchat-ai-app-setup-guide) - Add knowledge answers and conversation summaries to team chat and customer support; the AI app is a licensed beta feature.
- [Slack AI Agents](https://slack.com/help/articles/33076000248851-Work-with-AI-agents-in-Slack) - Use Slackbot or installed agent applications from channels and dedicated sessions, keeping requests and results in team discussions.
- [Tentix](https://github.com/labring/tentix) - Combine AI replies, knowledge retrieval, and human handoffs in support tickets for shared customer service workflows; some staff management and analytics features remain planned.
- [Vexa](https://github.com/Vexa-ai/vexa) - Send bots into Google Meet, Teams, or Zoom and access live transcripts through an API for meeting notes and downstream knowledge workflows.
- [WeCom AI Bot](https://github.com/WecomTeam/aibot-node-sdk) - Use the official SDK for messages, card events, and streaming replies to connect custom AI services to WeCom.
- [ZoomMate](https://news.zoom.com/zoom-launches-zoommate/) - Use meeting and chat context to prepare artifacts and carry out CRM or ticket follow-up through configured workflows.

## Shared Collaboration Spaces

Let people and agents continue work around shared discussions, material, and artifacts instead of disconnected sessions.

- [Agenta](https://github.com/Agenta-AI/agenta) - Bring assistant configuration, shared files, triggers, and execution traces into a workspace for teams to maintain and reuse.
- [agentchattr](https://github.com/bcurts/agentchattr) - Coordinate people and coding agents in shared local channels, using mentions to hand off tasks and context; intended for local or trusted networks.
- [AgentTeams](https://github.com/agentscope-ai/AgentTeams) - Coordinate people and agents from different runtimes in Matrix rooms, sharing files and visible task progress while the platform manages agent containers.
- [Alook](https://github.com/alookai/alook) - Invite colleagues into shared rooms, channels, and direct messages with persistent coding agents running on connected machines.
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - Bring documents, wikis, and projects into a shared workspace with AI search and writing assistance; verify self-hosting and enterprise features for the chosen edition.
- [Buzz (Block)](https://github.com/block/buzz) - Connect people and agents in self-hosted channels using signed identities and shared event records for discussion and results.
- [Cloudflare OS](https://github.com/cloudflare/cloudflare-os) - Create and share stateful AI-built applications for ongoing collaboration on Cloudflare infrastructure; currently in early access.
- [Commonly](https://github.com/Team-Commonly/commonly) - Let people and agents share persistent rooms, task boards, memory, and artifacts, with GitHub task synchronization and reviewable activity. The project is still early.
- [Cumora](https://github.com/yetone/cumora) - Bring people and persistent agents into the same group chats, direct messages, task boards, and calendars for shared assignments and handoffs. Mobile support varies by platform.
- [HQBase](https://github.com/HQBase/hqbase) - Run shared team mailboxes in your own Cloudflare account, using member access controls, audit history, and MCP access so colleagues and assistants can work with the same email.
- [Lemma](https://github.com/lemma-work/lemma-platform) - Provide tables, files, permissions, workflows, and human input steps for business applications used by people and agents.
- [Lody](https://github.com/LodyAI/Lody) - Share coding-agent conversations, files, and diffs with teammates and review permission requests across devices; document workspaces remain planned.
- [Macro](https://github.com/macro-inc/macro) - Link email, messages, tasks, and documents in one workspace for people and agents to retrieve context and follow up on work.
- [Manor AI](https://github.com/manor-os/manor-ai) - Combine knowledge retrieval, agent tasks, tool bindings, and approvals in a self-hosted workspace with execution and artifact records.
- [Octo](https://github.com/Mininglamp-OSS/octo-server) - Connect organizational chat, files, and agent runtimes in a backend whose companion clients show replies, status, and tool activity.
- [Omnigent](https://github.com/omnigent-ai/omnigent) - Invite teammates to share, co-drive, or fork live agent sessions for pairing and handoffs; co-driving executes on the original owner’s machine.
- [Open WebUI](https://github.com/open-webui/open-webui) - Connect models, knowledge bases, and tools in a self-hosted interface where members collaborate through shared channels and notes with group-based permissions.
- [OpenAgents Workspace](https://github.com/openagents-org/openagents) - Invite teammates into a workspace where people and agents share threads, files, and a browser; headless Goose uses automatic tool execution.
- [QM](https://github.com/yc-software/qm) - Organize assistants, files, memory, and execution by personal and room scope for internal collaboration experiments; labeled early experimental software.
- [Relaticle](https://github.com/relaticle/relaticle) - Share customer data in a self-hosted CRM and expose MCP tools to agents within workspace-scoped access controls. Licensed under AGPL.
- [Rowboat](https://github.com/rowboatlabs/rowboat) - Share threads, files, whiteboards, and version history while each teammate’s local agent brings results from personal context back for review.
- [Synapse (Z.ai)](https://github.com/zai-org/Synapse) - Connect members, native actors, and external agents through shared sessions with resource grants and handoffs; still in early development.
- [team9](https://github.com/team9ai/team9) - Collaborate with OpenClaw-based agents through channels, threads, and shared documents that retain discussion and artifacts.
- [Tutti](https://github.com/tutti-os/tutti) - Link agent sessions, tasks, and files to reduce handoff work; evaluate the local edition and multiplayer VM rooms separately.
- [XYNE Spaces](https://github.com/juspay/xyne-spaces) - Bring messages, email, and documents into organizational search and collaboration with permission-aware context for people and agents.

## Task Delegation and Delivery

Make task ownership, progress, deliverables, and review handoffs visible; completion and acceptance semantics differ by tool.

- [AgentRQ](https://github.com/agentrq/agentrq) - Assign tasks to people and agents through a shared workspace, synchronize progress, and review permission requests for sensitive actions.
- [Asana AI Teammates](https://asana.com/product/ai/ai-teammates) - Take assignments in Asana projects, use project context to prepare material and drafts, and return work for team review.
- [Backlog.md](https://github.com/MrLesk/Backlog.md) - Store tasks, dependencies, and acceptance criteria as repository Markdown, with CLI, MCP, and board interfaces for people and coding agents to maintain delivery plans.
- [Chorus](https://github.com/Chorus-AIDLC/Chorus) - Link proposals, documents, task execution, and human verification while managing coding agent permissions, sessions, and progress for team delivery review.
- [GitHub Agent HQ](https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents) - Select coding agents, inspect sessions, and review their pull requests within existing GitHub delivery workflows.
- [Kaneo](https://github.com/usekaneo/kaneo) - Let people and agents work with the same projects, tasks, and labels through a self-hosted project workspace and its official MCP interface.
- [Linear Agents](https://linear.app/docs/agents-in-linear) - Delegate to agents from issues and track progress and artifacts there while retaining a human assignee.
- [Markplane](https://github.com/zerowand01/markplane) - Keep tasks, plans, and dependencies in Markdown shared through Git, generating project summaries that teammates' assistants can access through MCP to continue work.
- [Mission Control by Builderz](https://github.com/builderz-labs/mission-control) - Centralize agent task assignments, reviews, costs, roles, and approvals in a self-hosted operations dashboard. Currently alpha software.
- [monday.com Agents](https://support.monday.com/hc/en-us/articles/33347027353746-AI-Agents-on-monday-com) - Process board assignments or triggers with contextual classification, updates, handoffs, and execution records.
- [MonkeyCode](https://github.com/chaitin/MonkeyCode) - Manage requirements, coding tasks, models, and development environments in a shared AI development platform that can run inside an enterprise network.
- [Multica](https://github.com/multica-ai/multica) - Assign issues to existing coding agents on your own runtimes and return progress, blockers, and results to the same issue for team review.
- [Open Tag](https://github.com/fancyboi999/open-tag) - Turn channel messages into claimable, assignable, and transferable agent tasks with thread context; intended for self-hosted evaluation.
- [Open-Inspect](https://github.com/ColeMurray/background-agents) - Collaborate in background coding sessions and hand work through Slack, tickets, and pull requests while retaining contribution attribution. Intended for a trusted single organization; repository access is not checked per user.
- [Optio](https://github.com/jonwiggins/optio) - Assign ticket, scheduled, and event-triggered work to agents on team machines or Kubernetes, with workspace roles, OAuth/OIDC, and execution visibility.
- [Paca](https://github.com/Paca-AI/paca) - Let people and agents claim tasks and maintain requirements and design documents on the same Scrum board and sprints, with member roles and live progress for team delivery.
- [Paperclip](https://github.com/paperclipai/paperclip) - Coordinate human users and agents through organization-scoped tasks, approvals, roles, budgets, and execution records.
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - Generate PR descriptions, reviews, and improvement suggestions through CLI, CI, or code-host events; now community-maintained and distinct from the commercial Qodo product.
- [Raft (formerly Slock)](https://raft.build/) - Connect team channels with agent task claims and review states so teammates can hand off work and inspect deliverables.
- [Solo (solo-agent)](https://github.com/solo-agent/solo) - Link agent task ownership, execution records, delivery versions, and reviews in submission and revision workflows.

## Whiteboards and Visual Collaboration

Turn AI drafts into visual artifacts that teams can discuss, edit, or embed in products.

- [Excalidraw MCP App](https://github.com/excalidraw/excalidraw-mcp) - Generate and interactively edit Excalidraw diagrams in MCP Apps clients so teams can refine AI drafts.
- [FigJam AI](https://help.figma.com/hc/en-us/articles/16822138920343-Use-AI-tools-in-FigJam) - Generate workshop boards and diagrams, then sort and summarize the sticky notes from team discussions.
- [Miro AI](https://miro.com/ai/ai-overview/) - Use material on a shared canvas to organize ideas and generate documents and diagrams for product and design discussions.
- [OpenPencil](https://github.com/open-pencil/open-pencil) - Combine real-time collaborative design editing with AI and MCP so teammates and agents can modify, inspect, and export the same design; under active development.
- [tldraw Agent Starter Kit](https://tldraw.dev/starter-kits/agent) - Provide an application template for agents to read, create, and modify canvas shapes in visual collaboration products.

## Team Knowledge and Shared Practices

Help teammates and assistants reuse organizational knowledge, rules, skills, and experience with less repeated explanation.

### Shared Knowledge and Assistants

- [53AI Hub](https://github.com/53AI/53AIHub) - Publish agents, prompts, and AI tools from multiple platforms through a team portal with grouping and access controls; organizational directory integrations depend on the edition.
- [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) - Organize document chat, agents, and tools in workspaces with local or cloud models; multi-user accounts and permissions require the Docker edition.
- [Atlassian Rovo](https://www.atlassian.com/software/rovo) - Search Jira, Confluence, and connected work knowledge, and configure agents to organize and act on project information.
- [Bionic](https://github.com/bionic-gpt/bionic-gpt) - Provide internal teams with approved models, knowledge, and tools in a self-hosted AI workspace with permissions, usage controls, and audit records.
- [DataHub](https://github.com/datahub-project/datahub) - Maintain shared data ownership, lineage, and discussions in a metadata graph that supports human discovery and AI context. DataHub Cloud is a separate managed service.
- [DocsGPT](https://github.com/arc53/DocsGPT) - Turn shared documents and meeting material into searchable knowledge with agents, member roles, and team-scoped sharing.
- [Dust](https://dust.tt/) - Connect company knowledge and business tools to shared agents so teammates can reuse common answers and working methods.
- [Glean Independent Agents](https://www.glean.com/blog/introducing-independent-agents) - Use connected company knowledge for ongoing investigations, feedback processing, and follow-up with human review.
- [LibreChat](https://github.com/danny-avila/LibreChat) - Use multiple model providers in a self-hostable chat platform and share assistants with tools and file search with selected users and groups.
- [MaxKB](https://github.com/1Panel-dev/MaxKB) - Build internal assistants from document ingestion, knowledge retrieval, and workflows, then embed them in existing business systems for colleagues.
- [Nexent](https://github.com/ModelEngine-Group/nexent) - Share agent tools, skills, and memory through a no-code platform with multi-tenancy and role-based resource access.
- [Notion Agent](https://www.notion.com/help/notion-agent) - Find workspace information and create or edit pages and databases to carry out document-based tasks.
- [Notion Custom Agents](https://www.notion.com/help/custom-agents) - Configure shared assistants for recurring questions, feedback triage, and reports triggered by schedules or events.
- [Octop](https://github.com/TencentCloud/Octop) - Share one assistant deployment across a small team, with per-user agents and workspaces, JWT authentication, and workplace messaging integrations. Shared resource pools and autonomous AgentTeams remain planned.
- [OmniBox](https://github.com/import-ai/omnibox) - Collect documents and share knowledge-based questions and answers in multi-tenant spaces with team permissions; RSS support remains planned.
- [Onyx](https://github.com/onyx-dot-app/onyx) - Connect organizational knowledge and share chats and custom agents; standard deployments include document sync and retrieval, while Lite and enterprise capabilities differ.
- [OpenContracts](https://github.com/Open-Source-Legal/OpenContracts) - Let teams annotate documents, maintain citation graphs, and review agent-assisted findings through corpus permissions, version history, and discussions.
- [OpenKnowledge](https://github.com/inkeep/open-knowledge) - Share and sync Markdown knowledge bases, specifications, and notes through Git/GitHub, with agents searching and editing team material inside the editor.
- [OpenMetadata](https://github.com/open-metadata/OpenMetadata) - Link data ownership, lineage, quality, business terms, and organizational knowledge into shared context for people and AI agents. Enterprise AI capabilities such as AI Studio are offered separately through Collate.
- [PandaWiki](https://github.com/chaitin/PandaWiki) - Publish product documentation, technical material, and FAQs as wikis with AI writing, search, and answers, including integrations with team chat channels.
- [WeKnora](https://github.com/Tencent/WeKnora) - Sync sources such as Feishu and GitLab into shared knowledge bases for retrieval and answers, and organize documents into editable wikis with revision history.
- [Yuxi](https://github.com/xerrors/Yuxi) - Share knowledge bases, agents, and skills by tenant, department, and user in a self-hosted platform with resource permissions and approvals.

### Shared Rules and Experience

- [Agent Package Manager](https://github.com/microsoft/apm) - Version and distribute team skills, prompts, and plugins with manifests, lockfiles, organization policies, and CI checks for configuration drift.
- [Agent Skills Platform](https://github.com/FrancyJGLisboa/agent-skills-platform) - Package reusable skills with ownership, approvals, versions, and validation evidence for colleagues to install through a governed marketplace.
- [Knowns](https://github.com/knowns-dev/knowns) - Store requirements, tasks, acceptance criteria, and decisions in the repository for teammates and assistants to reuse through CLI and MCP; a dedicated team sync service remains planned.
- [MEX](https://github.com/mex-memory/mex) - Keep architecture, decisions, and handoffs in the code repository for teammates and coding agents to retrieve and reuse; share through Git while maintaining local indexes separately.
- [Observal](https://github.com/Observal/Observal) - Register internal agents, skills, and MCP tools, review versions, and use adoption and session feedback to improve shared assets.
- [Potpie](https://github.com/potpie-ai/potpie) - Organize code, pull requests, tasks, and team decisions into a searchable context graph so coding assistants can reuse project background and engineering knowledge.
- [SkillHub](https://github.com/iflytek/skillhub) - Publish and distribute organizational skills through team namespaces, owner/admin/member roles, versioning, and promotion reviews. Distributed skills retain their own licenses.
- [skillshare](https://github.com/runkids/skillshare) - Sync skills, rules, and agent definitions across AI coding tools from one source, distributing them through project configuration and team Git repositories.
- [TeamAI CLI](https://github.com/Tencent/teamai-cli) - Distribute team skills, rules, and MCP configuration through Git and retrieve shared lessons across agent clients.
- [TencentDB Agent Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) - Capture conversations through a proxy and derive memories, skills, and knowledge assets for later agent context retrieval.

## Knowledge Retrieval and Memory

Store, organize, and retrieve information for later agent tasks; coverage of documents, conversational memory, and skills varies by tool.

- [Basic Memory](https://github.com/basicmachines-co/basic-memory) - Keep knowledge in Markdown notes that people and assistants can edit, search, and reuse through indexes, relations, and MCP.
- [Cognee](https://github.com/topoteretes/cognee) - Process scattered material into text indexes and knowledge graphs for retrieval across documents and relationships.
- [EverOS](https://github.com/EverMind-AI/EverOS) - Provide a local-first, Markdown-native long-term memory layer that different agents, applications, and workflows can share; it is memory infrastructure rather than a multi-user permission workspace.
- [Graphiti](https://github.com/getzep/graphiti) - Build temporal knowledge graphs from text or structured data to query relationships, changes, and source information.
- [LangMem](https://github.com/langchain-ai/langmem) - Provide memory extraction, update, and search components for developers using LangGraph Store or their own storage.
- [MCP Knowledge Graph Memory Server](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) - Store entities, relations, and observations in a local file as a reference implementation of structured memory tools for MCP clients.
- [Mem0](https://github.com/mem0ai/mem0) - Extract and retrieve conversational preferences and facts for existing applications to reduce repeated questions across sessions.
- [Memobase](https://github.com/memodb-io/memobase) - Maintain structured user profiles and event timelines from conversations for personalized application context.
- [Memora (Microsoft)](https://github.com/microsoft/Memora) - Separate memory content, abstracts, and retrieval cues for developers studying detail preservation and recall.
- [Memoria (Matrix Origin)](https://github.com/matrixorigin/Memoria) - Add retrieval, snapshots, branches, and merging to agent memory so teams can inspect and revise changes.
- [MemOS](https://github.com/MemTensor/MemOS) - Add long-term context to existing agents through memory APIs or host plugins for user information and task experience.
- [MemU](https://github.com/NevaMind-AI/memU) - Turn personal session experience into retrievable memories and skills across assistants; team access management is a separate concern.
- [OpenViking](https://github.com/volcengine/OpenViking) - Organize resources, memories, and skills with directories, summaries, and semantic retrieval for progressive context access.
- [ReMe (formerly MemoryScope)](https://github.com/agentscope-ai/ReMe) - Organize conversations and external material into an editable Markdown knowledge workspace that agents can search, read, and update.
- [Supermemory](https://github.com/supermemoryai/supermemory) - Combine user profiles, memory extraction, and document retrieval through APIs to simplify personalized assistant context.
- [Zep](https://help.getzep.com/concepts) - Turn conversations and business data into temporal graphs and assemble retrieved context for agents; this entry covers the hosted service.

## Application Development and Workflows

Connect models, tools, and multiple steps into usable applications or business workflows.

- [Activepieces](https://github.com/activepieces/activepieces) - Connect AI, business applications, and human approval steps in visual workflows using extensible integration components; enterprise features are offered separately.
- [AgentScope](https://github.com/agentscope-ai/agentscope) - Compose models, tools, and agent collaboration components in Python to build custom assistant applications.
- [AutoGen](https://github.com/microsoft/autogen) - Build message-driven agent teams with turn-taking and handoffs; in maintenance mode, with official migration guidance for new projects.
- [Coze Studio](https://github.com/coze-dev/coze-studio) - Build and publish assistants with visual knowledge, plugin, and workflow tools; this entry covers the self-hostable Studio.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Organize agent collaboration through roles, tasks, and workflows with explicit handoffs.
- [Dify](https://github.com/langgenius/dify) - Combine knowledge retrieval, prompts, and tool calls into AI applications published as web interfaces or APIs.
- [Elastic Agent Builder](https://www.elastic.co/docs/explore-analyze/ai-features/elastic-agent-builder) - Configure models, instructions, and tools over Elasticsearch data to build assistants that query organizational information.
- [Haystack](https://github.com/deepset-ai/haystack) - Compose document indexing, retrieval, and agent workflows from replaceable Python components with explicit control over context preparation, routing, and generation.
- [LangGraph](https://github.com/langchain-ai/langgraph) - Build multi-step agents with explicit state and branching, adding persistence and human review to resume work.
- [Lindy](https://docs.lindy.ai/) - Connect email, calendars, and CRM from Slack and save follow-up work or recurring reports as reusable routines.
- [Mastra](https://github.com/mastra-ai/mastra) - Build TypeScript agents with tools, memory, and evaluation, organizing multi-step work into workflows that can pause for human input.
- [n8n](https://github.com/n8n-io/n8n) - Connect forms, email, business APIs, and AI nodes to automate data processing and follow-up actions across systems.
- [Salesforce Agentforce](https://www.salesforce.com/agentforce/) - Connect natural-language requests to Salesforce data and configured business actions for sales and service agents.
- [Sim](https://github.com/simstudioai/sim) - Build agents with visual workflows, shared files, and knowledge bases, connect business systems, and inspect run logs; chat uses a Sim-managed service.
- [Temporal](https://docs.temporal.io/evaluate/understanding-temporal) - Use durable workflows for model calls, external operations, and long human waits, with recovery and retries that still require idempotent business operations.

## Execution Environments and Managed Runtimes

Provide environments for code and files, or host agent execution loops; sandboxes and managed agent runtimes serve different roles.

- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview) - Host Claude execution loops, sessions, and environments, exposing progress and artifacts through events; currently in beta.
- [ClawManager](https://github.com/Yuan-lab-LLM/ClawManager) - Manage multi-user agent runtimes on Kubernetes with centralized identity, model access, costs, and reusable resources. Team orchestration also includes agent groups, not only human collaboration.
- [Daytona](https://www.daytona.io/docs/) - Manage project sandboxes, files, and processes through APIs to provide working environments for coding agents.
- [E2B](https://github.com/e2b-dev/E2B) - Create Linux sandboxes on demand to run agent-generated code and retrieve outputs and files.
- [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) - Manage Docker or Kubernetes sandboxes through unified APIs, providing command execution, file operations, and code environments for agents.

## Evaluation, Observability, and Content Checks

Evaluate changes with test cases, investigate execution problems, or add specialized content risk classification.

- [Arize Phoenix](https://github.com/Arize-ai/phoenix) - Inspect AI traces, maintain datasets, and compare evaluation experiments in a self-hostable platform.
- [Braintrust](https://www.braintrust.dev/docs/evaluate) - Turn production traces into test data and compare prompts, models, and agents with shared tasks and evaluators.
- [Coze Loop](https://github.com/coze-dev/coze-loop) - Maintain shared prompt versions, evaluation datasets, and agent execution traces for development and operations. Distinguish the open-source core from commercial features.
- [Datadog Agent Observability](https://docs.datadoghq.com/llm_observability/) - Connect model calls, tool calls, and application traces to investigate agents within an existing Datadog environment.
- [DeepEval](https://deepeval.com/docs/getting-started) - Test AI answers and execution with cases, metrics, and thresholds, integrating quality regression checks into Python development.
- [Grafana Cloud Agent Observability](https://grafana.com/docs/grafana-cloud/observe-and-act/agent-observability/introduction/) - Inspect agent sessions, model calls, and online evaluations in Grafana Cloud, distinct from deploying Tempo and Loki alone.
- [Laminar](https://github.com/lmnr-ai/lmnr) - Share agent traces, evaluation results, and dashboards, and route configured behavioral alerts to Slack for investigation.
- [Langfuse](https://github.com/langfuse/langfuse) - Connect traces, prompt versions, test cases, and scores to debug and improve AI applications collaboratively.
- [LangSmith](https://docs.langchain.com/langsmith/observability) - Trace agent execution and compare application versions using datasets, human feedback, and evaluation experiments.
- [LangWatch](https://github.com/langwatch/langwatch) - Combine tracing, agent simulation tests, and evaluations to inspect applications and coding-assistant sessions and usage; enterprise modules require separate licensing.
- [Llama Guard](https://github.com/meta-llama/PurpleLlama/tree/main/Llama-Guard4) - Classify content risks in model inputs and outputs for application review policies; classification does not authorize business actions.
- [MLflow](https://github.com/mlflow/mlflow) - Track agent traces, evaluation data, and prompt versions in a shared platform to compare experiments, investigate regressions, and monitor deployed applications.
- [New Relic AI Monitoring](https://docs.newrelic.com/docs/ai-monitoring/intro-to-ai-monitoring/) - Bring supported model, agent, and tool calls into application monitoring with latency, errors, and usage data.
- [OpenLLMetry](https://github.com/traceloop/openllmetry) - Instrument supported models, vector databases, and frameworks with OpenTelemetry and export traces to observability backends.
- [OpenTelemetry eBPF Instrumentation (OBI)](https://github.com/open-telemetry/opentelemetry-ebpf-instrumentation) - Collect application and model-related telemetry on supported Linux systems with less per-application instrumentation; check version-specific coverage.
- [Opik](https://github.com/comet-ml/opik) - Share agent traces, evaluation datasets, experiments, and prompt versions to compare changes and investigate production failures.
- [Promptfoo](https://github.com/promptfoo/promptfoo) - Compare prompts, models, or agents with configuration-based test cases, CI integration, and red teaming.
- [Ragas](https://github.com/vibrantlabsai/ragas) - Evaluate retrieval coverage, answer grounding, and agent behavior through metrics and repeatable experiments.
- [Tracely](https://github.com/Jwuthri/Tracely-ai) - Turn production agent failures into shared issues, replayable regression cases, and CI gates within organizations and workspaces. Development mode has no authentication; teams must configure an appropriate identity mode.
- [W&B Weave](https://docs.wandb.ai/weave) - Track AI application calls and versions and compare changes using datasets and scorers.

## Protocols and Learning Resources

Explore protocols, engineering practices, tutorials, and research, with directories for discovering further candidates.

### Protocols and Conventions

- [A2A](https://a2a-protocol.org/latest/) - Define capability discovery, messages, task states, and artifact handoffs between independent agent services.
- [AG-UI](https://github.com/ag-ui-protocol/ag-ui) - Connect agent backends and user interfaces through an event protocol for streaming messages, tool activity, state changes, and human input.
- [Agent Skills](https://agentskills.io/specification) - Package procedures, references, and scripts as skills that agents can load on demand to reuse team practices.
- [AGENTS.md](https://agents.md/) - Provide coding agents with project context, development conventions, and verification commands in repository Markdown files.
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - Provide a shared protocol for connecting agent applications to tools, data resources, and prompt templates.
- [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai) - Define tracing and metric fields for model, agent, and tool calls to align observability across applications.

### Practical Guides

- [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) - Use engineering principles for context management, persisted state, tool calls, and human interaction to design and review agent applications.
- [Claude Code Project Settings](https://code.claude.com/docs/en/settings) - Use project settings and personal overrides to version team configuration and understand where it takes effect.
- [Claude Code Subagents](https://code.claude.com/docs/en/sub-agents) - Learn to delegate bounded tasks into separate contexts and configure tools, permissions, and result handoffs.
- [Context Compaction (Anthropic)](https://platform.claude.com/docs/en/build-with-claude/compaction) - Learn how long-running tasks compact conversation context and what progress and evidence still need separate storage.
- [Function Calling (OpenAI)](https://developers.openai.com/api/docs/guides/function-calling) - Learn the model-request, application-execution, and result-return cycle for well-defined business tools.
- [Human-in-the-loop (LangChain)](https://docs.langchain.com/oss/python/langchain/human-in-the-loop) - Learn to pause before tool execution, receive approval or edits, and resume using persisted state.
- [My Git Handbook](https://github.com/xirong/my-git) - Use examples of agent change review, pull requests, worktrees, CI, and releases to establish team version-control and delivery practices for AI-assisted development.
- [Prompt Caching (Anthropic)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) - Learn to organize stable prompt prefixes and verify cache hits when optimizing repeated context processing.
- [Workload Identity Federation (Google Cloud)](https://docs.cloud.google.com/iam/docs/workload-identity-federation) - Learn to exchange workload identities for short-lived access credentials instead of distributing long-lived keys to agent services.

### Tutorials and Research

- [ADE Failure Registry](https://github.com/ADE-standard/ade-failure-registry) - Use sourced agent failure cases to guide design reviews and incident analysis; the taxonomy is not an industry standard.
- [Agent Learning Paths (Pauldest)](https://github.com/Pauldest/awesome-ai-agent/tree/main/paths) - Organize learning around progressively expanded coding and systems exercises when planning team practice.
- [Agent-Learning-Hub (kngwyc3)](https://github.com/kngwyc3/Agent-Learning-Hub) - Extend a Datawhale learning roadmap with exercises and notes covering tool use, retrieval, memory, and agent development.
- [Anthropic Evaluation Guide](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) - Explain how to define success criteria, prepare test cases, and choose code-based, human, or model-based evaluation.
- [awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh) - Follow Chinese learning paths for assistant users and agent developers, with exercises and deliverable requirements.
- [Why Do Multi-Agent LLM Systems Fail?](https://arxiv.org/abs/2503.13657) - Study failures in task design, coordination, and verification, with [MAST](https://github.com/multi-agent-systems-failure-taxonomy/MAST) providing the taxonomy and research materials.

### More Resource Directories

- [Awesome Agent Skills (VoltAgent)](https://github.com/VoltAgent/awesome-agent-skills) - Discover skills for development, documents, and testing as starting points for reusable team procedures.
- [Awesome AI Agent Papers (VoltAgent)](https://github.com/VoltAgent/awesome-ai-agent-papers) - Find papers on collaboration, memory, tools, and evaluation, then verify methods and conditions in the original research.
- [Awesome MCP Servers (appcypher)](https://github.com/appcypher/awesome-mcp-servers) - Compare MCP implementations from different authors by capability, alongside related clients and management tools.
- [Awesome MCP Servers (punkpeye)](https://github.com/punkpeye/awesome-mcp-servers) - Discover MCP server implementations for connecting to files, databases, and business systems.
- [Awesome Official MCP Servers (MCPStar)](https://github.com/MCPStar/Awesome-Official-MCP-Servers) - Find vendor-maintained MCP repositories, services, and documentation, verifying ownership before adoption.

## Contributing

Read the [English contribution guide](CONTRIBUTING.en.md) or [Chinese guide](CONTRIBUTING.md), then open an issue or pull request to suggest a project, explain a use case, or fix descriptions and links. Both lists contain the same entries and categories. You can request translation help when contributing in one language.

Discovery notes: [GitHub AI additions, 2026-09-21](docs/research/2026-09-21-github-ai-projects.md) and [AI Native team additions](docs/research/2026-09-21-ai-native-projects.md) (Chinese).

[46 selected additions](docs/research/2026-09-22-selected-projects.md).

## License

This list is released under [CC0 1.0 Universal](LICENSE). Listed projects, trademarks, and external material retain their own licenses and terms.
