const analyze = (arr) => {
  if (
    !Array.isArray(arr)
    || arr.length === 0
    || !arr.every((num) => typeof num === 'number')
  ) { return undefined; }
  const maximum = Math.max(...arr);
  const minimum = Math.min(...arr);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  return {
    average, min: minimum, max: maximum, length: arr.length,
  };
};

export default analyze;
