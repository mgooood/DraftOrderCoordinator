import Container from '../layout/Container';
import Header from '../layout/Header';
import CoachInfo from '../coach/CoachInfo';
import LastSeasonStandings from '../standings/LastSeasonStandings';

export default function SuccessScreen({ coach, standings, onReset }) {
  return (
    <Container>
      <Header title="🏆 Draft Position Locked In!" />
      <div className="status success">
        <h2>You've claimed position #{coach.selectedPosition}</h2>
        <p>
          Your draft selection has been saved. Time to start planning your championship run! 🚀
        </p>
      </div>
      <CoachInfo coach={coach} />
      <LastSeasonStandings standings={standings} />
      <button className="btn btn-primary" onClick={onReset}>
        🔄 Reset Selection (Dev Mode)
      </button>
    </Container>
  );
}