import React, { useState } from 'react';
import Button from '../../components/Button';
import { DEFAULT_PLAYER_SUGGESTIONS } from '../../utils/storage';
import { playClick, playSelect } from '../../utils/sound';

export default function PlayerNamesSetup({
  playerCount,
  players,
  setPlayers,
  onBackToCount,
  onStartGame
}) {
  const [error, setError] = useState('');

  const handleNameChange = (index, newName) => {
    const updated = [...players];
    updated[index] = newName;
    setPlayers(updated);
    setError('');
  };

  const handleClearName = (index) => {
    playClick();
    const updated = [...players];
    updated[index] = '';
    setPlayers(updated);
  };

  const handleFillDefaults = () => {
    playSelect();
    const defaults = DEFAULT_PLAYER_SUGGESTIONS.slice(0, playerCount);
    setPlayers(defaults);
    setError('');
  };

  const handleClearAll = () => {
    playClick();
    setPlayers(Array(playerCount).fill(''));
    setError('');
  };

  const handleValidateAndStart = () => {
    // Check for empty names
    for (let i = 0; i < players.length; i++) {
      if (!players[i] || !players[i].trim()) {
        setError(`Please enter a name for Player ${i + 1}`);
        return;
      }
    }

    // Check for duplicates
    const cleanNames = players.map((p) => p.trim());
    const seen = new Set();
    for (const name of cleanNames) {
      const lower = name.toLowerCase();
      if (seen.has(lower)) {
        setError(`Duplicate name detected: "${name}". Each player must have a unique name!`);
        return;
      }
      seen.add(lower);
    }

    setError('');
    onStartGame(cleanNames);
  };

  return (
    <div className="setup-card animate-fade-in">
      <div className="setup-header-row">
        <button
          type="button"
          className="text-back-btn"
          onClick={() => {
            playClick();
            onBackToCount();
          }}
        >
          ← Change Count ({playerCount} players)
        </button>
        <span className="setup-badge">Step 2 of 2</span>
      </div>

      <h2 className="setup-title">Player Names</h2>
      <p className="setup-subtitle">
        Enter the name of each player who will be holding the phone.
      </p>

      {/* Quick Actions Row */}
      <div className="quick-actions-bar">
        <button
          type="button"
          className="btn-text-action"
          onClick={handleFillDefaults}
          title="Fill with default party player names"
        >
          ⚡ Use Preset Names
        </button>
        <button
          type="button"
          className="btn-text-action btn-text-dim"
          onClick={handleClearAll}
          title="Clear all name fields"
        >
          🗑️ Clear All
        </button>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="error-banner animate-shake" role="alert">
          <span>⚠️ {error}</span>
        </div>
      )}

      {/* Player Input Slots */}
      <div className="player-inputs-list">
        {players.map((name, idx) => (
          <div key={idx} className="player-input-row">
            <div className="player-slot-badge">
              <span>{idx + 1}</span>
            </div>
            <div className="player-input-wrapper">
              <input
                type="text"
                className="player-name-input"
                placeholder={`Player ${idx + 1} Name`}
                value={name}
                maxLength={20}
                onChange={(e) => handleNameChange(idx, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (idx < players.length - 1) {
                      const nextInput = document.getElementById(`player-input-${idx + 1}`);
                      if (nextInput) nextInput.focus();
                    } else {
                      handleValidateAndStart();
                    }
                  }
                }}
                id={`player-input-${idx}`}
                autoComplete="off"
              />
              {name && (
                <button
                  type="button"
                  className="clear-input-btn"
                  onClick={() => handleClearName(idx)}
                  aria-label="Clear field"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <div className="setup-actions">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={handleValidateAndStart}
          icon={<span>🎮</span>}
        >
          START GAME
        </Button>
      </div>
    </div>
  );
}
