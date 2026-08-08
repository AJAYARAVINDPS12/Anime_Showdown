import React, { useState } from 'react';
import './login.css';
import splashBg from '../../../assets/splash-bg.jpg';

export default function Login({ onLoginSuccess, onSignupRedirect, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('COMPROMISED TRANSMISSION: All fields are required.');
      return;
    }

    if (!email.includes('@')) {
      setError('SIGNATURE INVALID: Enter a valid email coordinates.');
      return;
    }

    setIsLoading(true);

    // Simulate database authentication check
    setTimeout(() => {
      setIsLoading(false);
      // Hardcoded mock credentials check or succeed anyway for demo
      if (password.length < 6) {
        setError('DECRYPT ERROR: Access Denied. Keycode must be >= 6 chars.');
      } else {
        if (onLoginSuccess) onLoginSuccess();
      }
    }, 1500);
  };

  const bgImageUrl = typeof splashBg === 'string' ? splashBg : (splashBg?.uri || splashBg);

  return (
    <div className="splash-container">


      {/* Login Card Panel */}
      <div className="auth-panel">
        <div className="auth-header">
          <div className="cyber-tag" style={{ borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)', background: 'rgba(255, 0, 123, 0.1)' }}>SECURE SECTOR</div>
          <h1 className="splash-title" style={{ fontSize: '2.5rem', letterSpacing: '3px' }}>SIGN IN</h1>
          <div className="auth-subtitle">ENTER ARENA KEYS</div>
        </div>

        {error && <div className="auth-error-block">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">COMBATANT ID (EMAIL)</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="e.g. challenger@arena.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">SECURITY KEYCODE</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary-cyber"
            style={{ marginTop: '10px' }}
            disabled={isLoading}
          >
            {isLoading ? 'DECRYPTING SIGNATURE...' : 'AUTHORIZE INGRESS'}
          </button>
        </form>

        <div className="form-footer-links">
          <button 
            className="form-footer-link" 
            onClick={onSignupRedirect}
            disabled={isLoading}
          >
            New challenger? <span>Create Profile</span>
          </button>
        </div>

        <button 
          className="auth-back-link" 
          onClick={onBack}
          disabled={isLoading}
        >
          &lt; RETURN TO INGRESS OPTIONS
        </button>
      </div>
    </div>
  );
}
