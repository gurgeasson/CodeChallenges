// Brief //
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Solution //
function findSmallestInt(inputArray) {
    let smallest = inputArray[0]; // assume first element is the smallest 
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] < smallest) {
            smallest = inputArray[i]; // Update the smallest if a smaller element is found
        }
    }
return smallest;
}

console.log(findSmallestInt([78,56,232,12,8])); // 8
console.log(findSmallestInt([78,56,232,12,18])); // 12
console.log(findSmallestInt([78,56,232,412,228])); // 56
console.log(findSmallestInt([78,56,232,12,0])); // 0
console.log(findSmallestInt([1,56,232,12,8])); // 1

// My Favourite Solution From Others //