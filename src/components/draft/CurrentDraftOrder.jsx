import {
  LAST_SEASON_STANDINGS,
  AVAILABLE_POSITIONS,
} from '../../data/mockData';

export default function CurrentDraftOrder() {
  const selections = JSON.parse(
    localStorage.getItem('draftSelections') || '{}'
  );

  // Create a map of selectedPosition -> coach for quick lookup
  const positionToCoach = {};
  Object.values(selections).forEach((selection) => {
    const coach = LAST_SEASON_STANDINGS.find(
      (c) => c.rank === selection.coachId
    );
    if (coach) {
      positionToCoach[selection.selectedPosition] = coach;
    }
  });

  return (
    <div
      style={{
        margin: '2rem 0',
        padding: '1.5rem',
        background: 'var(--bg-secondary)',
        borderRadius: '12px',
        border: '1px solid var(--border)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: 'var(--accent)',
          fontSize: '1.3rem',
          fontWeight: '600',
        }}
      >
        🏈 Current Draft Order
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '0.75rem',
        }}
      >
        {AVAILABLE_POSITIONS.map((position) => {
          const coach = positionToCoach[position];

          if (coach) {
            // Show selected coach
            return (
              <div
                key={position}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: 'var(--bg-card)',
                  borderRadius: '8px',
                  border: '1px solid var(--success)',
                }}
              >
                <div
                  style={{
                    minWidth: '2rem',
                    height: '2rem',
                    background: 'var(--success)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginRight: '0.75rem',
                  }}
                >
                  {position}
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    {coach.name}
                  </div>
                  <div
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.8rem',
                    }}
                  >
                    {coach.team}
                  </div>
                </div>
              </div>
            );
          } else {
            // Show skeleton placeholder
            return (
              <div
                key={position}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: 'var(--bg-card)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  opacity: 0.6,
                }}
              >
                <div
                  style={{
                    minWidth: '2rem',
                    height: '2rem',
                    background: 'var(--border)',
                    color: 'var(--text-secondary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginRight: '0.75rem',
                  }}
                >
                  {position}
                </div>
                <div>
                  <div
                    style={{
                      height: '1rem',
                      width: '120px',
                      background: 'var(--border)',
                      borderRadius: '4px',
                      marginBottom: '0.25rem',
                    }}
                  ></div>
                  <div
                    style={{
                      height: '0.8rem',
                      width: '80px',
                      background: 'var(--border)',
                      borderRadius: '4px',
                    }}
                  ></div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
