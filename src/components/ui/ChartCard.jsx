import React from 'react';
import { Download, Code2, Maximize2 } from 'lucide-react';
import { DataStaleWarning } from './FeedbackBanners';

const ChartCard = ({ 
  title, 
  metricValue, 
  metricChange, 
  children, 
  isLoading, 
  isEmpty, 
  isStale,
  staleMinutesAgo,
  sourceText = 'Source: Hiro API + Ortege ETL'
}) => {
  // Skeleton Loading State
  if (isLoading) {
    return (
      <div 
        className="chart-card flex flex-col relative"
        style={{
          padding: 'var(--space-3)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--white)',
          boxShadow: 'var(--shadow-level-1)',
          minHeight: '320px',
          width: '100%'
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="animate-pulse bg-gray-200 h-6 w-1/3 rounded"></div>
          <div className="flex gap-2">
            <div className="animate-pulse bg-gray-200 h-5 w-5 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-5 w-5 rounded"></div>
          </div>
        </div>
        
        {/* Shimmer skeleton for chart area */}
        <div 
          className="flex-1 rounded" 
          style={{ 
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite linear'
          }}
        />
        <style>{`
          @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        `}</style>
      </div>
    );
  }

  return (
    <div 
      className="chart-card flex flex-col relative overflow-hidden"
      style={{
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--white)',
        boxShadow: 'var(--shadow-level-1)',
        minHeight: '320px',
        width: '100%'
      }}
    >
      {/* Header Area */}
      <div className="flex justify-between items-start px-6 pt-6 pb-2">
        <div>
          <h2 className="heading-2 m-0 mb-1 text-charcoal">{title}</h2>
          {(metricValue || metricChange) && (
            <div className="flex items-baseline gap-2">
              {metricValue && <span className="mono-metric">{metricValue}</span>}
              {metricChange && <span className="text-body-small" style={{ color: metricChange.startsWith('+') ? 'var(--success-text)' : 'var(--error-text)' }}>{metricChange}</span>}
            </div>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 text-muted">
          <button className="hover:text-teal transition-colors" title="Download CSV" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <Download size={20} />
          </button>
          <button className="hover:text-teal transition-colors" title="Embed Chart" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <Code2 size={20} />
          </button>
          <button className="hover:text-teal transition-colors" title="Expand Chart" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <Maximize2 size={20} />
          </button>
        </div>
      </div>

      {isStale && <DataStaleWarning minutesAgo={staleMinutesAgo} />}

      {/* Content Area */}
      <div className="flex-1 px-6 py-4 flex flex-col relative min-h-[220px]">
        {isEmpty ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 mb-4">
              <path d="M3 3v18h18" />
              <path d="M18 9l-5 5-2-2-4 4" />
            </svg>
            <p className="text-body m-0 mb-1 font-medium">No data for this time range</p>
            <p className="text-body-small text-muted m-0">Try a longer range or check back later</p>
          </div>
        ) : (
          children
        )}
      </div>

      {/* Footer */}
      {!isStale && (
        <div 
          className="px-6 py-3 border-t flex justify-between items-center" 
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--white)' }}
        >
          <span className="text-caption text-muted">{sourceText}</span>
          <span className="text-caption text-muted">Updated just now</span>
        </div>
      )}
    </div>
  );
};

export default ChartCard;
