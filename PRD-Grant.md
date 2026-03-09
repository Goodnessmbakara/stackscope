PRD 003
StackScope
Stacks Developer Analytics Dashboard
Open-Source · Real-Time · On-Chain · Bitcoin-Native
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Stacks Endowment Grant Application — Getting Started or Builder Track
Full Build-Ready Product Requirements Document
 

March 2026  ·  Grant Deadline: March 13, 2026  ·  stacksendowment.co/grants

TABLE OF CONTENTS

Section 1
Plain-English Overview — What This Is and Why It Matters
Section 2
The Problem We Are Solving
Section 3
What StackScope Does — Features and Dashboard Views
Section 4
Who It Is For — User Personas and Segments
Section 5
How It Works — Technical Architecture
Section 6
Grant Application Answers (Official Form)
Section 7
Grant Track and Application Summary
Section 8
Milestone Plan — Specific, Verifiable, Time-Bound
Section 9
Budget Breakdown
Section 10
Competitive Landscape
Section 11
Risk Analysis and Mitigations
Section 12
Post-Grant Sustainability Plan
Section 13
Why StackScope Wins the Grant — All Six Criteria

Section 1: Plain-English Overview — What This Is and Why It Matters
This section is written for anyone — regardless of blockchain knowledge — to fully understand StackScope before the technical details. If you come from product design, tech, or cybersecurity, every analogy here will be instantly familiar.

1.1  The One-Sentence Version
StackScope is the Google Analytics + GitHub Insights + Dune Analytics of the Stacks blockchain — a single dashboard where developers, investors, and community members can see exactly what is happening on the Stacks network in real time.

1.2  The Longer Version
Every serious software ecosystem has analytics infrastructure. You cannot build a product without understanding how it is being used. You cannot invest in a technology without understanding how fast it is growing. You cannot govern a community without seeing what is actually happening on the ground.

Stacks currently lacks this. Developers building on Stacks have to manually query three different APIs, piece together data from Hiro's block explorer, make their own inferences from Discord activity, and triangulate TVL numbers from DeFi aggregators that often lag by days. There is no single source of truth.

StackScope changes that. It is an open-source, real-time analytics platform that reads directly from the Stacks blockchain and presents everything — contract deployments, sBTC flows, DeFi protocol health, wallet growth, developer activity, transaction volume — in a single, well-designed dashboard. No API keys. No account required. Free and open to everyone.

Analogy from your background: If Stacks is the operating system, StackScope is the system monitor — the tool that shows you CPU usage, memory consumption, active processes, and network throughput at a glance. Right now, Stacks is running without a system monitor. Builders are developing blind.

1.3  Why This Matters for the Stacks Ecosystem
The Stacks Foundation has explicitly identified 'developer experience' as one of its top three 2026 priorities. Analytics infrastructure is developer experience at its most fundamental — it is the difference between building with data and building in the dark. Every new developer who joins Stacks and immediately finds clear, real-time data about the ecosystem is a developer who stays. Every investor who can see ecosystem growth in a trusted dashboard is an investor who commits capital. StackScope makes the Stacks growth story visible and verifiable to the world.


Section 2: The Problem We Are Solving
2.1  Stacks Builders Are Working Without Instruments
Imagine you are a pilot flying a commercial aircraft with no instrument panel — no altimeter, no airspeed indicator, no fuel gauge. You can feel the plane moving and look out the window, but you have no reliable data about what is actually happening. This is the experience of a developer building on Stacks today.

Want to know how many new wallets were created on Stacks this week? You need to write a custom query against the Hiro API. Want to see how much sBTC has flowed into DeFi protocols in the last 30 days? You need to cross-reference five different protocol dashboards and do the arithmetic yourself. Want to know if a smart contract you're about to integrate with is active and healthy? You open the Stacks Explorer, which is a raw transaction viewer — not an analytics tool — and try to interpret hexadecimal data.

2.2  The Specific Data Gaps
sBTC adoption tracking
No single view of total sBTC minted, total sBTC in DeFi protocols, sBTC holder count, daily sBTC mint/redeem volume, or the health of the sBTC peg mechanism. Investors and developers monitor this manually by checking individual protocol dashboards.
Developer activity metrics
No unified view of new contract deployments per week, most-called contracts, developer wallet addresses making first deployments, or programming pattern trends. Electric Capital produces annual developer reports — there is nothing live.
DeFi protocol health
ALEX, Arkadiko, Zest, Bitflow, and StackingDAO all maintain separate TVL dashboards. No aggregated view, no cross-protocol comparison, no historical trend lines.
Transaction and fee trends
No dashboard showing daily active addresses, average transaction fees, peak network hours, or transaction failure rates — all standard metrics on every other major blockchain.
Ecosystem growth narrative
The Stacks Foundation has impressive growth metrics (97.6% TVL growth, top-5 developer community) but they are scattered across blog posts and annual reports. No live, verified dashboard backs up the growth story with real-time on-chain proof.
2.3  Why This Matters Beyond Developers
The absence of analytics infrastructure affects every stakeholder in the Stacks ecosystem. Investors considering allocating capital to Stacks projects have no trusted, neutral data source to evaluate ecosystem health. Founders pitching their Stacks projects to investors have no credible third-party metrics to cite. Journalists and analysts covering Bitcoin Layer 2s cannot write data-driven stories about Stacks because there is no data dashboard to screenshot. This is a reputational gap as much as a technical one — and it is entirely solvable.


Section 3: What StackScope Does — Features and Dashboard Views
3.1  The Five Core Dashboard Views
View 1: Ecosystem Overview
The home screen. At a glance, anyone can see the state of the entire Stacks ecosystem: total TVL across all DeFi protocols, total sBTC supply and holders, 24-hour transaction volume, 7-day active wallet count, and percentage changes from the previous period. Designed like a Bloomberg terminal — information-dense, instantly readable, no jargon.

Who uses it: Investors doing due diligence, journalists writing about Bitcoin DeFi, community members checking ecosystem health, Stacks Foundation sharing growth metrics with the public.

View 2: sBTC Deep Dive
A dedicated analytics module for sBTC — the single most important asset in the Stacks ecosystem. Shows: total sBTC minted (live), daily mint and redeem volume, sBTC in each DeFi protocol (ALEX, Arkadiko, Zest, Bitflow), top sBTC holder addresses (anonymised), peg health indicator (spread between sBTC and BTC price on DEXes), and signer activity (how many of the decentralised sBTC signers are active and performing normally).

Who uses it: sBTC protocol team, DeFi protocol developers, institutional investors evaluating sBTC as a productive asset, anyone building a product that uses sBTC.

View 3: Developer Activity
Tracks what is happening in the Stacks developer community on-chain. Metrics include: new unique deployer addresses per week (developers shipping their first contract to mainnet), total contracts deployed in the last 30 days, most-called contracts (by transaction count), most-active deployer addresses, contract language patterns (which Clarity features are most commonly used), and a historical trend line showing developer growth over time.

Who uses it: Stacks Foundation tracking ecosystem health against their 2026 goals, investors evaluating developer activity as a leading indicator of ecosystem value, new developers discovering which projects are gaining traction and worth integrating with.

View 4: DeFi Protocol Health
A side-by-side comparison of all major Stacks DeFi protocols — ALEX, Arkadiko, Zest, Bitflow, StackingDAO, and others. For each protocol: TVL (current and 30-day trend), unique active users in the last 7 days, 24-hour transaction volume, yield rates (APY for major pools), and a 'health score' derived from activity trends and TVL stability.

Who uses it: DeFi users deciding where to deploy capital, developers building products that integrate DeFi protocols, investors evaluating specific protocols for due diligence.

View 5: Network Activity
The raw network metrics that developers need. Includes: daily active addresses, transaction volume by category (DeFi interactions, NFT transactions, contract deployments, plain STX transfers), average and median transaction fees, peak network usage hours, transaction success vs. failure rates by contract, and block time distribution (showing the impact of the Nakamoto upgrade on block speed).

Who uses it: Developers optimising their applications for gas efficiency, infrastructure teams monitoring network health, technical analysts writing about Stacks performance.

3.2  Platform-Wide Features
Real-Time Data
All metrics update live — no manual refresh required. Data is pulled directly from the Stacks blockchain via Hiro Platform API and StackScope's own custom indexer. No third-party data aggregator in the middle.
Historical Time-Range Selection
Every chart supports flexible time ranges: 24 hours, 7 days, 30 days, 90 days, 1 year, and all-time. This allows users to see both current state and long-term trends.
No Account Required
StackScope is fully public. Anyone — developer, investor, journalist, community member — can access every dashboard without signing up, logging in, or connecting a wallet.
Open Data API
Every metric on StackScope is accessible via a public REST API. Developers can pull StackScope data directly into their own applications, dashboards, or research tools. Documented at docs.stackscope.xyz.
Embeddable Widgets
Individual chart widgets can be embedded in external websites, blog posts, and documentation pages — allowing Stacks Foundation, protocol teams, and community members to display live ecosystem data anywhere.
Address Explorer Integration
Clicking any wallet address or contract address on StackScope links to the relevant Stacks Explorer page for full transaction history — StackScope is an analytics layer on top of, not a replacement for, the block explorer.
MIT Licence — Fully Open Source
All StackScope code is open-source on GitHub. Anyone can fork it, audit it, contribute to it, or deploy their own instance. This is a public good for the Stacks ecosystem.

Section 4: Who It Is For — User Personas and Segments
4.1  Primary Users — Builders and Developers
Stacks Developer (New)
Just joined the Stacks ecosystem. Needs to understand what is being built, which protocols are gaining traction, and where there are gaps to fill. StackScope gives them a live map of the ecosystem on day one — reducing the 'where do I even start?' onboarding friction that currently drives developer churn.
Stacks Developer (Experienced)
Building a new protocol or tool on Stacks. Needs to monitor their own contract's usage, understand where their users are coming from, and track competitor protocol metrics for positioning. StackScope provides all of this in a single dashboard.
DeFi Protocol Team (ALEX, Arkadiko, Zest etc.)
Needs to track their own TVL trends, compare with competitor protocols, monitor user retention, and demonstrate growth to investors. Currently maintains their own metrics dashboard — StackScope gives them a neutral, third-party verified view that is more credible to outsiders than self-reported data.
4.2  Secondary Users — Investors and Community
Crypto Investor / VC
Evaluating Stacks as a portfolio category or specific Stacks projects for investment. Needs third-party, verified on-chain data to back up founder claims about traction. StackScope is the Bloomberg terminal for Bitcoin DeFi due diligence.
Stacks Foundation / Endowment Team
Needs to track ecosystem health against 2026 goals (TVL growth, developer count, sBTC adoption). Currently pieces this together from multiple sources. StackScope provides a single, public, verifiable dashboard that makes the Foundation's growth narrative credible and shareable.
Journalist / Analyst
Writing a story about Bitcoin Layer 2 ecosystems or Stacks specifically. Needs accurate, real-time data and charts they can screenshot and cite. StackScope provides both — and embeddable charts they can drop directly into articles.
Community Member
Curious about whether the ecosystem they are participating in is growing, healthy, and active. StackScope gives them a transparent, trust-building view of ecosystem activity — strengthening community confidence and retention.
4.3  Institutional vs. Retail Segments
Retail / Individual Users
Developers and community members using the public dashboard for free. They access the web interface, explore the five core views, and use the open API for personal projects. No account required. Represents the largest volume of users.
Institutional Users
Protocol teams, investment funds, and the Stacks Foundation who need embeddable widgets for their websites, API access at higher rate limits, custom dashboards for specific contract addresses, and export features for reporting. Served by a Pro tier post-grant.

Section 5: How It Works — Technical Architecture
This section is for technical reviewers and the engineering team. Non-technical readers can skip to Section 6.

5.1  Architecture Overview
Data Sources
Primary: Hiro Platform API (real-time Stacks blockchain data, contract read-only calls, transaction history). Secondary: Ortege ETL (batch on-chain data processing for historical metrics). Tertiary: Direct RPC calls to a Stacks full node for metrics not covered by Hiro API.
Custom Indexer
A lightweight indexer written in Python (initial release) or Rust (performance optimisation in Milestone 3). Subscribes to the Stacks blockchain event stream, processes contract deployment events, DeFi interaction events, sBTC mint/redeem events, and wallet activity events, and stores aggregated metrics in a PostgreSQL database.
API Layer
A RESTful API (Node.js/Express) that serves pre-aggregated metrics to the frontend and to external consumers via the public Open Data API. Caches frequently-requested metrics in Redis for low-latency response. Rate-limited for public users; higher limits for API key holders (Pro tier).
Frontend
React + Next.js + Tailwind CSS. Deployed on Vercel. Charts built with Recharts (for standard line/bar charts) and D3.js (for custom visualisations such as the sBTC flow Sankey diagram and the network activity heatmap). No wallet connection required — fully read-only interface.
Infrastructure
PostgreSQL (metrics database) + Redis (caching layer) hosted on Railway or Render. Stacks full node for direct RPC access. GitHub Actions for CI/CD. All infrastructure configuration open-sourced so anyone can run their own StackScope instance.
5.2  Data Pipeline — How Raw Blockchain Data Becomes a Dashboard
The data pipeline has four stages, each worth explaining in plain terms:

Stage 1: Ingestion
StackScope's indexer subscribes to the Stacks event stream — a live feed of everything happening on the blockchain: every transaction, every contract call, every wallet interaction. This is equivalent to tailing a system log file in real time. The indexer processes each event and extracts the relevant data points: who made the transaction, which contract they called, how much STX or sBTC changed hands, and whether the transaction succeeded or failed.

Stage 2: Aggregation
Raw transaction data is aggregated into meaningful metrics. 'How many unique wallet addresses made a transaction in the last 7 days?' is not a question you can answer from a single event — you need to count unique addresses across thousands of events and deduplicate them. The aggregation layer runs these computations on a schedule (some every minute, some hourly, some daily) and stores the results in PostgreSQL for instant retrieval.

Stage 3: Computation
Some metrics require multi-step computation. The DeFi protocol 'health score' is calculated from a weighted formula combining TVL stability, user retention, transaction success rate, and yield consistency. The sBTC peg health indicator requires comparing the sBTC/BTC exchange rate across multiple DEX liquidity pools and computing the weighted average spread. These computed metrics are cached and refreshed on a defined schedule.

Stage 4: Presentation
The frontend fetches pre-computed metrics from the API layer and renders them using React components. Time-series data is displayed as interactive line charts with hover tooltips. Comparative data (protocol-vs-protocol) is displayed as bar charts. Network flow data (sBTC moving between protocols) is displayed as a Sankey diagram — a flow visualisation that shows where capital enters and exits each protocol.

5.3  Open Data API Design
Every metric available in the StackScope dashboard is also accessible via the public REST API. The API follows standard conventions: GET requests only, JSON responses, ISO 8601 timestamps, paginated results for large datasets. Example endpoints:

• GET /api/v1/ecosystem/overview — current state of all key ecosystem metrics
• GET /api/v1/sbtc/supply?range=30d — sBTC supply history over the last 30 days
• GET /api/v1/defi/protocols — TVL and metrics for all indexed DeFi protocols
• GET /api/v1/developer/deployments?range=7d — new contract deployments in the last 7 days
• GET /api/v1/network/activity?range=24h — transaction volume and active address count
Full OpenAPI specification published at docs.stackscope.xyz. Rate limit: 100 requests/minute for public users, 1,000 requests/minute for API key holders (Pro tier).

5.4  Why Ortege ETL + Hiro API Is the Right Data Stack
Ortege is a blockchain data platform that has already built the ETL (Extract, Transform, Load) pipeline for Stacks — making raw on-chain data queryable and exportable. Rather than rebuilding this from scratch, StackScope uses Ortege as its historical data layer and adds a real-time streaming layer on top using the Hiro Platform API. This hybrid approach gives StackScope both the depth of historical data (Ortege's full Stacks blockchain history) and the freshness of live data (Hiro API's real-time event stream). It also means StackScope is built on battle-tested infrastructure rather than a custom data pipeline that might have undiscovered edge cases.


Section 6: Grant Application Answers — Official Form
The following section contains direct, copy-paste-ready answers to every question on the Stacks Endowment grant application form.

 
GRANT QUESTION: In 2–3 sentences, describe your project and who it serves.
StackScope is a free, open-source, real-time analytics dashboard for the Stacks blockchain that gives developers, investors, and community members a single trusted source of truth for ecosystem health — tracking sBTC adoption, DeFi protocol TVL, contract deployments, developer activity, and network metrics in one place. It serves every stakeholder in the Stacks ecosystem who currently has to piece together data from five or more fragmented sources to understand what is happening on the network. StackScope is the Dune Analytics equivalent for Bitcoin DeFi — something every serious ecosystem has and Stacks currently lacks.
 
GRANT QUESTION: Which category best describes your project?
Infrastructure & Tooling. Reasoning: StackScope is pure ecosystem infrastructure — a public data layer that makes the Stacks blockchain legible to every participant. It does not perform any financial function itself; it provides the observability layer that makes every other function in the ecosystem more trustworthy and more efficient. Observability infrastructure is a recognised subcategory of 'Infrastructure & Tooling' in every developer ecosystem, and the Stacks Endowment has identified developer experience as one of its top three 2026 priorities. A real-time analytics dashboard directly delivers on that priority.
 
GRANT QUESTION: Who is your primary audience?
Primary: Stacks developers — both new builders learning the ecosystem and experienced teams monitoring their deployed protocols. For new developers, StackScope reduces the 'building blind' experience that currently causes early churn. For experienced teams, it provides a neutral third-party view of their protocol's health that is more credible to investors and partners than self-reported metrics. Secondary: Investors, analysts, and Stacks Foundation team members who need reliable, real-time on-chain data to make decisions, write reports, and demonstrate ecosystem growth publicly. StackScope is the credibility infrastructure behind every 'Stacks ecosystem is growing' narrative.
 
GRANT QUESTION: Describe your institutional versus retail user segments.
Retail / Individual Users: Developers, community members, and individual investors who access the public StackScope dashboard for free — no account required. They use the five core dashboard views to understand the ecosystem, monitor their favourite protocols, and research before making DeFi decisions. This is the largest user segment by volume and the primary driver of the 'active users' success metric. Institutional Users: DeFi protocol teams (ALEX, Arkadiko, Zest, Bitflow, StackingDAO), the Stacks Foundation, investment funds, and media organisations that need embeddable widgets for their websites and documentation, higher API rate limits, custom dashboard views for specific contract addresses, and data export features for formal reporting and investor decks. These users will be served by a Pro tier launched post-grant at $99–$249/month — providing sustainable revenue for ongoing maintenance while keeping the core platform free for all users.
 
GRANT QUESTION: Why is Stacks the right home for this project?
StackScope is built for Stacks specifically — not a generic multi-chain analytics tool — for two reasons: First, sBTC is a unique asset that no other analytics platform understands. The sBTC peg mechanism, signer activity, and protocol-level flows between Stacks DeFi protocols require a Stacks-native data model that generic platforms like Dune Analytics or DefiLlama do not have and are not incentivised to build. StackScope's sBTC Deep Dive view provides data about Bitcoin's programmable asset layer that exists nowhere else. Second, the developer experience gap on Stacks is acute and immediate. The Endowment has explicitly cited developer experience as a top priority, and the Electric Capital report has validated Stacks as a top-5 fastest-growing developer community. StackScope converts that momentum into a visible, credible growth story: when someone asks 'how is Stacks actually doing?' StackScope is the answer. Without StackScope, that question has no good answer — only scattered data points and anecdotal reports.
 
GRANT QUESTION: What is your plan for maintaining and supporting what you build after the grant ends?
StackScope's post-grant sustainability has three pillars: 1. Pro Tier Subscriptions: Protocol teams, investment funds, and the Stacks Foundation who need embeddable widgets, higher API rate limits, custom contract address dashboards, white-label options, and accounting-grade data exports pay a monthly subscription.   - Dashboard Pro: $99/month — custom contract dashboards, embeddable widgets, 1,000 API calls/minute   - Analytics Pro: $249/month — white-label dashboard, full data export, dedicated support, SLA   - Target: 10 Pro subscribers by Month 6 post-grant = $990–$2,490/month recurring revenue 2. Ecosystem Partnership Agreements: Protocol teams who benefit most from StackScope's visibility — ALEX, Arkadiko, Zest, StackingDAO — can co-fund ongoing development through annual partnership agreements in exchange for featured placement, co-branded embeds, and dedicated metric modules. Target: 2 partnerships at $5,000/year each by Month 9 post-grant. 3. Open Source Community: All code remains MIT-licensed on GitHub. The Stacks developer community can contribute directly — adding new metric modules, fixing bugs, and extending the API. This reduces the maintenance burden on the core team and ensures StackScope outlasts any individual team or funding cycle. Long-term goal: accept contributions to become a community-maintained Stacks public good, similar to how Etherscan's open-source equivalents are maintained by communities on other chains.
 

Section 7: Grant Track and Application Summary
7.1  Recommended Track — Flexible
Getting Started Grant — $10,000
Appropriate if applying as a solo developer or small team with no prior Stacks traction. Scope: Milestone 1 only (data pipeline + Ecosystem Overview + sBTC Deep Dive). This delivers immediate, high-value public infrastructure for the ecosystem and establishes traction for a subsequent Builder Grant application to complete Milestones 2–4.
Builder Grant — up to $50,000
Appropriate if the team has demonstrated prior traction (prior Stacks projects, active GitHub, community engagement) and can credibly commit to all four milestones. Full scope: all five dashboard views, open API, embeddable widgets, and open SDK. This is the recommended track for maximum ecosystem impact.
Recommendation
Apply for the Builder Grant if you have GitHub history and at least a prototype or design mockup to show. Apply for the Getting Started Grant if you are earlier stage — you will deliver Milestone 1 and use it as traction evidence for a follow-up Builder Grant application.
 
7.2  One-Paragraph Application Summary
For direct copy-paste into the grant summary field: StackScope is a free, open-source, real-time analytics dashboard for the Stacks blockchain — the ecosystem's missing observability layer. Today, developers building on Stacks have no single trusted data source for sBTC adoption, DeFi TVL, developer activity, or network health. They query multiple fragmented APIs, make manual inferences, and build without instruments. StackScope fixes this: a single platform tracking all key ecosystem metrics in real time, with a public REST API that any developer can query and embeddable widgets that any team can drop into their website. Built on Hiro Platform API and Ortege ETL, fully open-source under MIT licence, and free for all users. We measure success by active users and API integrations — metrics that directly prove developer experience improvement, the Endowment's stated top priority.


Section 8: Milestone Plan — Specific, Verifiable, Time-Bound
Per official Stacks Endowment grant guidance: 'A milestone answers: What specific thing will exist that doesn't exist today, and by when? Each one needs a concrete deliverable, a target date, and a way to verify completion.'

StackScope has four milestones. Milestones 1 and 2 are scoped for the Getting Started Grant; all four are scoped for the Builder Grant.

 
MILESTONE 1: Data Pipeline, Indexer & Core Dashboard   [Target: End of Week 5 from grant approval]
What gets built:
• Custom indexer deployed (Python): subscribes to Stacks event stream via Hiro Platform API, processes and aggregates key events (contract deployments, DeFi interactions, sBTC mints/redeems, wallet activity), stores aggregated metrics in PostgreSQL
• Ortege ETL integration: historical Stacks blockchain data pulled into StackScope's data model for all-time trend lines and cohort analysis
• REST API layer (Node.js/Express): serves pre-aggregated metrics as JSON; rate-limited; cached in Redis for sub-100ms response times
• Ecosystem Overview dashboard view live at stackscope.xyz — showing total TVL, sBTC supply, 24-hour transaction volume, 7-day active wallet count with real-time updates
• sBTC Deep Dive dashboard view — total sBTC minted, daily mint/redeem volume, per-protocol sBTC allocation, peg health indicator (spread between sBTC and BTC on Stacks DEXes)
• Full mobile-responsive layout — all dashboard views functional on iOS and Android browsers
• Public GitHub repository with full source code, setup documentation, and instructions for running a local StackScope instance
How the Endowment verifies this milestone:
Deliverable: Live URL at stackscope.xyz with Ecosystem Overview and sBTC Deep Dive views populated with real Stacks on-chain data. GitHub repository URL. Endowment reviewer accesses the dashboard without an account, sees real-time Stacks metrics, and can verify data accuracy by cross-referencing a sample of values against Hiro's block explorer.
 

MILESTONE 2: Developer Activity & DeFi Protocol Health Views   [Target: End of Week 10 from grant approval]
What gets built:
• Developer Activity dashboard view: new unique deployer addresses per week (trended over 12 months), total contracts deployed in last 30 days, most-called contracts by transaction count, developer address activity heatmap (showing which hours/days of the week Stacks developers are most active)
• DeFi Protocol Health view: side-by-side comparison table of ALEX, Arkadiko, Zest, Bitflow, and StackingDAO — TVL (current + 30-day trend), unique active users in last 7 days, 24-hour transaction volume, yield rates for major pools, computed health score
• Network Activity view: daily active addresses (30-day chart), transaction volume by category (DeFi / NFT / contract deployment / plain transfer), average transaction fee trend, block time distribution (showing Nakamoto upgrade impact)
• Time-range selector: all charts support 24h / 7d / 30d / 90d / 1y / all-time range switching
• Public Open Data API v1: all five dashboard views' underlying metrics accessible via documented REST endpoints. OpenAPI specification published at docs.stackscope.xyz
• Beta launch: 10 community beta users recruited from Stacks Discord — their feedback documented and submitted
How the Endowment verifies this milestone:
Deliverable: All five dashboard views live at stackscope.xyz. Endowment reviewer accesses all five views, switches time ranges, and confirms data is current and accurate. OpenAPI documentation URL submitted. Beta feedback report submitted alongside.
 

MILESTONE 3: Embeddable Widgets, Rust Indexer & Search   [Target: End of Week 16 from grant approval]
What gets built:
• Embeddable chart widgets: any chart from StackScope can be embedded in external websites via an iframe embed code. Widget loads live data from StackScope API. Protocol teams and the Stacks Foundation can display live TVL charts on their own websites — documented with embed code examples
• Contract address search: enter any Stacks contract address and see a dedicated metrics page — total calls, unique callers, call volume trend, most-called functions, and sBTC flows to/from the contract
• Wallet address analytics: enter any Stacks wallet address and see their activity summary — contracts deployed, DeFi interactions, sBTC balance history, and first/last active dates
• Rust indexer (performance upgrade): rewrite the Python indexer in Rust for 5-10x performance improvement — enabling sub-second metric refresh rates. Deployed alongside Python indexer with A/B testing for 2 weeks before full cutover
• StackScope public launch — marketing post on Stacks Forum with ecosystem impact data from beta period; co-announcement with at least 2 Stacks protocol teams (ALEX, Arkadiko, or similar)
• 30-day post-launch target: ≥ 500 unique monthly active users; ≥ 3 external websites embedding StackScope widgets
How the Endowment verifies this milestone:
Deliverable: Live embed code demonstrated on at least 1 external website (a Stacks protocol team's site). Wallet and contract search functional with real Stacks data. Stacks Forum announcement post linked. On-chain analytics showing ≥ 500 unique monthly active users verified via StackScope's own usage metrics.
 

MILESTONE 4: Open SDK, Protocol Integrations & Governance Dashboard   [Target: End of Week 22 from grant approval]
What gets built:
• StackScope JavaScript/TypeScript SDK published on npm: allows any Stacks developer to pull StackScope metrics directly into their own application with 3 lines of code. Documented with code examples for common use cases (display TVL in your app, show your protocol's user count, embed a live chart component)
• At least 2 external Stacks applications have integrated the StackScope SDK — documented with app names and integration descriptions
• sBTC Governance Dashboard: dedicated view tracking the sBTC signer set — how many signers are active, signer rotation events, any anomalies in signing activity, and historical peg health. This is critical security observability for the sBTC mechanism
• Pro Tier launch: custom contract dashboards, white-label embeds, higher API rate limits — at $99–$249/month
• Stacks Forum impact report: monthly active users, API requests served, external websites using embeds, SDK downloads, and qualitative feedback from protocol teams
• Community contribution programme: documented process for Stacks community members to submit new metric modules to StackScope via GitHub PR — with 2 community-contributed metrics merged and live by end of milestone
How the Endowment verifies this milestone:
Deliverable: npm package URL with documented download count. 2+ external integration announcements with verifiable links. sBTC Governance Dashboard live at stackscope.xyz/sbtc/governance. Stacks Forum impact report with verified user metrics. Community contribution documentation on GitHub with 2 merged community PRs.
 


Section 9: Budget Breakdown
Two budget options are presented — one for each grant track. Choose based on your team size and traction.

 
Option A: Getting Started Grant — $10,000 (Milestones 1 only)
Data Pipeline & Indexer Development
$4,500 — 1 backend developer × 3 weeks. Custom indexer in Python, Ortege ETL integration, PostgreSQL schema, Redis caching layer, REST API v1
Frontend Development
$3,500 — 1 frontend developer × 3 weeks. React/Next.js app, Recharts visualisations, Ecosystem Overview and sBTC Deep Dive views, mobile-responsive layout
Infrastructure (3 months)
$1,200 — Railway/Render hosting for PostgreSQL + Redis + Node.js API + Next.js frontend; Hiro Platform API access; Stacks full node RPC access; domain registration
Documentation & Community
$800 — GitHub README, OpenAPI specification, Stacks Forum launch post, beta user recruitment and feedback
TOTAL (Option A)
$10,000
 
Option B: Builder Grant — $38,000 (All 4 Milestones)
Backend Development (Indexer + API)
$14,000 — 1 senior backend developer × 10 weeks. Python indexer, Rust performance upgrade (Milestone 3), REST API v1 + v2, SDK v1, sBTC governance module
Frontend Development
$12,000 — 1 frontend developer × 9 weeks. All five dashboard views, time-range selectors, embeddable widgets, contract/wallet search, Pro tier dashboard
Infrastructure (12 months)
$5,000 — Production PostgreSQL + Redis (high-availability configuration), Hiro Platform API (higher usage tier), Stacks full node, Vercel frontend, monitoring (Datadog or equivalent), domain and SSL
UX / Design
$3,000 — Information architecture for five dashboard views, chart type selection and layout, mobile-responsive design, onboarding copy, Figma prototypes for beta testing
Community & Partnership
$2,500 — Beta tester incentives, Stacks Forum engagement, co-announcement partnerships with 2 protocol teams, developer documentation, video walkthrough
Legal / KYC Compliance
$500 — Cayman KYC/KYB compliance for grant disbursement
TOTAL (Option B)
$37,000 (well within Builder Grant ceiling of $50,000)

Section 10: Competitive Landscape
No dedicated, real-time analytics dashboard for the Stacks ecosystem exists today. StackScope is a greenfield product.

 
vs. Stacks Explorer (explorer.stacks.co)
The Stacks Explorer is a block explorer — it shows raw transaction data for individual addresses and contracts. It is not an analytics tool: it cannot show TVL trends, developer activity over time, comparative protocol health, or sBTC adoption curves. StackScope is an analytics layer built on top of the Explorer's data, not a replacement for it.
vs. Dune Analytics (Ethereum)
Dune is a powerful SQL-based analytics platform for Ethereum. It does not index Stacks data, does not understand Clarity contract event structures, and has no sBTC data model. Its query-based interface requires SQL knowledge — it is a power-user tool, not a public dashboard. StackScope is designed for zero-SQL-required accessibility. The two could coexist: StackScope as the accessible public dashboard, Dune-style queries as a future power-user layer.
vs. DefiLlama (multi-chain TVL aggregator)
DefiLlama covers Stacks TVL at a high level but provides minimal Stacks-specific data — no contract-level analytics, no developer metrics, no sBTC deep dive. It is a multi-chain overview tool, not a Stacks ecosystem tool. StackScope complements DefiLlama by providing the depth that a chain-specific platform can offer.
vs. Protocol-specific dashboards (ALEX analytics, Arkadiko stats)
Individual protocol dashboards show only their own data. They are inherently self-interested (incentivised to highlight positive metrics) and require users to visit multiple sites to get a cross-ecosystem view. StackScope is the neutral, comprehensive view that aggregates and compares across all protocols.
First-mover advantage
StackScope's open-source nature, API-first design, and deep Stacks-specific data model create a compounding moat. Once developers and investors start depending on StackScope data, the switching cost grows with every integration. Being first matters enormously for analytics infrastructure.

Section 11: Risk Analysis and Mitigations
Data accuracy — incorrect metrics undermining trust
Cross-validation of all metrics against Hiro's API and Stacks Explorer during development. Public GitHub issues tracker: community can flag data discrepancies. All data methodology documented publicly (how each metric is calculated, from which data source, with what update frequency). Staged rollout: internal testing with Stacks community beta users for 4 weeks before public launch.
Hiro API dependency — rate limits or downtime
Primary data source is Hiro Platform API; fallback is direct RPC calls to StackScope's own Stacks full node. Metrics that cannot be refreshed due to API downtime display their last-updated timestamp and a 'data delayed' indicator rather than silently serving stale data. Never shows incorrect data without a warning.
Indexer falling behind the chain tip
Real-time monitoring of indexer lag (current block vs. latest processed block). Automated alert if lag exceeds 10 blocks. Documented catch-up procedure. Metrics that are not current display their last-update timestamp.
Low adoption despite high quality
Launch with a Stacks Foundation co-announcement. Partner with 2 major protocol teams (ALEX, Arkadiko) for featured embed partnerships at launch. Publish a 'Stacks Ecosystem State of the Network' report using StackScope data — high-value content that drives developer and investor traffic to the platform.
Ongoing maintenance burden (open-source sustainability)
MIT licence with a documented contribution process from Milestone 4. Established precedent: Etherscan, The Graph, and similar open analytics infrastructure have active community maintenance. Pro tier revenue funds core team maintenance. Community contribution programme reduces dependence on a single team.

Section 12: Post-Grant Sustainability Plan
12.1  Revenue Model
Pro Tier Subscriptions — Core Revenue
The core StackScope platform is and will always remain free and open-source. The Pro tier adds features that institutional users specifically need — features that do not diminish the public value of the free tier:

Dashboard Pro — $99/month
Custom contract address dashboards (track any specific contract's metrics in a personalised view), embeddable widgets with custom branding, 1,000 API calls/minute rate limit, CSV data export
Analytics Pro — $249/month
White-label dashboard (embed StackScope under your own domain and branding), full historical data export for accounting/reporting, dedicated support channel, SLA guarantee for API uptime
Year 1 Target
10 Pro subscribers = $990–$2,490/month recurring. Conservative estimate — major DeFi protocol teams have clear incentive to embed live metrics on their own investor pages.
Ecosystem Partnership Revenue
Protocol teams who benefit most from StackScope's visibility — ALEX, Arkadiko, Zest, StackingDAO — co-fund ongoing development through annual partnership agreements. In return: featured placement in the DeFi Protocol Health view, co-branded embeddable TVL widgets, and dedicated metric modules for their specific protocol. Target: 2 partnerships at $5,000/year each by Month 9 post-grant = $10,000/year.

Foundation and Endowment Continued Support
StackScope is a public good for the entire Stacks ecosystem. After demonstrating adoption metrics from Milestones 1–4, StackScope will apply for continued Stacks Endowment support in the next grant round — framed as ecosystem infrastructure maintenance, similar to how Hiro Systems receives ongoing funding for developer tooling. A healthy analytics layer benefits every project in the ecosystem.

12.2  Open-Source Community Governance
From Milestone 4 onwards, StackScope accepts community contributions through a documented GitHub PR process. Community members can add new metric modules, improve existing visualisations, and extend the API — with a core team review process ensuring quality. Long-term vision: StackScope becomes a community-owned Stacks public good, maintained collectively by the ecosystem it serves. This is both more resilient and more aligned with the 'user-owned internet' mission of Stacks than a proprietary analytics platform would be.


Section 13: Why StackScope Wins the Grant — All Six Criteria
1. Strategic Alignment
Score: 5/5 — StackScope directly addresses 'developer experience' — one of the Endowment's top three 2026 priorities — in the most foundational way possible: by making the ecosystem legible. It also supports 'user acquisition' by making the Stacks growth story visible and verifiable to investors, journalists, and new developers. No other single project addresses both simultaneously with a public good.
2. Ecosystem Impact
Score: 5/5 — Measurable by monthly active users and active API integrations — both straightforward to verify. Target: 500 unique monthly active users and 3 external widget embeds by Day 30 post-public-launch. Secondary impact: every developer who joins Stacks and finds good analytics data on Day 1 is more likely to stay and build — a compounding retention effect that benefits the entire ecosystem.
3. Feasibility
Score: 5/5 — Analytics dashboards are a well-understood product category. The Hiro Platform API and Ortege ETL provide the data infrastructure. Recharts and D3.js provide the visualisation layer. No novel technical primitives required. The primary technical challenge — building a reliable, low-latency indexer — is a known engineering problem with established solutions in Python and Rust.
4. Budget Reasonableness
Score: 5/5 — Option A ($10,000) delivers two high-value dashboard views with a working API — proportionate to the Getting Started Grant ceiling. Option B ($37,000) delivers the full platform with SDK and Pro tier — significantly below the $50,000 Builder Grant ceiling, with budget for 12 months of infrastructure costs included. No inflated line items.
5. Risk Profile
Score: 5/5 — Analytics is the lowest-risk category of blockchain infrastructure. No user funds at stake. No smart contracts. No security audit required. Primary risks (data accuracy, API dependency) are well-mitigated through cross-validation, fallback data sources, and transparent 'last updated' indicators. StackScope fails safely — worst case is stale data with a visible timestamp, not lost funds.
6. Ecosystem Commitment
Score: 5/5 — StackScope is built specifically for Stacks — its sBTC deep dive and Clarity contract analytics are not portable to another chain. MIT licence ensures the codebase belongs to the ecosystem permanently. Community contribution programme from Milestone 4 creates ongoing ecosystem investment. Pro tier revenue aligns StackScope's commercial success with the growth of the Stacks ecosystem.
 

Document prepared March 2026. Grant deadline: March 13, 2026. Apply at stacksendowment.co/grants. Grant criteria from official Stacks Endowment blog post at stacks.co.
