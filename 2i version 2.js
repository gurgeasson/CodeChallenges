// description
/*
In a language of your choice, using all best practice principles you're aware of,
could you please provide code that iterates in multiples of A until X,
then in multiples of A + 1 until 2X,
then multiples of A + 2 until 3X.
*/

// assumprions
/*
I'll be programming in JS
I assume I can pick values of A and X
A and X are hard coded
A and X are integers
A = 1
X = 10
*/

// solution
function multiplier(A, X){
    let arrayAuntilX = [];
    let arrayAplus1until2timesX = [];
    let arrayAplus2until3timesX = [];

    for (let i = 1; A * i <= X; i++){
        arrayAuntilX.push(A * i);
    }
    for (let i = 1; (A + 1) * i <= X * 2; i++) {
        arrayAplus1until2timesX.push((A + 1) * i);
    }
    for (let i = 1; (A + 2) * i <= X * 3; i++) {
        arrayAplus2until3timesX.push((A + 2) * i);
    }

    console.log(arrayAuntilX);
    console.log(arrayAplus1until2timesX);
    console.log(arrayAplus2until3timesX);
}

// test
multiplier(1, 10);   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// for future releases
/*
User input for A and X
Input validation.
*/