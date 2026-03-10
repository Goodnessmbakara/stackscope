import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Coins, 
  Code, 
  LineChart, 
  Activity, 
  Landmark, 
  Search, 
  Wallet,
  BookOpen,
  Code2,
  Github,
  ChevronLeft,
  ChevronRight,
  Shield
} from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const primaryNav = [
    { name: 'Overview', path: '/', icon: LayoutDashboard },
    { name: 'sBTC', path: '/sbtc', icon: Coins },
    { name: 'Developers', path: '/developers', icon: Code },
    { name: 'DeFi', path: '/defi', icon: LineChart },
    { name: 'Network', path: '/network', icon: Activity },
  ];

  const secondaryNav = [
    { name: 'sBTC Governance', path: '/sbtc/governance', icon: Landmark, badge: 'NEW' },
    { name: 'Contract Search', path: '/search/contract', icon: Search },
    { name: 'Wallet Search', path: '/search/wallet', icon: Wallet },
  ];

  const bottomNav = [
    { name: 'API Docs', path: '/api', icon: BookOpen },
    { name: 'Reports', path: '/reports', icon: Activity },
  ];

  return (
    <aside 
      className={`sidebar flex flex-col h-screen fixed left-0 top-0 transition-all duration-300 z-50`}
      style={{ width: isCollapsed ? '64px' : '240px' }}
    >
      {/* Header / Branding */}
      <div className="flex items-center justify-between px-4" style={{ height: '72px' }}>
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center justify-center bg-primary rounded-lg text-bg-deep" style={{ width: '32px', height: '32px', flexShrink: 0 }}>
            <Shield size={20} fill="currentColor" />
          </div>
          {!isCollapsed && (
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap animate-fade-in">
              Stack<span className="text-primary">Scope</span>
            </span>
          )}
        </div>
        {!isCollapsed && (
          <button 
            onClick={() => setIsCollapsed(true)}
            className="text-muted hover:text-white transition-colors p-1.5 rounded-md hover:bg-bg-surface-lighter"
          >
            <ChevronLeft size={18} />
          </button>
        )}
      </div>

      {/* Nav Content */}
      <div className="flex-1 overflow-y-auto px-3 py-6 flex flex-col gap-1 custom-scrollbar">
        {/* Main Section Label */}
        {!isCollapsed && <div className="px-3 mb-2 text-label text-muted/50 font-bold uppercase tracking-widest text-[10px]">Analytics</div>}
        
        {primaryNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
              ${isActive ? 'bg-primary text-bg-deep font-bold shadow-lg shadow-primary/20' : 'text-muted hover:bg-bg-surface-lighter hover:text-white'}
            `}
          >
            <item.icon size={20} className="flex-shrink-0" />
            {!isCollapsed && <span className="text-body font-medium whitespace-nowrap">{item.name}</span>}
          </NavLink>
        ))}

        <div className="my-6 mx-3 h-px bg-border-muted" />

        {/* Tools Section Label */}
        {!isCollapsed && <div className="px-3 mb-2 text-label text-muted/50 font-bold uppercase tracking-widest text-[10px]">Tools & Governance</div>}

        {secondaryNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              nav-item flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
              ${isActive ? 'bg-bg-surface-lighter text-white' : 'text-muted hover:bg-bg-surface-lighter/50 hover:text-white'}
            `}
          >
            <item.icon size={18} className="flex-shrink-0" />
            {!isCollapsed && (
              <div className="flex items-center justify-between w-full">
                <span className="text-body-small whitespace-nowrap">{item.name}</span>
                {item.badge && (isActive ? null : (
                  <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded font-bold">
                    {item.badge}
                  </span>
                ))}
              </div>
            )}
          </NavLink>
        ))}
      </div>

      {/* Footer / Support */}
      <div className="mt-auto p-4 flex flex-col gap-1 border-t border-border-muted bg-bg-deep/50 backdrop-blur-sm">
        {bottomNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted hover:bg-bg-surface-lighter/50 hover:text-white"
          >
            <item.icon size={16} className="flex-shrink-0" />
            {!isCollapsed && <span className="text-body-small font-medium">{item.name}</span>}
          </NavLink>
        ))}
        
        {isCollapsed ? (
          <button 
            onClick={() => setIsCollapsed(false)}
            className="flex items-center justify-center p-2 mt-2 text-primary hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        ) : (
          <div className="flex items-center justify-between mt-4 px-3 py-2 bg-bg-surface/30 rounded-lg border border-border-muted">
            <div className="flex items-center gap-2">
              <Github size={14} className="text-muted" />
              <span className="text-[11px] text-muted">v1.2.4-stable</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
