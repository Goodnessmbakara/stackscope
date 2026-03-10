import React from 'react';
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

// Mock Data Generators Space
const generateSparkline = (points, start, end) => 
  Array.from({ length: points }).map((_, i) => ({ value: start + Math.random() * (end - start) }));

const tvlData = Array.from({ length: 30 }).map((_, i) => ({
  date: `Mar ${i + 1}`,
  alex: 45 + Math.random() * 10 + (i * 1.5),
  arkadiko: 25 + Math.random() * 5 + (i * 0.5),
  zest: 10 + Math.random() * 8 + (i * 0.8),
  bitflow: 5 + Math.random() * 4 + (i * 0.2),
  stackingdao: 2 + Math.random() * 12 + (i * 1.1)
}));

const protocolColors = {
  alex: 'var(--color-primary)',
  arkadiko: 'var(--color-secondary)',
  zest: '#F59E0B',
  bitflow: '#3B82F6',
  stackingdao: '#8B5CF6'
};

const mintData = Array.from({ length: 30 }).map((_, i) => ({ date: `Mar ${i+1}`, value: 300 + Math.random()*150 + i*10 }));
const devData = Array.from({ length: 30 }).map((_, i) => ({ date: `Mar ${i+1}`, value: 10 + Math.random()*25 + (i%7===0?-10:0) }));
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
  return (
    <div className="flex flex-col gap-6 pb-12 w-full animate-fade-in">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="text-[11px] font-bold text-success uppercase tracking-[0.2em]">Network Operational</span>
            <div className="w-px h-3 bg-border-muted mx-1" />
            <span className="text-[11px] text-muted font-mono">Last updated: 2s ago</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter m-0 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
            Ecosystem Overview
          </h1>
          <p className="text-sm text-muted mt-2 m-0 max-w-2xl">
            Comprehensive real-time analytics for the Stacks Bitcoin L2 ecosystem. Tracking TVL, sBTC adoption, developer activity, and network health.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted text-xs font-mono bg-bg-surface px-4 py-2 rounded-lg border border-border-muted">
            <Activity size={14} className="text-primary" />
            <span>Live data from Hiro API + Ortege ETL</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs font-semibold text-muted hover:text-primary transition-colors px-3 py-1.5 bg-bg-surface/50 rounded-md border border-border-muted hover:border-primary/30 cursor-pointer">
              Export Data
            </button>
            <button className="text-xs font-semibold text-muted hover:text-primary transition-colors px-3 py-1.5 bg-bg-surface/50 rounded-md border border-border-muted hover:border-primary/30 cursor-pointer">
              Embed Widget
            </button>
          </div>
        </div>
      </div>

      {/* 1. Hero Stat Row - Bloomberg-style Information Density */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard
          title="TOTAL TVL"
          value="$164.2M"
          change="+2.3%"
          isPositive={true}
          sparklineData={generateSparkline(30, 150, 170)}
        />
        <StatCard
          title="SBTC SUPPLY"
          value="542.8 BTC"
          change="+12.4%"
          isPositive={true}
          sparklineData={generateSparkline(30, 400, 550)}
        />
        <StatCard
          title="SBTC HOLDERS"
          value="1,847"
          change="+5.8%"
          isPositive={true}
          sparklineData={generateSparkline(30, 1500, 1900)}
        />
        <StatCard
          title="ACTIVE ADDRESSES (7D)"
          value="12,482"
          change="-1.2%"
          isPositive={false}
          sparklineData={generateSparkline(30, 10000, 15000)}
        />
        <StatCard
          title="CONTRACTS (7D)"
          value="540"
          change="+8.4%"
          isPositive={true}
          sparklineData={generateSparkline(10, 30, 80)}
        />
        <StatCard
          title="24H VOLUME"
          value="$42.1M"
          change="+18.2%"
          isPositive={true}
          sparklineData={generateSparkline(30, 20, 50)}
        />
      </div>

      {/* Quick Insights - Bloomberg Style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-6 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-success/20 border border-success/30 flex items-center justify-center shrink-0">
            <ArrowUpRight size={16} className="text-success" />
          </div>
          <div>
            <p className="text-[10px] text-muted uppercase tracking-wider m-0 mb-1">Top Performer</p>
            <p className="text-sm font-bold text-white m-0">StackingDAO +22.1%</p>
            <p className="text-xs text-muted m-0 mt-1">Leading 7-day TVL growth</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center shrink-0">
            <Zap size={16} className="text-secondary" />
          </div>
          <div>
            <p className="text-[10px] text-muted uppercase tracking-wider m-0 mb-1">sBTC Momentum</p>
            <p className="text-sm font-bold text-white m-0">+12.4% Supply Growth</p>
            <p className="text-xs text-muted m-0 mt-1">Strong adoption this week</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-cta/20 border border-cta/30 flex items-center justify-center shrink-0">
            <Code size={16} className="text-cta" />
          </div>
          <div>
            <p className="text-[10px] text-muted uppercase tracking-wider m-0 mb-1">Developer Activity</p>
            <p className="text-sm font-bold text-white m-0">540 Contracts Deployed</p>
            <p className="text-xs text-muted m-0 mt-1">+8.4% from last week</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6" style={{ minWidth: 0 }}>

          {/* Section: Capital Flows */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <h2 className="text-xl font-bold text-white m-0 tracking-tight">Capital Distribution</h2>
            </div>
            <span className="text-xs text-muted font-mono">Across 5 major protocols</span>
          </div>

          {/* 2. Main Trend Chart */}
          <ChartCard
            title="Total Value Locked Distribution"
            metricValue="$164,284,912"
            metricChange="+97.6% (YTD)"
          >
            <ResponsiveContainer width="100%" height="100%">
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

          {/* Section: Key Metrics */}
          <div className="flex items-center justify-between mb-2 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-secondary rounded-full"></div>
              <h2 className="text-xl font-bold text-white m-0 tracking-tight">Key Performance Indicators</h2>
            </div>
            <span className="text-xs text-muted font-mono">Real-time on-chain metrics</span>
          </div>

          {/* 3. Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChartCard
              title="sBTC MINT VELOCITY"
              metricValue="542.8 BTC"
              metricChange="+12.4%"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mintData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-muted)" opacity={0.2} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--muted)' }} minTickGap={15} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--muted)' }} />
                  <RechartsTooltip content={<HoverTooltip />} cursor={{ stroke: 'var(--color-primary)' }} />
                  <Area type="monotone" dataKey="value" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity={0.2} strokeWidth={2} activeDot={{ r: 4, strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="DEVELOPER ADOPTION"
              metricValue="540"
              metricChange="+8.4%"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={devData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-muted)" opacity={0.2} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--muted)' }} minTickGap={15} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'var(--muted)' }} />
                  <RechartsTooltip content={<HoverTooltip />} cursor={{ fill: 'var(--surface-lighter)', opacity: 0.3 }} />
                  <Bar dataKey="value" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={8} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="TRANSACTION DIVERSITY"
              metricValue="100K+"
              metricChange="Daily Operations"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={txTypeData}
                    cx="50%"
                    cy="45%"
                    innerRadius={55}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="none"
                  >
                    {txTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip content={<HoverTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-6">
                <span className="text-[10px] uppercase font-bold text-muted tracking-tighter">Daily Ops</span>
                <span className="text-xl font-bold text-white mt-1">100K+</span>
              </div>
            </ChartCard>
          </div>

          {/* Mobile Activity Feed - Shows on small screens */}
          <div className="xl:hidden flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-success rounded-full"></div>
              <h2 className="text-xl font-bold text-white m-0 tracking-tight">Recent Activity</h2>
            </div>
            <div className="bg-bg-surface/60 backdrop-blur-md rounded-xl border border-border-muted p-4">
              <div className="flex flex-col gap-4">
                {feedEvents.slice(0, 3).map((event) => (
                  <div key={event.id} className="flex gap-3 items-start">
                    <div
                      className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center bg-bg-deep border border-border-muted"
                      style={{ color: event.color }}
                    >
                      <event.icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white font-semibold m-0 leading-snug">
                        {event.title}
                      </p>
                      <span className="text-[10px] text-muted font-mono">{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 rounded-lg bg-primary/10 text-[11px] font-bold text-primary hover:bg-primary/20 transition-all border border-primary/20 cursor-pointer">
                View All Activity
              </button>
            </div>
          </div>

          {/* Section: Protocol Performance */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-cta rounded-full"></div>
                <div>
                  <h2 className="text-xl font-bold text-white m-0 tracking-tight">DeFi Protocol Health</h2>
                  <p className="text-xs text-muted m-0 mt-1">Comparative analysis of top protocols by TVL and activity</p>
                </div>
              </div>
              <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer px-4 py-2 bg-primary/5 rounded-lg hover:bg-primary/10 border border-primary/20">
                View All Protocols →
              </button>
            </div>
            <DataTable columns={tableColumns} data={protocolTableData} />
          </div>

        </div>

        {/* 5. Activity Feed Sidebar */}
        <div className="hidden xl:flex flex-col w-[320px] shrink-0 border-l border-border-muted/50 pl-6 relative">
          <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
          <div className="sticky top-6 flex flex-col gap-6">
            {/* Network Status Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl border border-primary/20 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] font-bold text-success uppercase tracking-[0.15em]">All Systems Operational</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wider m-0 mb-1">Block Height</p>
                  <p className="text-lg font-bold text-white m-0 font-mono">148,742</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wider m-0 mb-1">Avg Block Time</p>
                  <p className="text-lg font-bold text-white m-0 font-mono">5.2s</p>
                </div>
              </div>
            </div>

            {/* Live Feed */}
            <div className="bg-bg-surface/60 backdrop-blur-md rounded-2xl border border-border-muted overflow-hidden shadow-2xl transition-all duration-300 hover:border-border-bright">
              <div className="p-5 border-b border-border-muted bg-deep/40 flex items-center justify-between">
                <h3 className="text-sm font-bold m-0 text-white flex items-center gap-2 tracking-wide">
                  <Activity size={16} className="text-primary" />
                  Network Activity Stream
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-muted font-mono">LIVE</span>
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                </div>
              </div>
              <div className="p-5 flex flex-col gap-5 max-h-[450px] overflow-y-auto custom-scrollbar">
                {feedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-3 group cursor-pointer p-3 rounded-lg hover:bg-white/[0.02] transition-all duration-200 -m-3"
                  >
                    <div
                      className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center bg-bg-deep border border-border-muted group-hover:border-primary/50 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-all duration-300"
                      style={{ color: event.color }}
                    >
                      <event.icon size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] text-white font-semibold m-0 leading-snug group-hover:text-primary transition-colors">
                        {event.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] text-muted font-mono">{event.time}</span>
                        <div className="w-1 h-1 rounded-full bg-muted/30" />
                        <button className="text-[10px] text-primary/70 font-bold uppercase tracking-wider hover:text-primary transition-colors">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-bg-deep/30 border-t border-border-muted">
                <button className="w-full py-2.5 rounded-lg bg-primary/10 text-[11px] font-bold text-primary hover:text-white hover:bg-primary/20 transition-all border border-primary/20 hover:border-primary/40 cursor-pointer flex items-center justify-center gap-2">
                  View Full Activity Log
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
            
            {/* Ecosystem Health Snapshot */}
            <div className="bg-gradient-to-br from-success/10 to-primary/5 rounded-2xl border border-success/20 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[10px] font-bold text-success uppercase tracking-[0.15em] m-0">Ecosystem Health</h4>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-success" />
                  <span className="text-[9px] text-success font-bold">Excellent</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted">sBTC Peg Health</span>
                  <span className="text-sm font-bold text-white font-mono">0.9998</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted">Active Signers</span>
                  <span className="text-sm font-bold text-white font-mono">84/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted">Network Latency</span>
                  <span className="text-sm font-bold text-success font-mono">Normal</span>
                </div>
              </div>
              <p className="text-[10px] text-muted leading-relaxed m-0 mt-4 pt-3 border-t border-success/10">
                All critical infrastructure metrics are within optimal ranges. No immediate action required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
