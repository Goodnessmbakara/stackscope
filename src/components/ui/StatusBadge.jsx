import React from 'react';

const StatusBadge = ({ state, text, className = '' }) => {
  let bg = 'var(--light-gray)';
  let color = 'var(--muted)';
  
  if (state === 'Healthy' || state === 'Positive' || state === 'Active') {
    bg = 'var(--success-bg)';
    color = 'var(--success-text)';
  } else if (state === 'Stable' || state === 'Warning') {
    bg = 'var(--warning-bg)';
    color = 'var(--warning-text)';
  } else if (state === 'Stress' || state === 'Negative' || state === 'Error') {
    bg = 'var(--error-bg)';
    color = 'var(--error-text)';
  } else if (state === 'New' || state === 'Info') {
    bg = 'var(--teal-bg)';
    color = 'var(--teal-dark)';
  }

  return (
    <span 
      className={`status-badge inline-flex items-center justify-center text-label ${className}`}
      style={{
        height: '22px',
        padding: '4px 10px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: bg,
        color: color,
        whiteSpace: 'nowrap'
      }}
      aria-label={text}
    >
      {text}
    </span>
  );
};

export default StatusBadge;
