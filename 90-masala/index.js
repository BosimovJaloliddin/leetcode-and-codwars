//  leetcode
// 2535. Разница между суммой элементов и суммой цифр массива
var differenceOfSum = function (nums) {
  let res2 = eval(nums.join("+"));
  let res1 = 0;
  nums.map((v) => {
    if (`${v}`.length > 1) {
      Array.from(`${v}`, (val) => {
        res1 += Number(val);
      });
    } else res1 += v;
  });
  return Math.abs(res2 - res1);
};

console.log(differenceOfSum([1, 15, 6, 3]));
