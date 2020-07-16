import calculator from '../src/calculator';

const { add, subtract, multiply, divide } = calculator;

describe('calculator', () => {
  describe('add', () => {
    test('should return the sum of two integer numbers', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('should return the sum of two decimal numbers', () => {
      expect(add(1.4, 2)).toBe(3.4);
    });

    test('should return undefined if the inputs are not numbers', () => {
      expect(add('1', {})).toBe(undefined);
    });
  });

  describe('subtract', () => {
    test('should return the subtraction of two integer numbers', () => {
      expect(subtract(5, 2)).toBe(3);
    });

    test('should return the subtraction of two decimal numbers', () => {
      expect(subtract(5.4, 2)).toBeCloseTo(3.4);
    });

    test('should return undefined if the inputs are not numbers', () => {
      expect(subtract('1', {})).toBe(undefined);
    });
  });

  describe('multiply', () => {
    test('should return the multiplication of two integer numbers', () => {
      expect(multiply(5, 2)).toBe(10);
    });

    test('should return the multiplication of two decimal numbers', () => {
      expect(multiply(1.4, 2)).toBeCloseTo(2.8);
    });

    test('should return zero if one of the inputs are zero', () => {
      expect(multiply(0, 4)).toBe(0);
    });

    test('should return undefined if the inputs are not numbers', () => {
      expect(multiply('1', {})).toBe(undefined);
    });
  });

  describe('divide', () => {
    test('should return the division of two integer numbers', () => {
      expect(divide(10, 3)).toBeCloseTo(3.33);
    });

    test('should return the division of two decimal numbers', () => {
      expect(divide(1.4, 2)).toBeCloseTo(0.7);
    });

    test('should return zero if the first input is zero', () => {
      expect(divide(0, 4)).toBe(0);
    });

    test('should return undefined if the second input is zero', () => {
      expect(divide(5, 0)).toBe(undefined);
    });


    test('should return undefined if the inputs are not numbers', () => {
      expect(divide('1', {})).toBe(undefined);
    });
  });
});
