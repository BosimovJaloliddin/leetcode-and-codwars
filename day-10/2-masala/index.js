// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// link:https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
// 4 kyu
array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const snail = function (array) {
  let ar = array.flat(Infinity);
  let res = [];
  let idx = -1;
  let num = array.length;
  if (array.length < 1) return array;
  else if (ar.length === 0) {
    return [];
  } else {
    for (let i = 0; i < num; i++) {
      if (i === num - 1) {
        num % 2 ? res.push((idx += 1)) : res.push((idx -= 1));
      } else if (i % 2 !== 0) {
        for (let j = 0; j < num - i; j++) {
          res.push((idx -= 1));
        }
        for (let k = 0; k < num - i - 1; k++) {
          res.push((idx -= num));
        }
      } else {
        for (let m = 0; m < num - i; m++) {
          res.push((idx += 1));
        }
        for (let n = 0; n < num - i - 1; n++) {
          res.push((idx += num));
        }
      }
    }
    return (sort = res.map((v) => ar[v]));
  }
};

console.log(snail(array));
