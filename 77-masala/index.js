//3190. Найдите минимальные операции, чтобы сделать все элементы делящимися на три

var minimumOperations = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3) {
      res++;
    }
  }
  return res;
};
