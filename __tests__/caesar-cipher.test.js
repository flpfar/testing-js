import caesarCipher from '../src/caesar-cipher';

describe('caesarCipher', () => {
  test('should return the ciphered word when user  input the string in lowercase', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
      'efgfoe uif fbtu xbmm pg uif dbtumf'
    );
  });

  test('should return the ciphered word when user  input the string as mix of upper and lowercase', () => {
    expect(caesarCipher('defend the East Wall of The Castle', 1)).toBe(
      'efgfoe uif Fbtu Xbmm pg Uif Dbtumf'
    );
  });
  test('should return the ciphered word when user  input the string with a number bigger than 26', () => {
    expect(caesarCipher('defend the east wall of the 5astle', 55)).toBe(
      'ghihqg wkh hdvw zdoo ri wkh 5dvwoh'
    );
  });
  test('should return undefined if the first input is not string or second input is not number', () => {
    expect(caesarCipher({}, 55)).toBe(undefined);
    expect(caesarCipher(66, {})).toBe(undefined);
  });
  test('should not change the symbol in the string', () => {
    expect(caesarCipher('abc../', 1)).toBe('bcd../');
  });
});
