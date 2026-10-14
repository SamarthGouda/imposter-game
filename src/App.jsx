import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import { getGameById } from './games/registry';

export default function App() {
  const [activeGameId, setActiveGameId] = useState(null);

  const activeGame = activeGameId ? getGameById(activeGameId) : null;
  const ActiveGameComponent = activeGame?.component;

  const handleSelectGame = (gameId) => {
    setActiveGameId(gameId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveGameId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {activeGame && ActiveGameComponent ? (
        <ActiveGameComponent onBackToHome={handleBackToHome} />
      ) : (
        <HomeScreen onSelectGame={handleSelectGame} />
      )}
    </div>
  );
}
