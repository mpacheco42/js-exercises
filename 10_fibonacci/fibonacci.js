function fibonacci(number) {

  number = parseInt(number);

  let arr = [1, 1];
  
  let indexA = 0;
  let indexB = 1;
  
  if (number <= 0) {
    return "OOPS"
  } else {
    for (let i = 0; i < 100; i++) {  
      
      let sum = arr[indexA] + arr[indexB];
      
      arr.push(sum);
      
      indexA += 1;
      indexB += 1;
    };
    
    return arr[number - 1];
  };
};

// Do not edit below this line
module.exports = fibonacci;

