# StackScope

**The Intelligence Layer for Bitcoin DeFi**

StackScope is a premium, institutional-grade analytics platform providing a comprehensive, real-time view into the Stacks economic engine. Featuring live on-chain analytics, TVL flows, and deep sBTC insights, StackScope brings radical transparency to the next generation of finance built seamlessly on top of Bitcoin.

## 🌟 Key Features

- **Protocol Analytics**: Live insights into top Stacks platforms like ALEX, Arkadiko, Zest, Bitflow, and StackingDAO.
- **TVL Flows & Trends**: Granular, interactive data visualizations for the aggregate value locked across the Stacks ecosystem.
- **sBTC Deep Dive**: Specialized metrics tracking sBTC mint velocity, peg health, and the active decentralized signer network.
- **Network Actions & Live Feed**: A real-time activity feed monitoring newly deployed contracts, massive token swaps, large sBTC mints, and critical Oracle updates.
- **Premium Fintech Aesthetic**: Engineered with a hyper-immersive, high-contrast dark theme utilizing a "cryptic grid", glassmorphism effects, and highly accessible semantic tokens designed specifically for information-dense trading environments.

## 🛠 Technology Stack

- **Framework**: React 18 / Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS 4.0 (`@tailwindcss/vite`) utilizing a comprehensive centralized design system (`@theme`).
- **Data Visualization**: Recharts (heavily customized for performance and interactive tooltips)
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and `pnpm` installed.

### Installation

1. Copy the repository and verify the package.json.
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development Server

Run the local development server:
```bash
pnpm dev
```
Navigate to `http://localhost:5179` to view the application.

### Production Build

Build the application for production:
```bash
pnpm build
```
This generates optimized static assets inside the `dist/` directory, ready to be served by any static file host.

## 📂 Project Structure

- `/src/pages/`: Contains the main routing views like `Landing.jsx`, `Overview.jsx`, etc.
- `/src/components/layout/`: Holds the core application shell (`AppLayout`, `TopBar`, `Sidebar`).
- `/src/components/ui/`: Contains reusable, highly tailored components like `StatCard`, `ChartCard`, `StatusBadge`, and `DataTable`.
- `/src/index.css`: The root stylesheet housing the Tailwind 4.0 `@theme` definitions, centralized utility layers, custom animations, and complex background directives.

## 🎨 Design System

StackScope uses a bespoke dark-mode design system. Key tokens include:
- `bg-deep`: True black (`#0A0A0B`) for maximum OLED contrast and depth.
- `bg-surface`: Elevated elements (`#121214`) using subtle borders (`#2A2A30`).
- `primary`: Tech Blue (`#3B82F6`) serving as the main brand accent and active state indicator.

## ©️ License

2026 StackScope Research. All rights reserved.
