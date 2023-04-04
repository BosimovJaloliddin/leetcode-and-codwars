// var cubeChecker = function (volume, side) {
//   if (side ** 3 == volume && side > 0 && volume > 0) {
//     return true;
//   } else return false;
// };
// console.log(cubeChecker(-27, -3));

// =========================================================
// masala sharti. link: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

// function solution(nums) {
//   if (nums == null) {
//     return [];
//   } else {
//     return nums.sort((a, b) => a - b);
//   }
// }
// console.log(solution(null));

// ==========================================================
// 6 kyu
// masala sharti. link:https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// function likes(names) {
//   if (names.length == 0) {
//     return `no one likes this`;
//   } else if (names.length == 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length == 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length == 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }
// console.log(likes([]));

// =======================================================
// masala sharti. link:https://www.codewars.com/kata/596fba44963025c878000039/train/javascript
// 8 kyu

// function contamination(text, char) {
//   if (text == "" || char == "") {
//     return ``;
//   } else {
//     let res = "";
//     for (let i = 1; text.length >= i; i++) {
//       res += char;
//     }
//     return res;
//   }
// }

// console.log(contamination("wd", ""));

// ===========================================================
// masala sharti. link:https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript
// 6 kyu

// function parse(data) {
//   let ar = [];
//   let sum = 0;
//   Array.from(data, (v) => {
//     console.log(v);
//     if (v === "i") {
//       sum++;
//     } else if (v === "d") {
//       sum--;
//     } else if (v === "s") {
//       sum = sum ** 2;
//     } else if (v === "o") {
//       ar.push(sum);
//     }
//   });
//   return ar;
// }

// parse("iiisdoso");

// ======================================================
// masala sharti. link:https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript

// function betweenExtremes(numbers) {
//   let sortNum = numbers.sort((a, b) => a - b);
//   return sortNum[sortNum.length - 1] - sortNum[0];
// }
// console.log(betweenExtremes([2, 34, 56, 42, 2, 1]));

// =======================================================
// masala sharti. link:https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

// function sumEvenNumbers(input) {
//   let sum = 0;
//   input.forEach((v) => {
//     if (v % 2 == 0) {
//       sum += v;
//     }
//   });
//   return sum;
// }

// console.log(sumEvenNumbers([4, 4, 5, 6]));

// ========================================================
// masala sharti. link:https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
// 6 kyu

// function sumDigPow(a, b) {
//   let ar = [];
//   for (let i = a; b >= i; i++) {
//     let str = i.toString();
//     if (str.length < 2) {
//       ar.push(i);
//     } else {
//       let sum = 0;
//       for (let j = 0; str.length > j; j++) {
//         sum += str[j] ** (j + 1);
//       }
//       if (sum == +str) {
//         ar.push(sum);
//       }
//       sum = 0;
//     }
//   }
//   return ar;
// }
// console.log(sumDigPow(363, 2427));

// ================================================================
// masala sharti. link:https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// 7 kyu

// function oddOrEven(array) {
//   let sum = 0;
//   array.forEach((v) => (sum += v));
//   if (Math.abs(sum) % 2 == 0) return `even`;
//   else return `odd`;
// }

// console.log(oddOrEven([0, -9, -8]));

// ===============================================================
