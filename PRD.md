# Product Requirements Document (PRD)
## StackScope: Stacks Developer Analytics Dashboard

**Status:** Draft
**Last Updated:** March 2026

---

## 1. Executive Summary

StackScope is the Google Analytics + GitHub Insights + Dune Analytics of the Stacks blockchain — a single dashboard where developers, investors, and community members can see exactly what is happening on the Stacks network in real time.

Every serious software ecosystem has analytics infrastructure. You cannot build a product without understanding how it is being used. You cannot invest in a technology without understanding how fast it is growing. You cannot govern a community without seeing what is actually happening on the ground.

StackScope provides an open-source, real-time analytics platform that reads directly from the Stacks blockchain and presents everything — contract deployments, sBTC flows, DeFi protocol health, wallet growth, developer activity, transaction volume — in a single, well-designed dashboard. No API keys. No account required. Free and open to everyone.

## 2. Problem Statement

**Builders Are Working Without Instruments**
Developers building on Stacks today lack reliable, unified data. To track wallet creation, sBTC flows, or smart contract health, they must manually query multiple APIs, cross-reference different protocol dashboards, and interpret raw hex data from the Stacks Explorer.

**Specific Data Gaps:**
*   **sBTC adoption tracking:** No single view of total sBTC minted, total sBTC in DeFi protocols, sBTC holder count, daily sBTC mint/redeem volume, or the health of the sBTC peg mechanism.
*   **Developer activity metrics:** No unified view of new contract deployments, most-called contracts, developer wallet addresses, or programming pattern trends.
*   **DeFi protocol health:** Separate TVL dashboards across ALEX, Arkadiko, Zest, Bitflow, and StackingDAO. No aggregated view, no cross-protocol comparison, no historical trend lines.
*   **Transaction and fee trends:** No dashboard showing daily active addresses, average transaction fees, peak network hours, or transaction failure rates.
*   **Ecosystem growth narrative:** Growth metrics are scattered across blog posts and annual reports rather than backed by a live, verified dashboard.

The absence of analytics infrastructure affects every stakeholder in the Stacks ecosystem, from developers to investors and journalists.

## 3. Product Features & Dashboard Views

### 3.1 Core Views

**View 1: Ecosystem Overview**
At a glance, anyone can see the state of the entire Stacks ecosystem: total TVL across all DeFi protocols, total sBTC supply and holders, 24-hour transaction volume, 7-day active wallet count, and percentage changes from the previous period. Designed to be information-dense and instantly readable.

**View 2: sBTC Deep Dive**
A dedicated analytics module for sBTC. Shows: total sBTC minted (live), daily mint and redeem volume, sBTC in each DeFi protocol, top sBTC holder addresses (anonymised), peg health indicator (spread between sBTC and BTC price on DEXes), and signer activity (how many of the decentralised sBTC signers are active and performing normally).

**View 3: Developer Activity**
Tracks the Stacks developer community on-chain. Metrics include: new unique deployer addresses per week, total contracts deployed in the last 30 days, most-called contracts (by transaction count), most-active deployer addresses, contract language patterns, and a historical trend line showing developer growth over time.

**View 4: DeFi Protocol Health**
A side-by-side comparison of all major Stacks DeFi protocols (ALEX, Arkadiko, Zest, Bitflow, StackingDAO, etc.). Shows TVL (current and 30-day trend), unique active users in the last 7 days, 24-hour transaction volume, yield rates, and a 'health score'.

**View 5: Network Activity**
Raw network metrics including daily active addresses, transaction volume by category (DeFi interactions, NFT transactions, contract deployments, STX transfers), average and median transaction fees, peak network usage hours, transaction outcomes, and block time distribution.

### 3.2 Platform-Wide Features

*   **Real-Time Data:** Live updates pulled directly from the Stacks blockchain via Hiro Platform API and StackScope's custom indexer.
*   **Historical Time-Range Selection:** Flexible time ranges (24h, 7d, 30d, 90d, 1y, all-time).
*   **No Account Required:** Fully public and accessible without logging in or connecting a wallet.
*   **Open Data API:** Every metric is accessible via a public REST API (documented at docs.stackscope.xyz).
*   **Embeddable Widgets:** Individual chart widgets can be embedded in external websites.
*   **Address Explorer Integration:** Wallet or contract addresses link to the Stacks Explorer for full transaction history.
*   **Open Source:** MIT License. All code is public on GitHub.

## 4. Target Audience (User Personas)

### 4.1 Primary Users (Builders and Developers)
*   **Stacks Developer (New):** Needs to understand what is being built, which protocols are gaining traction, and where there are gaps to fill.
*   **Stacks Developer (Experienced):** Needs to monitor their own contract's usage, understand where users are coming from, and track competitor metrics.
*   **DeFi Protocol Teams:** Needs neutral, third-party verified views of their TVL trends, user retention, and competitor comparison.

### 4.2 Secondary Users (Investors and Community)
*   **Crypto Investor / VC:** Evaluates Stacks portfolio category or specific projects. Needs verified on-chain data for due diligence.
*   **Stacks Foundation / Ecosystem Teams:** Tracks ecosystem health against growth goals using a single, public, verifiable dashboard.
*   **Journalist / Analyst:** Needs accurate, real-time data and embeddable charts for stories about Bitcoin Layer 2 ecosystems.
*   **Community Members:** Curious about ecosystem growth and health, building trust and confidence.

## 5. Technical Architecture

### 5.1 Architecture Overview
*   **Data Sources:** Hiro Platform API (real-time data), Ortege ETL (historical metrics), direct RPC calls to a Stacks full node.
*   **Custom Indexer:** Originally Python/Rust. Subscribes to the Stacks event stream, processes contract deployment, DeFi interaction, sBTC, and wallet activity events, storing aggregated metrics in PostgreSQL.
*   **API Layer:** Node.js/Express REST API serving pre-aggregated metrics. Cached in Redis. Rate-limited for public users.
*   **Frontend:** React + Next.js + Tailwind CSS. Charts built with Recharts and D3.js. Deployed on Vercel.
*   **Infrastructure:** PostgreSQL + Redis. GitHub Actions for CI/CD.

### 5.2 Data Pipeline
1.  **Ingestion:** Indexer subscribes to the Stacks event stream, extracting relevant transaction data points.
2.  **Aggregation:** Raw data is aggregated into meaningful metrics (e.g., counting unique addresses) on a schedule and stored in PostgreSQL.
3.  **Computation:** Multi-step computations (e.g., DeFi health score, peg health indicator) are calculated and cached.
4.  **Presentation:** Frontend fetches pre-computed metrics and renders them as interactive line charts, bar charts, and Sankey diagrams.

## 6. Competitive Analysis

*   **vs. Stacks Explorer:** The Stacks Explorer shows raw transaction data but isn't an analytics tool for TVL trends or developer activity over time. StackScope is an analytics layer built on top of Explorer data.
*   **vs. Dune Analytics (Ethereum):** Dune requires SQL knowledge and doesn't natively index Stacks data or understand Clarity events. StackScope offers a zero-SQL, pre-built public dashboard.
*   **vs. DefiLlama:** DefiLlama provides multi-chain TVL overviews but lacks Stacks-specific depth (contract analytics, developer metrics, sBTC deep dives).
*   **vs. Protocol-specific dashboards:** Individual protocol dashboards only show their own data and are self-interested. StackScope provides a neutral, cross-protocol view.

## 7. Risks & Mitigations

*   **Data Accuracy:** Ensure cross-validation of metrics against Hiro's API and Stacks Explorer. Public GitHub issues tracker for community flagged discrepancies.
*   **API Dependency (Hiro):** Fallback to direct RPC calls to StackScope's full node. If metrics cannot be refreshed, display last-updated timestamp and "data delayed" indicator.
*   **Indexer Lag:** Real-time monitoring of indexer lag. Automated alerts if lag exceeds acceptable block thresholds.
*   **Adoption:** Partner with major protocol teams for launch and publish regular 'State of the Network' reports using StackScope data.

## 8. Implementation Roadmap

### Phase 1: Data Pipeline, Indexer & Core Dashboard
*   Deploy custom indexer to process and aggregate key events.
*   Integrate Ortege ETL for historical data.
*   Build Node.js REST API with Redis caching.
*   Launch Ecosystem Overview and sBTC Deep Dive frontend views.

### Phase 2: Developer Activity & DeFi Protocol Health
*   Deploy Developer Activity view (deployer trends, active addresses).
*   Deploy DeFi Protocol Health view (TVL comparisons, active users).
*   Deploy Network Activity view (transaction volume, fees, block times).
*   Implement time-range selectors across all charts.
*   Launch public Open Data API v1 with OpenAPI documentation.

### Phase 3: Embeddable Widgets & Advanced Search
*   Create embeddable chart widgets (via iframe) for external site integration.
*   Implement contract address search providing dedicated metrics per contract.
*   Implement wallet address analytics summarizing individual activity.
*   Optimize indexer for sub-second metric refresh rates.

### Phase 4: Open SDK & Governance Dashboards
*   Publish StackScope JavaScript/TypeScript SDK for easy integration.
*   Deploy sBTC Governance Dashboard to track signer activity and rotation.
*   Introduce Pro Tier for institutional users (custom dashboards, higher API limits).
*   Open community contribution processes for new metric modules.
