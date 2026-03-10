import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Activity, ArrowRight, ShieldCheck, BarChart3, Globe, Zap, Terminal } from 'lucide-react';
import heroAsset from '../assets/hero_abstract.png';
import chartAsset from '../assets/chart_growth.png';
import securityAsset from '../assets/bento_security.png';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page bg-bg-deep min-h-screen text-white selection:bg-primary selection:text-deep overflow-x-hidden relative">
      <div className="fixed inset-0 bg-cryptic-grid pointer-events-none z-0" />
      <div className="fixed inset-0 chain-overlay pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-deep/20 to-bg-deep pointer-events-none z-0" />
      
      {/* Navigation - Glassmorphic Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-white">Stack<span className="text-primary">Scope</span></span>
          </div>
          
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-2 gap-8 nav-links backdrop-blur-md transition-all hover:border-white/20">
            <a href="#" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Features</a>
            <div className="w-[1px] h-3 bg-white/10" />
            <a href="#" className="text-[13px] font-medium text-muted hover:text-white transition-colors">API</a>
            <div className="w-[1px] h-3 bg-white/10" />
            <a href="#" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Network</a>
          </div>

          <button 
            onClick={() => navigate('/overview')}
            className="group flex items-center gap-2 btn-primary px-5 py-2.5 text-sm"
          >
            Launch Dashboard
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-square bg-primary/10 rounded-full blur-[120px] -z-10 translate-y-[-50%]" />
        
        <div className="max-w-5xl mx-auto text-center animate-fade-in flex flex-col items-center">
          
          <h1 className="heading-display mb-10 leading-[1.05]">
            The Intelligence Layer <br className="hidden md:block" /> for Bitcoin DeFi
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-16 max-w-3xl mx-auto">
            Experience real-time on-chain analytics, TVL flows, and sBTC insights. <br className="hidden lg:block" /> Radically transparent data for the next generation of finance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="w-full sm:w-auto btn-primary group"
              onClick={() => navigate('/overview')}
            >
              Start Exploring
              <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="w-full sm:w-auto glass-button"
              onClick={() => window.open('https://docs.stacksendowment.co', '_blank')}
            >
              Read Docs
            </button>
          </div>
        </div>

      </section>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="heading-2 mb-4">Institutional-grade analytics.</h2>
          <p className="text-xl text-muted">A comprehensive view of the Stacks economic engine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Card */}
          <div className="md:col-span-2 chart-card relative group flex flex-col justify-between overflow-hidden min-h-[460px] p-8">
            <div className="z-10">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Protocol Performance</h3>
              <p className="text-muted text-lg max-w-md">Real-time TVL, Yield Metrics, and Active User comparisons across leading Stacks protocols.</p>
            </div>
            <img src={chartAsset} alt="Charts" className="absolute right-0 bottom-0 w-3/4 opacity-40 group-hover:scale-105 transition-transform duration-700" />
          </div>

          <div className="chart-card p-8 flex flex-col justify-between relative group overflow-hidden">
            <div className="z-10">
              <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center text-success mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">sBTC Health</h3>
              <p className="text-muted">Monitor signer set decentralization and peg stability with cryptographic confidence.</p>
            </div>
            <img src={securityAsset} alt="Security" className="absolute -right-8 -bottom-8 w-2/3 opacity-30 group-hover:rotate-12 transition-transform duration-500" />
          </div>

          <div className="chart-card p-8 flex flex-col items-center justify-center text-center group hover:bg-surface-lighter/20 transition-colors">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative w-20 h-20 bg-deep rounded-full border border-primary/30 flex items-center justify-center text-primary">
                <Globe size={40} className="group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Network Pulse</h3>
            <p className="text-muted text-sm">Every block, transaction, and contract deploy visualized in real-time.</p>
          </div>

          <div className="md:col-span-2 chart-card p-0 flex flex-col md:flex-row overflow-hidden group">
            <div className="flex-1 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-widest">
                  <Terminal size={14} />
                  Developer First
                </div>
                <h3 className="text-2xl font-bold mb-4">Open Data API</h3>
                <p className="text-muted mb-6">High-throughput REST and WebSocket feeds for your proprietary models and apps.</p>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Explore Documentation <ChevronRight size={16} />
              </button>
            </div>
            <div className="flex-1 bg-deep/50 p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="text-success-text mb-2 animate-pulse">GET /api/v1/sbtc/metrics</div>
              <pre className="text-muted-lighter/80 leading-relaxed">
{`{
  "total_supply": "1.2k BTC",
  "peg_health": 0.9998,
  "nodes": 84,
  "status": "stable"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative max-w-7xl mx-auto px-6 py-32 text-center border-t border-white/5">
        <h2 className="text-5xl font-extrabold mb-12 text-white">Building the future <br/> of Bitcoin.</h2>
        <button 
          onClick={() => navigate('/overview')}
          className="btn-primary text-xl px-12 py-5 shadow-2xl shadow-primary/40"
        >
          Open App
        </button>
        
        <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5 text-muted text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">StackScope</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter (X)</a>
            <div className="flex items-center gap-2 text-primary">
              <Activity size={14} /> GitHub
            </div>
          </div>
          <p>© 2026 StackScope Research.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
