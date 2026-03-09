import React from 'react';

// Custom Tooltip for Recharts
const HoverTooltip = ({ active, payload, label, multiSeries = false }) => {
  if (active && payload && payload.length) {
    if (multiSeries) {
      return (
        <div 
          className="hover-tooltip"
          style={{
            backgroundColor: 'var(--white)',
            border: '1px solid var(--teal)',
            boxShadow: 'var(--shadow-level-2)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            minWidth: '150px'
          }}
        >
          <p className="text-body-small text-muted mb-2 m-0" style={{ fontWeight: 500 }}>{label}</p>
          <div className="flex flex-col gap-1">
            {payload.map((entry, index) => (
              <div key={`item-${index}`} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div 
                    style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      backgroundColor: entry.color 
                    }} 
                  />
                  <span className="text-body-small text-charcoal">{entry.name}</span>
                </div>
                <span className="mono-data font-semibold text-charcoal">
                  {entry.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Single series
    return (
      <div 
        className="hover-tooltip"
        style={{
          backgroundColor: 'var(--white)',
          border: '1px solid var(--teal)',
          boxShadow: 'var(--shadow-level-2)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
        }}
      >
        <p className="text-body-small text-muted mb-1 m-0" style={{ fontWeight: 500 }}>{label}</p>
        <p className="mono-data font-semibold text-charcoal m-0 text-base">
          {payload[0].value.toLocaleString()}
        </p>
        {payload[0].payload.event && (
          <p className="text-caption italic text-muted mt-2 m-0">
            {payload[0].payload.event}
          </p>
        )}
      </div>
    );
  }

  return null;
};

export default HoverTooltip;
