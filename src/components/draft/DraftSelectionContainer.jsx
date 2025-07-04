import DraftPositionSelector from './DraftPositionSelector';
import SelectionConfirmation from './SelectionConfirmation';

export default function DraftSelectionContainer({
  selectedPosition,
  onPositionSelect,
  onSubmit,
  isSubmitting,
  disabled,
  takenPositions
}) {
  return (
    <div className="draft-selection-container">
      <DraftPositionSelector
        selectedPosition={selectedPosition}
        onPositionSelect={onPositionSelect}
        disabled={disabled}
        takenPositions={takenPositions}
      />
      
      {/* Confirmation appears at bottom - no layout shift */}
      <SelectionConfirmation
        selectedPosition={selectedPosition}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}