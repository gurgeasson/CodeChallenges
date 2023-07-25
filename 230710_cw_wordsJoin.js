// BRIEF //
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example:
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// ASSUMPTIONS //

// For Future Releases //

// SOLUTION //

function smash (words) {
  let sentence = "";
  words.forEach(smashSubFunction);
  function smashSubFunction(value) {
    if (sentence != "") { // check if the first word is concatenated - if yes, insert a space.
      sentence += " " + value;
    } else { // if this is the first word in the sentence, don't use space.
      sentence += value;
    }
  }
  return sentence
};

// my favourite solution from others:
// using words.join(" ")
//
// smash = function (words) {
//     return words.join(" ");
//   };