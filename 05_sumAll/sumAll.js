function sumAll(firstNumber, lastNumber) {
  let numbers = [];
  let result = 0;
  let a;

  if (
    typeof(firstNumber) === 'number' &&
    typeof(lastNumber) === 'number'
  ) {

    if (firstNumber < 0 || lastNumber < 0
    ) {
      result = 'ERROR';
      
    } else if (firstNumber < lastNumber) {
  
      for (let n = firstNumber; n <= lastNumber; n++) {
        numbers.push(n);
      };
  
    } else if (lastNumber < firstNumber) {
  
      for (let n = lastNumber; n <= firstNumber; n++) {
        numbers.push(n);
      };
    };
    
  } else {
    result = 'ERROR'
  };

  for (let s = 0; s < numbers.length; s++) {
    result += numbers[s];    
  };

  if (result <= 0) {
    result = 'ERROR'
  };

  return result;
};


// Do not edit below this line
module.exports = sumAll;
