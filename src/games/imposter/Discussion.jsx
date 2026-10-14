import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { playClick, playSelect, playDrumroll } from '../../utils/sound';

export default function Discussion({
  players,
  onRevealResult
}) {
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [timerSeconds, setTimerSeconds] = useState(120); // 2 minutes default
  const [timerRunning, setTimerRunning] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let interval = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerSeconds]);

  const toggleTimer = () => {
    playClick();
    setTimerRunning(!timerRunning);
  };

  const resetTimer = () => {
    playClick();
    setTimerRunning(false);
    setTimerSeconds(120);
  };

  const formatTimer = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSelectSuspect = (name) => {
    playSelect();
    setSelectedSuspect(name);
    setError('');
  };

  const handleReveal = () => {
    if (!selectedSuspect) {
      setError('Please select who the group suspects as the Imposter before revealing!');
      return;
    }
    playDrumroll();
    onRevealResult(selectedSuspect);
  };

  return (
    <div className="discussion-screen animate-fade-in">
      <div className="discussion-hero">
        <span className="discussion-emoji animate-bounce">🎉</span>
        <h1 className="discussion-title">Everyone has their word!</h1>
        <p className="discussion-subtitle">
          Discuss with everyone, share subtle clues, and figure out who received the different word.
        </p>
      </div>

      {/* Discussion Rules & Tips */}
      <div className="party-tips-card">
        <div className="tip-header">
          <span>💡 Party Rule</span>
        </div>
        <p className="tip-body">
          Go in a circle and give a <strong>one-word clue</strong> or short sentence describing your secret word without being too obvious. The Imposter must blend in!
        </p>
      </div>

      {/* Optional Timer */}
      <div className="discussion-timer-box">
        <div className="timer-readout">
          <span className="timer-icon">⏱️</span>
          <span className="timer-value">{formatTimer(timerSeconds)}</span>
        </div>
        <div className="timer-controls">
          <button
            type="button"
            className="timer-btn"
            onClick={toggleTimer}
          >
            {timerRunning ? 'Pause' : 'Start Timer'}
          </button>
          <button
            type="button"
            className="timer-btn timer-btn-ghost"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Who is the imposter voting */}
      <div className="voting-section">
        <div className="voting-header">
          <h2 className="voting-title">Who do you think is the Imposter?</h2>
          <p className="voting-subtitle">Select the group's prime suspect:</p>
        </div>

        {error && (
          <div className="error-banner animate-shake" role="alert">
            <span>⚠️ {error}</span>
          </div>
        )}

        <div className="suspects-grid">
          {players.map((name) => {
            const isSelected = selectedSuspect === name;
            return (
              <button
                key={name}
                type="button"
                className={`suspect-card ${isSelected ? 'suspect-card-selected' : ''}`}
                onClick={() => handleSelectSuspect(name)}
              >
                <div className="suspect-avatar">
                  {isSelected ? '🎯' : name.charAt(0).toUpperCase()}
                </div>
                <span className="suspect-name">{name}</span>
                {isSelected && <span className="suspect-check">VOTED</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reveal Button */}
      <div className="reveal-actions">
        <Button
          variant="danger"
          size="xl"
          fullWidth
          onClick={handleReveal}
          icon={<span>🕵️</span>}
        >
          REVEAL RESULT
        </Button>
      </div>
    </div>
  );
}
