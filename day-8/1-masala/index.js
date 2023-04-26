// masala shartiga link:https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
// 6 kyu
multiplicationTable = function (size) {
  let res = [];
  let count = 1;
  if (size === 1) res.push([1]);
  else {
    for (let i = 1; size >= i; i++) {
      let analiz = i;
      let arr = [];
      res.push(arr);
      for (let j = 0; j < size; j++) {
        arr.push(count);
        count += i;
      }
      count = analiz + 1;
    }
  }
  return res;
};
console.log(multiplicationTable(5));
