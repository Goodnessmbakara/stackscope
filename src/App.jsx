import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'

// Pages
import Landing from './pages/Landing'
import Overview from './pages/Overview'
import SbtcDeepDive from './pages/SbtcDeepDive'
import Developers from './pages/Developers'
import DefiHealth from './pages/DefiHealth'
import NetworkActivity from './pages/NetworkActivity'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<Landing />} />
        
        {/* Dashboard Pages with Sidebar/TopBar Layout */}
        <Route path="/overview" element={<AppLayout><Overview /></AppLayout>} />
        <Route path="/sbtc" element={<AppLayout><SbtcDeepDive /></AppLayout>} />
        <Route path="/developers" element={<AppLayout><Developers /></AppLayout>} />
        <Route path="/defi" element={<AppLayout><DefiHealth /></AppLayout>} />
        <Route path="/network" element={<AppLayout><NetworkActivity /></AppLayout>} />
        
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center p-12 text-center h-[100vh]">
            <h2 className="heading-1 text-charcoal mb-4">Page Not Found</h2>
            <p className="text-body text-muted">The requested view does not exist yet.</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
