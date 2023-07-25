// Brief //
// Your task is to make two functions ( max and min, or maximum and minimum, etc.,
// depending on the language ) that receive a list of integers as input,
// and return the largest and lowest number in that list, respectively.

// Examples //
// (Input -> Output)
// [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// [42, 54, 65, 87, 0]             -> min = 0, max = 87
// [5]                             -> min = 5, max = 5

// Notes //
// You may consider that there will not be any empty arrays/vectors.

// Solution //
var min = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (minValue > list[i]) {
      minValue = list[i];
    }
  }
  return minValue;
};

var max = function (list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (maxValue < list[i]) {
      maxValue = list[i];
    }
  }
  return maxValue;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// My Favourite Solution From Others //
var min = function(list){
  list.sort((a, b) => (a - b));
  return list[0];
}

var max = function(list){
  list.sort((a, b) => (b - a));
  return list[0];
}