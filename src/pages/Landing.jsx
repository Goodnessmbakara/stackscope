import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronRight, Activity, ArrowRight, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import heroAsset from '../assets/hero_abstract.png';
import chartAsset from '../assets/chart_growth.png';
import securityAsset from '../assets/bento_security.png';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden selection:bg-teal selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center shadow-[0_0_15px_rgba(14,124,155,0.4)]">
            <Activity size={18} color="white" />
          </div>
          <span className="font-semibold text-xl tracking-tight">StackScope</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">API</a>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
        </div>
        <button 
          onClick={() => navigate('/overview')}
          className="bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          Launch App <ChevronRight size={16} />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          Live on Stacks Mainnet
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          The Nervous System <br className="hidden md:block"/> for Bitcoin DeFi
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light">
          Real-time on-chain analytics, TVL tracking, and sBTC flows for the Stacks ecosystem. Open source and radically transparent.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={() => navigate('/overview')}
            className="bg-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-light transition-colors shadow-[0_0_30px_rgba(14,124,155,0.3)] flex items-center gap-2"
          >
            Explore Dashboard <ArrowRight size={20} />
          </button>
          <button className="bg-white/5 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 border border-white/10 transition-colors">
            Read the Docs
          </button>
        </div>

        {/* Hero 3D Asset Floating */}
        <div className="relative w-full max-w-5xl mt-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal rounded-full blur-[120px] opacity-10 pointer-events-none" />
          <img 
            src={heroAsset} 
            alt="StackScope Core Engine" 
            className="w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </main>

      {/* Bento Grid Features Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Analytics that power <br/> the leading protocols.</h2>
          <p className="text-xl text-gray-400">Everything you need to navigate the Stacks economy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Large Feature Card */}
          <div className="md:col-span-2 relative bg-[#111111] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 p-10 flex flex-col h-full justify-between">
              <div className="max-w-md">
                <BarChart3 size={32} className="text-teal mb-4" />
                <h3 className="text-3xl font-bold mb-2">Protocol Growth Tracking</h3>
                <p className="text-gray-400 text-lg">Compare TVL, yields, and active users across ALEX, Zest, Arkadiko, and more in real time.</p>
              </div>
            </div>
            <img 
              src={chartAsset} 
              alt="Growth Chart" 
              className="absolute bottom-0 right-0 w-[60%] object-contain translate-y-12 translate-x-12 group-hover:translate-x-8 group-hover:-translate-y-4 transition-transform duration-700"
            />
          </div>

          {/* Small Feature Card 1 */}
          <div className="relative bg-[#111111] rounded-3xl border border-white/10 overflow-hidden group">
            <div className="p-8 flex flex-col h-full justify-between z-10 relative">
              <div>
                <ShieldCheck size={32} className="text-white mb-4" />
                <h3 className="text-2xl font-bold mb-2">sBTC Peg Health</h3>
                <p className="text-gray-400">Monitor decentralised signers and peg deviation with cryptographic certainty.</p>
              </div>
            </div>
            <img 
              src={securityAsset} 
              alt="Security Lock" 
              className="absolute bottom-0 right-[-10%] w-[80%] object-contain translate-y-10 group-hover:-translate-y-2 transition-transform duration-700"
            />
          </div>

          {/* Small Feature Card 2 */}
          <div className="relative bg-[#111111] rounded-3xl border border-white/10 overflow-hidden group flex flex-col items-center justify-center p-8 text-center">
            <Globe size={48} className="text-white mb-6" />
            <h3 className="text-2xl font-bold mb-2">Live Network Map</h3>
            <p className="text-gray-400">Watch the pulse of standard transfers, NFT trades, and contract deploys.</p>
          </div>

          {/* Medium Feature Card */}
          <div className="md:col-span-2 relative bg-[#111111] rounded-3xl border border-white/10 overflow-hidden flex items-center p-10 group">
            <div className="flex-1 z-10">
              <h3 className="text-3xl font-bold mb-4">Open Data API</h3>
              <p className="text-gray-400 text-lg mb-6 max-w-sm">Build your own dashboards or feed algorithmic models with our high-throughput REST API.</p>
              <button className="text-teal font-semibold flex items-center gap-2 hover:text-white transition-colors">
                View Documentation <ChevronRight size={16} />
              </button>
            </div>
            <div className="flex-1 h-full bg-black rounded-xl border border-white/10 p-6 font-mono text-sm text-gray-300 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-blue-500" />
              <pre className="mt-2">
                <code>
{`GET /api/v1/sbtc/supply
{
  "total_supply": 542.8,
  "peg_health": 0.998,
  "active_signers": 67
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-32 px-8 text-center border-t border-white/10 mt-12 bg-gradient-to-b from-[#0A0A0A] to-black">
        <h2 className="text-5xl font-bold tracking-tight mb-8">Stop flying blind.</h2>
        <button 
          onClick={() => navigate('/overview')}
          className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          Open App
        </button>
        <div className="mt-20 text-gray-600 text-sm flex items-center justify-center gap-6">
          <span>© 2026 StackScope</span>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
