import capitalize from '../src/capitalize';

describe('capitalize', () => {
  test('the input should be capitalized', () => {
    expect(capitalize('jest')).toBe('Jest');
  });

  test('one character input should be capitalized', () => {
    expect(capitalize('j')).toBe('J');
  });

  test('it should return an empty string if the input is empty', () => {
    expect(capitalize('')).toBe('');
  })

  test('it should return undefined if the input is not a string', () => {
    expect(capitalize(1)).toBe(undefined);
  })
})