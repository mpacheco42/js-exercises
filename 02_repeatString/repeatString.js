const repeatString = function(str, num) {
  n = 0;

  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return "";
  } else {
    while (n < num) {
      n++;
      return str.repeat(num);
    };
  };
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
