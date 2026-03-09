import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Activity, ArrowRight, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import heroAsset from '../assets/hero_abstract.png';
import chartAsset from '../assets/chart_growth.png';
import securityAsset from '../assets/bento_security.png';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="brand">
          <div className="logo-box">
            <Activity size={18} color="white" />
          </div>
          <span className="brand-name" style={{ fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>StackScope</span>
        </div>
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">API</a>
          <a href="#">Documentation</a>
        </div>
        <button 
          onClick={() => navigate('/overview')}
          className="btn-launch"
        >
          Launch App <ChevronRight size={16} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow" />
        
        <div className="badge-live">
          <div className="dot-pulse" />
          Live on Stacks Mainnet
        </div>
        
        <h1 className="hero-title">
          The Nervous System {"\n"} for Bitcoin DeFi
        </h1>
        
        <p className="hero-subtitle">
          Real-time on-chain analytics, TVL tracking, and sBTC flows for the Stacks ecosystem. Open source and radically transparent.
        </p>

        <div className="hero-actions">
          <button 
            className="btn-hero-primary"
            onClick={() => navigate('/overview')}
          >
            Explore Dashboard <ArrowRight size={20} />
          </button>
          <button 
            className="btn-hero-secondary"
            onClick={() => window.open('https://docs.stacksendowment.co', '_blank')}
          >
            Read the Docs
          </button>
        </div>

        <div className="hero-visual-container">
          <img 
            src={heroAsset} 
            alt="StackScope Core Engine" 
          />
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="bento-section">
        <div className="bento-header">
          <h2>Analytics that power <br/> the leading protocols.</h2>
          <p>Everything you need to navigate the Stacks economy.</p>
        </div>

        <div className="bento-grid">
          {/* Large Feature Card */}
          <div className="bento-card large">
            <div className="bento-card-content">
              <BarChart3 size={32} style={{ color: 'var(--lp-teal)', marginBottom: '1rem' }} />
              <h3>Protocol Growth Tracking</h3>
              <p>Compare TVL, yields, and active users across ALEX, Zest, Arkadiko, and more in real time.</p>
            </div>
            <img 
              src={chartAsset} 
              alt="Growth Chart" 
              className="card-image"
            />
          </div>

          {/* Small Feature Card 1 */}
          <div className="bento-card">
            <div className="bento-card-content">
              <ShieldCheck size={32} style={{ color: 'white', marginBottom: '1rem' }} />
              <h3>sBTC Peg Health</h3>
              <p>Monitor decentralised signers and peg deviation with cryptographic certainty.</p>
            </div>
            <img 
              src={securityAsset} 
              alt="Security Lock" 
              className="card-image"
            />
          </div>

          {/* Small Feature Card 2 */}
          <div className="bento-card centered">
            <Globe size={48} style={{ color: 'white', marginBottom: '1.5rem' }} />
            <h3>Live Network Map</h3>
            <p>Watch the pulse of standard transfers, NFT trades, and contract deploys.</p>
          </div>

          {/* Medium Feature Card */}
          <div className="bento-card large api-card">
            <div className="bento-card-content">
              <h3>Open Data API</h3>
              <p style={{ marginBottom: '1.5rem' }}>Build your own dashboards or feed algorithmic models with our high-throughput REST API.</p>
              <button className="btn-text">
                View Documentation <ChevronRight size={16} />
              </button>
            </div>
            <div className="bento-card-content" style={{ padding: '1rem' }}>
              <div className="code-block">
                <div className="code-accent" />
                <pre style={{ margin: 0 }}>
                  <code>
{`GET /api/v1/sbtc/supply
{
  "total_supply": 542.8,
  "peg_health": 0.998,
  "active_signers": 67
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="landing-footer">
        <h2 className="footer-title">Stop flying blind.</h2>
        <button 
          onClick={() => navigate('/overview')}
          className="btn-open-app"
        >
          Open App
        </button>
        <div className="footer-links">
          <span>© 2026 StackScope</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
