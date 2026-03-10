import React from 'react';
import { Coins, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const SbtcDeepDive = () => {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="heading-1 m-0">sBTC Intelligence</h1>
        <p className="text-muted text-sm">Deep analysis of the decentralized Bitcoin peg on Stacks.</p>
      </div>

      <div className="bg-surface border border-surface-lighter/10 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[500px] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -ml-32 -mb-32" />

        <div className="w-20 h-20 rounded-2xl bg-deep border border-surface-lighter/10 flex items-center justify-center mb-8 text-orange-500 shadow-inner">
          <Coins size={40} />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">sBTC Data Pipeline Initializing</h2>
        <p className="text-muted-lighter text-base max-w-md leading-relaxed mx-auto">
          We are integrating with the latest sBTC signers to provide real-time visibility into 
          <span className="text-orange-400 font-medium"> mint/redeem velocity</span>, 
          <span className="text-orange-400 font-medium"> signer distribution</span>, and 
          <span className="text-orange-400 font-medium"> collateralization health</span>.
        </p>

        <div className="flex gap-4 mt-12 bg-deep/50 p-6 rounded-2xl border border-surface-lighter/10 w-full max-w-md">
          <div className="flex-1 flex flex-col items-center gap-2">
            <Zap size={20} className="text-muted" />
            <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-orange-500/30 animate-pulse" />
            </div>
            <span className="text-[9px] uppercase font-bold text-muted tracking-widest mt-1">Live Peg</span>
          </div>
          <div className="w-[1px] h-12 bg-surface-lighter/10" />
          <div className="flex-1 flex flex-col items-center gap-2">
            <ShieldCheck size={20} className="text-muted" />
            <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
              <div className="w-3/5 h-full bg-orange-500/20 animate-pulse" />
            </div>
            <span className="text-[9px] uppercase font-bold text-muted tracking-widest mt-1">Signer Health</span>
          </div>
        </div>

        <button className="mt-10 flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-white transition-colors group">
          View sBTC Whitepaper
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default SbtcDeepDive;
