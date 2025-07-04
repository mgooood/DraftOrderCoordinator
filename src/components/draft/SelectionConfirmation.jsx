export default function SelectionConfirmation({ selectedPosition, onSubmit, isSubmitting }) {
  if (!selectedPosition) return null;

  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '2rem 0', 
      padding: '1.5rem', 
      background: 'var(--bg-secondary)', 
      borderRadius: '12px', 
      border: '1px solid var(--border)' 
    }}>
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