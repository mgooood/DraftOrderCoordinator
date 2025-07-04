export const getTokenFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('token');
};

import { LAST_SEASON_STANDINGS } from '../data/mockData';

export const validateToken = (token) => {
  if (!token) return null;
  
  // Find coach by token
  const coach = LAST_SEASON_STANDINGS.find(c => c.token === token);
  
  if (coach) {
    return {
      coachId: coach.rank,
      name: coach.name,
      team: coach.team
    };
  }
  
  return null;
};