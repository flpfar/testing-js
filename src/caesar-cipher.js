const caesarCipher = (str, k) => {
  if (typeof str !== 'string' || typeof k !== 'number') return undefined;
  const newStr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      const c = (str[i].charCodeAt(0) + k - 97) % 26;

      newStr[i] = String.fromCharCode(c + 97);
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      const c = (str[i].charCodeAt(0) + k - 65) % 26;

      newStr[i] = String.fromCharCode(c + 65);
    } else newStr[i] = str[i];
  }
  return newStr.join('');
};

export default caesarCipher;
