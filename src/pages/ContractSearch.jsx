import React, { useState } from 'react';
import { Search, Code2, FileCode, TrendingUp, Activity } from 'lucide-react';

const ContractSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col gap-4 md:gap-8 pb-4 md:pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter m-0 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent leading-tight">
          Contract Explorer
        </h1>
        <p className="text-xs md:text-sm text-muted leading-relaxed">
          Search and analyze any deployed Clarity smart contract on Stacks mainnet.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative group">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter contract address (e.g., SP000000000000000000002Q6VF78.pox-3)"
          className="w-full text-sm md:text-base bg-bg-surface text-white placeholder:text-muted/50 border-2 border-border-muted focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-14 pr-6 py-4 md:py-5 rounded-xl font-mono"
        />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 px-2 py-1 rounded border border-border-muted bg-bg-deep/50 text-[10px] text-muted font-bold tracking-wider">
          ⌘ K
        </div>
      </div>

      <div className="bg-bg-surface border border-border-muted rounded-xl md:rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[500px] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48" />

        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg-deep border border-border-muted flex items-center justify-center mb-6 md:mb-8 text-primary shadow-inner relative z-10">
          <Code2 size={32} className="md:w-10 md:h-10" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight relative z-10">
          Advanced Contract Analytics In Development
        </h2>
        <p className="text-sm md:text-base text-muted leading-relaxed mx-auto max-w-md relative z-10">
          We are building deep contract analysis tools. Soon you will be able to explore
          <span className="text-primary font-semibold"> function call history</span>,
          <span className="text-white font-semibold"> transaction patterns</span>,
          <span className="text-success font-semibold"> active user metrics</span>, and
          <span className="text-secondary font-semibold"> sBTC flow tracking</span> for any contract.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-12 w-full max-w-lg relative z-10">
          <div className="bg-bg-deep/50 backdrop-blur-sm p-5 rounded-xl border border-border-muted hover:border-primary/50 transition-all group cursor-pointer">
            <FileCode size={20} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-[11px] uppercase tracking-wider text-muted mb-2 font-bold text-left">
              Function Analysis
            </p>
            <p className="text-xs text-muted leading-relaxed text-left">
              Call frequency, gas usage, and success rates per function
            </p>
          </div>

          <div className="bg-bg-deep/50 backdrop-blur-sm p-5 rounded-xl border border-border-muted hover:border-secondary/50 transition-all group cursor-pointer">
            <TrendingUp size={20} className="text-secondary mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-[11px] uppercase tracking-wider text-muted mb-2 font-bold text-left">
              Usage Trends
            </p>
            <p className="text-xs text-muted leading-relaxed text-left">
              Historical transaction volume and active caller analysis
            </p>
          </div>

          <div className="bg-bg-deep/50 backdrop-blur-sm p-5 rounded-xl border border-border-muted hover:border-success/50 transition-all group cursor-pointer">
            <Activity size={20} className="text-success mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-[11px] uppercase tracking-wider text-muted mb-2 font-bold text-left">
              Live Monitoring
            </p>
            <p className="text-xs text-muted leading-relaxed text-left">
              Real-time alerts for contract interactions and state changes
            </p>
          </div>

          <div className="bg-bg-deep/50 backdrop-blur-sm p-5 rounded-xl border border-border-muted hover:border-cta/50 transition-all group cursor-pointer">
            <Search size={20} className="text-cta mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-[11px] uppercase tracking-wider text-muted mb-2 font-bold text-left">
              Source Verification
            </p>
            <p className="text-xs text-muted leading-relaxed text-left">
              Verified source code display with syntax highlighting
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-8 md:mt-10 text-muted text-[10px] font-bold uppercase tracking-widest relative z-10">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Contract Indexer Syncing</span>
        </div>
      </div>
    </div>
  );
};

export default ContractSearch;
