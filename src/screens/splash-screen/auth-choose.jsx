import React from 'react';
import './auth-choose.css';
import '../screens/navbar.css';

export default function AuthChoose({ onLogin, onSignup, onBack }) {
  const handleScrollToInfo = () => {
    const infoSection = document.getElementById('info-section');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-wrapper">
      {/* Top Header Navbar */}
      <header className="home-header">
        <div 
          className="home-logo" 
          onClick={onBack} 
          style={{ cursor: 'pointer' }}
          title="Return to Radar System"
        >
          ANIME <span>SHOWDOWN</span>
        </div>

        {/* Center Links for Professional Feel */}
        <nav className="home-nav" style={{ marginLeft: '40px', marginRight: 'auto' }}>
          <button className="home-nav-link active" onClick={handleScrollToInfo}>GAME LORE</button>
        </nav>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <button 
            className="home-nav-link" 
            onClick={onLogin} 
            style={{ borderBottom: 'none' }}
          >
            LOGIN
          </button>
          
          <button 
            className="btn-secondary-cyber" 
            onClick={onSignup}
            style={{ padding: '10px 24px', fontSize: '0.85rem' }}
          >
            SIGN UP
          </button>
        </div>
      </header>

      {/* Centered Modern Hero Section */}
      <section className="centered-hero">
        
        <h1 className="centered-hero-title">
          THE NEXT GENERATION OF<br />
          ANIME CROSS-OVER COMBAT
        </h1>

        <p className="centered-hero-desc">
          Recruit legendary combatants, construct customized team rosters, and compete in zero-latency 
          tactical arena duels. Secure alpha build ingress pathways are now open.
        </p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <button 
            className="btn-primary-cyber" 
            onClick={onSignup}
            style={{ padding: '18px 45px', fontSize: '1.05rem' }}
          >
            PLAY FREE NOW
          </button>
          
          <button 
            className="btn-secondary-cyber" 
            onClick={handleScrollToInfo}
            style={{ padding: '17px 35px', fontSize: '0.95rem' }}
          >
            EXPLORE DETAILS
          </button>
        </div>
      </section>

      {/* Professional Features Section (3-Column Grid) */}
      <section id="info-section" className="landing-about-section-new">
        
        <h2 className="splash-title" style={{ fontSize: '2.4rem', letterSpacing: '3px', textAlign: 'center', margin: '0' }}>
          CORE GAME SYSTEMS
        </h2>

        <div className="features-grid-3">
          {/* Card 1: Recruit */}
          <div className="feature-card-premium">
            <span className="feature-num-title">SYSTEM 01 / DRAFT</span>
            <h3 className="info-title">ASSEMBLE THE TRIO</h3>
            <p className="info-desc">
              Draft teams of 3 fighters from different timelines. Synergize classes (Cyber Shinobis, Quantum Mages, Void Spectres) to construct lethal combat rotations.
            </p>
          </div>

          {/* Card 2: Clash */}
          <div className="feature-card-premium pink-accent">
            <span className="feature-num-title" style={{ color: 'var(--neon-pink)' }}>SYSTEM 02 / ENGAGE</span>
            <h3 className="info-title">ZERO-LATENCY ARENAS</h3>
            <p className="info-desc">
              Fight in high-stakes P2P server instances. Deploy instant signature move chains, dynamic block counters, and game-winning ultimate animations.
            </p>
          </div>

          {/* Card 3: Rank */}
          <div className="feature-card-premium">
            <span className="feature-num-title">SYSTEM 03 / DOMINATE</span>
            <h3 className="info-title">LEADERBOARD INGRESS</h3>
            <p className="info-desc">
              Climb the global S-Class matchmaking rating tiers. Claim seasonal showdown points (SP), unlock prestige banners, and record combat log transcripts.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Stats Ticker Bar */}
      <footer className="server-status-ticker">
        <div className="ticker-item">
          <span className="ticker-indicator-green" />
          <span>SERVER HEALTH: </span>
          <span className="ticker-badge-neon">ONLINE</span>
        </div>

        <div className="ticker-item">
          <span>ACTIVE COMBATANTS: </span>
          <span className="ticker-badge-neon pink">12,842</span>
        </div>

        <div className="ticker-item">
          <span>NETWORK PING: </span>
          <span className="ticker-badge-neon">~24MS</span>
        </div>

        <div className="ticker-item">
          <span>ALPHA NODE: </span>
          <span className="ticker-badge-neon pink">v1.0.0</span>
        </div>
      </footer>
    </div>
  );
}
