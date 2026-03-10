import React, { useMemo } from 'react';
import { useTimeFilter } from '../context/TimeFilterContext';
import StatCard from '../components/ui/StatCard';
import ChartCard from '../components/ui/ChartCard';
import StatusBadge from '../components/ui/StatusBadge';
import DataTable from '../components/ui/DataTable';
import HoverTooltip from '../components/ui/HoverTooltip';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Activity, Code, Settings, Zap, ArrowUpRight, Code2 } from 'lucide-react';

const protocolColors = {
  alex: 'var(--color-primary)',
  arkadiko: 'var(--color-secondary)',
  zest: '#F59E0B',
  bitflow: '#3B82F6',
  stackingdao: '#8B5CF6'
};

// ── Data generation by time range ────────────────────────────────────────────
const RANGE_CONFIG = {
  '24H': { points: 24, labelFn: (i) => `${i}:00`, base: { tvl: 150, sbtc: 520, mint: 250, dev: 8  }, growth: 0.005 },
  '7D':  { points: 7,  labelFn: (i) => ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i], base: { tvl: 130, sbtc: 490, mint: 220, dev: 10 }, growth: 0.02  },
  '30D': { points: 30, labelFn: (i) => `Mar ${i + 1}`, base: { tvl: 100, sbtc: 400, mint: 200, dev: 10 }, growth: 0.05  },
  '90D': { points: 90, labelFn: (i) => `Day ${i + 1}`, base: { tvl: 80,  sbtc: 320, mint: 170, dev: 8  }, growth: 0.1   },
  '1Y':  { points: 12, labelFn: (i) => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i], base: { tvl: 40, sbtc: 120, mint: 80, dev: 5 }, growth: 0.3 },
  'ALL': { points: 16, labelFn: (i) => `Q${(i % 4) + 1} '${22 + Math.floor(i / 4)}`, base: { tvl: 10, sbtc: 20, mint: 20, dev: 2 }, growth: 0.6 },
};

const STAT_CONFIG = {
  '24H': { tvl: '$163.1M', tvlChg: '+0.7%', sbtcSupply: '541.2 BTC', sbtcChg: '+0.4%', holders: '1,841', holdersChg: '+0.3%', addrs: '2,104', addrsChg: '-0.2%', contracts: '22', contractsChg: '+10%', vol: '$8.1M', volChg: '+3.2%' },
  '7D':  { tvl: '$161.8M', tvlChg: '+1.5%', sbtcSupply: '538.4 BTC', sbtcChg: '+2.1%', holders: '1,820', holdersChg: '+1.5%', addrs: '5,812', addrsChg: '-0.8%', contracts: '89', contractsChg: '+5.2%', vol: '$28.4M', volChg: '+9.1%' },
  '30D': { tvl: '$164.2M', tvlChg: '+2.3%', sbtcSupply: '542.8 BTC', sbtcChg: '+12.4%', holders: '1,847', holdersChg: '+5.8%', addrs: '12,482', addrsChg: '-1.2%', contracts: '540', contractsChg: '+8.4%', vol: '$42.1M', volChg: '+18.2%' },
  '90D': { tvl: '$164.2M', tvlChg: '+18.4%', sbtcSupply: '542.8 BTC', sbtcChg: '+38.4%', holders: '1,847', holdersChg: '+22.1%', addrs: '38,200', addrsChg: '+14.2%', contracts: '1,480', contractsChg: '+21.4%', vol: '$120M', volChg: '+44.2%' },
  '1Y':  { tvl: '$164.2M', tvlChg: '+82.1%', sbtcSupply: '542.8 BTC', sbtcChg: '+210%', holders: '1,847', holdersChg: '+430%', addrs: '148K', addrsChg: '+62%', contracts: '5.2K', contractsChg: '+84%', vol: '$480M', volChg: '+210%' },
  'ALL': { tvl: '$164.2M', tvlChg: '+1,640%', sbtcSupply: '542.8 BTC', sbtcChg: '∞', holders: '1,847', holdersChg: '+1,847%', addrs: '580K', addrsChg: '+9,800%', contracts: '18.4K', contractsChg: '+18,400%', vol: '$2.1B', volChg: '+21,000%' },
};

function generateData(timeFilter) {
  const cfg = RANGE_CONFIG[timeFilter] || RANGE_CONFIG['30D'];
  const { points, labelFn, base, growth } = cfg;

  const tvlData = Array.from({ length: points }).map((_, i) => ({
    date: labelFn(i),
    alex: (base.tvl * 0.45) + Math.random() * 8 + i * growth * base.tvl * 0.45,
    arkadiko: (base.tvl * 0.22) + Math.random() * 4 + i * growth * base.tvl * 0.2,
    zest: (base.tvl * 0.12) + Math.random() * 5 + i * growth * base.tvl * 0.12,
    bitflow: (base.tvl * 0.06) + Math.random() * 2 + i * growth * base.tvl * 0.06,
    stackingdao: (base.tvl * 0.04) + Math.random() * 8 + i * growth * base.tvl * 0.15,
  }));

  const mintData = Array.from({ length: points }).map((_, i) => ({
    date: labelFn(i),
    value: base.mint + Math.random() * 80 + i * growth * base.mint,
  }));

  const devData = Array.from({ length: points }).map((_, i) => ({
    date: labelFn(i),
    value: base.dev + Math.random() * 20 + (i % 7 === 0 ? -5 : 0) + i * growth * base.dev,
  }));

  return { tvlData, mintData, devData };
}

const generateSparkline = (points, start, end) => 
  Array.from({ length: points }).map(() => ({ value: start + Math.random() * (end - start) }));

const txTypeData = [
  { name: 'DeFi', value: 45000, color: 'var(--color-primary)' },
  { name: 'STX Transfer', value: 30000, color: 'var(--color-secondary)' },
  { name: 'NFT', value: 15000, color: '#8B5CF6' },
  { name: 'Deploy', value: 5000, color: '#F59E0B' },
  { name: 'Other', value: 5000, color: 'var(--muted)' }
];

const protocolTableData = [
  { id: 'alex', name: 'ALEX', tvl: '$89.2M', tvlChange: '+4.2%', users: '12.4K', apy: '14.2%', health: 96 },
  { id: 'arkadiko', name: 'Arkadiko', tvl: '$38.5M', tvlChange: '-1.1%', users: '4.1K', apy: '8.4%', health: 88 },
  { id: 'zest', name: 'Zest', tvl: '$32.1M', tvlChange: '+12.4%', users: '3.8K', apy: '18.5%', health: 92 },
  { id: 'stackingdao', name: 'StackingDAO', tvl: '$24.8M', tvlChange: '+22.1%', users: '8.2K', apy: '6.1%', health: 98 },
  { id: 'bitflow', name: 'Bitflow', tvl: '$12.4M', tvlChange: '+2.4%', users: '2.1K', apy: '11.2%', health: 85 }
];

const tableColumns = [
  { key: 'name', label: 'Protocol', sortable: true, render: (val) => <span className="font-bold text-white tracking-tight">{val}</span> },
  { key: 'tvl', label: 'TVL', sortable: true, render: (val) => <span className="mono-data font-medium text-white">{val}</span> },
  { key: 'tvlChange', label: '7d Change', sortable: true, render: (val) => (
    <span className={val.startsWith('-') ? 'text-error-text' : 'text-success-text'}>{val}</span>
  )},
  { key: 'users', label: 'Users (7d)', sortable: true, render: (val) => <span className="mono-data text-muted">{val}</span> },
  { key: 'apy', label: 'Top APY', sortable: true, render: (val) => <span className="mono-data text-primary font-bold">{val}</span> },
  { key: 'health', label: 'Health', sortable: true, render: (val) => (
    <div className="flex items-center gap-3">
      <div className="w-12 h-1 bg-surface-lighter rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${val}%`, backgroundColor: val > 90 ? 'var(--success)' : val > 80 ? 'var(--warning)' : 'var(--error)' }} />
      </div>
      <span className="mono-data text-[10px] text-muted">{val}</span>
    </div>
  )}
];

const feedEvents = [
  { id: 1, icon: Code, title: 'BitFlow Router Contract Deployed', time: '2m ago', color: 'var(--color-primary)' },
  { id: 2, icon: Zap, title: 'Large sBTC Mint: 42.5 sBTC', time: '14m ago', color: 'var(--success)' },
  { id: 3, icon: Settings, title: 'Zest Oracle Update', time: '1h ago', color: 'var(--warning)' },
  { id: 4, icon: Activity, title: 'Large Swap on ALEX: 1.2M STX', time: '3h ago', color: 'var(--color-primary)' },
  { id: 5, icon: Code, title: 'New NFT Collection Deployed', time: '5h ago', color: '#8B5CF6' }
];

const Overview = () => {
  const { timeFilter } = useTimeFilter();
  const stats = STAT_CONFIG[timeFilter] || STAT_CONFIG['30D'];
  const { tvlData, mintData, devData } = useMemo(() => generateData(timeFilter), [timeFilter]);

  return (
    <div className="flex flex-col gap-6 md:gap-8 pb-4 md:pb-12 w-full animate-fade-in max-w-[1600px] mx-auto">
      {/* ── Header Area - Minimalist ────────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 bg-success/10 border border-success/20 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-bold text-success uppercase tracking-wider">Operational</span>
            </div>
            <div className="h-4 w-[1px] bg-border-muted" />
            <div className="flex items-center gap-2 text-muted text-[10px] font-mono">
              <Activity size={12} className="text-primary" />
              <span>Hiro API + Ortege ETL</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold text-muted hover:text-white transition-colors bg-bg-surface/40 hover:bg-bg-surface border border-border-muted rounded-lg active:scale-95">
              <span>Export</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold text-muted hover:text-white transition-colors bg-bg-surface/40 hover:bg-bg-surface border border-border-muted rounded-lg active:scale-95">
              <span>Embed</span>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight m-0 text-white leading-tight">
            Dashboard
          </h1>
          <p className="text-sm text-muted mt-2 m-0 max-w-2xl leading-relaxed opacity-80">
            Real-time analytics for the Stacks L2 ecosystem. Tracking liquidity, sBTC velocity, and network growth.
          </p>
        </div>
      </div>

      {/* ── Primary Highlights - Bento Grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* TVL - Featured */}
        <div className="lg:col-span-2">
          <StatCard
            title="TOTAL VALUE LOCKED"
            value={stats.tvl}
            change={stats.tvlChg}
            isPositive={!stats.tvlChg.startsWith('-')}
            sparklineData={generateSparkline(30, 150, 170)}
            featured={true}
          />
        </div>
        
        {/* sBTC Supply */}
        <StatCard
          title="SBTC SUPPLY"
          value={stats.sbtcSupply}
          change={stats.sbtcChg}
          isPositive={true}
          sparklineData={generateSparkline(30, 400, 550)}
        />

        {/* Volume */}
        <StatCard
          title={`${timeFilter} VOLUME`}
          value={stats.vol}
          change={stats.volChg}
          isPositive={true}
          sparklineData={generateSparkline(30, 20, 50)}
        />
      </div>

      {/* ── Secondary Insights Row ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-bg-surface/30 p-2 rounded-2xl border border-border-muted/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-default">
          <div className="w-8 h-8 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center shrink-0">
            <ArrowUpRight size={14} className="text-success" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] text-muted font-bold uppercase tracking-wider mb-0.5">Top Protocol</p>
            <p className="text-xs font-bold text-white truncate">StackingDAO +22.1%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-default">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Zap size={14} className="text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] text-muted font-bold uppercase tracking-wider mb-0.5">sBTC Momentum</p>
            <p className="text-xs font-bold text-white truncate">+12.4% Weekly Growth</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.03] transition-colors cursor-default">
          <div className="w-8 h-8 rounded-lg bg-orange-400/10 border border-orange-400/20 flex items-center justify-center shrink-0">
            <Code2 size={14} className="text-orange-400" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] text-muted font-bold uppercase tracking-wider mb-0.5">Network Activity</p>
            <p className="text-xs font-bold text-white truncate">540 New Contracts</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8" style={{ minWidth: 0 }}>
          
          {/* ── Section: Market Dynamics ──────────────────────────────────────── */}
          <section className="flex flex-col gap-4">
            <div id="market-dynamics" className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-bold text-white tracking-tight">Market Dynamics</h2>
              </div>
              <span className="text-xs text-muted font-mono bg-bg-surface/50 px-2 py-1 rounded-md border border-border-muted/50">Aggregated Capital Flows</span>
            </div>

            {/* Total TVL Stacked Area Chart */}
            <ChartCard
              title={`TVL Distribution (${timeFilter})`}
              metricValue="$164.2M"
              metricChange={`+97.6% (YTD)`}
            >
              <ResponsiveContainer width="100%" height="100%" debounce={50}>
                <AreaChart data={tvlData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-muted)" opacity={0.3} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} dy={10} minTickGap={30} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} tickFormatter={(val) => `$${val}M`} />
                  <RechartsTooltip content={<HoverTooltip multiSeries={true} />} cursor={{ stroke: 'var(--color-primary)', strokeWidth: 1, strokeDasharray: '4 4' }} strokeOpacity={0.5} />
                  <Area type="monotone" dataKey="alex" name="ALEX" stackId="1" stroke={protocolColors.alex} fill={protocolColors.alex} fillOpacity={0.6} activeDot={{ r: 4, strokeWidth: 0 }} />
                  <Area type="monotone" dataKey="arkadiko" name="Arkadiko" stackId="1" stroke={protocolColors.arkadiko} fill={protocolColors.arkadiko} fillOpacity={0.5} />
                  <Area type="monotone" dataKey="zest" name="Zest" stackId="1" stroke={protocolColors.zest} fill={protocolColors.zest} fillOpacity={0.4} />
                  <Area type="monotone" dataKey="stackingdao" name="StackingDAO" stackId="1" stroke={protocolColors.stackingdao} fill={protocolColors.stackingdao} fillOpacity={0.3} />
                  <Area type="monotone" dataKey="bitflow" name="Bitflow" stackId="1" stroke={protocolColors.bitflow} fill={protocolColors.bitflow} fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* KPI Mini-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ChartCard title="sBTC MINT VELOCITY" metricValue="542.8 BTC" metricChange="+12.4%">
                <ResponsiveContainer width="100%" height="100%" debounce={50}>
                  <AreaChart data={mintData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="date" hide />
                    <YAxis hide />
                    <Area type="monotone" dataKey="value" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity={0.1} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="DEV ADOPTION" metricValue="540" metricChange="+8.4%">
                <ResponsiveContainer width="100%" height="100%" debounce={50}>
                  <BarChart data={devData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="date" hide />
                    <YAxis hide />
                    <Bar dataKey="value" fill="var(--color-primary)" radius={[2, 2, 0, 0]} barSize={4} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="TX DIVERSITY" metricValue="100K+" metricChange="Daily Ops">
                <ResponsiveContainer width="100%" height="100%" debounce={50}>
                  <PieChart>
                    <Pie data={txTypeData} cx="50%" cy="50%" innerRadius={35} outerRadius={50} paddingAngle={4} dataKey="value" stroke="none">
                      {txTypeData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          </section>

          {/* ── Section: Protocol Performance ────────────────────────────────── */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-orange-400 rounded-full" />
                <h2 className="text-xl font-bold text-white tracking-tight">Ecosystem Rankings</h2>
              </div>
              <button className="text-[10px] font-bold text-primary hover:text-white transition-colors bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">View Leaderboard</button>
            </div>
            <DataTable columns={tableColumns} data={protocolTableData} />
          </section>
        </div>

        {/* ── Sidebar: Network Vitals ───────────────────────────────────────── */}
        <aside className="xl:w-[360px] flex flex-col gap-6 shrink-0">
          <div className="sticky top-6 flex flex-col gap-6">
            
            {/* Status & Health Unified */}
            <div className="bg-bg-surface border border-border-muted rounded-2xl p-5 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-success/5 blur-[40px] rounded-full -mr-12 -mt-12" />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <h3 className="text-[10px] font-bold text-muted uppercase tracking-widest">Network Health</h3>
                <StatusBadge status="optimal" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted font-bold uppercase tracking-tighter">Block Height</span>
                    <span className="text-xl font-bold text-white font-mono">148,742</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-muted font-bold uppercase tracking-tighter">Latency</span>
                    <span className="text-sm font-bold text-success">5.2s</span>
                  </div>
                </div>
                
                <div className="h-px bg-border-muted/50" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-muted uppercase font-bold tracking-tighter">sBTC Peg</span>
                    <span className="text-xs font-bold text-white font-mono">0.9998</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] text-muted uppercase font-bold tracking-tighter">Signers</span>
                    <span className="text-xs font-bold text-white font-mono">84 / 100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Activity Stream */}
            <div className="bg-bg-surface border border-border-muted rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-4 border-b border-border-muted/50 flex items-center justify-between">
                <h3 className="text-xs font-bold text-white flex items-center gap-2">
                  <Activity size={14} className="text-primary" />
                  Live Activity
                </h3>
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              </div>
              
              <div className="px-5 py-2 divide-y divide-border-muted/30">
                {feedEvents.slice(0, 4).map((event) => (
                  <div key={event.id} className="py-4 flex gap-3 group cursor-pointer transition-all">
                    <div className="w-8 h-8 rounded-lg bg-bg-surface-lighter flex items-center justify-center shrink-0 border border-border-muted/50 group-hover:border-primary/50" style={{ color: event.color }}>
                      <event.icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-white font-semibold m-0 leading-snug group-hover:text-primary transition-colors truncate">
                        {event.title}
                      </p>
                      <span className="text-[10px] text-muted font-mono">{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-bg-surface-lighter/30 text-[10px] font-bold text-muted hover:text-white transition-all border-t border-border-muted/50">
                FULL NETWORK DATA →
              </button>
            </div>

          </div>
        </aside>
      </div>
    </div>
  );
};

export default Overview;
