// 3099. Harshad Number
// link => https://leetcode.com/problems/harshad-number/description/
// Tugamagan
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let res = 0;
  if (x < 10) {
    res = x;
  } else if (x === 10) {
    res = 1;
  } else
    for (let i = 2; i <= x; i++) {
      if (x % i === 0) {
        res = x / i;
        break;
      } else if (x === i) {
        res = -1;
      }
    }
  return res;
};

console.log(sumOfTheDigitsOfHarshadNumber(12));
