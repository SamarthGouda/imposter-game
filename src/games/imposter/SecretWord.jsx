import React, { useState } from 'react';
import Button from '../../components/Button';
import { playPassPhone, playSecretReveal } from '../../utils/sound';

export default function SecretWord({
  playerName,
  secretWord,
  onHideAndPass
}) {
  const [revealed, setRevealed] = useState(true);

  const handleHideAndPass = () => {
    // Immediately blank the word to protect privacy before callback
    setRevealed(false);
    playPassPhone();
    onHideAndPass();
  };

  return (
    <div className="secret-word-container animate-fade-in">
      {/* Player Privacy Banner */}
      <div className="secret-player-badge">
        <span className="secret-lock-icon">🔒</span>
        <span className="secret-player-name">{playerName.toUpperCase()}</span>
      </div>

      <div className="secret-word-card">
        <p className="secret-card-label">Your secret word is:</p>

        {revealed ? (
          <div className="secret-word-display animate-scale-in">
            <h1 className="secret-word-text">{secretWord}</h1>
          </div>
        ) : (
          <div className="secret-word-hidden">
            <span>••••••••••</span>
          </div>
        )}

        <div className="secret-security-warning">
          <span className="warning-emoji">🤫</span>
          <p className="warning-text">
            Don't show this word to anyone. Memorize it and pass the phone!
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="secret-actions">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={handleHideAndPass}
          icon={<span>➔</span>}
        >
          HIDE & PASS PHONE
        </Button>
      </div>
    </div>
  );
}
