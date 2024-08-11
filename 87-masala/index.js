// leetcode
// 1688. Count of Matches in Tournament

var numberOfMatches = function (n) {
  let res = 0;
  let num = n;
  while (num > 1) {
    num % 2
      ? ((res += Math.trunc(num / 2)), (num = Math.trunc(num / 2) + 1))
      : ((res += num / 2), (num = num / 2));
  }
  return res;
};

console.log(numberOfMatches(3));
