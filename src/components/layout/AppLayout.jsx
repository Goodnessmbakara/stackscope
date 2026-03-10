import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const AppLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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
    <div className="app-layout min-h-screen flex bg-bg-deep text-text-primary">
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
        <TopBar isMobile={isMobile} toggleSidebar={() => setMobileSidebarOpen(true)} />
        
        <main className="content-scroll flex-1 overflow-x-hidden p-6 md:p-8">
          <div className="container mx-auto max-w-[1440px]">
            {children || <Outlet />}
          </div>
        </main>
      </div>
      
      {/* Mobile Bottom Tab Bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-center bg-bg-surface border-t border-border-muted z-40 px-4 pb-safe">
           <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Analytics</div>
           <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Search</div>
           <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Docs</div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
