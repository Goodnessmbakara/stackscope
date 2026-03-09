import React, { useState } from 'react';
import { Search, Share2, Menu } from 'lucide-react';

const TopBar = ({ isMobile, toggleSidebar }) => {
  const [timeRange, setTimeRange] = useState('30D');
  const ranges = ['24H', '7D', '30D', '90D', '1Y', 'ALL'];

  return (
    <header 
      className="top-bar flex items-center justify-between pointer-events-auto bg-white"
      style={{ 
        height: '64px',
        borderBottom: '1px solid var(--border)',
        padding: '0 var(--space-3)'
      }}
    >
      <div className="flex items-center flex-1 gap-4">
        {/* Mobile Sidebar Toggle */}
        {isMobile && (
          <button 
            onClick={toggleSidebar}
            className="text-muted hover:text-teal transition-colors"
          >
            <Menu size={24} />
          </button>
        )}
        
        {/* Search Input */}
        <div className="relative w-full max-w-[480px]">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" style={{ transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search by contract or wallet address..." 
            className="w-full text-body bg-white border border-border focus:border-teal focus:outline-none transition-colors"
            style={{ 
              height: '44px',
              paddingLeft: '40px',
              paddingRight: '16px',
              borderRadius: 'var(--radius-md)',
              borderColor: 'var(--border)',
              color: 'var(--charcoal)'
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Time Range Selector */}
        <div className="hidden md:flex items-center gap-1">
          {ranges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className="text-body-small transition-colors border"
              style={{
                height: '32px',
                padding: '0 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: timeRange === range ? 'var(--teal)' : 'transparent',
                color: timeRange === range ? 'var(--white)' : 'var(--muted)',
                borderColor: timeRange === range ? 'var(--teal)' : 'var(--border)',
                cursor: 'pointer'
              }}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Global Actions */}
        <button 
          className="text-muted hover:text-teal transition-colors flex items-center justify-center"
          title="Share this view"
          style={{ width: '40px', height: '40px', background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Share2 size={20} />
        </button>
        
        <div className="hidden md:block">
          <a href="/api" className="text-body-small text-teal hover:text-teal-dark font-medium" style={{ textDecoration: 'none' }}>
            API Docs
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
