import React, { useState, useRef, useEffect } from 'react';
import { Search, User, ChevronRight, BarChart3, Activity, ShieldCheck, Code2, LayoutDashboard, FileCode, Wallet, BookOpen, TrendingUp, Home, Check, Copy, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SEARCH_INDEX = [
  // ── Pages ──────────────────────────────────────────────────────────────────
  { label: 'Dashboard', description: 'Main dashboard — ecosystem overview & TVL', path: '/overview', group: 'Pages', icon: LayoutDashboard },
  { label: 'sBTC Deep Dive', description: 'sBTC supply, health & signers', path: '/sbtc', group: 'Pages', icon: ShieldCheck },
  { label: 'DeFi Health', description: 'Protocol TVL and APY', path: '/defi', group: 'Pages', icon: BarChart3 },
  { label: 'Network Activity', description: 'Blocks, transactions, contracts', path: '/network', group: 'Pages', icon: Activity },
  { label: 'Developers', description: 'Contract deployments & activity', path: '/developers', group: 'Pages', icon: Code2 },
  { label: 'Contract Search', description: 'Search smart contracts', path: '/search/contract', group: 'Pages', icon: FileCode },
  { label: 'Wallet Search', description: 'Search wallet addresses', path: '/search/wallet', group: 'Pages', icon: Wallet },
  { label: 'API Docs', description: 'REST API documentation', path: '/api', group: 'Pages', icon: BookOpen },
  { label: 'Reports', description: 'Ecosystem reports', path: '/reports', group: 'Pages', icon: TrendingUp },
  { label: 'Documentation', description: 'Full StackScope docs', path: '/docs', group: 'Pages', icon: BookOpen },

  // ── Overview page sections ──────────────────────────────────────────────────
  { label: 'Total TVL', description: 'Total value locked across all protocols', path: '/overview', anchor: '#quick-insights', group: 'Content', icon: BarChart3 },
  { label: 'Capital Distribution', description: 'TVL breakdown across ALEX, Arkadiko, Zest…', path: '/overview', anchor: '#capital-distribution', group: 'Content', icon: BarChart3 },
  { label: 'Top Performer', description: 'StackingDAO +22.1% — leading 7-day TVL growth', path: '/overview', anchor: '#quick-insights', group: 'Content', icon: TrendingUp },
  { label: 'sBTC Momentum', description: '+12.4% supply growth — strong adoption this week', path: '/overview', anchor: '#quick-insights', group: 'Content', icon: ShieldCheck },
  { label: 'Developer Activity', description: '540 contracts deployed, +8.4% from last week', path: '/overview', anchor: '#quick-insights', group: 'Content', icon: Code2 },
  { label: 'Key Performance Indicators', description: 'sBTC mint activity and developer charts', path: '/overview', anchor: '#key-metrics', group: 'Content', icon: BarChart3 },
  { label: 'Network Activity Stream', description: 'Live feed of contracts, swaps, and mints', path: '/overview', anchor: '#network-feed', group: 'Content', icon: Activity },
  { label: 'Protocol Health Table', description: 'APY, TVL change and health score per protocol', path: '/overview', anchor: '#protocol-table', group: 'Content', icon: ShieldCheck },
  { label: 'Transaction Type Breakdown', description: 'DeFi, STX transfer, NFT, deploy breakdown', path: '/overview', anchor: '#tx-breakdown', group: 'Content', icon: BarChart3 },
  { label: 'Ecosystem Overview', description: 'Real-time analytics for the Stacks Bitcoin L2', path: '/overview', anchor: '#overview-header', group: 'Content', icon: LayoutDashboard },
  { label: 'Block Height', description: '148,742 — current Stacks mainnet block', path: '/overview', anchor: '#network-feed', group: 'Content', icon: Activity },
  { label: 'Avg Block Time', description: '5.2s — average block time', path: '/overview', anchor: '#network-feed', group: 'Content', icon: Activity },

  // ── Protocol data ──────────────────────────────────────────────────────────
  { label: 'ALEX', description: 'DeFi AMM — TVL $89.2M · APY 14.2%', path: '/defi', group: 'Protocols', icon: BarChart3 },
  { label: 'Arkadiko', description: 'Stablecoin — TVL $38.5M · APY 8.4%', path: '/defi', group: 'Protocols', icon: BarChart3 },
  { label: 'Zest Protocol', description: 'Lending — TVL $32.1M · APY 18.5%', path: '/defi', group: 'Protocols', icon: BarChart3 },
  { label: 'StackingDAO', description: 'Liquid Stacking — TVL $24.8M', path: '/defi', group: 'Protocols', icon: BarChart3 },
  { label: 'Bitflow', description: 'DEX — TVL $12.4M · APY 11.2%', path: '/defi', group: 'Protocols', icon: BarChart3 },

  // ── Docs content ───────────────────────────────────────────────────────────
  { label: 'Getting Started', description: 'Quickstart guide for StackScope API', path: '/docs', anchor: null, group: 'Content', icon: BookOpen },
  { label: 'Authentication', description: 'API key header: X-API-Key', path: '/docs', anchor: null, group: 'Content', icon: BookOpen },
  { label: 'Rate Limits', description: 'Free: 100/min, Pro: 1000/min', path: '/docs', anchor: null, group: 'Content', icon: BookOpen },
  { label: 'WebSocket Events', description: 'block.new, sbtc.mint, defi.large_swap…', path: '/docs', anchor: null, group: 'Content', icon: BookOpen },
  { label: 'JavaScript SDK', description: 'npm install @stackscope/sdk', path: '/docs', anchor: null, group: 'Content', icon: Code2 },
  { label: 'Python SDK', description: 'pip install stackscope', path: '/docs', anchor: null, group: 'Content', icon: Code2 },
];

const GroupLabels = {
  Pages: 'text-blue-400',
  Protocols: 'text-orange-400',
  Metrics: 'text-green-400',
};

const TopBar = ({ isMobile, toggleSidebar, timeFilter, setTimeFilter }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const ranges = ['24H', '7D', '30D', '90D', '1Y', 'ALL'];

  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.group.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_INDEX.slice(0, 8);

  const grouped = results.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  // Flatten for keyboard nav
  const flat = Object.values(grouped).flat();

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  // Global ⌘K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !inputRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (item) => {
    setOpen(false);
    setQuery('');
    inputRef.current?.blur();

    const doScroll = () => {
      if (item.anchor) {
        const el = document.querySelector(item.anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Flash-highlight
          el.style.transition = 'outline 0s, box-shadow 0.15s ease';
          el.style.outline = '2px solid var(--color-primary, #3B82F6)';
          el.style.boxShadow = '0 0 0 4px rgba(59,130,246,0.25)';
          el.style.borderRadius = '12px';
          setTimeout(() => {
            el.style.outline = '';
            el.style.boxShadow = '';
            el.style.borderRadius = '';
          }, 1800);
        }
      }
    };

    if (window.location.pathname === item.path) {
      // Already on the page — just scroll
      doScroll();
    } else {
      navigate(item.path);
      // Wait for page render then scroll
      setTimeout(doScroll, 350);
    }
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, flat.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)); }
    if (e.key === 'Enter' && flat[activeIdx]) { handleSelect(flat[activeIdx]); }
  };

  let flatIdx = 0;

  return (
    <header className="top-bar flex items-center justify-between px-4 md:px-6 bg-bg-surface border-b border-border-muted" style={{ height: isMobile ? '64px' : '72px' }}>
      <div className="flex items-center flex-1 gap-3 md:gap-6 max-w-full relative">
        {/* Logo/Brand on Mobile */}
        {isMobile && (
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-base font-bold tracking-tight text-white whitespace-nowrap">
              Stack<span className="text-primary">Scope</span>
            </span>
          </div>
        )}

        {/* Search Input */}
        <div className="relative w-full max-w-[540px] group">
          <Search
            size={isMobile ? 16 : 18}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors z-10"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={isMobile ? "Search..." : "Search assets, contracts, or explorer..."}
            className="w-full text-sm md:text-body bg-bg-surface-lighter text-white placeholder:text-muted/50 border border-border-muted focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-300"
            style={{
              height: isMobile ? '40px' : '48px',
              paddingLeft: isMobile ? '36px' : '48px',
              paddingRight: '16px',
              borderRadius: isMobile ? '10px' : '12px',
              fontSize: isMobile ? '14px' : '16px'
            }}
            autoComplete="off"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-muted bg-bg-deep/50 text-[10px] text-muted font-bold tracking-tighter">
            ⌘ K
          </div>

          {/* Dropdown */}
          {open && flat.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 right-0 mt-2 bg-bg-surface border border-border-muted rounded-xl shadow-2xl overflow-hidden z-[200] animate-fade-in"
              style={{ maxHeight: '420px', overflowY: 'auto' }}
            >
              {Object.entries(grouped).map(([group, items]) => (
                <div key={group}>
                  <div className={`px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest ${GroupLabels[group] || 'text-muted'}`}>
                    {group}
                  </div>
                  {items.map(item => {
                    const idx = flatIdx++;
                    const Icon = item.icon;
                    const isActive = idx === activeIdx;
                    return (
                      <button
                        key={`${group}-${item.label}`}
                        onMouseEnter={() => setActiveIdx(idx)}
                        onMouseDown={() => handleSelect(item)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${isActive ? 'bg-primary/10' : 'hover:bg-white/[0.04]'}`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-primary/20 text-primary' : 'bg-white/[0.05] text-muted'}`}>
                          <Icon size={15} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold m-0 leading-none mb-0.5 ${isActive ? 'text-white' : 'text-white/80'}`}>{item.label}</p>
                          <p className="text-[11px] text-muted m-0 truncate">{item.description}</p>
                        </div>
                        {isActive && <ChevronRight size={14} className="text-primary shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              ))}
              <div className="border-t border-border-muted px-4 py-2 flex items-center gap-4 text-[10px] text-muted">
                <span><kbd className="font-mono bg-white/10 px-1 rounded">↑↓</kbd> navigate</span>
                <span><kbd className="font-mono bg-white/10 px-1 rounded">↵</kbd> select</span>
                <span><kbd className="font-mono bg-white/10 px-1 rounded">esc</kbd> close</span>
              </div>
            </div>
          )}
        </div>

        {/* Time Range Selector */}
        <div className="hidden lg:flex items-center bg-bg-surface-lighter/50 p-1 rounded-xl border border-border-muted">
          {ranges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeFilter && setTimeFilter(range)}
              className={`
                text-[11px] font-bold px-4 py-1.5 rounded-lg transition-all duration-200 cursor-pointer
                ${timeFilter === range
                  ? 'bg-primary text-bg-deep shadow-md'
                  : 'text-muted hover:text-white hover:bg-bg-surface-lighter'}
              `}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-6 shrink-0">
        {/* Global Actions */}
        <div className="flex items-center gap-1 md:gap-2 border-l border-border-muted pl-2 md:pl-6">
          <a
            href="/"
            className="flex items-center gap-2 text-muted hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-bg-surface-lighter border border-transparent hover:border-border-muted text-sm font-medium"
            title="Back to Home"
          >
            <Home size={isMobile ? 16 : 17} />
            {!isMobile && <span className="text-xs font-semibold">Home</span>}
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
