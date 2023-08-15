// name => Not very secure

// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

//========================================================
// 5 kyu
// name => Not very secure

function alphanumeric(string) {
  return string === ""
    ? false
    : Array.from(string, (v) => {
        if (
          (v.charCodeAt() > 64 && v.charCodeAt() < 91) ||
          (v.charCodeAt() > 96 && v.charCodeAt() < 123) ||
          (v.charCodeAt() > 47 && v.charCodeAt() < 58)
        ) {
          return v;
        }
      }).join("") === string;
}

console.log(alphanumeric(""));

// =================================================
// let alphanumeric = (s) => /^[a-z\d]+$/i.test(s);
