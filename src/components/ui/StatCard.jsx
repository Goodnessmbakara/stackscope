import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const StatCard = ({ title, value, change, isPositive, sparklineData, isLoading, hasError }) => {
  if (isLoading) {
    return (
      <div className="stat-card flex flex-col justify-between" style={{ height: '140px' }}>
        <div className="animate-pulse bg-bg-surface-lighter h-4 w-24 rounded-md mb-2"></div>
        <div className="animate-pulse bg-bg-surface-lighter h-8 w-32 rounded-md mb-4"></div>
        <div className="animate-pulse bg-bg-surface-lighter h-10 w-full rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="stat-card flex flex-col hover-lift h-full animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-label text-muted/60 m-0 uppercase tracking-widest">{title}</h3>
      </div>
      
      <div className="flex items-baseline gap-2 mb-3">
        <span className="mono-metric flex-1">{value}</span>
        {change && (
          <div 
            className={`flex items-center text-[11px] font-bold px-2 py-0.5 rounded-md ${isPositive ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}
          >
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span className="ml-1">{change}</span>
          </div>
        )}
      </div>

      {sparklineData && sparklineData.length > 0 && (
        <div className="mt-auto pt-2" style={{ height: '40px', width: '100%', opacity: 0.8 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={isPositive ? 'var(--success-text)' : 'var(--error-text)'} 
                strokeWidth={2} 
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
