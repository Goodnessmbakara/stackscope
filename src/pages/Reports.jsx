import React from 'react';
import { FileText, Calendar, Download, TrendingUp, PieChart, BarChart3 } from 'lucide-react';

const Reports = () => {
  const upcomingReports = [
    {
      title: 'Q1 2026 Ecosystem State Report',
      description: 'Comprehensive analysis of TVL growth, developer activity, and sBTC adoption trends',
      date: 'March 31, 2026',
      icon: TrendingUp,
      color: 'primary',
    },
    {
      title: 'sBTC First 90 Days Analysis',
      description: 'Deep dive into sBTC peg health, signer performance, and DeFi integration metrics',
      date: 'April 15, 2026',
      icon: PieChart,
      color: 'secondary',
    },
    {
      title: 'DeFi Protocol Comparison',
      description: 'Side-by-side benchmarking of ALEX, Arkadiko, Zest, Bitflow, and StackingDAO',
      date: 'April 30, 2026',
      icon: BarChart3,
      color: 'success',
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-8 pb-4 md:pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter m-0 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent leading-tight">
          Ecosystem Reports
        </h1>
        <p className="text-xs md:text-sm text-muted leading-relaxed">
          In-depth research reports on Stacks ecosystem health, protocol performance, and growth metrics.
        </p>
      </div>

      <div className="bg-bg-surface border border-border-muted rounded-xl md:rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cta/5 blur-[120px] rounded-full -ml-48 -mt-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mb-48" />

        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg-deep border border-border-muted flex items-center justify-center mb-6 md:mb-8 text-cta shadow-inner relative z-10">
          <FileText size={32} className="md:w-10 md:h-10" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight relative z-10">
          Research Reports Publishing Soon
        </h2>
        <p className="text-sm md:text-base text-muted leading-relaxed mx-auto max-w-md relative z-10">
          We are preparing comprehensive quarterly reports on ecosystem growth, protocol health, and developer activity. All reports will be
          <span className="text-white font-semibold"> free to download</span> and feature
          <span className="text-primary font-semibold"> data-backed analysis</span> from on-chain metrics.
        </p>

        <div className="flex items-center gap-2 mt-6 text-muted text-[10px] font-bold uppercase tracking-widest relative z-10">
          <div className="w-2 h-2 rounded-full bg-cta animate-pulse" />
          <span>First Report: Q1 2026</span>
        </div>
      </div>

      {/* Upcoming Reports Grid */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-cta rounded-full"></div>
          <h2 className="text-xl font-bold text-white m-0 tracking-tight">Upcoming Reports</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingReports.map((report, idx) => {
            const IconComponent = report.icon;
            const colorClass = {
              primary: 'text-primary border-primary/20 bg-primary/5',
              secondary: 'text-secondary border-secondary/20 bg-secondary/5',
              success: 'text-success border-success/20 bg-success/5',
              cta: 'text-cta border-cta/20 bg-cta/5',
            }[report.color];

            return (
              <div
                key={idx}
                className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-6 hover:border-border-bright transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full -mr-16 -mt-16 opacity-30 ${colorClass}`} />

                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${colorClass} relative z-10`}>
                  <IconComponent size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors relative z-10">
                  {report.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 relative z-10">
                  {report.description}
                </p>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2 text-muted text-xs">
                    <Calendar size={14} />
                    <span>{report.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={14} />
                    <span>Notify Me</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Report Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="bg-bg-surface/40 backdrop-blur-sm border border-border-muted rounded-lg p-5 text-center">
          <FileText size={20} className="text-primary mx-auto mb-3" />
          <p className="text-[11px] uppercase tracking-wider text-muted font-bold mb-1">Format</p>
          <p className="text-sm font-bold text-white">PDF + Interactive</p>
        </div>

        <div className="bg-bg-surface/40 backdrop-blur-sm border border-border-muted rounded-lg p-5 text-center">
          <Calendar size={20} className="text-secondary mx-auto mb-3" />
          <p className="text-[11px] uppercase tracking-wider text-muted font-bold mb-1">Frequency</p>
          <p className="text-sm font-bold text-white">Quarterly</p>
        </div>

        <div className="bg-bg-surface/40 backdrop-blur-sm border border-border-muted rounded-lg p-5 text-center">
          <Download size={20} className="text-success mx-auto mb-3" />
          <p className="text-[11px] uppercase tracking-wider text-muted font-bold mb-1">Access</p>
          <p className="text-sm font-bold text-white">Free Download</p>
        </div>

        <div className="bg-bg-surface/40 backdrop-blur-sm border border-border-muted rounded-lg p-5 text-center">
          <TrendingUp size={20} className="text-cta mx-auto mb-3" />
          <p className="text-[11px] uppercase tracking-wider text-muted font-bold mb-1">Data Source</p>
          <p className="text-sm font-bold text-white">On-Chain Verified</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
