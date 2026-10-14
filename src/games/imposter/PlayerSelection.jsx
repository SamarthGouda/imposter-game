import React, { useMemo } from 'react';
import { playSelect } from '../../utils/sound';

export default function PlayerSelection({
  totalPlayersCount,
  remainingPlayers,
  onSelectPlayer
}) {
  const completedCount = totalPlayersCount - remainingPlayers.length;

  // Shuffle remaining players display order so names are not in predictable order
  const shuffledPlayers = useMemo(() => {
    const list = [...remainingPlayers];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [remainingPlayers]);

  const handlePlayerClick = (playerName) => {
    playSelect();
    onSelectPlayer(playerName);
  };

  return (
    <div className="selection-screen animate-fade-in">
      {/* Progress Indicator */}
      <div className="progress-card">
        <div className="progress-info-row">
          <span className="progress-title">Word Distribution</span>
          <span className="progress-stat">
            {completedCount} of {totalPlayersCount} completed
          </span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${(completedCount / totalPlayersCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Prompt */}
      <div className="selection-header">
        <div className="phone-pass-icon-badge">
          <span>📱</span>
        </div>
        <h2 className="selection-title">WHO IS HOLDING THE PHONE?</h2>
        <p className="selection-subtitle">
          Tap your name to reveal your secret word. Make sure nobody else is looking!
        </p>
      </div>

      {/* Remaining Player Touch Buttons */}
      <div className="remaining-players-grid">
        {shuffledPlayers.map((name) => (
          <button
            key={name}
            type="button"
            className="player-select-btn animate-scale-in"
            onClick={() => handlePlayerClick(name)}
          >
            <div className="player-btn-avatar">
              <span>{name.charAt(0).toUpperCase()}</span>
            </div>
            <span className="player-btn-name">{name}</span>
            <span className="player-btn-arrow">➔</span>
          </button>
        ))}
      </div>

      {/* Privacy Reminder */}
      <div className="privacy-pill">
        <span className="lock-icon">🔒</span>
        <span>Only look at the screen when you hold the phone!</span>
      </div>
    </div>
  );
}
