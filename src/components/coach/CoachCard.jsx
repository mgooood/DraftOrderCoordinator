export default function CoachCard({ coach }) {
  const getCardClass = () => {
    let classes = 'coach-card';
    if (coach.rank === 1) classes += ' champion';
    else if (coach.rank === 2) classes += ' runner-up';
    else if (coach.rank === 3) classes += ' third';
    if (coach.isCurrentUser) classes += ' current-user';
    return classes;
  };

  return (
    <div className={getCardClass()}>
      {coach.rank <= 3 && (
        <div className="medal">
          {coach.rank === 1 ? '🥇' : coach.rank === 2 ? '🥈' : '🥉'}
        </div>
      )}
      <div className="coach-rank">#{coach.rank}</div>
      <div className="coach-name">{coach.name}</div>
      <div className="team-name">{coach.team}</div>
      {coach.isCurrentUser && (
        <div style={{marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--accent)'}}>
          👈 That's you!
        </div>
      )}
    </div>
  );
}