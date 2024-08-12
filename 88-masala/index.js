// leetcode
// 2635. Apply Transform Over Each Element in Array

var map = function (arr, fn) {
  return arr.map((v, i) => fn(v, i));
};

console.log(map([1, 2, 3], plusone));

function plusone(n) {
  return n + 1;
}
