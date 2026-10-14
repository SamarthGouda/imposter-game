import React, { useState } from 'react';
import { isSoundEnabled, toggleSound, playClick } from '../utils/sound';

export default function Header({
  title = 'PARTY GAMES',
  subtitle = null,
  showBack = false,
  onBack = null,
  gameRules = null
}) {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [showRulesModal, setShowRulesModal] = useState(false);

  const handleSoundToggle = () => {
    const next = toggleSound();
    setSoundOn(next);
  };

  return (
    <>
      <header className="app-header">
        <div className="header-left">
          {showBack && onBack ? (
            <button
              type="button"
              className="icon-btn back-btn"
              onClick={() => {
                playClick();
                onBack();
              }}
              aria-label="Back to home"
              title="Return to Game Selection"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="back-text">Games</span>
            </button>
          ) : (
            <div className="header-logo-badge">
              <span className="logo-emoji">🎮</span>
            </div>
          )}
        </div>

        <div className="header-center">
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>

        <div className="header-right">
          {gameRules && (
            <button
              type="button"
              className="icon-btn rules-btn"
              onClick={() => {
                playClick();
                setShowRulesModal(true);
              }}
              aria-label="Game Rules"
              title="How to Play"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </button>
          )}

          <button
            type="button"
            className="icon-btn sound-btn"
            onClick={handleSoundToggle}
            aria-label={soundOn ? 'Mute Sound' : 'Enable Sound'}
            title={soundOn ? 'Sound is ON' : 'Sound is MUTED'}
          >
            {soundOn ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Rules Modal */}
      {gameRules && showRulesModal && (
        <div className="modal-backdrop" onClick={() => setShowRulesModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">📖 {gameRules.title || 'How to Play'}</h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowRulesModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body rules-content">
              {gameRules.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
