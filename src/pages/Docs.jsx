import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, BookOpen, Code, Zap, Lock, Globe, Terminal, ArrowLeft, Copy, Check, ChevronDown, ExternalLink } from 'lucide-react';

const sections = [
  {
    id: 'introduction',
    label: 'Introduction',
    items: [
      { id: 'getting-started', label: 'Getting Started' },
      { id: 'overview', label: 'What is StackScope?' },
    ]
  },
  {
    id: 'api',
    label: 'REST API',
    items: [
      { id: 'authentication', label: 'Authentication' },
      { id: 'rate-limits', label: 'Rate Limits' },
      { id: 'base-url', label: 'Base URL & Versioning' },
    ]
  },
  {
    id: 'endpoints',
    label: 'Endpoints',
    items: [
      { id: 'ecosystem', label: 'Ecosystem Overview' },
      { id: 'sbtc', label: 'sBTC Metrics' },
      { id: 'defi', label: 'DeFi Protocols' },
      { id: 'network', label: 'Network Activity' },
    ]
  },
  {
    id: 'websocket',
    label: 'WebSocket',
    items: [
      { id: 'ws-connect', label: 'Connecting' },
      { id: 'ws-events', label: 'Event Types' },
    ]
  },
  {
    id: 'sdks',
    label: 'SDKs & Tools',
    items: [
      { id: 'js-sdk', label: 'JavaScript SDK' },
      { id: 'python-sdk', label: 'Python SDK' },
    ]
  },
];

const CodeBlock = ({ code, lang = 'json' }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group rounded-xl overflow-hidden border border-white/10 my-4 bg-black/40">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{lang}</span>
        <button onClick={handleCopy} className="flex items-center gap-1.5 text-[10px] text-muted hover:text-white transition-colors cursor-pointer">
          {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-white/80 overflow-x-auto leading-relaxed">{code}</pre>
    </div>
  );
};

const Badge = ({ color = 'green', children }) => {
  const colors = {
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${colors[color]} uppercase tracking-wider`}>
      {children}
    </span>
  );
};

const EndpointRow = ({ method, path, description }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all cursor-pointer group">
    <Badge color={method === 'GET' ? 'green' : 'blue'}>{method}</Badge>
    <code className="text-sm text-blue-400 font-mono flex-1 group-hover:text-blue-300 transition-colors">{path}</code>
    <span className="text-xs text-white/50">{description}</span>
  </div>
);

const content = {
  'getting-started': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Getting Started</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">
        StackScope provides real-time on-chain analytics for the Stacks Bitcoin L2 ecosystem. Our REST API and WebSocket feeds give you access to TVL, sBTC metrics, DeFi protocol data, and network activity.
      </p>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
        <span className="text-xs font-bold text-yellow-500/80 uppercase tracking-wider">API Coming Soon</span>
      </div>
      <h2 className="text-xl font-bold text-white mt-8 mb-4">Quick Example</h2>
      <p className="text-white/60 text-sm mb-2">Fetch the current ecosystem overview in one call:</p>
      <CodeBlock lang="bash" code={`curl https://api.stackscope.xyz/v1/ecosystem/overview`} />
      <CodeBlock lang="json" code={`{
  "tvl_usd": 164284912,
  "sbtc_supply": 542.8,
  "active_addresses_7d": 12482,
  "contracts_deployed_7d": 540,
  "status": "operational"
}`} />
    </div>
  ),
  'overview': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">What is StackScope?</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">
        StackScope is the intelligence layer for Bitcoin DeFi — providing institutional-grade analytics for the Stacks ecosystem. We aggregate data from the Hiro API, Ortege ETL, and on-chain sources to give you the full picture.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {[
          { icon: Zap, title: '<100ms', sub: 'API Latency', color: 'text-yellow-400' },
          { icon: Code, title: '50+', sub: 'Endpoints', color: 'text-blue-400' },
          { icon: Globe, title: '100/min', sub: 'Rate Limit (Free)', color: 'text-green-400' },
        ].map(({ icon: Icon, title, sub, color }) => (
          <div key={sub} className="bg-white/[0.04] border border-white/10 rounded-xl p-5 flex flex-col gap-1">
            <Icon size={18} className={`${color} mb-2`} />
            <span className={`text-2xl font-extrabold ${color} font-mono`}>{title}</span>
            <span className="text-xs text-white/40 uppercase tracking-wider">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  'authentication': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Authentication</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">
        Public endpoints require no authentication. For higher rate limits and private data feeds, include your API key in the request header.
      </p>
      <h2 className="text-xl font-bold text-white mt-8 mb-3">API Key Header</h2>
      <CodeBlock lang="bash" code={`curl -H "X-API-Key: YOUR_API_KEY" \\
  https://api.stackscope.xyz/v1/ecosystem/overview`} />
      <div className="mt-6 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
        <p className="text-sm text-white/60"><span className="text-blue-400 font-bold">Note:</span> API keys are available on the Pro tier. Public endpoints work without any key at 100 requests/min.</p>
      </div>
    </div>
  ),
  'rate-limits': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Rate Limits</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">Rate limits are applied per IP address for public endpoints and per API key for authenticated requests.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-white/[0.05] border-b border-white/10">
              <th className="text-left px-4 py-3 text-white/70 font-bold uppercase text-[10px] tracking-wider">Tier</th>
              <th className="text-left px-4 py-3 text-white/70 font-bold uppercase text-[10px] tracking-wider">Rate Limit</th>
              <th className="text-left px-4 py-3 text-white/70 font-bold uppercase text-[10px] tracking-wider">Auth Required</th>
            </tr>
          </thead>
          <tbody>
            {[['Free', '100 req/min', 'No'],['Pro', '1,000 req/min', 'API Key'],['Enterprise', 'Unlimited', 'API Key']].map(([tier, rate, auth]) => (
              <tr key={tier} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="px-4 py-3 text-white font-semibold">{tier}</td>
                <td className="px-4 py-3 text-blue-400 font-mono">{rate}</td>
                <td className="px-4 py-3 text-white/50">{auth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
  'base-url': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Base URL & Versioning</h1>
      <p className="text-white/60 text-base leading-relaxed mb-4">All API requests use the following base URL. We version our API to ensure backward compatibility.</p>
      <CodeBlock lang="text" code={`https://api.stackscope.xyz/v1`} />
      <h2 className="text-xl font-bold text-white mt-8 mb-3">Versioning Policy</h2>
      <p className="text-white/60 text-sm leading-relaxed">We follow semantic versioning. Deprecated endpoints will be announced 90 days in advance. Breaking changes will increment the major version (<code className="text-blue-400">v1</code> → <code className="text-blue-400">v2</code>).</p>
    </div>
  ),
  'ecosystem': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Ecosystem Overview</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">High-level ecosystem health and aggregate metrics.</p>
      <div className="flex flex-col gap-2 mb-6">
        <EndpointRow method="GET" path="/v1/ecosystem/overview" description="Current ecosystem snapshot" />
        <EndpointRow method="GET" path="/v1/ecosystem/history?range=30d" description="Historical aggregate data" />
      </div>
      <h2 className="text-xl font-bold text-white mt-6 mb-3">Response</h2>
      <CodeBlock lang="json" code={`{
  "tvl_usd": 164284912,
  "tvl_change_24h": 2.3,
  "sbtc_supply": 542.8,
  "active_addresses_7d": 12482,
  "contracts_deployed_7d": 540,
  "volume_24h_usd": 42100000,
  "status": "operational",
  "updated_at": "2026-03-10T09:00:00Z"
}`} />
    </div>
  ),
  'sbtc': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">sBTC Metrics</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">Peg health, supply, holder data, and mint/redeem activity for sBTC.</p>
      <div className="flex flex-col gap-2 mb-6">
        <EndpointRow method="GET" path="/v1/sbtc/metrics" description="Current sBTC stats" />
        <EndpointRow method="GET" path="/v1/sbtc/supply?range=7d" description="Supply history" />
        <EndpointRow method="GET" path="/v1/sbtc/signers" description="Signer set health" />
      </div>
      <h2 className="text-xl font-bold text-white mt-6 mb-3">Response</h2>
      <CodeBlock lang="json" code={`{
  "total_supply": "542.8 BTC",
  "peg_health": 0.9998,
  "active_signers": 84,
  "total_signers": 100,
  "mint_24h": 12.4,
  "redeem_24h": 3.1,
  "holders": 1847
}`} />
    </div>
  ),
  'defi': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">DeFi Protocols</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">TVL, APY, user counts, and health scores for all indexed Stacks DeFi protocols.</p>
      <div className="flex flex-col gap-2 mb-6">
        <EndpointRow method="GET" path="/v1/defi/protocols" description="All protocols overview" />
        <EndpointRow method="GET" path="/v1/defi/protocols/:id" description="Single protocol detail" />
        <EndpointRow method="GET" path="/v1/defi/tvl?range=30d" description="TVL history" />
      </div>
    </div>
  ),
  'network': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Network Activity</h1>
      <p className="text-white/60 text-base leading-relaxed mb-6">Block data, transaction types, contract deployments, and address activity.</p>
      <div className="flex flex-col gap-2 mb-6">
        <EndpointRow method="GET" path="/v1/network/activity" description="Transaction & block metrics" />
        <EndpointRow method="GET" path="/v1/network/blocks?limit=10" description="Recent blocks" />
        <EndpointRow method="GET" path="/v1/network/contracts?range=7d" description="Contract deployments" />
      </div>
    </div>
  ),
  'ws-connect': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">WebSocket — Connecting</h1>
      <p className="text-white/60 text-base leading-relaxed mb-4">Connect to our WebSocket server for real-time event streams.</p>
      <CodeBlock lang="javascript" code={`const ws = new WebSocket('wss://ws.stackscope.xyz/v1');

ws.onopen = () => {
  ws.send(JSON.stringify({
    action: 'subscribe',
    channels: ['sbtc', 'network', 'defi']
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
};`} />
    </div>
  ),
  'ws-events': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">WebSocket — Event Types</h1>
      <p className="text-white/60 text-base leading-relaxed mb-4">Events are emitted on new blocks, large transactions, and signer activity.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-white/[0.05] border-b border-white/10">
              <th className="text-left px-4 py-3 text-white/70 font-bold uppercase text-[10px] tracking-wider">Event</th>
              <th className="text-left px-4 py-3 text-white/70 font-bold uppercase text-[10px] tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['block.new', 'Emitted on every new Stacks block'],
              ['sbtc.mint', 'An sBTC mint occurred'],
              ['sbtc.redeem', 'An sBTC redemption occurred'],
              ['defi.large_swap', 'Swap above $100k threshold'],
              ['contract.deploy', 'New contract deployed'],
            ].map(([event, desc]) => (
              <tr key={event} className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="px-4 py-3 text-blue-400 font-mono text-xs">{event}</td>
                <td className="px-4 py-3 text-white/50 text-xs">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
  'js-sdk': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">JavaScript SDK</h1>
      <p className="text-white/60 text-base leading-relaxed mb-4">Official JS/TS client for the StackScope API.</p>
      <h2 className="text-xl font-bold text-white mt-6 mb-3">Install</h2>
      <CodeBlock lang="bash" code={`npm install @stackscope/sdk`} />
      <h2 className="text-xl font-bold text-white mt-6 mb-3">Usage</h2>
      <CodeBlock lang="javascript" code={`import { StackScope } from '@stackscope/sdk';

const client = new StackScope({ apiKey: 'YOUR_KEY' });

const overview = await client.ecosystem.overview();
console.log(overview.tvl_usd); // 164284912`} />
    </div>
  ),
  'python-sdk': (
    <div>
      <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Python SDK</h1>
      <p className="text-white/60 text-base leading-relaxed mb-4">Official Python client for the StackScope API.</p>
      <h2 className="text-xl font-bold text-white mt-6 mb-3">Install</h2>
      <CodeBlock lang="bash" code={`pip install stackscope`} />
      <h2 className="text-xl font-bold text-white mt-6 mb-3">Usage</h2>
      <CodeBlock lang="python" code={`from stackscope import Client

client = Client(api_key="YOUR_KEY")
overview = client.ecosystem.overview()
print(overview["tvl_usd"])  # 164284912`} />
    </div>
  ),
};

const Docs = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('getting-started');
  const [expandedGroups, setExpandedGroups] = useState({ introduction: true, api: true, endpoints: true, websocket: true, sdks: true });

  const toggleGroup = (id) => setExpandedGroups(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen bg-[#080B12] text-white flex flex-col">
      {/* Fixed top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-white/[0.07] bg-[#080B12]/90 backdrop-blur-xl flex items-center px-6 gap-6">
        <a href="/" className="flex items-center gap-2 shrink-0 group">
          <ArrowLeft size={14} className="text-white/40 group-hover:text-white transition-colors" />
          <span className="text-sm font-bold tracking-tighter text-white">Stack<span className="text-blue-500">Scope</span></span>
        </a>
        <div className="w-px h-4 bg-white/10" />
        <span className="text-sm text-white/40 font-medium">Documentation</span>
        <div className="flex-1" />
        <a href="https://x.com/iameskor_" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://github.com/stackscope" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/40 hover:text-white transition-colors font-medium flex items-center gap-1">
          GitHub <ExternalLink size={10} />
        </a>
        <button onClick={() => navigate('/overview')} className="ml-2 flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-xs font-bold px-3 py-1.5 rounded-lg">
          Dashboard <ChevronRight size={12} />
        </button>
      </header>

      <div className="flex pt-14 min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 shrink-0 fixed top-14 bottom-0 left-0 border-r border-white/[0.07] overflow-y-auto py-6 px-3 bg-[#080B12]">
          <div className="flex flex-col gap-1">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleGroup(section.id)}
                  className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
                >
                  {section.label}
                  <ChevronDown size={12} className={`transition-transform ${expandedGroups[section.id] ? 'rotate-180' : ''}`} />
                </button>
                {expandedGroups[section.id] && (
                  <div className="flex flex-col gap-0.5 mt-0.5 mb-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${activeSection === item.id ? 'bg-blue-600/15 text-blue-400 border border-blue-600/20' : 'text-white/50 hover:text-white hover:bg-white/[0.04]'}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 md:ml-60 px-6 md:px-16 py-12 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            {content[activeSection] || (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <BookOpen size={40} className="text-white/20 mb-4" />
                <p className="text-white/40">Select a section from the sidebar</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
