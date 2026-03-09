import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'

// Pages
import Overview from './pages/Overview'
import SbtcDeepDive from './pages/SbtcDeepDive'
import Developers from './pages/Developers'
import DefiHealth from './pages/DefiHealth'
import NetworkActivity from './pages/NetworkActivity'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/sbtc" element={<SbtcDeepDive />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/defi" element={<DefiHealth />} />
          <Route path="/network" element={<NetworkActivity />} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center p-12 text-center h-[50vh]">
              <h2 className="heading-1 text-charcoal mb-4">Page Not Found</h2>
              <p className="text-body text-muted">The requested view does not exist yet.</p>
            </div>
          } />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
