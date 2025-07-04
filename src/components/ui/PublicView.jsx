import Container from '../layout/Container';
import Header from '../layout/Header';
import LastSeasonStandings from '../standings/LastSeasonStandings';
import CurrentPicker from './CurrentPicker';
import CurrentDraftOrder from '../draft/CurrentDraftOrder';
import { getCurrentPickingCoach } from '../../utils/pickingOrderUtils';

export default function PublicView({ standings }) {
  const currentPickingCoach = getCurrentPickingCoach();

  return (
    <Container>
      <Header title='🏈 Draft Order Coordinator' />

      <div
        style={{
          textAlign: 'center',
          margin: '2rem 0',
          padding: '1.5rem',
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--border)',
        }}
      >
        <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
          Welcome to the Draft Order Selection
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Coaches will receive personalized links to select their draft
          positions.
          <br />
          Check back here to see the current draft order as selections are made.
        </p>
      </div>

      <CurrentPicker currentCoach={currentPickingCoach} />
      <CurrentDraftOrder />
      <LastSeasonStandings standings={standings} />
    </Container>
  );
}
