import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const AppLayout = () => {
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
    <div className="app-layout min-h-screen flex" style={{ backgroundColor: 'var(--light-gray)' }}>
      {/* Desktop/Tablet Sidebar */}
      {!isMobile && (
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      )}
      
      {/* Mobile Drawer Sidebar */}
      {isMobile && mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex" style={{ zIndex: 100 }}>
          <div 
            className="fixed inset-0 bg-black/50" 
            style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top:0, left:0, right:0, bottom:0 }}
            onClick={() => setMobileSidebarOpen(false)} 
          />
          <div className="relative z-10 w-64 bg-midnight-navy" style={{ position: 'relative' }}>
             <Sidebar isCollapsed={false} setIsCollapsed={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div 
        className="main-area flex-1 flex flex-col transition-all duration-300"
        style={{ 
          marginLeft: isMobile ? '0' : (isCollapsed ? '56px' : '220px'),
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <TopBar isMobile={isMobile} toggleSidebar={() => setMobileSidebarOpen(true)} />
        
        <main 
          className="content-scroll flex-1 overflow-x-hidden"
          style={{ padding: 'var(--space-6) var(--space-3)' }}
        >
          <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Mobile Bottom Tab Bar (mock implementation per PRD, for visibility below 768px. Real nav handles routing) */}
      {isMobile && (
        <div 
          className="bottom-tab-bar fixed bottom-0 left-0 w-full flex justify-around items-center bg-white border-t border-border z-40"
          style={{ height: '56px', borderTop: '1px solid var(--border)', backgroundColor: 'var(--white)' }}
        >
           {/* Usually map over primary nav here for mobile icons */}
           <div className="text-teal pb-safe">Tabs Go Here</div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
