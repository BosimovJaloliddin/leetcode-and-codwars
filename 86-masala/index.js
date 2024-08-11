// leetcode
// 2652. Sum Multiples
var sumOfMultiples = function (n) {
  let res = 0;
  Array.from(Array(n + 1).keys(), (v) => {
    if (v && (v % 3 === 0 || v % 7 === 0 || v % 5 === 0)) {
      res += v;
    }
  });
  return res;
};

console.log(sumOfMultiples(10));

// var sumOfMultiples = function (n) {
//   return Array.from(Array(n + 1).keys(), (v) => {
//     if (v && (v % 3 === 0 || v % 7 === 0 || v % 5 === 0)) {
//       return v;
//     }
//   }).reduce((sum, curr) => (curr ? sum + curr : sum), 0);
// };
