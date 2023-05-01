// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(
//       moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
//       [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
//     );
//   });
// });
// =======================================================================
// link:https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// 5 kyu

// function moveZeros(arr) {
//   let collector = [];
//   let zero = [];
//   arr.forEach((v) => {
//     v !== 0 ? collector.push(v) : zero.push(v);
//   });
//   return collector.concat(zero);
// }
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// =========================================
function moveZeros(arr) {
  return arr.filter((v) => v !== 0).concat(arr.filter((v) => v === 0));
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
