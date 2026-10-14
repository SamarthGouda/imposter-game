import ImposterGame from './imposter/ImposterGame';

/**
 * Registry of party games.
 * To add a new game:
 * 1. Create a folder in src/games/<gameName>/
 * 2. Export a React component representing the game
 * 3. Add an entry to this registry with status: 'active'
 */
export const GAMES_REGISTRY = [
  {
    id: 'imposter',
    title: '🕵️ Imposter',
    tagline: 'Find the player who received the different word.',
    description: 'Everyone gets a secret word. One player gets a different but related word. Find the Imposter!',
    icon: '🕵️',
    badge: 'Popular',
    status: 'active',
    minPlayers: 3,
    maxPlayers: 12,
    component: ImposterGame
  },
  {
    id: 'game-2',
    title: '🎭 Game 2',
    tagline: 'Undercover party mystery.',
    description: 'A social deduction game of secret agents, codewords, and deception.',
    icon: '🎭',
    badge: 'Coming Soon',
    status: 'disabled',
    minPlayers: 3,
    maxPlayers: 10,
    component: null
  },
  {
    id: 'game-3',
    title: '⚡ Game 3',
    tagline: 'Rapid-fire party challenge.',
    description: 'High-speed challenges and quick questions for high-energy party crowds.',
    icon: '⚡',
    badge: 'Coming Soon',
    status: 'disabled',
    minPlayers: 2,
    maxPlayers: 12,
    component: null
  },
  {
    id: 'game-4',
    title: '🎲 Game 4',
    tagline: 'Dice rolls and chaotic turns.',
    description: 'Roll dice, execute wild penalties, and race to the finish line.',
    icon: '🎲',
    badge: 'Coming Soon',
    status: 'disabled',
    minPlayers: 2,
    maxPlayers: 8,
    component: null
  }
];

export function getGameById(id) {
  return GAMES_REGISTRY.find((g) => g.id === id) || null;
}
