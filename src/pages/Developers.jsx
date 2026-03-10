import React from 'react';
import { Terminal, Code2, Cpu } from 'lucide-react';

const Developers = () => {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="heading-1 m-0">Developer Activity</h1>
        <p className="text-muted text-sm">On-chain intelligence for smart contract development.</p>
      </div>

      <div className="bg-surface border border-surface-lighter/10 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[500px] text-center shadow-2xl relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full -ml-32 -mb-32" />

        <div className="w-20 h-20 rounded-2xl bg-deep border border-surface-lighter/10 flex items-center justify-center mb-8 text-primary shadow-inner">
          <Terminal size={40} />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Contract Intelligence Pending</h2>
        <p className="text-muted-lighter text-base max-w-md leading-relaxed mx-auto">
          We're currently indexing the latest contract deployments and function calls. This view will feature 
          <span className="text-white font-medium"> active deployers</span>, 
          <span className="text-white font-medium"> gas optimization trends</span>, and 
          <span className="text-white font-medium"> contract call hierarchies</span>.
        </p>

        <div className="flex items-center gap-6 mt-10">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-surface-lighter/5 rounded-xl border border-surface-lighter/10">
              <Code2 size={20} className="text-muted" />
            </div>
            <span className="text-[10px] uppercase font-bold text-muted tracking-widest">Deployments</span>
          </div>
          <div className="w-12 h-[1px] bg-surface-lighter/10" />
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-surface-lighter/5 rounded-xl border border-surface-lighter/10">
              <Cpu size={20} className="text-muted" />
            </div>
            <span className="text-[10px] uppercase font-bold text-muted tracking-widest">Compiler Stats</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
