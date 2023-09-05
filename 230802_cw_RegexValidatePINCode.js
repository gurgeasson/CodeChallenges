// Brief //
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// Solution //

function validatePIN (pin) {
    if (isNaN(pin)) {
        return false;
    } else if (pin.includes(".", 0) || pin.includes(" ", 0) || pin.includes("\n", 0) || pin.includes("+", 0) || pin.includes("E", 0)) {
    // the prevuious line got ridiculous pretty fast from the edge cases
    // for a miles better solution see further down
        return false;
    } else if (pin < 0) {
        return false;
    } else if (pin.length !== 4 && pin.length !== 6) {
        return false;
    } else {return true}
  }

console.log(validatePIN("1")); // False
console.log(validatePIN("1.34")); // False
console.log(validatePIN("123")); // False
console.log(validatePIN("-234")); // False
console.log(validatePIN("a234")); // False
console.log(validatePIN("123 ")); // False
console.log(validatePIN("1\n4")); // False
console.log(validatePIN("0000")); // True
console.log(validatePIN("1234")); // True
console.log(validatePIN("123456")); // True

// My Favourite Solution From Others //
// it is a combination of solutions form others

function validatePIN (pin) {
    if (pin.match(/^(\d{4}|\d{6})$/)) {
        // The match() method matches a string against a regular expression,
        // returns an array with the matches,
        // returns null if no match is found.

        // /^(\d{4}|\d{6})$/ is a regular expression
        // from chatGPT:
        // '/' indicates the beginning and end of the expression.
        // '^' Start of line anchor, the pattern that follows should match the beginning of the string.
        // '(' and ')' creates a capturing group, which allows us to group parts of the regular expression together.
        // '\d{4}'
        // '\d' is a shorthand character class for any digit (0-9)
        // and the '{4}' quantifier means "exactly four" of the preceding token (in this case, digits).
        // '|' OR operator
        // '$' end of line anchor
        return true;
    }    
    return false;
  }