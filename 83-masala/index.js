// 3194. Minimum Average of Smallest and Largest Elements
let res = [];
var minimumAverage = function (nums) {
  let s = nums.sort((a, b) => a - b);
  res.push((Number(s.splice(0, 1)) + Number(s.splice(s.length - 1))) / 2);
  if (s.length) {
    return minimumAverage(s);
  } else return Math.min(...res);
  return res;
};

console.log(minimumAverage([6, 10]));
