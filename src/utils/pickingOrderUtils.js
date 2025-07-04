import { LAST_SEASON_STANDINGS } from '../data/mockData';

export const getCurrentPickingCoach = () => {
  const selections = JSON.parse(localStorage.getItem('draftSelections') || '{}');
  
  // Sort coaches by their pick order (1st to pick, 2nd to pick, etc.)
  const sortedCoaches = [...LAST_SEASON_STANDINGS].sort((a, b) => a.pickOrder - b.pickOrder);
  
  // Find first coach in pick order who hasn't selected yet
  for (const coach of sortedCoaches) {
    if (!selections[coach.rank]) {
      return coach;
    }
  }
  
  // All coaches have picked
  return null;
};