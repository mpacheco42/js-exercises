/*

Leap years:
- Divisible by four (year % 4 === 0) (||)?
- Divisible by four hundred (year % 400 === 0) (&&)?

- Not divisible by one hundred (year % 100 !== 0)

*/

function leapYears(year) {
  if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) {
    return true;
  } else {
    return false;
  };
};

// Do not edit below this line
module.exports = leapYears;
