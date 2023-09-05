// description
/*
In a language of your choice, using all best practice principles you’re aware of,
could you please provide code that reads a list of 10 numbers ranging between 1 to 100.
Assuming there are 4 duplicates in the list of numbers, the output should remove the duplicates and sort the remaining
numbers in descending order.
Please state any assumptions you’ve made.
*/

// assumprions
/*
My chosen language is JavaScript, reason beaing is that I practiced it the most recently.
I assume that the input will always be integers and they will allways be between 1 to 100 and there is no need to test this.
I assume that "4 duplicates" has no significance other than there might be duplicates and I need to eliminate them.
I will pick my own test cases to see if the program works.
My first test case will be testing the input array [10, 2, 3, 4, 4, 4, 4, 8, 9, 1]
Second test case [80, 30, 50, 40, 20, 60, 20, 50, 30, 100]
*/

// solution
function arraySortAndRemove(messyArray) {
    messyArray = [...new Set(messyArray)];   // Remove duplicates by converting array to a Set then back to an array again.
    return messyArray.sort(function(a, b){return a - b});   // soritng array in descending order. (soritng numbers and not strings using a compare function)
}

// test
console.log(arraySortAndRemove([10, 2, 3, 4, 4, 4, 4, 8, 9, 1]));   // [1, 2, 3, 4, 8, 9, 10]
console.log(arraySortAndRemove([80, 30, 50, 40, 20, 60, 20, 50, 30, 100]));   // [20, 30, 40, 50, 80, 100]

// for future releases
/*
Test input if valid. (integer && 1 <= value <= 100 && length == 10).
Give an account of the duplicate numbers.
*/