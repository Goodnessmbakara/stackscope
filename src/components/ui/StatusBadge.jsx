import React from 'react';

const StatusBadge = ({ state, text, className = '' }) => {
  const statusConfig = {
    Healthy: 'bg-success/15 text-success-text',
    Positive: 'bg-success/15 text-success-text',
    Active: 'bg-success/15 text-success-text',
    Stable: 'bg-warning/15 text-warning-text',
    Warning: 'bg-warning/15 text-warning-text',
    Stress: 'bg-error/15 text-error-text',
    Negative: 'bg-error/15 text-error-text',
    Error: 'bg-error/15 text-error-text',
    New: 'bg-info/15 text-info',
    Info: 'bg-info/15 text-info',
  };

  const config = statusConfig[state] || 'bg-bg-surface-lighter text-muted';

  return (
    <span 
      className={`status-badge inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${config} ${className}`}
      aria-label={text}
    >
      {text}
    </span>
  );
};

export default StatusBadge;
