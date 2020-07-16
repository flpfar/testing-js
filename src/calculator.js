const calculator = {
  add: (a, b) => {
    if(typeof(a) !== 'number' || typeof(b) !== 'number') {
      return undefined;
    }
    return a + b;
  },
  subtract: (a, b) => {
    if(typeof(a) !== 'number' || typeof(b) !== 'number') {
      return undefined;
    }
    return a - b;
  },
  multiply: (a, b) => {
    if(typeof(a) !== 'number' || typeof(b) !== 'number') {
      return undefined;
    }
    return a * b;
  },
  divide: (a, b) => {
    if(typeof(a) !== 'number' || typeof(b) !== 'number' || b === 0) {
      return undefined;
    }
    return a / b;
  },
}

export default calculator;

