import capitalize from '../src/capitalize';

describe('capitalize', () => {
  test('should return the input capitalized', () => {
    expect(capitalize('jest')).toBe('Jest');
  });

  test('should be capitalized with one character input', () => {
    expect(capitalize('j')).toBe('J');
  });

  test('should return an empty string if the input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('should return undefined if the input is not a string', () => {
    expect(capitalize(1)).toBe(undefined);
  });

  test('should return the input if the input first char is a number or a symbol', () => {
    expect(capitalize('1jest')).toBe('1jest');
    expect(capitalize('%jest')).toBe('%jest');
  });
});