import React from 'react';
import './navbar.css';

export default function Navbar({ activeTab, setActiveTab, onLogout }) {
  return (
    <header className="home-header">
      <div className="home-logo">
        ANIME <span>SHOWDOWN</span>
      </div>

      <nav className="home-nav">
        <button 
          className={`home-nav-link ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          ARENA LOBBY
        </button>
        <button 
          className={`home-nav-link ${activeTab === 'squad' ? 'active' : ''}`}
          onClick={() => setActiveTab('squad')}
        >
          MY SQUAD
        </button>
        <button 
          className={`home-nav-link ${activeTab === 'leaderboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('leaderboard')}
        >
          LEADERBOARD
        </button>
      </nav>

      <div className="profile-badge">
        <div 
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => setActiveTab('profile')}
          title="View profile signature"
        >
          <div 
            className="profile-avatar-placeholder" 
            style={{ 
              border: activeTab === 'profile' ? '2px solid var(--neon-pink)' : '1px solid rgba(0, 243, 255, 0.4)',
              boxShadow: activeTab === 'profile' ? '0 0 10px rgba(255, 0, 123, 0.5)' : 'none'
            }} 
          />
          <div className="profile-details">
            <span className="profile-name" style={{ color: activeTab === 'profile' ? 'var(--neon-pink)' : '#ffffff' }}>You_Hayabusa</span>
            <span className="profile-rank">S-CLASS COMBATANT</span>
          </div>
        </div>
        <button 
          className="home-nav-link" 
          style={{ marginLeft: '25px', color: 'var(--neon-pink)', borderBottom: 'none' }}
          onClick={onLogout}
        >
          LOGOUT
        </button>
      </div>
    </header>
  );
}
