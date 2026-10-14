import React from 'react';
import Button from './Button';

export default function GameCard({ game, onSelect }) {
  const isActive = game.status === 'active';

  return (
    <div className={`game-card ${isActive ? 'game-card-active' : 'game-card-disabled'}`}>
      <div className="game-card-glow-bg" />
      
      <div className="game-card-header">
        <div className="game-card-icon-container">
          <span className="game-card-icon">{game.icon}</span>
        </div>
        <div className="game-card-badges">
          {game.badge && (
            <span className={`badge ${isActive ? 'badge-active' : 'badge-soon'}`}>
              {game.badge}
            </span>
          )}
          {isActive && (
            <span className="badge badge-players">
              👥 {game.minPlayers}-{game.maxPlayers} Players
            </span>
          )}
        </div>
      </div>

      <div className="game-card-body">
        <h2 className="game-card-title">{game.title}</h2>
        <p className="game-card-desc">{game.description}</p>
      </div>

      <div className="game-card-footer">
        {isActive ? (
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => onSelect(game.id)}
            icon={<span className="btn-play-icon">▶</span>}
          >
            PLAY
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="md"
            fullWidth
            disabled
            className="btn-coming-soon"
          >
            Coming Soon
          </Button>
        )}
      </div>
    </div>
  );
}
