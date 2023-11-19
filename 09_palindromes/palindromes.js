function palindromes(word) {
  word = word.replace(/[."!, ]/g, "").toLowerCase();
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    return true;
  } else if (word !== reversedWord) {
    return false;
  };
};

// Do not edit below this line
module.exports = palindromes;
