// Brief //
// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// Solution //
function getSum(...limits) {
    let sortedLimits = limits.sort(function(a, b){return a - b});
    let sum = 0;
    for (let i = sortedLimits[0]; i <= sortedLimits[1]; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(0, -1)); // expexcted output: -1
console.log(getSum(0, 1)); // expexcted output: 1
console.log(getSum(2, 2)); // expexcted output: 2
console.log(getSum(-1, -5)); // expexcted output: -15
console.log(getSum(-120, -455)); // expexcted output: -96600

// My Favourite Solution From Others //

// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
// }