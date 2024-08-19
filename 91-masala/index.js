// leetcode
// 2006. Count Number of Pairs With Absolute Difference K
var countKDifference = function (nums, k) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) == k && i > j) {
        res++;
      }
    }
  }
  return res;
};
console.log(countKDifference([3, 2, 1, 5, 4], 2));
// var countKDifference = function (nums, k) {
//   let res = 0;
//   nums.forEach((v, i) => {
//     nums.forEach((val, idx) => {
//       if (Math.abs(val - v) == k && i > idx) {
//         res++;
//       }
//     });
//   });
//   return res;
// };
