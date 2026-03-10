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
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isMobile={isMobile} />
      )}
      
      {/* Mobile Drawer Sidebar */}
      {isMobile && mobileSidebarOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setMobileSidebarOpen(false)} 
          />
          <div className="relative z-10 w-64 animate-slide-in-left">
             <Sidebar isCollapsed={false} setIsCollapsed={() => setMobileSidebarOpen(false)} isMobile={true} />
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
            {children || <Outlet context={{ timeFilter }} />}
          </div>
        </main>
      </div>
      
      {/* Mobile Bottom Navigation Bar */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-bg-surface/90 backdrop-blur-2xl border-t border-border-muted z-50 safe-area-inset-bottom">
          <div className="flex items-center justify-around h-full px-2 max-w-md mx-auto">
            <a href="/overview" className="flex flex-col items-center justify-center gap-1 flex-1 py-1 px-3 rounded-xl transition-all active:scale-95 active:bg-white/5">
              <LayoutDashboard size={20} className="text-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Overview</span>
            </a>
            <a href="/sbtc" className="flex flex-col items-center justify-center gap-1 flex-1 py-1 px-3 rounded-xl transition-all active:scale-95 active:bg-white/5">
              <Coins size={20} className="text-muted" />
              <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">sBTC</span>
            </a>
            <button 
              onClick={() => setMobileSidebarOpen(true)} 
              className="flex flex-col items-center justify-center gap-1 flex-1 py-1 px-3 rounded-xl transition-all active:scale-95 active:bg-white/5"
            >
              <div className="relative">
                <div className="w-5 h-5 flex flex-col justify-center gap-[3px]">
                   <span className="w-full h-0.5 bg-muted rounded-full" />
                   <span className="w-full h-0.5 bg-muted rounded-full" />
                   <span className="w-full h-0.5 bg-muted rounded-full" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Menu</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default AppLayout;
