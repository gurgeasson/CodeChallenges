// BRIEF //
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// SOLUTION //

function isEven(n) {
  return n % 2 == 0;
}

function lovefunc(flower1, flower2){
 if (!isEven(flower1) && isEven(flower2)) {
   return true;
 } else if (!isEven(flower2) && isEven(flower1)) {
   return true;
 } else {
   return false;
 }
}

// my favourite solution from others:

// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }

// and

// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1;
// }