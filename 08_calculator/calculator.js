const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  let a = 0;
  if (numbers === 0) {
    return 0;
  } else {
    for (number of numbers) {
      a += number;
    };
    return a;
  };
};

const multiply = function(numbers) {
  let a = 1;
  let r = 0;
  
  if (numbers === 0) {
    return 0;
  }
  else {
    for (number of numbers) {
      r = a *= number;
    };
  };
  return r;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
  let r = 1;

  for (a; a > 0; a--) {
    r *= a;      
  };
  return r;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
