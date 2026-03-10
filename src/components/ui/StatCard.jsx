import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const StatCard = ({ title, value, change, isPositive, sparklineData, isLoading, hasError }) => {
  if (isLoading) {
    return (
      <div className="stat-card flex flex-col justify-between min-h-[140px]">
        <div className="animate-pulse bg-bg-surface-lighter h-3 w-24 rounded-md mb-3"></div>
        <div className="flex flex-col gap-2 mb-auto">
          <div className="animate-pulse bg-bg-surface-lighter h-8 w-32 rounded-md"></div>
          <div className="animate-pulse bg-bg-surface-lighter h-5 w-16 rounded-md"></div>
        </div>
        <div className="animate-pulse bg-bg-surface-lighter h-10 w-full rounded-md mt-3"></div>
      </div>
    );
  }

  return (
    <div className="stat-card flex flex-col justify-between h-full animate-fade-in min-h-[140px]">
      {/* Title */}
      <div className="mb-3">
        <h3 className="text-[10px] text-muted uppercase tracking-[0.15em] font-bold m-0 leading-tight">
          {title}
        </h3>
      </div>

      {/* Value and Change */}
      <div className="flex flex-col gap-2 mb-auto">
        <div className="flex items-baseline justify-between gap-2 w-full">
          <span className="text-2xl md:text-3xl font-bold text-white tracking-tight font-mono leading-none flex-shrink-0 min-w-0" style={{ wordBreak: 'break-word' }}>
            {value}
          </span>
        </div>
        {change && (
          <div
            className={`flex items-center self-start text-[11px] font-bold px-2 py-1 rounded-md ${isPositive ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}
          >
            {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
            <span className="ml-1">{change}</span>
          </div>
        )}
      </div>

      {/* Sparkline */}
      {sparklineData && sparklineData.length > 0 && (
        <div className="mt-3 pt-2 border-t border-border-muted/30" style={{ height: '40px', width: '100%', minWidth: 0, opacity: 0.7 }}>
          <ResponsiveContainer width="100%" height="100%" debounce={50}>
            <LineChart data={sparklineData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={isPositive ? 'var(--success-text)' : 'var(--error-text)'}
                strokeWidth={1.5}
                dot={false}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default StatCard;
