// link => https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8/train/javascript
// 5 kyu
// Vaqtdan qaytdi.

function arrayDiffVeryFast(a, b) {
  return a.filter((v) => !b.includes(v));
}

console.log(arrayDiffVeryFast([1, 2, 2, 2, 3, 5, 5, 1, 2, 4, 5, 1], [2, 1, 5]));
