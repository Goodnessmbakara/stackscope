import React from 'react';
import { BookOpen, Code, Zap, Lock, Globe } from 'lucide-react';

const ApiDocs = () => {
  const exampleEndpoints = [
    { method: 'GET', path: '/api/v1/ecosystem/overview', description: 'Current ecosystem metrics' },
    { method: 'GET', path: '/api/v1/sbtc/supply?range=30d', description: 'sBTC supply history' },
    { method: 'GET', path: '/api/v1/defi/protocols', description: 'All DeFi protocol data' },
    { method: 'GET', path: '/api/v1/network/activity', description: 'Network transaction metrics' },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-8 pb-4 md:pb-12 w-full animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter m-0 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent leading-tight">
          StackScope API
        </h1>
        <p className="text-xs md:text-sm text-muted leading-relaxed">
          Free, open REST API for Stacks ecosystem data. No authentication required for public endpoints.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={16} className="text-primary" />
            <span className="text-[10px] uppercase tracking-wider text-muted font-bold">Status</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-white font-mono">Live</p>
        </div>

        <div className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-success" />
            <span className="text-[10px] uppercase tracking-wider text-muted font-bold">Latency</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-white font-mono">&lt;100ms</p>
        </div>

        <div className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-2 mb-2">
            <Code size={16} className="text-secondary" />
            <span className="text-[10px] uppercase tracking-wider text-muted font-bold">Endpoints</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-white font-mono">50+</p>
        </div>

        <div className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-2 mb-2">
            <Lock size={16} className="text-cta" />
            <span className="text-[10px] uppercase tracking-wider text-muted font-bold">Rate Limit</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-white font-mono">100/min</p>
        </div>
      </div>

      <div className="bg-bg-surface border border-border-muted rounded-xl md:rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-success/5 blur-[120px] rounded-full -mr-48 -mt-48" />

        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg-deep border border-border-muted flex items-center justify-center mb-6 md:mb-8 text-success shadow-inner relative z-10">
          <BookOpen size={32} className="md:w-10 md:h-10" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight relative z-10">
          Full API Documentation Coming Soon
        </h2>
        <p className="text-sm md:text-base text-muted leading-relaxed mx-auto max-w-md relative z-10 mb-8">
          Comprehensive OpenAPI specification and interactive documentation at
          <span className="text-white font-semibold"> docs.stackscope.xyz</span>. Access all ecosystem metrics via clean REST endpoints with JSON responses.
        </p>

        {/* Example Endpoints Preview */}
        <div className="w-full max-w-2xl space-y-3 relative z-10">
          {exampleEndpoints.map((endpoint, idx) => (
            <div
              key={idx}
              className="bg-bg-deep/50 backdrop-blur-sm border border-border-muted rounded-lg p-4 text-left hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-success/10 text-success border border-success/20 w-fit">
                  {endpoint.method}
                </span>
                <code className="text-xs md:text-sm text-primary font-mono break-all">
                  {endpoint.path}
                </code>
              </div>
              <p className="text-xs text-muted">{endpoint.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-8 md:mt-10 text-muted text-[10px] font-bold uppercase tracking-widest relative z-10">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span>REST API v1.0 Available</span>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-6 hover:border-border-bright transition-all">
          <Code size={24} className="text-primary mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">JSON Responses</h3>
          <p className="text-sm text-muted leading-relaxed">
            Clean, consistent JSON format with proper HTTP status codes and error handling.
          </p>
        </div>

        <div className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-6 hover:border-border-bright transition-all">
          <Zap size={24} className="text-secondary mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Redis Caching</h3>
          <p className="text-sm text-muted leading-relaxed">
            Sub-100ms response times for frequently accessed metrics with smart cache invalidation.
          </p>
        </div>

        <div className="bg-bg-surface/60 backdrop-blur-md border border-border-muted rounded-xl p-6 hover:border-border-bright transition-all">
          <Globe size={24} className="text-success mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">CORS Enabled</h3>
          <p className="text-sm text-muted leading-relaxed">
            Call from any domain. Perfect for embedding live data in your docs or dashboards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
