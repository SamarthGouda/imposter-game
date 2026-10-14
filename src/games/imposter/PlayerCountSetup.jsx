import React from 'react';
import Button from '../../components/Button';
import { playClick, playSelect } from '../../utils/sound';

export default function PlayerCountSetup({
  playerCount,
  setPlayerCount,
  onContinue
}) {
  const min = 3;
  const max = 12;

  const handleDecrement = () => {
    if (playerCount > min) {
      playClick();
      setPlayerCount(playerCount - 1);
    }
  };

  const handleIncrement = () => {
    if (playerCount < max) {
      playClick();
      setPlayerCount(playerCount + 1);
    }
  };

  const handleQuickSelect = (count) => {
    playSelect();
    setPlayerCount(count);
  };

  return (
    <div className="setup-card animate-fade-in">
      <div className="setup-badge">
        <span>Step 1 of 2</span>
      </div>

      <h2 className="setup-title">How many players are playing?</h2>
      <p className="setup-subtitle">
        Enter the number of people in the room passing the phone (3 to 12 players).
      </p>

      {/* Big Counter Stepper */}
      <div className="player-stepper-box">
        <button
          type="button"
          className="stepper-btn"
          onClick={handleDecrement}
          disabled={playerCount <= min}
          aria-label="Decrease player count"
        >
          −
        </button>

        <div className="stepper-display">
          <span className="stepper-number">{playerCount}</span>
          <span className="stepper-label">Players</span>
        </div>

        <button
          type="button"
          className="stepper-btn"
          onClick={handleIncrement}
          disabled={playerCount >= max}
          aria-label="Increase player count"
        >
          +
        </button>
      </div>

      {/* Quick Select Buttons */}
      <div className="quick-count-group">
        <span className="quick-count-label">Quick select:</span>
        <div className="quick-count-chips">
          {[3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
            <button
              key={num}
              type="button"
              className={`chip-btn ${playerCount === num ? 'chip-btn-active' : ''}`}
              onClick={() => handleQuickSelect(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Player Count Hint */}
      <div className="setup-hint-card">
        <div className="hint-icon">💡</div>
        <div className="hint-text">
          <strong>1 Imposter</strong> will be randomly chosen among the {playerCount} players.
          Everyone else will receive the normal secret word!
        </div>
      </div>

      {/* Next Step Button */}
      <div className="setup-actions">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={onContinue}
          icon={<span>➔</span>}
        >
          Enter {playerCount} Player Names
        </Button>
      </div>
    </div>
  );
}
