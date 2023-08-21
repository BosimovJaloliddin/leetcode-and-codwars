//  name => Two numbers are positive

// Your job is to write a function, which takes three integers a, b, and c as arguments,
//  and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true;
// twoArePositive(-4, 6, 8) == true;
// twoArePositive(4, -6, 9) == true;
// twoArePositive(-4, 6, 0) == false;
// twoArePositive(4, 6, 10) == false;
// twoArePositive(-14, -3, -4) == false;

//===================================================
// link => https://www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript
// 7 kyu

function twoArePositive(a, b, c) {
  let res = 0;
  [a, b, c].forEach((v) => {
    if (v > 0) res++;
  });
  return res === 2 ? true : false;
}

//==========================================
// function twoArePositive(a, b, c) {
//   return [a, b, c].filter((val) => val > 0).length === 2;
// }
