import React, { useState } from 'react';
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
  ChevronRight
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
    { name: 'sBTC Governance', path: '/sbtc/governance', icon: Landmark, badge: 'New' },
    { name: 'Contract Search', path: '/search/contract', icon: Search },
    { name: 'Wallet Search', path: '/search/wallet', icon: Wallet },
  ];

  const bottomNav = [
    { name: 'API Docs', path: '/api', icon: BookOpen },
    { name: 'Embed Generator', path: '/embed', icon: Code2 },
  ];

  return (
    <aside 
      className={`sidebar flex flex-col h-screen fixed left-0 top-0 transition-all duration-300 z-50`}
      style={{ 
        width: isCollapsed ? '56px' : '220px',
        backgroundColor: 'var(--midnight-navy)',
        color: 'var(--white)',
        borderRight: '1px solid var(--border)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4" style={{ height: '64px' }}>
        <div className="flex items-center gap-3 overflow-hidden">
          <div style={{ width: '24px', height: '24px', flexShrink: 0, backgroundColor: 'var(--teal)', borderRadius: '4px' }} />
          {!isCollapsed && <span className="heading-3 font-semibold text-white whitespace-nowrap">StackScope</span>}
        </div>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-muted hover:text-white transition-colors p-1 rounded-md"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Primary Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-1 custom-scrollbar">
        {primaryNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              nav-item flex items-center gap-3 px-3 py-2 rounded-md transition-colors group
              ${isActive ? 'bg-teal-500 text-white' : 'text-muted hover:bg-teal-bg hover:text-teal'}
            `}
            style={(isActive) => ({
              backgroundColor: isActive?.isActive ? 'var(--teal)' : 'transparent',
              color: isActive?.isActive ? 'var(--white)' : 'var(--muted)',
              textDecoration: 'none'
            })}
          >
            <item.icon size={20} className="flex-shrink-0" />
            {!isCollapsed && <span className="text-body font-medium whitespace-nowrap">{item.name}</span>}
          </NavLink>
        ))}

        <div className="my-4 h-px w-full" style={{ backgroundColor: '#1E3A5F' }} />

        {/* Secondary Nav */}
        {secondaryNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              nav-item flex items-center gap-3 px-3 py-2 rounded-md transition-colors group
              ${isActive ? 'bg-teal-500 text-white' : 'text-muted hover:bg-teal-bg hover:text-teal'}
            `}
            style={{ textDecoration: 'none', color: 'var(--muted)' }}
          >
            <item.icon size={16} className="flex-shrink-0" />
            {!isCollapsed && (
              <div className="flex items-center justify-between w-full">
                <span className="text-body-small whitespace-nowrap">{item.name}</span>
                {item.badge && (
                  <span className="text-caption bg-teal-bg text-teal-dark px-2 rounded-full py-0.5">
                    {item.badge}
                  </span>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Nav */}
      <div className="mt-auto px-2 py-4 flex flex-col gap-1 border-t" style={{ borderColor: '#1E3A5F' }}>
        {bottomNav.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-muted hover:bg-teal-bg hover:text-teal"
            style={{ textDecoration: 'none' }}
          >
            <item.icon size={16} className="flex-shrink-0" />
            {!isCollapsed && <span className="text-body-small whitespace-nowrap">{item.name}</span>}
          </NavLink>
        ))}
        
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2 mt-2 rounded-md transition-colors text-muted hover:text-white"
          style={{ textDecoration: 'none' }}
        >
          <Github size={16} className="flex-shrink-0" />
          {!isCollapsed && <span className="text-body-small whitespace-nowrap">Open Source</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
