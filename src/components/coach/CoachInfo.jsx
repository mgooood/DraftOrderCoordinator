import CoachName from '../ui/CoachName';

export default function CoachInfo({ coach }) {
  return (
    <div className="coach-info">
      <strong><CoachName firstName={coach.firstName} lastName={coach.lastName} /></strong> - "{coach.team}"
      <br />
      Last Season Finish: #{coach.rank}
      <br />
      {coach.selectedPosition && (
        <>
          Draft Position: #{coach.selectedPosition}
          <br />
        </>
      )}
    </div>
  );
}