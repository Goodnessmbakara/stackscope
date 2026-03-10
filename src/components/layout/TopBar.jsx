import React, { useState } from 'react';
import { Search, Share2, Menu, Bell, User } from 'lucide-react';

const TopBar = ({ isMobile, toggleSidebar }) => {
  const [timeRange, setTimeRange] = useState('30D');
  const ranges = ['24H', '7D', '30D', '90D', '1Y', 'ALL'];

  return (
    <header className="top-bar flex items-center justify-between px-6 bg-bg-surface border-b border-border-muted" style={{ height: '72px' }}>
      <div className="flex items-center flex-1 gap-6">
        {/* Mobile Sidebar Toggle */}
        {isMobile && (
          <button 
            onClick={toggleSidebar}
            className="text-muted hover:text-primary transition-colors cursor-pointer"
          >
            <Menu size={24} />
          </button>
        )}
        
        {/* Search Input */}
        <div className="relative w-full max-w-[540px] group">
          <Search 
            size={18} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors" 
          />
          <input 
            type="text" 
            placeholder="Search assets, contracts, or explorer..." 
            className="w-full text-body bg-bg-surface-lighter text-white placeholder:text-muted/50 border border-border-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300"
            style={{ 
              height: '48px',
              paddingLeft: '48px',
              paddingRight: '16px',
              borderRadius: '12px'
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-muted bg-bg-deep/50 text-[10px] text-muted font-bold tracking-tighter">
            ⌘ K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Time Range Selector */}
        <div className="hidden lg:flex items-center bg-bg-surface-lighter/50 p-1 rounded-xl border border-border-muted">
          {ranges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`
                text-[11px] font-bold px-4 py-1.5 rounded-lg transition-all duration-200 cursor-pointer
                ${timeRange === range 
                  ? 'bg-primary text-bg-deep shadow-md' 
                  : 'text-muted hover:text-white hover:bg-bg-surface-lighter'}
              `}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Global Actions */}
        <div className="flex items-center gap-2 border-l border-border-muted pl-6">
          <button 
            className="text-muted hover:text-white transition-colors flex items-center justify-center p-2 rounded-lg hover:bg-bg-surface-lighter"
            title="Notifications"
          >
            <Bell size={20} />
          </button>
          
          <button 
            className="text-muted hover:text-white transition-colors flex items-center justify-center p-2 rounded-lg hover:bg-bg-surface-lighter"
            title="Share this view"
          >
            <Share2 size={20} />
          </button>

          <div className="ml-2 flex items-center gap-3 pl-4 border-l border-border-muted group cursor-pointer">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-[11px] font-bold text-white leading-none">Stacks Dev</span>
              <span className="text-[10px] text-primary font-mono leading-none mt-1 uppercase tracking-tighter opacity-70">Pro Tier</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-bg-surface-lighter/50 border-2 border-border-muted flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors bg-gradient-to-br from-primary/10 to-transparent overflow-hidden">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
