function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

// Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
  result = (celsius * 9/5) + 32;      // 9/5 = 1.8
  return round(result, 1);
};

// Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
  result = (fahrenheit - 32) * 5/9;   // 5/9 = ~0.5
  return round(result, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
