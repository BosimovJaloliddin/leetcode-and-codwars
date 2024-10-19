var twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      res.push(i, i + 1);
    }
  }
  return res;
};

console.log(twoSum([3, 3], 6));
