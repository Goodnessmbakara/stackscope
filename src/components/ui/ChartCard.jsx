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
      <div className="chart-card flex flex-col relative animate-fade-in" style={{ minHeight: '320px' }}>
        <div className="flex justify-between items-center mb-6 px-6 pt-6">
          <div className="animate-pulse bg-bg-surface-lighter h-6 w-1/3 rounded-md"></div>
          <div className="flex gap-2">
            <div className="animate-pulse bg-bg-surface-lighter h-5 w-5 rounded-md"></div>
            <div className="animate-pulse bg-bg-surface-lighter h-5 w-5 rounded-md"></div>
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-bg-surface-lighter mx-6 mb-6 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="chart-card flex flex-col relative overflow-hidden animate-fade-in group" style={{ minHeight: '320px' }}>
      {/* Header Area */}
      <div className="flex justify-between items-start px-6 pt-6 pb-2">
        <div className="flex-1">
          <h2 className="heading-3 m-0 mb-2 uppercase tracking-wider">{title}</h2>
          {(metricValue || metricChange) && (
            <div className="flex items-baseline gap-2">
              {metricValue && <span className="mono-metric">{metricValue}</span>}
              {metricChange && (
                <span 
                  className={`text-body-small font-bold ${metricChange.startsWith('+') ? 'text-success' : 'text-error'}`}
                >
                  {metricChange}
                </span>
              )}
            </div>
          )}
        </div>
        
        {/* Actions - Subtle until hover */}
        <div className="flex gap-3 text-muted transition-opacity duration-300 opacity-40 group-hover:opacity-100">
          <button className="hover:text-primary transition-colors cursor-pointer" title="Download CSV" style={{ background: 'none', border: 'none', padding: 0 }}>
            <Download size={18} />
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer" title="Embed Chart" style={{ background: 'none', border: 'none', padding: 0 }}>
            <Code2 size={18} />
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer" title="Expand Chart" style={{ background: 'none', border: 'none', padding: 0 }}>
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      {isStale && <DataStaleWarning minutesAgo={staleMinutesAgo} />}

      {/* Content Area */}
      <div className="flex-1 px-6 py-4 flex flex-col relative min-h-[220px]" style={{ minWidth: 0 }}>
        {isEmpty ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-bg-surface/50">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary opacity-30 mb-4">
              <path d="M3 3v18h18" />
              <path d="M18 9l-5 5-2-2-4 4" />
            </svg>
            <p className="text-body m-0 mb-1 font-semibold text-muted">No data available</p>
            <p className="text-caption text-muted m-0">Try adjusting the time range</p>
          </div>
        ) : (
          children
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t bg-deep/30 flex justify-between items-center" style={{ borderColor: 'var(--border-muted)' }}>
        <span className="text-caption text-muted font-mono">{sourceText}</span>
        <span className="text-caption text-muted">Live</span>
      </div>
    </div>
  );
};

export default ChartCard;
