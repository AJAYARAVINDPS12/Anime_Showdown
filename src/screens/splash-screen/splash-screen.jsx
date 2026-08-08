import React, { useState, useEffect } from 'react';
import './splash-screen.css';
import splashBg from '../../../assets/splash-bg.jpg';

export default function SplashScreen({ onEnter }) {
  const [isMuted, setIsMuted] = useState(true);
  const [ping, setPing] = useState(24);
  const [activePlayers, setActivePlayers] = useState(12845);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectProgress, setConnectProgress] = useState(0);
  const [connectStatusText, setConnectStatusText] = useState('ENTER SHOWDOWN');
  const [exitAnimation, setExitAnimation] = useState(false);

  // Fluctuating server status mock data
  useEffect(() => {
    const statusInterval = setInterval(() => {
      // Fluctuate ping slightly
      setPing(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return next > 15 && next < 40 ? next : prev;
      });

      // Fluctuate player count slightly
      setActivePlayers(prev => {
        const change = Math.floor(Math.random() * 11) - 5;
        return prev + change;
      });
    }, 3000);

    return () => clearInterval(statusInterval);
  }, []);

  // Connection flow simulation
  useEffect(() => {
    if (!isConnecting) return;

    const connectionStages = [
      { progress: 15, text: 'INITIALIZING CLIENT...' },
      { progress: 40, text: 'RESOLVING SERVERS...' },
      { progress: 70, text: 'AUTHENTICATING PROFILE...' },
      { progress: 90, text: 'DOWNLOADING PLAYER DATA...' },
      { progress: 100, text: 'SYNC COMPLETE!' }
    ];

    let currentStageIndex = 0;
    const progressInterval = setInterval(() => {
      setConnectProgress(prev => {
        const nextProgress = prev + Math.floor(Math.random() * 8) + 4;
        
        // Match stage messages with progress milestones
        if (currentStageIndex < connectionStages.length && 
            nextProgress >= connectionStages[currentStageIndex].progress) {
          setConnectStatusText(connectionStages[currentStageIndex].text);
          currentStageIndex++;
        }

        if (nextProgress >= 100) {
          clearInterval(progressInterval);
          // Trigger exit transition animation
          setTimeout(() => {
            setExitAnimation(true);
            // Fire callback after animation completes
            setTimeout(() => {
              if (onEnter) onEnter();
            }, 80000000000000000000); // Set low wait or wait for animation
            // Wait: 800ms to match the CSS exit-transition duration
            setTimeout(() => {
              if (onEnter) onEnter();
            }, 800);
          }, 400);
          return 100;
        }
        return nextProgress;
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, [isConnecting, onEnter]);

  const handleEnterClick = () => {
    if (isConnecting) return;
    setIsConnecting(true);
    setConnectStatusText('CONNECTING...');
  };

  // Safe image path resolution
  const bgImageUrl = typeof splashBg === 'string' ? splashBg : (splashBg?.uri || splashBg);

  return (
    <div className={`splash-container ${exitAnimation ? 'exit-transition' : ''}`}>
      {/* Background Layer */}
      <div 
        className="splash-bg-art" 
        style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none' }}
      />
      <div className="splash-bg-overlay" />
      <div className="splash-bg-grid" />

      {/* Cyberpunk overlays */}
      <div className="scanlines" />
      <div className="scanline-sweep" />

      {/* Sound Controller */}
      <button 
        className={`audio-control ${isMuted ? 'audio-muted' : ''}`}
        onClick={() => setIsMuted(!isMuted)}
        title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        aria-label="Toggle Audio"
      >
        <div className="sound-waves">
          <div className="wave-bar" />
          <div className="wave-bar" />
          <div className="wave-bar" />
          <div className="wave-bar" />
          <div className="wave-bar" />
        </div>
      </button>

      {/* Main Container */}
      <main className="splash-content">
        
        {/* Left Side: Game Title & Details */}
        <section className="splash-left">
          <div className="cyber-tag">ALPHA BUILD v1.0.0</div>
          
          <div className="splash-title-wrapper">
            <h1 className="splash-title">Anime</h1>
            <div className="splash-title-sub">Showdown</div>
          </div>

          <p className="splash-desc">
            Assemble your ultimate squad of iconic anime legends. Clash in high-stakes 
            arena showdowns, deploy lethal signature moves, and dominate the ranking leaderboards. 
            <span> Are you ready to claim the title of Arena Champion?</span>
          </p>

          {/* Action Area */}
          <div className="splash-actions">
            {isConnecting ? (
              <button className="btn-primary-cyber" style={{ width: '320px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>
                  {connectStatusText}
                </span>
                <div style={{ 
                  height: '4px', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '2px', 
                  overflow: 'hidden', 
                  marginTop: '6px' 
                }}>
                  <div style={{ 
                    height: '100%', 
                    background: 'var(--neon-blue)', 
                    width: `${connectProgress}%`, 
                    transition: 'width 0.1s ease',
                    boxShadow: '0 0 8px var(--neon-blue)' 
                  }} />
                </div>
              </button>
            ) : (
              <button 
                className="btn-primary-cyber" 
                onClick={handleEnterClick}
              >
                ENTER SHOWDOWN
              </button>
            )}
            
            <button className="btn-secondary-cyber">
              LORE & RULES
            </button>
          </div>

          {/* Server Info */}
          <div className="server-status-panel">
            <div className="status-card">
              <span className="status-label">SERVER STATUS</span>
              <span className="status-value">
                <span className="status-indicator" />
                ONLINE
              </span>
            </div>
            
            <div className="status-card">
              <span className="status-label">NETWORK PING</span>
              <span className="status-value">{ping} MS</span>
            </div>

            <div className="status-card pink-accent">
              <span className="status-label">ACTIVE COMBATANTS</span>
              <span className="status-value">{activePlayers.toLocaleString()}</span>
            </div>
          </div>
        </section>

        {/* Right Side: Showcase Character Card */}
        <section className="splash-right">
          <div className="character-card-container">
            <div className="character-card-inner">
              <div className="card-frame">
                <div 
                  className="card-image"
                  style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : 'none' }}
                />
                <div className="card-overlay-effects" />
              </div>

              <div className="card-footer">
                <div className="card-title-row">
                  <span className="card-character-name">RYUJI & SAKURA</span>
                  <span className="card-character-class">LEGENDARY</span>
                </div>
                
                <div className="card-stats-row">
                  <div className="stat-label-container">
                    <span>Arena Power Rating</span>
                    <span className="stat-value-text">S++ 94.8%</span>
                  </div>
                  <div className="stat-bar-bg">
                    <div className="stat-bar-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
