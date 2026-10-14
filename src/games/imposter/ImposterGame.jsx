import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import PlayerCountSetup from './PlayerCountSetup';
import PlayerNamesSetup from './PlayerNamesSetup';
import PlayerSelection from './PlayerSelection';
import SecretWord from './SecretWord';
import Discussion from './Discussion';
import Result from './Result';
import { getRandomWordPair } from '../../data/wordPairs';
import {
  getSavedPlayerCount,
  savePlayerCount,
  getSavedPlayers,
  savePlayers
} from '../../utils/storage';

// Game stages
const STAGE = {
  PLAYER_COUNT: 'PLAYER_COUNT',
  PLAYER_NAMES: 'PLAYER_NAMES',
  SELECTION: 'SELECTION',
  SECRET_WORD: 'SECRET_WORD',
  DISCUSSION: 'DISCUSSION',
  RESULT: 'RESULT'
};

export default function ImposterGame({ onBackToHome }) {
  // Setup state
  const [playerCount, setPlayerCount] = useState(() => getSavedPlayerCount(5));
  const [players, setPlayers] = useState(() => getSavedPlayers(5));
  const [stage, setStage] = useState(STAGE.PLAYER_COUNT);

  // Active game state
  const [activeWordPair, setActiveWordPair] = useState(null);
  const [imposterPlayer, setImposterPlayer] = useState(null);
  const [remainingPlayers, setRemainingPlayers] = useState([]);
  const [activeViewingPlayer, setActiveViewingPlayer] = useState(null);
  const [votedSuspect, setVotedSuspect] = useState(null);
  const [usedWordPairs, setUsedWordPairs] = useState([]);

  // Leave game confirmation modal
  const [showExitModal, setShowExitModal] = useState(false);

  // Update players list when playerCount changes
  const handleSetPlayerCount = (newCount) => {
    setPlayerCount(newCount);
    savePlayerCount(newCount);
    const updated = getSavedPlayers(newCount);
    setPlayers(updated);
  };

  // Start new round with current validated player list
  const startNewGame = (playerList = players) => {
    savePlayers(playerList);

    // Pick fresh word pair
    const wordPair = getRandomWordPair(usedWordPairs);
    setActiveWordPair(wordPair);
    setUsedWordPairs((prev) => [...prev.slice(-15), wordPair]);

    // Pick 1 random imposter
    const randomIndex = Math.floor(Math.random() * playerList.length);
    const pickedImposter = playerList[randomIndex];
    setImposterPlayer(pickedImposter);

    // Initialize remaining players list
    setRemainingPlayers([...playerList]);
    setActiveViewingPlayer(null);
    setVotedSuspect(null);
    setStage(STAGE.SELECTION);
  };

  // Player selected themselves from the remaining list
  const handleSelectPlayer = (playerName) => {
    setActiveViewingPlayer(playerName);
    setStage(STAGE.SECRET_WORD);
  };

  // Player finished looking at word and clicked "HIDE & PASS PHONE"
  const handleHideAndPass = () => {
    const updatedRemaining = remainingPlayers.filter((p) => p !== activeViewingPlayer);
    setRemainingPlayers(updatedRemaining);
    setActiveViewingPlayer(null);

    if (updatedRemaining.length === 0) {
      // Everyone has seen their word -> move to Discussion & Guessing
      setStage(STAGE.DISCUSSION);
    } else {
      // Pass to next player
      setStage(STAGE.SELECTION);
    }
  };

  // Group voted on a suspect and clicked Reveal Result
  const handleRevealResult = (suspect) => {
    setVotedSuspect(suspect);
    setStage(STAGE.RESULT);
  };

  // Play again with same players
  const handlePlayAgainSamePlayers = () => {
    startNewGame(players);
  };

  // Change players / count
  const handleChangePlayers = () => {
    setStage(STAGE.PLAYER_COUNT);
  };

  // Navigation back handler
  const handleBackRequest = () => {
    if (stage === STAGE.PLAYER_COUNT) {
      onBackToHome();
    } else if (stage === STAGE.PLAYER_NAMES) {
      setStage(STAGE.PLAYER_COUNT);
    } else if (stage === STAGE.RESULT) {
      onBackToHome();
    } else {
      // Game in progress, confirm exit
      setShowExitModal(true);
    }
  };

  // Get current player's secret word
  const getSecretWordForPlayer = (player) => {
    if (!activeWordPair || !imposterPlayer) return '';
    return player === imposterPlayer ? activeWordPair.imposter : activeWordPair.normal;
  };

  const gameRules = {
    title: 'Imposter Game Rules',
    content: (
      <div>
        <p><strong>Goal:</strong> Find the Imposter who received a different word, or if you are the Imposter, blend in without getting caught!</p>
        <ol style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', lineHeight: '1.6' }}>
          <li>Every player receives a secret word on this phone.</li>
          <li>Normal players receive the same word (e.g. <em>Coffee</em>).</li>
          <li>The Imposter receives a related word (e.g. <em>Tea</em>).</li>
          <li>Once everyone has their word, go around the group giving 1-word or short clues.</li>
          <li>Vote on who you think received the Imposter word!</li>
        </ol>
      </div>
    )
  };

  return (
    <div className="game-container">
      <Header
        title="🕵️ IMPOSTER"
        subtitle={
          stage === STAGE.PLAYER_COUNT
            ? 'Player Count Setup'
            : stage === STAGE.PLAYER_NAMES
            ? 'Player Names'
            : stage === STAGE.SELECTION
            ? 'Pass the Phone'
            : stage === STAGE.SECRET_WORD
            ? 'Secret Word'
            : stage === STAGE.DISCUSSION
            ? 'Discussion & Guess'
            : 'Result'
        }
        showBack={true}
        onBack={handleBackRequest}
        gameRules={gameRules}
      />

      <main className="game-main-content">
        {stage === STAGE.PLAYER_COUNT && (
          <PlayerCountSetup
            playerCount={playerCount}
            setPlayerCount={handleSetPlayerCount}
            onContinue={() => setStage(STAGE.PLAYER_NAMES)}
          />
        )}

        {stage === STAGE.PLAYER_NAMES && (
          <PlayerNamesSetup
            playerCount={playerCount}
            players={players}
            setPlayers={setPlayers}
            onBackToCount={() => setStage(STAGE.PLAYER_COUNT)}
            onStartGame={(validatedPlayers) => {
              setPlayers(validatedPlayers);
              startNewGame(validatedPlayers);
            }}
          />
        )}

        {stage === STAGE.SELECTION && (
          <PlayerSelection
            totalPlayersCount={players.length}
            remainingPlayers={remainingPlayers}
            onSelectPlayer={handleSelectPlayer}
          />
        )}

        {stage === STAGE.SECRET_WORD && activeViewingPlayer && (
          <SecretWord
            playerName={activeViewingPlayer}
            secretWord={getSecretWordForPlayer(activeViewingPlayer)}
            onHideAndPass={handleHideAndPass}
          />
        )}

        {stage === STAGE.DISCUSSION && (
          <Discussion
            players={players}
            onRevealResult={handleRevealResult}
          />
        )}

        {stage === STAGE.RESULT && activeWordPair && imposterPlayer && (
          <Result
            imposterPlayer={imposterPlayer}
            votedSuspect={votedSuspect}
            normalWord={activeWordPair.normal}
            imposterWord={activeWordPair.imposter}
            players={players}
            onPlayAgainSamePlayers={handlePlayAgainSamePlayers}
            onChangePlayers={handleChangePlayers}
            onBackToHome={onBackToHome}
          />
        )}
      </main>

      {/* Leave Game Confirmation Modal */}
      <Modal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        title="Leave Current Game?"
      >
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
          Are you sure you want to leave? Your current game and secret word distribution will be lost.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
          <Button
            variant="ghost"
            size="md"
            onClick={() => setShowExitModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            size="md"
            onClick={() => {
              setShowExitModal(false);
              onBackToHome();
            }}
          >
            Exit Game
          </Button>
        </div>
      </Modal>
    </div>
  );
}
