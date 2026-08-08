import React from 'react';
import './user-profile.css';

export default function UserProfile({ onBack }) {
  return (
    <div className="profile-card-cyber">
      {/* Profile Header */}
      <div className="panel-header-cyber" style={{ marginBottom: '20px' }}>
        <h2 className="panel-title-cyber">COMBATANT <span className="panel-title-accent">DOSSIER</span></h2>
        <span className="profile-rank" style={{ color: 'var(--neon-blue)' }}>SECURE DECRYPTED</span>
      </div>

      <div className="profile-layout-grid">
        {/* Left Column: Avatar & Basic Info */}
        <div className="profile-col-left">
          <div className="profile-avatar-large">
            <div className="avatar-scanner-line" />
          </div>
          <h3 className="profile-callsign">You_Hayabusa</h3>
          <span className="profile-title-text">S-Class Combatant</span>
          
          <div className="profile-status-badge">
            <span className="status-dot-green" />
            <span className="status-label-text">ONLINE & READY</span>
          </div>
        </div>

        {/* Right Column: Statistics Grid */}
        <div className="profile-col-right">
          <h4 className="stats-section-title">BATTLE RECORD</h4>
          
          <div className="stats-cyber-grid">
            <div className="stat-grid-item">
              <span className="stat-grid-label">TOTAL DUELS</span>
              <span className="stat-grid-value">360</span>
            </div>

            <div className="stat-grid-item">
              <span className="stat-grid-label">WIN RATE</span>
              <span className="stat-grid-value" style={{ color: 'var(--neon-green)' }}>68.8%</span>
            </div>

            <div className="stat-grid-item">
              <span className="stat-grid-label">SHOWDOWN POINTS</span>
              <span className="stat-grid-value" style={{ color: 'var(--neon-blue)' }}>3,450 SP</span>
            </div>

            <div className="stat-grid-item">
              <span className="stat-grid-label">SIGNATURE COMBOS</span>
              <span className="stat-grid-value">42</span>
            </div>
          </div>

          <h4 className="stats-section-title" style={{ marginTop: '20px' }}>TACTICAL PREFERENCES</h4>
          <div className="stats-cyber-list">
            <div className="stats-list-row">
              <span className="list-row-label">PRIMARY TEAM</span>
              <span className="list-row-val">Ryuji | Sakura | Kage</span>
            </div>
            <div className="stats-list-row">
              <span className="list-row-label">FAVORITE STAGE</span>
              <span className="list-row-val">Neo-Tokyo Neo-Dome</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Actions Footer */}
      <div className="profile-actions-footer">
        <button className="btn-secondary-cyber" onClick={onBack} style={{ padding: '12px 30px', fontSize: '0.85rem' }}>
          BACK TO LOBBY
        </button>
        <button className="btn-primary-cyber" style={{ padding: '12px 30px', fontSize: '0.85rem' }} onClick={() => alert('Battle Logs Encrypted under Level-5 Security.')}>
          EXPORT COMBAT LOGS
        </button>
      </div>
    </div>
  );
}
