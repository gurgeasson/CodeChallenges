// description
/*
Counting Sum Pairs

Write a function which takes 2 parameters: an array of whole numbers and an integer X.
The function should look for pairs of numbers in the array which sum to X.
Each array element can only be used in one pair.
The function should return the count of how many such pairs it finds.
You may assume that the array passed to the function has already been sorted in ascending order.
State any assumptions or design choices you have made.

*/

// assumptions
/*
I'll be using JS as choice of programming language
I'll hard code the array and X
I assume array consist of positive integers / aim for success
X is a positive integer / aim for success
*/

// solution
function countingSumPairs(arrayOfIntegers, X) {
    let count = 0;   // initialise a counter to keep track of pairs
    let usedElemets = [];
    for (let i = 0; i < arrayOfIntegers.length; i++){   // iterate through the array one by one
        for (let j = i + 1; j < arrayOfIntegers.length; j++){   // for each element iterate through all remaining elements and test if sum === X
            if (arrayOfIntegers[i] + arrayOfIntegers[j] === X) {   // if sum equals X --->
                // console.log('this works');   // quick test line   
                if (!usedElemets.includes(arrayOfIntegers[j])) {   // check if element has been used before
                    count++;                                       // ---> increment variable count
                }
                usedElemets.push(arrayOfIntegers[j]);   // add element to used list
            };
        }
    }
return (count)   // return the solution
}

// test
console.log(countingSumPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));   // expected answer [4]
console.log(countingSumPairs([-11, -10, -9, -1, 0, 1, 2, 3], -10));   // expected answer [3] - as I had some extra time left, I ran a quick test on negative numbers. it seems to be working.
console.log(countingSumPairs([10, 7, 2, 4, 9, 3, 6, 8, 5, 1], 10));   // expected answer [4] - with some extra time on hand and out of curiosity: unsorted arrays will work too, just as expected.
console.log(countingSumPairs([3, 4, 5, 6], 1));   // expected answer [0]
console.log(countingSumPairs([0, 15, 32, 2000, 15000], 15));   // expected answer [1]
console.log(countingSumPairs([1, 1, 10, 32, 41], 42));   // expected answer [2]



// for future releases
/*
Take in user input
Validate user input
Test code if it can work with floats and negative numbers - done
I feel like there must be significant performance optimisation opportunities
*/