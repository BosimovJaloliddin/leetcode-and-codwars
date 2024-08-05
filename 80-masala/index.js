// leetcode  https://leetcode.com/problems/filter-elements-from-array/submissions/1345032164/

// 2634. Filter Elements from Array

var filter = function (arr, fn) {
  return arr.filter((v, i) => fn(v, i));
};

console.log(
  filter([-2, -1, 0, 1, 2], function plusOne(n) {
    return n + 1;
  })
);
