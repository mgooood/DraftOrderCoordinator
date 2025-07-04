export default function CoachInfo({ coach, showPriority = false }) {
  return (
    <div className="coach-info">
      <strong>{coach.name}</strong> - "{coach.team}"
      <br />
      Last Season Finish: #{coach.rank} {showPriority ? '📊' : ''}
      <br />
      {coach.selectedPosition && (
        <>
          Draft Position: #{coach.selectedPosition}
          <br />
          <small>Next pick will be #{24 - coach.selectedPosition} (Round 2)</small>
        </>
      )}
      {showPriority && (
        <span style={{color: 'var(--accent)', fontWeight: 'bold'}}>
          You get priority pick selection! 🎯
        </span>
      )}
    </div>
  );
}