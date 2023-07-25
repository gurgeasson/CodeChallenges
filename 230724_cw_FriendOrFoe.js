// Brief //
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// Solution //
function friend(list){
    let friends = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].length === 4) {
            friends.push(list[i]);
        }
    }
    return friends
  }

console.log(friend(["Ryan", "Jimmy", "123", "4", "1234", "Cool Man"]))

// My Favourite Solution From Others //
function friend(friends){
    return friends.filter(n => n.length === 4)
  }