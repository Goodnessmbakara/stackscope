import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { useTimeFilter } from '../../context/TimeFilterContext';

const AppLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { timeFilter, setTimeFilter } = useTimeFilter();

  // Responsive listener
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-layout min-h-screen flex text-text-primary bg-bg-deep relative">
      
      {/* Desktop/Tablet Sidebar */}
      {!isMobile && (
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      )}
      
      {/* Mobile Drawer Sidebar */}
      {isMobile && mobileSidebarOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setMobileSidebarOpen(false)} 
          />
          <div className="relative z-10 w-64">
             <Sidebar isCollapsed={false} setIsCollapsed={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div 
        className="main-area flex-1 flex flex-col transition-all duration-300"
        style={{ 
          marginLeft: isMobile ? '0' : (isCollapsed ? '64px' : '240px'),
        }}
      >
        <TopBar isMobile={isMobile} toggleSidebar={() => setMobileSidebarOpen(true)} timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
        
        <main className={`content-scroll flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8 ${isMobile ? 'pb-20' : ''}`}>
          <div className="container mx-auto max-w-[1440px]">
            {children || <Outlet context={{ timeFilter: globalTimeFilter }} />}
          </div>
        </main>
      </div>
      
      {/* Mobile Bottom Navigation Bar */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-bg-surface/95 backdrop-blur-xl border-t border-border-muted z-50 safe-area-inset-bottom">
          <div className="flex items-center justify-around h-full px-2">
            <a href="/" className="flex flex-col items-center justify-center gap-1 flex-1 py-2 px-3 rounded-lg transition-colors active:bg-white/5 min-w-[60px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Overview</span>
            </a>
            <a href="/sbtc" className="flex flex-col items-center justify-center gap-1 flex-1 py-2 px-3 rounded-lg transition-colors active:bg-white/5 min-w-[60px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                <circle cx="12" cy="12" r="8"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider">sBTC</span>
            </a>
            <button onClick={toggleSidebar} className="flex flex-col items-center justify-center gap-1 flex-1 py-2 px-3 rounded-lg transition-colors active:bg-white/5 min-w-[60px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Menu</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default AppLayout;
