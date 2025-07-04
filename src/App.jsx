import { useState, useEffect } from 'react';
import { LAST_SEASON_STANDINGS } from './data/mockData';
import { getTokenFromUrl, validateToken } from './utils/tokenUtils';
import { getTakenPositions } from './utils/selectionUtils';
import { startDraft } from './utils/draftStatusUtils';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import CoachInfo from './components/coach/CoachInfo';
import LastSeasonStandings from './components/standings/LastSeasonStandings';
import DraftSelectionContainer from './components/draft/DraftSelectionContainer';
// import SuccessScreen from './components/ui/SuccessScreen'; // No longer needed
import PublicView from './components/ui/PublicView';


function App() {
  const [coach, setCoach] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [standings, setStandings] = useState(LAST_SEASON_STANDINGS);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [takenPositions, setTakenPositions] = useState([]);

  useEffect(() => {
    const token = getTokenFromUrl();
    const tokenData = validateToken(token);
    
    // Always load taken positions
    setTakenPositions(getTakenPositions());
    
    if (tokenData) {
      // Find the coach from standings based on token data
      const authenticatedCoach = standings.find(c => c.rank === tokenData.coachId);
      if (authenticatedCoach) {
        // Check if this coach has already made a selection
        const selections = JSON.parse(localStorage.getItem('draftSelections') || '{}');
        const existingSelection = selections[authenticatedCoach.rank];
        
        if (existingSelection) {
          authenticatedCoach.hasSelected = true;
          authenticatedCoach.selectedPosition = existingSelection.selectedPosition;
        }
        
        setCoach(authenticatedCoach);
        setIsAuthenticated(true);
      }
    }
  }, [standings]);

  const handlePositionSelect = (position) => {
    if (!coach.hasSelected) {
      setSelectedPosition(position);
    }
  };

  const handleSubmit = async () => {
    if (!selectedPosition) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const updatedCoach = {
      ...coach,
      hasSelected: true,
      selectedPosition: selectedPosition,
    };

    // Store selection in localStorage (temporary persistence)
    const selections = JSON.parse(localStorage.getItem('draftSelections') || '{}');
    
    // Start draft if this is the first selection
    if (Object.keys(selections).length === 0) {
      startDraft();
    }
    
    selections[coach.rank] = {
      coachId: coach.rank,
      selectedPosition: selectedPosition,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('draftSelections', JSON.stringify(selections));

    setCoach(updatedCoach);
    // Update taken positions after selection
    setTakenPositions(getTakenPositions());
    setIsSubmitting(false);

    // TODO: In production, this should:
    // 1. Expire the current coach's token via API call
    // 2. Trigger email to next coach in pick order
    // 3. Update system state to track current picker
    // Note: Coach will now see SuccessScreen, then if they refresh/revisit
    // the token should be expired and they'll see public view
  };

  const resetSelection = () => {
    setCoach((prev) => ({
      ...prev,
      hasSelected: false,
      selectedPosition: null,
    }));
    setSelectedPosition(null);
  };

  // Public view for non-authenticated users OR coaches who have completed their selection
  if (!isAuthenticated || coach?.hasSelected) {
    return <PublicView standings={standings} />;
  }

  // Authenticated coach selection interface
  return (
    <Container>
      <Header title='🏈 Draft Order Coordinator' />
      <CoachInfo coach={coach} showPriority={true} />
      <DraftSelectionContainer
        selectedPosition={selectedPosition}
        onPositionSelect={handlePositionSelect}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        disabled={coach?.hasSelected}
        takenPositions={takenPositions}
      />
      <LastSeasonStandings standings={standings} />
    </Container>
  );
}

export default App;
