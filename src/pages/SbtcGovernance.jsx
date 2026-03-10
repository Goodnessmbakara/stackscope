import React from 'react';
import { Shield, Users, CheckCircle2, AlertTriangle } from 'lucide-react';

const SbtcGovernance = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 pb-4 md:pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="text-[10px] md:text-[11px] font-bold text-success uppercase tracking-[0.15em]">sBTC Network Active</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter m-0 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent leading-tight">
          sBTC Governance Dashboard
        </h1>
        <p className="text-xs md:text-sm text-muted leading-relaxed">
          Monitor the decentralized sBTC signer network, peg health, and governance activity in real-time.
        </p>
      </div>

      <div className="bg-bg-surface border border-border-muted rounded-xl md:rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -ml-32 -mb-32" />

        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg-deep border border-border-muted flex items-center justify-center mb-6 md:mb-8 text-secondary shadow-inner relative z-10">
          <Shield size={32} className="md:w-10 md:h-10" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight relative z-10">Signer Network Dashboard Coming Soon</h2>
        <p className="text-sm md:text-base text-muted leading-relaxed mx-auto max-w-md relative z-10">
          We are building comprehensive monitoring for the sBTC decentralized signer set. Track
          <span className="text-secondary font-semibold"> active signers</span>,
          <span className="text-white font-semibold"> peg health metrics</span>, and
          <span className="text-success font-semibold"> governance proposals</span> in one unified dashboard.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 md:mt-12 w-full max-w-2xl relative z-10">
          <div className="bg-bg-deep/50 backdrop-blur-sm p-5 rounded-xl border border-border-muted hover:border-border-bright transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-3">
              <Users size={20} className="text-primary" />
              <CheckCircle2 size={16} className="text-success opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] uppercase tracking-wider text-muted mb-1 font-bold">Active Signers</p>
            <p className="text-2xl font-bold text-white font-mono">84<span className="text-sm text-muted">/100</span></p>
          </div>

          <div className="bg-bg-deep/50 backdrop-blur-sm p-5 rounded-xl border border-border-muted hover:border-border-bright transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-3">
              <Shield size={20} className="text-secondary" />
              <CheckCircle2 size={16} className="text-success opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] uppercase tracking-wider text-muted mb-1 font-bold">Peg Health</p>
            <p className="text-2xl font-bold text-white font-mono">0.9998</p>
          </div>

          <div className="bg-bg-deep/50 backdrop-blur-sm p-5 rounded-xl border border-border-muted hover:border-border-bright transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-3">
              <AlertTriangle size={20} className="text-cta" />
              <CheckCircle2 size={16} className="text-success opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] uppercase tracking-wider text-muted mb-1 font-bold">Alerts (24h)</p>
            <p className="text-2xl font-bold text-white font-mono">0</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-8 md:mt-10 text-muted text-[10px] font-bold uppercase tracking-widest relative z-10">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>Real-time Signer Monitoring</span>
        </div>
      </div>
    </div>
  );
};

export default SbtcGovernance;
