export default function SelectionConfirmation({ selectedPosition, onSubmit, isSubmitting }) {
  if (!selectedPosition) return null;

  return (
    <div className="selection-confirmation">
      <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
        🎯 You selected position <strong style={{color: 'var(--accent)'}}>#{selectedPosition}</strong>
      </p>
      <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem'}}>
        Confirm your draft position selection
      </p>
      <button
        className="btn btn-primary"
        onClick={onSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? '⏳ Locking In...' : '🔒 Lock In My Position'}
      </button>
    </div>
  );
}