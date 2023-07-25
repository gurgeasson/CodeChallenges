// Brief //
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// Solution //
const reverseSeq = n => {
    let revSeq = []
    for (let i = n; i > 0; i--) {
        revSeq.push(i);
    }
    return revSeq;
  };

  console.log(reverseSeq(10))
// My Favourite Solution From Others //