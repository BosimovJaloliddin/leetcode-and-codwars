// leetcode
//2824. Count Pairs Whose Sum is Less than Target

const countPairs = function (nums, target) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j > i && nums[i] + nums[j] < target) {
        console.log(nums[i] + nums[j]);
        res++;
      }
    }
  }
  // nums.forEach((val, idx) => {
  //   nums.forEach((v, i) => {
  //     if (i > idx && nums[idx] + nums[i] < target) {
  //       console.log(nums[idx] + nums[i]);
  //       res++;
  //     }
  //   });
  // });
  return res;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2));
