//leetcode   https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/
// 2859. Sum of Values at Indices With K Set Bits
const sumIndicesWithKSetBits = function (nums, k) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (j of i.toString(2)) {
      if (j == 1) counter++;
    }
    if (counter == k) res += nums[i];
    counter = 0;
  }
  return res;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
