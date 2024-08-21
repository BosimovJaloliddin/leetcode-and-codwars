// leetcode
// 2677. Chunk Array

// var chunk = function (arr, size) {
//   let res = [];
//   let a = [];
//   arr.forEach((v, i) => {
//     if ((i + 1) % size == 0 || arr.length - 1 === i) {
//       a.push(v);
//       res.push(a);
//       a = [];
//     } else {
//       a.push(v);
//     }
//   });
//   return res;
// };

var chunk = function (arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

console.log(chunk([8, 5, 3, 2, 6], 2));
