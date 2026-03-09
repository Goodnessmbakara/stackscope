import React from 'react';
import { AlertTriangle, CheckCircle, AlertOctagon, Info } from 'lucide-react';

export const DataStaleWarning = ({ minutesAgo }) => {
  return (
    <div 
      className="w-full flex items-center justify-between px-4"
      style={{
        height: '36px',
        backgroundColor: 'var(--warning-bg)',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <div className="flex items-center gap-2 text-warning-text">
        <AlertTriangle size={16} />
        <span className="text-body-small font-medium">Data may be delayed — last updated {minutesAgo} minutes ago</span>
      </div>
      <button className="text-body-small text-warning-text hover:underline focus:outline-none" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        Refresh
      </button>
    </div>
  );
};

export const PegHealthBanner = ({ state, spread }) => {
  let bg = 'var(--success-bg)';
  let color = 'var(--success-text)';
  let Icon = CheckCircle;
  let label = 'Healthy';

  if (state === 'Stable') {
    bg = 'var(--warning-bg)';
    color = 'var(--warning-text)';
    Icon = AlertTriangle;
    label = 'Stable';
  } else if (state === 'Stress') {
    bg = 'var(--error-bg)';
    color = 'var(--error-text)';
    Icon = AlertOctagon;
    label = 'Stress';
  }

  return (
    <div 
      className="w-full sticky top-0 z-40 flex items-center justify-between"
      style={{
        height: '48px',
        padding: '0 var(--space-3)',
        backgroundColor: bg,
        color: color,
        borderBottom: `1px solid ${color}40` // slightly transparent border
      }}
      role={state === 'Stress' ? "alert" : "status"}
    >
      <div className="flex items-center gap-2">
        <Icon size={20} />
        <span className="text-body font-medium">Peg {label} &mdash; {spread} basis points spread</span>
      </div>
      <button 
        className="flex items-center gap-1 hover:opacity-80 transition-opacity" 
        title="What is the sBTC peg?"
        style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
      >
        <span className="text-body-small hidden md:inline">What is the sBTC peg?</span>
        <Info size={16} />
      </button>
    </div>
  );
};
