import React, { useState } from 'react';
import './home.css';
import Navbar from './navbar';
import UserProfile from './user-profile';

import pokemonBg from '../../../assets/auth-background/pokemon-showdown.jpg';
import showdownBg from '../../../assets/auth-background/anime-showdown.jpg';
import drafterBg from '../../../assets/auth-background/anime-drafter.png';
import debateBg from '../../../assets/auth-background/anime-debate.jpg';
import tierlistBg from '../../../assets/auth-background/anime-tierlist.jpg';
import pokemonDrafterBg from '../../../assets/auth-background/pokemon-drafter.jpg';

export default function Home({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');

  // Mock friends data
  const [friends, setFriends] = useState([
    { id: 1, name: 'Challenger_V', status: 'online', details: 'Lobby - Idle' },
    { id: 2, name: 'NovaGamer', status: 'ingame', details: 'In Battle - Rd 2' },
    { id: 3, name: 'Spectre_9', status: 'online', details: 'Modding Squad' },
    { id: 4, name: 'GokuBlack', status: 'offline', details: 'Last seen 2h ago' }
  ]);

  const handleInvite = (name) => {
    alert(`Battle request transmitted to ${name}. Waiting for lock-in signal...`);
  };

  const sectors = [
    {
      id: 1,
      code: "SEC-01",
      name: "Pokémon Showdown",
      desc: "Simulate tactical battles with legendary pocket monsters in competitive brackets.",
      players: "4,210",
      status: "LIVE",
      accentClass: "blue-accent",
      image: pokemonBg
    },
    {
      id: 2,
      code: "SEC-02",
      name: "Anime Showdown",
      desc: "An ultimate crossover duel arena where your favorite anime characters collide.",
      players: "5,840",
      status: "LIVE",
      accentClass: "pink-accent",
      image: showdownBg
    },
    {
      id: 3,
      code: "SEC-03",
      name: "Anime Drafter",
      desc: "Draft your supreme squad of combatants and simulate strategy card matchups.",
      players: "1,920",
      status: "ACTIVE",
      accentClass: "purple-accent",
      image: drafterBg
    },
    {
      id: 4,
      code: "SEC-04",
      name: "Anime Debate: Vote & Win",
      desc: "Engage in community debates on hypothetical matchups. Vote and claim rewards.",
      players: "3,150",
      status: "VOTING LIVE",
      accentClass: "orange-accent",
      image: debateBg
    },
    {
      id: 5,
      code: "SEC-05",
      name: "Anime Tier List",
      desc: "Rank and debate combatant strength charts with updated meta-data databases.",
      players: "980",
      status: "ONLINE",
      accentClass: "blue-accent",
      image: tierlistBg
    },
    {
      id: 6,
      code: "SEC-06",
      name: "Pokémon Drafter",
      desc: "Draft a legendary team of pocket monsters and execute card-battle drafts in competitive brackets.",
      players: "3,400",
      status: "LIVE",
      accentClass: "pokemon-drafter-accent",
      image: pokemonDrafterBg
    }
  ];

  const [selectedSectorId, setSelectedSectorId] = useState(2); // Default to Anime Showdown (id: 2)
  const activeSector = sectors.find(s => s.id === selectedSectorId) || sectors[1];

  const handleSectorClick = (name) => {
    alert(`Connecting to ${name} neural stream sector... Syncing protocols...`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <section className="dashboard-main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <UserProfile onBack={() => setActiveTab('home')} />
          </section>
        );
      case 'home':
      default:
        return (
          <section className="dashboard-main lobby-sector-viewer">
            {/* Left Column: Selected Sector Large Showcase */}
            <div className="sector-showcase-panel">
              <div className="showcase-bg-image" style={{ backgroundImage: `url(${activeSector.image})` }} />
              <div className="showcase-gradient-overlay" />
              
              <div className="showcase-content-inner">
                <div className="showcase-header">
                  <div className="cyber-tag">SECURE SECTOR ACTIVE</div>
                  <span className={`showcase-status-badge ${activeSector.status.toLowerCase().replace(/\s/g, '-')}`}>
                    {activeSector.status}
                  </span>
                </div>
                
                <h2 className="showcase-title">{activeSector.name}</h2>
                <span className="showcase-code">{activeSector.code}</span>
                <p className="showcase-desc">{activeSector.desc}</p>
                
                <div className="showcase-stats-grid">
                  <div className="showcase-stat-item">
                    <span className="showcase-stat-label">COMBATANTS</span>
                    <span className="showcase-stat-val">{activeSector.players}</span>
                  </div>
                  <div className="showcase-stat-item">
                    <span className="showcase-stat-label">STABILITY</span>
                    <span className="showcase-stat-val" style={{ color: 'var(--neon-green)' }}>99.8%</span>
                  </div>
                  <div className="showcase-stat-item">
                    <span className="showcase-stat-label">LATENCY</span>
                    <span className="showcase-stat-val">12ms</span>
                  </div>
                </div>
                
                <div className="showcase-action-row">
                  <button className={`btn-launch-showcase ${activeSector.accentClass}`} onClick={() => handleSectorClick(activeSector.name)}>
                    LAUNCH BATTLE STREAM
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column: Roster Quick Selector */}
            <div className="sector-navigation-list">
              <div className="list-header-cyber">
                <span className="list-title">SECTOR REGISTRY</span>
                <span className="list-count">{sectors.length} ACTIVE</span>
              </div>
              
              <div className="sector-roster">
                {sectors.map((sector) => {
                  const isSelected = sector.id === selectedSectorId;
                  return (
                    <div 
                      key={sector.id} 
                      className={`sector-roster-item ${sector.accentClass} ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedSectorId(sector.id)}
                    >
                      <div className="roster-item-thumbnail" style={{ backgroundImage: `url(${sector.image})` }} />
                      <div className="roster-item-info">
                        <span className="roster-item-code">{sector.code}</span>
                        <h4 className="roster-item-name">{sector.name}</h4>
                      </div>
                      <span className={`roster-status-indicator ${sector.status.toLowerCase().replace(/\s/g, '-')}`} title={sector.status} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="home-wrapper">
      {/* Main Header Nav */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />

      {/* Dashboard Grid Content */}
      <main className="dashboard-layout">
        
        {/* Left Column: Switchable Lobby View / User Profile */}
        {renderContent()}

        {/* Right Column: Persistent Friends List */}
        <section className="dashboard-panel-card dashboard-aside">
          <div className="panel-header-cyber">
            <h2 className="panel-title-cyber">FRIENDS <span className="panel-title-accent">ONLINE</span></h2>
            <span className="profile-rank" style={{ color: 'var(--neon-green)' }}>
              {friends.filter(f => f.status !== 'offline').length} / {friends.length}
            </span>
          </div>

          <div className="friends-list-panel">
            {friends.map(friend => (
              <div key={friend.id} className="friend-card">
                <div className="friend-avatar">
                  {/* Status Indicator Dot */}
                  <span className={`friend-status-dot ${friend.status}`} />
                </div>
                
                <div className="friend-info">
                  <span className="friend-name">{friend.name}</span>
                  <span className="friend-status-text" style={{ color: friend.status === 'ingame' ? 'var(--neon-pink)' : friend.status === 'online' ? 'var(--neon-green)' : '#a0aec0' }}>
                    {friend.details}
                  </span>
                </div>

                {friend.status !== 'offline' && (
                  <button 
                    className="btn-invite-friend" 
                    onClick={() => handleInvite(friend.name)}
                  >
                    INVITE
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
