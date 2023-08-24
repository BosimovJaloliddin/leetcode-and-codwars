// name => Convert PascalCase string into snake_case

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples

// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

//========================================================================
// link => https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
//  5 kyu

function toUnderscore(string) {
  return Array.from(`${string}`, (v, i) => {
    if (i === 0) {
      return v.toLowerCase();
    } else if (v !== v.toLowerCase()) {
      return `_${v.toLowerCase()}`;
    } else return v;
  }).join("");
}

console.log(toUnderscore(1));

//======================================================
// var toUnderscore;

// toUnderscore = function (string) {
//   return string
//     .toString()
//     .split(/(?=[A-Z])/)
//     .join("_")
//     .toLowerCase();
// };
