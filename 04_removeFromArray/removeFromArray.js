const removeFromArray = function(array, ...valuesToRemove) {
  const newArray = array.filter(item => !valuesToRemove.includes(item));
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
