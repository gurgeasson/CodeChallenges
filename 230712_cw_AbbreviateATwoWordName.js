// Brief //
// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// Solution //
function abbrevName(name) {
    let nameArr = name.split(" ");
    let Initials = "";
    for (let i = 0; i < 2; i++) {
        if (i > 0) {
            Initials = Initials.concat(".");
        }
    Initials = Initials.concat(nameArr[i].substring(0, 1));
    }
    Initials = Initials.toUpperCase();
    return(Initials);
}

// My Favourite Solution From Others //
// first is easy to read, but not as flexible as the second
// function abbrevName(name){
//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// this I find harder to read, though more flexible than first one.
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }
