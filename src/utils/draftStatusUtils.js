import { LAST_SEASON_STANDINGS } from '../data/mockData';

export const getDraftStatus = () => {
  const draftStarted = localStorage.getItem('draftStarted') === 'true';
  const selections = JSON.parse(localStorage.getItem('draftSelections') || '{}');
  const hasSelections = Object.keys(selections).length > 0;
  const totalCoaches = LAST_SEASON_STANDINGS.length;
  
  if (!draftStarted && !hasSelections) {
    return 'NOT_STARTED';
  }
  
  if (hasSelections && Object.keys(selections).length === totalCoaches) {
    return 'COMPLETED';
  }
  
  return 'IN_PROGRESS';
};

export const startDraft = () => {
  localStorage.setItem('draftStarted', 'true');
};