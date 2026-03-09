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
import { Activity, Code, Settings } from 'lucide-react';

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
  alex: 'var(--teal)',
  arkadiko: '#10B981',
  zest: '#F59E0B',
  bitflow: '#3B82F6',
  stackingdao: '#8B5CF6'
};

const mintData = Array.from({ length: 30 }).map((_, i) => ({ date: `Mar ${i+1}`, value: 300 + Math.random()*150 + i*10 }));
const devData = Array.from({ length: 30 }).map((_, i) => ({ date: `Mar ${i+1}`, value: 10 + Math.random()*25 + (i%7===0?-10:0) }));
const txTypeData = [
  { name: 'DeFi', value: 45000, color: 'var(--teal)' },
  { name: 'STX Transfer', value: 30000, color: '#10B981' },
  { name: 'NFT', value: 15000, color: '#8B5CF6' },
  { name: 'Deploy', value: 5000, color: '#F59E0B' },
  { name: 'Other', value: 5000, color: '#64748B' }
];

const protocolTableData = [
  { id: 'alex', name: 'ALEX', tvl: '$89.2M', tvlChange: '+4.2%', users: '12.4K', apy: '14.2%', health: 96 },
  { id: 'arkadiko', name: 'Arkadiko', tvl: '$38.5M', tvlChange: '-1.1%', users: '4.1K', apy: '8.4%', health: 88 },
  { id: 'zest', name: 'Zest', tvl: '$32.1M', tvlChange: '+12.4%', users: '3.8K', apy: '18.5%', health: 92 },
  { id: 'stackingdao', name: 'StackingDAO', tvl: '$24.8M', tvlChange: '+22.1%', users: '8.2K', apy: '6.1%', health: 98 },
  { id: 'bitflow', name: 'Bitflow', tvl: '$12.4M', tvlChange: '+2.4%', users: '2.1K', apy: '11.2%', health: 85 }
];

const tableColumns = [
  { key: 'name', label: 'Protocol', sortable: true, render: (val) => <span className="font-semibold">{val}</span> },
  { key: 'tvl', label: 'TVL', sortable: true, render: (val) => <span className="mono-data font-medium">{val}</span> },
  { key: 'tvlChange', label: '7d Change', sortable: true, render: (val) => (
    <span className={val.startsWith('-') ? 'text-error-text' : 'text-success-text'}>{val}</span>
  )},
  { key: 'users', label: 'Active Users (7d)', sortable: true, render: (val) => <span className="mono-data">{val}</span> },
  { key: 'apy', label: 'Top APY', sortable: true, render: (val) => <span className="mono-data">{val}</span> },
  { key: 'health', label: 'Health Score', sortable: true, render: (val) => (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${val}%`, backgroundColor: val > 90 ? 'var(--success)' : val > 80 ? 'var(--warning)' : 'var(--error)' }} />
      </div>
      <span className="mono-data">{val}</span>
    </div>
  )}
];

const feedEvents = [
  { id: 1, icon: Code, title: 'BitFlow Router Contract Deployed', time: '2m ago', color: 'var(--teal)' },
  { id: 2, icon: Activity, title: 'Large sBTC Mint: 42.5 sBTC', time: '14m ago', color: 'var(--success)' },
  { id: 3, icon: Settings, title: 'Zest Oracle Update', time: '1h ago', color: 'var(--warning)' },
  { id: 4, icon: Activity, title: 'Large Swap on ALEX: 1.2M STX', time: '3h ago', color: 'var(--teal)' },
  { id: 5, icon: Code, title: 'New NFT Collection Deployed', time: '5h ago', color: '#8B5CF6' }
];

const Overview = () => {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full">
      {/* Global Page Header (Optional, PRD specifies top-bar for global context but spacing is good) */}
      <div className="flex items-center justify-between">
        <h1 className="heading-display text-charcoal m-0">Ecosystem Overview</h1>
      </div>

      {/* 1. Hero Stat Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="TOTAL TVL" value="$164.2M" change="+2.3%" isPositive={true} sparklineData={generateSparkline(30, 150, 170)} />
        <StatCard title="SBTC SUPPLY" value="542.8" change="+12.4%" isPositive={true} sparklineData={generateSparkline(30, 400, 550)} />
        <StatCard title="ACTIVE ADDRESSES (24H)" value="12,482" change="-1.2%" isPositive={false} sparklineData={generateSparkline(30, 10000, 15000)} />
        <StatCard title="NEW CONTRACTS (7D)" value="540" change="+8.4%" isPositive={true} sparklineData={generateSparkline(10, 30, 80)} />
        <StatCard title="DAILY VOLUME (24H)" value="$42.1M" change="+18.2%" isPositive={true} sparklineData={generateSparkline(30, 20, 50)} />
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6" style={{ minWidth: 0 }}>
          
          {/* 2. TVL Trend Chart */}
          <ChartCard 
            title="Total Value Locked — All Protocols" 
            metricValue="$164.2M"
            metricChange="+97.6% (1Y)"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tvlData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: 'var(--muted)', fontFamily: 'var(--font-sans)' }} dy={10} minTickGap={30} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: 'var(--muted)', fontFamily: 'var(--font-sans)' }} tickFormatter={(val) => `$${val}M`} />
                <RechartsTooltip content={<HoverTooltip multiSeries={true} />} cursor={{ stroke: 'var(--border)', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area type="monotone" dataKey="alex" name="ALEX" stackId="1" stroke={protocolColors.alex} fill={protocolColors.alex} fillOpacity={0.8} />
                <Area type="monotone" dataKey="arkadiko" name="Arkadiko" stackId="1" stroke={protocolColors.arkadiko} fill={protocolColors.arkadiko} fillOpacity={0.8} />
                <Area type="monotone" dataKey="zest" name="Zest" stackId="1" stroke={protocolColors.zest} fill={protocolColors.zest} fillOpacity={0.8} />
                <Area type="monotone" dataKey="stackingdao" name="StackingDAO" stackId="1" stroke={protocolColors.stackingdao} fill={protocolColors.stackingdao} fillOpacity={0.8} />
                <Area type="monotone" dataKey="bitflow" name="Bitflow" stackId="1" stroke={protocolColors.bitflow} fill={protocolColors.bitflow} fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 3. Secondary Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChartCard title="sBTC Minted (30d)">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mintData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} minTickGap={15} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} />
                  <RechartsTooltip content={<HoverTooltip />} cursor={{ stroke: 'var(--border)' }} />
                  <Area type="monotone" dataKey="value" stroke="var(--teal)" fill="var(--teal-bg)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="New Dev Addresses (30d)">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={devData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} minTickGap={15} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} />
                  <RechartsTooltip content={<HoverTooltip />} cursor={{ fill: 'var(--light-gray)' }} />
                  <Bar dataKey="value" fill="var(--teal)" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Transactions by Type">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={txTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
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
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-4">
                <span className="text-body-small text-muted">Total (24h)</span>
                <span className="mono-metric text-charcoal mt-[-4px]">100K</span>
              </div>
            </ChartCard>
          </div>

          {/* 4. Protocol Health Table */}
          <div className="flex flex-col gap-4">
            <h2 className="heading-2 m-0 text-charcoal">Protocol Health</h2>
            <DataTable columns={tableColumns} data={protocolTableData} />
          </div>

        </div>

        {/* 5. Recent Activity Feed (Right Column on Desktop) */}
        <div className="hidden xl:flex flex-col w-[280px] shrink-0">
          <div 
            className="bg-white rounded-xl shadow-sm border border-border overflow-hidden sticky top-6 flex flex-col"
            style={{ maxHeight: 'calc(100vh - var(--space-6) - 64px)' }}
          >
            <div className="p-4 border-b border-border bg-midnight-navy">
              <h3 className="heading-3 m-0 text-white flex items-center gap-2">
                <Activity size={18} />
                Recent Activity
              </h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
              {feedEvents.map((event) => (
                <div key={event.id} className="flex gap-3 group">
                  <div className="mt-1" style={{ color: event.color }}>
                    <event.icon size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-body-small text-charcoal font-medium m-0 leading-tight group-hover:text-teal transition-colors break-words">
                      {event.title}
                    </p>
                    <p className="text-caption text-muted m-0 mt-1">
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
