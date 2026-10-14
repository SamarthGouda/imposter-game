import React from 'react';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import { GAMES_REGISTRY } from '../games/registry';

export default function HomeScreen({ onSelectGame }) {
  const homeRules = {
    title: 'Party Games Hub',
    content: (
      <div>
        <p>Welcome to <strong>Party Games</strong> — a pass-and-play social game collection designed for playing together in the same room on a single phone.</p>
        <p style={{ marginTop: '0.75rem' }}>Select any unlocked game, enter your players, and pass the phone around!</p>
      </div>
    )
  };

  return (
    <div className="home-screen animate-fade-in">
      <Header
        title="🎮 PARTY GAMES"
        subtitle="Choose a game and start playing"
        showBack={false}
        gameRules={homeRules}
      />

      <main className="home-main-content">
        <div className="home-banner">
          <div className="home-banner-tag">
            <span className="sparkle">✨</span>
            <span>Pass & Play on 1 Phone</span>
          </div>
          <h2 className="home-banner-headline">Gather Your Crew. Pass the Phone.</h2>
          <p className="home-banner-sub">
            Fast, zero-login social games built for party nights, family gatherings, and road trips.
          </p>
        </div>

        <section className="games-grid-section">
          <div className="section-header-row">
            <h3 className="section-title">Available & Upcoming Games</h3>
            <span className="game-count-chip">{GAMES_REGISTRY.length} Games</span>
          </div>

          <div className="games-grid">
            {GAMES_REGISTRY.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onSelect={onSelectGame}
              />
            ))}
          </div>
        </section>

        <footer className="home-footer">
          <div className="footer-credits">
            <span>🎮 Built for social party gatherings</span>
            <span className="footer-dot">•</span>
            <span>No ads, no accounts</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
