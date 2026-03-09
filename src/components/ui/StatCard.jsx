import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const StatCard = ({ title, value, change, isPositive, sparklineData, isLoading, hasError }) => {
  if (isLoading) {
    return (
      <div 
        className="stat-card flex flex-col justify-between"
        style={{
          minWidth: '160px',
          padding: 'var(--space-3)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--white)',
          boxShadow: 'var(--shadow-level-1)',
          height: '140px'
        }}
      >
        <div className="animate-pulse bg-gray-200 h-4 w-24 rounded mb-2"></div>
        <div className="animate-pulse bg-gray-200 h-8 w-32 rounded mb-4"></div>
        <div className="animate-pulse bg-gray-200 h-10 w-full rounded"></div>
      </div>
    );
  }

  return (
    <div 
      className="stat-card flex flex-col"
      style={{
        minWidth: '160px',
        padding: 'var(--space-3)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--white)',
        boxShadow: 'var(--shadow-level-1)',
        height: '100%',
        flex: 1
      }}
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-label text-muted m-0">{title}</h3>
      </div>
      
      <div className="flex items-baseline gap-2 mb-2">
        <span className="mono-metric flex-1">{value}</span>
        {change && (
          <div 
            className="flex items-center text-label"
            style={{
              padding: '2px 6px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: isPositive ? 'var(--success-bg)' : 'var(--error-bg)',
              color: isPositive ? 'var(--success-text)' : 'var(--error-text)'
            }}
          >
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span className="ml-0.5">{change}</span>
          </div>
        )}
      </div>

      {sparklineData && sparklineData.length > 0 && (
        <div className="mt-auto" style={{ height: '40px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="var(--teal)" 
                strokeWidth={2} 
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default StatCard;
