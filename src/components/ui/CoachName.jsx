export default function CoachName({ firstName, lastName, variant = 'full' }) {
  switch (variant) {
    case 'first':
      return <span>{firstName}</span>;
    case 'last':
      return <span>{lastName}</span>;
    case 'full':
    default:
      return <span>{firstName} {lastName}</span>;
  }
}