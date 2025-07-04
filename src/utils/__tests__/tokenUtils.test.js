import { getTokenFromUrl, validateToken } from '../tokenUtils';

// Mock the data module to control test data
vi.mock('../../data/mockData', () => ({
  LAST_SEASON_STANDINGS: [
    { rank: 1, firstName: 'Test', lastName: 'Coach1', token: 'coach-1-token' },
    { rank: 2, firstName: 'Test', lastName: 'Coach2', token: 'coach-2-token' },
    { rank: 3, firstName: 'Test', lastName: 'Coach3', token: 'coach-3-token' }
  ]
}));

// Mock window.location
const mockLocation = (search) => {
  Object.defineProperty(window, 'location', {
    value: { search },
    writable: true
  });
};

describe('getTokenFromUrl', () => {
  test('extracts token from URL', () => {
    mockLocation('?token=abc123');
    
    expect(getTokenFromUrl()).toBe('abc123');
  });

  test('returns null when no token', () => {
    mockLocation('');
    
    expect(getTokenFromUrl()).toBeNull();
  });

  test('ignores other parameters', () => {
    mockLocation('?foo=bar&token=xyz789&baz=qux');
    
    expect(getTokenFromUrl()).toBe('xyz789');
  });
});

describe('validateToken', () => {
  test('returns coach data for valid token', () => {
    const result = validateToken('coach-2-token');
    
    expect(result).toEqual({ coachId: 2 });
  });

  test('returns null for invalid token', () => {
    const result = validateToken('invalid-token');
    
    expect(result).toBeNull();
  });

  test('returns null for falsy values', () => {
    expect(validateToken(null)).toBeNull();
    expect(validateToken(undefined)).toBeNull();
    expect(validateToken('')).toBeNull();
  });
});