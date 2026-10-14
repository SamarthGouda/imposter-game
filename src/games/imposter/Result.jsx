import React, { useEffect } from 'react';
import Button from '../../components/Button';
import { triggerConfetti } from '../../utils/confetti';
import { playVictory } from '../../utils/sound';

export default function Result({
  imposterPlayer,
  votedSuspect,
  normalWord,
  imposterWord,
  players,
  onPlayAgainSamePlayers,
  onChangePlayers,
  onBackToHome
}) {
  const isVotedCorrectly = votedSuspect === imposterPlayer;

  useEffect(() => {
    // Trigger celebration sound & confetti
    playVictory();
    triggerConfetti();
  }, []);

  return (
    <div className="result-screen animate-fade-in">
      {/* Imposter Reveal Hero */}
      <div className="result-hero-card animate-pop-in">
        <div className="imposter-badge-icon">🕵️</div>
        <p className="result-hero-pretitle">THE IMPOSTER WAS</p>
        <h1 className="imposter-name-spotlight">{imposterPlayer.toUpperCase()}</h1>

        {/* Voting Outcome Badge */}
        <div className={`vote-outcome-pill ${isVotedCorrectly ? 'vote-correct' : 'vote-wrong'}`}>
          {isVotedCorrectly ? (
            <span>🎯 The group caught the Imposter! (Voted for {votedSuspect})</span>
          ) : (
            <span>😈 The Imposter fooled the room! (Group voted for {votedSuspect})</span>
          )}
        </div>
      </div>

      {/* Secret Words Reveal Grid */}
      <div className="words-reveal-grid">
        <div className="word-card word-card-normal">
          <div className="word-card-label">
            <span className="dot dot-blue" />
            <span>Normal Word</span>
          </div>
          <h2 className="word-revealed-text">{normalWord}</h2>
          <span className="word-desc">Given to {players.length - 1} players</span>
        </div>

        <div className="word-card word-card-imposter">
          <div className="word-card-label">
            <span className="dot dot-red" />
            <span>Imposter Word</span>
          </div>
          <h2 className="word-revealed-text">{imposterWord}</h2>
          <span className="word-desc">Given to {imposterPlayer}</span>
        </div>
      </div>

      {/* Complete Players Breakdown */}
      <div className="roster-breakdown-card">
        <h3 className="roster-title">Player Breakdown</h3>
        <div className="roster-list">
          {players.map((name) => {
            const isImposter = name === imposterPlayer;
            const wasVoted = name === votedSuspect;

            return (
              <div
                key={name}
                className={`roster-row ${isImposter ? 'roster-row-imposter' : 'roster-row-normal'}`}
              >
                <div className="roster-left">
                  <span className="roster-role-emoji">
                    {isImposter ? '🕵️' : '👤'}
                  </span>
                  <span className="roster-player-name">{name}</span>
                  {wasVoted && (
                    <span className="roster-voted-badge">Group Vote</span>
                  )}
                </div>
                <div className="roster-right">
                  {isImposter ? (
                    <span className="role-tag role-tag-imposter">🔴 Imposter</span>
                  ) : (
                    <span className="role-tag role-tag-normal">🔵 Normal</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Game Actions */}
      <div className="result-actions">
        <Button
          variant="primary"
          size="xl"
          fullWidth
          onClick={onPlayAgainSamePlayers}
          icon={<span>🔄</span>}
        >
          PLAY AGAIN (Same Players)
        </Button>

        <div className="result-secondary-actions">
          <Button
            variant="secondary"
            size="md"
            fullWidth
            onClick={onChangePlayers}
            icon={<span>👥</span>}
          >
            Change Players / Count
          </Button>

          <Button
            variant="ghost"
            size="md"
            fullWidth
            onClick={onBackToHome}
            icon={<span>🎮</span>}
          >
            All Party Games
          </Button>
        </div>
      </div>
    </div>
  );
}
