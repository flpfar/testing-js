import reverseString from '../src/reverse-string';

describe('reverseString', () => {
  test('should return the string reversed', () => {
    expect(reverseString('jest')).toBe('tsej');
  });

  test('should return the input when the input is one char length', () => {
    expect(reverseString('t')).toBe('t');
  });

  test('should return return an empty string if the input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  test('should return undefined if the input is not a string', () => {
    expect(reverseString(1)).toBe(undefined);
  });
});