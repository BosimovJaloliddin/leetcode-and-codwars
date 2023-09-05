// link => https://www.codewars.com/kata/5945f0c207693bc53100006b/train/javascript
// 5 kyu
// vaqtdan qaytgan

function countContiguousDistinct(arr, k) {
  let res = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let newArr = [];
    arr.slice(i, i + k).forEach((v) => {
      if (!newArr.includes(v)) {
        newArr.push(v);
      }
    });
    res.push(newArr.length);
  }
  return res;
}
console.log(countContiguousDistinct([1, 2, 1, 3, 4, 2, 3, 3], 2));
