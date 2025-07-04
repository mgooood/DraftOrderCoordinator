import CoachCard from '../coach/CoachCard';

export default function LastSeasonStandings({ standings }) {
  return (
    <div className="last-season-standings">
      <div className="standings-title">🏆 Last Season Final Standings</div>
      <div className="standings-grid">
        {standings.slice(0, 6).map((coach) => (
          <CoachCard key={coach.rank} coach={coach} />
        ))}
      </div>
      <div style={{textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
        ...and 6 more coaches fighting for redemption 😤
      </div>
    </div>
  );
}