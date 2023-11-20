function findTheOldest(peopleArray) {
  let ages = [];
  
  let index = 0;

  function getAges(peopleInfo) {

    peopleInfo.forEach(person => {
      if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
      };
    });

    for (let n = 0; n < 3; n++) {
      ages.push(peopleInfo[index].yearOfDeath - peopleInfo[index].yearOfBirth);
      index++
    };

    return ages;
  };

  getAges(peopleArray)

  const highestAge = Math.max(...ages) // 957

  index = 0;

  let result;

  for (let n = 0; n < 3; n++) {

    if (ages[index] === highestAge) {
      result = index;
    };

    index++;
  };

  let f = peopleArray[result];
  return f;
};

// Do not edit below this line
module.exports = findTheOldest;
