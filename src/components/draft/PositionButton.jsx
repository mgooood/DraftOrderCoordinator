export default function PositionButton({ position, isSelected, onSelect, disabled, isTaken = false }) {
  const getButtonClass = () => {
    let classes = 'position-btn';
    if (isSelected) classes += ' selected';
    if (isTaken) classes += ' taken';
    return classes;
  };

  const getTitle = () => {
    if (isTaken) return `Position ${position} - Already taken by another coach`;
    return `Draft Position ${position}`;
  };

  return (
    <button
      className={getButtonClass()}
      onClick={() => onSelect(position)}
      disabled={disabled}
      title={getTitle()}
    >
      #{position}
      <div style={{fontSize: '0.7rem', opacity: 0.8, marginTop: '0.2rem'}}>
        {isTaken ? 'TAKEN' : 'PICK'}
      </div>
    </button>
  );
}