function countLetters(sentence){
  sentence = sentence.toLowerCase().split(' ').join('').split('');

  var charCounter = {};
  for(i = 0; i < sentence.length; i++){
    if (charCounter.hasOwnProperty(sentence[i])) {
      charCounter[sentence[i]] ++;
    }
    else {
      charCounter[sentence[i]] = 1;
    }
  }

return charCounter;
}

console.log(countLetters('lighthouse in the house'));