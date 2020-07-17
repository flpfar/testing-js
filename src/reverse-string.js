const reverseString = (input) => {
  if (typeof input !== 'string') {
    return undefined;
  }
  return input.split('').reverse().join('');
};

export default reverseString;