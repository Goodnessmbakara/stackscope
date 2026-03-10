import React from 'react';
import { Share2, Zap, Database } from 'lucide-react';

const NetworkActivity = () => {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="heading-1 m-0">Network Activity</h1>
        <p className="text-muted text-sm">Real-time Stacks L2 throughput and consensus performance.</p>
      </div>

      <div className="bg-surface border border-surface-lighter/10 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[500px] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -ml-32 -mt-32" />
        
        <div className="w-20 h-20 rounded-2xl bg-deep border border-surface-lighter/10 flex items-center justify-center mb-8 text-primary shadow-inner">
          <Share2 size={40} />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Network Indexer Syncing</h2>
        <p className="text-muted-lighter text-base max-w-md leading-relaxed mx-auto">
          We are currently aggregating Nakamoto-era block data. Detailed metrics on 
          <span className="text-white font-medium"> block latency</span>, 
          <span className="text-white font-medium"> fee distributions</span>, and 
          <span className="text-white font-medium"> PoX cycle throughput</span> will be available shortly.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12 overflow-hidden w-full max-w-lg">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="w-12 h-12 rounded-lg bg-surface border border-surface-lighter/10 flex items-center justify-center shrink-0 animate-pulse" style={{ animationDelay: `${i * 150}ms` }}>
              <Zap size={16} className="text-muted/30" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-6 text-muted text-[10px] font-bold uppercase tracking-widest">
          <Database size={12} />
          <span>Synchronizing with Stacks Node</span>
        </div>
      </div>
    </div>
  );
};

export default NetworkActivity;
