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
import { Activity, Code, Settings, Zap, ArrowUpRight } from 'lucide-react';

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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em]">Network Status: Operational</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter m-0 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">Ecosystem Overview</h1>
        </div>
        <div className="flex items-center gap-2 text-muted text-xs font-mono bg-bg-surface px-3 py-1.5 rounded-lg border border-border-muted">
          <Activity size={14} className="text-primary" />
          <span>Real-time on-chain data</span>
        </div>
      </div>

      {/* 1. Hero Stat Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="TOTAL TVL" value="$164.2M" change="+2.3%" isPositive={true} sparklineData={generateSparkline(30, 150, 170)} />
        <StatCard title="SBTC SUPPLY" value="542.8" change="+12.4%" isPositive={true} sparklineData={generateSparkline(30, 400, 550)} />
        <StatCard title="ACTIVE ADDRESSES" value="12,482" change="-1.2%" isPositive={false} sparklineData={generateSparkline(30, 10000, 15000)} />
        <StatCard title="CONTRACTS (7D)" value="540" change="+8.4%" isPositive={true} sparklineData={generateSparkline(10, 30, 80)} />
        <StatCard title="24H VOLUME" value="$42.1M" change="+18.2%" isPositive={true} sparklineData={generateSparkline(30, 20, 50)} />
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6" style={{ minWidth: 0 }}>
          
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

          {/* 3. Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChartCard title="sBTC MINT VELOCITY">
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

            <ChartCard title="DEV ADOPTION (NEW ADDR)">
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

            <ChartCard title="TRANSACTION DIVERSITY">
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

          {/* 4. Detailed View Table */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="heading-3 px-4 py-1 border-l-2 border-primary">Protocol Performance</h2>
              <button className="text-xs font-bold text-primary hover:underline">View All Protocols</button>
            </div>
            <DataTable columns={tableColumns} data={protocolTableData} />
          </div>

        </div>

        {/* 5. Activity Feed Sidebar */}
        <div className="hidden xl:flex flex-col w-[300px] shrink-0 border-l border-border-muted/50 pl-6 relative">
          <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
          <div className="sticky top-6 flex flex-col gap-6">
            <div className="bg-bg-surface/60 backdrop-blur-md rounded-2xl border border-border-muted overflow-hidden shadow-2xl transition-all duration-300 hover:border-border-bright">
              <div className="p-5 border-b border-border-muted bg-deep/40 flex items-center justify-between">
                <h3 className="text-sm font-bold m-0 text-white flex items-center gap-2 tracking-wide">
                  <Activity size={16} className="text-primary" />
                  Live Event Feed
                </h3>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              </div>
              <div className="p-5 flex flex-col gap-6 max-h-[500px] overflow-y-auto custom-scrollbar">
                {feedEvents.map((event) => (
                  <div key={event.id} className="flex gap-4 group cursor-pointer">
                    <div 
                      className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center bg-bg-deep border border-border-muted group-hover:border-primary/50 transition-all duration-300"
                      style={{ color: event.color }}
                    >
                      <event.icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-white font-bold m-0 leading-tight group-hover:text-primary transition-colors truncate">
                        {event.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] text-muted font-mono">{event.time}</span>
                        <div className="w-1 h-1 rounded-full bg-muted/30" />
                        <span className="text-[10px] text-primary/70 font-bold uppercase tracking-tighter hover:underline">Details</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-bg-deep/30 border-t border-border-muted">
                <button className="w-full py-2 rounded-lg bg-bg-surface text-[11px] font-bold text-muted hover:text-white hover:bg-bg-surface-lighter/20 transition-all border border-border-muted/5">
                  View Full Transaction History
                </button>
              </div>
            </div>
            
            {/* Quick Context Card */}
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-5">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">Protocol Health Tip</h4>
              <p className="text-xs text-muted-lighter leading-relaxed m-0">
                sBTC peg health is currently at <span className="text-white font-bold">0.9998</span>, with <span className="text-white font-bold">84 active signers</span>. Network latency is within normal parameters for DeFi operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
