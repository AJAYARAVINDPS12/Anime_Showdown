import React, { useState } from 'react';
import './signup.css';
import splashBg from '../../../assets/splash-bg.jpg';

export default function Signup({ onSignupSuccess, onLoginRedirect, onBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('COMPROMISED TRANSMISSION: All fields are required.');
      return;
    }

    if (!email.includes('@')) {
      setError('SIGNATURE INVALID: Enter a valid email coordinates.');
      return;
    }

    if (password.length < 6) {
      setError('SECURITY WARNING: Keycode must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('DECRYPT ERROR: Security keycodes do not match.');
      return;
    }

    setIsLoading(true);

    // Simulate database write / user profile registration
    setTimeout(() => {
      setIsLoading(false);
      if (onSignupSuccess) onSignupSuccess();
    }, 1500);
  };

  const bgImageUrl = typeof splashBg === 'string' ? splashBg : (splashBg?.uri || splashBg);

  return (
    <div className="splash-container">


      {/* Signup Card Panel */}
      <div className="auth-panel" style={{ maxWidth: '500px', padding: '30px 35px' }}>
        <div className="auth-header" style={{ marginBottom: '20px' }}>
          <div className="cyber-tag" style={{ borderColor: 'var(--neon-green)', color: 'var(--neon-green)', background: 'rgba(57, 255, 20, 0.1)' }}>NEW SIGNAL</div>
          <h1 className="splash-title" style={{ fontSize: '2.5rem', letterSpacing: '3px' }}>REGISTER</h1>
          <div className="auth-subtitle">ESTABLISH CHANNELS</div>
        </div>

        {error && <div className="auth-error-block" style={{ marginBottom: '15px' }}>{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit} style={{ gap: '15px' }}>
          <div className="form-group">
            <label className="form-label">COMBATANT CALLSIGN (NAME)</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Zero_Kaiser"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">EMAIL ADDRESS</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="e.g. kaiser@showdown.com"
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
              placeholder="Min. 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label className="form-label">CONFIRM SECURITY KEYCODE</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="Verify code sequence"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary-cyber"
            style={{ marginTop: '10px' }}
            disabled={isLoading}
          >
            {isLoading ? 'ESTABLISHING PROFILE...' : 'REGISTER COMBAT SIGNATURE'}
          </button>
        </form>

        <div className="form-footer-links" style={{ marginTop: '15px' }}>
          <button 
            className="form-footer-link" 
            onClick={onLoginRedirect}
            disabled={isLoading}
          >
            Already registered? <span>Sign In</span>
          </button>
        </div>

        <button 
          className="auth-back-link" 
          onClick={onBack}
          disabled={isLoading}
          style={{ marginTop: '15px' }}
        >
          &lt; RETURN TO INGRESS OPTIONS
        </button>
      </div>
    </div>
  );
}
