import PositionButton from './PositionButton';
import { AVAILABLE_POSITIONS } from '../../data/mockData';

export default function DraftPositionSelector({ selectedPosition, onPositionSelect, disabled, takenPositions = [] }) {
  return (
    <>
      <div style={{textAlign: 'center', margin: '2rem 0'}}>
        <h2 style={{color: 'var(--accent)', marginBottom: '1rem'}}>Choose Your Draft Position</h2>
        <p style={{color: 'var(--text-secondary)'}}>Select wisely - this determines your entire draft strategy! 🧠</p>
      </div>

      <div className="draft-positions">
        {AVAILABLE_POSITIONS.map((position) => (
          <PositionButton
            key={position}
            position={position}
            isSelected={selectedPosition === position}
            onSelect={onPositionSelect}
            disabled={disabled || takenPositions.includes(position)}
            isTaken={takenPositions.includes(position)}
          />
        ))}
      </div>
    </>
  );
}