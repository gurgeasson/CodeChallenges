// Brief //
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.


// Solution //
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r") {
        name = name + " plays banjo";
    } else {
        name = name + " does not play banjo";
    }
    return name;
  }

console.log(areYouPlayingBanjo("Adam") + "\n" + areYouPlayingBanjo("Paul") + "\n" + areYouPlayingBanjo("Ringo") + "\n" + areYouPlayingBanjo("bravo") + "\n" + areYouPlayingBanjo("rolf"));


// My Favourite Solution From Others //
// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }