// Brief //
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Solution //
function solution(str, ending){
    console.log(0 - ending.length);
    console.log(str.slice(0 - ending.length));
    if (ending.length === 0) { // I don't agree with this, but the KATA would test for empty string as ending and expects it to be true...
        return true;
    } else if (ending === str.slice(0 - ending.length)) { // return last n character of a string and compare it to the variable ending
        return true;
    } else { return false }
  }

console.log(solution('abcde', 'cde')); // expected output: true
console.log(solution('abcde', 'abc')); // expected output: false
console.log(solution('abc', '')); // expected output: true

// My Favourite Solution From Others //
const solution = (str, ending) => str.endsWith(ending);