let filteredArray = [];

function getTheTitles(array) {
  let a = 0;

  for (let i = 0; i < array.length; i++) {  
    filteredArray.push(array[a].title);
    a++;
  };

  return filteredArray;
};

// Do not edit below this line
module.exports = getTheTitles;
