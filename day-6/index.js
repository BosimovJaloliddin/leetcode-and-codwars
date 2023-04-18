//masala shartiga link:https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript
// 7 kyu
// function arithmeticSequenceElements(a, d, n) {
//   let res = [];
//   res.push(a);
//   for (let i = 1; i < n; i++) {
//     res.push(res[res.length - 1] + d);
//   }
//   return res.join(", ");
// }

// console.log(arithmeticSequenceElements(1, 2, 4));

// ==================================================
// masala shartiga link:https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// 5 kyu

// function pigIt(str) {
//   res = "";
//   let arr = str.split(" ");
//   arr.forEach((v, i) => {
//     if (v.toUpperCase() == v.toLowerCase()) {
//       res += v;
//     } else if (arr.length - 1 === i) {
//       res += v.slice(1, v.length);
//       res += v.slice(0, 1) + "ay";
//     } else {
//       res += v.slice(1, v.length);
//       res += v.slice(0, 1) + "ay";
//       res += " ";
//     }
//   });
//   return res;
// }

// console.log(pigIt("P latin is cool ?"));

// ==============================================
// masala shartiga link:https:https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
//6 kyu

// function createPhoneNumber(numbers) {
//   let res = "(";
//   numbers.forEach((v, i) => {
//     if (i < 3) {
//       res += v;
//     } else if (i === 3) {
//       res += `) ${v}`;
//     } else if (i < 6) {
//       res += v;
//     } else if (i == 6) {
//       res += `-${v}`;
//     } else {
//       res += v;
//     }
//   });
//   return res;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// ==============================================
// masala shartiga link:https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
// 6 kyu

// function findOutlier(integers) {
//   let ar1 = [];
//   let ar2 = [];
//   integers.forEach((v) => {
//     v % 2 == 0 ? ar1.push(v) : ar2.push(v);
//   });
//   return ar1.length > ar2.length ? ar2[0] : ar1[0];
// }
// console.log(findOutlier([4, 6, 8, 3, 4]));
