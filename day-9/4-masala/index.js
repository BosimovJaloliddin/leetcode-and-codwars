// link:https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
// 6 kyu

// function partsSums(ls) {
//   let res = [];
//   ls.map((v, i, arr) => {
//     let sum = 0;
//     arr.forEach((e, idx) => {
//       if (idx >= i) sum += e;
//     });
//     res.push(sum);
//     sum = 0;
//   });
//   res.push(0);
//   return res;
// }
// console.log(
//   partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
// );

// =================================
// let res = [];
// function partsSums(ls) {
//   if (ls.length === 0) {
//     res.push(0);
//   } else {
//     res.push(ls.reduce((sum, cur) => (sum += cur)));
//     ls.shift(0);
//     return partsSums(ls);
//   }
//   return res;
// }
// console.log(partsSums([0, 1, 3, 6, 10]));
