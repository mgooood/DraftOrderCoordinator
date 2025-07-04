import { getDraftStatus } from '../../utils/draftStatusUtils';
import CoachName from './CoachName';

export default function CurrentPicker({ currentCoach }) {
  const draftStatus = getDraftStatus();

  if (draftStatus === 'NOT_STARTED') {
    return (
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
        <h2 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          📫 Draft Position Selection Not Started
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The commissioner will send out email with links to coaches when it's
          time for them to make their draft order selection.
          <br />
          Check back here to see progress as coaches make their selections.
        </p>
      </div>
    );
  }

  if (draftStatus === 'COMPLETED') {
    return (
      <div
        style={{
          textAlign: 'center',
          margin: '2rem 0',
          padding: '1.5rem',
          background: 'var(--success-bg)',
          borderRadius: '12px',
          border: '1px solid var(--success)',
        }}
      >
        <h2 style={{ color: 'var(--success)', marginBottom: '1rem' }}>
          🎉 All Draft Positions Selected!
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The draft order is complete. Time to start preparing for draft day!
        </p>
      </div>
    );
  }

  // In progress - show current picker
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '2rem 0',
        padding: '1.5rem',
        background: 'var(--bg-secondary)',
        borderRadius: '12px',
        border: '1px solid var(--accent)',
        boxShadow: '0 0 15px rgba(0,212,170,0.3)',
      }}
    >
      <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
        🎯 Now Selecting Draft Position
      </h2>
      <div
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
        }}
      >
        <CoachName firstName={currentCoach.firstName} lastName={currentCoach.lastName} />
      </div>
      <div
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          marginBottom: '0.5rem',
        }}
      >
        "{currentCoach.team}"
      </div>
      <div
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.8rem',
        }}
      >
        Last Season: #{currentCoach.rank} • Priority Pick Selection
      </div>
    </div>
  );
}
