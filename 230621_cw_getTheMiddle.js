// brief
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
// Input: A word (string) of length 0 < str < 1000
// Output: The middle character(s) of the word represented as a string.

// assumptions

// for future releases
// test if string length is between 1 and 1000, else return errorfunction getMiddle(s)

{
  let length = s.length;
  if (((length % 2)/2) == 0) { // if even, extract the middle two characters with .substr(start, length) and return
    return s.substr(length/2-1,2);
  }
  else {
    return s.substr(length/2,1); // else, must be odd, so just the one in the middle and return
  }
}

// my favourite solution from others:
// using .slice(start, end)
//
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }