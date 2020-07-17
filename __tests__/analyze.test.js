import analyze from '../src/analyze';

describe('analyze', () => {
  test('should return undefine if the input is not array', () => {
    expect(analyze(5)).toBe(undefined);
  });
  test('should return undefined if the array is empty', () => {
    expect(analyze([])).toBe(undefined);
  });
  test('should return undefined if any element of the array is not a number', () => {
    expect(analyze([1, 'a'])).toBe(undefined);
  });
  describe('Checking the elements of the return object', () => {
    const result = analyze([1, 8, 3, 4, 2, 6]);
    test('should return the correct average', () => {
      expect(result.average).toBe(4);
    });
    test('should return the correct minimum', () => {
      expect(result.min).toBe(1);
    });
    test('should return the correct maxiumum', () => {
      expect(result.max).toBe(8);
    });
    test('should return the correct length', () => {
      expect(result.length).toBe(6);
    });
  });
});
