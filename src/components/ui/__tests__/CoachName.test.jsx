import { render, screen } from '@testing-library/react';
import CoachName from '../CoachName';

describe('CoachName', () => {
  test('renders full name by default', () => {
    render(<CoachName firstName="Sarah" lastName="Chen" />);
    
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
  });

  test('renders full name with explicit variant', () => {
    render(<CoachName firstName="Mike" lastName="Martinez" variant="full" />);
    
    expect(screen.getByText('Mike Martinez')).toBeInTheDocument();
  });

  test('renders first name only', () => {
    render(<CoachName firstName="Jessica" lastName="Johnson" variant="first" />);
    
    expect(screen.getByText('Jessica')).toBeInTheDocument();
    expect(screen.queryByText('Johnson')).not.toBeInTheDocument();
  });

  test('renders last name only', () => {
    render(<CoachName firstName="Tommy" lastName="Thompson" variant="last" />);
    
    expect(screen.getByText('Thompson')).toBeInTheDocument();
    expect(screen.queryByText('Tommy')).not.toBeInTheDocument();
  });

  test('handles empty names gracefully', () => {
    render(<CoachName firstName="" lastName="" />);
    
    expect(screen.getByText(' ')).toBeInTheDocument(); // Space between empty strings
  });

  test('handles single name', () => {
    render(<CoachName firstName="Madonna" lastName="" />);
    
    expect(screen.getByText('Madonna ')).toBeInTheDocument();
  });
});