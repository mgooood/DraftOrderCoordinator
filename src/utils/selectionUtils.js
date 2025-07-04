export const getTakenPositions = () => {
  const selections = JSON.parse(localStorage.getItem('draftSelections') || '{}');
  return Object.values(selections).map(selection => selection.selectedPosition);
};