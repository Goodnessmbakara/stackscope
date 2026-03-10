import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'

// Pages
import Landing from './pages/Landing'
import Overview from './pages/Overview'
import SbtcDeepDive from './pages/SbtcDeepDive'
import SbtcGovernance from './pages/SbtcGovernance'
import Developers from './pages/Developers'
import DefiHealth from './pages/DefiHealth'
import NetworkActivity from './pages/NetworkActivity'
import ContractSearch from './pages/ContractSearch'
import WalletSearch from './pages/WalletSearch'
import ApiDocs from './pages/ApiDocs'
import Reports from './pages/Reports'
import Docs from './pages/Docs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<Landing />} />
        
        {/* Dashboard Pages with Sidebar/TopBar Layout */}
        <Route path="/overview" element={<AppLayout><Overview /></AppLayout>} />
        <Route path="/sbtc" element={<AppLayout><SbtcDeepDive /></AppLayout>} />
        <Route path="/sbtc/governance" element={<AppLayout><SbtcGovernance /></AppLayout>} />
        <Route path="/developers" element={<AppLayout><Developers /></AppLayout>} />
        <Route path="/defi" element={<AppLayout><DefiHealth /></AppLayout>} />
        <Route path="/network" element={<AppLayout><NetworkActivity /></AppLayout>} />
        <Route path="/search/contract" element={<AppLayout><ContractSearch /></AppLayout>} />
        <Route path="/search/wallet" element={<AppLayout><WalletSearch /></AppLayout>} />
        <Route path="/api" element={<AppLayout><ApiDocs /></AppLayout>} />
        <Route path="/reports" element={<AppLayout><Reports /></AppLayout>} />
        <Route path="/docs" element={<Docs />} />
        
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
