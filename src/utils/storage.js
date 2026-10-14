/**
 * Local storage manager for caching game settings and previous player lists.
 */

const STORAGE_KEY_PLAYERS = 'party_app_saved_players';
const STORAGE_KEY_PLAYER_COUNT = 'party_app_player_count';

export const DEFAULT_PLAYER_SUGGESTIONS = [
  'Samarth',
  'Jia',
  'Bharat',
  'Shreeram',
  'Janu',
  'Aarav',
  'Ananya',
  'Rohan',
  'Diya',
  'Kabir',
  'Meera',
  'Arjun'
];

export function getSavedPlayerCount(defaultCount = 5) {
  if (typeof window === 'undefined') return defaultCount;
  try {
    const val = localStorage.getItem(STORAGE_KEY_PLAYER_COUNT);
    if (val) {
      const parsed = parseInt(val, 10);
      if (parsed >= 3 && parsed <= 12) return parsed;
    }
  } catch {
    // Ignore
  }
  return defaultCount;
}

export function savePlayerCount(count) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_PLAYER_COUNT, String(count));
  } catch {
    // Ignore
  }
}

export function getSavedPlayers(targetCount = 5) {
  if (typeof window === 'undefined') {
    return DEFAULT_PLAYER_SUGGESTIONS.slice(0, targetCount);
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY_PLAYERS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Return or adjust to target count
        if (parsed.length >= targetCount) {
          return parsed.slice(0, targetCount);
        }
        // If saved list has fewer than target count, pad with defaults
        const existingSet = new Set(parsed.map((p) => p.toLowerCase()));
        const additional = DEFAULT_PLAYER_SUGGESTIONS.filter((p) => !existingSet.has(p.toLowerCase()));
        return [...parsed, ...additional].slice(0, targetCount);
      }
    }
  } catch {
    // Ignore
  }

  return DEFAULT_PLAYER_SUGGESTIONS.slice(0, targetCount);
}

export function savePlayers(players) {
  if (typeof window === 'undefined' || !Array.isArray(players)) return;
  try {
    localStorage.setItem(STORAGE_KEY_PLAYERS, JSON.stringify(players));
  } catch {
    // Ignore
  }
}
