import React from 'react';
import { ShieldCheck, Activity, BarChart3 } from 'lucide-react';

const DefiHealth = () => {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="heading-1 m-0">DeFi Protocol Health</h1>
        <p className="text-muted text-sm">Real-time risk monitoring and capital efficiency metrics.</p>
      </div>

      <div className="bg-surface border border-surface-lighter/10 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[500px] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-success/5 blur-[100px] rounded-full -mr-32 -mt-32" />
        
        <div className="w-20 h-20 rounded-2xl bg-deep border border-surface-lighter/10 flex items-center justify-center mb-8 text-success shadow-inner">
          <ShieldCheck size={40} />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Risk Indexing in Progress</h2>
        <p className="text-muted-lighter text-base max-w-md leading-relaxed mx-auto">
          We are consolidating cross-protocol data for sBTC and STX pools. Soon you will be able to monitor 
          <span className="text-success font-medium"> liquidation thresholds</span>, 
          <span className="text-success font-medium"> utilization rates</span>, and 
          <span className="text-success font-medium"> peg stability</span> in real-time.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-12 w-full max-w-sm">
          <div className="bg-deep/50 p-4 rounded-xl border border-surface-lighter/5 flex items-center gap-3">
            <Activity size={18} className="text-muted" />
            <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-success/20 animate-pulse" />
            </div>
          </div>
          <div className="bg-deep/50 p-4 rounded-xl border border-surface-lighter/5 flex items-center gap-3">
            <BarChart3 size={18} className="text-muted" />
            <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-success/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefiHealth;
