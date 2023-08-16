// name => The old switcheroo 2

// This is a follow up from my kata The old switcheroo

// Write the function :

// function encode(str)
// that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

// encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
// encode('codewars') == '315452311819'
// encode('abc-#@5') == '123-#@5'
// String are case sensitive.

// Bonus point if you don't use toLowerCase()

// ==================================================
// link =>https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript
// 7 kyu
// name => The old switcheroo 2

function encode(str) {
  return Array.from(str, (v) => {
    if (v.charCodeAt() >= 65 && v.charCodeAt() <= 90) {
      return v.charCodeAt() - 64;
    } else if (v.charCodeAt() >= 97 && v.charCodeAt() <= 122) {
      return v.charCodeAt() - 96;
    } else return v;
  }).join("");
}
console.log(encode("abc"));
