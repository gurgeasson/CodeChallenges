// Brief //
// In this kata you will create a function that takes a list of non-negative integers and
// strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// Solution //
function filter_list(inputList) {
    let sortedList = [];
    for (let i = 0; i < inputList.length; i++) {
        if (typeof inputList[i] === 'number') {
            sortedList.push(inputList[i]);
        }
    }
    return sortedList;
  }

console.log(filter_list([1,2,'a','b'])); // [1,2]
console.log(filter_list([1,'a','b',0,15])); // [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])); // [1,2,123]

// My Favourite Solution From Others //
// I changed the variable names, as they ware just a single character, not descriptive
function filter_list(inputList) {
    return inputList.filter(value => typeof value === "number")
   }

